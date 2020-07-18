import React, { Component } from 'react';
import { NavBar, ActionSheet } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default class FanCom extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            todo: [],
            clicked2: true,
            lid: parseInt(''),
            name: '',
            content: '',
            yonghu: [],
            pic: [],
            photo: [],
            list: [],
            time: new Date().toLocaleString()
        };
    }
    dataList = [
        { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
    ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
    }));
    addItem = () => {
        if (this.state.content) {
            let url = `http://139.155.44.190:3005/learntalk/add?lid=${this.state.lid}
        &name=${this.state.name}&content=${this.state.content}&time=${this.state.time}`;
            axios(url)
                .then((res) => {
                    if (res.data.ok) {
                        alert(res.data.msg);
                        // window.location.reload();
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
                                        window.location.reload();
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
                    } else {
                        alert(res.data.msg);
                    }
                })

        }
        else {
            alert("您还未填写内容")
        }
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        var nname = this.props.match.params.nname;
        var lname = this.props.match.params.lname;
        let url = `http://139.155.44.190:3005/learn/list/` + id;
        let url1 = `http://139.155.44.190:3005/learntalk/list/`;
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url4 = `http://139.155.44.190:3005/users/list`;
        axios(url3)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })
        axios(url)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic
                    res.data[i].head = 'http://139.155.44.190:3005/head/' + res.data[i].head;
                    res.data[i].card = 'http://139.155.44.190:3005/card/' + res.data[i].card;
                }
                this.setState({
                    data: res.data
                })
                var brr = []
                this.state.data.map((item) => {
                    if (item.id == id) {
                        brr.push(item);
                    }
                    this.setState({
                        data: brr
                    })
                })
            })
        axios(url4)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic;
                    res.data[i].head = 'http://139.155.44.190:3005/head/' + res.data[i].head;
                }
                this.setState({
                    yonghu: res.data
                })
                var qrr = []
                var a = 0;
                for (var i = 0; i < this.state.data.length; i++) {
                    for (var j = 0; j < this.state.yonghu.length; j++) {
                        if (this.state.data[i].name == this.state.yonghu[j].name) {
                            a = this.state.yonghu[j].pic;
                            break;
                        }
                        else {
                            a = 0;
                        }
                    }
                    if (a != 0) {
                        qrr.push(a)
                    }
                }
                this.setState({
                    pic: qrr
                })
                this.state.data.forEach(item => {
                    for (var i = 0; i < res.data.length; i++) {
                        if (item.name == res.data[i].name) {
                            item.level = res.data[i].level;
                            item.head = res.data[i].head;
                            break;
                        }
                    }
                })
                axios(url1)
                    .then((res) => {
                        this.setState({
                            list: res.data
                        })
                        var arr = [];
                        this.state.list.map((item) => {
                            if (item.lid == id) {
                                arr.push(item);
                            }
                            this.setState({
                                list: arr
                            })
                        })
                        var qrr = []
                        var a = 0;
                        for (var i = 0; i < this.state.list.length; i++) {
                            for (var j = 0; j < this.state.yonghu.length; j++) {
                                if (this.state.list[i].name == this.state.yonghu[j].name) {
                                    a = this.state.yonghu[j].pic;
                                    console.log(a)
                                    break;
                                }
                                else {
                                    a = 0;
                                }
                            }
                            if (a != 0) {
                                qrr.push(a)
                            }
                        }
                        this.setState({
                            photo: qrr
                        })
                        this.state.list.forEach(item => {
                            for (var i = 0; i < this.state.yonghu.length; i++) {
                                if (item.name == this.state.yonghu[i].name) {
                                    item.level = this.state.yonghu[i].level;
                                    item.head = this.state.yonghu[i].head;
                                    break;
                                }
                            }
                            this.setState({
                                list: this.state.list
                            })
                        })
                    })
            })
        this.setState({
            pernname: nname,
            perlname: lname
        })
    }

    delete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.opntion1.bind(this, (this.state.list[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };

    opntion1 = (id) => {
        let url = `http://139.155.44.190:3005/learntalk/delete?id=${id}`;
        axios(url)
            .then((res) => {
                alert(res.data.msg);
                window.location.reload();
            });
    }
    opntion2 = () => {

    }

    getContent = (e) => {
        this.setState({
            lid: this.props.match.params.id,
            content: e.target.value,
        })
    }
    changeColor() {
        this.setState({
            clicked2: !this.state.clicked2
        })
    }
    back = () => {
        window.history.back();
    }
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        // <Link to={`/fanper/${this.state.pernname}/${this.state.perlname}`}><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                        <span onClick={this.back} style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span>
                    ]}
                >
                    <span>评论</span>
                </NavBar>
                {
                    this.state.data.map((item, idx) =>
                        <div style={{ background: '#fff', color: 'black' }}>
                            <div style={{ float: "left", position: 'relative' }}>
                                <img src={this.state.pic[idx]} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                {
                                    item.head != 'http://139.155.44.190:3005/head/null'
                                        ? <img src={item.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 4, top: -3 }} />
                                        : null
                                }
                            </div>
                            <div>
                                <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '4vw' }}>{item.name}</span>
                                {
                                    item.level > 10
                                        ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                                        : <span style={{ position: 'relative' }}>
                                            <img src={`http://139.155.44.190:3005/level/lv${item.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                        </span>
                                }
                                {
                                    item.card != 'http://139.155.44.190:3005/card/null' || null
                                        ? <span style={{ float: 'right', marginRight: '3vw', marginTop: '1vh' }}><img style={{ width: '22vw', height: '7vh' }} src={item.card} /></span>
                                        : null
                                }
                            </div>
                            <div style={{ marginLeft: 68, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                            <Link to={`/aboutyouknow/${item.id}`}>
                                <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: 17 }}>{item.content}</p>
                            </Link>
                            <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                            </div>
                        </div>)}
                <input placeholder="       添加评论" style={{ width: '82%', marginTop: '1vh', height: '37px', borderColor: 'red', borderRadius: '15px', border: 'none' }} onChange={this.getContent} />
                <button style={{ width: '18%', height: '40px', borderBottomColor: 'gray', borderRadius: '30px', backgroundColor: '#3385FF', color: 'white', border: 'none' }} onClick={this.addItem} >发送</button>

                <p style={{ fontSize: 15, marginLeft: 5 }}>评论列表</p>
                <hr style={{ marginTop: -5 }}></hr>
                {
                    this.state.list.map((item, idx) => (
                        <div style={{ background: '#fff', color: 'black' }}>
                            <div style={{ float: "left", position: 'relative' }}>
                                <img src={this.state.photo[idx]} style={{ height: '5vh', width: '10vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                {
                                    item.head != 'http://139.155.44.190:3005/head/null'
                                        ? <img src={item.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 0, top: -10 }} />
                                        : null
                                }
                            </div>
                            <div style={{ height: '1px', width: '100%' }}></div>
                            <div>
                                {
                                    item.name == this.state.data[0].name
                                        ? <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '4vw', color: 'red' }}>{item.name}</span>
                                        : <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '4vw' }}>{item.name}</span>
                                }

                                {
                                    item.level > 10
                                        ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                                        : <span style={{ position: 'relative' }}>
                                            <img src={`http://139.155.44.190:3005/level/lv${item.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                        </span>
                                }
                                {
                                    this.state.name == item.name || this.state.data[0].name == this.state.name
                                        ? <span onClick={this.delete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
                                        : null
                                }
                            </div>
                            <div style={{ height: '2px', width: '100%' }}></div>
                            <div style={{ marginLeft: '17vw', marginTop: '-10px', fontSize: '2.3vh' }}>{item.content}</div>
                            <p style={{ marginLeft: '17vw', color: 'gray', marginTop: 7, fontSize: '2vw', }}>{item.time}</p>
                            <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                            </div>
                        </div>
                    )
                    )}
            </div>
        )
    }
}
