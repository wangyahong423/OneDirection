import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, SafeAreaView, Dimensions, ImageBackground, ScrollView, TouchableOpacity, DeviceEventEmitter, ImageView, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Head extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { "key": null, "path": 'http://139.155.44.190:3005/head/null', "color": false },
                { "key": 't1.png', "path": 'http://139.155.44.190:3005/head/t1.png', "color": false },
                { "key": 't2.png', "path": 'http://139.155.44.190:3005/head/t2.png', "color": false },
                { "key": 't3.png', "path": 'http://139.155.44.190:3005/head/t3.png', "color": false },
                { "key": 't4.png', "path": 'http://139.155.44.190:3005/head/t4.png', "color": false },
                { "key": 't5.png', "path": 'http://139.155.44.190:3005/head/t5.png', "color": false },
                { "key": 't6.png', "path": 'http://139.155.44.190:3005/head/t6.png', "color": false },
                { "key": 't7.png', "path": 'http://139.155.44.190:3005/head/t7.png', "color": false },
                { "key": 't8.png', "path": 'http://139.155.44.190:3005/head/t8.png', "color": false }
            ],
            username: '',
            head: '',
            todo: [],
            head1: ''

        };
        // AsyncStorage.getItem('username')
        //     .then((res) => {
        //         let name = { username: res }
        //         this.setState({
        //             username: name.username
        //         })
        //     });
    }
    componentDidMount() {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        let url1 = `http://139.155.44.190:3005/users/list`;
        fetch(url1)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    todo: res
                })
                this.state.todo.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            college: item.college,
                            pic: "http://139.155.44.190:3005" + item.pic,
                            head1: "http://139.155.44.190:3005/head/" + item.head,

                        })
                        console.log("点击头像", this.state.pic)
                    }
                })
            })
        var self = this;
        this.listener = DeviceEventEmitter.addListener('Mrefresh', function (param) {
            let url1 = `http://139.155.44.190:3005/users/list`;
            fetch(url1)
                .then(res => res.json())
                .then((res) => {
                    self.setState({
                        todo: res
                    })
                    self.state.todo.map((item) => {
                        if (item.name == self.state.username) {
                            self.setState({
                                college: item.college,
                                pic: "http://139.155.44.190:3005" + item.pic,
                            })
                            console.log("点击头像", this.state.pic)
                        }
                    })
                })
        })
    }
    selected = (idx) => {
        var head = this.state.list[idx].key;
        console.log(head);
        this.setState({
            head1: "http://139.155.44.190:3005/head/" + head
        })
        var list = this.state.list;
        for (var i = 0; i < list.length; i++) {
            list[i].color = false;
        }
        list[idx].color = true;
        this.setState({
            head: head,
            list: list,
        })
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    sure = () => {
        let url = `http://139.155.44.190:3005/users/changeHead?name=${this.state.username}&head=${this.state.head}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {

                // var value = { card: this.state.card };
                // AsyncStorage.setItem('card', JSON.stringify(value));

                Actions.myPage();
                var param = 1;

                DeviceEventEmitter.emit('refresh', param);
                DeviceEventEmitter.emit('Mrefresh', param);


            })
    }
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                <ImageBackground style={{ height: 200 * s, width: '100%', }} source={require('../../assets/community/img14.png')} >
                    <View style={{ width: "100%", height: 50 * s, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ height: 40 * s, width: 40 * s, position: "absolute", top: 0, left: 0, }} onPress={() => this.back()}>
                            <Icon name="chevron-left" style={{ fontSize: 40 * s, color: "#37376F" }} />
                        </TouchableOpacity>
                        <Text style={{ color: "#37376F", fontSize: 18 * s }}>头 像 框</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", height: 200 * s, width: "100%", marginTop: -40 * s }}>
                        <Image source={{ uri: this.state.pic }} style={{ width: 90 * s, height: 90 * s, borderRadius: 45 * s }} />
                        <Image style={{ width: 100 * s, height: 100 * s, borderRadius: 50 * s, position: "absolute", top: 50 * s }} source={{ uri: this.state.head1 }} />
                    </View>
                </ImageBackground>
                <View style={{ flexDirection: "row", width: width, height: 500, flexWrap: 'wrap', backgroundColor: "#E9E9EF" }}>
                    {/* <View style={{height:width*0.5,width:width*0.5,backgroundColor:"yellow"}}></View>
                    <View style={{height:width*0.5,width:width*0.5,backgroundColor:"yellow"}}></View> */}

                    {
                        this.state.list.map((item, idx) => (
                            <TouchableOpacity onPress={this.selected.bind(this, (idx))} style={{ justifyContent: "center", alignItems: 'center', backgroundColor: "#fff", width: width * 0.32, height: width * 0.32, marginLeft: width * 0.01, marginTop: width * 0.01 }} >
                                <Image style={{ height: 70 * s, width: 70 * s, borderRadius: 35 * s }} source={require('../../assets/studyCommunicate/1.png')} />
                                <Image
                                    style={{ width: 80 * s, height: 80 * s, borderRadius: 40*s, fontSize: 50 * s, position: "absolute", top: 15, left: 34 }}
                                    source={{ uri: item.path }}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:20}}>
                                    <View style={item.color ? { width: 10, height: 10, borderRadius: 5, borderColor: '#000', backgroundColor: 'red', borderWidth: 1 } : { width: 10, height: 10, borderRadius: 5, borderColor: '#000', borderWidth: 1 }}></View>
                                    <Text style={{marginLeft:10}}>使用此头像框 </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={{
                    width: '100%',
                    height:100*s,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 40 * s,
                        borderRadius: 5 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                    }}
                        onPress={() => this.sure()}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 * s }}>立即设置</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
