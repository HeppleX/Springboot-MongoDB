import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input,
} from 'antd'

const Item = Form.Item
const { TextArea } = Input

class UserForm extends PureComponent {
  static propTypes = {
    setForm: PropTypes.func.isRequired, 
    user: PropTypes.object
  }
  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const {user} = this.props
    const { getFieldDecorator } = this.props.form    
    const formItemLayout = {
      labelCol: { span: 4 },  
      wrapperCol: { span: 15 }, 
    }
    return (
      <Form {...formItemLayout}>
        <Item label='用户名'>
          {
            getFieldDecorator('userName', {
              initialValue: user.userName,
              rules: [
                {required: true, message: '必须输入用户名'}
              ]
            })(
              <Input placeholder='请输入用户名'/>
            )
          }
        </Item>
        <Item label='性别'>
          {
            getFieldDecorator('sex', {
              initialValue: user.sex,
              rules: [
                {required: true, message: '必须输入性别'}
              ]
            })(
              <Input placeholder='请输入性别'/>
            )
          }
        </Item>
        <Item label='年龄'>
          {
            getFieldDecorator('age', {
              initialValue: user.age,
              rules: [
                {required: true, message: '必须输入年龄'}
              ]
            })(
              <Input placeholder='请输入年龄'/>
            )
          }
        </Item>
        <Item label='手机'>
          {
            getFieldDecorator('phone', {
              initialValue: user.phone,
              rules: [
                {required: true, message: '必须输入手机号'}
              ]
            })(
              <Input placeholder='请输入手机号'/>
            )
          }
        </Item>
        <Item label="地址">
            {
              getFieldDecorator('address', {
                initialValue: user.address,
                rules: [
                  {required: true, message: '必须输入地址'}
                ]
              })(<TextArea placeholder="请输入地址" autosize={{ minRows: 2, maxRows: 6 }} />)
            }
          </Item>
      </Form>
    )
  }
}

export default Form.create()(UserForm)