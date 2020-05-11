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
export default class MyExperience extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            color: [],
            yonghu: [],
            pic: '',
            username: ''
        };
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/users/getName`;
        let url2 = `http://139.155.44.190:3005/experience/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        axios(url2)
            .then((res) => {
                this.setState({
                    data: res.data
                })
                var arr = [];
                this.state.data.map((item) => {
                    if (item.name == this.state.username) {
                        arr.push(item);
                    }
                    this.setState({
                        data: arr
                    })
                })
            })
        axios(url1)
            .then((re) => {
                axios(url3).then(res => {
                    res.data.map(item => {
                        if (item.name == re.data.name) {
                            this.setState({ pic: 'http://139.155.44.190:3005' + item.pic })
                        }
                    })
                })
                axios(url2)
                    .then((res) => {
                        var arr = [];
                        res.data.map((item) => {
                            if (item.name == re.data.name) {
                                arr.push(item)
                            }
                        })
                        this.setState({
                            data: arr
                        })
                    })
            })
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            window.location.href = "http://localhost:3000/myexperience";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    clickSend = (content) => {
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    if (res.data.name == this.state.username) {
                        for (var i = 0; i < res.data.length; i++) {
                            res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
                        }
                        this.setState({
                            data: res.data
                        })
                    }

                }
            })
    };
    delTie = (id) => {
        let url9 = `http://139.155.44.190:3005/experience/deleteNote?id=${id}`
        axios(url9)
            .then((res) => {
                window.location.href = "http://localhost:3000/myexperience"
                window.location.reload();
            })
    }
    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/My"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    我的经验</NavBar>
                <div style={{ width: "100vw", height: '7vh', backgroundColor: '#EFEFF4' }}>
                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '1vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.clickSend} style={{ width: '15vw', float: 'left', height: '7vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <div>
                        {
                            this.state.data.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black', position: 'relative', height: '17vh', marginBottom: '1vh' }}>
                                    <div style={{ float: "left", position: 'absolute', left: '4vw', top: '2vh' }}>
                                        <img src={this.state.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%' }} />
                                    </div>
                                    <p style={{ fontSize: '2.5vh', lineHeight: 2.5, position: 'absolute', top: '-2vh', left: '20vw' }}>{item.name}</p>
                                    <div style={{ color: 'gray', fontSize: '2vw', position: 'absolute', left: '20vw', top: '7vh' }}>{item.time}</div>
                                    <Link to={`/myexperiencedetails/${item.id}`}>
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
