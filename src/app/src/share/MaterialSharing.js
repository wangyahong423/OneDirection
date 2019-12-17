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
            todo: [],
            start: true,
            name: "",
            defaultColor: false,
            search: ''
        }
    }
    changeSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    componentDidMount() {
        let url = `http://localhost:3005/file/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
        let url1 = `http://localhost:3005/users/getName`;
        axios(url1)
            .then((res) => {
                console.log(res.data.name);
                this.setState({
                    name: res.data.name
                })
                console.log(this.state.name)
            })

    }

    addCollect = (filepath, e) => {
        this.setState({
            start: !this.state.start
        })
        console.log(this.state.start);
        if (this.state.start == true) {
            let url = `http://localhost:3005/collect/add?filepath=${filepath}&name=${this.state.name}`;
            console.log(url)

            axios(url)
                .then((res) => {
                })

        }
        else {

            let url1 = `http://localhost:3005/collect/delete?filepath=${filepath}&name=${this.state.name}`;
            axios(url1)
                .then((res) => {
                    if (res.err) {
                        alert('收藏失败');
                    } else {
                        console.log(1);
                        alert('收藏成功');
                    }
                })
        }
    }

    reloadPage = () => {
        window.location.reload();
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            window.location.href = "http://localhost:3000/MaterialSharing";
        } else {
            this.setState({
                search: e.target.value
            })
        }
        console.log(this.state.arr)
    }
    clickSend = (id) => {
        //要执行的代码
        let url = `http://localhost:3005/file/select?title=${this.state.search}`;
        axios(url)
            .then((res) => {
                console.log(res.data)
                if (res.data.false) {
                    console.log('false');
                }
                else {
                    console.log(res.data);
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://localhost:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data
                    })
                    console.log(res.data);
                }
            })
    };
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', width: '100vw', position: 'fixed', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                    rightContent={[
                        <form method="post" action={"http://localhost:3005/file/addFile?name=" + this.state.name} encType="multipart/form-data">
                            <div style={{ height: "5vh", width: "5vh", fontSize: "3vh", marginTop: "2vh" }} className=" iconfont icon-shangchuanwenjian" >
                                <input type="submit" value="上传" style={{ opacity: "0", position: "fixed", top: "1vh", left: "80vw" }} onClick={this.reloadPage}></input>
                            </div>
                            <div style={{ height: '8vh', width: '8vh', position: "fixed", top: "88%", left: "75vw" }}>
                                <span className="iconfont icon-jiahao" style={{ fontSize: "8vh", color: "#37376F" }}></span>
                                <input type="file" name="inputFile" multiple="multiple" style={{ opacity: 0, height: '8vh', width: '8vh', borderRadius: "50%", position: "fixed", top: "88%", left: "80vw", color: "black" }}></input>
                            </div>
                        </form>
                    ]}>
                    资料共享
                </NavBar>
                <div style={{ position: "fixed", top: '7vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.clickSend} style={{ width: '15vw', float: 'left', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <div style={{ marginTop: "13vh" }}>
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
                                    <span className="iconfont icon-collection" onClick={this.addCollect.bind(this, (item.filepath))}></span><br />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}