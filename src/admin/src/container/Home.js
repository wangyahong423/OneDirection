import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Manager from './Manager';
import Users from './Users';
import Learn from './Learn';
import Experence from './Experence';
import Notes from './Notes';
import Feedback from './Feedback';
import '../App.css';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: '',
      click1: true,
      click2: false,
      click3: false,
      click4: false,
      click5: false,
      click6:false
    };
  }
  onClick1=()=>{
    this.setState({
        click1:true,
        click2:false,
        click3:false,
        click4:false,
        click5:false,
        click6:false
    })
}
onClick2=()=>{
    this.setState({
        click1:false,
        click2:true,
        click3:false,
        click4:false,
        click5:false,
        click6:false
    })
}
onClick3=()=>{
    this.setState({
        click1:false,
        click2:false,
        click3:true,
        click4:false,
        click5:false,
        click6:false
    })
}
onClick4=()=>{
    this.setState({
        click1:false,
        click2:false,
        click3:false,
        click4:true,
        click5:false,
        click6:false
    })
}
onClick5=()=>{
    this.setState({
        click1:false,
        click2:false,
        click3:false,
        click4:false,
        click5:true,
        click6:false
    })
}
onClick6=()=>{
  this.setState({
      click1:false,
      click2:false,
      click3:false,
      click4:false,
      click5:false,
      click6:true
  })
}
  componentDidMount() {
    let url1 = `http://139.155.44.190:3005/manager/getName`;
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
    window.location.href = 'http://localhost:3010'
  }

  render() {
    const S1 = {
      backgroundColor:this.state.click1?"rgba(136, 136, 136, 0.7)":"rgba(136, 136, 136, 0.3)"
  }
  const S2 = {
    backgroundColor:this.state.click2?"rgba(136, 136, 136, 0.7)":"rgba(136, 136, 136, 0.3)"
  }
  const S3 = {
    backgroundColor:this.state.click3?"rgba(136, 136, 136, 0.7)":"rgba(136, 136, 136, 0.3)"
  }
  const S4 = {
    backgroundColor:this.state.click4?"rgba(136, 136, 136, 0.7)":"rgba(136, 136, 136, 0.3)"
  }
  const S5 = {
    backgroundColor:this.state.click5?"rgba(136, 136, 136, 0.7)":"rgba(136, 136, 136, 0.3)"
  }
  const S6 = {
    backgroundColor:this.state.click6?"rgba(136, 136, 136, 0.7)":"rgba(136, 136, 136, 0.3)"
  }
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
            <span onClick={this.goback} style={{ marginTop: '4px', float: 'right', lineHeight: '70px', marginLeft: '20px', marginRight: '20px' }}><button style={{ fontSize: '24px', fontFamily: '楷体', border: 'none', borderRadius: '12px', height: '33px' }}>退出</button></span>
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
          <Link to='/'  style={{ textDecoration: 'none', height: '65px' }} ><p className='tab' style={S1} onClick={this.onClick1}>用户管理</p></Link>
          <Link to='/feedback' style={{ textDecoration: 'none', height: '65px' }}><p className='tab' style={S2} onClick={this.onClick2}>用户反馈</p></Link>
          <Link to='/learn' style={{ textDecoration: 'none', height: '65px' }}><p className='tab' style={S3} onClick={this.onClick3}>社区管理</p></Link>
          <Link to='/notes' style={{ textDecoration: 'none', height: '65px' }}><p className='tab' style={S4} onClick={this.onClick4}>笔记管理</p></Link>
          <Link to='/experence' style={{ textDecoration: 'none', height: '65px' }}><p className='tab' style={S5} onClick={this.onClick5}>经验管理</p></Link>
          <Link to='/manager' style={{ textDecoration: 'none', height: '65px', borderBottom: '1px solid rgba(136, 136, 136, 1)' }}><p className='tab' style={S6} onClick={this.onClick6}>管理员</p></Link>
        </div>
        <div>
          <Route exact path='/' component={Users} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/learn' component={Learn} />
          <Route path='/notes' component={Notes} />
          <Route path='/experence' component={Experence} />
          <Route path='/manager' component={Manager} />
        </div>
      </Router>
    )
  }
}
