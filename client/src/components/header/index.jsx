import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import LinkButton from '../link-button'
import menuList from '../../config/menuConfig'
import './index.less'
import { logout } from '../../redux/actions'

class Header extends Component {

  getTitle = () => {
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if (item.key === path) {
        title = item.title
      } else if (item.children) {
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title
  }

  logout = () => {
    this.props.logout()
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }


  render() {

    const username = this.props.user.username
    const title = this.props.headTitle
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, admin</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{title}</div>
          <div className="header-bottom-right">
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({ headTitle: state.headTitle, user: state.user }),
  { logout }
)(withRouter(Header))