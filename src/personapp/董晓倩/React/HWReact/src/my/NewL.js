import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class NewL extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pic: [],
            likeNum: [],
            like: [],
            comNum: [],
            data: []
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/users/getName`;
        let url1 = `http://139.155.44.190:3005/follow/list`;
        let url2 = `http://139.155.44.190:3005/learn/list`;
        let url3 = `http://139.155.44.190:3005/learnlike/list`;
        let url4 = `http://139.155.44.190:3005/users/list`;
        let url5 = `http://139.155.44.190:3005/learntalk/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
            })
        axios(url4)
            .then((res) => {
                this.setState({
                    pic: res.data
                })
                axios(url3)
                    .then((res) => {
                        this.setState({
                            likeNum: res.data
                        });
                        console.log('likeNum:', this.state.likeNum);
                        var likeList = [];
                        for (var i = 0; i < res.data.length; i++) {
                            if (res.data[i].name == this.state.username) {
                                likeList.push(res.data[i]);
                            }
                        }
                        this.setState({
                            like: likeList
                        });
                        console.log('like:', this.state.like);
                        axios(url5)
                            .then((res) => {
                                this.setState({
                                    comNum: res.data
                                });
                                console.log('comNum:', this.state.comNum);
                                axios(url1)
                                    .then((res) => {
                                        var learn = [];
                                        var num1 = 0;
                                        res.data.forEach((item) => {
                                            if (item.lname == this.state.username) {
                                                if (item.learn != null && item.learn != "") {
                                                    var a = item.learn.split(",");
                                                    num1 = num1 + a.length;
                                                    for (var i = 0; i < a.length; i++) {
                                                        learn.push(a[i]);
                                                    }
                                                    console.log('learn:', learn);
                                                }
                                            }
                                        })
                                        axios(url2)
                                            .then((res) => {
                                                var arr = [];
                                                for (var a = 0; a < learn.length; a++) {
                                                    for (var b = 0; b < res.data.length; b++) {
                                                        if (res.data[b].id == learn[a]) {
                                                            for (var c = 0; c < this.state.pic.length; c++) {
                                                                if (res.data[b].name == this.state.pic[c].name) {
                                                                    res.data[b].pic = 'http://139.155.44.190:3005' + this.state.pic[c].pic;
                                                                    res.data[b].level = this.state.pic[c].level;
                                                                    res.data[b].head = 'http://139.155.44.190:3005/head/' + this.state.pic[c].head;
                                                                    res.data[b].college = this.state.pic[c].college;
                                                                    // console.log(this.state.arr[c])
                                                                    break;
                                                                }
                                                            }
                                                            res.data[b].like = false;
                                                            for (var j = 0; j < this.state.like.length; j++) {
                                                                if (res.data[b].id == this.state.like[j].lid) {
                                                                    res.data[b].like = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    res.data[b].like = false;
                                                                }
                                                            }
                                                            var likeNum = 0;
                                                            for (var z = 0; z < this.state.likeNum.length; z++) {
                                                                if (res.data[b].id == this.state.likeNum[z].lid) {
                                                                    likeNum++;
                                                                }
                                                            }
                                                            res.data[b].likeNum = likeNum;
                                                            var comNum = 0;
                                                            for (var z = 0; z < this.state.comNum.length; z++) {
                                                                if (res.data[b].id == this.state.comNum[z].lid) {
                                                                    comNum++;
                                                                }
                                                            }
                                                            res.data[b].comNum = comNum;
                                                            arr.push(res.data[b]);
                                                            break;
                                                        }
                                                    }
                                                }
                                                this.setState({
                                                    data: arr
                                                });
                                                console.log('data:', this.state.data);
                                            })
                                    })
                            })
                    })

            })
    }

    like = (idx) => {
        var crr = '';
        if (this.state.data[idx].like == false) {
            crr = this.state.data;
            crr[idx].like = true;
            crr[idx].likeNum++;
            crr[idx].likenum++;;
            this.setState({
                data: crr
            })
            let url6 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.data[idx].id}&name=${this.state.username}&lname=${this.state.data[idx].name}`;
            axios(url6)
                .then((res) => {
                    console.log(url6);
                    let url7 = `http://139.155.44.190:3005/users/list`;
                    axios(url7)
                        .then((res) => {
                            this.setState({
                                lvlist: res.data
                            });
                            this.state.lvlist.map((item) => {
                                if (item.name == this.state.username) {
                                    this.setState({
                                        lvnum: item.lvnum + 1
                                    })
                                    console.log('lvnum:', this.state.lvnum);
                                    let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
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
                                        if (item.name == this.state.username) {
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
                                                            let url3 = `http://139.155.44.190:3005/users/changeLv?level=${this.state.level}&name=${this.state.username}`;
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

                    let url12 = `http://139.155.44.190:3005/learn/changeLike?lid=${this.state.data[idx].id}&likenum=${this.state.data[idx].likenum}`;
                    axios(url12)
                        .then((res) => {
                            console.log(url7);
                        })
                })
        }
        else if (this.state.data[idx].like == true) {
            crr = this.state.data;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                data: crr
            })
            let url9 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.data[idx].id}&name=${this.state.username}`
            axios(url9)
                .then((res) => {
                    console.log(url9);
                });
        }
    }

    back = () => {
        let url1 = `http://139.155.44.190:3005/learn/list`;
        axios(url1)
            .then((res) => {
                for (var i = 0; i < this.state.data.length; i++) {
                    for (var j = 0; j < res.data.length; j++) {
                        if (this.state.data[i].id == res.data[j].id) {
                            let url2 = `http://139.155.44.190:3005/follow/changeLL?nname=${res.data[j].name}&lname=${this.state.username}&learn=${""}`;
                            axios(url2)
                                .then((res) => {
                                    console.log(url2);
                                })
                        }
                    }
                }
            })
    }

    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', zIndex: 10, textAlign: 'center', height: '7vh', position: 'sticky', top: 0 }}
                    leftContent={[
                        <Link to="/newadd" onClick={this.back}><span className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                ></NavBar>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <div>
                        {
                            this.state.data.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                                    <div style={{ float: "left", flex: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                        <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 5 }} />
                                        {
                                            item.head != 'http://139.155.44.190:3005/head/null'
                                                ? <img src={item.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 4, top: -3 }} />
                                                : null
                                        }
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '1vw' }}>{item.name}</span>
                                        {
                                            item.level > 10
                                                ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                                                : <span style={{ position: 'relative' }}>
                                                    <img src={`http://139.155.44.190:3005/level/lv${item.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                </span>
                                        }
                                    </div>
                                    <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                    <Link to={`/newldetails/${item.id}`}>
                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    </Link>
                                    <div style={{ marginTop: 20, position: 'relative' }}>
                                        <Link to={`/newlcom/${item.id}`}>
                                            {/* <div style={{position:'relative'}}> */}
                                            <sapn className="iconfont icon-icon-test-sy" style={{ marginLeft: '27%', fontSize: '24px', color: 'black' }}></sapn>
                                            <span style={{ marginLeft: '3%', color: '#000000' }}>{item.comNum}</span>
                                            {/* </div> */}
                                        </Link>
                                        <sapn className="iconfont icon-dianzan" onClick={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
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
