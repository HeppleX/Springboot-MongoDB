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
import {reqDeleteProduct, reqProducts, reqAddOrUpdateProduct} from "../../api/index"
import GoodsForm from './goods-form'

const Option = Select.Option

export default class Goods extends Component {

  state = {
    products: [], 
    isShow: false, 
    searchType: 'id', 
  }

  initColumns = () => {
    this.columns = [
      {
        title: '商品ID',
        dataIndex: 'id'
      },
      {
        title: '基本信息',
        dataIndex: 'goodsInfo'
      },
      {
        title: '规格信息',
        dataIndex: 'specificationsInfo',
      },
      {
        title: '价格',
        dataIndex: 'price'
      },
      {
        title: '操作',
        render: (goods) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(goods)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteGoods(goods)}>删除</LinkButton>
          </span>
        ),
        width: 125
      },
    ]
  }
  showAdd = () => {
    this.goods = null 
    this.setState({isShow: true})
  }

  showUpdate = (goods) => {
    this.goods = goods 
    this.setState({
      isShow: true
    })
  }

  deleteGoods = (goods) => {
    Modal.confirm({
      title: `确认删除这个商品吗?`,
      onOk: async () => {
        const result = await reqDeleteProduct(goods.id)
        // if(result.status===200) {
        message.success('删除商品成功!')
        this.getGoods()
        // }
      }
    })
  }

  addOrUpdateGoods = async () => {
    this.setState({isShow: false})    
    const goods = this.form.getFieldsValue()
    this.form.resetFields()    
    if (this.goods) {
      goods.id = this.goods.id
    }    
    const result = await reqAddOrUpdateProduct(goods)    
    // if(result.status===200) {
    message.success(`${this.goods ? '修改' : '添加'}商品成功`)
    this.getGoods()
    // }
  }
  getGoods = async () => {
    const result = await reqProducts()
    const products = result
    this.setState({
      products
    })
  }

  componentWillMount () {
    this.initColumns()
  }

  componentDidMount () {
    this.getGoods()
  }

  render() {

    const {products, isShow, searchType, searchName} = this.state
    const goods = this.goods || {}
    const title = (
      <span>
        <Select
          value= {searchType}
          style={{width: 150}}
          onChange={value => this.setState({searchType:value})}
        >
          <Option value='id'>按商品ID搜索</Option>
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
        添加商品
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey='id'
          dataSource={products}
          columns={this.columns}
          pagination={{defaultPageSize: 5}}
        />

        <Modal
          title={goods.id ? '修改商品' : '添加商品'}
          visible={isShow}
          onOk={this.addOrUpdateGoods}
          onCancel={() => {
            this.form.resetFields()
            this.setState({isShow: false})
          }}
        >
          <GoodsForm
            setForm={form => this.form = form}
            goods={goods}
          />
        </Modal>
      </Card>
    )
  }
}