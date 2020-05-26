import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Button } from 'antd-mobile';
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
            username: '',
            head: '',
            islogin: false
        }
    }
    componentDidMount() {
        let url11 = `http://139.155.44.190:3005/users/getName`;
        axios(url11)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
            })
        // let url = `http://139.155.44.190:3005/users/list`;
        // axios(url)
        //     .then((res) => {
        //         if (res.err) {
        //         } else {
        //             this.setState({
        //                 data: res.data
        //             })
        //             let arr = [];
        //             this.state.data.map((item) => {
        //                 if (item.name === this.state.username) {
        //                     arr.push(item)
        //                 }
        //                 this.setState({
        //                     data: arr
        //                 })
        //             })
        //             console.log('data:', arr);
        //         }
        //     })
        let url2 = `http://139.155.44.190:3005/users/list`;
        axios(url2)
            .then((res) => {
                this.setState({
                    todo: res.data
                })
                this.state.todo.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            college: item.college,
                            pic: "http://139.155.44.190:3005" + item.pic,
                            head: "http://139.155.44.190:3005/head/" + item.head,
                            lvnum: item.lvnum
                        })
                    }
                    var num = Math.floor(this.state.lvnum / 15);
                    let url3 = `http://139.155.44.190:3005/users/list`;
                    axios(url3)
                        .then((res) => {
                            this.setState({
                                lvlist: res.data
                            })
                            this.state.lvlist.map((item) => {
                                if (item.name == this.state.username) {
                                    if (num < 10) {
                                        this.setState({
                                            level: num + 1
                                        })
                                    }
                                    else {
                                        this.setState({
                                            level: 10
                                        })
                                    }
                                    let url4 = `http://139.155.44.190:3005/users/changeLv?level=${this.state.level}&name=${this.state.username}`;
                                    axios(url4)
                                        .then((res) => {
                                            if (res.data.ok) { }
                                            else {
                                                alert(res.data.msg)
                                            }
                                        })
                                }
                            })
                        })

                })
            })
    }
    outlogin = () => {
        let url5 = `http://139.155.44.190:3005/users/getName`;
        axios(url5)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
                let url6 = `http://139.155.44.190:3005/users/exitLogin?name=${this.state.username}&islogin=${this.state.islogin}`;
                axios(url6)
                    .then((res) => {
                        if (res.data.err) {
                        } else {
                            window.location.href = "http://localhost:3000/";
                        }
                    })
            })

    }
    render() {
        return (
            <div>
                <NavBar style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}>我的</NavBar>
                <div className="one"></div>
                <Link to="/changeImg">
                    <div style={{ height: '150px', width: '150px', borderRadius: '50%', opacity: '1', zIndex: "10", marginTop: '-70px', overflow: 'hidden', marginLeft: '20px' }} >
                        <div style={{position:'relative'}}>
                            <img src={this.state.pic} style={{ height: '100px', width: '100px', opacity: '1',marginTop:25,marginLeft:25, borderRadius: '50%'}} />
                            {
                                this.state.head != 'http://139.155.44.190:3005/head/null'
                                    ? <img src={this.state.head} style={{ height: '120px', width: '120px', borderRadius: '50%', position: 'absolute', left: 12, top: 14 }} />
                                    : null
                            }
                        </div>
                    </div>
                </Link>
                <div style={{ marginTop: '-10vh', marginLeft: '35vw' }}>
                    <div>
                        <span>{this.state.username}&emsp;</span>
                        <span style={{ color: 'red' }}>Lv{this.state.level}</span>
                        <p>河北师范大学{this.state.college}</p>
                    </div>
                </div>
                {/* {
                    this.state.head != 'http://139.155.44.190:3005/head/null'
                        ? <img src={this.state.head} style={{ height: '150px', width: '150px', borderRadius: '50%', position:'absolute',top:190,left:-10,zIndex:1 }} />
                        : null
                } */}
                <div style={{zIndex:999}}>
                    <List style={{ marginTop: '18px', marginBottom: '15px' }}>
                        <Link to="/mynotes">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-collection'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的笔记</span></Item>
                        </Link>
                        <Link to="/tiezi">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-tieziguanli'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的帖子</span></Item>
                        </Link>
                        <Link to="/myexperience">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-icon--'
                                style={{ paddingLeft: '16px', height: '60px', color: 'black', fontSize: '22px' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的经验</span></Item>
                        </Link>
                    </List>
                    <List style={{ marginBottom: '15px' }}>
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
                                style={{ paddingLeft: '20px', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>关于我们</span></Item>
                        </Link>
                    </List>
                    <List>
                        <Link to="/yonghufankui">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-fankui'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>用户反馈</span></Item>
                        </Link>
                        <Link to="/fuwu">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-fankui'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>用户协议</span></Item>
                        </Link>
                        <Link to="/shezhi">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-shezhi1'
                                style={{ paddingLeft: '20px', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>设置</span></Item>
                        </Link>
                    </List>
                    <span onClick={() => { this.outlogin() }} style={{ color: 'grey', fontSize: 14, lineHeight: '30px', marginLeft: '42%' }}>退出登录</span>
                </div>
            </div>
        )
    }
}

