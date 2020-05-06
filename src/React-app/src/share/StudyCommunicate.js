import { NavBar, ActionSheet } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default class MaterialSharing extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            color: [],
            yonghu: [],
            pic: [],
            name: ''
        };
    }

    componentDidMount() {
        let url = `http://139.155.44.190:3005/learn/list`;
        let url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url4 = `http://139.155.44.190:3005/users/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
                axios(url4)
                    .then((res) => {
                        for (var i = 0; i < res.data.length; i++) {
                            res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic
                        }
                        this.setState({
                            yonghu: res.data
                        })
                        var qrr = []
                        var a = 0;
                        for (var i = 0; i < this.state.data.length; i++) {
                            for (var j = 0; j < this.state.yonghu.length; j++) {
                                if (this.state.data[i].name == this.state.yonghu[j].name) {
                                    a = this.state.yonghu[j].pic;
                                    break;
                                }
                                else {
                                    a = 0;
                                }
                            }
                            if (a != 0) {
                                qrr.push(a)
                            }
                        }
                        this.setState({
                            pic: qrr
                        })
                    })
                axios(url2)
                    .then((res) => {
                        this.setState({
                            list: res.data
                        })
                        var brr = [];
                        this.state.list.map((item) => {
                            if (item.name == this.state.name) {
                                brr.push(item);
                            }
                            this.setState({
                                list: brr
                            })
                        })
                        var arr = [];
                        var a = 0;
                        for (var i = 0; i < this.state.data.length; i++) {
                            for (var j = 0; j < this.state.list.length; j++) {
                                if (this.state.data[i].id == this.state.list[j].lid) {
                                    a = 1;
                                    break;
                                } else {
                                    a = 0;
                                }
                            }
                            if (a == 1) {
                                arr.push('red');
                                a = 0;
                            } else {
                                arr.push('black');
                            }
                        }
                        this.setState({
                            color: arr
                        })
                    })
            })

        axios(url3)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })
        this.state.data.map((item) => {
            this.setState({
                arr: item.id
            })
        })

    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            window.location.href = "http://localhost:3000/StudyCommunicate";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    change = (id) => {
        var crr = this.state.color;
        if (this.state.color[id] == "black") {
            crr = this.state.color
            crr[id] = "red";
            this.setState({
                color: crr
            })
            let url9 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.data[id].id}&name=${this.state.name}`
            axios(url9)
                .then((res) => {

                })
        }
        else if (this.state.color[id] == "red") {
            crr = this.state.color
            crr[id] = "black";
            this.setState({
                color: crr
            })
            let url10 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.data[id].id}&name=${this.state.name}`
            axios(url10)
                .then((res) => {
                })
        }
    }
    clickSend = (id) => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data
                    })
                }
            })
    };
    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    学习交流</NavBar>
                <div style={{ position: "fixed", top: '7vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.clickSend} style={{ width: '15vw', float: 'left', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <Link to='/Communicate'><div style={{ position: "fixed", top: "85%", left: '85%' }}>
                        <span className="iconfont icon-jiahao" style={{ fontSize: "6vh", color: "#37376F" }}></span>
                    </div></Link>
                    <div style={{ marginTop: '6.2vh' }}>
                        {
                            this.state.data.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black' }}>
                                    <div style={{ float: "left" }}>
                                        <img src={this.state.pic[idx]} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                    </div>
                                    <div>
                                    </div>
                                    <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                                    <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    <div style={{ marginTop: 20 }}>
                                        <Link to={`/CommunicataDetails/${item.id}`}>
                                            <sapn className="iconfont icon-pinglun" style={{ fontSize: '24px', marginLeft: '27%', fontSize: '3.2vh', color: 'black' }}></sapn>
                                        </Link>

                                        <sapn className="iconfont icon-dianzan" onClick={this.change.bind(this, (idx))} style={{ fontSize: '24px', marginLeft: '26%', color: this.state.color[idx] }}></sapn>
                                    </div>
                                    <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                    </div>
                                </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
