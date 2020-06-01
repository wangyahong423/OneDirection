import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, ScrollView, TouchableOpacity, DeviceEventEmitter, Dimensions, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
            // newl: false,
            new: [],
            fans: 0,
            follows: 0,
            likenum: 0,
            like: []

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
                var cnum = 0;
                var likenum = 0;
                var like = [];
                for (var i = 0; i < res.length; i++) {
                    if (res[i].name == this.state.username) {
                        likenum = likenum + res[i].likenum;
                        cnum = cnum + res[i].cnum;
                        if (res[i].likenum) {
                            like.push(res[i].id);
                        }
                        if (res[i].cnum) {
                            arr.push(res[i].id);
                        }
                    }
                }
                // console.log("arr:"+arr);
                this.setState({
                    new: arr,
                    cnum: cnum,
                    likenum: likenum,
                    like: like
                });
                // console.log(this.state.likenum);
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
                                        console.log("level" + this.state.level)
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
        this.listener = DeviceEventEmitter.addListener('Mrefresh', function (param) {
            let url2 = `http://139.155.44.190:3005/users/list`;
            let url11 = `http://139.155.44.190:3005/learn/list`;
            fetch(url11)
                .then((res) => res.json())
                .then((res) => {
                    var arr = [];
                    var cnum = 0;
                    var likenum = 0;
                    var like = [];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].name == self.state.username) {
                            likenum = likenum + res[i].likenum;
                            cnum = cnum + res[i].cnum;
                            if (res[i].likenum) {
                                like.push(res[i].id);
                            }
                            if (res[i].cnum) {
                                arr.push(res[i].id);
                            }
                        }
                    }
                    // console.log("arr:"+arr);
                    self.setState({
                        new: arr,
                        cnum: cnum,
                        likenum: likenum,
                        like: like
                    });
                    // console.log(this.state.likenum);
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
                            console.log("点击头像", self.state.pic)
                            var num = Math.floor(self.state.lvnum / 15);
                            // console.log("输出num", num)
                            let url3 = `http://139.155.44.190:3005/users/list`;
                            fetch(url3)
                                .then(res => res.json())
                                .then((res) => {
                                    self.setState({
                                        lvlist: res
                                    })
                                    self.state.lvlist.map((item) => {
                                        if (item.name == self.state.username) {
                                            if (num < 10) {
                                                self.setState({
                                                    level: num + 1
                                                })
                                            }
                                            else {
                                                self.setState({
                                                    level: 10
                                                })
                                            }
                                            console.log("level" + self.state.level)
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
        // var value = { id: this.state.new };
        // AsyncStorage.setItem('new', JSON.stringify(value));
        // console.log('aaa' + value);
        // if (!this.state.newl) {
        //     var value = { id: '' }
        //     AsyncStorage.setItem('new', JSON.stringify(value));
        // }
        // for (var i = 0; i < this.state.new.length; i++) {
        //     var url11 = `http://139.155.44.190:3005/learn/change?newl=${false}&lid=${this.state.new[i]}`;
        //     console.log(url11);
        //     fetch(url11)
        //         .then((res) => res.json())
        //         .then((res) => {
        //             console.log(res);
        //             this.setState({
        //                 newl: false,
        //                 // new:[]
        //             });
        //         })
        // }
        Actions.tiezi();
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <ImageBackground style={{ height: 300, width: '100%', alignItems: "center" }} source={require('../../assets/community/img13.png')} >
                    <View style={{ height: 50 * s, width: width, flexDirection: "row", justifyContent: "space-between", paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
                        <TouchableOpacity onPress={() => Actions.shezhi()} style={{ height: 50 * s, width: 50 * s, justifyContent: "center", alignItems: "center", }}>
                            <Icon style={{ color: "#fff", fontSize: 25 * s, }} name="settings-outline" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={{ height: 50 * s, width: 50 * s, justifyContent: "center", alignItems: "center" }}>
                            <Icon style={{ color: "#fff", fontSize: 25 * s, }} name="bell-outline" />
                            {
                                this.state.cnum + this.state.likenum ?
                                    <View style={{ position: "absolute", top: 10, left: 30, width: 20, height: 20, borderRadius: 10, borderColor: '#000', backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15, color: '#fff' }}>{this.state.likenum + this.state.cnum}</Text>
                                    </View>
                                    :null
                            }
                        </TouchableOpacity> */}
                    </View>
                    <TouchableOpacity style={{ width: 100, height: 100 }} onPress={() => Actions.touxiang()}>
                        <Image source={{ uri: this.state.pic }} style={{ width: 90 * s, height: 90 * s, borderRadius: 45 * s }} />
                        <Image style={{
                            height: 100 * s,
                            width: 100 * s,
                            borderRadius: 50 * s,
                            position: 'absolute',
                            top: -7 * s,
                            right: 8 * s
                        }}
                            source={{ uri: this.state.head }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 15 * s, color: "#fff", marginTop: 10 * s }}>
                        {this.state.username}&nbsp;&nbsp;&nbsp;
                            <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.level]} />
                    </Text>
                    <Text style={{ fontSize: 15 * s, color: "#fff", marginTop: 5 * s }}>河北师范大学{this.state.college}</Text>
                    <View style={{ flexDirection: 'row', height: 50 * s, width: width * 0.4, marginTop: 10 * s, justifyContent: "space-around", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => this.fanslist()} style={{ height: 50 * s, width: 50 * s, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#fff" }}>关注</Text>
                            <Text style={{ color: "#fff" }}>{this.state.follows}</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.fanslist()} style={{ height: 50 * s, width: 50 * s, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "#fff" }}>粉丝</Text>
                            <Text style={{ color: "#fff" }}>{this.state.fans}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View >
                    <View style={{
                        height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,
                    }}  >
                        <TouchableOpacity onPress={() => Actions.biji()} style={{ flexDirection: 'row', alignItems: "center" }}>

                            <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                <Icon name="feather" size={30} color="#fed658" />
                            </View>
                            <View style={{ height: 50, width: width * 0.7, }}>
                                <Text style={{ fontSize: 20, marginTop: 11 }}>我的笔记</Text>
                            </View>
                            <Icon name="chevron-right" size={25} color="#aaa" />
                        </TouchableOpacity>
                    </View>

                    {
                        this.state.cnum + this.state.likenum
                            ?
                            <View style={{
                                height: 60, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                                borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                            }}>
                                <TouchableOpacity onPress={() => this.tiezi()} style={{ flexDirection: 'row', alignItems: "center" }}>

                                    <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                        <Icon name="file-document-edit-outline" size={30} color="#5f6fcd" />
                                    </View>
                                    <View style={{ height: 50, width: width * 0.633 ,flexDirection: 'row'}}>
                                        <Text style={{ fontSize: 20, marginTop: 11 }} onPress={() => Actions.tiezi()}>我的帖子</Text>
                                        <View style={{ marginTop: 15, marginLeft: 10, width: 20, height: 20, borderRadius: 10, borderColor: '#000', backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 15, color: '#fff' }}>{this.state.likenum + this.state.cnum}</Text>
                                        </View>
                                    </View>
                                    <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 30, marginTop: 0 }} />
                                </TouchableOpacity>
                            </View>
                            : <View style={{
                                height: 60, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                                borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                            }}>
                                <TouchableOpacity onPress={() => this.tiezi()} style={{ flexDirection: 'row', alignItems: "center" }}>

                                    <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                        <Icon name="file-document-edit-outline" size={30} color="#FF999A" />
                                    </View>
                                    <View style={{ height: 50, width: width * 0.7, }}>
                                        <Text style={{ fontSize: 20, marginTop: 11 }} onPress={() => Actions.tiezi()}>我的帖子</Text>

                                    </View>
                                    <Icon name="chevron-right" size={20} color="#aaa" />
                                </TouchableOpacity>
                            </View>
                    }

                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <TouchableOpacity onPress={() => Actions.myexperence()} style={{ flexDirection: 'row', alignItems: "center" }}>

                            <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                <Icon name="lightbulb-on-outline" size={26} color="#5f6fcd" />
                            </View>
                            <View style={{ height: 50, width: width * 0.7 }}>
                                <Text style={{ fontSize: 20, marginTop: 11 }}>我的经验</Text>

                            </View>
                            <Icon name="chevron-right" size={20} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <TouchableOpacity onPress={() => Actions.tongxun()} style={{ flexDirection: 'row', alignItems: "center" }}>

                            <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                <Icon name="phone-in-talk" size={25} color="#dd1402" />

                            </View>
                            <View style={{ height: 50, width: width * 0.7 }}>
                                <Text style={{ fontSize: 20, marginTop: 11 }} >通讯录</Text>

                            </View>
                            <Icon name="chevron-right" size={20} color="#aaa" />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <TouchableOpacity onPress={() => Actions.head()} style={{ flexDirection: 'row', alignItems: "center" }}>

                            <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                <Icon name="hexagram-outline" size={30} color="#ca00dd" />

                            </View>
                            <View style={{ height: 50, width: width * 0.7 }}>
                                <Text style={{ fontSize: 20, marginTop: 11 }} >头像框</Text>

                            </View>
                            <Icon name="chevron-right" size={20} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <TouchableOpacity onPress={() => Actions.card()} style={{ flexDirection: 'row', alignItems: "center" }}>

                            <View style={{ height: 50, width: 80, justifyContent: "center", alignItems: "center" }}>
                                <Icon name="image" size={30} color="#9ACC99" />

                            </View>
                            <View style={{ height: 50, width: width * 0.7 }}>
                                <Text style={{ fontSize: 20, marginTop: 11 }} onPress={() => Actions.card()}>卡片</Text>

                            </View>
                            <Icon name="chevron-right" size={20} color="#aaa" />
                        </TouchableOpacity>
                    </View>

                </View>
                {/* <TouchableOpacity onPress={this.outlogin} style={{ height: '5%', width: '25%', marginLeft: '37.5%', marginTop: '2%', marginBottom: '3%', backgroundColor: 'red', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', marginTop: 10 }}>退出登录</Text>
                </TouchableOpacity> */}
            </ScrollView>
        )
    }
}

