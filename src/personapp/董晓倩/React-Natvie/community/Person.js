import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, StatusBar, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter, ShadowPropTypesIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
import ActionButton from 'react-native-action-button';
import PerExp from './PerExp';
import PerLearn from './PerLearn'
import Img from './Img'
const { width, height } = Dimensions.get('window');
const s = width / 460;
const width01 = width * 0.1;
const width02 = width * 0.2;
const width06 = width * 0.6;
const width08 = 200;
const width09 = 260;
const widthimg = 250;
export default class Person extends Component {
    constructor(props) {
        super(props);
        this.flag = true;
        this.state = {
            all: '',
            learn: 0,
            exp: 0,
            follows: 0,
            fans: 0,
            Elike: 0,
            Llike: 0,
            list: [],
            follow: [],
            lnameList: [],
            nnameList: [],
            opcityNumber: 1,
            fol: false,
            opcityNumber: 1,
            tabShow: false,
            tabShowOpactiy: 1,
            tabHeight: 50,
            PLLike: 0,
            PELike: 0,
            myexp: false,
            mylearn: true,
            personlearn: false,
            personexp: false,
            mycollect: false,
            collectIcon: false,//搜索的按钮
            style: '我的社区',
            isTop: false,
        };
        this.getData();
    }
    static navigationOptions = {
        header: null,
    };
    getData = () => {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        AsyncStorage.getItem('details')
            .then((res) => {
                this.setState({
                    all: JSON.parse(res)
                })
            });
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/learn/list`;
        let url2 = `http://139.155.44.190:3005/experience/list`;
        let url3 = `http://139.155.44.190:3005/experiencelike/list`;
        let url4 = `http://139.155.44.190:3005/learnlike/list`;
        let url5 = `http://139.155.44.190:3005/follow/list`;
        let url6 = `http://139.155.44.190:3005/collect/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                var num = 0;
                res.forEach(item => {
                    if (item.name == this.state.all.name) {
                        num++;
                    }
                });
                this.setState({
                    learn: num
                });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        var num = 0;
                        res.forEach(item => {
                            if (item.name == this.state.all.name) {
                                num++;
                            }
                        });
                        this.setState({
                            exp: num
                        });
                        fetch(url3)
                            .then((res) => res.json())
                            .then((res) => {
                                var num = 0;
                                res.forEach(item => {
                                    if (item.ename == this.state.all.name) {
                                        num++;
                                    }
                                });
                                this.setState({
                                    Elike: num
                                });
                                var num3 = 0;
                                res.forEach(item => {
                                    if (item.name == this.state.all.name) {
                                        num3++;
                                    }
                                });
                                this.setState({
                                    PELike: num3
                                });
                                fetch(url4)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        var num1 = 0;
                                        res.forEach(item => {
                                            if (item.lname == this.state.all.name) {
                                                num1++;
                                            }
                                        });
                                        this.setState({
                                            Llike: num1
                                        });
                                        var num4 = 0;
                                        res.forEach(item => {
                                            if (item.name == this.state.all.name) {
                                                num4++;
                                            }
                                        });
                                        this.setState({
                                            PLLike: num4
                                        });
                                        fetch(url6)
                                            .then((res) => res.json())
                                            .then((res) => {
                                                var num2 = 0;
                                                res.forEach(item => {
                                                    if (item.name == this.state.all.name) {
                                                        num2++;
                                                    }
                                                });
                                                this.setState({
                                                    collect: num2
                                                });
                                            })
                                    })
                            })
                    })
            })
        fetch(url5)
            .then((res) => res.json())
            .then((res) => {
                var followList = [];
                for (var i = 0; i < res.length; i++) {
                    if (res[i].lname == this.state.username) {
                        followList.push(res[i]);
                    }
                }
                this.setState({ follow: followList })
                for (var i = 0; i < this.state.follow.length; i++) {
                    if (this.state.all.name == this.state.follow[i].nname) {
                        this.setState({
                            fol: true
                        })
                        break;
                    }
                    else {
                        this.setState({
                            fol: false
                        })
                    }
                }
            })
        fetch(url5)
            .then((res) => res.json())
            .then((res) => {
                var num1 = 0;
                var num2 = 0
                var nname = [];
                var lname = []
                res.forEach(item => {
                    if (item.lname == this.state.all.name) {//关注
                        nname.push(item.nname)//关注列表
                        num1++;
                    }
                    else if (item.nname == this.state.all.name) {//粉丝
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
        this.listener = DeviceEventEmitter.addListener('Prefresh', function (param) {
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    var num = 0;
                    res.forEach(item => {
                        if (item.name == self.state.all.name) {
                            num++;
                        }
                    });
                    self.setState({
                        learn: num
                    });
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            var num = 0;
                            res.forEach(item => {
                                if (item.name == self.state.all.name) {
                                    num++;
                                }
                            });
                            self.setState({
                                exp: num
                            });
                            fetch(url3)
                                .then((res) => res.json())
                                .then((res) => {
                                    var num = 0;
                                    res.forEach(item => {
                                        if (item.ename == self.state.all.name) {
                                            num++;
                                        }
                                    });
                                    self.setState({
                                        Elike: num
                                    });
                                    var num3 = 0;
                                    res.forEach(item => {
                                        if (item.name == self.state.all.name) {
                                            num3++;
                                        }
                                    });
                                    self.setState({
                                        PELike: num3
                                    });
                                    fetch(url4)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            var num1 = 0;
                                            res.forEach(item => {
                                                if (item.lname == self.state.all.name) {
                                                    num1++;
                                                }
                                            });
                                            self.setState({
                                                Llike: num1
                                            });
                                            var num4 = 0;
                                            res.forEach(item => {
                                                if (item.name == self.state.all.name) {
                                                    num4++;
                                                }
                                            });
                                            self.setState({
                                                PLLike: num4
                                            });
                                            fetch(url6)
                                                .then((res) => res.json())
                                                .then((res) => {
                                                    var num2 = 0;
                                                    res.forEach(item => {
                                                        if (item.name == self.state.all.name) {
                                                            num2++;
                                                        }
                                                    });
                                                    self.setState({
                                                        collect: num2
                                                    });
                                                })
                                        })
                                })
                        })
                })
            fetch(url5)
                .then((res) => res.json())
                .then((res) => {
                    var followList = [];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].lname == self.state.username) {
                            followList.push(res[i]);
                        }
                    }
                    self.setState({ follow: followList })
                    for (var i = 0; i < self.state.follow.length; i++) {
                        if (self.state.all.name == self.state.follow[i].nname) {
                            self.setState({
                                fol: true
                            })
                            break;
                        }
                        else {
                            self.setState({
                                fol: false
                            })
                        }
                    }
                })
            fetch(url5)
                .then((res) => res.json())
                .then((res) => {
                    var num1 = 0;
                    var num2 = 0
                    var nname = [];
                    var lname = []
                    res.forEach(item => {
                        if (item.lname == self.state.all.name) {//关注
                            nname.push(item.nname)//关注列表
                            num1++;
                        }
                        else if (item.nname == self.state.all.name) {//粉丝
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
        });
    }
    componentWillUnmount() {
        this.listener.remove();
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('ELrefresh', param);
        DeviceEventEmitter.emit('Erefresh', param);
        DeviceEventEmitter.emit('refresh', param);
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
    follow = () => {
        if (this.state.fol == false) {
            this.setState({
                fol: true
            })
            let url = `http://139.155.44.190:3005/follow/add?lname=${this.state.username}&nname=${this.state.all.name}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    var param = 1;
                    DeviceEventEmitter.emit('Prefresh', param);
                    Alert.alert(res.msg);
                })
        }
        else {
            this.setState({
                fol: false
            })
            let url = `http://139.155.44.190:3005/follow/delete?nname=${this.state.all.name}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    var param = 1;
                    DeviceEventEmitter.emit('Prefresh', param);
                    Alert.alert("已经取消关注")
                })
        }
    }
    class = (data) => {
        if (data == '我的社区') {
            this.setState({
                myexp: false,//我的经验
                mylearn: true,//我的社区
                personlearn: false,//赞在社区
                personexp: false,//赞在经验
                mycollect: false,//我的收藏
                style: "我的社区"
            })
            var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: "issue" };
            AsyncStorage.setItem('personname2', JSON.stringify(value));
        }
        else if (data == '我的经验') {
            this.setState({
                myexp: true,//我的经验
                mylearn: false,//我的社区
                personlearn: false,//赞在社区
                personexp: false,//赞在经验
                mycollect: false,//我的收藏
                style: "我的经验"
            })
            var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: "issue" };
            AsyncStorage.setItem('personname1', JSON.stringify(value));
        }
        else if (data == '我的收藏') {
            this.setState({
                myexp: false,//我的经验
                mylearn: false,//我的社区
                personlearn: false,//赞在社区
                personexp: false,//赞在经验
                mycollect: true,//我的收藏
                style: "我的收藏"
            })
            var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: "collect" };
            AsyncStorage.setItem('personname1', JSON.stringify(value));
        }
        else if (data == '赞在社区') {
            this.setState({
                myexp: false,//我的经验
                mylearn: false,//我的社区
                personlearn: true,//赞在社区
                personexp: false,//赞在经验
                mycollect: false,//我的收藏
                style: "赞在社区"
            })
            var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: "like" };
            AsyncStorage.setItem('personname2', JSON.stringify(value));
        }
        else if (data == '赞在经验') {
            this.setState({
                myexp: false,//我的经验
                mylearn: false,//我的社区
                personlearn: false,//赞在社区
                personexp: true,//赞在经验
                mycollect: false,//我的收藏
                style: "赞在经验"
            })
            var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: "like" };
            AsyncStorage.setItem('personname1', JSON.stringify(value));
        }
    }
    collect = () => {
        this.setState({
            collectIcon: true
        })
    }
    getBackTop = (e) => {
        let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        console.log("距离", offsetY)
        if (offsetY > 120) {
            this.setState({
                isTop: true
            })
            console.log("输出", this.state.isTop)

        } else {
            this.setState({
                isTop: false
            })
            console.log("输出", this.state.isTop)
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }} >
                    <StatusBar
                        translucent={true}
                        backgroundColor={'#00000000'}
                        barStyle={this.state.tabShow ? ('dark-content') : ('light-content')}
                    />
                    {/* 用户名 */}
                    {this.state.tabShow ? (
                        <View
                            style={{
                                position: 'absolute',
                                height: 60,
                                width: width,
                                backgroundColor: "#F8F8F8",
                                justifyContent: "center",
                                alignItems: "center",
                                zIndex: 3,
                                borderBottomColor: "#EEEEEE",
                                borderBottomWidth: 1

                            }}>
                            <Text style={{ fontSize: 18 * s }}>{this.state.all.name}</Text>
                        </View>
                    ) : (<View></View>)}
                    {this.state.tabShow ? (
                        <View
                            style={{
                                position: 'absolute',
                                height: 60,
                                width: width,
                                top: 60,
                                left: 0,
                                backgroundColor: '#fff',
                                zIndex: 3,
                                borderBottomColor: "#EEEEEE",
                                borderBottomWidth: 1,
                                flexDirection: "row",
                                justifyContent: "space-around",
                                alignItems: "center"
                            }}>
                            <FlatList
                                horizontal={true}
                                data={[
                                    { key: '我的社区' },
                                    { key: '我的经验' },
                                    { key: '我的收藏' },
                                    { key: '赞在社区' },
                                    { key: '赞在经验' },
                                ]}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={this.class.bind(this, (item.key))}>
                                        {
                                            item.key == this.state.style
                                                ? <View style={{ height: 45, width: width * 0.18, marginLeft: width * 0.017, justifyContent: "center", alignItems: "center", borderBottomColor: "#007ACC", borderBottomWidth: 2.5 * s }}><Text style={styles.item1}>{item.key}</Text></View>
                                                : <View style={{ height: 45, width: width * 0.18, marginLeft: width * 0.017, justifyContent: "center", alignItems: "center" }}><Text style={styles.item}>{item.key}</Text></View>
                                        }
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                    ) : (<View></View>)}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        onScroll={(evt) => this.onScroll(evt)}
                        scrollEventThrottle={16}
                        onScroll={this.getBackTop}
                        ref={(r) => this.scrollview = r}


                    >
                        <ImageBackground style={{ flex: 1, width: '100%', height: 260, }} source={require('../../assets/community/img2.jpg')} >
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <View style={{
                                    height: 68 * s,
                                    width: 68 * s,
                                    borderRadius: 34 * s,
                                    backgroundColor: '#E9E9EF',
                                    marginTop: 30 * s
                                }}>
                                    <Image style={{
                                        marginTop: 2 * s,
                                        marginLeft: 2 * s,
                                        height: 64 * s,
                                        width: 64 * s,
                                        borderRadius: 32 * s
                                    }} source={{ uri: this.state.all.pic }} />
                                </View>
                                <View style={{ marginTop: 15 * s, flexDirection: "row", marginLeft: 50 * s }}>
                                    <Text style={{ fontSize: 18 * s, color: "#fff" }}>{this.state.all.name}</Text>
                                    <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.all.level]} />
                                </View>
                                <View style={{ marginTop: 20 * s }}>
                                    {
                                        this.state.username == this.state.all.name
                                            ? null
                                            :
                                            <TouchableOpacity
                                                onPress={this.follow}>
                                                {
                                                    this.state.fol
                                                        ? <View style={{ height: 35 * s, width: 100, borderRadius: 20, borderColor: "#fff", borderWidth: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                                            <Text style={{ fontSize: 16 * s, color: "#fff" }}>已关注</Text>
                                                        </View>
                                                        :
                                                        <View style={{ height: 35 * s, width: 100, borderRadius: 20, borderColor: "red", borderWidth: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", }}>
                                                            <Icon style={{ color: "red", fontSize: 25 * s, marginRight: 10 * s }} name="ios-add" />
                                                            <Text style={{ color: "red", fontSize: 16 * s }}>关注</Text>

                                                        </View>
                                                }
                                            </TouchableOpacity>
                                    }
                                </View>
                                <View style={{ flexDirection: "row", marginTop: 5 * s }}>
                                    <TouchableOpacity style={{ height: 50 * s, width: 80 * s, alignItems: "center" }}>
                                        <Text style={{ color: "#fff", fontSize: 16 * s }}>{this.state.Llike}</Text>
                                        <Text>{'\r\n'}</Text>
                                        <Text style={{ color: "#fff", marginTop: -35 * s, fontSize: 15 * s }}>社区获赞</Text>
                                    </TouchableOpacity>
                                    <View style={{ borderLeftColor: "#fff", borderLeftWidth: 2, height: 28 * s, marginTop: 11 * s, marginLeft: 10 * s }}></View>
                                    <TouchableOpacity style={{ height: 50 * s, width: 80 * s, alignItems: "center", marginLeft: 10 * s }}>
                                        <Text style={{ color: "#fff", fontSize: 16 * s }}>{this.state.Elike}</Text>
                                        <Text>{'\r\n'}</Text>
                                        <Text style={{ color: "#fff", marginTop: -35 * s, fontSize: 15 * s }}>经验获赞</Text>
                                    </TouchableOpacity>
                                    <View style={{ borderLeftColor: "#fff", borderLeftWidth: 2, height: 28 * s, marginTop: 11 * s, marginLeft: 10 * s }}  ></View>
                                    <TouchableOpacity style={{ height: 50 * s, width: 80 * s, alignItems: "center", marginLeft: 10 * s }} onPress={() => this.fanslist()}>
                                        <Text style={{ color: "#fff", fontSize: 16 * s }}>{this.state.fans}</Text>
                                        <Text>{'\r\n'}</Text>
                                        <Text style={{ color: "#fff", marginTop: -35 * s, fontSize: 15 * s }}>粉丝</Text>
                                    </TouchableOpacity>
                                    <View style={{ borderLeftColor: "#fff", borderLeftWidth: 2, height: 28 * s, marginTop: 11 * s, marginLeft: 10 * s }}></View>
                                    <TouchableOpacity style={{ height: 50 * s, width: 80 * s, alignItems: "center", marginLeft: 10 * s }} onPress={() => this.followslist()}>
                                        <Text style={{ color: "#fff", fontSize: 16 * s }}>{this.state.follows}</Text>
                                        <Text>{'\r\n'}</Text>
                                        <Text style={{ color: "#fff", marginTop: -35 * s, fontSize: 15 * s }}>关注</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ height: 60, width: width, backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <FlatList
                                horizontal={true}
                                data={[
                                    { key: '我的社区' },
                                    { key: '我的经验' },
                                    { key: '我的收藏' },
                                    { key: '赞在社区' },
                                    { key: '赞在经验' },
                                ]}
                                renderItem={({ item }) =>
                                    <TouchableOpacity onPress={this.class.bind(this, (item.key))}>
                                        {
                                            item.key == this.state.style
                                                ? <View style={{ height: 45, width: width * 0.18, marginLeft: width * 0.017, justifyContent: "center", alignItems: "center", borderBottomColor: "#007ACC", borderBottomWidth: 2.5 * s }}><Text style={styles.item1}>{item.key}</Text></View>
                                                : <View style={{ height: 45, width: width * 0.18, marginLeft: width * 0.017, justifyContent: "center", alignItems: "center" }}><Text style={styles.item}>{item.key}</Text></View>
                                        }
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                        <View style={{
                            paddingTop: 10 * s
                        }}>
                            {
                                this.state.mylearn
                                    ? <PerLearn />
                                    : null
                            }
                            {
                                this.state.myexp
                                    ? <PerExp />
                                    : null
                            }
                            {
                                this.state.mycollect
                                    ? <PerExp />
                                    : null
                            }
                            {
                                this.state.personlearn
                                    ? <PerLearn />
                                    : null
                            }
                            {
                                this.state.personexp
                                    ? <PerExp />
                                    : null
                            }

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中发帖子数量：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.learn}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中发帖子数量：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.exp}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>总获赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike + this.state.Llike}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中的点赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.PLLike}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中的点赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.PELike}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中收藏的帖子数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.collect}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView >
                {
                    this.state.isTop === true ? <ActionButton
                        renderIcon={() => (<View style={{ height: 100, width: "100%", backgroundColor: "#fff" }}></View>)}
                        buttonColor="#FFFFFF"
                        position='right'
                        verticalOrientation='up'
                        size={34}
                        border='#1DA57A'
                        onPress={() => this.scrollview.scrollTo({ x: 0, y: 0, animated: true })}
                    /> : <View />
                }
                {
                    this.state.tabShow ?
                        <View style={{ position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 40, width: width, top: 15 * s }}>
                            <TouchableOpacity style={{ zIndex: 4, height: 40 * s, width: 30 * s, alignItems: "flex-end" }} onPress={() => this.back()}>
                                <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "black" }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ zIndex: 4, height: 40 * s, width: 45 * s, }} onPress={() => this.collect()}>
                                <Icon style={{ fontSize: 30 * s, color: "black" }} name="ios-search" />
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={{ position: "absolute", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 40, width: width, top: 15 * s }}>
                            <TouchableOpacity style={{ zIndex: 4, height: 40 * s, width: 30 * s, alignItems: "flex-end" }} onPress={() => this.back()}>
                                <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "#F8F8F8" }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ zIndex: 4, height: 40 * s, width: 45 * s, }}>
                                <Icon style={{ fontSize: 30 * s, color: "#F8F8F8" }} name="ios-search" />
                            </TouchableOpacity>
                        </View>
                }

            </View>
        )
    }
    onScroll(evt) {
        let y = evt.nativeEvent.contentOffset.y;
        // 开始显示朋友圈图片。
        if (y >= width08 && y <= width09 && this.state.tabShow == false) {
            this.setState({
                tabShow: true,
            })
        }
        //隐藏朋友圈照片
        if (y <= width08 && this.state.tabShow == true) {
            this.setState({
                tabShow: false,
            })
        }
    }
}
const styles = StyleSheet.create({
    item: {
        fontSize: 18,
    },
    item1: {
        fontSize: 18,
        color: "#007ACC"
    },
});
