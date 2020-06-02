import React, { Component } from 'react'
import { NavBar } from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Myfollows extends Component {
    constructor() {
        super();
        this.state = {
            pic: [],
            name: '',
            follow: [],
            usersFollow: [],
            all: []
        }
    }

    componentDidMount() {
        let url = `http://139.155.44.190:3005/users/getName`;
        let url2 = `http://139.155.44.190:3005/users/list`;
        let url3 = `http://139.155.44.190:3005/follow/list`;

        axios(url)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })
        axios(url2)
            .then((res) => {
                this.setState({
                    pic: res.data
                })
                axios(url3)
                    .then((res) => {
                        var myfollow = [];
                        res.data.forEach((item) => {
                            if (item.lname == this.state.name) {
                                myfollow.push(item);
                            }
                        })
                        this.setState({
                            usersFollow: myfollow
                        })
                        var followList = [];
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].lname == this.state.name) {
                                followList.push(res.data[i]);
                            }
                        }
                        followList.forEach((item) => {
                            for (var i = 0; i < this.state.pic.length; i++) {
                                if (item.nname == this.state.pic[i].name) {
                                    item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                }
                            }
                            item.follow = false;
                            for (var f = 0; f < this.state.usersFollow.length; f++) {
                                if (item.nname == this.state.usersFollow[f].nname) {
                                    item.follow = true;
                                    break;
                                }
                                else {
                                    item.follow = false;
                                }
                                console.log('22', this.state.usersFollow);
                            }
                        })
                        this.setState({
                            follow: followList
                        })
                        console.log('follow:', this.state.follow);
                        this.setState({
                            follow: this.state.follow
                        })
                    })
            })
    }

    follow = (idx) => {
        var crr = '';
        if (this.state.follow[idx].follow == false) {
            crr = this.state.follow;
            crr[idx].follow = true;
            this.setState({
                follow: crr
            })
            let url1 = `http://139.155.44.190:3005/follow/add?lname=${this.state.name}&nname=${this.state.follow[idx].nname}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                    if (res.data.ok) {
                        alert(res.data.msg);
                    } else {
                        alert(res.data.msg);
                    }
                });
        } else if (this.state.follow[idx].follow == true) {
            crr = this.state.follow;
            crr[idx].follow = false;
            this.setState({
                follow: crr
            })
            let url2 = `http://139.155.44.190:3005/follow/delete?nname=${this.state.follow[idx].nname}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                    if (res.data.ok) {
                        alert(res.data.msg);
                    } else {
                        alert(res.data.msg);
                    }
                });
        }
    }

    back=()=>{
        window.history.back();
    }


    render() {
        return (
            <div>
                <div>
                    <NavBar
                        style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed', top: 0, zIndex: 18, textAlign: 'center', height: '7vh', width: '100%' }}
                        leftContent={[
                            <span onClick={this.back} style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span>
                        ]}
                    >
                        <span>关注列表</span>
                    </NavBar>
                        )
                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <div style={{ marginTop: '9vh' }}>
                        {
                            this.state.follow.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black', marginBottom: '2vh', height: '10vh' }}>
                                    <Link to={`/myfolper/${item.nname}`}>
                                        <div style={{ float: "left" }}>
                                            <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                        </div>
                                    </Link>
                                    <div>
                                        <span style={{ fontSize: '2.5vh', lineHeight: '10vh', marginLeft: '4vw' }}>{item.nname}</span>
                                        {
                                            item.nname != this.state.name
                                                ?
                                                <span onClick={this.follow.bind(this, (idx))} style={!item.follow ? { height: '5vh', width: '20vw', float: 'right', textAlign: "center", lineHeight: '5vh', marginRight: '2vw', marginTop: '2vh', color: 'red', fontSize: 14, borderRadius: 5, borderWidth: '1px', borderColor: 'red', borderStyle: 'solid' } : { height: '5vh', width: '20vw', float: 'right', textAlign: "center", lineHeight: '5vh', marginRight: '2vw', marginTop: '2vh', color: '#000', fontSize: 14, borderRadius: 5, borderWidth: '1px', borderColor: '#000', borderStyle: 'solid' }}>{!item.follow ? '关注' : '取消关注'}</span>
                                                : null
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

