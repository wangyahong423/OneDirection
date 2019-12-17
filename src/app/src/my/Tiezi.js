import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, List, Switch } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
export default class Tiezi extends Component {
  render() {
    return (
      <div>
        <NavBar
          style={{ width: '100vw', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
          leftContent={[
            <Link to="/my"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>帖子</span>
        </NavBar>
        <List>
          <Link to="/shequ">
            <Item
              arrow="horizontal"
              onClick={() => { }}
              style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px',marginTop:'50px' }}
            ><span style={{ marginLeft: '10px', fontSize: '20px' }}>社区动态</span></Item>
          </Link>
          <Link to="/xuexi">
            <Item
              arrow="horizontal"
              onClick={() => { }}
              style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px' }}
            ><span style={{ marginLeft: '10px', fontSize: '20px' }}>学习交流动态</span></Item>
          </Link>
        </List>
      </div>
    );
  }
}
