import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Manager from './Manager';
import Users from './Users';
import Learn from './Learn';
import File from './File';
import Community from './Community';
import Feedback from './Feedback';
import '../App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: ''
    };
  }
  componentDidMount() {
    let url1 = `http://localhost:3005/manager/getName`;
    axios(url1)
      .then((res) => {
        this.setState({
          name: res.data.name
        })
      })
  }
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
  goback = () => {
    window.location.href = 'http://localhost:3000'
  }
  render() {
    let t = this.state.date;
    let year = t.getFullYear();
    let month = (((t.getMonth() + 1) < 10) ? "0" : "") + (t.getMonth() + 1);
    let day = ((t.getDate() < 10) ? "0" : "") + t.getDate();
    let hour = ((t.getHours() < 10) ? "0" : "") + t.getHours();
    let minutes = ((t.getMinutes() < 10) ? "0" : "") + t.getMinutes();
    let seconds = ((t.getSeconds() < 10) ? "0" : "") + t.getSeconds();
    let ifnoon = ' ' + ((t.getHours() < 12) ? "上午" : "下午") + ' ';
    return (
      <Router>
        <div className='logo'>
          <div style={{ width: '7%', height: '70px', float: 'left' }}>
          </div>
          <div style={{ float: 'left', width: '72%', height: '70px', lineHeight: '70px' }}>
            <span style={{ fontSize: '38px', color: 'white', letterSpacing: '25px', marginLeft: '20%' }}>校园新生通后台管理系统</span>
          </div>
          <div style={{ width: '20%', height: '70px', float: 'left', marginLeft: '10px' }}>
            <span onClick={this.goback} style={{marginTop:'4px', float: 'right', lineHeight: '70px', marginLeft: '20px', marginRight: '20px' }}><button style={{ fontSize: '24px',fontFamily:'楷体',border:'none',borderRadius:'12px',height:'33px' }}>退出</button></span>
            <span style={{ float: 'right', lineHeight: '70px', fontSize: '28px', color: 'white' }}>Admin</span>
            <span className='iconfont icon-lingdang' style={{ fontSize: '40px', color: 'white', lineHeight: '70px', float: 'right', marginRight: '10px' }}></span>
          </div>

        </div>
        <div style={{ height: '55px', width: '100%', backgroundColor: 'rgba(136, 136, 136, 0.3)', lineHeight: '55px', position: 'fixed', top: '70px' }}>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><span className='iconfont icon-jurassic_home' style={{ marginLeft: '22px', color: 'white', fontSize: '28px' }}></span></Link>
          <span style={{ marginLeft: '20px', fontSize: '24px', color: 'white' }}>概览</span>
          <span style={{ fontSize: '22px', float: 'right', marginRight: '20px', color: 'white' }}>{year + '/' + month + '/' + day + ifnoon + hour + ':' + minutes + ':' + seconds}</span>
          <span style={{ fontSize: '22px', float: 'right', marginRight: '20px', color: 'white' }}>{this.state.name}</span>
          <span style={{ fontSize: '22px', float: 'right', marginRight: '5px', color: 'white' }}>欢迎你！</span>
        </div>
        <div style={{ width: "100%", height: '150px' }}>

        </div>

        <div className='home'>
          <Link to='/' className='tab' style={{ textDecoration: 'none', display: 'block', height: '65px' }}><div className='manager'>用户管理</div></Link>
          <Link to='/feedback' className='tab' style={{ textDecoration: 'none', display: 'block', height: '65px' }}><div className='manager'>用户反馈</div></Link>
          <Link to='/learn' className='tab' style={{ textDecoration: 'none', display: 'block', height: '65px' }}><div className='manager'>学习交流</div></Link>
          <Link to='/file' className='tab' style={{ textDecoration: 'none', display: 'block', height: '65px' }}><div className='manager'>文件管理</div></Link>
          <Link to='/community' className='tab' style={{ textDecoration: 'none', display: 'block', height: '65px' }}><div className='manager'>社区管理</div></Link>
          <Link to='/manager' className='tab' style={{ textDecoration: 'none', display: 'block', height: '65px' }}><div className='manager' style={{ borderBottom: '1px solid rgba(136, 136, 136, 1)' }}>管理员</div></Link>
        </div>
        <div>
          <Route exact path='/' component={Users} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/learn' component={Learn} />
          <Route path='/file' component={File} />
          <Route path='/community' component={Community} />
          <Route path='/manager' component={Manager} />
        </div>
      </Router>

    )
  }
}
