import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class Yonghu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      tel: '',
      time: new Date().toLocaleString(),
    }
  }
  handleRegister = () => {
    let url = `http://139.155.44.190:3005/feedback/addFeedback?content=${this.state.content}&tel=${this.state.tel}&time=${this.state.time}`;
    axios(url)
      .then((res) => {
        if (res.data.ok) {
          window.location.href = '//localhost:3000/Success'
          alert(res.data.msg);
        } else {
          alert(res.data.msg);
        }
      })
  }
  getTel = (e) => {
    this.setState({
      tel: e.target.value
    })
  }
  getContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div> 
        <NavBar
          style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: "100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/shezhi"><span className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
        >
          <span>用户反馈</span>
        </NavBar>
        <img src={require('./img/My2.jpg')} style={{ height: "20vh", width: "50vw", margin: "10vh 7vw 0 25vw" }}></img>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "4vh", color: "#37376F" }}>校园新生通</p>
          <input onChange={this.getTel} style={{ border: "1px solid #BBBBBB", height: "6vh", width: "80vw", fontSize: "2vh", color: "#888888", paddingLeft: '2vw' }} placeholder="请在此输入您的联系方式(邮箱电话)">
          </input>
          <input onChange={this.getContent} style={{ margin: "4vh 0 4vh 0", border: "1px solid #BBBBBB", height: "20vh", width: "80vw", fontSize: "2vh", color: "#888888", paddingLeft: '2vw' }} placeholder="有什么想说的尽管说吧...(邮箱电话)">
          </input><br></br>
          <button style={{ border: "none", height: "8vh", width: "82vw", backgroundColor: "#37376F", color: "#fff", fontSize: '3vh' }} onClick={this.handleRegister}>提交</button>
        </div>
      </div>
    );
  }
}
