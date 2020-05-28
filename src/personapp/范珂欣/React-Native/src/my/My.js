import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, ScrollView, TouchableOpacity, DeviceEventEmitter, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Img from '../community/Img'
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            data: [],
            todo: [],
            islogin: false,
            college: '',
            // pic: '',
            lvnum: '',
            // head: '',
            newl: false,
            new: [],
            fans: 0,
            follows: 0,


        }
    }
    componentDidMount() {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        let url2 = `http://139.155.44.190:3005/users/list`;
        let url11 = `http://139.155.44.190:3005/learn/list`;
        fetch(url11)
            .then((res) => res.json())
            .then((res) => {
                var arr = [];
                for (var i = 0; i < res.length; i++) {
                    if (res[i].name == this.state.username) {
                        if (res[i].newl == true) {
                            this.setState({
                                newl: true
                            });
                            arr.push(res[i].id);
                        }
                    }
                }
                // console.log("arr:"+arr);
                this.setState({
                    new: arr
                });
                // console.log(this.state.new);
            });
        fetch(url2)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    todo: res
                })
                this.state.todo.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            college: item.college,
                            pic: "http://139.155.44.190:3005" + item.pic,
                            lvnum: item.lvnum,//修改
                            head: "http://139.155.44.190:3005/head/" + item.head
                        })
                        console.log("点击头像", this.state.pic)
                        var num = Math.floor(this.state.lvnum / 15);
                        // console.log("输出num", num)
                        let url3 = `http://139.155.44.190:3005/users/list`;
                        fetch(url3)
                            .then(res => res.json())
                            .then((res) => {
                                this.setState({
                                    lvlist: res
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
                                        // console.log("获取到的等级", this.state.level)
                                        let url3 = `http://139.155.44.190:3005/users/changeLv?level=${this.state.level}&name=${this.state.username}`;
                                        fetch(url3)
                                            .then((res) => res.json())
                                            .then((res) => {
                                                if (res.ok) {
                                                } else {
                                                    Alert.alert(res.msg);
                                                }
                                            });
                                    }
                                })
                            })
                    }
                })
            })
        let url5 = `http://139.155.44.190:3005/follow/list`;

        fetch(url5)
            .then((res) => res.json())
            .then((res) => {
                var num1 = 0;
                var num2 = 0
                var nname = [];
                var lname = []
                res.forEach(item => {
                    if (item.lname == this.state.username) {//关注
                        nname.push(item.nname)//关注列表
                        num1++;
                    }
                    else if (item.nname == this.state.username) {//粉丝
                        lname.push(item.lname)//粉丝列表
                        num2++;
                    }
                });
                this.setState({
                    follows: num1,
                    fans: num2,
                    nnameList: nname,
                    lnameList: lname
                })
            })
        var self = this;
        this.listener = DeviceEventEmitter.addListener('refresh', function (param) {
            let url2 = `http://139.155.44.190:3005/users/list`;
            let url11 = `http://139.155.44.190:3005/learn/list`;
            fetch(url11)
                .then((res) => res.json())
                .then((res) => {
                    var arr = [];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].name == self.state.username) {

                            if (res[i].newl == true) {
                                self.setState({
                                    newl: true
                                });
                                arr.push(res[i].id);
                            }
                        }
                    }
                    self.setState({
                        new: arr
                    });
                });
            fetch(url2)
                .then(res => res.json())
                .then((res) => {
                    self.setState({
                        todo: res
                    })
                    self.state.todo.map((item) => {
                        if (item.name == self.state.username) {
                            self.setState({
                                college: item.college,
                                pic: "http://139.155.44.190:3005" + item.pic,
                                lvnum: item.lvnum,//修改
                                head: "http://139.155.44.190:3005/head/" + item.head
                            })
                            var num = Math.floor(self.state.lvnum / 15);
                            console.log("输出num", num)
                            let url3 = `http://139.155.44.190:3005/users/list`;
                            fetch(url3)
                                .then(res => res.json())
                                .then((res) => {
                                    self.setState({
                                        lvlist: res
                                    })
                                    self.state.lvlist.map((item) => {
                                        if (item.name == self.state.username) {
                                            self.setState({
                                                level: num + 1
                                            })
                                            // console.log("获取到的等级", self.state.level)

                                            let url3 = `http://139.155.44.190:3005/users/changeLv?level=${self.state.level}&name=${self.state.username}`;
                                            fetch(url3)
                                                .then((res) => res.json())
                                                .then((res) => {
                                                    if (res.ok) {
                                                    } else {
                                                        Alert.alert(res.msg);
                                                    }
                                                });
                                        }
                                    })
                                })
                        }
                    })
                })
            let url5 = `http://139.155.44.190:3005/follow/list`;

            fetch(url5)
                .then((res) => res.json())
                .then((res) => {
                    var num1 = 0;
                    var num2 = 0
                    var nname = [];
                    var lname = []
                    res.forEach(item => {
                        if (item.lname == self.state.username) {//关注
                            nname.push(item.nname)//关注列表
                            num1++;
                        }
                        else if (item.nname == self.state.username) {//粉丝
                            lname.push(item.lname)//粉丝列表
                            num2++;
                        }
                    });
                    self.setState({
                        follows: num1,
                        fans: num2,
                        nnameList: nname,
                        lnameList: lname
                    })
                })
        })
    }

    componentDidUpdate() {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
    }
    componentWillUnmount() {
        this.listener.remove();
    }
    fanslist = () => {
        if (this.state.fans) {
            var value = { fansList: this.state.lnameList };
            AsyncStorage.setItem('fanslist', JSON.stringify(value));
            Actions.fanslist();
        }
        else {
            Alert.alert("还没有粉丝哦~")
        }
    }
    followslist = () => {
        if (this.state.follows) {
            var value = { followsList: this.state.nnameList };
            AsyncStorage.setItem('followslist', JSON.stringify(value));
            Actions.followslist();
        }
        else {
            Alert.alert("还没有关注哦~")
        }
    }
    outlogin = () => {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
                let url1 = `http://139.155.44.190:3005/users/exitLogin?name=${this.state.username}&islogin=${this.state.islogin}`;
                fetch(url1)
                    .then(res => res.json())
                    .then((res) => {
                        if (res.err) {
                        } else {
                            console.log('成功')
                        }
                    })
            });
        AsyncStorage.setItem('username', '');
        AsyncStorage.setItem('password', '');
        Actions.login();
    }
    tiezi = () => {
        var value = { id: this.state.new };
        AsyncStorage.setItem('new', JSON.stringify(value));
        console.log('aaa' + value);
        if (!this.state.newl) {
            var value = { id: '' }
            AsyncStorage.setItem('new', JSON.stringify(value));
        }
        for (var i = 0; i < this.state.new.length; i++) {
            var url11 = `http://139.155.44.190:3005/learn/change?newl=${false}&lid=${this.state.new[i]}`;
            console.log(url11);
            fetch(url11)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    this.setState({
                        newl: false,
                        // new:[]
                    });
                })
        }
        Actions.tiezi();
    }
    render() {
        return (
            <ScrollView>
                <View style={{ height: 250, width: '100%' }}>
                    <Image source={require('../../assets/gonglve2.png')} />
                </View>
                <View style={{ width: '100%', height: 600, backgroundColor: '#ffffff' }}>
                    <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: 100, height: 100, position: "absolute", top: -50, left: 30 }} onPress={() => Actions.touxiang()}>
                            <Image source={{ uri: this.state.pic }} style={{ width: 90 * s, height: 90 * s, borderRadius: 45 * s }} />
                            <Image style={{
                                height: 100 * s,
                                width: 100 * s,
                                borderRadius: 50 * s,
                                // backgroundColor:'green',
                                position: 'absolute',
                                top: -4 * s,
                                right: 7 * s
                            }}
                                source={{ uri: this.state.head }} />
                        </TouchableOpacity>
                        <Text style={{ position: "absolute", left: 150, fontSize: 18, top: -3 }}>
                            {this.state.username}&nbsp;&nbsp;&nbsp;
                            <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.level]} />
                            {/* <Text style={{ marginLeft: 20, fontSize: 15, color: "red" }}>Lv {this.state.level}</Text> */}
                        </Text>

                        {/* <TouchableOpacity onPress={() => Actions.card()} style={{ position: "absolute", left: 270, top: 1, backgroundColor: '#37376F', borderRadius: 5 }}>
                            <Text style={{ color: '#fff', fontSize: 15 }}>卡片背景</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Actions.head()} style={{ position: "absolute", left: 350, top: 1, backgroundColor: '#37376F', borderRadius: 5 }}>
                            <Text style={{ color: '#fff', fontSize: 15 }}>头像框选择</Text>
                        </TouchableOpacity> */}

                        <Text style={{ position: 'absolute', left: 150, top: 27, fontSize: 18 }}>河北师范大学{this.state.college}</Text>
                    </View>

                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}  >
                        <Icon name="star-o" size={30} color="#fed658" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => this.fanslist()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>我的粉丝</Text>
                            <Text style={{marginTop:13}}>{this.state.fans}</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}  >
                        <Icon name="star-o" size={30} color="#fed658" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => this.followslist()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>我的关注</Text>
                            <Text style={{marginTop:13}}>{this.state.follows}</Text>

                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}  >
                        <Icon name="star-o" size={30} color="#fed658" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.biji()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>我的笔记</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>

                    {
                        this.state.newl
                            ? <View style={{
                                height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                                borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                            }}>
                                <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                                <TouchableOpacity onPress={() => this.tiezi()} style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 20, marginLeft: 39, marginTop: 11 }} onPress={() => Actions.tiezi()}>我的帖子</Text>
                                    <View style={{ marginTop: 20, marginLeft: 170, width: 10, height: 10, borderRadius: 5, borderColor: '#000', backgroundColor: 'red' }}></View>
                                    <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 30, marginTop: 15 }} />
                                </TouchableOpacity>
                            </View>
                            : <View style={{
                                height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                                borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                            }}>
                                <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                                <TouchableOpacity onPress={() => this.tiezi()} style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 20, marginLeft: 39, marginTop: 11 }} onPress={() => Actions.tiezi()}>我的帖子</Text>
                                    <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 212, marginTop: 15 }} />
                                </TouchableOpacity>
                            </View>
                    }


                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="american-sign-language-interpreting" size={26} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.myexperence()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 34, marginTop: 11 }} onPress={() => Actions.myexperence()}>我的经验</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 212, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="group" size={25} color="#dd1402" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.tongxun()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }} onPress={() => Actions.tongxun()}>通讯录</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 235, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="smile-o" size={30} color="#256ade" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.guanyu()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }} >关于我们</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 215, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="user-o" size={30} color="#ca00dd" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.fankui()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }} onPress={() => Actions.fankui()}>用户反馈</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 215, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderBottomWidth: 1 }} >
                        <Icon name="cog" size={30} color="#6d6d6d" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.shezhi()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }} onPress={() => Actions.shezhi()}>设置</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 255, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity onPress={this.outlogin} style={{ height: '5%', width: '25%', marginLeft: '37.5%', marginTop: '2%', marginBottom: '3%', backgroundColor: 'red', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', marginTop: 10 }}>退出登录</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

