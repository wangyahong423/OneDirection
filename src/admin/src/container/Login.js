import React, { Component } from 'react'
import axios from 'axios';
// import { Link } from 'react-router-dom'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pwd: ''
        }
    }
    handleRegister = () => {
        console.log(this.state.name,this.state.pwd);
        let url = `http://localhost:3005/manager/login?name=${this.state.name}&pwd=${this.state.pwd}`;

        axios(url)
            .then((res) => {
                if (res.data.ok) {
                    window.location.href="/home";
                } else {
                    alert(res.data.msg);
                }
                console.log(res.data);

            })
            // .catch(error => alert("账户不存在！"));

    }
    nameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
        // console.log(this.state);
    }
    pwdChange=(e)=>{
        this.setState({
            pwd:e.target.value
        })
        // console.log(this.state);
    }
    
    render() {

        return (
                <div>
                    <div style={{ fontSize: 200, color: "gray" }}>
                    </div>
                    <input onChange={this.nameChange}  placeholder="请输入用户名">
                    </input>
                    <p></p>
                    <input onChange={this.pwdChange} placeholder="请输入密码" >
                    </input>
                    <p></p>
                    <button onClick={this.handleRegister} >登录</button>
                </div>
        )
    }
}
