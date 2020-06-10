import React, { Component } from 'react'
import axios from 'axios'
import { Modal, Button } from 'antd';
import { Link } from 'react-router-dom'
import Base64 from 'crypto-js/enc-base64'
import Utf8 from 'crypto-js/enc-utf8'
import { withRouter } from "react-router";
import PropTypes from "prop-types";
export default class Users extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            indexList: [],
            current: 1,
            pageSize: 10,
            num: 0,
            totalPage: 0,
            pathname: '用户管理',
            date: new Date(),
            name: '',
            visible2:false
        }
    }

    showPwd = (name,e)=>{
        this.setState({
            visible2:true
        })
        let url = `http://139.155.44.190:3005/users/list`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    console.log(res.data)
                    for(var i=0;i<res.data.length;i++){
                        if(res.data[i].name == name){
                            this.setState({
                                jiemiName:name+'的密码是：',
                                jiemiPwd:res.data[i].pwd
                            })
                        }
                    }
                    console.log(this.state.jiemiPwd)
                }
            })
    }
    handleOk2 = e => {
        this.setState({
            visible2: false,
        });
    };

    handleCancel2 = e => {
        this.setState({
            visible2: false,
        });
    };

    setNext = () => {
        if (this.state.current < this.state.totalPage) {
            this.setState({
                num: this.state.num + this.state.pageSize,
                current: this.state.current + 1,
            }, function () {
                this.setState({
                    indexList: this.state.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
        }
    }
    setUp = () => {
        if (this.state.current > 1) {
            this.setState({
                num: this.state.num - this.state.pageSize,
                current: this.state.current - 1
            }, function () {
                this.setState({
                    indexList: this.state.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
        }
    }
    componentDidMount() {
        const { match, location, history } = this.props;
        if (location.pathname == '/') {
            this.setState({
                pathname: '社区管理'
            })
        } else if (location.pathname == '/community') {
            this.setState({
                pathname: '用户管理'
            })
        } else if (location.pathname == '/notes') {
            this.setState({
                pathname: '笔记管理'
            })
        } else if (location.pathname == '/experience') {
            this.setState({
                pathname: '经验管理'
            })
        } else if (location.pathname == '/feedback') {
            this.setState({
                pathname: '用户反馈'
            })
        } else if (location.pathname == '/managers') {
            this.setState({
                pathname: '管理员'
            })
        }
        let url = `http://139.155.44.190:3005/users/list`;
        axios(url)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pwd = Base64.stringify(Utf8.parse(res.data[i].pwd));
                    res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                }
                this.setState({
                    data: res.data,
                    totalPage: Math.ceil(res.data.length / this.state.pageSize),
                    indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
    }

    componentDidUpdate() {
        document.addEventListener('keydown', this.onkeydown);
    }

    handleSend = (e) => {
        let url = `http://139.155.44.190:3005/users/select?name=${e.target.value}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data,
                        indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                    })

                }
 
            })
    }

    clickSend = (e)=>{
        let url = `http://139.155.44.190:3005/users/select?name=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data,
                        indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                    })

                }

            })
    }
    onkeydown = (e) => {
        if (e.keyCode === 13) {
            this.handleSend(e);
        }
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            let url0 = `http://139.155.44.190:3005/users/list`;
            axios(url0)
                .then((res) => {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data,
                        indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                    })
                })
            window.location.href = "http://localhost:3000/home#/";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    render() {
        let t = this.state.date;
        let ifnoon = ' ' + ((t.getHours() < 12) ? "上午好" : "下午好") + ' ';
        return (
            <div style={{ position: 'relative', height: '83vh', width: '65vw', backgroundColor: 'white', top: '-83vh', left: '15vw' }}>
                <div style={{ height: '7vh', width: '65vw', backgroundColor: 'rgba(87, 196, 223, 1)', lineHeight: '7vh' }}>
                    <div style={{ height: '2.18vh', width: '1.09vh', overflow: 'hidden', position: 'fixed', top: '16vh', left: '25vw' }}><div className='user-rectangle'></div></div>
                    <span style={{ color: 'white', fontSize: '1.1vw', marginLeft: '2vw' }}>您所在的位置是：首页 > {this.state.pathname}</span>
                    <input className='search' type='search' onChange={this.changeSearch} onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" ></input>
                </div>
                <div className='user-content'>
                    <table style={{ width: '61vw', tableLayout: 'fixed', border: 'none' }}>
                        <thead style={{ height: '5vh', lineHeight: '5vh' }}>
                            <tr style={{ lineHeight: '5.9vh', backgroundColor: 'rgba(68, 182, 211, 1)' }}>
                                <th style={{ width: '5vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>头像</th>
                                <th style={{ width: '5vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>名字</th>
                                <th style={{ width: '3vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>等级</th>
                                <th style={{ width: '3vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>积分</th>
                                <th style={{ width: '7vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>电话</th>
                                <th style={{ width: '8vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>学院</th>
                                <th style={{ width: '6vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>密码</th>
                                <th style={{ width: '10vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.indexList.map(
                                    (item, idx) => <tr key={idx} style={{ height: '4vh', lineHeight: '3vh', backgroundColor: 'SkyBlue' }}>
                                        <td style={{ textAlign: 'center' }}><img style={{ height: '5vh', width: '5vh', borderRadius: '2.5vh' }} src={item.pic} ></img></td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '5vw' }}>{item.name}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.level}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.lvnum}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' , whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '6vw'}}>{item.tel}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '8vw' }}>{item.college}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '6vw' }}>{item.pwd}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>
                                            <span onClick={this.showPwd.bind(this,(item.name))} style={{ height: '3vh', width: '5vw', fontFamily: '楷体', fontSize: '1.2vw', marginLeft: '10px', cursor: 'pointer' }}>查看密码</span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <Modal
                            style={{ height: '15vh', backgroundColor: 'rgb(68,182,211)', position: 'fixed', left: '35vw', top: '30vh', paddingBottom: '9vh' }}
                            visible={this.state.visible2}
                            onOk={this.handleOk2}
                            onCancel={this.handleCancel2}
                            closable={false}
                            footer={[
                                <Button key="back" onClick={this.handleCancel2} className='footerstyle' style={{ color: 'rgb(68,182,211)', position: 'absolute', backgroundColor: 'white', left: '30%', bottom: '4vh', width: '6vw', height: '4.2vh', borderRadius: '2vh', border: 'unset', cursor: 'pointer' }}>确认</Button>,
                                <Button key="cancel" onClick={this.handleOk2} className='footerstyle' style={{ color: 'rgb(68,182,211)', position: 'absolute', backgroundColor: 'white', left: '52%', bottom: '4vh', width: '6vw', height: '4.2vh', borderRadius: '2vh', border: 'unset', cursor: 'pointer' }}>取消</Button>,
                            ]}
                        >
                            <div style={{ marginTop: '5vh', textAlign: 'center' }}>
                                <span style={{color:'white',fontSize:'1.5vw'}}>{this.state.jiemiName}{this.state.jiemiPwd}</span>
                            </div>
                        </Modal>
                    </table>
                    <div style={{ position: 'fixed', height: '7vh', width: '20vw', left: '50vw', top: '88vh' }}>
                        <a style={{ textDecoration: 'none', marginRight: '2vw' }}>
                            <span onClick={this.setUp} style={{ color: 'RoyalBlue', fontSize: '1.2vw',cursor:'pointer' }}>上一页</span>
                        </a>
                        <span style={{ fontSize: '1.2vw', color: 'RoyalBlue' }}>{this.state.current}页/ {this.state.totalPage}页</span>
                        <a style={{ textDecoration: 'none', marginLeft: '2vw' }}>
                            <span onClick={this.setNext} style={{ color: 'RoyalBlue', fontSize: '1.2vw',cursor:'pointer'  }}>下一页</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
