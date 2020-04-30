import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Experence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            indexList: [],
            current: 1,
            pageSize: 16,
            num: 0,
            totalPage: 0,
            display_block: 'block',
            display_none: 'none',
        }
    }
    lookContent = (content, e) => {
        if (this.state.display_block == 'none') {
            this.setState({
                display_block: 'block',
                display_none: 'none'
            })
        }
        else if (this.state.display_block == 'block') {
            this.setState({
                display_block: 'none',
                display_none: 'block'
            })
        }
        this.refs.p.innerHTML = content;
    }
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
    handleSend = (e) => {
        let url = `http://139.155.44.190:3005/experience/list`;
        axios(url)
            .then((res) => {
                console.log(res)
                if (res.data.false) {
                } else {
                    this.setState({
                        data: res.data,
                        totalPage: Math.ceil(res.data.length / this.state.pageSize),
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
    componentDidMount() {
        console.log(1111)
        let url = `http://139.155.44.190:3005/experience/list`;
        axios(url)
            .then((res) => {
                console.log(res.data)
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
                }
                this.setState({
                    data: res.data,
                    totalPage: Math.ceil(res.data.length / this.state.pageSize),
                    indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
    }
    handleRegister = (id, e) => {
        let url = `http://139.155.44.190:3005/experience/delete?id=${id}`;
        axios(url)
            .then((res) => {
                if (res.data.ok) {
                    window.location.reload();
                } else {
                }
            })
    }
    render() {
        return (
            <div>
                <div style={{ position: 'relative', width: '850px', overflow: 'hidden', height: '570px', margin: '0 auto', backgroundColor: 'rgba(136, 136, 136, 0.3)', paddingTop: '0px' }}>
                    <div style={{ height: '40px', width: '700px' }}>
                        <input type='search' onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" style={{ opacity: '0.4', fontFamily: '楷体', height: '40px', width: '850px', fontSize: '20px', paddingLeft: '30px' }} ></input>
                    </div>
                    <table style={{ width: '700px', tableLayout: 'fixed', paddingLeft: '20px' }}>
                        <thead>
                            <tr style={{ height: '55px' }}>
                                <th style={{ width: '110px', textAlign: 'left', fontSize: '28px', color: 'white' }}>名字</th>
                                <th style={{ width: '250px', textAlign: 'left', fontSize: '28px', color: 'white' }}>时间</th>
                                <th style={{ width: '310px', textAlign: 'left', fontSize: '28px', color: 'white' }}>内容</th>
                                <th style={{ width: '150px', textAlign: 'left', fontSize: '28px', color: 'white' }}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.indexList.map(
                                    (item, idx) => <tr key={idx}>
                                        <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '150px' }}>{item.name}</td>
                                        <td style={{ fontSize: '20px', color: 'white' }}>{item.time}</td>
                                        <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '310px' }}>{item.content}</td>
                                        <td>
                                            <button onClick={this.handleRegister.bind(this, (item.id))} style={{ height: '28px', width: '56px', fontFamily: '楷体', fontSize: '20px' }}>删除</button>
                                            <button onClick={this.lookContent.bind(this, (item.content))} style={{ height: '28px', fontFamily: '楷体', fontSize: '20px', marginLeft: '10px' }}>查看</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <div style={{ position: 'absolute', top: '25%', left: '35%', height: 'auto', width: '400px',zIndex:11, textAlign: 'center', backgroundColor: 'rgba(136, 136, 136)', color: 'white', display: this.state.display_none }}>
                            <textarea ref='p' style={{ lineHeight: '40px', fontSize: '22px', width: '400px' }}></textarea>
                        </div>
                        <div style={{ position: 'absolute', bottom: '5px', right: '40px' }}>
                            <Link style={{ textDecoration: 'none', marginRight: '6px' }}><span onClick={this.setUp} style={{ color: 'black', backgroundColor: 'white', fontSize: '19px' }}>上一页</span></Link>
                            <span style={{ fontSize: '19px', color: 'white' }}>{this.state.current}页/ {this.state.totalPage}页</span>
                            <Link style={{ textDecoration: 'none', marginLeft: '6px' }}><span onClick={this.setNext} style={{ color: 'black', backgroundColor: 'white', fontSize: '19px' }}>下一页</span></Link>
                        </div>
                    </table>
                </div>
            </div>
        )
    }
}
