import React, { Component } from 'react'
import { NavBar, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import '../share.css'
import axios from 'axios';

export default class MaterialSharing extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            color:false,
        }
    }
    componentDidMount() {
        let url = `http://localhost:3005/file/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    addCollect = (name, filepath) => {
        let url1 = `http://localhost:3005/collect/add?filepath=${name}&name=李四`;
        axios(url1)
            .then((res) => {
                console.log('收藏成功');
                // if (res.err) {
                //     alert('收藏失败');
                // } else {
                //     console.log(1);
                //     alert('收藏成功');
                // }
            })
            console.log(this.state.name);


    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', width: '100vw', position: 'fixed', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                    rightContent={[
                        <form method="post" action="http://localhost:3005/file/addFile" encType="multipart/form-data">
                            <div style={{ height: "5vh", width: "5vh", fontSize:"3vh",marginTop:"2vh"}} className=" iconfont icon-shangchuanwenjian">
                            <input type="submit" value="上传" style={{opacity:"0", position: "fixed", top: "1vh", left: "80vw" }}></input>
                            </div>
                            <div style={{ height: '8vh', width: '8vh', position: "fixed", top: "88%", left: "75vw" }}>
                                <span className="iconfont icon-jiahao" style={{ fontSize: "8vh", color: "#37376F" }}></span>
                                <input type="file" name="inputFile" multiple="multiple" style={{ opacity: 0, height: '8vh', width: '8vh', borderRadius: "50%", position: "fixed", top: "88%", left: "80vw" }}></input>
                            </div>
                        </form>
                    ]}>
                    资料共享
                </NavBar>
                <div style={{ position: 'fixed',top:'0', width: "100vw" }}>
                    <WingBlank><div className="sub-title"></div></WingBlank>
                    <SearchBar placeholder="搜索" maxLength={8} />
                </div>
                <div style={{marginTop:"13vh"}}>
                    {
                        this.state.data.map((item) => (
                            <div>
                                <div className="data1">
                                    <div style={{ float: "left" }}>
                                        <div className="iconfont icon-wenjian"></div>
                                        <div className="font1">
                                            <span>{item.filepath}</span><br />
                                            <span style={{ fontSize: "1vh" }}>{item.time}</span>&nbsp;&nbsp;
                                        <span style={{ fontSize: "1vh" }}>{item.name}</span>&nbsp;&nbsp;
                                        </div>
                                    </div>
                                    <span className="iconfont icon-collection" style={{ fontSize: "25px" }} onClick={this.addCollect.bind(this, (item.name, item.filepath))}></span><br />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
