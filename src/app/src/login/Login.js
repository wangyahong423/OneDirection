import React, { Component } from 'react';
import { List, TextareaItem,Button } from 'antd-mobile';
import axios from 'axios';
import { createForm } from 'rc-form';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        pwd: ''
    }
}
get=(e)=>{
  this.setState({
    username:e.target.value
  })
  console.log(e.target.value)
}
getFir=(e)=>{
  this.setState({
    pwd:e.target.value
  })
  console.log(e.target.value)
}
handleRegister = () => {
    console.log(this.state.username,this.state.pwd);
    let url = `http://localhost:3005/users/login?name=${this.state.username}&pwd=${this.state.pwd}`;
    axios(url)
        .then((res) => {
            if (res.data.ok) {
                alert(res.data.msg);
                window.location.href='http://localhost:3000/login';
            } else {
                alert(res.data.msg);
            }
            console.log(res.data);
        })
        // .catch(error => alert("账户不存在！"));

}
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{position:'relative'}}>
        <div style={{marginTop:'8vh',width:'100%',textAlign:'center'}}>
            <img src={require('./img/new.jpg')} style={{width:'35%',height:'35%',borderRadius:'80%'}}/>
        </div>
        <div style={{width:'100%',textAlign:'center',marginTop:'2vh'}}>
            <span style={{color:'#37376f',fontSize:25}}>校园新生通</span>
        </div>

        <input placeholder="                                输入账号" style={{marginTop:"2vh",width:'80%',marginLeft:'10%',height:35,borderRadius:10}} onChange={this.get}/>
        <input placeholder="                                输入密码" style={{marginTop:"3vh",width:'80%',marginLeft:'10%',height:35,borderRadius:10,}} onChange={this.getFir}/>
       
        
        {/* <Link to="/login"> */}
        <div style={{width:"70%",textAlign:'center',marginTop:'6vh',}} onClick={this.handleRegister} >
            <Button style={{background:'#37376f',marginLeft:'40%'}} >
                <span style={{color:'white',textAlign:'center'}} >登录</span>
            </Button>
        </div>
        {/* </Link> */}
        <div style={{width:'100%',marginTop:'8vh',color:'blue',textAlign:'center'}}>
            <span >忘记密码？</span>
            <Link to="/zhuce"><span style={{marginLeft:'35%',color:'blue'}}>没有账号  去注册？</span></Link>
        </div>
        {/* <div style={{marginTop:"3vh"}}>
            <img src={require('./img/denglu.jpg')} style={{width:'100%'}}/>
        </div> */}
        {/* <div style={{width:'100%',textAlign:'center',marginTop:'5%'}}>
            <span><img src={require('./img/weixin.jpg')} style={{width:'10vw',height:'10vw'}} /></span>
            <span><img src={require('./img/weibo.jpg')} style={{width:'10vw',height:'10vw',marginLeft:30}} /></span>
            <span><img src={require('./img/QQ.jpg')} style={{width:'10vw',height:'10vw',marginLeft:30}} /></span>
        </div> */}
      </div>
    );
  }
}
const LoginWrapper = createForm()(Login);
export default LoginWrapper;