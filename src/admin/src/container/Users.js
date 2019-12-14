import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            indexList: [],
            current: 1,
            pageSize: 7,
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
    componentDidMount() {
        let url = `http://localhost:3005/users/list`;
        axios(url)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pic = "http://localhost:3005" + res.data[i].pic;
                }
                this.setState({
                    data: res.data,
                    totalPage: Math.ceil(res.data.length / this.state.pageSize),
                    indexList: res.data.slice(this.state.num, this.state.num + this.state.pageSize)
                })
            })
    }

    componentDidUpdate() {
        document.addEventListener('keydown', this.onkeydown);
    }

    handleSend = (e) => {
        console.log(e.target.value)
        let url = `http://localhost:3005/users/select?name=${e.target.value}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    console.log(res.indexList)
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://localhost:3005" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data
                    })
                }

            })
    }

    onkeydown = (e) => {
        if (e.keyCode === 13) {
            this.handleSend(e);
        }
    }
    render() {
        return (
            <div style={{ position: 'relative', width: '800px', height: '580px', margin: '0 auto', backgroundColor: 'rgba(136, 136, 136, 0.3)', paddingTop: '0px'}}>
                <div style={{ height: '40px', width: '700px',marginTop:'1px' }}>
                    <input type='search' onKeyDown={(e) => this.onkeydown(e)} placeholder="回车进行搜索" style={{ height: '40px', width: '800px', fontSize: '20px', paddingLeft: '30px',border:'none' }} ></input>
                </div>
                <table style={{ width: '700px', tableLayout: 'fixed',paddingLeft:'20px' }}>
                    <thead>
                        <tr style={{height:'55px'}}>
                            <th style={{ width: '100px', textAlign: 'left', fontSize: '28px', color: 'white' }}>头像</th>
                            <th style={{ width: '130px', textAlign: 'left', fontSize: '28px',color: 'white' }}>名字</th>
                            <th style={{ width: '150px', textAlign: 'left', fontSize: '28px',color: 'white' }}>电话</th>
                            <th style={{ width: '250px', textAlign: 'left', fontSize: '28px',color: 'white' }}>学院</th>
                            <th style={{ width: '130px', textAlign: 'left', fontSize: '28px',color: 'white' }}>密码</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(
                                (item, idx) => <tr key={idx}>
                                    <td><img style={{ height: '53px', width: '53px', borderRadius: '50%' }} src={item.pic} ></img></td>
                                    <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '130px'  }}>{item.name}</td>
                                    <td style={{ fontSize: '20px', color: 'white' }}>{item.tel}</td>
                                    <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '270px' }}>{item.college}</td>
                                    <td style={{ fontSize: '20px', color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '130px'  }}>{item.pwd}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div style={{ position: 'absolute', bottom: '5px', right: '40px' }}>
                    <Link style={{ textDecoration: 'none', marginRight: '6px' }}><span onClick={this.setUp} style={{ color: 'black', backgroundColor: 'white', fontSize: '19px' }}>上一页</span></Link>
                    <span style={{ fontSize: '19px', color: 'white' }}>{this.state.current}页/ {this.state.totalPage}页</span>
                    <Link style={{ textDecoration: 'none', marginLeft: '6px' }}><span onClick={this.setNext} style={{ color: 'black', backgroundColor: 'white', fontSize: '19px' }}>下一页</span></Link>
                </div>
            </div>
        )
    }
}
