import React, { Component } from 'react'
import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Background from "../images/img2.jpg";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const bg = {
    height: '40vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 999,
    background: `url(${Background}) center center / cover no-repeat`,
};

const tabs = [
    { title: '赞在社区', sub: '1' },
    { title: '赞在经验', sub: '2' },
    { title: '我的社区', sub: '3' },
    { title: '我的经验', sub: '4' },
    { title: '我的收藏', sub: '5' },
];

export default class FanPer extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            pic: [],
            learn: 0,
            experience: 0,
            learnlike: 0,
            experiencelike: 0,
            follows: 0,
            fans: 0,
            name: '',
            userfollow: [],
            follow: false,
            username: '',
            Plearnlike: 0,
            Pexperiencelike: 0,
            Pexpcollect: 0,
            pname: '',
            llikeData: [],
            elikeData: [],
            mylearnData: [],
            myexpData: [],
            mycollectData: [],
            colNum: [],
            collect: [],
            myllikeNum: [],//learnlike中的res.data
            mylcomNum: [],
            learnList: [],
            myelikeNum: [],
            myecomNum: [],
            expList: [],
        }
    }

    componentDidMount() {
        var name = this.props.match.params.lname;
        var lname1 = this.props.match.params.nname;
        let url = `http://139.155.44.190:3005/users/getName`;
        let url1 = `http://139.155.44.190:3005/learn/list/`;
        let url2 = `http://139.155.44.190:3005/users/list`;
        let url3 = `http://139.155.44.190:3005/experience/list`;
        let url4 = `http://139.155.44.190:3005/experiencelike/list`;
        let url5 = `http://139.155.44.190:3005/learnlike/list`;
        let url6 = `http://139.155.44.190:3005/follow/list`;
        let url7 = `http://139.155.44.190:3005/collect/list`;
        let url8 = `http://139.155.44.190:3005/learntalk/list`;

        console.log('name:', name);
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
                var arr = []
                res.data.map((item) => {
                    if (item.name == name) {
                        item.pic = 'http://139.155.44.190:3005' + item.pic;
                        item.head = 'http://139.155.44.190:3005/head/' + item.head;
                        arr.push(item);
                    }
                    this.setState({
                        data: arr
                    })
                })
                console.log('data', arr);
                axios(url1)
                    .then((res) => {
                        this.setState({
                            learnList: res.data
                        })
                        var learnnum = 0;
                        res.data.forEach(item => {
                            if (item.name == this.state.data[0].name) {
                                learnnum++;
                            }
                        })
                        this.setState({
                            learn: learnnum
                        })
                        axios(url5)
                            .then((res) => {
                                var llike = 0;
                                res.data.forEach(item => {
                                    if (item.lname == this.state.data[0].name) {
                                        llike++;
                                    }
                                })
                                this.setState({
                                    learnlike: llike
                                })
                                var PLlike = 0;
                                res.data.forEach(item => {
                                    if (item.name == this.state.data[0].name) {
                                        PLlike++;
                                    }
                                })
                                this.setState({
                                    Plearnlike: PLlike
                                })
                                //我的帖子
                                this.setState({
                                    myllikeNum: res.data
                                })
                                var llikeList = [];
                                for (var i = 0; i < res.data.length; i++) {
                                    if (res.data[i].name == this.state.name) {
                                        llikeList.push(res.data[i]);
                                    }
                                }
                                this.setState({
                                    myllike: llikeList
                                })

                                //我赞过的社区帖子
                                var perllikeList = [];
                                for (var j = 0; j < res.data.length; j++) {
                                    if (res.data[j].name == this.state.data[0].name) {
                                        perllikeList.push(res.data[j]);
                                    }
                                }
                                this.setState({
                                    perLlike: perllikeList
                                })
                                axios(url8)
                                    .then((res) => {
                                        this.setState({
                                            mycomNum: res.data
                                        })
                                        var list1 = [];
                                        this.state.learnList.forEach((item) => {
                                            if (item.name == this.state.data[0].name) {
                                                item.pic = this.state.data[0].pic;
                                                item.college = this.state.data[0].college;
                                                item.level = this.state.data[0].level;
                                                item.card = 'http://139.155.44.190:3005/card/' + item.card;
                                                item.head = this.state.data[0].head;
                                                item.like = false;
                                                for (var j = 0; j < this.state.myllike.length; j++) {
                                                    if (item.id == this.state.myllike[j].lid) {
                                                        item.like = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.like = false;
                                                    }
                                                }
                                                var likeNum = 0;
                                                for (var z = 0; z < this.state.myllikeNum.length; z++) {
                                                    if (item.id == this.state.myllikeNum[z].lid) {
                                                        likeNum++;
                                                    }
                                                }
                                                item.likeNum = likeNum;
                                                var comNum = 0;
                                                for (var z = 0; z < this.state.mycomNum.length; z++) {
                                                    if (item.id == this.state.mycomNum[z].lid) {
                                                        comNum++;
                                                    }
                                                }
                                                item.comNum = comNum;
                                                list1.push(item);
                                            }
                                        })
                                        this.setState({
                                            mylearnData: list1
                                        })
                                        console.log('mylearnData:', this.state.mylearnData);
                                        //我赞过的社区帖子
                                        var list4 = [];
                                        for (var p = 0; p < this.state.perLlike.length; p++) {
                                            this.state.learnList.forEach((item) => {
                                                if (this.state.perLlike[p].lid == item.id) {
                                                    for (var i = 0; i < this.state.pic.length; i++) {
                                                        if (item.name == this.state.pic[i].name && item.name != this.state.data[0].name) {
                                                            item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                            item.level = this.state.pic[i].level;
                                                            item.college = this.state.pic[i].college;
                                                            item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                            item.card = 'http://139.155.44.190:3005/card/' + item.card;
                                                            break;
                                                        }
                                                    }
                                                    item.like = false;
                                                    for (var j = 0; j < this.state.myllike.length; j++) {
                                                        if (item.id == this.state.myllike[j].lid) {
                                                            item.like = true;
                                                            break;
                                                        }
                                                        else {
                                                            item.like = false;
                                                        }
                                                    }
                                                    var likeNum = 0;
                                                    for (var z = 0; z < this.state.myllikeNum.length; z++) {
                                                        if (item.id == this.state.myllikeNum[z].lid) {
                                                            likeNum++;
                                                        }
                                                    }
                                                    item.likeNum = likeNum;
                                                    var comNum = 0;
                                                    for (var z = 0; z < this.state.mycomNum.length; z++) {
                                                        if (item.id == this.state.mycomNum[z].lid) {
                                                            comNum++;
                                                        }
                                                    }
                                                    item.comNum = comNum;
                                                    list4.push(item);
                                                }
                                            })
                                        }
                                        this.setState({
                                            llikeData: list4
                                        });
                                        console.log('llikeData:', this.state.llikeData);
                                    })
                            })
                        axios(url3)
                            .then((res) => {
                                this.setState({
                                    expList: res.data
                                })
                                var expnum = 0;
                                res.data.forEach(item => {
                                    if (item.name == this.state.data[0].name) {
                                        expnum++;
                                    }
                                })
                                this.setState({
                                    experience: expnum
                                })
                                axios(url4)
                                    .then((res) => {
                                        var elike = 0;
                                        res.data.forEach(item => {
                                            if (item.ename == this.state.data[0].name) {
                                                elike++;
                                            }
                                        })
                                        this.setState({
                                            experiencelike: elike
                                        })
                                        var PElike = 0;
                                        res.data.forEach(item => {
                                            if (item.name == this.state.data[0].name) {
                                                PElike++;
                                            }
                                        })
                                        this.setState({
                                            Pexperiencelike: PElike
                                        })
                                        //我的经验分享
                                        this.setState({
                                            myelikeNum: res.data
                                        });
                                        var elikeList = [];
                                        for (var i = 0; i < res.data.length; i++) {
                                            if (res.data[i].name == this.state.name) {
                                                elikeList.push(res.data[i]);
                                            }
                                        }
                                        this.setState({
                                            myelike: elikeList
                                        });

                                        //我赞过的经验分享帖子
                                        var perelikeList = [];
                                        for (var i = 0; i < res.data.length; i++) {
                                            if (res.data[i].name == this.state.data[0].name) {
                                                perelikeList.push(res.data[i]);
                                            }
                                        }
                                        this.setState({
                                            perElike: perelikeList
                                        });
                                        axios(url7)
                                            .then((res) => {
                                                this.setState({
                                                    colNum: res.data
                                                });
                                                var colList = [];
                                                for (var i = 0; i < res.data.length; i++) {
                                                    if (res.data[i].name == this.state.name) {
                                                        colList.push(res.data[i]);
                                                    }
                                                }
                                                this.setState({
                                                    collect: colList
                                                });

                                                var list2 = [];
                                                this.state.expList.forEach((item) => {
                                                    if (item.name == this.state.data[0].name) {
                                                        item.pic = this.state.data[0].pic;
                                                        item.college = this.state.data[0].college;
                                                        item.level = this.state.data[0].level;
                                                        item.head = this.state.data[0].head;
                                                        item.like = false;
                                                        for (var j = 0; j < elikeList.length; j++) {
                                                            if (item.id == elikeList[j].eid) {
                                                                item.like = true;
                                                                break;
                                                            }
                                                            else {
                                                                item.like = false;
                                                            }
                                                        }
                                                        var likeNum = 0;
                                                        for (var z = 0; z < this.state.myelikeNum.length; z++) {
                                                            if (item.id == this.state.myelikeNum[z].eid) {
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
                                                        list2.push(item);

                                                    }
                                                })
                                                this.setState({ myexpData: list2 });
                                                console.log('myexpData:', this.state.myexpData);
                                                //我赞过的经验分享帖子
                                                var list5 = [];
                                                for (var p = 0; p < perelikeList.length; p++) {
                                                    this.state.expList.forEach((item) => {
                                                        if (perelikeList[p].eid == item.id) {
                                                            for (var a = 0; a < this.state.pic.length; a++) {
                                                                if (item.name == this.state.pic[a].name && item.name != this.state.data[0].name) {
                                                                    item.pic = 'http://139.155.44.190:3005' + this.state.pic[a].pic;
                                                                    item.college = this.state.pic[a].college;
                                                                    item.level = this.state.pic[a].level;
                                                                    item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                                    break;
                                                                }
                                                            }
                                                            item.like = false;
                                                            for (var j = 0; j < elikeList.length; j++) {
                                                                if (item.id == elikeList[j].eid) {
                                                                    item.like = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    item.like = false;
                                                                }
                                                            }
                                                            var likeNum = 0;
                                                            for (var z = 0; z < this.state.myelikeNum.length; z++) {
                                                                if (item.id == this.state.myelikeNum[z].eid) {
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
                                                            list5.push(item);
                                                        }
                                                    })
                                                }
                                                this.setState({
                                                    elikeData: list5
                                                })
                                                console.log('elikeData:', this.state.elikeData);
                                                //我的收藏
                                                var percollectList = [];
                                                for (var i = 0; i < res.data.length; i++) {
                                                    if (res.data[i].name == this.state.data[0].name) {
                                                        percollectList.push(res.data[i]);
                                                    }
                                                }
                                                this.setState({
                                                    perCollect: percollectList
                                                });
                                                var list3 = [];
                                                for (var p = 0; p < percollectList.length; p++) {
                                                    this.state.expList.forEach(item => {
                                                        if (percollectList[p].eid == item.id) {
                                                            for (var a = 0; a < this.state.pic.length; a++) {
                                                                if (item.name == this.state.pic[a].name) {
                                                                    item.pic = this.state.pic[a].pic;
                                                                    item.college = this.state.pic[a].college;
                                                                    item.level = this.state.pic[a].level;
                                                                    item.head = this.state.data[0].head;
                                                                    break;
                                                                }
                                                            }
                                                            item.like = false;
                                                            for (var j = 0; j < elikeList.length; j++) {
                                                                if (item.id == elikeList[j].eid) {
                                                                    item.like = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    item.like = false;
                                                                }
                                                            }
                                                            var likeNum = 0;
                                                            for (var z = 0; z < this.state.myelikeNum.length; z++) {
                                                                if (item.id == this.state.myelikeNum[z].eid) {
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
                                                            list3.push(item);
                                                        }
                                                    })
                                                }
                                                this.setState({
                                                    mycollectData: list3
                                                });
                                                console.log('mycollectData:', this.state.mycollectData);
                                            })
                                    })

                            })
                        axios(url7)
                            .then((res) => {
                                var pcollect = 0;
                                res.data.forEach(item => {
                                    if (item.name == this.state.data[0].name) {
                                        pcollect++;
                                    }
                                });
                                this.setState({
                                    Pexpcollect: pcollect
                                });
                            })
                        axios(url6)
                            .then((res) => {
                                var folnum = 0;
                                var fannum = 0;
                                var perfollow = [];
                                res.data.forEach(item => {
                                    if (item.lname == this.state.data[0].name) {
                                        folnum++;
                                    }
                                    else if (item.nname == this.state.data[0].name) {
                                        fannum++;
                                    }
                                })
                                res.data.forEach(item => {
                                    if (item.lname == this.state.name) {
                                        perfollow.push(item);
                                    }
                                })
                                this.setState({
                                    follows: folnum,
                                    fans: fannum,
                                    userfollow: perfollow
                                })
                                for (var i = 0; i < this.state.userfollow.length; i++) {
                                    if (this.state.userfollow[i].nname == this.state.data[0].name) {
                                        this.setState({
                                            follow: true
                                        })
                                        break;
                                    }
                                    else {
                                        this.setState({
                                            follow: false
                                        })
                                    }
                                }
                            })
                    })
            })
        this.setState({
            pname: name,
            lname: lname1,//nname
            username: name//lname
        })
    }

    follow = () => {
        var user = this.props.match.params.lname;
        if (this.state.follow == false) {
            this.setState({
                follow: true
            })
            let url1 = `http://139.155.44.190:3005/follow/add?lname=${this.state.name}&nname=${user}`;
            axios(url1)
                .then((res) => {
                    // console.log(url1);
                    if (res.data.ok) {
                        alert(res.data.msg);
                    } else {
                        alert(res.data.msg);
                    }
                })
        }
        else {
            this.setState({
                follow: false
            })
            let url2 = `http://139.155.44.190:3005/follow/delete?nname=${user}`;
            axios(url2)
                .then((res) => {
                    // console.log(url2);
                    if (res.data.ok) {
                        alert(res.data.msg);
                    } else {
                        alert(res.data.msg);
                    }
                })
        }
    }

    //赞在社区点赞
    myLlike = (idx) => {
        var crr = '';
        if (this.state.llikeData[idx].like == false) {
            crr = this.state.llikeData;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                llikeData: crr
            })
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.llikeData[idx].id}&name=${this.state.name}&lname=${this.state.llikeData[idx].name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.llikeData[idx].like == true) {
            crr = this.state.llikeData;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                llikeData: crr
            })
            let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.llikeData[idx].id}&name=${this.state.name}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }
    //赞在经验点赞
    myElike = (idx) => {
        var crr = '';
        if (this.state.elikeData[idx].like == false) {
            crr = this.state.elikeData;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                elikeData: crr
            })
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.elikeData[idx].id}&name=${this.state.name}&ename=${this.state.elikeData[idx].name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.elikeData[idx].like == true) {
            crr = this.state.elikeData;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                elikeData: crr
            })
            let url2 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.elikeData[idx].id}&name=${this.state.name}`
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    //赞在经验收藏
    elikeCollect = (idx) => {
        var crr = '';
        if (this.state.elikeData[idx].collect == false) {
            crr = this.state.elikeData;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                elikeData: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.elikeData[idx].id}&name=${this.state.name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.elikeData[idx].collect == true) {
            crr = this.state.elikeData;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                myexpData: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.elikeData[idx].id}&name=${this.state.name}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    //我的社区点赞
    lLike = (idx) => {
        var crr = '';
        if (this.state.mylearnData[idx].like == false) {
            crr = this.state.mylearnData;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                mylearnData: crr
            })
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.mylearnData[idx].id}&name=${this.state.name}&lname=${this.state.mylearnData[idx].name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.mylearnData[idx].like == true) {
            crr = this.state.mylearnData;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                mylearnData: crr
            })
            let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.mylearnData[idx].id}&name=${this.state.name}`
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    //我的经验点赞
    eLike = (idx) => {
        var crr = '';
        if (this.state.myexpData[idx].like == false) {
            crr = this.state.myexpData;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                myexpData: crr
            })
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.myexpData[idx].id}&name=${this.state.name}&ename=${this.state.myexpData[idx].name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.myexpData[idx].like == true) {
            crr = this.state.myexpData;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                myexpData: crr
            })
            let url2 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.myexpData[idx].id}&name=${this.state.name}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }
    //我的经验收藏
    Ecollect = (idx) => {
        var crr = '';
        if (this.state.myexpData[idx].collect == false) {
            crr = this.state.myexpData;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                myexpData: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.myexpData[idx].id}&name=${this.state.name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.myexpData[idx].collect == true) {
            crr = this.state.myexpData;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                myexpData: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.myexpData[idx].id}&name=${this.state.name}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    //我的收藏点赞
    collectLike = (idx) => {
        var crr = '';
        if (this.state.mycollectData[idx].like == false) {
            crr = this.state.mycollectData;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                mycollectData: crr
            })
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.mycollectData[idx].id}&name=${this.state.name}&ename=${this.state.mycollectData[idx].name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.mycollectData[idx].like == true) {
            crr = this.state.mycollectData;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                mycollectData: crr
            })
            let url2 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.list[idx].id}&name=${this.state.name}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    //我的收藏中的收藏
    myCollect = (idx) => {
        var crr = '';
        if (this.state.mycollectData[idx].collect == false) {
            crr = this.state.mycollectData;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                mycollectData: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.mycollectData[idx].id}&name=${this.state.name}`;
            axios(url1)
                .then((res) => {
                    console.log(url1);
                });
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
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.name}`;
                            axios(url)
                                .then((res) => {
                                });
                            if (this.state.lvnum == 16) {
                                alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 31) {
                                alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 46) {
                                alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 61) {
                                alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 76) {
                                alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 91) {
                                alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 104) {
                                alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 121) {
                                alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                            else if (this.state.lvnum == 136) {
                                alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                                window.location.reload();
                            }
                        }
                    })
                })
            let url11 = `http://139.155.44.190:3005/users/list`;
            axios(url11)
                .then((res) => {
                    this.setState({
                        user: res.data
                    })
                    this.state.user.map((item) => {
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
                })
        } else if (this.state.mycollectData[idx].collect == true) {
            crr = this.state.mycollectData;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                mycollectData: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.mycollectData[idx].id}&name=${this.state.name}`;
            axios(url2)
                .then((res) => {
                    console.log(url2);
                });
        }
    }

    changeSearch = (e) => {
        var name = this.props.match.params.name;
        if (e.target.value == "") {
            window.location.href = `http://localhost:3000/person/${name}`;
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }

    //赞在社区搜索
    llikeSearch = () => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) { }
                else {
                    var list6 = [];
                    for (var i = 0; i < res.data.length; i++) {
                        for (var j = 0; j < this.state.llikeData.length; j++) {
                            if (res.data[i].id == this.state.llikeData[j].id) {
                                list6.push(this.state.llikeData[j]);
                                break;
                            }
                        }
                    }
                    this.setState({ llikeData: list6 });
                }
            })
    }

    //赞在经验搜索
    elikeSearch = () => {
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) { }
                else {
                    var list7 = [];
                    for (var i = 0; i < res.data.length; i++) {
                        for (var j = 0; j < this.state.elikeData.length; j++) {
                            if (res.data[i].id == this.state.elikeData[j].id) {
                                list7.push(this.state.elikeData[j]);
                                break;
                            }
                        }
                    }
                    this.setState({ elikeData: list7 });
                }
            });
    }

    //我的社区搜索
    mylSearch = () => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) { }
                else {
                    var list8 = [];
                    for (var i = 0; i < res.data.length; i++) {
                        for (var j = 0; j < this.state.mylearnData.length; j++) {
                            if (res.data[i].id == this.state.mylearnData[j].id) {
                                list8.push(this.state.mylearnData[j]);
                                break;
                            }
                        }
                    }
                    this.setState({ mylearnData: list8 });
                }
            });
    }

    //我的经验分享搜索
    myeSearch = () => {
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) { }
                else {
                    var list9 = [];
                    for (var i = 0; i < res.data.length; i++) {
                        for (var j = 0; j < this.state.myexpData.length; j++) {
                            if (res.data[i].id == this.state.myexpData[j].id) {
                                list9.push(this.state.myexpData[j]);
                                break;
                            }
                        }
                    }
                    this.setState({ myexpData: list9 });
                }
            });
    }

    //我的收藏搜索
    mycSearch = () => {
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) { }
                else {
                    var list10 = [];
                    for (var i = 0; i < res.data.length; i++) {
                        for (var j = 0; j < this.state.mycollectData.length; j++) {
                            if (res.data[i].id == this.state.mycollectData[j].id) {
                                list10.push(this.state.mycollectData[j]);
                                break;
                            }
                        }
                    }
                    this.setState({ mycollectData: list10 });
                }
            });
    }

    //赞在社区删除
    llikeDelete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.llikeOpntion1.bind(this, (this.state.llikeData[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };
    llikeOpntion1 = (id) => {
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

    //赞在经验删除
    elikeDelete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.elikeOpntion1.bind(this, (this.state.elikeData[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };
    elikeOpntion1 = (id) => {
        let url = `http://139.155.44.190:3005/experience/delete?id=${id}`;
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

    //我的社区删除
    mylDelete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.mylOpntion1.bind(this, (this.state.mylearnData[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };
    mylOpntion1 = (id) => {
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

    //我的经验删除
    myeDelete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.myeOpntion1.bind(this, (this.state.myexpData[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };
    myeOpntion1 = (id) => {
        let url = `http://139.155.44.190:3005/experience/delete?id=${id}`;
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

    //我的收藏删除
    mycDelete = (idx) => {
        confirmAlert({
            title: 'Confirm to submit',
            message: '你确定要删除吗？',
            buttons: [
                {
                    label: '确定',
                    onClick: this.mycOpntion1.bind(this, (this.state.mycollectData[idx].id))
                },
                {
                    label: '取消',
                    onClick: this.opntion2
                }
            ]
        });
    };
    mycOpntion1 = (id) => {
        let url = `http://139.155.44.190:3005/experience/delete?id=${id}`;
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

    handleScrollTop() {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <div>
                <div style={bg}>
                    <Link to={`/fans/${this.state.lname}`}><span style={{ fontSize: '17px', color: 'white', marginLeft: "2vw", paddingTop: '2vh', display: 'block' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    {
                        this.state.data.map((item) =>
                            <div style={{ width: '100%', height: '30vh', textAlign: 'center' }}>
                                <img src={item.pic} style={{ height: 80, width: 80, borderRadius: '50%', borderColor: '#37376F', borderWidth: 2, borderStyle: 'solid' }} />
                                <div>
                                    <span style={{ fontSize: 18, color: '#fff' }}>{item.name}</span>
                                    <span style={{ position: 'relative' }}>
                                        <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                    </span>
                                </div>
                                {
                                    this.state.name == this.state.username
                                        ? <p style={{ color: '#fff', fontSize: 16 }}>我</p>
                                        : <p onClick={this.follow} style={{ height: '5vh', width: '20vw', marginLeft: '40vw', lineHeight: '5vh', textAlign: "center", color: '#fff', fontSize: 16, borderRadius: '2.5vh', borderWidth: '1px', borderColor: '#fff', borderStyle: 'solid' }}>{!this.state.follow ? '关注' : '取消关注'}</p>
                                }
                                <div>
                                    <span style={{ height: '5vh', width: '20vw', float: 'left', textAlign: "center", marginLeft: '10vw', marginTop: '2vh', color: '#fff', fontSize: 14, borderRightWidth: '2px', borderRightColor: '#fff', borderRightStyle: 'solid' }}>
                                        <span style={{ display: 'block', fontSize: 16 }}>{this.state.learnlike}</span>
                                        <span style={{ display: 'block', fontSize: 16 }}>社区获赞</span>
                                    </span>
                                    <span style={{ height: '5vh', width: '20vw', float: 'left', textAlign: "center", marginTop: '2vh', color: '#fff', fontSize: 14, borderRightWidth: '2px', borderRightColor: '#fff', borderRightStyle: 'solid' }}>
                                        <span style={{ display: 'block', fontSize: 16 }}>{this.state.experiencelike}</span>
                                        <span style={{ display: 'block', fontSize: 16 }}>经验获赞</span>
                                    </span>
                                    <Link to={`/fans/${item.name}`}>
                                        <span style={{ height: '5vh', width: '20vw', float: 'left', textAlign: "center", marginTop: '2vh', color: '#fff', fontSize: 14, borderRightWidth: '2px', borderRightColor: '#fff', borderRightStyle: 'solid' }}>
                                            <span style={{ display: 'block', fontSize: 16 }}>{this.state.fans}</span>
                                            <span style={{ display: 'block', fontSize: 16 }}>粉丝</span>
                                        </span>
                                    </Link>
                                    <Link to={`/follows/${item.name}`}>
                                        <span style={{ height: '5vh', width: '20vw', float: 'left', textAlign: "center", marginTop: '2vh', color: '#fff', fontSize: 14 }}>
                                            <span style={{ display: 'block', fontSize: 16 }}>{this.state.follows}</span>
                                            <span style={{ display: 'block', fontSize: 16 }}>关注</span>
                                        </span>
                                    </Link>

                                </div>
                            </div>
                        )
                    }
                </div>
                <div style={{ marginTop: '40vh' }}>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        tabBarPosition="top"
                        renderTab={tab => <span>{tab.title}</span>}
                    >
                        <Link>
                            {/* 赞在社区 */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                                <div style={{ position: "fixed", top: '2vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                                    <div onClick={this.llikeSearch} className='iconfont icon-sousuo1' style={{ width: '15vw', float: 'left', color: '#999999', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}></div>
                                </div>
                                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                                    <div style={{ marginTop: '10vh' }}>
                                        {
                                            this.state.llikeData.map((item, idx) =>
                                                <div style={{ background: '#fff', color: 'black', marginBottom: '1vh', width: '100vw' }}>
                                                    <div style={{ float: "left", position: 'relative' }}>
                                                        {
                                                            item.pic.indexOf('http://139.155.44.190:3005') == -1
                                                                ? <img src={`http://139.155.44.190:3005${item.pic}`} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                                                : <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />

                                                        }                                                        {
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
                                                                    <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                                </span>
                                                        }
                                                        {/* <span style={{ position: 'relative' }}>
                                                            <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                        </span> */}
                                                        {this.state.name == item.name
                                                            ? <span onClick={this.llikeDelete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
                                                            : null
                                                        }
                                                        {
                                                            item.card != 'http://139.155.44.190:3005/card/null' || null
                                                                ? <span style={{ float: 'right', marginRight: '3vw', marginTop: '1vh' }}><img style={{ width: '22vw', height: '7vh' }} src={item.card} /></span>
                                                                : null
                                                        }
                                                    </div>
                                                    <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                                    <Link to={`/fandetails/${this.state.lname}/${this.state.username}/${item.id}`}>
                                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                                    </Link>
                                                    <div style={{ marginTop: 20 }}>
                                                        <Link to={`/fancom/${this.state.lname}/${this.state.username}/${item.id}`}>
                                                            <sapn className="iconfont icon-pinglun" style={{ fontSize: '24px', marginLeft: '26%', color: 'black' }}></sapn>
                                                            <span style={{ marginLeft: '3%', color: '#000000' }}>{item.comNum}</span>
                                                        </Link>
                                                        <sapn className="iconfont icon-dianzan" onClick={this.myLlike.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                        <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                                    </div>
                                                    <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* 赞在经验 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            <div style={{ position: "fixed", top: '2vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                                <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                                <div onClick={this.elikeSearch} className='iconfont icon-sousuo1' style={{ width: '15vw', float: 'left', height: '6vh', color: '#999999', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}></div>
                            </div>
                            <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                                <div style={{ marginTop: '10vh' }}>
                                    {
                                        this.state.elikeData.map((item, idx) =>
                                            <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                                                <div style={{ float: "left", position: 'relative' }}>
                                                    {
                                                        item.pic.indexOf('http://139.155.44.190:3005') == -1
                                                            ? <img src={`http://139.155.44.190:3005${item.pic}`} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                                            : <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />

                                                    }                                                    {
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
                                                                <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                            </span>
                                                    }
                                                    {/* <span style={{ position: 'relative' }}>
                                                        <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                    </span> */}
                                                    {this.state.name == item.name ? <span onClick={this.elikeDelete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span> : null}
                                                </div>
                                                <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                                <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw' }}>{item.content}</p>
                                                <div style={{ marginTop: 20 }}>
                                                    <sapn className="iconfont icon-collection" onClick={this.elikeCollect.bind(this, (idx))} style={item.collect ? { color: 'yellow', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '3%', color: '#000000' }}>{item.colNum}</span>
                                                    <sapn className="iconfont icon-dianzan" onClick={this.myElike.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                                </div>
                                                <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* 我的社区 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#EFEFF4' }}>
                            <div style={{ position: "fixed", top: '2vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                                <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                                <div onClick={this.mylSearch} className='iconfont icon-sousuo1' style={{ width: '15vw', float: 'left', height: '6vh', color: '#999999', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}></div>
                            </div>
                            <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                                <div style={{ marginTop: '10vh' }}>
                                    {
                                        this.state.mylearnData.map((item, idx) =>
                                            <div style={{ background: '#fff', color: 'black', marginBottom: '1vh', width: '100vw' }}>
                                                <div style={{ float: "left", position: 'relative' }}>
                                                    {
                                                        item.pic.indexOf('http://139.155.44.190:3005') == -1
                                                            ? <img src={`http://139.155.44.190:3005${item.pic}`} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                                            : <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />

                                                    }                                                    {
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
                                                                <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                            </span>
                                                    }
                                                    {/* <span style={{ position: 'relative' }}>
                                                        <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                    </span> */}
                                                    {this.state.name == item.name
                                                        ? <span onClick={this.mylDelete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span>
                                                        : null
                                                    }
                                                    {
                                                        item.card != 'http://139.155.44.190:3005/card/null'
                                                            ? <span style={{ float: 'right', marginRight: '3vw', marginTop: '1vh' }}><img style={{ width: '22vw', height: '7vh' }} src={item.card} /></span>
                                                            : null
                                                    }
                                                </div>
                                                <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                                <Link to={`/fandetails/${this.state.lname}/${this.state.username}/${item.id}`}>
                                                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                                </Link>
                                                <div style={{ marginTop: 20 }}>
                                                    <Link to={`/fancom/${this.state.lname}/${this.state.username}/${item.id}`}>
                                                        <sapn className="iconfont icon-pinglun" style={{ fontSize: '24px', marginLeft: '26%', color: 'black' }}></sapn>
                                                        <span style={{ marginLeft: '3%', color: '#000000' }}>{item.comNum}</span>
                                                    </Link>
                                                    <sapn className="iconfont icon-dianzan" onClick={this.lLike.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                                </div>
                                                <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* 我的经验 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            <div style={{ position: "fixed", top: '2vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                                <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                                <div onClick={this.myeSearch} className='iconfont icon-sousuo1' style={{ width: '15vw', float: 'left', height: '6vh', color: '#999999', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}></div>
                            </div>
                            <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                                <div style={{ marginTop: '10vh' }}>
                                    {
                                        this.state.myexpData.map((item, idx) =>
                                            <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                                                <div style={{ float: "left", position: 'relative' }}>
                                                    {
                                                        item.pic.indexOf('http://139.155.44.190:3005') == -1
                                                            ? <img src={`http://139.155.44.190:3005${item.pic}`} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                                            : <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />

                                                    }                                                    {
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
                                                                <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                            </span>
                                                    }
                                                    {/* <span style={{ position: 'relative' }}>
                                                        <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                    </span> */}
                                                    {this.state.name == item.name ? <span onClick={this.myeDelete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span> : null}
                                                </div>
                                                <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                                <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw' }}>{item.content}</p>
                                                <div style={{ marginTop: 20 }}>
                                                    <sapn className="iconfont icon-collection" onClick={this.Ecollect.bind(this, (idx))} style={item.collect ? { color: 'yellow', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '3%', color: '#000000' }}>{item.colNum}</span>
                                                    <sapn className="iconfont icon-dianzan" onClick={this.eLike.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                                </div>
                                                <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {/* 我的收藏 */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            <div style={{ position: "fixed", top: '2vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                                <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                                <div onClick={this.mycSearch} className='iconfont icon-sousuo1' style={{ width: '15vw', float: 'left', height: '6vh', color: '#999999', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}></div>
                            </div>
                            <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                                <div style={{ marginTop: '10vh' }}>
                                    {
                                        this.state.mycollectData.map((item, idx) =>
                                            <div style={{ background: '#fff', color: 'black', marginBottom: '1vh' }}>
                                                <div style={{ float: "left", position: 'relative' }}>
                                                    {
                                                        item.pic.indexOf('http://139.155.44.190:3005') == -1
                                                            ? <img src={`http://139.155.44.190:3005${item.pic}`} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                                            : <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />

                                                    }
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
                                                                <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                            </span>
                                                    }
                                                    {/* <span style={{ position: 'relative' }}>
                                                        <img src={require(`../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                    </span> */}
                                                    {this.state.name == item.name ? <span onClick={this.mycDelete.bind(this, (idx))} style={{ float: 'right', marginRight: '2vw', color: '#999999', fontSize: 30 }}>×</span> : null}
                                                </div>
                                                <div style={{ marginLeft: 76, color: 'gray', fontSize: '2vw' }}>{item.time}</div>
                                                <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw' }}>{item.content}</p>
                                                <div style={{ marginTop: 20 }}>
                                                    <sapn className="iconfont icon-collection" onClick={this.myCollect.bind(this, (idx))} style={item.collect ? { color: 'yellow', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '3%', color: '#000000' }}>{item.colNum}</span>
                                                    <sapn className="iconfont icon-dianzan" onClick={this.collectLike.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: '24px', marginLeft: '26%' } : { fontSize: '24px', marginLeft: '26%' }}></sapn>
                                                    <span style={{ marginLeft: '-10%' }}>{item.likeNum}</span>
                                                </div>
                                                <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
                <div onClick={this.handleScrollTop} style={{ position: "fixed", top: "85%", left: '85%' }}>
                    <span className="iconfont icon-huidaodingbu" style={{ fontSize: "6vh", color: "#999999" }}></span>
                </div>
            </div>
        )
    }
}
