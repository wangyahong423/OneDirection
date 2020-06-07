import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import axios from 'axios';
import { Toast } from 'antd-mobile';
function showToast() {
  Toast.info('清除成功', 1);
}
const Item = List.Item;
const Brief = Item.Brief;
export default class Shezhi extends Component {
  constructor() {
    super();
    this.state = {
        username: '',
        islogin: false
    }
}
  outlogin = () => {
    let url5 = `http://139.155.44.190:3005/users/getName`;
    axios(url5)
        .then((res) => {
            this.setState({
                username: res.data.name
            })
            let url6 = `http://139.155.44.190:3005/users/exitLogin?name=${this.state.username}&islogin=${this.state.islogin}`;
            axios(url6)
                .then((res) => {
                    if (res.data.err) {
                    } else {
                        window.location.href = "http://localhost:3000/";
                    }
                })
        })

}
  render() {
    return (
      <div>
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', zIndex: 10, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/My"><span className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>设置</span>
        </NavBar>
        <List>
          <Link to="/reset">
            <Item
              arrow="horizontal"
              onClick={() => { }}
              style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px' }}
            ><span style={{ marginLeft: '10px', fontSize: '20px' }}>密码重置</span></Item>
          </Link>
          <Link to="/head">
            <Item
              arrow="horizontal"
              onClick={() => { }}
              style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px' }}
            ><span style={{ marginLeft: '10px', fontSize: '20px' }}>头像框选择</span></Item>
          </Link>
          <Link to="/card">
            <Item
              arrow="horizontal"
              onClick={() => { }}
              style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px' }}
            ><span style={{ marginLeft: '10px', fontSize: '20px' }}>卡片背景</span></Item>
          </Link>
          {/* <Link to="/"> */}
            <Item
              onClick={()=>{this.outlogin()}}
              style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px' }}
            >
              <button style={{ height: '6vh', position: 'relative', left: '17vw', width: '60vw' }}>退出当前账号</button>
            </Item>
          {/* </Link> */}
        </List>
      </div>
    );
  }
}
