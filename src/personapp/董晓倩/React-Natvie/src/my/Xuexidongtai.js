import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Xuexidongtai extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            userarr: [],
            color: [],
            yonghu: [],
            pic: '',
            username: '',
            head: '',
            new: []
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('new')
            .then((res) => {
                this.setState({
                    new: JSON.parse(res)
                })
                console.log(this.state.new.id);
            });
        AsyncStorage.getItem('username')
            .then(res => {
                let user = { username: res }
                this.setState({
                    username: user.username
                })
                let url = `http://139.155.44.190:3005/learn/list`;
                let url1 = `http://139.155.44.190:3005/users/list`;
                fetch(url)
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
                        })
                        for (var i = 0; i < brr.length; i++) {
                            for (var j = 0; j < this.state.new.id.length; j++) {
                                brr[i].new = false;
                                if (brr[i].id == this.state.new.id[j]) {
                                    brr[i].new = true;
                                    break;
                                }
                            }
                        }
                        console.log(brr)
                        this.setState({
                            data: brr
                        })
                    })
                fetch(url1)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({
                            arr: res
                        })
                        var urr = [];
                        this.state.arr.map((item) => {
                            if (item.name == this.state.username) {
                                this.setState({
                                    pic: 'http://139.155.44.190:3005' + item.pic,
                                    head: 'http://139.155.44.190:3005/head/' + item.head
                                })
                            }
                        })
                    })
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('freshthree', function (param) {
            AsyncStorage.getItem('username')
                .then(res => {
                    let user = { username: res }
                    self.setState({
                        username: user.username
                    })
                    let url = `http://139.155.44.190:3005/learn/list`;
                    let url1 = `http://139.155.44.190:3005/users/list`;
                    fetch(url)
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
                                for (var i = 0; i < brr.length; i++) {
                                    brr[i].new = false;
                                    for (var j = 0; j < self.state.new.length; j++) {
                                        if (brr[i].id == self.state.length[j]) {
                                            brr[i].new = true;
                                            break;
                                        }
                                    }
                                }
                                self.setState({
                                    data: brr
                                })
                            })
                        })
                    fetch(url1)
                        .then(res => res.json())
                        .then((res) => {
                            self.setState({
                                arr: res
                            })
                            var urr = [];
                            self.state.arr.map((item) => {
                                if (item.name == self.state.username) {
                                    self.setState({
                                        pic: 'http://139.155.44.190:3005' + item.pic,
                                        head: 'http://139.155.44.190:3005/head/' + item.head
                                    })
                                }
                            })
                        })
                })
        })

    }

    delTie = (id) => {

        let url9 = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`
        fetch(url9)
            .then(res => res.json())

            .then((res) => {
            })
        var param = 1;
        DeviceEventEmitter.emit('freshthree', param);
    }

    details = (idx) => {
        var value = { page: this.state.data[idx] };
        console.log(value);
        var arr = this.state.data;
        arr[idx].new=false;
        this.setState({
            data:arr
        })
        AsyncStorage.setItem('mPage', JSON.stringify(value));
        AsyncStorage.getItem('mPage')
            .then((value) => {
            })
        Actions.xiangqing();
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
                                    <Image style={{
                                        height: 70 * s,
                                        width: 70 * s,
                                        borderRadius: 35 * s,
                                        // backgroundColor:'green',
                                        position: 'absolute',
                                        top: 5,
                                        left: 8
                                    }}
                                        source={{ uri: this.state.head }} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                            <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                            <View style={item.new ?
                                                { marginTop: 0, marginLeft: 10, width: 10, height: 10, borderRadius: 5, borderColor: '#000', backgroundColor: 'red' }
                                                : { marginTop: 0, marginLeft: 10, width: 10, height: 10, borderRadius: 5, borderColor: '#000', backgroundColor: '#fff' }}></View>       
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
                                    <Text style={{ fontSize: 18 * s }} onPress={this.details.bind(this, (idx))}>{item.content}</Text>
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
