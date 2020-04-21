import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, ScrollView, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            data: [],
            todo: [],
            islogin: false
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
        let url = `http://139.155.44.190:3005/users/list`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res.err) {
                } else {
                    this.setState({
                        data: res
                    })
                    let arr = [];
                    this.state.data.map((item) => {
                        if (item.name === this.state.username) {
                            arr.push(item)
                        }
                        this.setState({
                            data: arr
                        })
                    })
                }
            })
        let url2 = `http://139.155.44.190:3005/users/list`;
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
                            pic: "http://139.155.44.190:3005" + item.pic
                        })
                    }
                })
            })
        var self = this;
        this.listener = DeviceEventEmitter.addListener('freshone', function (param) {
            let url = `http://139.155.44.190:3005/users/list`;
            fetch(url)
                .then(res => res.json())
                .then((res) => {
                    if (res.err) {
                    } else {
                        self.setState({
                            data: res
                        })
                        let arr = [];
                        self.state.data.map((item) => {
                            if (item.name === self.state.username) {
                                arr.push(item)
                            }
                            self.setState({
                                data: arr
                            })
                        })
                    }
                })
            let url2 = `http://139.155.44.190:3005/users/list`;
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
                                pic: "http://139.155.44.190:3005" + item.pic
                            })
                        }
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
    render() {
        return (
            <ScrollView>
                <View style={{ height: 250, width: '100%' }}>
                    <Image source={require('../../assets/gonglve2.png')} />
                </View>
                <View style={{ width: '100%', height: 430, backgroundColor: '#ffffff' }}>
                    <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ width: 100, height: 100, position: "absolute", top: -50, left: 30 }} onPress={() => Actions.touxiang()}>
                            <Image source={{ uri: this.state.pic }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        </TouchableOpacity>
                        <Text style={{ position: 'absolute', left: 150, fontSize: 18, top: -3 }}>{this.state.username}</Text>
                        <Text style={{ position: 'absolute', left: 150, top: 27, fontSize: 18 }}>河北师范大学{this.state.college}</Text>
                    </View>

                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}  >
                        <Icon name="star-o" size={30} color="#fed658" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.shoucang()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>我的收藏 </Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.tiezi()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 39, marginTop: 11 }} onPress={() => Actions.tiezi()}>我的帖子</Text>
                            <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 212, marginTop: 15 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="file-o" size={28} color="#25bb22" style={{ marginLeft: 30, marginTop: 10 }} />
                        <TouchableOpacity onPress={() => Actions.file()} style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginLeft: 44, marginTop: 11 }} onPress={() => Actions.file()}>我的文件</Text>
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

