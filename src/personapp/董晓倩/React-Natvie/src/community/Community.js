import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, ImageBackground, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
import ActionButton from 'react-native-action-button';
import Img from './Img'

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Community extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            pic: [],
            like: [],
            lvlist: [],
            search: '',
            likeNum: [],
            comNum: [],
            username: '',
            isLoading: true,
            isTop: false,

        };
        this.getData();
    }
    getData = () => {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        var url1 = `http://139.155.44.190:3005/learn/list`;
        var url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/learntalk/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    pic: res,
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
                                        res.forEach(item => {
                                            for (var i = 0; i < this.state.pic.length; i++) {
                                                if (item.name == this.state.pic[i].name) {
                                                    item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                    item.level = this.state.pic[i].level;
                                                    item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                    item.college = this.state.pic[i].college;
                                                    break;
                                                }
                                            }
                                            item.card = 'http://139.155.44.190:3005/card/' + item.card;

                                            item.like = false;
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
                                            // item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                        });
                                        this.setState({ isLoading: false });
                                        this.setState({ list: res });
                                    });
                            });
                    });
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('refresh', function (param) {
            // var arr=self.state.list;
            // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
            // arr.splice(0,0,a);
            // self.setState({list:arr});
            // console.log(param);
            fetch(url3)
                .then((res) => res.json())
                .then((res) => {
                    self.setState({ pic: res });
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
                                            res.forEach(item => {
                                                for (var i = 0; i < self.state.pic.length; i++) {
                                                    if (item.name == self.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
                                                        item.level = self.state.pic[i].level;
                                                        item.head = 'http://139.155.44.190:3005/head/' + self.state.pic[i].head;
                                                        item.college = self.state.pic[i].college;
                                                        break;
                                                    }
                                                }
                                                item.card = 'http://139.155.44.190:3005/card/' + item.card;

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
                                                // item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                            });
                                            self.setState({ list: res });

                                        });
                                });
                        });
                });
        });
        // var self1 = this;
        // this.listener1 = DeviceEventEmitter.addListener('com', function (num){
        //     console.log(num);
        // })
    }

    componentWillUnmount() {
        this.listener.remove();
        // this.listener1.remove();
    }
    delete = (idx) => {
        Alert.alert('确认要删除吗', '',
            [
                { text: "确认", onPress: this.opntion1.bind(this, (this.state.list[idx].id)) },
                { text: "取消", onPress: this.opntion2 }
            ]
        );
    }
    opntion1 = (id) => {
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
                                DeviceEventEmitter.emit('refresh', param);
                            });
                    });
            });
    }
    opntion2 = () => {

    }
    details = (idx) => {
        var value = { page: this.state.list[idx] };
        AsyncStorage.setItem('lPage', JSON.stringify(value));
        Actions.learndetails();
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
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.list[idx].id}&name=${this.state.username}&lname=${this.state.list[idx].name}`;
            let url11 = `http://139.155.44.190:3005/learn/changeLike?lid=${this.state.list[idx].id}&likenum=${num}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    fetch(url11)
                        .then((res) => res.json())
                        .then((res) => {
                            console.log(url11);
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
        else if (this.state.list[idx].like == true) {
            crr = this.state.list;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.list[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url2);
                });
            console.log('aaa' + this.state.list[idx].likenum)//null
        }
    }
    change = (e) => {
        this.setState({
            search: e
        })
    }
    search = () => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        var url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/learntalk/list`;
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
                                this.setState({ comNum: res });
                                fetch(url)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        if (res.false) { }
                                        else {
                                            res.forEach(item => {
                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                    if (item.name == this.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                        item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;

                                                        break;
                                                    }
                                                }
                                                item.card = 'http://139.155.44.190:3005/card/' + item.card;

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
                                            });
                                            this.setState({ list: res });
                                        }
                                    });
                            });
                    });
            });
    }
    renovate = () => {
        var param = 1;
        DeviceEventEmitter.emit('refresh', param);
    }
    person = (idx) => {
        // var value = { name: this.state.list[idx].name, pic: this.state.list[idx].pic, level: this.state.list[idx].level, college: this.state.list[idx].college ,head: this.state.list[idx].head};
        // AsyncStorage.setItem('details', JSON.stringify(value));
        // console.log("详情values",value)
        var value = { name: this.state.list[idx].name, pic: this.state.list[idx].pic, level: this.state.list[idx].level, college: this.state.list[idx].college, head: this.state.list[idx].head };
        AsyncStorage.setItem('details', JSON.stringify(value));
        var value1 = { name: this.state.list[idx].name, pic: this.state.list[idx].pic, level: this.state.list[idx].level, title: "issue", head: this.state.list[idx].head };
        AsyncStorage.setItem('personname2', JSON.stringify(value1));
        var param = 1;
        DeviceEventEmitter.emit('ELrefresh', param);
        DeviceEventEmitter.emit('Erefresh', param);
        DeviceEventEmitter.emit('refresh', param);
        Actions.person();
    }
    add = () => {
        Actions.add()
    }
    onScroll(evt) {
        let y = evt.nativeEvent.contentOffset.y;
        console.log("距离", y)
        if (y >= 200 && y <= 260 && this.state.tabShow == false) {
            this.setState({
                tabShow: true,
            })
        }
        else if (y <= 200 && this.state.tabShow == true) {
            this.setState({
                tabShow: false,
            })
        }
        else if (y > 300) {
            this.setState({
                isTop: true
            })
        }
        else if (y <= 300) {
            this.setState({
                isTop: false
            })
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    width: '100%',
                    height: 55 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <Text style={{ color: '#fff', lineHeight: 55 * s, fontSize: 18 * s }}>社区</Text>
                    <Text onPress={() => this.add()} style={{ color: "#fff", fontSize: 30 * s, marginLeft: 20 * s }}>+</Text>
                </View>
                <View style={{
                    width: '100%',
                    height: 55 * s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 40 * s,
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        // borderRadius: 28 * s
                        borderBottomLeftRadius: 28 * s,
                        borderTopLeftRadius: 28 * s,
                        marginLeft: -55 * s,
                    }}>

                        <TextInput
                            style={{
                                height: 50 * s,
                                width: "80%",
                                padding: 0,
                                marginLeft: 20 * s,
                                fontSize: 15 * s,
                            }}
                            clearButtonMode="while-editing"
                            placeholderTextColor=''
                            placeholder="请输入搜索的关键字"
                            onChangeText={this.change}
                        />
                        <Button style={{ borderBottomRightRadius: 28 * s, borderTopRightRadius: 28 * s, height: 42 * s, }} onPress={this.search}>
                            搜索
                        </Button>
                        {/* <Icon
                            style={{
                                marginRight: 20 * s
                            }}
                            onPress={this.search}
                            color='' size={20} name='search' /> */}

                    </View>
                    {/* <Button style={{ height: 42 * s,backgroundColor:'#ffffff'}} onPress={this.search}>
                            搜索
                    </Button> */}
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 15 * s,
                        right: 30 * s,
                        marginLeft: 10 * s,
                        width: 30,
                        height: 30
                    }} onPress={this.renovate}>
                        <Icon
                            size={30}
                            name='refresh'
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    onScroll={(evt) => this.onScroll(evt)}
                    scrollEventThrottle={16}
                    ref={(r) => this.scrollview = r}
                    style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 10 * s }}>

                                    <View style={{
                                        flexDirection: 'row',
                                        height: 80 * s,
                                        alignItems: 'center'
                                    }}>
                                        {
                                            this.state.username == item.name
                                                ?
                                                <View>
                                                    <Image style={{
                                                        marginLeft: 20 * s,
                                                        height: 50 * s,
                                                        width: 50 * s,
                                                        borderRadius: 25 * s,
                                                        backgroundColor: 'yellow'
                                                    }} source={{ uri: item.pic }} />
                                                    <Image style={{
                                                        height: 70 * s,
                                                        width: 70 * s,
                                                        borderRadius: 35 * s,
                                                        // backgroundColor:'green',
                                                        position: 'absolute',
                                                        top: -10,
                                                        right: -10
                                                    }}
                                                        source={{ uri: item.head }} />
                                                </View>
                                                : <TouchableOpacity onPress={this.person.bind(this, (idx))}>
                                                    <Image style={{
                                                        marginLeft: 20 * s,
                                                        height: 50 * s,
                                                        width: 50 * s,
                                                        borderRadius: 25 * s,
                                                        backgroundColor: 'yellow'
                                                    }} source={{ uri: item.pic }} />
                                                    <Image style={{
                                                        height: 70 * s,
                                                        width: 70 * s,
                                                        borderRadius: 35 * s,
                                                        // backgroundColor:'green',
                                                        position: 'absolute',
                                                        top: -10,
                                                        right: -10
                                                    }}
                                                        source={{ uri: item.head }} />
                                                </TouchableOpacity>
                                        }

                                        <View style={{ marginLeft: 30 * s }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                                <Image style={{ height: 21 * s, width: 36 * s, marginLeft: 10 * s }} source={Img['png' + item.level]} />
                                                {/* <Text style={{ fontSize: 15 * s, marginLeft: 10 * s, color: 'red' }}>Lv.{item.level}</Text> */}
                                            </View>
                                            <Text>{item.time}</Text>
                                        </View>
                                        {/* </ImageBackground > */}
                                    </View>
                                    <View style={{
                                        marginLeft: 30 * s,
                                        marginRight: 30 * s,
                                        marginTop: 10 * s,
                                        marginBottom: 20 * s
                                    }}
                                    >
                                        <Text onPress={this.details.bind(this, (idx))} style={{ fontSize: 18 * s }}>{item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content}</Text>
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
                                    {
                                        this.state.username == item.name
                                            ? <TouchableOpacity style={{
                                                width: 30 * s,
                                                height: 30 * s,
                                                borderRadius: 15 * s,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                // backgroundColor: '#37376F',
                                                position: 'absolute',
                                                top: 5,
                                                right: 5
                                            }}
                                                onPress={this.delete.bind(this, (idx))}
                                            >
                                                <Text style={{ color: '#e8e8e8', fontSize: 30 * s }}>×</Text>
                                            </TouchableOpacity>
                                            : null
                                    }
                                    {/* {
                                        this.state.username
                                            ?  */}
                                    <View style={{
                                        width: 90 * s,
                                        height: 45 * s,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        // backgroundColor: '#37376F',
                                        position: 'absolute',
                                        top: 5,
                                        right: 30
                                    }}
                                    >
                                        <Image style={{
                                            // marginLeft: 20 * s,
                                            height: 45 * s,
                                            width: 90 * s,
                                            // borderRadius: 25 * s,
                                            // backgroundColor: 'yellow'
                                        }}
                                            source={{ uri: item.card }} />
                                    </View>
                                    {/* : null
                                    } */}

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
                {
                    this.state.istop ?
                        <View style={{ height100, width: width, backgroundColor: "red" }}></View>
                        : <View />
                }
                {
                    // <Image source={require('../../assets/community/icon.png')}/>
                    this.state.isTop === true ? <ActionButton
                        renderIcon={() => (<View style={{ height: 50 * s, width: 50 * s, backgroundColor: "#F8F8F8", borderRadius: 25 * s, justifyContent: "center", alignItems: "center" }}><Image style={{ height: 35 * s, width: 35 * s }} source={require('../../assets/community/icon.png')} /></View>)}
                        buttonColor="#FFFFFF"
                        position='right'
                        verticalOrientation='up'
                        size={34}
                        border='#1DA57A'
                        onPress={() => this.scrollview.scrollTo({ x: 0, y: 0, animated: true })}
                    /> : <View />
                }
                {/* <TouchableOpacity style={{
                    width: 60 * s,
                    height: 60 * s,
                    borderRadius: 30 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#37376F',
                    position: 'absolute',
                    bottom: 20 * s,
                    right: 20 * s
                }}
                    onPress={() => this.add()}
                >
                    <Icon style={{ fontSize: 50, color: '#fff' }} name="pencil" />
                </TouchableOpacity> */}
            </SafeAreaView >
        )
    }
}