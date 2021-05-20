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
import {formateDate} from "../../utils/dateUtils"
import LinkButton from "../../components/link-button/index"
import {reqDeleteOrder, reqOrders, reqAddOrUpdateOrder} from "../../api/index"
import OrderForm from './order-form'

const Option = Select.Option

export default class Order extends Component {

  state = {
    orders: [], 
    isShow: false, 
    searchType: 'orderid', 
  }

  initColumns = () => {
    this.columns = [
      {
        title: '订单ID',
        dataIndex: 'id'
      },
      {
        title: '商品ID',
        dataIndex: 'goodsList'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '数量',
        dataIndex: 'num',
        width: 80
      },
      {
        title: '下单时间',
        dataIndex: 'createdTime',
        render: formateDate
      },
      {
        title: '操作',
        render: (order) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(order)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteOrder(order)}>删除</LinkButton>
          </span>
        ),
        width: 125
      },
    ]
  }
  showAdd = () => {
    this.order = null 
    this.setState({isShow: true})
  }

  showUpdate = (order) => {
    this.order = order 
    this.setState({
      isShow: true
    })
  }

  deleteOrder = (order) => {
    Modal.confirm({
      title: `确认删除${order.userName}的订单吗?`,
      onOk: async () => {
        const result = await reqDeleteOrder(order.id)
        // if(result.status===200) {
          message.success('删除订单成功!')
          this.getOrders()
        // }
      }
    })
  }

  addOrUpdateOrder = async () => {
    this.setState({isShow: false})    
    const order = this.form.getFieldsValue()
    this.form.resetFields()    
    if (this.order) {
      order.id = this.order.id
    }    
    const result = await reqAddOrUpdateOrder(order)    
    // if(result.status===200) {
      message.success(`${this.order ? '修改' : '添加'}订单成功`)
      this.getOrders()
    // }
  }
  getOrders = async () => {
    const result = await reqOrders()
    const orders = result
    this.setState({
      orders
    })
  }

  componentWillMount () {
    this.initColumns()
  }

  componentDidMount () {
    this.getOrders()
  }

  render() {

    const {orders, isShow, searchType, searchName} = this.state
    const order = this.order || {}
    const title = (
      <span>
        <Select
          value= {searchType}
          style={{width: 150}}
          onChange={value => this.setState({searchType:value})}
        >
          <Option value='orderid'>按订单ID搜索</Option>
          <Option value='userid'>按用户ID搜索</Option>
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
        添加订单
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey='id'
          dataSource={orders}
          columns={this.columns}
          pagination={{defaultPageSize: 5}}
        />

        <Modal
          title={order.id ? '修改订单' : '添加订单'}
          visible={isShow}
          onOk={this.addOrUpdateOrder}
          onCancel={() => {
            this.form.resetFields()
            this.setState({isShow: false})
          }}
        >
          <OrderForm
            setForm={form => this.form = form}
            order={order}
          />
        </Modal>
      </Card>
    )
  }
}