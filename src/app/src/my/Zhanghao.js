import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
export default class Zhanghao extends Component {
  render() {
    return (
      <div>
         <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',zIndex:10,textAlign:'center',height:'7vh'}}
            leftContent={[
              <Link to="/Shezhi"><span className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
            >
            <span>手机账号</span>
        </NavBar>
       
        <List>
          <Link to="/ChangeTel">
          <Item
            arrow="horizontal"
            onClick={() => {}}
            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
          ><span style={{marginLeft:'10px',fontSize:'20px'}}>手机账号</span></Item>
          </Link>
          <Link to="/ChangePsd">
          <Item
            arrow="horizontal"
            onClick={() => {}}
            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px'}}
          ><span style={{marginLeft:'10px',fontSize:'20px'}}>密码重置</span></Item>
          </Link>
          
        </List>
      </div>
    );
  }
}
