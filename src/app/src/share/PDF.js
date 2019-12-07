import React, { Component } from 'react'
import MaterialSharing from './MaterialSharing'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import '../share.css'

export default class PDF extends Component {
    render() {
        return (
            <div>
            <div>
                <MaterialSharing/>
            </div>
            <div className="data1">
                <div className="iconfont icon-pdf2"></div>
                <div className="font1">
                    <span style={{fontSize:"18px",fontFamily:"微软雅黑"}}>复习资料</span><br/>
                    <span>11-04</span>&nbsp;&nbsp;
                    <span>来自张晓红</span>&nbsp;&nbsp;
                    <span style={{fontSize:"13px"}}>516k</span>
                </div>
                <div className="data2">
                    <span className="iconfont icon-collection" style={{fontSize:"25px"}}></span><br/>
                </div>
            </div>
            <div className="data1">
                <div className="iconfont icon-pdf2"></div>
                <div className="font1">
                    <span style={{fontSize:"18px",fontFamily:"微软雅黑"}}>复习资料</span><br/>
                    <span>11-04</span>&nbsp;&nbsp;
                    <span>来自张晓红</span>&nbsp;&nbsp;
                    <span style={{fontSize:"13px"}}>516k</span>
                </div>
                <div className="data2">
                    <span className="iconfont icon-collection" style={{fontSize:"25px"}}></span><br/>
                </div>
            </div>
            <div className="data1" style={{borderBottom:"1px solid #4f4f83"}}>
                <div className="iconfont icon-pdf2"></div>
                <div className="font1">
                    <span style={{fontSize:"18px",fontFamily:"微软雅黑"}}>复习资料</span><br/>
                    <span>11-04</span>&nbsp;&nbsp;
                    <span>来自张晓红</span>&nbsp;&nbsp;
                    <span style={{fontSize:"13px"}}>516k</span>
                </div>
                <div className="data2">
                    <span className="iconfont icon-collection" style={{fontSize:"25px"}}></span><br/>

                </div>
            </div>
            <Link to ="AddFile">
            <div style={{position:"fixed",top:"88%",left:"80vw"}}>
                <span className="iconfont icon-jiahao" style={{fontSize:"8vh",color:"#37376F"}}></span>
            </div>
            </Link>  
        </div>
        )
    }
}
