import React, {Component} from 'react'
import {
  Card,
  Modal,
  Select,
  Input,
  Button,
  Icon,
  Table,
  message
} from 'antd'
import LinkButton from "../../components/link-button/index"
import {reqDeleteClickNum, reqClickNums, reqAddOrUpdateClickNum} from "../../api/index"
import ClickNumForm from './click-form'

const Option = Select.Option

export default class ClickNum extends Component {

  state = {
    click_nums: [], 
    isShow: false, 
    searchType: 'pageid', 
  }

  initColumns = () => {
    this.columns = [
      {
        title: '页面编号',
        dataIndex: 'pageCode'
      },
      {
        title: '页面地址',
        dataIndex: 'url'
      },
      {
        title: '点击位置',
        dataIndex: 'clickPosition'
      },
      {
        title: '页面内容',
        dataIndex: 'pageContent'
      },
      {
        title: '操作',
        render: (click_num) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(click_num)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteClickNum(click_num)}>删除</LinkButton>
          </span>
        ),
        width: 125
      },
    ]
  }
  showAdd = () => {
    this.click_num = null 
    this.setState({isShow: true})
  }

  showUpdate = (click_num) => {
    this.click_num = click_num 
    this.setState({
      isShow: true
    })
  }

  deleteClickNum = (click_num) => {
    Modal.confirm({
      title: `确认删除这条记录吗?`,
      onOk: async () => {
        const result = await reqDeleteClickNum(click_num.id)
        // if(result.status===200) {
        message.success('删除点击量成功!')
        this.getClickNums()
        // }
      }
    })
  }

  addOrUpdateClickNum = async () => {
    this.setState({isShow: false})    
    const click_num = this.form.getFieldsValue()
    this.form.resetFields()    
    if (this.click_num) {
      click_num.id = this.click_num.id
    }    
    const result = await reqAddOrUpdateClickNum(click_num)    
    // if(result.status===200) {
      message.success(`${this.click_num ? '修改' : '添加'}点击量成功`)
      this.getClickNums()
    // }
  }
  getClickNums = async () => {
    const result = await reqClickNums()
    const click_nums = result
    this.setState({
      click_nums
    })
  }

  componentWillMount () {
    this.initColumns()
  }

  componentDidMount () {
    this.getClickNums()
  }

  render() {

    const {click_nums, isShow, searchType, searchName} = this.state
    const click_num = this.click_num || {}
    const title = (
      <span>
        <Select
          value= {searchType}
          style={{width: 150}}
          onChange={value => this.setState({searchType:value})}
        >
          <Option value='pageid'>按页面编号搜索</Option>
        </Select>
        <Input
          placeholder='关键字'
          style={{width: 150, margin: '0 15px'}}
          value={searchName}
          onChange={event => this.setState({searchName:event.target.value})}
        />
        <Button type='primary'>搜索</Button>
      </span>
    )

    const extra = (
      <Button type='primary' onClick={this.showAdd}>
        <Icon type='plus' />
        添加点击量
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey='id'
          dataSource={click_nums}
          columns={this.columns}
          pagination={{defaultPageSize: 5}}
        />

        <Modal
          title={click_num.id ? '修改点击量' : '添加点击量'}
          visible={isShow}
          onOk={this.addOrUpdateClickNum}
          onCancel={() => {
            this.form.resetFields()
            this.setState({isShow: false})
          }}
        >
          <ClickNumForm
            setForm={form => this.form = form}
            click_num={click_num}
          />
        </Modal>
      </Card>
    )
  }
}