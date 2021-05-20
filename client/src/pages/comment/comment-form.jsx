import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'
import RichTextEditor from '../../utils/rich-text-editor'

const Item = Form.Item

class CommentForm extends PureComponent {

  static propTypes = {
    setForm: PropTypes.func.isRequired, 
    comment: PropTypes.object
  }
  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  componentDidMount() {

  }

  render() {
    const { comment } = this.props
    const { getFieldDecorator } = this.props.form    
    const formItemLayout = {
      labelCol: { span: 4 },  
      wrapperCol: { span: 15 }, 
    }
    return (
      <Form {...formItemLayout}>
        <Item label='商品ID'>
          {
            getFieldDecorator('goodsid', {
              initialValue: comment.goodsid,
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
              initialValue: comment.userName,
              rules: [
                {required: true, message: '必须输入用户名'}
              ]
            })(
              <Input placeholder='请输入用户名'/>
            )
          }
        </Item>
        <Item label='评论'>
          {
            getFieldDecorator('content', {
              initialValue: comment.content,
              rules: [
                {required: true, message: '必须输入评论'}
              ]
            })(
              <RichTextEditor detail={comment.content} changeDetail={this.props.changeDetail}/>
            )
          }
        </Item>
        <Item label='评分'>
          {
            getFieldDecorator('star', {
              initialValue: comment.star,
              rules: [
                {required: true, message: '必须输入评分,数字:1～5'}
              ]
            })(
              <Input placeholder='请输入评分,数字:1～5'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(CommentForm)