import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item
const { TextArea } = Input 

class ClickNumForm extends PureComponent {
  static propTypes = {
    setForm: PropTypes.func.isRequired, 
    click_num: PropTypes.object
  }
  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const {click_num} = this.props
    const { getFieldDecorator } = this.props.form    
    const formItemLayout = {
      labelCol: { span: 4 },  
      wrapperCol: { span: 15 }, 
    }
    return (
      <Form {...formItemLayout}>
        <Item label='页面编号'>
          {
            getFieldDecorator('pageCode', {
              initialValue: click_num.pageCode,
              rules: [
                {required: true, message: '必须输入页面编号'}
              ]
            })(
              <Input placeholder='请输入页面编号'/>
            )
          }
        </Item>
        <Item label='页面地址'>
          {
            getFieldDecorator('url', {
              initialValue: click_num.url,
              rules: [
                {required: true, message: '必须输入页面地址'}
              ]
            })(
              <Input placeholder='请输入页面地址'/>
            )
          }
        </Item>
        <Item label='点击位置'>
          {
            getFieldDecorator('clickPosition', {
              initialValue: click_num.clickPosition,
              rules: [
                {required: true, message: '必须输入点击位置'}
              ]
            })(
              <Input placeholder='请输入点击位置'/>
            )
          }
        </Item>
        <Item label='页面内容'>
          {
            getFieldDecorator('pageContent', {
              initialValue: click_num.pageContent,
              rules: [
                {required: true, message: '必须输入页面内容'}
              ]
            })(
              (<TextArea placeholder="请输入页面" autosize={{ minRows: 2, maxRows: 6 }} />)
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(ClickNumForm)