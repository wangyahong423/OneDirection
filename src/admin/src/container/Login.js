import React, { Component } from 'react'
import axios from 'axios';
import '../App.css';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: ''
        }
    }
    handleRegister = () => {
        let url = `http://localhost:3005/manager/login?name=${this.state.name}&pwd=${this.state.pwd}`;
        axios(url)
            .then((res) => {
                if (res.data.ok) {
                    let url1 = `http://localhost:3005/manager/getName?name=${this.state.name}`;
                    axios(url1)
                        .then((res) => {

                        })
                    window.location.href = "/home";
                } else {
                    alert(res.data.msg);
                }
            })
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    pwdChange = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }

    render() {
        return (
            <div className='loginBackground' style={{ marginTop: '12%', backgroundColor: 'rgba(0,0,0, 0.7)' }}>
                <input onChange={this.nameChange} style={{ marginTop: '100px', height: '38px', width: '300px', fontSize: '20px', paddingLeft: '20px',fontFamily:'楷体' }} placeholder="请输入用户名"></input>
                <p></p>
                <input type='password' onChange={this.pwdChange} maxlength="16" style={{ height: '38px', width: '300px', fontSize: '20px', paddingLeft: '20px', marginTop: '20px',fontFamily:'楷体' }} placeholder="请输入密码" ></input>
                <p></p>
                <button onClick={this.handleRegister} style={{ height: '40px', width: '80px', fontSize: '28px', marginTop: '20px',fontFamily:'楷体' }} >登录</button>
                <p style={{ color: 'white', fontSize: '20px', marginTop: '50px' }}>欢迎登陆校园新生通后台管理系统！</p>
            </div>
        )
    }
}
