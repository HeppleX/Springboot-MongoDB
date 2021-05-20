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
import {reqDeleteUser, reqUsers, reqAddOrUpdateUser} from "../../api/index"
import UserForm from './user-form'

const Option = Select.Option

export default class User extends Component {

  state = {
    users: [], 
    isShow: false, 
    searchType: 'username', 
  }

  initColumns = () => {
    this.columns = [
      {
        title: '用户ID',
        dataIndex: 'id',
        width: 150
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 150
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 70
      },
      {
        title: '年龄',
        dataIndex: 'age',
        width: 80
      },
      {
        title: '手机',
        dataIndex: 'phone',
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '操作',
        render: (user) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(user)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteUser(user)}>删除</LinkButton>
          </span>
        ),
        width: 125
      },
    ]
  }
  showAdd = () => {
    this.user = null 
    this.setState({isShow: true})
  }

  showUpdate = (user) => {
    this.user = user 
    this.setState({
      isShow: true
    })
  }

  deleteUser = (user) => {
    Modal.confirm({
      title: `确认删除用户${user.userName}吗?`,
      onOk: async () => {
        const result = await reqDeleteUser(user.id)
        // if(result.status===200) {
          message.success('删除用户成功!')
          this.getUsers()
        // }
      }
    })
  }

  addOrUpdateUser = async () => {
    this.setState({isShow: false})    
    const user = this.form.getFieldsValue()
    this.form.resetFields()    
    if (this.user) {
      user.id = this.user.id
    }    
    const result = await reqAddOrUpdateUser(user)    
    // if(result.status===200) {
    message.success(`${this.user ? '修改' : '添加'}用户成功`)
    this.getUsers()
    // }
  }
  getUsers = async () => {
    const result = await reqUsers()
    const users = result
    this.setState({
      users
    })
  }

  componentWillMount () {
    this.initColumns()
  }

  componentDidMount () {
    this.getUsers()
  }

  render() {

    const {users, isShow, searchType, searchName} = this.state
    const user = this.user || {}
    const title = (
      <span>
        <Select
          value= {searchType}
          style={{width: 150}}
          onChange={value => this.setState({searchType:value})}
        >
          <Option value='username'>按用户名搜索</Option>
          <Option value='id'>按用户ID搜索</Option>
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
        添加用户
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey='id'
          dataSource={users}
          columns={this.columns}
          pagination={{defaultPageSize: 5}}
        />

        <Modal
          title={user.id ? '修改用户' : '添加用户'}
          visible={isShow}
          onOk={this.addOrUpdateUser}
          onCancel={() => {
            this.form.resetFields()
            this.setState({isShow: false})
          }}
        >
          <UserForm
            setForm={form => this.form = form}
            user={user}
          />
        </Modal>
      </Card>
    )
  }
}