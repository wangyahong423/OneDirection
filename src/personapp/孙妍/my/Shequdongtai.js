import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
import axios from 'axios';
export default class Xuexidongtai extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            color: [],
            yonghu: [],
            pic: '',
            username: ''
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
            let url = `http://139.155.44.190:3005/community/list`;
            let url2 = `http://139.155.44.190:3005/communitylike/list`;
            let url3 = `http://139.155.44.190:3005/users/getName`;
            let url4 = `http://139.155.44.190:3005/users/list`;

        axios(url2)
            .then((res) => {
                this.setState({
                    list: res.data
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


        axios(url4).then(res => {
            res.data.map(item => {
                if (item.name == this.state.username) {
                    this.setState({ pic: 'http://139.155.44.190:3005' + item.pic })
                }
            })
        })

        axios(url)
            .then((res) => {
                var arr = [];
                res.data.map((item) => {
                    if (item.name == this.state.username) {
                        arr.push(item)
                    }
                })
                console.log(arr)
                this.setState({
                    data: arr
                })
            })

        this.state.data.map((item) => {
            this.setState({
                arr: item.id
            })
        })
    }
    

    clickSend = (id) => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data
                    })
                }
            })
    };
    delTie = (id) => {

        let url9 = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`
        axios(url9)
            .then((res) => {
                window.location.href = "http://localhost:3000/tiezi"
                window.location.href = "http://localhost:3000/xuexi"
                window.location.reload();
            })
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
                                    <View style={{ marginLeft: 30 * s }}>
                                        <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
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
                            </View>
                        )}

                    </View>

                </ScrollView>
            </SafeAreaView >
        )
    }
}
