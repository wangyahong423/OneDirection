import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import {NavBar, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import {  provinceLite } from 'antd-mobile-demo-data';
import axios from 'axios';

class Zhuce extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      college:'',
      tel:'',
      pwd:'',
      repwd:'',
      trueNum:"",
      checkNum:""
    }
  }
  nameChange=(e)=>{
    this.setState({
        name:e.target.value
    })
  }
  collegeChange=(e)=>{
    this.setState({
        college:e.target.value
    })
  }
  telChange=(e)=>{
    this.setState({
        tel:e.target.value
    })
  }
  pwdChange=(e)=>{
    this.setState({
        pwd:e.target.value
    })
  }
  repwdChange=(e)=>{
    this.setState({
        repwd:e.target.value
    })
  }

  numChange=(e)=>{
    this.setState({
      checkNum:e.target.value
    },()=>{
      console.log(this.state.checkNum)

    })
  }

  getCode=()=>{
    let url = `http://localhost:3005/users/Getnum?tel=${this.state.tel}`;
    axios(url)
    .then(
        data=>{
            console.log(data);
            this.setState({
              trueNum:data.data.trueNum
            })
        }
    )
  }
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
              console.log(1111111,data)
              console.log(22222,data.data.ok)
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
  state = {
    colorValue: ['#00FF00'],
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
 
  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{position:'relative'}}>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
            leftContent={[
              <Link to="/"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>用户注册</span>

        </NavBar>
        <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'10vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.nameChange} placeholder="请输入昵称"></input>
        <input onChange={this.collegeChange} style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} placeholder="请输入所在学院"></input>
        <input style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.telChange} placeholder="请输入手机号"></input>
        <input style={{width:'50vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.numChange} placeholder="请输入验证码"></input>
        <button onClick={this.getCode} style={{marginTop:'5vh',height:'5vh',marginLeft:'5%'}}>获取验证码</button>
        <input type='password' style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.pwdChange} placeholder="请输入密码"></input>
        <input type='password' style={{width:'75vw',height:'6vh',marginLeft:'10vw',marginTop:'3vh',border:'none',borderRadius:'3vw',paddingLeft:'5vw'}} className="iconfont icon-wode" count={100} onChange={this.repwdChange} placeholder="请再次输入密码"></input>
        <div style={{width:"70%",textAlign:'center',marginTop:'6vh',}}>
            <Button onClick={this.getConnect} style={{background:'#37376f',marginLeft:'40%'}}>
                <span style={{color:'white',textAlign:'center'}}>注册</span>
            </Button>
        </div>
      </div>
    );
  }
}
const ZhuceWrapper = createForm()(Zhuce);
const TestWrapper = createForm()(Zhuce);
export default ZhuceWrapper