import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Users from './Users';
import Community from './Community';
import Managers from './Managers';
import Notes from './Notes';
import Feedback from './Feedback';
import Experience from './Experience';

export default class Home extends Component {
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
            click6: false
        };
    }
    componentDidMount() {
        const { match, location, history } = this.props;
        console.log(location.pathname)
        if (location.pathname == '/') {
            this.setState({
                click1: true,
                click2: false,
                click3: false,
                click4: false,
                click5: false,
                click6: false
            })
        } else if (location.pathname == '/community') {
            this.setState({
                click1: false,
                click2: true,
                click3: false,
                click4: false,
                click5: false,
                click6: false
            })
        } else if (location.pathname == '/notes') {
            this.setState({
                click1: false,
                click2: false,
                click3: true,
                click4: false,
                click5: false,
                click6: false
            })
        } else if (location.pathname == '/experience') {
            this.setState({
                click1: false,
                click2: false,
                click3: false,
                click4: true,
                click5: false,
                click6: false
            })
        } else if (location.pathname == '/feedback') {
            this.setState({
                click1: false,
                click2: false,
                click3: false,
                click4: false,
                click5: true,
                click6: false
            })
        } else if (location.pathname == '/managers') {
            this.setState({
                click1: false,
                click2: false,
                click3: false,
                click4: false,
                click5: false,
                click6: true
            })
        }
    }
    onClick1 = () => {
        this.setState({
            click1: true,
            click2: false,
            click3: false,
            click4: false,
            click5: false,
            click6: false
        })
    }
    onClick2 = () => {
        this.setState({
            click1: false,
            click2: true,
            click3: false,
            click4: false,
            click5: false,
            click6: false
        })
    }
    onClick3 = () => {
        this.setState({
            click1: false,
            click2: false,
            click3: true,
            click4: false,
            click5: false,
            click6: false
        })
    }
    onClick4 = () => {
        this.setState({
            click1: false,
            click2: false,
            click3: false,
            click4: true,
            click5: false,
            click6: false
        })
    }
    onClick5 = () => {
        this.setState({
            click1: false,
            click2: false,
            click3: false,
            click4: false,
            click5: true,
            click6: false
        })
    }
    onClick6 = () => {
        this.setState({
            click1: false,
            click2: false,
            click3: false,
            click4: false,
            click5: false,
            click6: true
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
        window.location.href = 'http://localhost:3000'
    }

    render() {
        const S1 = {
            backgroundColor: this.state.click1 ? "RoyalBlue" : "DodgerBlue"
        }
        const S2 = {
            backgroundColor: this.state.click2 ? "RoyalBlue" : "DodgerBlue"
        }
        const S3 = {
            backgroundColor: this.state.click3 ? "RoyalBlue" : "DodgerBlue"
        }
        const S4 = {
            backgroundColor: this.state.click4 ? "RoyalBlue" : "DodgerBlue"
        }
        const S5 = {
            backgroundColor: this.state.click5 ? "RoyalBlue" : "DodgerBlue"
        }
        const S6 = {
            backgroundColor: this.state.click6 ? "RoyalBlue" : "DodgerBlue"
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
                <div style={{ height: '100vh', width: '100vw' }}>
                    <div className='title'>
                        <div style={{ width: '80vw', height: '11vh', margin: '0 auto' }}>
                            <div style={{ width: '60vw', height: '11vh', lineHeight: '11vh', textAlign: 'end', float: 'left' }}>
                                <span style={{ fontSize: '4.5vw', fontWeight: 'bold', color: 'white', textShadow: '0.5vw -0.5vw 0.3vw pink', letterSpacing: '1vw', float: 'left' }}>CFC</span>
                                <span style={{ fontSize: '3vw', color: 'white', textShadow: '0.5vw -0.5vw 0.3vw pink', letterSpacing: '1vw', float: 'left' }}>&nbsp;校园新生通后台管理系统</span>
                            </div>
                            <div style={{ width: '20vw', height: '11vh', float: 'left', lineHeight: '11vh' }}>
                                <span onClick={this.goback} style={{ fontSize: '1.2vw', float: 'right', color: 'white', lineHeight: '3vh', marginTop: '2vh', cursor: 'pointer' }}>
                                    <i className='iconfont icon-exit' style={{ color: '#fff', 'fontSize': '1.2vw' }}></i>
                                    退出
                                </span>
                                <span style={{ float: 'right', fontSize: '1.2vw', color: 'white', lineHeight: '3vh', marginTop: '2vh' }}><i className='iconfont icon-hi' style={{ fontSize: '1.5vw' }}></i>&nbsp;您好，管理员 | {this.state.name}&emsp;</span>
                                <span style={{ fontSize: '1vw', float: 'right', color: 'white', lineHeight: '4.5vh' }}>{year + '/' + month + '/' + day + ifnoon + hour + ':' + minutes + ':' + seconds}</span>
                            </div>
                        </div>
                        <div style={{ width: '80vw', height: '83vh', margin: '-1vh auto', }}>
                            <div className='hometit'>
                                <Link to='/' style={{ textDecoration: 'none' }} >
                                    <p className='tab' style={S1} onClick={this.onClick1}>
                                        <i className='iconfont icon-wode' style={{ color: '#fff', 'fontSize': '1.7vw' }}></i>
                                        &nbsp;用户管理
                                    </p>
                                </Link>
                                <Link to='/community' style={{ textDecoration: 'none' }} >
                                    <p className='tab' style={S2} onClick={this.onClick2}>
                                        <i className='iconfont icon-community' style={{ color: '#fff', 'fontSize': '1.7vw' }}></i>
                                        &nbsp;社区管理
                                    </p>
                                </Link>
                                <Link to='/notes' style={{ textDecoration: 'none' }} >
                                    <p className='tab' style={S4} onClick={this.onClick4}>
                                        <i className='iconfont icon-gonglve' style={{ color: '#fff', 'fontSize': '1.7vw' }}></i>
                                        &nbsp;笔记管理
                                    </p>
                                </Link>
                                <Link to='/experience' style={{ textDecoration: 'none' }} >
                                    <p className='tab' style={S5} onClick={this.onClick5}>
                                        <i className='iconfont icon-share' style={{ color: '#fff', 'fontSize': '1.8vw' }}></i>
                                        &nbsp;经验管理
                                    </p>
                                </Link>
                                <Link to='/feedback' style={{ textDecoration: 'none' }} >
                                    <p className='tab' style={S3} onClick={this.onClick3}>
                                        <i className='iconfont icon-fankui' style={{ color: '#fff', 'fontSize': '1.7vw' }}></i>
                                        &nbsp;用户反馈
                                    </p>
                                </Link>
                                <Link to='/managers' style={{ textDecoration: 'none' }} >
                                    <p className='tab' style={S6} onClick={this.onClick6}>
                                        <i className='iconfont icon--Manager' style={{ color: '#fff', 'fontSize': '1.7vw' }}></i>
                                        &nbsp;管 理 员
                                    </p>
                                </Link>
                            </div>
                            <div>
                                <Route exact path='/' component={Users} />
                                <Route exact path='/community' component={Community} />
                                <Route exact path='/managers' component={Managers} />
                                <Route exact path='/notes' component={Notes} />
                                <Route exact path='/feedback' component={Feedback} />
                                <Route exact path='/experience' component={Experience} />
                            </div>
                        </div>

                    </div>


                </div>
            </Router>
        )
    }
}
