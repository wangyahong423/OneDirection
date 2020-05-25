import React, { Component } from 'react'
import axios from 'axios'
import { Modal, Button } from 'antd';
import PropTypes from "prop-types";
import '../App.css';
export default class Managers extends Component {
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
            pageSize: 15,
            date: new Date(),
            name: '',
            num: 0,
            totalPage: 0,
            pathname: '用户管理',
            names: '',//添加管理员名字
            pwds: '',//添加管理员密码
            tels: '',//添加管理员电话
            visible: false,
            visible1: false,
            nname: '',//修改密码
            npwd: '',//修改密码
            ntel: '',//修改密码
            rnpwd: '',//修改密码
            an:1,
            at:1,
            ap:1,
            xp:1,
            xrp:1
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
            an:1,
            at:1,
            ap:1
        });
    };

    handleCancel = e => {
        if (this.state.names == '') {
            this.setState({
                an:0,
                visible:true
            })
        }
        else if (this.state.pwds == '') {
            this.setState({
                ap:0,
                visible:true
            })
        }
        else if (this.state.tels == '') {
            this.setState({
                at:0,
                visible:true
            })
        }
        else {
            axios(`http://139.155.44.190:3005/manager/addManager?name=${this.state.names}&pwd=${this.state.pwds}&tel=${this.state.tels}`)
                .then(
                    data => {
                        if (data.data.ok == 1) {
                            this.setState({
                                visible: false,
                            });
                            window.alert("添加成功");
                            window.location.reload();
                        }
                        else if (data.data.ok == 0) {
                            window.alert("添加失败，管理员已存在");
                        }
                        else {
                            window.alert(data.data.msg);
                        }
                    }
                )
        }

    };

    showModal1 = (name,tel,e) => {
        this.setState({
            visible1: true,
            nname:name,
            ntel:tel
        });
    };

    handleOk1 = e => {
        this.setState({
            visible1: false,
            xp:1,
            xrp:1,
        });
    };

    handleCancel1 = e => {
        if (this.state.npwd == '') {
            this.setState({
                xp:0,
                visible1:true
            })
        }
        else if (this.state.rnpwd == '') {
            this.setState({
                xrp:0,
                visible1:true
            })
        }
        else {
            if (this.state.npwd == this.state.rnpwd) {
                axios(`http://139.155.44.190:3005/manager/judge?name=${this.state.nname}&pwd=${this.state.npwd}&tel=${this.state.ntel}`)
                    .then(
                        data => {
                            if (data.data.ok == 1) {
                                axios(`http://139.155.44.190:3005/manager/alter?name=${this.state.nname}&pwd=${this.state.npwd}&tel=${this.state.ntel}`)
                                    .then(
                                        data => {
                                        }
                                    )
                                window.alert("修改成功！");
                                window.location.href = 'http://localhost:3000/';
                            }
                        }
                    )
            }
            else{
                alert('密码不一致！');
            }

        }

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
        const { location } = this.props;
        if (location.pathname == '/') {
            this.setState({
                pathname: '用户管理'
            })
        } else if (location.pathname == '/community') {
            this.setState({
                pathname: '社区管理'
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
        let url = `http://139.155.44.190:3005/manager/list`;
        axios(url)
            .then((res) => {
                let url1 = `http://139.155.44.190:3005/users/list`;
                axios(url1)
                    .then((r) => {
                        for (var i = 0; i < res.data.length; i++) {
                            for (var j = 0; j < r.data.length; j++) {
                                if (res.data[i].name == r.data[j].name) {
                                    res.data[i].pic = "http://139.155.44.190:3005" + r.data[j].pic;
                                    res.data[i].card = "http://139.155.44.190:3005" + r.data[j].card;
                                }
                            }
                        }
                    })


                this.setState({
                    data: res.data,
                    totalPage: Math.ceil(res.data.length / this.state.pageSize),
                    indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
    }

    handleRegister = (name, e) => {
        let url = `http://139.155.44.190:3005/manager/deleteManager?name=${name}`;
        axios(url)
            .then((res) => {
                if (res.data.ok) {
                    window.location.reload();
                } else {
                }
            })
    }

    getName = (e) => {
        if (e.target.value != '') {
            this.setState({
                an: 1,
                names: e.target.value
            })
        }
        else {
            this.setState({
                an: 0,
            })
        }
    }
    getTel = (e) => {
        if (e.target.value != '') {
            this.setState({
                at: 1,
                tels: e.target.value
            })
        }
        else {
            this.setState({
                at: 0,
            })
        }
    }
    getPwd = (e) => {
        if (e.target.value != '') {
            this.setState({
                ap: 1,
                pwds: e.target.value
            })
        }
        else {
            this.setState({
                ap: 0,
            })
        }
    }

    getNewPwd = (e) => {
        if (e.target.value != '') {
            this.setState({
                xp: 1,
                npwd: e.target.value
            })
        }
        else {
            this.setState({
                xp: 0,
            })
        }
    }
    getReNewPwd = (e) => {
        if (e.target.value != '') {
            this.setState({
                xrp: 1,
                rnpwd: e.target.value
            })
        }
        else {
            this.setState({
                xrp: 0,
            })
        }
    }
    handleSend = (e) => {
        let url = `http://139.155.44.190:3005/manager/select?name=${e.target.value}`;
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
            let url0 = `http://139.155.44.190:3005/manager/list`;
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
            window.location.href = "http://localhost:3000/home#/managers/";
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
                    <span onClick={this.showModal} style={{ color: 'white', marginLeft: '10vw', cursor: 'pointer' }}>添加管理员</span>
                    <input type='search' className='search' onChange={this.changeSearch} onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" ></input>
                </div>
                <div className='user-content'>
                    <table style={{ width: '40vw', tableLayout: 'fixed', border: 'none' }}>
                        <thead style={{ height: '5vh', lineHeight: '5vh' }}>
                            <tr style={{ lineHeight: '5.9vh', backgroundColor: 'rgba(68, 182, 211, 1)' }}>
                                <th style={{ width: '5vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>姓名</th>
                                <th style={{ width: '8vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>电话</th>
                                <th style={{ width: '6vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>密码</th>
                                <th style={{ width: '8vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.indexList.map(
                                    (item, idx) => <tr key={idx} style={{ height: '4vh', lineHeight: '4vh', backgroundColor: 'SkyBlue' }}>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.name}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.tel}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.pwd}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>
                                            <span onClick={this.handleRegister.bind(this, (item.name))} style={{ height: '3vh', width: '5vw', fontFamily: '楷体', fontSize: '1.2vw', cursor: 'pointer' }}>删除</span>
                                            <span onClick={this.showModal1.bind(this,(item.name),(item.tel))} style={{ height: '3vh', width: '5vw', fontFamily: '楷体', fontSize: '1.2vw', marginLeft: '10px', cursor: 'pointer' }}>修改密码</span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <Modal
                            style={{ height: '26vh', backgroundColor: 'rgb(68,182,211)', position: 'fixed', left: '35vw', top: '30vh', paddingBottom: '9vh' }}
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            closable={false}
                            footer={[
                                <Button key="back" onClick={this.handleCancel} className='footerstyle' style={{ color: 'rgb(68,182,211)', position: 'absolute', backgroundColor: 'white', left: '25%', bottom: '4vh', width: '8vw', height: '4.2vh', borderRadius: '2vh', border: 'unset', cursor: 'pointer' }}>确认</Button>,
                                <Button key="cancel" onClick={this.handleOk} className='footerstyle' style={{ color: 'rgb(68,182,211)', position: 'absolute', backgroundColor: 'white', left: '52%', bottom: '4vh', width: '8vw', height: '4.2vh', borderRadius: '2vh', border: 'unset', cursor: 'pointer' }}>取消</Button>,
                            ]}
                        >
                            <div style={{ marginTop: '5vh', textAlign: 'center' }}>
                                <span style={{ color: 'white' }}></span><input className='addmanager' onChange={this.getName} type='text' placeholder='请输入用户名'></input>
                                {
                                    this.state.an == 0
                                    ? <p style={{position:'absolute',top:'9.7vh',left:'9.7vw',color:'red',fontSize:'0.8vw'}}>用户名不能为空！</p>
                                    : <p style={{position:'absolute',top:'10vh',left:'5vw',color:'red',fontSize:'1vw'}}></p>
                                }
                                <br />
                                <span style={{ color: 'white' }}></span><input className='addmanager' onChange={this.getPwd} type='password' placeholder='请输入密码'></input>
                                {
                                    this.state.ap == 0 
                                    ? <p style={{position:'absolute',top:'17vh',left:'9.7vw',color:'red',fontSize:'0.8vw'}}>密码不能为空！</p>
                                    : <p style={{position:'absolute',top:'10vh',left:'5vw',color:'red',fontSize:'1vw'}}></p>
                                }
                                <br />
                                <span style={{ color: 'white' }}></span><input className='addmanager' onChange={this.getTel} type='text' placeholder='请输入手机号'></input>
                                {
                                    this.state.at == 0
                                    ? <p style={{position:'absolute',top:'24.2vh',left:'9.7vw',color:'red',fontSize:'0.8vw'}}>电话不能为空！</p>
                                    : <p style={{position:'absolute',top:'10vh',left:'5vw',color:'red',fontSize:'1vw'}}></p>
                                }
                            </div>
                        </Modal>
                        <Modal
                            style={{ height: '33vh', backgroundColor: 'rgb(68,182,211)', position: 'fixed', left: '35vw', top: '30vh', paddingBottom: '9vh' }}
                            visible={this.state.visible1}
                            onOk={this.handleOk1}
                            onCancel={this.handleCancel1}
                            closable={false}
                            footer={[
                                <Button key="back" onClick={this.handleCancel1} className='footerstyle' style={{ color: 'rgb(68,182,211)', position: 'absolute', backgroundColor: 'white', left: '25%', bottom: '4vh', width: '8vw', height: '4.2vh', borderRadius: '2vh', border: 'unset', cursor: 'pointer' }}>确认</Button>,
                                <Button key="cancel" onClick={this.handleOk1} className='footerstyle' style={{ color: 'rgb(68,182,211)', position: 'absolute', backgroundColor: 'white', left: '52%', bottom: '4vh', width: '8vw', height: '4.2vh', borderRadius: '2vh', border: 'unset', cursor: 'pointer' }}>取消</Button>,
                            ]}
                        >
                            <div style={{ marginTop: '5vh', textAlign: 'center' }}>
                                <span style={{ color: 'white' }}></span><input disabled className='altermanager'  type='text' placeholder={this.state.nname}></input>
                                <br />
                                <span style={{ color: 'white' }}></span><input disabled className='altermanager'  type='text' placeholder={this.state.ntel}></input>
                                <br />
                                <span style={{ color: 'white' }}></span><input className='altermanager' onChange={this.getNewPwd} type='password' placeholder='请输入新密码'></input>
                                {
                                    this.state.xp == 0
                                    ? <p style={{color:'red',fontSize:'0.8vw',position:'absolute',top:'24.3vh',left:'9.6vw'}}>密码不能为空！</p>
                                    : <p style={{color:'red',fontSize:'0.8vw',position:'absolute',top:'5vh',left:'9.6vw'}}></p>
                                }
                                <br />
                                <span style={{ color: 'white' }}></span><input className='altermanager' onChange={this.getReNewPwd} type='password' placeholder='请再次确认新密码'></input>
                                {
                                    this.state.xrp == 0
                                    ? <p style={{color:'red',fontSize:'0.8vw',position:'absolute',top:'31.5vh',left:'9.6vw'}}>密码不能为空！</p>
                                    : <p style={{color:'red',fontSize:'0.8vw',position:'absolute',top:'10vh',left:'9.6vw'}}></p>
                                }
                            </div>
                        </Modal>

                        <div style={{ position: 'fixed', height: '7vh', width: '20vw', left: '50vw', top: '88vh' }}>
                            <a style={{ textDecoration: 'none', marginRight: '2vw' }}>
                                <span onClick={this.setUp} style={{ color: 'RoyalBlue', fontSize: '1.2vw', cursor: 'pointer' }}>上一页</span>
                            </a>
                            <span style={{ fontSize: '1.2vw', color: 'RoyalBlue' }}>{this.state.current}页/ {this.state.totalPage}页</span>
                            <a style={{ textDecoration: 'none', marginLeft: '2vw' }}>
                                <span onClick={this.setNext} style={{ color: 'RoyalBlue', fontSize: '1.2vw', cursor: 'pointer' }}>下一页</span>
                            </a>
                        </div>
                    </table>

                </div>
            </div>
        )
    }
}