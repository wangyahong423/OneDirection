import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { List } from 'antd-mobile';
import axios from 'axios';
const Item = List.Item;
const Brief = Item.Brief;

export default class My extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            todo: [],
            name: ''
        }
    }
    componentDidMount() {
        let url = `http://localhost:3005/users/list`;
        axios(url)
            .then((res) => {
                if (res.err) {
                } else {
                    this.setState({
                        data: res.data
                    })
                    let arr = [];
                    this.state.data.map((item) => {
                        if (item.name === this.state.n1) {
                            arr.push(item)
                        }
                        this.setState({
                            data: arr
                        })
                    })
                }
            })
        let url1 = `http://localhost:3005/users/getName`;
        axios(url1)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })
        let url2 = `http://localhost:3005/users/list`;
        axios(url2)
            .then((res) => {
                this.setState({
                    todo: res.data
                })
                this.state.todo.map((item) => {
                    if (item.name == this.state.name) {
                        this.setState({
                            college: item.college,
                            pic: item.pic
                        })
                    }
                })
            })
    }
    render() {
        return (
            <div>
                <NavBar style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                >我的</NavBar>
                <div className="one">
                </div>
                <Link to="/changeImg">
                    <div style={{ height: '100px', width: '100px', borderRadius: '50%', opacity: '1', zIndex: "10", marginTop: '-45px', overflow: 'hidden', marginLeft: '20px' }} >
                        <div>
                            <img src={this.state.pic} style={{ height: '100px', width: '100px', opacity: '1' }} />
                        </div>
                    </div>
                </Link>
                <div style={{ marginTop: '-9vh', marginLeft: '40vw' }}>
                    <div>
                        <p>{this.state.name}</p>
                        <p>河北师范大学{this.state.college}</p>
                    </div>
                </div>
                <div>
                    <List style={{ marginTop: '18px' }}>
                        <Link to="/shoucangone">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-collection'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的收藏</span></Item>
                        </Link>
                        <Link to="/tiezi">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-collection'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的帖子</span></Item>
                        </Link>
                        <Link to="/myFile">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-collection'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的文件</span></Item>
                        </Link>
                        <Link to="/tongxunlvone">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-tongxunlu'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>通讯录</span></Item>
                        </Link>
                        <Link to="/wm">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-tuandui'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>关于我们</span></Item>
                        </Link>
                        <Link to="/yonghufankui">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-tianmaotishi-yiwen'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>用户反馈</span></Item>
                        </Link>
                        <Link to="/shezhi">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-shezhi1'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>设置</span></Item>
                        </Link>
                    </List>
                </div>
            </div>
        )
    }
}

