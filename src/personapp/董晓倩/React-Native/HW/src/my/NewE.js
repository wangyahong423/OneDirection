import React, { Component } from 'react';
import Img from '../community/Img'
import { Text, View, ScrollView, Dimensions, SafeAreaView, Image, AsyncStorage, DeviceEventEmitter, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';

export default class NewE extends Component {
    constructor() {
        super();
        this.state = {
            pic: '',
            username: '',
            head: '',
            lv: '',
            isLoading: true,
            list: [],
            arr: [],
            experience: []
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        AsyncStorage.getItem('newexperience')
            .then((value) => {
                this.setState({
                    experience: JSON.parse(value).experience
                });
            });
        this.setState({ isLoading: true })
        var url1 = `http://139.155.44.190:3005/experience/list`;
        var url2 = `http://139.155.44.190:3005/experiencelike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/collect/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    arr: res
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
                                        var brr = [];
                                        for (var a = 0; a < this.state.experience.length; a++) {
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].id == this.state.experience[a]) {
                                                    for (var c = 0; c < this.state.arr.length; c++) {
                                                        if (res[i].name == this.state.arr[c].name) {
                                                            res[i].pic = 'http://139.155.44.190:3005' + this.state.arr[c].pic;
                                                            res[i].level = this.state.arr[c].level;
                                                            res[i].head = 'http://139.155.44.190:3005/head/' + this.state.arr[c].head;
                                                            res[i].college = this.state.arr[c].college;
                                                            break;
                                                        }
                                                    }
                                                    res[i].like = false;
                                                    for (var j = 0; j < this.state.like.length; j++) {
                                                        if (res[i].id == this.state.like[j].eid) {
                                                            res[i].like = true;
                                                            break;
                                                        }
                                                        else {
                                                            res[i].like = false;
                                                        }
                                                    }
                                                    var likeNum = 0;
                                                    for (var z = 0; z < this.state.likeNum.length; z++) {
                                                        if (res[i].id == this.state.likeNum[z].eid) {
                                                            likeNum++;
                                                        }
                                                    }
                                                    res[i].likeNum = likeNum;
                                                    res[i].collect = false;
                                                    for (var j = 0; j < this.state.collect.length; j++) {
                                                        if (res[i].id == this.state.collect[j].eid) {
                                                            res[i].collect = true;
                                                            break;
                                                        }
                                                        else {
                                                            res[i].collect = false;
                                                        }
                                                    }
                                                    var colNum = 0;
                                                    for (var z = 0; z < this.state.colNum.length; z++) {
                                                        if (res[i].id == this.state.colNum[z].eid) {
                                                            colNum++;
                                                        }
                                                    }
                                                    res[i].colNum = colNum;
                                                    brr.push(res[i])
                                                }
                                            }
                                        }
                                        this.setState({ isLoading: false });
                                        this.setState({ list: brr });
                                    });
                            });
                    });
            });

        var self = this;
        this.listener = DeviceEventEmitter.addListener('freshthree', function (param) {
            var url1 = `http://139.155.44.190:3005/experience/list`;
            var url2 = `http://139.155.44.190:3005/experiencelike/list`;
            let url3 = `http://139.155.44.190:3005/users/list`;
            let url4 = `http://139.155.44.190:3005/collect/list`;
            fetch(url3)
                .then((res) => res.json())
                .then((res) => {
                    self.setState({
                        arr: res
                    })
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
                                    self.setState({ colNum: res });
                                    var colList = [];
                                    for (var i = 0; i < res.length; i++) {
                                        if (res[i].name == self.state.username) {
                                            colList.push(res[i]);
                                        }
                                    }
                                    self.setState({ collect: colList });
                                    fetch(url1)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            var brr = [];
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].name == self.state.username) {
                                                    res[i].like = false;
                                                    for (var j = 0; j < self.state.like.length; j++) {
                                                        if (res[i].id == self.state.like[j].eid) {
                                                            res[i].like = true;
                                                            break;
                                                        }
                                                        else {
                                                            res[i].like = false;
                                                        }
                                                    }
                                                    var likeNum = 0;
                                                    for (var z = 0; z < self.state.likeNum.length; z++) {
                                                        if (res[i].id == self.state.likeNum[z].eid) {
                                                            likeNum++;
                                                        }
                                                    }
                                                    res[i].likeNum = likeNum;
                                                    res[i].collect = false;
                                                    for (var j = 0; j < self.state.collect.length; j++) {
                                                        if (res[i].id == self.state.collect[j].eid) {
                                                            res[i].collect = true;
                                                            break;
                                                        }
                                                        else {
                                                            res[i].collect = false;
                                                        }
                                                    }
                                                    var colNum = 0;
                                                    for (var z = 0; z < self.state.colNum.length; z++) {
                                                        if (res[i].id == self.state.colNum[z].eid) {
                                                            colNum++;
                                                        }
                                                    }
                                                    res[i].colNum = colNum;
                                                    brr.push(res[i])
                                                }
                                            }
                                            self.setState({ isLoading: false });
                                            self.setState({ list: brr });
                                        });
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
            var num = this.state.list[idx].likenum;
            if (num == null || num == 0) {
                num = 1;
            } else {
                num = num + 1;
            }
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.list[idx].id}&name=${this.state.username}&ename=${this.state.list[idx].name}`;
            let url11 = `http://139.155.44.190:3005/experience/changeLike?eid=${this.state.list[idx].id}&likenum=${num}`;
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
    collect = (idx) => {
        var crr = '';
        if (this.state.list[idx].collect == false) {
            crr = this.state.list;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                list: crr
            })
            var num = this.state.list[idx].cenum;
            if (num == null || num == 0) {
                num = 1;
            } else {
                num = num + 1;
            }
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            let url11 = `http://139.155.44.190:3005/experience/change?eid=${this.state.list[idx].id}&cnum=${num}`;
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
    back = () => {
        for (var j = 0; j < this.state.list.length; j++) {
            let url = `http://139.155.44.190:3005/experience/changeLike?eid=${this.state.list[j].id}&likenum=0`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                })
            let url1 = `http://139.155.44.190:3005/experience/change?eid=${this.state.list[j].id}&cnum=0`;
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
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 10 * s }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        height: 80 * s,
                                        alignItems: 'center'
                                    }}>
                                        <View>
                                            <Image style={{
                                                marginLeft: 20 * s,
                                                height: 50 * s,
                                                width: 50 * s,
                                                borderRadius: 25 * s,
                                            }} source={{ uri: item.pic }} />
                                            <Image style={{
                                                height: 60 * s,
                                                width: 60 * s,
                                                borderRadius: 35 * s,
                                                position: 'absolute',
                                                top: -5,
                                                right: -5
                                            }}
                                                source={{ uri: item.head }} />
                                        </View>
                                        <View style={{ marginLeft: 30 * s }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                                <Image style={{ height: 21 * s, width: 36 * s, marginLeft: 10 * s }} source={Img['png' + item.level]} />
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
                                        <Text style={{ fontSize: 18 * s }}>{item.content}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 40 * s, alignItems: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon name="star" onPress={this.collect.bind(this, (idx))} style={item.collect ? { color: 'yellow', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                            <Text>{item.colNum}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon onPress={this.like.bind(this, (idx))} name="heart" style={item.like ? { color: 'red', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                            <Text>{item.likeNum}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: 100 * s,
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
