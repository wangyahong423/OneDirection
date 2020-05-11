import React, { Component } from 'react';
import {NavBar} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
export default class Message extends Component {
  render() {
    return (
      <>
        <div style={{position: 'relative'}}>
            <NavBar
                style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
                leftContent={[
                  <Link to="/community"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}
                >
                <span>消息列表</span>
            </NavBar>
            <Link to="/newsone">
              <div style={{height:'20%'}}>
                <div style={{float:"left"}}>
                  <div className="iconfont icon-avatar-lady-sy" style={{fontSize:37,marginLeft:5,color:'black'}}></div>
                  </div>
                  <div>
                    <p style={{marginLeft:55,fontSize:18,color:'black'}}>KIKO</p>
                    <p style={{marginLeft:55,fontSize:10,marginTop:-11,color:'black'}}>你好...</p>
                  </div>
                  <span style={{float:"right",marginTop:-37,marginRight:10,color:'gray'}}>昨天</span>
              </div>
            </Link>
            <div style={{height:'20%'}}>
              <div style={{float:"left"}}>
                <div className="iconfont icon-avatar-lady-sy" style={{fontSize:37,marginLeft:5}}></div>
                </div>
                <div>
                  <p style={{marginLeft:55,fontSize:18}}>宝宝</p>
                  <p style={{marginLeft:55,fontSize:10,marginTop:-11,}}>[图片]</p>
                </div>
                <span style={{float:"right",marginTop:-37,marginRight:10,color:'gray'}}>2019-12-12</span>
            </div>
            <div style={{height:'20%'}}>
              <div style={{float:"left"}}>
                <div className="iconfont icon-avatar-lady-sy" style={{fontSize:37,marginLeft:5}}></div>
                </div>
                <div>
                  <p style={{marginLeft:55,fontSize:18}}>秋风</p>
                  <p style={{marginLeft:55,fontSize:10,marginTop:-11,}}>哈哈哈</p>
                </div>
                <span style={{float:"right",marginTop:-37,marginRight:10,color:'gray'}}>2019-11-11</span>
            </div>
        </div>
      </>
    );
  }
}
