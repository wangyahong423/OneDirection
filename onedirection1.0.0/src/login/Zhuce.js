import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
import { NavBar} from 'antd-mobile';
import { List, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
class Zhuce extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{position:'relative'}}>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
            leftContent={[
                <Link to="/"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>注册</span>

        </NavBar>
        
        <List renderHeader={() => ''} style={{marginTop:"1vh",width:'80%',marginLeft:'10%'}}>
          <TextareaItem
            {...getFieldProps('note5')}
            placeholder="请输入昵称"
            count={100}
            className="iconfont icon-wode"
          />
        </List>
        <List renderHeader={() => ''} style={{marginTop:"1vh",width:'80%',marginLeft:'10%'}}>
          <TextareaItem
            {...getFieldProps('note5')}
            placeholder="请输入所在学院"
            count={100}
            className="iconfont icon-wode"
          />
        </List>
        <List renderHeader={() => ''} style={{marginTop:"1vh",width:'80%',marginLeft:'10%'}}>
          <TextareaItem
            {...getFieldProps('note5')}
            placeholder="请输入手机号"
            count={100}
            className="iconfont icon-wode"
          />
        </List>
        <List renderHeader={() => ''} style={{marginTop:"1vh",width:'40%',marginLeft:'10%',float:'left'}}>
          <TextareaItem
            {...getFieldProps('note5')}
            placeholder="请输入验证码"
            count={100}
            className="iconfont icon-wode"
          />
        </List>
        <button style={{marginTop:'5vh',height:'5vh',marginLeft:'5%'}}>获取验证码</button>
        <List renderHeader={() => ''} style={{marginTop:"1vh",width:'80%',marginLeft:'10%'}}>
          <TextareaItem
            {...getFieldProps('note5')}
            placeholder="请输入密码"
            count={100}
            className="iconfont icon-wode"
          />
        </List>
        <List renderHeader={() => ''} style={{marginTop:"1vh",width:'80%',marginLeft:'10%'}}>
          <TextareaItem
            {...getFieldProps('note5')}
            placeholder="请确认密码"
            count={100}
            className="iconfont icon-wode"
          />
        </List>
        <Link to="/">
        <div style={{width:"70%",textAlign:'center',marginTop:'6vh',}}>
            <Button style={{background:'#37376f',marginLeft:'40%'}}>
                <span style={{color:'white',textAlign:'center'}}>注册</span>
            </Button>
        </div>
        </Link>
      </div>
    );
  }
}
const ZhuceWrapper = createForm()(Zhuce);
export default ZhuceWrapper