import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd'
import {connect} from 'react-redux'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home/home'
import Order from '../order'
import User from '../user'
import Log from '../log'
import Goods from '../goods'
import ClickNum from '../click-num'
import Comment from '../comment'
import NotFound from '../not-found/not-found'

const { Footer, Sider, Content } = Layout

class Admin extends Component {
  render () {
    // const user = this.props.user    
    // if(!user || !user._id) {      
    //   return <Redirect to='/login'/>
    //     }
    return (
      <Layout style={{minHeight: '100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content style={{margin: 20, backgroundColor: '#fff'}}>
            <Switch>
              <Redirect exact from='/' to='/home'/>
              <Route path='/home' component={Home}/>
              <Route path='/order' component={Order}/>
              <Route path='/user' component={User}/>
              <Route path='/log' component={Log}/>
              <Route path='/goods' component={Goods}/>
              <Route path='/click_num' component={ClickNum}/>
              <Route path='/comment' component={Comment}/>
              <Route component={NotFound}/> 
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用 Chrome 浏览器，获得更好的操作体验</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {}
)(Admin)