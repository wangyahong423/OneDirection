import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
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
        let url = `http://localhost:3005/learn/list`;
        let url2 = `http://localhost:3005/learnlike/list`;
        let url3 = `http://localhost:3005/users/getName`;
        let url4 = `http://localhost:3005/users/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
                var arr = [];
                this.state.data.map((item) => {
                    if (item.name == this.state.name) {
                        arr.push(item)
                    }
                    this.setState({
                        data: arr
                    })
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
        axios(url4)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pic = "http://localhost:3005" + res.data[i].pic
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
            let url9 = `http://localhost:3005/learnlike/add?lid=${this.state.data[id].id}&name=${this.state.name}`
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
            let url10 = `http://localhost:3005/learnlike/delete?lid=${this.state.data[id].id}&name=${this.state.name}`
            axios(url10)
                .then((res) => {
                })
        }
    }
    clickSend = (id) => {
        let url = `http://localhost:3005/learn/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://localhost:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data
                    })
                }
            })
    };
    delTie = (id) => {

        let url9 = `http://localhost:3005/learn/deleteLearn?id=${id}`
        axios(url9)
            .then((res) => {
                window.location.href = "http://localhost:3000/tiezi"
                window.location.href = "http://localhost:3000/xuexi"
                window.location.reload();
            })
    }
    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/tiezi"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    已发布的学习动态</NavBar>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <div>
                        {
                            this.state.data.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black', position: 'relative', height: '18vh', marginBottom: '1vh' }}>
                                    <div style={{ float: "left", position: 'absolute', left: '4vw', top: '2vh' }}>
                                        <img src={this.state.pic[idx]} style={{ height: '7vh', width: '12vw', borderRadius: '50%' }} />
                                    </div>
                                    <p style={{ fontSize: '2.5vh', lineHeight: 2.5, position: 'absolute', top: '-2vh', left: '20vw' }}>{item.name}</p>
                                    <div style={{ color: 'gray', fontSize: '2vw', position: 'absolute', left: '20vw', top: '7vh' }}>{item.time}</div>
                                    <Link to={`/xuexiyouknow/${item.id}`}>
                                        <p style={{
                                            color: 'black', position: 'absolute', top: '9vh', left: '10vw', width: '80vw', fontSize: '17px', overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                        }}>{item.content}</p>
                                    </Link>
                                    <span style={{ position: 'absolute', right: '5vw', top: '2vh' }}>
                                        <button style={{ borderRadius: '50%', border: 'none', height: '4vh', backgroundColor: 'white' }} className='iconfont icon-chahao' onClick={this.delTie.bind(this, (item.id))}></button>
                                    </span>
                                    <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}></div>
                                </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
