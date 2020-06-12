import { NavBar, SearchBar, ActionSheet, WingBlank, Button, Picker } from 'antd-mobile';
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
const college = [
    {
        label: '全部',
        value: '全部'
    },
    {
        label: '马克思主义学院',
        value: '马克思主义学院'
    },
    {
        label: '历史文化学院',
        value: '历史文化学院'
    },
    {
        label: '美术与设计学院',
        value: '美术与设计学院'
    },
    {
        label: '法政与公共管理学院',
        value: '法政与公共管理学院'
    },
    {
        label: '化学与材料科学学院',
        value: '化学与材料科学学院'
    },
    {
        label: '体育学院',
        value: '体育学院'
    },
    {
        label: '国际文化交流学院',
        value: '国际文化交流学院'
    },
    {
        label: '初等教育系',
        value: '初等教育系'
    },
    {
        label: '软件学院',
        value: '软件学院'
    },
    {
        label: '教育学院',
        value: '教育学院'
    },
    {
        label: '外国语学院',
        value: '外国语学院'
    },
    {
        label: '新闻传播学院',
        value: '新闻传播学院'
    },
    {
        label: '数学科学学院(田家炳教育书院)',
        value: '数学科学学院(田家炳教育书院)'
    },
    {
        label: '生命科学学院',
        value: '生命科学学院'
    },
    {
        label: '计算机与网络空间安全学院、计算机教学部',
        value: '计算机与网络空间安全学院、计算机教学部'
    },
    {
        label: '教师教育学院',
        value: '教师教育学院'
    },
    {
        label: '大学外语教学部',
        value: '大学外语教学部'
    },
    {
        label: '汇华学院',
        value: '汇华学院'
    },
    {
        label: '文学院',
        value: '文学院'
    },
    {
        label: '音乐学院',
        value: '音乐学院'
    },
    {
        label: '商学院',
        value: '商学院'
    },
    {
        label: '物理学院',
        value: '物理学院'
    },
    {
        label: '资源与环境科学学院',
        value: '资源与环境科学学院'
    },
    {
        label: '职业技术学院、中燃工学院',
        value: '职业技术学院、中燃工学院'
    },
    {
        label: '学前教育学院（旅游系）',
        value: '学前教育学院（旅游系）'
    },
    {
        label: '公共体育教学部',
        value: '公共体育教学部'
    }
]
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
            college: '',

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
                                                    item.head = 'http://139.155.44.190:3005/head/' + this.state.pic.data[i].head;
                                                    item.card = 'http://139.155.44.190:3005/card/' + this.state.pic.data[i].card;
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
                                        console.log('list:', this.state.list);
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
            crr[idx].likenum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.list[idx].id}&name=${this.state.username}&ename=${this.state.list[idx].name}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    let url7 = `http://139.155.44.190:3005/experience/changeLike?eid=${this.state.list[idx].id}&likenum=${this.state.list[idx].likenum}`;
                    axios(url7)
                        .then((res) => {
                            console.log(url7);
                        })
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
            crr[idx].cnum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    let url8 = `http://139.155.44.190:3005/experience/change?eid=${this.state.list[idx].id}&cnum=${this.state.list[idx].cnum}`;
                    axios(url8)
                        .then((res) => {
                            console.log(url8);
                        })
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
        if (e.target.value == '') {
            window.location.href = "http://localhost:3000/experience"
        }
        else {
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
                                                        item.level = this.state.pic[i].level;
                                                        item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                        item.card = 'http://139.155.44.190:3005/card/' + this.state.pic[i].card;
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
    handlePickerChange = vs => {
        if (vs == "全部") {
            this.setState({
                list: this.state.all
            })
        }
        else {
            var arr = [];
            for (var i = 0; i < this.state.all.length; i++) {
                if (this.state.all[i].college == vs) {
                    arr.push(this.state.all[i]);
                }
            }
            this.setState({ list: arr });
        }
        console.log(this.state.list);
    };

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

    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    我的经验</NavBar>

                <div style={{ position: "fixed", top: '7vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4', zIndex: 999 }}>
                    <input placeholder='搜索' onChange={this.change} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '60vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.search} style={{ width: '15vw', float: 'left', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                    <Picker
                        onOk={this.handlePickerChange}
                        data={college}
                        title="选择学院"
                        cols={1}
                    >
                        <Button color="primary" style={{ height: "6vh", marginLeft: '2vw', width: '20vw', marginLeft: "20%", borderRadius: '2vw', backgroundColor: '#37376f', color: '#fff', }}>
                            分类
                        </Button>
                    </Picker>


                </div>
                <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
                    <Link to='/addexp'>
                        <div style={{ position: "fixed", top: "85%", left: '85%' }}>
                            <span className="iconfont icon-add-sy" style={{ fontSize: "6vh", color: "#37376F" }}></span>
                        </div>
                    </Link>
                    <div style={{ marginTop: '7vh' }}>

                        {
                            this.state.list.map((item, idx) =>
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
                                                    <img src={require(`../../images/lv${item.level}.png`)} style={{ width: '8vw', height: '5vw', marginLeft: '2vw', position: 'absolute', top: -4 }} />
                                                </span>
                                        }
                                        {
                                            this.state.username == item.name
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
                                    <Link to={`/expdetails/${item.id}`}>
                                        <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: '17px', width: '87vw', overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.content}</p>
                                    </Link>
                                    <div style={{ marginTop: 20 }}>
                                        <sapn className="iconfont icon-collection" style={item.collect ? { color: 'yellow', fontSize: '24px', marginLeft: '26%' } : { fontSize: 30, fontSize: '24px', marginLeft: '26%' }} onClick={this.collect.bind(this, (idx))}></sapn>
                                        <span>{item.colNum}</span>
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
