import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';
import Verificode from './verificode';
import { Modal, Button } from 'antd';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.refreshCode = this.refreshCode.bind(this);
        this.state = {
            name: '',
            pwd: '',
            code: [],
            num: '',
            trueNum: '',
            visible: false,
            nname: '',//修改密码
            npwd: '',//修改密码
            ntel: '',//修改密码
            rnpwd: '',//修改密码
            u: 1,//用户名为空时显示提示，u为0，不为空时不提示，u为1
            p: 1,//密码为空时显示提示，p为0，不为空时不提示，p为1
            y: 1,//验证码为空时显示提示，y为0，不为空时不提示，y为1
            ru: 1,
            rt: 1,
            rp: 1,
            rrp: 1
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
            ru: 1,
            rt: 1,
            rp: 1,
            rrp: 1,
            nname: '',//修改密码
            npwd: '',//修改密码
            ntel: '',//修改密码
            rnpwd: '',//修改密码
        });
    };

    handleCancel = e => {
        if (this.state.nname == '') {
            this.setState({
                ru: 0,
                visible: true
            })
        }
        else if (this.state.ntel == '') {
            this.setState({
                rt: 0,
                visible: true
            })
        }
        else if (this.state.npwd == '') {
            this.setState({
                rp: 0,
                visible: true
            })
        }
        else if (this.state.rnpwd == '') {
            this.setState({
                rrp: 0,
                visible: true
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
                                this.setState({
                                    visible: false,
                                });
                                // window.location.href = 'http://localhost:3000/';
                            }
                        }
                    )
            }
            else {
                alert('密码不一致！');
                this.setState({
                    visible: true,
                });
            }

        }

    };
    refreshCode() {
        this.GetVerifiCode();
    }
    GetVerifiCode() {
        this.setState({
            code: this.genRandomString(4)
        });
    }
    genRandomString = len => {
        const text = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const rdmIndex = text => Math.random() * text.length | 0;
        let rdmString = '';
        for (; rdmString.length < len; rdmString += text.charAt(rdmIndex(text)));
        this.setState({
            trueNum: rdmString
        })
        return rdmString;
    }

    componentDidMount() {
        this.GetVerifiCode();
    }

    handleRegister = () => {
        if (this.state.name == '') {
            this.setState({
                u: 0
            })
        }
        else if (this.state.pwd == '') {
            this.setState({
                p: 0
            })
        }
        else if (this.state.num == '') {
            this.setState({
                y: 0
            })
        }
        else {
            if (this.state.num != this.state.trueNum) {
                alert('请输入正确的验证码！');
            }
            else {
                let url = `http://139.155.44.190:3005/manager/login?name=${this.state.name}&pwd=${this.state.pwd}`;
                axios(url)
                    .then((res) => {
                        if (res.data.ok) {
                            let url1 = `http://139.155.44.190:3005/manager/getName?name=${this.state.name}`;
                            axios(url1)
                                .then((res) => {
                                })
                            alert('登陆成功！')
                            window.location.href = "/home";
                        } else {
                            alert(res.data.msg);
                        }
                    })
            }
        }

    }
    nameChange = (e) => {
        if (e.target.value != '') {
            this.setState({
                u: 1,
                name: e.target.value
            })
        }
        else {
            this.setState({
                u: 0,
            })
        }
    }
    pwdChange = (e) => {
        if (e.target.value != '') {
            this.setState({
                p: 1,
                pwd: e.target.value
            })
        }
        else {
            this.setState({
                p: 0,
            })
        }
    }
    numChange = (e) => {
        if (e.target.value != '') {
            this.setState({
                y: 1,
                num: e.target.value
            })
        }
        else {
            this.setState({
                y: 0,
            })
        }
    }
    getNewName = (e) => {
        if (e.target.value != '') {
            this.setState({
                nname: e.target.value,
                ru: 1
            })
        }
        else {
            this.setState({
                ru: 0
            })
        }

    }
    getNewTel = (e) => {
        if (e.target.value != '') {
            this.setState({
                ntel: e.target.value,
                rt: 1
            })
        }
        else {
            this.setState({
                rt: 0
            })
        }
    }
    getNewPwd = (e) => {
        if (e.target.value != '') {
            this.setState({
                npwd: e.target.value,
                rp: 1
            })
        }
        else {
            this.setState({
                rp: 0
            })
        }
    }
    getReNewPwd = (e) => {
        if (e.target.value != '') {
            this.setState({
                rnpwd: e.target.value,
                rrp: 1
            })
        }
        else {
            this.setState({
                rrp: 0
            })
        }
    }
    render() {
        const ownStyle = {
            width: 'calc(100% )',
            height: '6vh',
            margin: '0px 0',
            backgroundColor: '#ffffff'
        };
        const { code } = this.state;
        return (
            <div style={{ height: '60vh', width: '50vw', margin: '0 auto', textAlign: 'center', marginTop: '20vh', }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.45)', height: '60vh', width: '25vw', margin: '0 auto', float: 'left' }}>
                    <img style={{ height: '21vh', width: '10vw', borderRadius: '10vw', marginTop: '10vh' }} src={require('../img/app.jpg')} />
                    <h1 style={{ color: 'white' }}>Welcome!</h1>
                    <h1 style={{ color: 'white' }}>校园新生通管理系统!</h1>
                </div>
                <div style={{ backgroundColor: 'rgba(65,105, 225, 0.8)', height: '60vh', width: '25vw', margin: '0 auto', textAlign: 'center', float: 'left' }}>
                    <input onChange={this.nameChange} style={{ marginTop: '10vh', height: '6vh', width: '19vw', fontSize: '1.2vw', paddingLeft: '1vw', fontFamily: '楷体', border: 'none' }} placeholder="请输入用户名"></input>
                    {
                        this.state.u == 0
                            ? <p style={{ position: 'absolute', top: '35vh', left: '53.5vw', fontSize: '1vw', color: 'red' }}>请输入用户名！</p>
                            : <p style={{ position: 'absolute', top: '35vh', left: '53.5vw', fontSize: '1vw', color: 'red' }}></p>
                    }
                    <input type='password' onChange={this.pwdChange} maxLength="16" style={{ height: '6vh', width: '19vw', fontSize: '1.2vw', paddingLeft: '1vw', marginTop: '4vh', fontFamily: '楷体', border: 'none', marginBottom: '2vh' }} placeholder="请输入密码" ></input>
                    {
                        this.state.p == 0
                            ? <p style={{ position: 'absolute', top: '45.5vh', left: '53.5vw', fontSize: '1vw', color: 'red' }}>请输入密码！</p>
                            : <p style={{ position: 'absolute', top: '45.5vh', left: '53.5vw', fontSize: '1vw', color: 'red' }}></p>
                    }
                    <div style={{ height: '6vh', marginLeft: '2.5vw', width: '20vw', lineHeight: '6vh', marginTop: '2vh' }}>
                        <input onChange={this.numChange} style={{ width: '7vw', height: '5.8vh', float: 'left', border: 'none', paddingLeft: '1vw', fontSize: '1.2vw', fontFamily: '楷体' }} placeholder="输入验证码"></input>
                        {
                            this.state.y == 0
                                ? <p style={{ position: 'absolute', top: '53.5vh', left: '53.5vw', fontSize: '1vw', color: 'red' }}>请输入验证码！</p>
                                : <p style={{ position: 'absolute', top: '53.5vh', left: '53.5vw', fontSize: '1vw', color: 'red' }}></p>
                        }
                        <div style={{ width: '10vw', height: '6vh', float: 'right', }}>
                            <Verificode ownStyle={ownStyle} onGetRefresh={this.refreshCode} data={code}></Verificode>
                        </div>
                    </div>
                    <h1 style={{ height: '2vh' }}></h1>
                    <span onClick={this.handleRegister} style={{ fontSize: '1.3vw', cursor: 'pointer', width: '11vw', color: 'blue', fontFamily: '楷体', backgroundColor: 'rgba(255, 255, 255, 0.45)', borderRadius: '2vw', padding: '0.8vw 4.5vw' }} >登录</span>
                    &emsp;&emsp;&emsp;<span onClick={this.showModal} style={{ fontSize: '1.2vw', fontFamily: '楷体', paddingTop: '1vh', cursor: 'pointer', color: 'white', textDecoration: 'underline' }}>忘记密码?</span>
                </div>
                <Modal
                    style={{ height: '34vh', backgroundColor: 'rgb(68,182,211)', position: 'fixed', left: '35vw', top: '30vh', paddingBottom: '9vh' }}
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
                        <span style={{ color: 'white' }}></span><input className='altermanager' onChange={this.getNewName} type='text' placeholder='请输入用户名'></input>
                        {
                            this.state.ru == 0
                                ? <p style={{ position: 'absolute', top: '9.8vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}>用户名不能为空！</p>
                                : <p style={{ position: 'absolute', top: '9.8vh', left: '9vw', color: 'red', fontSize: '0.8vw' }}></p>
                        }
                        <br />
                        <span style={{ color: 'white' }}></span><input className='altermanager' onChange={this.getNewTel} type='text' placeholder='请输入电话'></input>
                        {
                            this.state.rt == 0
                                ? <p style={{ position: 'absolute', top: '17vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}>电话不能为空！</p>
                                : <p style={{ position: 'absolute', top: '17vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}></p>
                        }
                        <br />
                        <span style={{ color: 'white' }}></span><input className='altermanager' onChange={this.getNewPwd} type='password' placeholder='请输入新密码'></input>
                        {
                            this.state.rp == 0
                                ? <p style={{ position: 'absolute', top: '24.3vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}>密码不能为空！</p>
                                : <p style={{ position: 'absolute', top: '17vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}></p>
                        }
                        <br />
                        <span style={{ color: 'white' }}></span><input className='altermanager' onChange={this.getReNewPwd} type='password' placeholder='请再次确认新密码'></input>
                        {
                            this.state.rrp == 0
                                ? <p style={{ position: 'absolute', top: '31.3vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}>密码不能为空！</p>
                                : <p style={{ position: 'absolute', top: '17vh', left: '9.6vw', color: 'red', fontSize: '0.8vw' }}></p>
                        }
                    </div>
                </Modal>
            </div>
        )
    }
}
