import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'
import RichTextEditor from '../../utils/rich-text-editor'

const Item = Form.Item
const { TextArea } = Input

class LogForm extends PureComponent {
  static propTypes = {
    setForm: PropTypes.func.isRequired, 
    log: PropTypes.object
  }
  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const {log} = this.props
    const { getFieldDecorator } = this.props.form    
    const formItemLayout = {
      labelCol: { span: 4 },  
      wrapperCol: { span: 15 }, 
    }
    return (
      <Form {...formItemLayout}>
        <Item label='日志级别'>
          {
            getFieldDecorator('level', {
              initialValue: log.level,
              rules: [
                {required: true, message: '必须输入日志级别'}
              ]
            })(
              <Input placeholder='请输入日志级别'/>
            )
          }
        </Item>
        <Item label="堆栈信息" labelCol={{span: 4}} wrapperCol={{span: 25}}>
        {
            getFieldDecorator('stackTrace', {
              initialValue: log.stackTrace,
              rules: [
                {required: true, message: '必须输入堆栈信息'}
              ]
            })(
              <RichTextEditor detail={log.stackTrace} changeDetail={this.props.changeDetail}/>
            )
          }
        </Item>
        <Item label='日志消息'>
          {
            getFieldDecorator('message', {
              initialValue: log.message,
              rules: [
                {required: true, message: '必须输入日志消息'}
              ]
            })(<TextArea placeholder="请输入日志消息" autosize={{ minRows: 2, maxRows: 6 }} />)
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(LogForm)