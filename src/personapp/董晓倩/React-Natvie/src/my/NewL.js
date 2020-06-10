import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Img from '../community/Img'
import Icon from 'react-native-vector-icons/EvilIcons';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class NewL extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            userarr: [],
            color: [],
            yonghu: [],
            pic: '',
            username: '',
            head: '',
            lv: '',
            new: [],
            like: [],
            likeNum: [],
            comNum: [],
            lvlist: [],
            isLoading: true,
            learn: []
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        AsyncStorage.getItem('newlearn')
            .then((value) => {
                this.setState({
                    learn: JSON.parse(value).learn
                });
            });
        AsyncStorage.getItem('username')
            .then(res => {
                let user = { username: res }
                this.setState({
                    username: user.username
                })
                var url1 = `http://139.155.44.190:3005/learn/list`;
                var url2 = `http://139.155.44.190:3005/learnlike/list`;
                let url3 = `http://139.155.44.190:3005/users/list`;
                let url4 = `http://139.155.44.190:3005/learntalk/list`;
                fetch(url3)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({
                            arr: res
                        })
                        var urr = [];
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
                                        this.setState({ comNum: res });
                                        fetch(url1)
                                            .then((res) => res.json())
                                            .then((res) => {
                                                var brr = [];
                                                for (var a = 0; a < this.state.learn.length; a++) {
                                                    for (var b = 0; b < res.length; b++) {
                                                        if (res[b].id == this.state.learn[a]) {
                                                            for (var c = 0; c < this.state.arr.length; c++) {
                                                                if (res[b].name == this.state.arr[c].name) {
                                                                    res[b].pic = 'http://139.155.44.190:3005' + this.state.arr[c].pic;
                                                                    res[b].level = this.state.arr[c].level;
                                                                    res[b].head = 'http://139.155.44.190:3005/head/' + this.state.arr[c].head;
                                                                    res[b].college = this.state.arr[c].college;
                                                                    break;
                                                                }
                                                            }
                                                            res[b].like = false;
                                                            for (var j = 0; j < this.state.like.length; j++) {
                                                                if (res[b].id == this.state.like[j].lid) {
                                                                    res[b].like = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    res[b].like = false;
                                                                }
                                                            }
                                                            var likeNum = 0;
                                                            for (var z = 0; z < this.state.likeNum.length; z++) {
                                                                if (res[b].id == this.state.likeNum[z].lid) {
                                                                    likeNum++;
                                                                }
                                                            }
                                                            res[b].likeNum = likeNum;
                                                            var comNum = 0;
                                                            for (var z = 0; z < this.state.comNum.length; z++) {
                                                                if (res[b].id == this.state.comNum[z].lid) {
                                                                    comNum++;
                                                                }
                                                            }
                                                            res[b].comNum = comNum;
                                                            brr.push(res[b]);
                                                            break;
                                                        }

                                                    }
                                                }
                                                this.setState({ isLoading: false });
                                                this.setState({ data: brr });
                                            });
                                    });
                            });
                    })
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('NLrefresh', function (param) {
            AsyncStorage.getItem('username')
                .then(res => {
                    let user = { username: res }
                    self.setState({
                        username: user.username
                    })
                    var url1 = `http://139.155.44.190:3005/learn/list`;
                    var url2 = `http://139.155.44.190:3005/learnlike/list`;
                    let url3 = `http://139.155.44.190:3005/users/list`;
                    let url4 = `http://139.155.44.190:3005/learntalk/list`;
                    fetch(url3)
                        .then(res => res.json())
                        .then((res) => {
                            self.setState({
                                arr: res
                            })
                            var urr = [];
                            fetch(url2)
                                .then((res) => res.json())
                                .then((res) => {
                                    self.setState({ likeNum: res });
                                    var likeList = [];
                                    for (var i = 0; i < res.length; i++) {
                                        if (res[i].name == self.state.username) {
                                            likeList.push(res[i]);
                                        }
                                    }
                                    self.setState({ like: likeList });
                                    fetch(url4)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            self.setState({ comNum: res });
                                            fetch(url1)
                                                .then((res) => res.json())
                                                .then((res) => {
                                                    var brr = [];
                                                    for (var a = 0; a < self.state.learn.length; a++) {
                                                        for (var b = 0; b < res.length; b++) {
                                                            if (res[b].id == self.state.learn[a]) {
                                                                for (var c = 0; c < self.state.arr.length; c++) {
                                                                    if (res[b].name == self.state.arr[c].name) {
                                                                        res[b].pic = 'http://139.155.44.190:3005' + self.state.arr[c].pic;
                                                                        res[b].level = self.state.arr[c].level;
                                                                        res[b].head = 'http://139.155.44.190:3005/head/' + self.state.arr[c].head;
                                                                        res[b].college = self.state.arr[c].college;
                                                                        break;
                                                                    }
                                                                }
                                                                res[b].like = false;
                                                                for (var j = 0; j < self.state.like.length; j++) {
                                                                    if (res[b].id == self.state.like[j].lid) {
                                                                        res[b].like = true;
                                                                        break;
                                                                    }
                                                                    else {
                                                                        res[b].like = false;
                                                                    }
                                                                }
                                                                var likeNum = 0;
                                                                for (var z = 0; z < self.state.likeNum.length; z++) {
                                                                    if (res[b].id == self.state.likeNum[z].lid) {
                                                                        likeNum++;
                                                                    }
                                                                }
                                                                res[b].likeNum = likeNum;
                                                                var comNum = 0;
                                                                for (var z = 0; z < self.state.comNum.length; z++) {
                                                                    if (res[b].id == self.state.comNum[z].lid) {
                                                                        comNum++;
                                                                    }
                                                                }
                                                                res[b].comNum = comNum;
                                                                brr.push(res[b]);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    self.setState({ isLoading: false });
                                                    self.setState({ data: brr });
                                                });
                                        });
                                });
                        })
                });
        });

    }
    componentWillUnmount() {
        this.listener.remove();
    }
    details = (idx) => {
        var value = { page: this.state.data[idx] };
        AsyncStorage.setItem('lPage', JSON.stringify(value));
        Actions.learndetails();
    }

    like = (idx) => {
        var crr = '';
        if (this.state.data[idx].like == false) {
            crr = this.state.data;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                data: crr
            })
            var num = this.state.data[idx].likenum;
            if (num == null || num == 0) {
                num = 1;
            } else {
                num = num + 1;
            }
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.data[idx].id}&name=${this.state.username}&lname=${this.state.data[idx].name}`;
            let url11 = `http://139.155.44.190:3005/learn/changeLike?lid=${this.state.data[idx].id}&likenum=${num}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    fetch(url11)
                        .then((res) => res.json())
                        .then((res) => {
                            var param = 1;
                            DeviceEventEmitter.emit('Mrefresh', param);
                        });
                });
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
                                Alert.alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 30) {
                                Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 45) {
                                Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 60) {
                                Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 75) {
                                Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 90) {
                                Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 105) {
                                Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 120) {
                                Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 135) {
                                Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                            }
                        }
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
            let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.data[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                });
        }
    }
    back = () => {
        Actions.pop()
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >

                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {this.state.data.map((item, idx) =>
                            <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 20 * s }}>
                                <View style={{
                                    flexDirection: 'row',
                                    height: 80 * s,
                                    alignItems: 'center'
                                }}>
                                    <Image style={{
                                        marginLeft: 20 * s,
                                        height: 50 * s,
                                        width: 50 * s,
                                        borderRadius: 25 * s,
                                    }} source={{ uri: item.pic }} />
                                    <Image style={{
                                        height: 70 * s,
                                        width: 70 * s,
                                        borderRadius: 35 * s,
                                        position: 'absolute',
                                        top: 5,
                                        left: 8
                                    }}
                                        source={{ uri: item.head }} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                                <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + item.level]} />
                                            </View>
                                        </View>
                                        <Text>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 30 * s,
                                    marginRight: 30 * s,
                                    marginTop: 10 * s,
                                    marginBottom: 20 * s
                                }}
                                >
                                    <Text style={{ fontSize: 18 * s }} onPress={this.details.bind(this, (idx))}>{item.content}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', height: 40 * s, alignItems: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon onPress={this.details.bind(this, (idx))} name="comment" style={{ fontSize: 30 * s }}></Icon>
                                        <Text>{item.comNum}</Text>
                                    </View>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name="heart" onPress={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                        <Text>{item.likeNum}</Text>
                                    </View>
                                </View>

                            </View>
                        )}
                    </View>
                </ScrollView>
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: 80 * s,
                                width: '100%'
                            }}>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 40 * s,
                        borderRadius: 15 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                        margin: 10 * s
                    }}
                        onPress={() => this.back()}
                    >
                        <Text style={{ color: '#e8e8e8', fontSize: 20 * s }}>返回</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        )
    }
}
