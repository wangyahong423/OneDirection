import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class My extends Component {
    render() {
        return (
            <div>
                <NavBar style={{width:'100%',backgroundColor:'#37376f',color:'#fff',position:'fixed ',top:'0',zIndex:1,height:'7vh'}}
                >我的</NavBar>                    
                    <div className="one">
                    </div>
                    <div style={{height:'100px',width:'100px',borderRadius:'50%',opacity:'1',zIndex:"10",marginTop:'-45px',overflow:'hidden',marginLeft:'20px'}} >
                        <img src={require('./img/touxiang.jpeg')} style={{height:'100px',width:'100px',opacity:'1'}}/>
                    </div>
                    <div style={{marginTop:'-60px',marginLeft:'150px'}}>
                        <p>摩卡加冰</p>
                        <p>河北师范大学软件学院</p>
                    </div>
                    <div>
                    <List style={{marginTop:'18px'}}>
                        <Link to="/shoucangone">
                        <Item
                            arrow="horizontal"
                            onClick={() => {}}
                            className='iconfont icon-collection'
                            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px',color:'black'}}
                        ><span style={{marginLeft:'40px',fontSize:'20px'}}>我的收藏</span></Item>
                        </Link>
                        <Link to="/tongxunlvone">
                        <Item
                            arrow="horizontal"
                            onClick={() => {}}
                            className='iconfont icon-tongxunlu'
                            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px',color:'black'}}
                        ><span style={{marginLeft:'40px',fontSize:'20px'}}>通讯录</span></Item>
                        </Link>
                        <Link to="/wm">
                        <Item
                            arrow="horizontal"
                            onClick={() => {}}
                            className='iconfont icon-tuandui'
                            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px',color:'black'}}
                        ><span style={{marginLeft:'40px',fontSize:'20px'}}>关于我们</span></Item>
                        </Link>
                        <Link to="/yonghufankui">
                        <Item
                            arrow="horizontal"
                            onClick={() => {}}
                            className='iconfont icon-tianmaotishi-yiwen'
                            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px',color:'black'}}
                        ><span style={{marginLeft:'40px',fontSize:'20px'}}>用户反馈</span></Item>
                        </Link>
                        <Link to="/shezhi">
                        <Item
                            arrow="horizontal"
                            onClick={() => {}}
                            className='iconfont icon-shezhi1'
                            style={{paddingLeft:'20px',borderBottom:'1px solid grey',height:'60px',color:'black'}}
                        ><span style={{marginLeft:'40px',fontSize:'20px'}}>设置</span></Item>
                        </Link>
                    </List>
                </div>
            </div>
        )
    } 
}

