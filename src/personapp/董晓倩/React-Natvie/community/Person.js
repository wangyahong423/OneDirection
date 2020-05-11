import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, StatusBar, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter, ShadowPropTypesIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
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
    personexp = (title) => {
        var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: title };
        AsyncStorage.setItem('personname1', JSON.stringify(value));
        Actions.perexp();
    }
    personlearn = (title) => {
        var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: title };
        AsyncStorage.setItem('personname2', JSON.stringify(value));
        Actions.perlearn();
    }
    back = () => {
        Actions.pop();
        var param = 1;
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
        console.log("粉丝", this.state.fans)
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
                                height: 80,
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
                           <TouchableOpacity onPress={this.personlearn.bind(this, ('like'))}><Text>赞在社区</Text></TouchableOpacity>
                            <TouchableOpacity onPress={this.personexp.bind(this, ('like'))}><Text>赞在经验</Text></TouchableOpacity>
                            <TouchableOpacity><Text>我的社区</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.personexp()}><Text>我的经验</Text></TouchableOpacity>
                            <TouchableOpacity onPress={this.personexp.bind(this, ('collect'))}><Text>我的收藏</Text></TouchableOpacity>

                        </View>
                    ) : (<View></View>)}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        onScroll={(evt) => this.onScroll(evt)}
                        scrollEventThrottle={16}
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
                                <View style={{marginTop:20*s}}>
                                {
                                    this.state.username == this.state.all.name
                                        ? null
                                        :
                                        <TouchableOpacity
                                            onPress={this.follow}
                                            // style={this.state.fol ? { height: 40, width: 100, borderRadius: 5, borderWidth: 1}
                                            //     : { borderColor: "red", height: 30, width: 100, borderRadius: 5, borderWidth: 1, }} 
                                            >
                                            {
                                                this.state.fol
                                                    ? <View style={{height: 35*s, width: 100, borderRadius: 20,borderColor:"#fff", borderWidth: 1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                                        {/* <Text style={{color:"#fff",fontSize:20*s,marginRight:10*s}}>√</Text> */}
                                                        <Text style={{ fontSize: 16 * s ,color:"#fff"}}>已关注</Text>
                                                    </View>
                                                    : 
                                                    <View style={{height: 35*s, width: 100, borderRadius: 20,borderColor:"red", borderWidth: 1,justifyContent:"center",alignItems:"center",flexDirection:"row", }}>
                                                    <Icon style={{color:"red",fontSize:25*s,marginRight:10*s}} name="ios-add"/>
                                                    <Text style={{ color: "red", fontSize: 16 * s}}>关注</Text>

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
                            <TouchableOpacity style={{width:width*0.15,height:40,justifyContent:"center",alignItems:"center",borderBottomWidth:2,borderBottomColor:"black"}} onPress={this.personlearn.bind(this, ('like'))}><Text style={{fontSize:15*s,color:"#5F6368"}}>赞在社区</Text></TouchableOpacity>
                            <TouchableOpacity style={{width:width*0.15,height:40,justifyContent:"center",alignItems:"center",}}  onPress={this.personexp.bind(this, ('like'))}><Text style={{fontSize:15*s,color:"#5F6368"}}>赞在经验</Text></TouchableOpacity>
                            <TouchableOpacity style={{width:width*0.15,height:40,justifyContent:"center",alignItems:"center",}} ><Text style={{fontSize:15*s,color:"#5F6368"}}>我的社区</Text></TouchableOpacity>
                            <TouchableOpacity style={{width:width*0.15,height:40,justifyContent:"center",alignItems:"center",}} onPress={() => this.personexp()}><Text style={{fontSize:15*s,color:"#5F6368"}}>我的经验</Text ></TouchableOpacity>
                            <TouchableOpacity style={{width:width*0.15,height:40,justifyContent:"center",alignItems:"center",}}  onPress={this.personexp.bind(this, ('collect'))}><Text style={{fontSize:15*s,color:"#5F6368"}}>我的收藏</Text></TouchableOpacity>
                        </View>

                        <View style={{
                            paddingTop: 10 * s
                        }}>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>昵称：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.name}</Text>
                            </View> */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>头像：</Text>
                                <View style={{
                                    height: 54 * s,
                                    width: 54 * s,
                                    borderRadius: 27 * s,
                                    backgroundColor: '#37376F'
                                }}>
                                    <Image style={{
                                        marginTop: 2 * s,
                                        marginLeft: 2 * s,
                                        height: 50 * s,
                                        width: 50 * s,
                                        borderRadius: 25 * s
                                    }} source={{ uri: this.state.all.pic }} />
                                </View>
                            </View> */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>等级：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.level}级</Text>
                            </View> */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>学院：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.college}</Text>
                            </View> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中发帖子数量：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.learn}</Text>
                                {/* <Text style={{ fontSize: 20 * s, color: '#000', marginLeft: 10 * s }}>获赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Llike}</Text> */}
                            </View>
                            {/* {
                                this.state.learn
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={() => this.personlearn()}>
                                        <Text style={{ fontSize: 20 * s }}>在社区中发布的帖子</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中发帖子数量：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.exp}</Text>
                                {/* <Text style={{ fontSize: 20 * s, color: '#000', marginLeft: 10 * s }}>获赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike}</Text> */}
                            </View>
                            {/* {
                                this.state.exp
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={() => this.personexp()}>
                                        <Text style={{ fontSize: 20 * s }}>在经验分享中发布的帖子</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>总获赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike + this.state.Llike}</Text>
                            </View>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中的获赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Llike}</Text>
                            </View> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中的点赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.PLLike}</Text>
                            </View>
                            {/* {
                                this.state.PLLike
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personlearn.bind(this, ('like'))}>
                                        <Text style={{ fontSize: 20 * s }}>在社区中点赞的帖子</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中的获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike}</Text>
                        </View> */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中的点赞数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.PELike}</Text>
                            </View>
                            {/* {
                                this.state.PELike
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personexp.bind(this, ('like'))}>
                                        <Text style={{ fontSize: 20 * s }}>在经验分享中点赞的帖子</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中收藏的帖子数：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.collect}</Text>
                            </View>
                            {/* {
                                this.state.collect
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personexp.bind(this, ('collect'))}>
                                        <Text style={{ fontSize: 20 * s }}>在经验分享中收藏的帖子</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>关注人量：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.follows}</Text>
                            </View>
                            {
                                this.state.follows
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={() => this.followslist()}>
                                        <Text style={{ fontSize: 20 * s }}>关注列表：</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                                <Text style={{ fontSize: 20 * s, color: '#000' }}>粉丝人量：</Text>
                                <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.fans}</Text>
                            </View>
                            {
                                this.state.fans
                                    ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={() => this.fanslist()}>
                                        <Text style={{ fontSize: 20 * s }}>粉丝列表：</Text>
                                        <Icon name="chevron-right" size={20} color="#000" />
                                    </TouchableOpacity>
                                    : null
                            } */}
                          
                        </View>
                    </ScrollView>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            width: 300 * s,
                            height: 40 * s,
                            borderRadius: 15 * s,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#37376F',
                            marginBottom: 10 * s
                        }}
                            onPress={() => this.back()}
                        >
                            <Text style={{ color: '#fff', fontSize: 20 * s }}>返回</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView >
                {
                    this.state.tabShow ?
                        <TouchableOpacity style={{ zIndex: 4, height: 40 * s, width: 40 * s, justifyContent: "flex-end", alignItems: "center", position: "absolute" }} onPress={() => this.back()}>
                            <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "black" }} />
                        </TouchableOpacity> :
                        <TouchableOpacity style={{ zIndex: 4, height: 40 * s, width: 40 * s, justifyContent: "flex-end", alignItems: "center", position: "absolute" }} onPress={() => this.back()}>
                            <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "#F8F8F8" }} />
                        </TouchableOpacity>
                }
            </View>
        )
    }
    onScroll(evt) {
        let y = evt.nativeEvent.contentOffset.y;
        // 隐藏返回按键和照相机
        //         if(y >= width06 && y<=![back_black_white.png](https://upload-images.jianshu.io/upload_images/12082766-4ebd62e10241a735.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
        // width08){
        //             opcityNumber = 1-(y-width06)/(width02);
        //             this.setState({
        //                 opcityNumber:opcityNumber,
        //             })
        //         }
        // 原本以为是文字的，不过看着微信的效果太平滑了。所以我就弄成照片了。
        // 开始显示朋友圈图片。
        if (y >= width08 && y <= width09 && this.state.tabShow == false) {
            this.setState({
                tabShow: true,
            })
        }
        // 朋友圈图片动态效果
        // if (y >= width08 && y <= width09) {
        //     let tabHeight = (1 - (y - width08) / (width01)) * 10 + 40;
        //     let tabShowOpactiy = (y - width08) / (width01);
        //     this.setState({
        //         tabHeight: tabHeight,
        //         tabShowOpactiy: tabShowOpactiy,
        //     })
        // }
        //隐藏朋友圈照片
        if (y <= width08 && this.state.tabShow == true) {
            this.setState({
                tabShow: false,
            })
        }
    }
}

