import React, { Component, } from 'react';
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    SafeAreaView,
    Image,
    AsyncStorage,
    DeviceEventEmitter,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Img from '../community/Img'
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Biji extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            color: [],
            yonghu: [],
            pic: '',
            username: '',
            isLoading: true,

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
        this.setState({ isLoading: true })
        let url = `http://139.155.44.190:3005/notes/list`;
        let url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url4 = `http://139.155.44.190:3005/users/list`;
        fetch(url4)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    todo: res
                })
                this.state.todo.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            head: "http://139.155.44.190:3005/head/" + item.head,
                            level: item.level
                        })
                    }
                })
            })
        fetch(url2)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    list: res
                })
                var brr = [];
                this.state.list.map((item) => {
                    if (item.name == this.state.username) {
                        brr.push(item);
                    }
                    this.setState({
                        list: brr
                    })
                })
                var arr = [];
                var a = 0;
                for (var i = 0; i < this.state.data.length; i++) {
                    for (var j = 0; j < this.state.list.length; j++) {
                        if (this.state.data[i].id == this.state.list[j].lid) {
                            a = 1;
                            break;
                        } else {
                            a = 0;
                        }
                    }
                    if (a == 1) {
                        arr.push('red');
                        a = 0;
                    } else {
                        arr.push('black');
                    }
                }
                this.setState({
                    color: arr
                })
            })
        fetch(url4)
            .then(res => res.json())
            .then(res => {
                res.map(item => {
                    if (item.name == this.state.username) {
                        this.setState({ pic: 'http://139.155.44.190:3005' + item.pic })
                    }
                })
            })
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                var arr = [];
                res.map((item) => {
                    if (item.name == this.state.username) {
                        arr.push(item)
                    }
                })
                this.setState({
                    data: arr
                })
                this.setState({ isLoading: false });
            })

        this.state.data.map((item) => {
            this.setState({
                arr: item.id
            })
        })

        var self = this;
        this.listener = DeviceEventEmitter.addListener('freshthree', function (param) {
            let url = `http://139.155.44.190:3005/notes/list`;
            let url2 = `http://139.155.44.190:3005/learnlike/list`;
            let url3 = `http://139.155.44.190:3005/users/getName`;
            let url4 = `http://139.155.44.190:3005/users/list`;
            fetch(url2)
                .then(res => res.json())
                .then((res) => {
                    self.setState({
                        list: res
                    })
                    var brr = [];
                    self.state.list.map((item) => {
                        if (item.name == self.state.username) {
                            brr.push(item);
                        }
                        self.setState({
                            list: brr
                        })
                    })
                    var arr = [];
                    var a = 0;
                    for (var i = 0; i < self.state.data.length; i++) {
                        for (var j = 0; j < self.state.list.length; j++) {
                            if (self.state.data[i].id == self.state.list[j].lid) {
                                a = 1;
                                break;
                            } else {
                                a = 0;
                            }
                        }
                        if (a == 1) {
                            arr.push('red');
                            a = 0;
                        } else {
                            arr.push('black');
                        }
                    }
                    self.setState({
                        color: arr
                    })
                })
            fetch(url4)
                .then(res => res.json())
                .then(res => {
                    res.map(item => {
                        if (item.name == self.state.username) {
                            self.setState({ pic: 'http://139.155.44.190:3005' + item.pic })
                        }
                    })
                })
            fetch(url)
                .then(res => res.json())
                .then((res) => {
                    var arr = [];
                    res.map((item) => {
                        if (item.name == self.state.username) {
                            arr.push(item)
                        }
                    })
                    self.setState({
                        data: arr
                    })
                    self.setState({ isLoading: false });
                })
            self.state.data.map((item) => {
                self.setState({
                    arr: item.id
                })
            })
        })
    }
    clickSend = (id) => {
        let url = `http://139.155.44.190:3005/notes/select?content=${this.state.search}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res.false) {
                } else {
                    for (var i = 0; i < res.length; i++) {
                        res[i].pic = "http://139.155.44.190:3005/" + res[i].pic;
                    }
                    this.setState({
                        data: res
                    })
                }
            })
    };
    delTie = (id) => {
        let url9 = `http://139.155.44.190:3005/notes/deleteNote?id=${id}`
        fetch(url9)
            .then(res => res.json())

            .then((res) => {
            })
        var param = 1;
        DeviceEventEmitter.emit('freshthree', param);
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    width: '100%',
                    height: 63 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => this.back()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>我的笔记</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {this.state.data.map((item, idx) =>
                            <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 10 * s }}>
                                <View style={{
                                    flexDirection: 'row',
                                    height: 80 * s,
                                    alignItems: 'center',
                                }}>
                                    <Image style={{
                                        marginLeft: 20 * s,
                                        height: 50 * s,
                                        width: 50 * s,
                                        borderRadius: 25 * s,
                                    }} source={{ uri: this.state.pic }} />
                                    <Image style={{
                                        height: 60 * s,
                                        width: 60 * s,
                                        borderRadius: 30* s,
                                        position: 'absolute',
                                        top: 8 * s,
                                        left: 15* s
                                    }}
                                        source={{ uri: this.state.head }} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                            <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 20 * s }} source={Img['png' + this.state.level]} />
                                        </View>
                                        <Text>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    marginLeft: 30 * s,
                                    marginRight: 30 * s,
                                    marginBottom: 20 * s
                                }}
                                >
                                    <Text style={{ fontSize: 20 * s }}>{item.title}</Text>
                                    <Text style={{ fontSize: 18 * s }}>{item.content}</Text>
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
                                top: height * 0.4,
                                width: '100%'
                            }}>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 23 * s, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
            </SafeAreaView >
        )
    }
}