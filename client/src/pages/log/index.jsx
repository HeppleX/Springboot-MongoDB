import React, {Component} from 'react'
import {
  Card,
  Modal,
  Select,
  Input,
  Button,
  Icon,
  Table,
  message,
  Tooltip
} from 'antd'
import {formateDate} from "../../utils/dateUtils"
import LinkButton from "../../components/link-button/index"
import {reqDeleteLog, reqLogs, reqAddOrUpdateLog} from "../../api/index"
import LogForm from './log-form'

const Option = Select.Option

export default class Log extends Component {

  state = {
    logs: [], 
    isShow: false, 
    searchType: 'logid',
    text: ""
  }

  initColumns = () => {
    this.columns = [
      {
        title: '日志ID',
        dataIndex: 'id'
      },
      {
        title: '日志级别',
        dataIndex: 'level',
        width: 100
      },
      {
        title: '堆栈信息',
        dataIndex: 'stackTrace',
        onCell: () => {
          return {
            style: {
              maxWidth: 200,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow:'ellipsis',
              cursor:'pointer'
            }
          }
        },
        render: (text) => <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
      },
      {
        title: '日志消息',
        dataIndex: 'message',
      },
      {
        title: '创建时间',
        dataIndex: 'createdTime',
        render: formateDate
      },
      {
        title: '操作',
        render: (log) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(log)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteLog(log)}>删除</LinkButton>
          </span>
        ),
        width: 125
      },
    ]
  }
  showAdd = () => {
    this.log = null 
    this.setState({isShow: true})
  }

  showUpdate = (log) => {
    this.log = log 
    this.setState({
      isShow: true
    })
  }

  deleteLog = (log) => {
    Modal.confirm({
      title: `确认删除日志${log.logname}吗?`,
      onOk: async () => {
        const result = await reqDeleteLog(log.id)
        // if(result.status===200) {
        message.success('删除日志成功!')
        this.getLogs()
        // }
      }
    })
  }

  addOrUpdateLog = async () => {
    this.setState({isShow: false})    
    const log = this.form.getFieldsValue()
    this.form.resetFields()    
    if (this.log) {
      log.id = this.log.id
      log.stackTrace = this.state.text
    }    
    const result = await reqAddOrUpdateLog(log)    
    // if(result.status===200) {
      message.success(`${this.log ? '修改' : '添加'}日志成功`)
      this.getLogs()
    // }
  }
  getLogs = async () => {
    const result = await reqLogs()
    const logs = result
    this.setState({
      logs
    })
  }

  changeDetail = (detail) => {
    const newtext = detail.slice(4,-7)
    this.setState({
      text: newtext
    })
  }


  componentWillMount () {
    this.initColumns()
  }

  componentDidMount () {
    this.getLogs()
  }

  render() {

    const {logs, isShow, searchType, searchName} = this.state
    const log = this.log || {}
    const title = (
      <span>
        <Select
          value= {searchType}
          style={{width: 150}}
          onChange={value => this.setState({searchType:value})}
        >
          <Option value='logid'>按日志ID搜索</Option>
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
        添加日志
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey='id'
          dataSource={logs}
          columns={this.columns}
          pagination={{defaultPageSize: 5}}
        />

        <Modal
          title={log.id ? '修改日志' : '添加日志'}
          visible={isShow}
          onOk={this.addOrUpdateLog}
          onCancel={() => {
            this.form.resetFields()
            this.setState({isShow: false})
          }}
        >
          <LogForm
            setForm={form => this.form = form}
            log={log}
            changeDetail={this.changeDetail}
          />
        </Modal>
      </Card>
    )
  }
}