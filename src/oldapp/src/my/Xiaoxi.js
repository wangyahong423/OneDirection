import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, List, Switch } from 'antd-mobile';
export default class Xiaoxi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  render() {
    return (
      <div>
        <NavBar
          style={{ width: '100vw', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
          leftContent={[
            <Link to="/shezhi"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>消息与提醒</span>
        </NavBar>
        <div style={{ position: 'fixed', top: "0", width: "100vw" }}>
          <List.Item
            extra={<Switch
              checked={this.state.checked}
              onChange={() => {
                this.setState({
                  checked: !this.state.checked,
                });
              }}
            />}
            style={{ marginTop: "10vh" }}>消息提醒</List.Item>
          <p style={{ marginLeft: "3vw", color: "#A7ABBE" }}>开启后，可及时收到信息</p>
        </div>
      </div>
    );
  }
}
