import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

class OrderForm extends PureComponent {
  static propTypes = {
    setForm: PropTypes.func.isRequired, 
    order: PropTypes.object
  }
  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const {order} = this.props
    const { getFieldDecorator } = this.props.form    
    const formItemLayout = {
      labelCol: { span: 4 },  
      wrapperCol: { span: 15 }, 
    }
    return (
      <Form {...formItemLayout}>
        <Item label='商品ID'>
          {
            getFieldDecorator('goodsList', {
              initialValue: order.goodsList,
              rules: [
                {required: true, message: '必须输入商品ID'}
              ]
            })(
              <Input placeholder='请输入商品ID'/>
            )
          }
        </Item>
        <Item label='用户名'>
          {
            getFieldDecorator('userName', {
              initialValue: order.userName,
              rules: [
                {required: true, message: '必须输入用户名'}
              ]
            })(
              <Input placeholder='请输入用户名'/>
            )
          }
        </Item>
        <Item label='数量'>
          {
            getFieldDecorator('num', {
              initialValue: order.num,
              rules: [
                {required: true, message: '必须输入购买数量'}
              ]
            })(
              <Input placeholder='请输入购买数量'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(OrderForm)