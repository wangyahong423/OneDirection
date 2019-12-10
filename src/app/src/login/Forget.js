import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import {NavBar, Button } from 'antd-mobile';
import axios from 'axios';

export default class Forget extends Component {

    getConnect=()=>{
        console.log(this.state.checkNum,this.state.trueNum)
        let text = {name:this.state.name,pwd:this.state.pwd,repwd:this.state.repwd};
        let send = JSON.stringify(text);
        if(this.checkNum === ""){
            window.alert("验证码不能为空");
        }
        else if(this.state.checkNum == this.state.trueNum){  
            axios(`http://localhost:3005/users/addUser?name=${this.state.name}&pwd=${this.state.pwd}&tel=${this.state.tel}&college=${this.state.college}`)
            .then(
                data=>{
                    if(data.data.ok == 1){
                        window.alert("注册成功");
                        window.location.href='http://localhost:3000/';
                    }
                    else if(data.data.ok == 0){
                      window.alert("注册失败，用户名已存在");
                    }
                    
                }
            )
        }
        else{
            window.alert("请输入正确的验证码");
        }
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
                    leftContent={[
                    <Link to="/"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                    >
                    <span>忘记密码</span>
                </NavBar>
                <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'10vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} placeholder="请输入昵称"></input>
                <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} placeholder="请输入手机号"></input>
                <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} placeholder="请输入新密码"></input>
                <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} placeholder="请再次输入新密码"></input>
                <div style={{width:"70%",textAlign:'center',marginTop:'6vh',}}>
                    <Button style={{background:'#37376f',marginLeft:'40%'}}>
                        <span style={{color:'white',textAlign:'center'}}>提交</span>
                    </Button>
                </div>
            </div>
        )
    }
}
