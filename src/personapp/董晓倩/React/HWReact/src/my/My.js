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
            islogin: false,
            newp: [],
            pnum: 0
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
                            level: item.level
                        })
                    }

                })
            })
        let url10 = `http://139.155.44.190:3005/learn/list`;
        axios(url10)
            .then((res) => {
                var brr = [];
                res.data.forEach((item) => {
                    if (item.name == this.state.username) {
                        brr.push(item);
                    }
                })
                this.setState({
                    crr: brr
                })
                console.log('crr:', this.state.crr);
                var scnum = 0;
                var slnum = 0;
                var num = 0;
                this.state.crr.forEach((item) => {
                    scnum += item.cnum;
                    slnum += item.likenum;
                })
                num = scnum + slnum;
                this.setState({
                    sum: num
                })
                console.log('snum:', this.state.sum);
            })

        let url8 = `http://139.155.44.190:3005/experience/list`;
        axios(url8)
            .then((res) => {
                var drr = [];
                res.data.forEach((item) => {
                    if (item.name == this.state.username) {
                        drr.push(item);
                    }
                })
                this.setState({
                    qrr: drr
                })
                console.log('qrr:', this.state.qrr);
                var ecnum = 0;
                var elnum = 0;
                var num1 = 0;
                this.state.qrr.forEach((item) => {
                    ecnum += item.cnum;
                    elnum += item.likenum;
                })
                num1 = ecnum + elnum;
                this.setState({
                    sum1: num1
                })
                console.log('sum1:', this.state.sum1);
            })

        let url7 = `http://139.155.44.190:3005/follow/list`;
        axios(url7)
            .then((res) => {
                var follow = 0;
                var fan = 0;
                var znum = 0;
                var learn = [];
                var experience = [];
                var newp = [];
                var pnum = 0;
                res.data.forEach((item) => {
                    if (item.lname == this.state.username) {
                        follow++;
                        if (item.learn != null && item.learn != "") {
                            var a = item.learn.split(",");
                            znum = znum + a.length;
                            for (var i = 0; i < a.length; i++) {
                                learn.push(a[i]);
                            }
                            console.log('learn:', learn);
                        }
                        if (item.experience != null && item.experience != "") {
                            var a = item.experience.split(",");
                            znum = znum + a.length;
                            for (var i = 0; i < a.length; i++) {
                                experience.push(a[i]);
                            }
                            console.log('experience:', experience);
                        }
                    }
                    if (item.nname == this.state.username) {
                        fan++;
                        if (item.newp == true) {
                            pnum++;
                            newp.push(item.id);
                        }
                    }
                })
                this.setState({
                    follows: follow,
                    fans: fan,
                    nums: znum,
                    newp: newp,
                    pnum: pnum
                })
                console.log('newp:',this.state.newp);
                console.log('pnum:', this.state.pnum);
            })
    }

    fanlist = ()=>{
        for (var i = 0; i < this.state.newp.length; i++) {
            let url = `http://139.155.44.190:3005/follow/changePP?id=${this.state.newp[i]}&newp=${false}`;
            axios(url)
            .then((res)=>{

            })
            this.setState({
                newp:[],
                pnum:0
            })
        }
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

    tiezi = () => {
        console.log('tiezi')
    }

    render() {
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <div className="one" style={{ position: 'sticky', top: 0, zIndex: 999 }}>
                    <div style={{ paddingTop: '4vh' }}>
                        <Link to="/shezhi"><span className='iconfont icon-shezhi1' style={{ color: '#fff', fontSize: 25, float: 'right', marginRight: "5%" }}></span></Link>
                    </div>
                    <Link to="/changeImg">
                        <div style={{ height: '120px', width: '30%', borderRadius: '50%', opacity: '1', marginLeft: '35%', marginTop: '5vh', display: 'flex', flexDirection: 'column' }}>
                            <img src={this.state.pic} style={{ height: '100px', width: '100px', opacity: '1', borderRadius: '50%', alignSelf: 'center' }} />
                            {
                                this.state.head != 'http://139.155.44.190:3005/head/null'
                                    ? <img src={this.state.head} style={{ height: '120px', width: '120px', borderRadius: '50%', alignSelf: 'center', marginTop: '-115px' }} />
                                    : null
                            }
                        </div>
                    </Link>
                    <div style={{ fontSize: 16, color: '#fff' }}>
                        <div style={{ width: '15%', height: '4vh', marginLeft: '42.5%', position: 'relative' }}>
                            <span style={{ position: 'absolute', top: '0.9vh', float: 'left' }}>{this.state.username}</span>
                            <img src={`http://139.155.44.190:3005/level/lv${this.state.level}.png`} style={{ width: '8vw', height: '4vh', float: 'right' }} />
                        </div>
                        <p style={{ textAlign: 'center' }}>河北师范大学{this.state.college}</p>
                        <div style={{ width: '25%', backgroundColor: 'pink', marginLeft: '37.5%', marginTop: '5%', color: '#fff' }}>
                            <Link to="/myfollows" style={{ color: '#fff' }}>
                                <div style={{ float: 'left', width: '30%', height: '5vh', color: '#fff', textAlign: 'center' }}>
                                    <span>关注</span>
                                    {
                                        this.state.nums > 0
                                            ? <Link to="/newadd" style={{ color: '#fff' }}>
                                                <div style={{ display: 'inline-block', textAlign: 'center' }}>
                                                    <div style={{ float: 'left' }}>
                                                        {this.state.follows}
                                                    </div>
                                                    <div style={{ float: 'right', color: '#fff', height: 18, width: 18, borderRadius: 9, backgroundColor: 'red', textAlign: 'center' }}>{this.state.nums}</div>
                                                </div>
                                            </Link>
                                            : <span style={{ color: '#fff' }}>{this.state.follows}</span>
                                    }
                                </div>
                            </Link>
                            <Link to="/myfans" style={{ color: '#fff' }}>
                                <div style={{ float: 'right', width: '30%', height: '5vh', textAlign: 'center', color: '#fff' }}>
                                    <span>粉丝</span>
                                    {
                                        this.state.pnum > 0
                                            ? <div onClick={this.fanlist} style={{ display: 'inline-block', textAlign: 'center' }}>
                                                <div style={{ float: 'left' }}>
                                                    {this.state.fans}
                                                </div>
                                                <div style={{ float: 'right', color: '#fff', height: 18, width: 18, borderRadius: 9, backgroundColor: 'red', textAlign: 'center' }}>{this.state.pnum}</div>
                                            </div>
                                            : <span>{this.state.fans}</span>
                                    }
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <List style={{ marginBottom: '5vh' }}>
                        <Link to="/mynotes">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-yumaobi'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的笔记</span></Item>
                        </Link>
                        <Link to="/tiezi" onClick={this.tiezi}>
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-biji1'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            >
                                <span style={{ marginLeft: '40px', fontSize: '20px' }}>我的帖子</span>
                                {this.state.sum > 0
                                    ? <div style={{ color: '#fff', marginLeft: '2vw', height: 18, width: 18, borderRadius: 9, backgroundColor: 'red', textAlign: 'center', position: 'absolute', top: '3vh', left: '25vw' }}>{this.state.sum}</div>
                                    : null
                                }
                            </Item>
                        </Link>
                        <Link to="/myexperience">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-dengpao'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black', position: "relative" }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>我的经验</span></Item>
                            {this.state.sum1 > 0
                                ? <div style={{ color: '#fff', height: 18, width: 18, borderRadius: 9, backgroundColor: 'red', textAlign: 'center', position: 'absolute', top: '20vh', left: '33.5vw' }}>{this.state.sum1}</div>
                                : null
                            }
                        </Link>
                        <Link to="/tongxunlvone">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-dianhua'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>通讯录</span></Item>
                        </Link>
                        <Link to="/head">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-shoucang1'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>头像框</span></Item>
                        </Link>
                        <Link to="/card">
                            <Item
                                arrow="horizontal"
                                onClick={() => { }}
                                className='iconfont icon-tupian-copy'
                                style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                            ><span style={{ marginLeft: '40px', fontSize: '20px' }}>卡片</span></Item>
                        </Link>
                    </List>
                </div>
            </div >
        )
    }
}

