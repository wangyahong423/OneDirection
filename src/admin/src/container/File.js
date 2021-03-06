import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            indexList: [],
            current: 1,
            pageSize: 14,
            num: 0,
            totalPage: 0
        }
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
        let url = `http://139.155.44.190:3005/file/select?title=${e.target.value}`;
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
        let url = `http://139.155.44.190:3005/file/list`;
        axios(url)
            .then((res) => {
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
    handleRegister = (filepath, e) => {
        let url = `http://139.155.44.190:3005/file/deleteFile?filepath=${filepath}`;
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
                <div style={{ position: 'relative', width: '850px', overflow: 'hidden', height: '580px', margin: '0 auto', backgroundColor: 'rgba(136, 136, 136, 0.3)', paddingTop: '0px' }}>
                    <div style={{ height: '40px', width: '700px' }}>
                        <input type='search' onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" style={{ opacity: '0.4', fontFamily: '楷体', height: '40px', width: '850px', fontSize: '20px', paddingLeft: '30px' }} ></input>
                    </div>
                    <table style={{ width: '700px', tableLayout: 'fixed', paddingLeft: '20px' }}>
                        <thead>
                            <tr style={{ height: '55px' }}>
                                <th style={{ width: '210px', textAlign: 'left', fontSize: '28px', color: 'white' }}>文件名</th>
                                <th style={{ width: '110px', textAlign: 'left', fontSize: '28px', color: 'white' }}>名字</th>
                                <th style={{ width: '250px', textAlign: 'left', fontSize: '28px', color: 'white' }}>时间</th>
                                <th style={{ width: '100px', textAlign: 'left', fontSize: '28px', color: 'white' }}>类型</th>
                                <th style={{ width: '150px', textAlign: 'left', fontSize: '28px', color: 'white' }}>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.indexList.map(
                                    (item, idx) => <tr key={idx}>
                                        <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{item.filepath}</td>
                                        <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '110px' }} >{item.name}</td>
                                        <td style={{ fontSize: '20px', color: 'white' }}>{item.time}</td>
                                        <td style={{ fontSize: '20px', color: 'white' }}>{item.type}</td>
                                        <td>
                                            <button onClick={this.handleRegister.bind(this, (item.filepath))} style={{ height: '28px', fontFamily: '楷体', fontSize: '20px' }}>删除</button>
                                            <button style={{ height: '28px', fontFamily: '楷体', fontSize: '20px', marginLeft: '10px' }}>
                                                <a href={"http://139.155.44.190:3005/files/" + item.filepath} style={{ fontFamily: '楷体', fontSize: '20px', color: 'black', textDecoration: 'none' }}>下载</a>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
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
