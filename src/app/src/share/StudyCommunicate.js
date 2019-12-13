import React, { Component } from 'react'
import { NavBar, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class MaterialSharing extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = `http://localhost:3005/learn/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width:"100vw",top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    学习交流</NavBar>
                    <div style={{ position: 'fixed',top:'0', width: "100vw" }}>
                    <WingBlank><div className="sub-title"></div></WingBlank>
                    <SearchBar placeholder="搜索" maxLength={8} />
                </div>
                {/* <div style={{ marginTop: "-6vh" }}>
                    <WingBlank><div className="sub-title"></div></WingBlank>
                    <SearchBar placeholder="搜索" maxLength={8} />
                </div> */}
                <div style={{marginTop:"13vh"}}>
                    {
                        this.state.data.map((item) => (
                            <div style={{ width: "96vw", paddingBottom: "1vh", backgroundColor: "#fff", borderRadius: "2vh", margin: "2vw" }}>
                                <div style={{ height: "10vh", width: "90vw" }}>
                                    <img src={(`studyCommunicate/1.jpg`)} style={{ height: "8vh", width: "8vh", borderRadius: "50%", margin: "1vh", float: "left" }}></img>
                                    <div style={{ height: "8vh", width: "60vw", float: "left" }}>
                                        <p style={{ margin: "2vh 0 0 2vh", fontSize: "2vh", float: "left" }}>{item.name}</p>
                                        <p style={{ fontSize: "1vh", float: "left", margin: "6vh 0 0 -9vh" }}>{item.time}</p>
                                    </div>
                                </div>
                                <div style={{ width: "90vw", margin: "3vw" }}>
                                    <span>
                                        {item.content}
                                    </span>
                                    <hr></hr>
                                    <span className="iconfont icon-zhuanfa" style={{ fontSize: "4vw", margin: "0 12vw 0 13vw" }}>
                                    </span>
                                    <Link to="/CommunicataDetails">
                                        <span className="iconfont icon-pinglun" style={{ fontSize: "6vw", margin: "0 12vw 0 13vw" }}>
                                        </span>
                                    </Link>
                                    <span className="iconfont icon-dianzan">
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to="Communicate">
                    <div style={{ position: "fixed", top: "88%", left: "80vw" }}>
                        <span className="iconfont icon-jiahao" style={{ fontSize: "8vh", color: "#37376F" }}></span>
                    </div>
                </Link>
            </div>
        )
    }
}
