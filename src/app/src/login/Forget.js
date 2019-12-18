import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Button } from 'antd-mobile';
import axios from 'axios';

export default class Forget extends Component {
    constructor() {
        super();
        this.state = {
            newPwd: '',
            reNewPwd: ''
        }
    }
    getNewPwd = (e) => {
        this.setState({
            newPwd: e.target.value
        })
    }
    getReNewPwd = (e) => {
        this.setState({
            reNewPwd: e.target.value
        })
    }
    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    telChange = (e) => {
        this.setState({
            tel: e.target.value
        })
    }
    getRepwd = () => {
        axios(`http://localhost:3005/users/judge?name=${this.state.name}&tel=${this.state.tel}`)
            .then(
                data => {
                    if (data.data.ok == 1) {
                        axios(`http://localhost:3005/users/alter?name=${this.state.name}&pwd=${this.state.newPwd}&tel=${this.state.tel}`)
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
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>忘记密码</span>
                </NavBar>
                <input onChange={this.nameChange} style={{ width: '75vw', height: '6vh', marginLeft: '10vw', marginTop: '10vh', border: 'none', borderRadius: '3vw', paddingLeft: '5vw' }} className="iconfont icon-wode" count={100} placeholder="请输入昵称"></input>
                <input onChange={this.telChange} style={{ width: '75vw', height: '6vh', marginLeft: '10vw', marginTop: '3vh', border: 'none', borderRadius: '3vw', paddingLeft: '5vw' }} className="iconfont icon-wode" count={100} placeholder="请输入手机号"></input>
                <input type='password' onChange={this.getNewPwd} style={{ width: '75vw', height: '6vh', marginLeft: '10vw', marginTop: '3vh', border: 'none', borderRadius: '3vw', paddingLeft: '5vw' }} className="iconfont icon-wode" count={100} placeholder="请输入新密码"></input>
                <input type='password' onChange={this.getReNewPwd} style={{ width: '75vw', height: '6vh', marginLeft: '10vw', marginTop: '3vh', border: 'none', borderRadius: '3vw', paddingLeft: '5vw' }} className="iconfont icon-wode" count={100} placeholder="请再次输入新密码"></input>
                <div style={{ width: "70%", textAlign: 'center', marginTop: '6vh', }}>
                    <Button onClick={this.getRepwd} style={{ background: '#37376f', marginLeft: '40%' }}>
                        <span style={{ color: 'white', textAlign: 'center' }}>提交</span>
                    </Button>
                </div>
            </div>
        )
    }
}
