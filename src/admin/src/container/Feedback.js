import React, { Component } from 'react'
import axios from 'axios';
import { Modal, Button } from 'antd';
import PropTypes from "prop-types";

export default class Feedback extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            indexList: [],
            current: 1,
            pageSize: 14,
            date: new Date(),
            name: '',
            num: 0,
            totalPage: 0,
            pathname: '用户管理',
            visible: false,
            loading: false,
            contents: '',
            times: '',
            tels: ''
        }
    }

    showModal = (content, time, tel, e) => {
        this.setState({
            visible: true,
            contents: content,
            times: time,
            tels: tel
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    setNext = () => {
        if (this.state.current < this.state.totalPage) {
            this.setState({
                num: this.state.num + this.state.pageSize,
                current: this.state.current + 1,
            }, function () {
                this.setState({
                    indexList: this.state.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
        }
    }
    setUp = () => {
        if (this.state.current > 1) {
            this.setState({
                num: this.state.num - this.state.pageSize,
                current: this.state.current - 1
            }, function () {
                this.setState({
                    indexList: this.state.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
        }
    }
    componentDidMount() {
        const { match, location, history } = this.props;
        if (location.pathname == '/') {
            this.setState({
                pathname: '社区管理'
            })
        } else if (location.pathname == '/community') {
            this.setState({
                pathname: '用户管理'
            })
        } else if (location.pathname == '/notes') {
            this.setState({
                pathname: '笔记管理'
            })
        } else if (location.pathname == '/experience') {
            this.setState({
                pathname: '经验管理'
            })
        } else if (location.pathname == '/feedback') {
            this.setState({
                pathname: '用户反馈'
            })
        } else if (location.pathname == '/managers') {
            this.setState({
                pathname: '管理员'
            })
        }
        let url = `http://139.155.44.190:3005/feedback/list`;
        axios(url)
            .then((res) => {
                let url1 = `http://139.155.44.190:3005/users/list`;
                axios(url1)
                    .then((r) => {
                        for (var i = 0; i < res.data.length; i++) {
                            for (var j = 0; j < r.data.length; j++) {
                                if (res.data[i].name == r.data[j].name) {
                                    res.data[i].pic = "http://139.155.44.190:3005" + r.data[j].pic;
                                    res.data[i].card = "http://139.155.44.190:3005" + r.data[j].card;
                                }
                            }
                        }
                    })


                this.setState({
                    data: res.data,
                    totalPage: Math.ceil(res.data.length / this.state.pageSize),
                    indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
    }
    handleSend = (e) => {
        let url = `http://139.155.44.190:3005/feedback/select?content=${e.target.value}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data,
                        indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                    })

                }

            })
    }
    onkeydown = (e) => {
        if (e.keyCode === 13) {
            this.handleSend(e);
        }
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            let url0 = `http://139.155.44.190:3005/feedback/list`;
            axios(url0)
                .then((res) => {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data,
                        indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                    })
                })
            window.location.href = "http://localhost:3000/home#/feedback/";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    handleRegister = (tel, time, e) => {
        let url = `http://139.155.44.190:3005/feedback/deleteFeedback?tel=${tel}&time=${time}`;
        axios(url)
            .then((res) => {
                if (res.data.ok) {
                    window.location.reload();
                } else {
                }
            })
    }

    render() {
        let t = this.state.date;
        let ifnoon = ' ' + ((t.getHours() < 12) ? "上午好" : "下午好") + ' ';
        return (
            <div style={{ position: 'relative', height: '83vh', width: '65vw', backgroundColor: 'white', top: '-83vh', left: '15vw' }}>
                <div style={{ height: '7vh', width: '65vw', backgroundColor: 'rgba(87, 196, 223, 1)', lineHeight: '7vh' }}>
                    <div style={{ height: '2.18vh', width: '1.09vh', overflow: 'hidden', position: 'fixed', top: '16vh', left: '25vw' }}><div className='user-rectangle'></div></div>
                    <span style={{ color: 'white', fontSize: '1.1vw', marginLeft: '2vw' }}>您所在的位置是：首页 > {this.state.pathname}</span>
                    <input type='search' className='search' onChange={this.changeSearch} onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" ></input>
                </div>
                <div className='user-content'>
                    <table style={{ width: '40vw', tableLayout: 'fixed', border: 'none' }}>
                        <thead style={{ height: '5vh', lineHeight: '5vh' }}>
                            <tr style={{ lineHeight: '5.9vh', backgroundColor: 'rgba(68, 182, 211, 1)' }}>
                                <th style={{ width: '5vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>编号</th>
                                <th style={{ width: '10vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>电话</th>
                                <th style={{ width: '16vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>时间</th>
                                <th style={{ width: '18vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>内容</th>
                                <th style={{ width: '10.5vw', textAlign: 'center', fontSize: '1.2vw', color: 'white' }}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.indexList.map(
                                    (item, idx) => <tr key={idx} style={{ height: '4vh', lineHeight: '4vh', backgroundColor: 'SkyBlue' }}>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{idx}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.tel}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>{item.time}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '12vw' }}>{item.content}</td>
                                        <td style={{ fontSize: '1.2vw', color: 'white', textAlign: 'center' }}>
                                            <span onClick={this.handleRegister.bind(this, (item.tel), (item.time))} style={{ height: '3vh', width: '5vw', fontFamily: '楷体', fontSize: '1.2vw', cursor: 'pointer' }}>删除</span>
                                            <span onClick={this.showModal.bind(this, (item.content), (item.time), (item.tel))} style={{ height: '3vh', width: '5vw', fontFamily: '楷体', fontSize: '1.2vw', marginLeft: '10px', cursor: 'pointer' }}>查看</span>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                        <div>
                            <div id="container">
                                <Modal
                                    style={{ height: 'auto', width: '10vw', backgroundColor: 'rgb(68,182,211)', position: 'fixed', left: '35vw', top: '40vh', paddingBottom: '7vh' }}
                                    // title="Basic Modal"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                    closable={false}
                                    footer={[
                                        <Button key="back" onClick={this.handleCancel} style={{ color: 'rgb(68,182,211)', position: 'absolute', right: '1vw', bottom: '2vh' }}>确认</Button>,
                                    ]}
                                >
                                    <div style={{ height: '3.5vh', width: '32vw', marginTop: '2vh', marginLeft: '1vw', borderBottomColor: 'white', borderBottomWidth: '1px' }}>
                                        <p style={{ color: 'white', fontSize: '18px' }}>电话：{this.state.tels}&emsp;&emsp;&emsp;&emsp;时间：{this.state.times}</p>
                                    </div>
                                    <p style={{ color: 'white', fontSize: '18px', marginTop: '2vh', marginLeft: '1vw' }}>内容：{this.state.contents}</p>
                                </Modal>
                            </div>
                        </div>

                        <div style={{ position: 'fixed', height: '7vh', width: '20vw', left: '50vw', top: '88vh' }}>
                            <a style={{ textDecoration: 'none', marginRight: '2vw' }}>
                                <span onClick={this.setUp} style={{ color: 'RoyalBlue', fontSize: '1.2vw', cursor: 'pointer' }}>上一页</span>
                            </a>
                            <span style={{ fontSize: '1.2vw', color: 'RoyalBlue' }}>{this.state.current}页/ {this.state.totalPage}页</span>
                            <a style={{ textDecoration: 'none', marginLeft: '2vw' }}>
                                <span onClick={this.setNext} style={{ color: 'RoyalBlue', fontSize: '1.2vw', cursor: 'pointer' }}>下一页</span>
                            </a>
                        </div>
                    </table>

                </div>
            </div>
        )
    }
}