import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, SafeAreaView, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
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
        let url = `http://139.155.44.190:3005/notes/list`;
        let url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url4 = `http://139.155.44.190:3005/users/list`;

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
                                <View style={{ position: 'absolute', top: 10, left: 430 }}>
                                    <Text style={{ color: 'red', fontSize: 20 }} onPress={this.delTie.bind(this, (item.id))}>×</Text>
                                </View>
                            </View>
                        )}

                    </View>

                </ScrollView>
            </SafeAreaView >
        )
    }
}
