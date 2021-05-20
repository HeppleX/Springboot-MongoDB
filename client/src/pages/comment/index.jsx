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
import {reqDeleteComment, reqComments, reqAddOrUpdateComment} from "../../api/index"
import CommentForm from './comment-form'

const Option = Select.Option

export default class Comment extends Component {

  state = {
    comments: [], 
    isShow: false, 
    searchType: 'id',
    text: '' 
  }
  
  initColumns = () => {
    this.columns = [
      {
        title: '评论ID',
        dataIndex: 'id'
      },
      {
        title: '商品ID',
        dataIndex: 'goodsid'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '评论',
        dataIndex: 'content'
      },
      {
        title: '评分',
        dataIndex: 'star',
        width: 80
      },
      {
        title: '创建时间',
        dataIndex: 'createdTime',
        render: formateDate
      },
      {
        title: '操作',
        render: (comment) => (
          <span>
            <LinkButton onClick={() => this.showUpdate(comment)}>修改</LinkButton>
            <LinkButton onClick={() => this.deleteComment(comment)}>删除</LinkButton>
          </span>
        )
      },
    ]
  }

  showAdd = () => {
    this.comment = null 
    this.setState({isShow: true})
  }

  showUpdate = (comment) => {
    this.comment = comment 
    this.setState({
      isShow: true
    })
  }

  deleteComment = (comment) => {
    Modal.confirm({
      title: `确认删除用户${comment.userName}的这条评论吗?`,
      onOk: async () => {
        const result = await reqDeleteComment(comment.id)
        // if(result.status===200) {
        message.success('删除评论成功!')
        this.getComments()
        // }
      }
    })
  }

  changeDetail = (detail) => {
    const newtext = detail.slice(4,-7)
    this.setState({
      text: newtext
    })
  }

  addOrUpdateComment = async () => {
    this.setState({isShow: false})    
    const comment = this.form.getFieldsValue()
    this.form.resetFields()
    if (this.comment) {
      comment.id = this.comment.id
      comment.content = this.state.text
    }    
    const result = await reqAddOrUpdateComment(comment)    
    // // if(result.status===200) {
    message.success(`${this.comment ? '修改' : '添加'}评论成功`)
    this.getComments()
    // }
  }
  getComments = async () => {
    const result = await reqComments()
    const comments = result
    this.setState({
      comments
    })
  }

  componentWillMount () {
    this.initColumns()
  }

  componentDidMount () {
    this.getComments()
  }

  render() {

    const {comments, isShow, searchType, searchName} = this.state
    const comment = this.comment || {}
    const title = (
      <span>
        <Select
          value= {searchType}
          style={{width: 150}}
          onChange={value => this.setState({searchType:value})}
        >
          <Option value='id'>按评论ID搜索</Option>
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
        添加评论
      </Button>
    )
    return (
      <Card title={title} extra={extra}>
        <Table
          bordered
          rowKey='id'
          dataSource={comments}
          columns={this.columns}
          pagination={{defaultPageSize: 5}}
        />

        <Modal
          title={comment.id ? '修改评论' : '添加评论'}
          visible={isShow}
          onOk={this.addOrUpdateComment}
          onCancel={() => {
            this.form.resetFields()
            this.setState({isShow: false})
          }}
        >
          <CommentForm
            setForm={form => this.form = form}
            comment={comment}
            changeDetail={this.changeDetail}
          />
        </Modal>
      </Card>
    )
  }
}