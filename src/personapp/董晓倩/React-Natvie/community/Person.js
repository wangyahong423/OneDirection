import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter, ShadowPropTypesIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Person extends Component {
    constructor() {
        super();
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
            fol: false
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
    personexp = () => {
        var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level };
        AsyncStorage.setItem('personname', JSON.stringify(value));
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Erefresh', param);
    }
    followslist = () => {
        var value = { followsList: this.state.nnameList };
        AsyncStorage.setItem('followslist', JSON.stringify(value));
        Actions.followslist();
    }
    fanslist = () => {
        var value = { fansList: this.state.lnameList };
        AsyncStorage.setItem('fanslist', JSON.stringify(value));
        Actions.fanslist();
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
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(67,67,157,0.4)' }} >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        padding: 10 * s
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>昵称：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>等级：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.level}级</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>学院：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.college}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中发帖子数量：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.learn}</Text>
                            <Text style={{ fontSize: 20 * s, color: '#000', marginLeft: 10 * s }}>获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Llike}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中发帖子数量：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.exp}</Text>
                            <Text style={{ fontSize: 20 * s, color: '#000', marginLeft: 10 * s }}>获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike}</Text>
                        </View>
                        {
                            this.state.exp
                                ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={() => this.personexp()}>
                                    <Text style={{ fontSize: 20 * s }}>在经验分享中发布的帖子</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </TouchableOpacity>
                                : null
                        }
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>总获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike + this.state.Llike}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
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
                        }
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
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
                        }
                        <View>
                            {
                                this.state.username == this.state.all.name
                                    ? null
                                    :
                                    <TouchableOpacity
                                        onPress={this.follow}
                                        style={this.state.fol ? { height: 30, width: 90, borderRadius: 5, borderWidth: 1, }
                                            : { borderColor: "red", height: 30, width: 90, borderRadius: 5, borderWidth: 1, }} >
                                        {
                                            this.state.fol
                                                ? <Text style={{ justifyContent: "center", alignItems: "center", fontSize: 16 * s, marginLeft: 10 * s }}>取消关注</Text>
                                                : <Text style={{ color: "red", justifyContent: "center", alignItems: "center", fontSize: 16 * s, marginLeft: 25 * s }}>关注</Text>
                                        }
                                    </TouchableOpacity>
                            }
                        </View>
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
        )
    }
}
