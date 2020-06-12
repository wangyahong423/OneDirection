import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class NewE extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pic: [],
            likeNum: [],
            like: [],
            colNum: [],
            collect: [],
            data: []
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/users/getName`;
        let url1 = `http://139.155.44.190:3005/follow/list`;
        let url2 = `http://139.155.44.190:3005/experience/list`;
        let url3 = `http://139.155.44.190:3005/experiencelike/list`;
        let url4 = `http://139.155.44.190:3005/users/list`;
        let url5 = `http://139.155.44.190:3005/collect/list`;
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
                                    colNum: res.data
                                });
                                var colList = [];
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].name == this.state.username) {
                                        colList.push(res.data[i]);
                                    }
                                }
                                this.setState({
                                    collect: colList
                                });
                                console.log('collect:', this.state.collect);
                                axios(url1)
                                    .then((res) => {
                                        var experience = [];
                                        var num2 = 0;
                                        res.data.forEach((item) => {
                                            if (item.lname == this.state.username) {
                                                if (item.experience != null && item.experience != "") {
                                                    var b = item.experience.split(",");
                                                    num2 = num2 + b.length;
                                                    for (var i = 0; i < b.length; i++) {
                                                        experience.push(b[i]);
                                                    }
                                                    console.log('experience:', experience);
                                                }
                                            }
                                        })
                                        axios(url2)
                                            .then((res) => {
                                                var brr = [];
                                                for (var a = 0; a < experience.length; a++) {
                                                    for (var i = 0; i < res.data.length; i++) {
                                                        if (res.data[i].id == experience[a]) {
                                                            for (var c = 0; c < this.state.pic.length; c++) {
                                                                if (res.data[i].name == this.state.pic[c].name) {
                                                                    res.data[i].pic = 'http://139.155.44.190:3005' + this.state.pic[c].pic;
                                                                    res.data[i].level = this.state.pic[c].level;
                                                                    res.data[i].head = 'http://139.155.44.190:3005/head/' + this.state.pic[c].head;
                                                                    res.data[i].college = this.state.pic[c].college;
                                                                    // console.log(this.state.arr[c])
                                                                    break;
                                                                }
                                                            }
                                                            res.data[i].like = false;
                                                            for (var j = 0; j < this.state.like.length; j++) {
                                                                if (res.data[i].id == this.state.like[j].eid) {
                                                                    res.data[i].like = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    res.data[i].like = false;
                                                                }
                                                            }
                                                            var likeNum = 0;
                                                            for (var z = 0; z < this.state.likeNum.length; z++) {
                                                                if (res.data[i].id == this.state.likeNum[z].eid) {
                                                                    likeNum++;
                                                                }
                                                            }
                                                            res.data[i].likeNum = likeNum;
                                                            res.data[i].collect = false;
                                                            for (var j = 0; j < this.state.collect.length; j++) {
                                                                if (res.data[i].id == this.state.collect[j].eid) {
                                                                    res.data[i].collect = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    res.data[i].collect = false;
                                                                }
                                                            }
                                                            var colNum = 0;
                                                            for (var z = 0; z < this.state.colNum.length; z++) {
                                                                if (res.data[i].id == this.state.colNum[z].eid) {
                                                                    colNum++;
                                                                }
                                                            }
                                                            res.data[i].colNum = colNum;
                                                            brr.push(res.data[i])
                                                        }
                                                    }
                                                }
                                                this.setState({
                                                    data: brr
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
            crr[idx].likenum++;
            this.setState({
                data: crr
            })
            let url6 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.data[idx].id}&name=${this.state.username}&ename=${this.state.data[idx].name}`;
            axios(url6)
                .then((res) => {
                    console.log(url6)
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

                    let url14 = `http://139.155.44.190:3005/experience/changeLike?eid=${this.state.data[idx].id}&likenum=${this.state.data[idx].likenum}`;
                    axios(url14)
                        .then((res) => {
                            console.log(url14);
                        })
                });
        }
        else if (this.state.data[idx].like == true) {
            crr = this.state.data;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                data: crr
            })
            let url8 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.data[idx].id}&name=${this.state.username}`
            axios(url8)
                .then((res) => {
                    console.log(url8);
                });
        }
    }

    collect = (idx) => {
        var crr = '';
        if (this.state.data[idx].collect == false) {
            crr = this.state.data;
            crr[idx].collect = true;
            crr[idx].colNum++;
            crr[idx].cnum++;
            this.setState({
                data: crr
            })
            let url9 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.data[idx].id}&name=${this.state.username}`;
            axios(url9)
                .then((res) => {
                    console.log(url9);
                    let url10 = `http://139.155.44.190:3005/users/list`;
                    axios(url10)
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
                                    let url12 = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                                    axios(url12)
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
                            let url13 = `http://139.155.44.190:3005/users/list`;
                            axios(url13)
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

                    let url15 = `http://139.155.44.190:3005/experience/change?eid=${this.state.data[idx].id}&cnum=${this.state.data[idx].cnum}`;
                    axios(url15)
                        .then((res) => {
                            console.log(url15);
                        })
                });
        }
        else if (this.state.data[idx].collect == true) {
            crr = this.state.data;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                data: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.data[idx].id}&name=${this.state.username}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    back = () => {
        let url1 = `http://139.155.44.190:3005/experience/list`;
        axios(url1)
            .then((res) => {
                for (var i = 0; i < this.state.data.length; i++) {
                    for (var j = 0; j < res.data.length; j++) {
                        if (this.state.data[i].id == res.data[j].id) {
                            let url2 = `http://139.155.44.190:3005/follow/changeEE?nname=${res.data[j].name}&lname=${this.state.username}&experience=${""}`;
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
                                    <Link to={`/newedetails/${item.id}`}>
                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    </Link>
                                    <div style={{ marginTop: 20, position: 'relative' }}>
                                        <sapn className="iconfont icon-collection" style={{ marginLeft: '27%', fontSize: '24px', color: 'black' }}></sapn>
                                        <span style={{ marginLeft: '3%', color: '#000000' }}>{item.colNum}</span>
                                        <sapn className="iconfont icon-dianzan" style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
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
