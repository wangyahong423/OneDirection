import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class Manager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            display_block: 'block',
            display_none: 'none',
            name: '',
            tel: '',
            pwd: '',
            indexList: [],
            current: 1,
            pageSize: 15,
            num: 0,
            totalPage: 0
        };
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

    del = () => {
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
    };

    componentDidMount() {
        let url = `http://139.155.44.190:3005/manager/list`;
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
    };

    componentDidUpdate() {
        document.addEventListener('keydown', this.onkeydown);
    };

    handleSend = (e) => {
        let url = `http://139.155.44.190:3005/manager/select?name=${e.target.value}`;
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
    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    getTel = (e) => {
        this.setState({
            tel: e.target.value
        })
    }
    getPwd = (e) => {
        this.setState({
            pwd: e.target.value
        })
    }
    addManager = () => {
        let text = { name: this.state.name, pwd: this.state.pwd, tel: this.state.tel };
        let send = JSON.stringify(text);
        axios(`http://139.155.44.190:3005/manager/addManager?name=${this.state.name}&pwd=${this.state.pwd}&tel=${this.state.tel}`)
            .then(
                data => {
                    if (data.data.ok == 1) {
                        window.alert("添加成功");
                        window.location.href = 'http://localhost:3010/home#';
                    }
                    else if (data.data.ok == 0) {
                        window.alert("添加失败，管理员已存在");
                    }
                    else {
                        window.alert(data.data.msg);
                    }
                }
            )
    };

    onkeydown = (e) => {
        if (e.keyCode === 13) {
            this.handleSend(e);
        }
    };
    changehref = () => {
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
    }

    render() { 
        return (
            <div style={{ position: 'relative', width: '800px', overflow: 'hidden', height: '570px', margin: '0 auto', backgroundColor: 'rgba(136, 136, 136, 0.3)', paddingTop: '0px' }}>
                <div style={{ height: '40px', width: '800px' }}>
                    <input type='search' onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" style={{ opacity: '0.4', fontFamily: '楷体', height: '40px', width: '620px', fontSize: '20px', paddingLeft: '30px', border: 'none', marginTop: '0px' }} ></input>
                    <button onClick={this.del.bind(this)} style={{ opacity: '0.5', height: '41px', marginLeft: '0px', fontSize: '20px', width: '180px', fontFamily: '楷体' }}>添加管理员</button>
                </div>
                <table style={{ width: '800px', tableLayout: 'fixed', paddingLeft: '20px' }}>
                    <thead>
                        <tr style={{ height: '55px' }}>
                            <th style={{ width: '200px', textAlign: 'left', fontSize: '28px', color: 'white' }}>名字</th>
                            <th style={{ width: '250px', textAlign: 'left', fontSize: '28px', color: 'white' }}>电话</th>
                            <th style={{ width: '200px', textAlign: 'left', fontSize: '28px', color: 'white' }}>密码</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.data || []).map(
                                (item, idx) => <tr key={idx}>
                                    <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{item.name}</td>
                                    <td style={{ fontSize: '20px', color: 'white' }}>{item.tel}</td>
                                    <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>{item.pwd}</td>
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
                <div style={{ paddingTop: '20px', backgroundColor: 'grey', position: 'relative', textAlign: 'center', lineHeight: '70px', display: this.state.display_none, height: '300px', width: '500px', opacity: '1', margin: '0 auto', marginTop: '-20%' }}>
                    <input onChange={this.getName} style={{ height: '30px', width: '300px', fontFamily: '楷体', fontSize: '16px' }} type='text' placeholder='请输入管理员昵称'></input>
                    <input onChange={this.getTel} style={{ height: '30px', width: '300px', fontFamily: '楷体', fontSize: '16px' }} type='text' placeholder='请输入管理员电话'></input>
                    <input onChange={this.getPwd} style={{ height: '30px', width: '300px', margin: '0 auto', fontFamily: '楷体', fontSize: '16px' }} type='password' placeholder='请输入管理员密码'></input>
                    <br />
                    <button onClick={this.addManager} style={{ height: '30px', width: '100px', fontFamily: '楷体', fontSize: '16px' }}>确定</button>
                    <button onClick={this.changehref} style={{ height: '30px', width: '100px', marginLeft: '20px', fontFamily: '楷体', fontSize: '16px' }}>取消</button>
                </div>
            </div>

        )
    }
}
