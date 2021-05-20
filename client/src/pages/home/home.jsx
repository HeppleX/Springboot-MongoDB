import React, { Component } from 'react';
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import {
  UserOutlined,
  AppstoreOutlined,
  BarsOutlined
} from '@ant-design/icons';
import './home.less'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Count: '-',
    }
  }

  render () {
    return (
      <div className="container">
        <Row className="content home-wrap" justify="space-around" id="home-wrap">
            <Col span={6} className="color-box brown" >
              <Link to='/user'>
                <p className="count">{this.state.Count}</p>
                <p className="desc">
                <UserOutlined /> 商城用户
                </p>
              </Link>
            </Col>
            <Col span={6} className="color-box green">
              <Link to='/goods'>
                <p className="count">{this.state.Count}</p>
                <p className="desc">
                <AppstoreOutlined /> 商品详情
                </p>
              </Link>
            </Col>
            <Col span={6} className="color-box blue">
              <Link to='/order'>
                <p className="count">{this.state.Count}</p>
                <p className="desc">
                  <BarsOutlined /> 商品订单
                </p>
              </Link>
            </Col>
        </Row>
        <Row className="content home-wrap" justify="space-around" id="home-wrap">
            <Col span={6} className="color-box blue" >
              <Link to='/comment'>
                <p className="count">{this.state.Count}</p>
                <p className="desc">
                <UserOutlined /> 商品评论
                </p>
              </Link>
            </Col>
            <Col span={6} className="color-box green">
              <Link to='/click_num'>
                <p className="count">{this.state.Count}</p>
                <p className="desc">
                <AppstoreOutlined /> 点击量
                </p>
              </Link>
            </Col>
            <Col span={6} className="color-box brown">
              <Link to='/log'>
                <p className="count">{this.state.Count}</p>
                <p className="desc">
                  <BarsOutlined /> 日志记录
                </p>
              </Link>
            </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
