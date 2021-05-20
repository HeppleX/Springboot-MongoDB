import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item
const { TextArea } = Input
class GoodsForm extends PureComponent {
  static propTypes = {
    setForm: PropTypes.func.isRequired, 
    goods: PropTypes.object
  }
  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const {goods} = this.props
    const { getFieldDecorator } = this.props.form    
    const formItemLayout = {
      labelCol: { span: 4 },  
      wrapperCol: { span: 15 }, 
    }
    return (
      <Form {...formItemLayout}>
        <Item label='基本信息'>
          {
            getFieldDecorator('goodsInfo', {
              initialValue: goods.goodsInfo,
              rules: [
                {required: true, message: '必须输入基本信息'}
              ]
            })(
              <TextArea placeholder="请输入基本消息" autosize={{ minRows: 2, maxRows: 6 }} />
            )
          }
        </Item>
        <Item label='规格信息'>
          {
            getFieldDecorator('specificationsInfo', {
              initialValue: goods.specificationsInfo,
            })(
              <TextArea placeholder="请输入详细消息" autosize={{ minRows: 2, maxRows: 6 }} />
            )
          }
        </Item>
        <Item label='价格'>
          {
            getFieldDecorator('price', {
              initialValue: goods.price,
              rules: [
                {required: true, message: '必须输入价格'}
              ]
            })(
              <Input placeholder='请输入价格'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(GoodsForm)