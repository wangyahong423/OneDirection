import React, { Component } from 'react'
import MaterialSharing from './MaterialSharing'
import { List, Checkbox, Flex } from 'antd-mobile';
import { NavBar, SearchBar, WingBlank, SegmentedControl} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
const CheckboxItem = Checkbox.CheckboxItem;



export default class Add extends Component {
  onChange = (val) => {
    console.log(val);
  }
    render() {
        const data = [
            {
            value: 0, 
            label:  <div style={{height:"8vh",lineHeight:"8vh",width:"100%",float:"left"}}>
                        <div style={{margin:"0 5vw 0 5vw",fontSize:"40px",color:"#1c57a5",float:"left"}} className="iconfont icon-word"></div>
                        <div style={{height:"4vh",width:"40vw",margin:"2vh 0 2vh 0",float:"left",lineHeight:"4vh"}}>
                            <span style={{fontSize:"18px",fontFamily:"微软雅黑"}}>复习资料</span>&nbsp;&nbsp;
                            <span style={{fontSize:"13px"}}>516k</span>
                        </div>
                    </div>
            },
            { 
            value: 1,
            label:  <div style={{height:"8vh",lineHeight:"8vh",width:"100%",float:"left"}}>
                        <div style={{margin:"0 5vw 0 5vw",fontSize:"40px",color:"#e24c4c",float:"left"}} className="iconfont icon-ppt"></div>
                        <div style={{height:"4vh",width:"40vw",margin:"2vh 0 2vh 0",float:"left",lineHeight:"4vh"}}>                                <span style={{fontSize:"18px",fontFamily:"微软雅黑"}}>复习资料</span>&nbsp;&nbsp;
                            <span style={{fontSize:"13px"}}>516k</span>
                        </div>
                    </div>
            },
            { 
            value: 2,
            label:  <div style={{height:"8vh",lineHeight:"8vh",width:"100%",float:"left"}}>
                        <div style={{margin:"0 5vw 0 5vw",fontSize:"40px",color:"#960d0d",float:"left"}} className="iconfont icon-pdf2"></div>
                        <div style={{height:"4vh",width:"40vw",margin:"2vh 0 2vh 0",float:"left",lineHeight:"4vh"}}>
                            <span style={{fontSize:"18px",fontFamily:"微软雅黑"}}>复习资料</span>&nbsp;&nbsp;
                            <span style={{fontSize:"13px"}}>516k</span>
                        </div>
                    </div>
            },
        ];
        return (
        <div>
                <div>
                <NavBar style={{backgroundColor:'#37376F',color:'#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center'}}
                leftContent={[
                    <Link to="/Word"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                资料共享</NavBar> 
            <div>
                <WingBlank><div className="sub-title"></div></WingBlank>
                <SearchBar placeholder="搜索" maxLength={8} />
                <div style={{margin:"2vh 5vw 3vh 5vw",textAlign:"center",height:"5vh",width:"23vw",
                            backgroundColor:"#98b4e7",float:"left",lineHeight:"5vh",borderRadius:"3vh"}} >
                    <Link to ="Word">
                        <span style={{color:"#000"}}>Word</span>
                    </Link>
                </div>
                <div style={{margin:"2vh 5vw 3vh 5vw",textAlign:"center",height:"5vh",width:"23vw",
                            backgroundColor:"#98b4e7",float:"left",lineHeight:"5vh",borderRadius:"3vh"}}>
                    <Link to ="PDF">
                        <span style={{color:"#000"}}>PDF</span>
                    </Link>
                </div>
                <div style={{margin:"2vh 5vw 3vh 5vw",textAlign:"center",height:"5vh",width:"24vw",
                            backgroundColor:"#98b4e7",float:"left",lineHeight:"5vh",borderRadius:"3vh"}}>
                    <Link to ="PPT">
                        <span style={{color:"#000"}}>PPT</span>
                    </Link>
                </div>
            </div>
                </div> 
            <div>
            <List renderHeader={() => '选择要上传的文件'}>
                {data.map(i => (
                <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
                    {i.label}
                </CheckboxItem>
                ))}
            </List>
            </div>
                <button className="button">发送</button>
        </div>
        )
    }
}
