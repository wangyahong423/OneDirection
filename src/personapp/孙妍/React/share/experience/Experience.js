import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
export default class Experience extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            all: [],
            pic: [],
            like: [],
            photo: [],
            collect: [],
            search: '',
            likeNum: [],
            colNum: [],
            username: '',

        };

    }

    componentDidMount() {

        var url1 = `http://139.155.44.190:3005/experience/list`;
        var url2 = `http://139.155.44.190:3005/experiencelike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/collect/list`;
        let url5 = `http://139.155.44.190:3005/users/getName`;
        axios(url5)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
            })
        axios(url3)

            .then((res) => {

                this.setState({ pic: res });
                

                
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ likeNum: res });
                        var likeList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                likeList.push(res[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        fetch(url4)
                            .then((res) => res.json())
                            .then((res) => {
                                this.setState({ colNum: res });
                                var colList = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == this.state.username) {
                                        colList.push(res[i]);
                                    }
                                }
                                this.setState({ collect: colList });
                                fetch(url1)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        res.forEach(item => {
                                            for (var i = 0; i < this.state.pic.data.length; i++) {
                                                
                                                
                                                if (item.name == this.state.pic.data[i].name) {
                                                    item.pic = 'http://139.155.44.190:3005' + this.state.pic.data[i].pic;
                                                    item.college = this.state.pic.data[i].college;
                                                    item.level = this.state.pic.data[i].level;
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
                                           
                                        });

                                        this.setState({ list: res });
                                        this.setState({ all: res });
                                       
                                        
                                    });
                                    
                                   
                            });
                    });
                   
                    
            });



    }
    like = (idx) => {
        var crr = '';
        if (this.state.list[idx].like == false) {
            crr = this.state.list;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.list[idx].id}&name=${this.state.username}&ename=${this.state.list[idx].name}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    
                });
        }
        else if (this.state.list[idx].like == true) {
            crr = this.state.list;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.list[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    
                });
        }
        let url2 = `http://139.155.44.190:3005/users/list`;
        fetch(url2)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    lvlist: res
                });
                this.state.lvlist.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            lvnum: item.lvnum + 1
                        })
                        let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                            });
                        if (this.state.lvnum == 15) {
                            alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 30) {
                            alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 45) {
                            alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 60) {
                            alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 75) {
                            alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 90) {
                            alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 105) {
                            alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 120) {
                            alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 135) {
                            alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                        }
                    }
                })
            })
        
    }
    collect = (idx) => {
        var crr = '';
        if (this.state.list[idx].collect == false) {
            crr = this.state.list;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    
                });
        }
        else if (this.state.list[idx].collect == true) {
            crr = this.state.list;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    
                });
        }
        let url2 = `http://139.155.44.190:3005/users/list`;
        fetch(url2)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    lvlist: res
                });
                this.state.lvlist.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            lvnum: item.lvnum + 1
                        })
                        let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                            });
                        if (this.state.lvnum == 15) {
                            alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 30) {
                            alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 45) {
                            alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 60) {
                            alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 75) {
                            alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 90) {
                            alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 105) {
                            alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 120) {
                            alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                        }
                        else if (this.state.lvnum == 135) {
                            alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                        }
                    }
                })
            })
        
    }
    change = (e) => {
        if(e.target.value == ''){
            window.location.href = "http://localhost:3000/experience"
        }
        else{
            this.setState({
                search: e.target.value
            })
        }
        
       
    }
    search = () => {
        
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        var url2 = `http://139.155.44.190:3005/experiencelike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/collect/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ pic: res });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ likeNum: res });
                        var likeList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                likeList.push(res[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        fetch(url4)
                            .then((res) => res.json())
                            .then((res) => {
                                this.setState({ colNum: res });
                                var colList = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == this.state.username) {
                                        colList.push(res[i]);
                                    }
                                }
                                this.setState({ collect: colList });
                                fetch(url)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        if (res.false) {
                                        }
                                        else {
                                            res.forEach(item => {
                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                    if (item.name == this.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
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
                                            });
                                            this.setState({ list: res });
                                        }
                                    });
                            });
                    });
            });

    }
    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    我的经验</NavBar>
                <div style={{ position: "fixed", top: '7vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                    <input placeholder='搜索' onChange={this.change} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.search} style={{ width: '15vw', float: 'left', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <Link to='/addexp'>
                        <div style={{ position: "fixed", top: "85%", left: '85%' }}>
                            <span className="iconfont icon-add-sy" style={{ fontSize: "6vh", color: "#37376F" }}></span>
                        </div>
                    </Link>
                    <div style={{ marginTop: '6vh' }}>
                        {
                            this.state.list.map((item, idx) =>
                                <div style={{ background: '#fff', color: 'black' }}>
                                    <div style={{ float: "left" }}>
                                        <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                    </div>
                                    <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}Lv.{item.level}</p>
                                    
                                    <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                                    <Link to={`/expdetails/${item.id}`}>
                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    </Link>
                                    <div style={{ marginTop: 20 }}>

                                        <sapn className="iconfont icon-collection" style={item.collect ? { color: 'yellow', fontSize: '24px', marginLeft: '26%' } : { fontSize: 30,fontSize: '24px', marginLeft: '26%'  }}  onClick={this.collect.bind(this, (idx))}></sapn>
                                        <span>{item.colNum}</span>
                                        <sapn className="iconfont icon-dianzan" style={item.like ? { color: 'yellow', fontSize: '24px', marginLeft: '26%' } : { fontSize: 30,fontSize: '24px', marginLeft: '26%'  }}  onClick={this.like.bind(this, (idx))}></sapn>
                                        <span style={{ marginLeft: '-11%' }}>{item.likeNum}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                    </div>
                                </div>)}
                    </div>
                </div>
            </div>
        )
    }
}
