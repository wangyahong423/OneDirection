import { NavBar} from 'antd-mobile';
import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
export default class Ping extends Component {
    render() {
        return (
            <>
            <div style={{ position: 'relative' }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center'}}
                    leftContent={[
                        <Link to="/community"><span style={{fontSize:'15px',color:'white'}}>取消</span></Link>
                      ]}
                    rightContent={[
                        <Link to="/community"><span  style={{fontSize:'15px',color:'white'}}>发送</span></Link>
                    ]}
                >
                <span>评论</span>
                </NavBar>
                <div style={{height:'20%',color:'black'}}>
                    <div style={{float:"left"}}>
                        <div className="iconfont icon-Mian-sy" style={{fontSize:37,marginLeft:5}}></div>
                    </div>
                    <div>
                        <p style={{marginLeft:55}}>hello</p>
                        <p style={{marginLeft:55}}>今天11:03</p>
                    </div>
                    <p style={{marginLeft:15}}>有没有学姐说一下软件工程大一上学期学的什么科目呀？</p>
                    <div style={{marginTop:20}}>
                        <sapn className="iconfont icon-fenxiang1-sy" style={{fontSize:35,marginLeft:'17%',color:'black'}}></sapn>
                        <sapn className="iconfont icon-icon-test-sy" style={{fontSize:35,marginLeft:'20%',color:'black'}}></sapn>
                        <sapn className="iconfont icon-zan-sy" style={{fontSize:38,marginLeft:'23%'}}></sapn>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
