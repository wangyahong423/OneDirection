import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default class Community extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            like: [],
            pic: [],
            name: '',
            likeNum: [],
            comNum: []
        };
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/users/getName`;
        let url1 = `http://139.155.44.190:3005/learn/list`;
        let url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/learntalk/list`;

        axios(url)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })

        axios(url3)
            .then((res) => {
                this.setState({
                    pic: res.data
                });
                axios(url)
                    .then((res) => {
                        this.setState({
                            name: res.data.name
                        })
                    })

                axios(url2)
                    .then((res) => {
                        this.setState({
                            likeNum: res.data
                        })
                        var likeList = [];
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].name == this.state.name) {
                                likeList.push(res.data[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        axios(url4)
                            .then((res) => {
                                this.setState({
                                    comNum: res.data
                                })
                                axios(url1)
                                    .then((res) => {
                                        res.data.forEach(item => {
                                            for (var i = 0; i < this.state.pic.length; i++) {
                                                if (item.name == this.state.pic[i].name) {
                                                    item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                    item.level = this.state.pic[i].level;
                                                    item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                    break;
                                                }
                                            }
                                            item.card = 'http://139.155.44.190:3005/card/' + item.card;

                                            item.like = false;
                                            for (var j = 0; j < this.state.like.length; j++) {
                                                if (item.id == this.state.like[j].lid) {
                                                    item.like = true;
                                                    break;
                                                }
                                                else {
                                                    item.like = false;
                                                }
                                            }
                                            var likeNum = 0;
                                            for (var a = 0; a < this.state.likeNum.length; a++) {
                                                if (item.id == this.state.likeNum[a].lid) {
                                                    likeNum++;
                                                }
                                            }
                                            item.likeNum = likeNum;
                                            var comNum = 0;
                                            for (var a = 0; a < this.state.comNum.length; a++) {
                                                if (item.id == this.state.comNum[a].lid) {
                                                    comNum++;
                                                }
                                            }
                                            item.comNum = comNum;
                                        });
                                        this.setState({ data: res.data })
                                        console.log('community:', this.state.data);
                                    })

                            })
                    })
            })
        axios(url)
            .then((res) => {
                this.setState({
                    name: res.data.data
                })
            })
    };

    change = (idx) => {
        var crr = '';
        if (this.state.data[idx].like == false) {
            crr = this.state.data;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                data: crr
            })
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.data[idx].id}&name=${this.state.name}&lname=${this.state.data[idx].name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                    let url2 = `http://139.155.44.190:3005/users/list`;
                    axios(url2)
                        .then((res) => {
                            this.setState({
                                lvlist: res.data
                            });
                            this.state.lvlist.map((item) => {
                                if (item.name == this.state.name) {
                                    this.setState({
                                        lvnum: item.lvnum + 1
                                    })
                                    console.log('lvnum:', this.state.lvnum);
                                    let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                                    axios(url)
                                        .then((res) => {
                                        });
                                    if (this.state.lvnum == 15) {
                                        alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 30) {
                                        alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 45) {
                                        alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 60) {
                                        alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 75) {
                                        alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 90) {
                                        alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 105) {
                                        alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 120) {
                                        alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                    else if (this.state.lvnum == 135) {
                                        alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                        window.location.reload();
                                    }
                                }
                            })
                            let url11 = `http://139.155.44.190:3005/users/list`;
                            axios(url11)
                                .then((res) => {
                                    this.setState({
                                        todo: res.data
                                    })
                                    this.state.todo.map((item) => {
                                        if (item.name == this.state.name) {
                                            this.setState({
                                                lvnum: item.lvnum//修改
                                            })
                                            var num = Math.floor(this.state.lvnum / 15);
                                            let url3 = `http://139.155.44.190:3005/users/list`;
                                            axios(url3)
                                                .then((res) => {
                                                    this.setState({
                                                        lvlist: res.data
                                                    })
                                                    this.state.lvlist.map((item) => {
                                                        if (item.name == this.state.name) {
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
                                                            let url3 = `http://139.155.44.190:3005/users/changeLv?level=${this.state.level}&name=${this.state.name}`;
                                                            axios(url3)
                                                                .then((res) => {
                                                                    if (res.data.ok) {
                                                                    } else {
                                                                        alert(res.data.msg);
                                                                    }
                                                                });
                                                        }
                                                    })
                                                })
                                        }
                                    })
                                });
                        })

                })
        } else if (this.state.data[idx].like == true) {
            crr = this.state.data;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                data: crr
            })
            let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.data[idx].id}&name=${this.state.name}`
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            window.location.href = "http://localhost:3000/community";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    clickSend = () => {
        let url = `http://139.155.44.190:3005/users/getName`;
        let url1 = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;;
        let url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/learntalk/list`;

        axios(url)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })

        axios(url3)
            .then((res) => {
                this.setState({
                    pic: res.data
                });
                axios(url)
                    .then((res) => {
                        this.setState({
                            name: res.data.name
                        })
                    })
                axios(url2)
                    .then((res) => {
                        this.setState({
                            likeNum: res.data
                        })
                        var likeList = [];
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].name == this.state.name) {
                                likeList.push(res.data[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        axios(url4)
                            .then((res) => {
                                this.setState({
                                    comNum: res.data
                                })
                                axios(url1)
                                    .then((res) => {
                                        if (res.data.false) { }
                                        else {
                                            res.data.forEach(item => {
                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                    if (item.name == this.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                        item.level = this.state.pic[i].level;
                                                        item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                        break;
                                                    }
                                                }
                                                item.card = 'http://139.155.44.190:3005/card/' + item.card;

                                                for (var j = 0; j < this.state.like.length; j++) {
                                                    if (item.id == this.state.like[j].lid) {
                                                        item.like = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.like = false;
                                                    }
                                                }
                                                var likeNum = 0;
                                                for (var a = 0; a < this.state.likeNum.length; a++) {
                                                    if (item.id == this.state.likeNum[a].lid) {
                                                        likeNum++;
                                                    }
                                                }
                                                item.likeNum = likeNum;
                                                var comNum = 0;
                                                for (var a = 0; a < this.state.comNum.length; a++) {
                                                    if (item.id == this.state.comNum[a].lid) {
                                                        comNum++;
                                                    }
                                                }
                                                item.comNum = comNum;
                                            })
                                            this.setState({ data: res.data })

                                        }

                                    });
                            })
                    })
            })
    }

    delete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.opntion1.bind(this, (this.state.data[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };

    opntion1 = (id) => {
        let url = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`;
        let url1 = `http://139.155.44.190:3005/learntalk/deleteAll?lid=${id}`;
        let url2 = `http://139.155.44.190:3005/learnlike/deleteAll?lid=${id}`;
        axios(url1)
            .then((res) => {
                axios(url2)
                    .then((res) => {
                        axios(url)
                            .then((res) => {
                                alert(res.data.msg);
                                window.location.reload();
                            });
                    });
            });
    }
    opntion2 = () => {

    }

    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: "100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                >
                    社区</NavBar>
                <div style={{ position: "fixed", top: '7vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4', zIndex: 999 }}>
                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.clickSend} style={{ width: '15vw', float: 'left', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    {
                        this.props.selected == 'community' && <Link to='/add'><div style={{ position: "fixed", top: "85%", left: '85%' }}>
                            <span className="iconfont icon-jiahao" style={{ fontSize: "6vh", color: "#37376F" }}></span>
                        </div></Link>
                    }
                    <div style={{ marginTop: '13vh' }}>
                        {
                            this.state.data.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                                    <Link to={`/person/${item.name}`}>
                                        <div style={{ float: "left", flex: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                            <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 5 }} />
                                            {
                                                item.head != 'http://139.155.44.190:3005/head/null'
                                                    ? <img src={item.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 4, top: -3 }} />
                                                    : null
                                            }
                                        </div>
                                    </Link>
                                    <div>
                                        <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '1vw' }}>{item.name}</span>
                                        {
                                            item.level > 10
                                                ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                                                : <span style={{ position: 'relative' }}>
                                                    <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                </span>
                                        }
                                        {/* <span style={{position:'relative'}}>
                                            <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw',position:'absolute',top:-4 }} />
                                        </span> */}
                                        {this.state.name == item.name
                                            ? <span onClick={this.delete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
                                            : <span style={{ float: 'right', marginRight: '2vw', color: '#fff', fontSize: 30 }}>×</span>
                                        }
                                        {
                                            item.card != 'http://139.155.44.190:3005/card/null' || null
                                                ? <span style={{ float: 'right', marginRight: '3vw', marginTop: '1vh' }}><img style={{ width: '22vw', height: '7vh' }} src={item.card} /></span>
                                                : null
                                        }
                                    </div>
                                    <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                    <Link to={`/aboutyouknow/${item.id}`}>
                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    </Link>
                                    <div style={{ marginTop: 20 }}>
                                        <Link to={`/pinglunone/${item.id}`}>
                                            <sapn className="iconfont icon-pinglun" style={{ marginLeft: '27%', fontSize: '24px', color: 'black' }}></sapn>
                                            <span style={{ marginLeft: '3%', color: '#000000' }}>{item.comNum}</span>
                                        </Link>
                                        <sapn className="iconfont icon-dianzan" onClick={this.change.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                        <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
