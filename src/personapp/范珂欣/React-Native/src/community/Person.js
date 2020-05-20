import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
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
            Elike: 0,
            Llike: 0,
            collect: 0,
            PELike: 0,
            PLLike: 0
        };
        this.getData();
    }
    getData = () => {
        // AsyncStorage.getItem('username')
        //     .then((res) => {
        //         let name = { username: res }
        //         this.setState({
        //             username: name.username
        //         })
        //     });
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
        let url5 = `http://139.155.44.190:3005/collect/list`;
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
                                        fetch(url5)
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

        var self = this;
        this.listener = DeviceEventEmitter.addListener('Prefresh', function (param) {
            // var arr=self.state.list;
            // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
            // arr.splice(0,0,a);
            // self.setState({list:arr});
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
                                            fetch(url5)
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
        });
    }
    componentWillUnmount() {
        this.listener.remove();
        // this.listener1.remove();
    }
    personexp = (title) => {
        var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: title ,head: this.state.all.head};
        AsyncStorage.setItem('personname1', JSON.stringify(value));
        Actions.perexp();
    }
    personlearn = (title) => {
        var value = { name: this.state.all.name, pic: this.state.all.pic, level: this.state.all.level, title: title ,head: this.state.all.head};
        AsyncStorage.setItem('personname2', JSON.stringify(value));
        Actions.perlearn();
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Erefresh', param);
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            // <ImageBackground style={{ flex: 1, width: '100%', height: height }} source={require('../../../assets/share/3-6.jpg')}>
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
                                // backgroundColor: '#37376F'
                            }}>

                                <Image style={{
                                    marginTop: 2 * s,
                                    marginLeft: 2 * s,
                                    height: 50 * s,
                                    width: 50 * s,
                                    borderRadius: 25 * s
                                }} source={{ uri: this.state.all.pic }} />
                                <Image style={{
                                    height: 70 * s,
                                    width: 70 * s,
                                    borderRadius: 35 * s,
                                    // backgroundColor:'green',
                                    position: 'absolute',
                                    top: -8,
                                    right: -7
                                }}
                                    source={{ uri: this.state.all.head }} />
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
                        {
                            this.state.learn
                                ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personlearn.bind(this, ('issue'))}>
                                    <Text style={{ fontSize: 20 * s }}>在社区中发布的帖子</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </TouchableOpacity>
                                : null
                        }
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中发帖子数量：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.exp}</Text>
                            <Text style={{ fontSize: 20 * s, color: '#000', marginLeft: 10 * s }}>获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike}</Text>
                        </View>
                        {
                            this.state.exp
                                ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personexp.bind(this, ('issue'))}>
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
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中的获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Llike}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中的点赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.PLLike}</Text>
                        </View>
                        {
                            this.state.PLLike
                                ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personlearn.bind(this, ('like'))}>
                                    <Text style={{ fontSize: 20 * s }}>在社区中点赞的帖子</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </TouchableOpacity>
                                : null
                        }
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中的获赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.Elike}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中的点赞数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.PELike}</Text>
                        </View>
                        {
                            this.state.PELike
                                ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personexp.bind(this, ('like'))}>
                                    <Text style={{ fontSize: 20 * s }}>在经验分享中点赞的帖子</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </TouchableOpacity>
                                : null
                        }
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验分享中收藏的帖子数：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.collect}</Text>
                        </View>
                        {
                            this.state.collect
                                ? <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s, justifyContent: 'space-between', borderColor: '#37376F', borderWidth: 1 * s }} onPress={this.personexp.bind(this, ('collect'))}>
                                    <Text style={{ fontSize: 20 * s }}>在经验分享中收藏的帖子</Text>
                                    <Icon name="chevron-right" size={20} color="#000" />
                                </TouchableOpacity>
                                : null
                        }
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
            // </ImageBackground >
        )
    }
}
