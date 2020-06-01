import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, Dimensions, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Img from '../community/Img'

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Xiangqing extends Component {
    constructor() {
        super();
        this.state = {
            page: '',
            username: '',
            comment: '',
            list: [],
            pic: [],
            lvlist: [],
            isLoading: true,
            head: ''
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
        AsyncStorage.getItem('mPage')
            .then((value) => {
                this.setState({
                    page: JSON.parse(value).page
                });
                console.log('ddd' + this.state.page.level)
                this.setState({ isLoading: true })
                let url1 = `http://139.155.44.190:3005/learntalk/list`;
                let url2 = `http://139.155.44.190:3005/users/list`;
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({
                            pic: res,
                        });
                        this.state.pic.map((item) => {
                            if (this.state.username == item.name) {
                                console.log(45, this.state.username, item.name)
                                this.state.page.pic = 'http://139.155.44.190:3005' + item.pic;
                                this.state.page.head = 'http://139.155.44.190:3005/head/' + item.head;
                                console.log(this.state.page)
                            }
                        })
                        fetch(url1)
                            .then((res) => res.json())
                            .then((res) => {
                                var arr = [];
                                res.forEach(item => {
                                    if (item.lid == this.state.page.id) {
                                        for (var i = 0; i < this.state.pic.length; i++) {
                                            if (item.name == this.state.pic[i].name) {
                                                item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                item.head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                item.level = this.state.pic[i].level;
                                                break;
                                            }
                                        }
                                        arr.push(item);
                                    }

                                });
                                this.setState({ isLoading: false })
                                this.setState({ list: arr });
                            })
                    })
                var self = this;
                this.listener = DeviceEventEmitter.addListener('pinglun', function (param) {
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            self.setState({ pic: res });
                            fetch(url1)
                                .then((res) => res.json())
                                .then((res) => {
                                    var arr = [];
                                    res.forEach(item => {
                                        if (item.lid == self.state.page.id) {
                                            for (var i = 0; i < self.state.pic.length; i++) {
                                                if (item.name == self.state.pic[i].name) {
                                                    item.pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
                                                    item.head = 'http://139.155.44.190:3005/head/' + self.state.pic[i].head;
                                                    item.level = self.state.pic[i].level;
                                                    break;
                                                }
                                            }
                                            arr.push(item);
                                        }

                                    });
                                    self.setState({ list: arr });
                                })
                        })
                });
            });
    }

    change = (e) => {
        this.setState({ comment: e });
    }
    delete = (idx) => {
        Alert.alert('确认要删除吗', '',
            [
                { text: "确认", onPress: this.opntion1.bind(this, (this.state.list[idx].id)) },
                { text: "取消", onPress: this.opntion2 }
            ]
        );
        var param = 1;
        DeviceEventEmitter.emit('pinglun', param);
    }
    opntion1 = (id) => {
        let url = `http://139.155.44.190:3005/learntalk/delete?id=${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                Alert.alert(res.msg);
                var param = 1;
                DeviceEventEmitter.emit('pinglun', param);
            });
    }
    opntion2 = () => {

    }
    componentWillUnmount() {
        this.listener.remove();
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 5 * s }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 80 * s,
                        alignItems: 'center'
                    }}>
                        <Image style={{
                            marginLeft: 20 * s,
                            height: 50 * s,
                            width: 50 * s,
                            borderRadius: 25 * s
                        }} source={{ uri: this.state.page.pic }} />
                        <Image style={{
                            height: 66 * s,
                            width: 66 * s,
                            borderRadius: 33 * s,
                            // backgroundColor:'green',
                            position: 'absolute',
                            top: 7,
                            left: 10
                        }}
                            source={{ uri: this.state.page.head }} />
                        <View style={{ marginLeft: 30 * s }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 * s }}>{this.state.page.name}</Text>
                                <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.page.level]} />

                            </View>
                            <Text>{this.state.page.time}</Text>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 30 * s,
                        marginRight: 30 * s,
                        marginTop: 10 * s,
                        marginBottom: 20 * s
                    }}
                    >
                        <Text style={{ fontSize: 18 * s }}>{this.state.page.content}</Text>
                    </View>
                </View>

                <View
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1 * s
                    }}
                >
                    <Text style={{ paddingLeft: 10 * s, fontSize: 20 * s }}>评论</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', borderBottomWidth: 1 * s, borderBottomColor: '#808080' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
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
                                                left: 10
                                            }}
                                                source={{ uri: item.head }} />
                                        </View>
                                        <View style={{ marginLeft: 30 * s, marginRight: 60 * s }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={this.state.page.name == item.name ? { fontSize: 15 * s, color: 'red', marginTop: 5 * s } : { fontSize: 15 * s, color: '#37376F', marginTop: 5 * s }}>{item.name}</Text>
                                                <Image style={{ height: 20 * s, width: 35 * s, marginLeft: 10 * s ,marginTop:5*s}} source={Img['png' + item.level]} />

                                            </View>

                                            <Text style={{ fontSize: 18 * s }}>{item.content}</Text>
                                            <Text style={{ fontSize: 10 * s, color: '#808080', marginTop: 5 * s, marginBottom: 5 * s }}>{item.time}</Text>
                                        </View>
                                    </View>
                                    {
                                        this.state.username == this.state.page.name || this.state.username == item.name
                                            ? <TouchableOpacity style={{
                                                width: 30 * s,
                                                height: 30 * s,
                                                borderRadius: 15 * s,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                // backgroundColor: '#37376F',
                                                position: 'absolute',
                                                top: 0,
                                                right: 0
                                            }}
                                                onPress={this.delete.bind(this, (idx))}
                                            >
                                                <Text style={{ color: '#e8e8e8', fontSize: 30 * s }}>×</Text>
                                            </TouchableOpacity>
                                            : null
                                    }
                                </View>
                            ))
                        }
                    </View>
                    {
                        this.state.isLoading
                            ? <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                            : null
                    }
                </ScrollView>

            </SafeAreaView >
        )
    }
}