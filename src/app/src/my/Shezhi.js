import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
export default class Shezhi extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
            leftContent={[
              <Link to="/My"><span className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
            >
            <span>设置</span>
        </NavBar>
        <List>
          <Link to="/zhanghao">
          <Item
            arrow="horizontal"
            onClick={() => {}}
            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
          ><span style={{marginLeft:'10px',fontSize:'20px'}}>账号与安全</span></Item>
          </Link>
          <Link to="/xiaoxixi">
          <Item
            arrow="horizontal"
            onClick={() => {}}
            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
          ><span style={{marginLeft:'10px',fontSize:'20px'}}>消息与提醒</span></Item>
          </Link>
          <Link to="/yinsione">
           <Item
            arrow="horizontal"
            onClick={() => {}}
            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
          ><span style={{marginLeft:'10px',fontSize:'20px'}}>隐私</span></Item> 
          </Link>
          <Link to="/huancun">
          <Item
            arrow="horizontal"
            onClick={() => {}}
            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
          ><span style={{marginLeft:'10px',fontSize:'20px'}}>清除缓存</span></Item> 
          </Link>
          <Link to="/fuwu">
            <Item
              arrow="horizontal"
              onClick={() => {}}
              style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
            ><span style={{marginLeft:'10px',fontSize:'20px'}}>服务协议和隐私政策</span></Item>
          </Link>
          <Link to="/">
            <Item
              style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
            >
              <button style={{height:'6vh',position:'relative',left:'17vw',width:'60vw'}}>退出当前账号
              </button>
            </Item>
          </Link>
        </List>
      </div>
    );
  }
}
