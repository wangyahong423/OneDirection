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
export default class MyExperience extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            color: [],
            yonghu: [],
            pic: '',
            username: ''
        };
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/users/getName`;
        let url2 = `http://139.155.44.190:3005/experience/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/experiencelike/list`;
        let url5 = `http://139.155.44.190:3005/collect/list`;
        axios(url1)
            .then((re) => {
                axios(url3).then(res => {
                    res.data.map(item => {
                        if (item.name == re.data.name) {
                            this.setState({
                                pic: 'http://139.155.44.190:3005' + item.pic,
                                head: 'http://139.155.44.190:3005/head/' + item.head,
                                level: item.level
                            })
                        }
                    })
                    this.setState({
                        username: re.data.name,
                        pic: res.data
                    })
                    axios(url4)
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
                            this.setState({ like: likeList });
                            console.log('like:', this.state.like);
                            axios(url5)
                                .then((res) => {
                                    this.setState({ colNum: res.data });
                                    var colList = [];
                                    for (var i = 0; i < res.data.length; i++) {
                                        if (res.data[i].name == this.state.username) {
                                            colList.push(res.data[i]);
                                        }
                                    }
                                    this.setState({ collect: colList });
                                    console.log('collect:', this.state.collect);
                                    axios(url2)
                                        .then((res) => {
                                            var list1 = [];
                                            res.data.forEach(item => {
                                                if (item.name == this.state.username) {
                                                    list1.push(item);
                                                }
                                            })
                                            list1.forEach((item) => {
                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                    if (item.name == this.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                        item.college = this.state.pic[i].college;
                                                        item.level = this.state.pic[i].level;
                                                        item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                        break;
                                                    }
                                                }
                                                item.like = false;
                                                for (var j = 0; j < this.state.like.length; j++) {
                                                    if (item.id == this.state.like[j].eid) {
                                                        item.like = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.like = false;
                                                    }
                                                }
                                                var likeNum = 0;
                                                for (var z = 0; z < this.state.likeNum.length; z++) {
                                                    if (item.id == this.state.likeNum[z].eid) {
                                                        likeNum++;
                                                    }
                                                }
                                                item.likeNum = likeNum;
                                                item.collect = false;
                                                for (var j = 0; j < this.state.collect.length; j++) {
                                                    if (item.id == this.state.collect[j].eid) {
                                                        item.collect = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.collect = false;
                                                    }
                                                }
                                                var colNum = 0;
                                                for (var z = 0; z < this.state.colNum.length; z++) {
                                                    if (item.id == this.state.colNum[z].eid) {
                                                        colNum++;
                                                    }
                                                }
                                                item.colNum = colNum;
                                            })
                                            this.setState({
                                                data: list1
                                            })
                                            console.log('data:', this.state.data);
                                        })
                                })
                        })
                })
                // axios(url2)
                //     .then((res) => {
                //         var arr = [];
                //         res.data.map((item) => {
                //             if (item.name == re.data.name) {
                //                 arr.push(item)
                //             }
                //         })
                //         this.setState({
                //             data: arr
                //         })
                //         console.log('data:', this.state.data);
                //     })
            })
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            window.location.href = "http://localhost:3000/myexperience";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    clickSend = (content) => {
        console.log('aaa')
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                    console.log(222)
                } else {
                    if (res.data.name == this.state.username) {
                        for (var i = 0; i < res.data.length; i++) {
                            res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
                        }
                        this.setState({
                            data: res.data
                        })
                        console.log(111)
                    }

                }
            })
    };
    // delTie = (id) => {
    //     let url9 = `http://139.155.44.190:3005/experience/deleteNote?id=${id}`
    //     axios(url9)
    //         .then((res) => {
    //             window.location.href = "http://localhost:3000/myexperience"
    //             window.location.reload();
    //         })
    // }

    changeCollect = (id) => {
        var crr = this.state.data;
        crr[id].cnum = 0;
        this.setState({
            data: crr
        })
        let url11 = `http://139.155.44.190:3005/experience/change?cnum=${0}&eid=${this.state.data[id].id}`
        axios(url11)
            .then((res) => {
                console.log(url11);
            })
    }

    changeLike = (id) => {
        var crr = this.state.data;
        crr[id].likenum = 0;
        this.setState({
            data: crr
        })
        let url12 = `http://139.155.44.190:3005/experience/changeLike?likenum=${0}&eid=${this.state.data[id].id}`
        axios(url12)
            .then((res) => {
                console.log(url12);
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
        let url = `http://139.155.44.190:3005/learn/experience?id=${id}`;
        let url1 = `http://139.155.44.190:3005/experiencelike/deleteAll?eid=${id}`;
        let url2 = `http://139.155.44.190:3005/collect/deleteAll?eid=${id}`;
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
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/My"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    我的经验</NavBar>
                <div style={{ width: "100vw", height: '7vh', backgroundColor: '#EFEFF4', position: 'fixed', top: '7vh', zIndex: 2 }}>
                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '1vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.clickSend} style={{ width: '15vw', float: 'left', height: '7vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4', marginTop: '7vh' }}>
                    <div>
                        {
                            this.state.data.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                                    <div style={{ float: "left", flex: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                        <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 5 }} />
                                        {
                                            this.state.head != 'http://139.155.44.190:3005/head/null'
                                                ? <img src={this.state.head} style={{ height: '10vh', width: '15vw', borderRadius: '50%', position: 'absolute', left: 4, top: -3 }} />
                                                : null
                                        }
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '2.5vh', lineHeight: 2.5, marginLeft: '1vw' }}>{item.name}</span>
                                        {
                                            item.level > 10
                                                ? <span style={{ fontSize: '2.5vh', marginLeft: '2vw', color: 'red' }}>Lv.{item.level}</span>
                                                : <span style={{ position: 'relative' }}>
                                                    <img src={`http://139.155.44.190:3005/level/lv${this.state.level}.png`} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                </span>
                                        }
                                        {this.state.username == item.name
                                            ? <span onClick={this.delete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
                                            : <span style={{ float: 'right', marginRight: '2vw', color: '#fff', fontSize: 30 }}>×</span>
                                        }
                                    </div>
                                    <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                    <Link to={`/myexperiencedetails/${item.id}`}>
                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    </Link>
                                    <div style={{ marginTop: 20, position: 'relative' }}>
                                        <sapn className="iconfont icon-collection" style={{ marginLeft: '27%', fontSize: '24px', color: 'black' }}></sapn>
                                        <span style={{ marginLeft: '3%', color: '#000000' }}>{item.colNum}</span>
                                        {item.cnum > 0
                                            ? <div onClick={this.changeCollect.bind(this, (idx))} style={{ color: '#fff', marginLeft: '2vw', height: 20, width: 20, borderRadius: 10, backgroundColor: 'red', textAlign: 'center', position: 'absolute', top: '0.5vh', left: '35vw' }}>+{item.cnum}</div>
                                            : null
                                        }
                                        <sapn className="iconfont icon-dianzan" style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                        <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                        {item.likenum > 0
                                            ? <div onClick={this.changeLike.bind(this, (idx))} style={{ color: '#fff', marginLeft: '2vw', height: 20, width: 20, borderRadius: 10, backgroundColor: 'red', textAlign: 'center', position: 'absolute', top: '0.5vh', left: '70vw' }}>+{item.likenum}</div>
                                            : null
                                        }
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
