import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Img from '../community/Img'
import Icon from 'react-native-vector-icons/EvilIcons';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Xuexidongtai extends Component {
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
            isLoading: true
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true })
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
                        this.state.arr.map((item) => {
                            if (item.name == this.state.username) {
                                this.setState({
                                    pic: 'http://139.155.44.190:3005' + item.pic,
                                    head: 'http://139.155.44.190:3005/head/' + item.head,
                                    lv: item.level
                                })
                            }
                        })
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
                                                res.forEach(item => {
                                                    if (item.name == this.state.username) {
                                                        item.like = false;
                                                        item.level=this.state.lv;
                                                        for (var j = 0; j < this.state.like.length; j++) {
                                                            if (item.id == this.state.like[j].lid) {
                                                                item.like = true;
                                                                break;
                                                            }
                                                            else {
                                                                item.like = false;
                                                            }
                                                        }
                                                        var likeNum = 0;
                                                        for (var z = 0; z < this.state.likeNum.length; z++) {
                                                            if (item.id == this.state.likeNum[z].lid) {
                                                                likeNum++;
                                                            }
                                                        }
                                                        item.likeNum = likeNum;
                                                        var comNum = 0;
                                                        for (var z = 0; z < this.state.comNum.length; z++) {
                                                            if (item.id == this.state.comNum[z].lid) {
                                                                comNum++;
                                                            }
                                                        }
                                                        item.comNum = comNum;
                                                        brr.push(item);
                                                        // item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                                    }
                                                });
                                                this.setState({ isLoading: false });
                                                this.setState({ data: brr });
                                            });
                                    });
                            });
                    })
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('freshthree', function (param) {
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
                            self.state.arr.map((item) => {
                                if (item.name == self.state.username) {
                                    self.setState({
                                        pic: 'http://139.155.44.190:3005' + item.pic,
                                        head: 'http://139.155.44.190:3005/head/' + item.head,
                                        lv: item.level
                                    })
                                }
                            })
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
                                                    res.forEach(item => {
                                                        if (item.name == self.state.username) {
                                                            item.like = false;
                                                            for (var j = 0; j < self.state.like.length; j++) {
                                                                if (item.id == self.state.like[j].lid) {
                                                                    item.like = true;
                                                                    break;
                                                                }
                                                                else {
                                                                    item.like = false;
                                                                }
                                                            }
                                                            var likeNum = 0;
                                                            for (var z = 0; z < self.state.likeNum.length; z++) {
                                                                if (item.id == self.state.likeNum[z].lid) {
                                                                    likeNum++;
                                                                }
                                                            }
                                                            item.likeNum = likeNum;
                                                            var comNum = 0;
                                                            for (var z = 0; z < self.state.comNum.length; z++) {
                                                                if (item.id == self.state.comNum[z].lid) {
                                                                    comNum++;
                                                                }
                                                            }
                                                            item.comNum = comNum;
                                                            brr.push(item);
                                                            // item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                                        }
                                                    });
                                                    self.setState({ data: brr });
                                                });
                                        });
                                });
                        })
                });
        });

    }

    delTie = (id) => {
        let url = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`;
        let url1 = `http://139.155.44.190:3005/learntalk/deleteAll?lid=${id}`;
        let url2 = `http://139.155.44.190:3005/learnlike/deleteAll?lid=${id}`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                                Alert.alert(res.msg);
                                var param = 1;
                                DeviceEventEmitter.emit('freshthree', param);
                            });
                    });
            });
    }

    details = (idx) => {
        var value = { page: this.state.data[idx] };
        // console.log('sss' + this.state.data[idx].lv);
        var arr = this.state.data;
        arr[idx].new = false;
        this.setState({
            data: arr
        })
        AsyncStorage.setItem('mPage', JSON.stringify(value));
        // var value2={lv:this.state.lv}
        // AsyncStorage.setItem('lv', JSON.stringify(value2));

        // AsyncStorage.getItem('mPage')
        //     .then((value) => {
        //     })
        Actions.xiangqing();
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
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.data[idx].id}&name=${this.state.username}&lname=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url1);
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
                    console.log(url2);
                });
        }
    }
    likenum = (idx) => {
        let url1 = `http://139.155.44.190:3005/learn/changeLike?lid=${this.state.data[idx].id}&likenum=0`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                console.log(url1);
            });
        var arr = this.state.data;
        arr[idx].likenum = 0;
        this.setState({
            data: arr
        })
    }
    cnum = (idx) => {
        let url1 = `http://139.155.44.190:3005/learn/change?lid=${this.state.data[idx].id}&cnum=0`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                console.log(url1);
            });
        var arr = this.state.data;
        arr[idx].cnum = 0;
        this.setState({
            data: arr
        })
    }
    back = () => {
        for (var j = 0; j < this.state.data.length; j++) {
            let url = `http://139.155.44.190:3005/learn/changeLike?lid=${this.state.data[j].id}&likenum=0`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                })
            let url1 = `http://139.155.44.190:3005/learn/change?lid=${this.state.data[j].id}&cnum=0`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                })
        }
        Actions.pop()
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
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
                                        backgroundColor: 'yellow'
                                    }} source={{ uri: this.state.pic }} />
                                    <Image style={{
                                        height: 70 * s,
                                        width: 70 * s,
                                        borderRadius: 35 * s,
                                        // backgroundColor:'green',
                                        position: 'absolute',
                                        top: 5,
                                        left: 8
                                    }}
                                        source={{ uri: this.state.head }} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                                <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.lv]} />

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
                                        {
                                            item.cnum == null || item.cnum == 0
                                                ? null
                                                : <TouchableOpacity onPress={this.cnum.bind(this, (idx))} style={{ marginTop: 0, marginLeft: 10, width: 20, height: 20, borderRadius: 10, borderColor: '#000', backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 10, color: '#fff' }}>+{item.cnum}</Text>
                                                </TouchableOpacity>
                                        }
                                    </View>
                                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name="heart" onPress={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                        <Text>{item.likeNum}</Text>
                                        {
                                            item.likenum == null || item.likenum == 0
                                                ? null
                                                : <TouchableOpacity onPress={this.likenum.bind(this, (idx))} style={{ marginTop: 0, marginLeft: 10, width: 20, height: 20, borderRadius: 10, borderColor: '#000', backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: 10, color: '#fff' }}>+{item.likenum}</Text>
                                                </TouchableOpacity>
                                        }
                                    </View>
                                </View>
                                <View style={{ position: 'absolute', top: 10, left: 430 }}>
                                    <Text style={{ color: 'red', fontSize: 20 }} onPress={this.delTie.bind(this, (item.id))}>×</Text>
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
                        // position: 'absolute',
                        // top: 0,
                        // right: 0
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
