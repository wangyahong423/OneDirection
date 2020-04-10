import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Actions } from 'react-native-router-flux';

// import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Community extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         data: [],
    //         list: [],
    //         arr: [],
    //         color: [],
    //         yonghu: [],
    //         pic: [],
    //         name: ''
    //     };
    // }

    // componentDidMount() {

    //     let url = `http://139.155.44.190:3005/community/list`;
    //     let url2 = `http://139.155.44.190:3005/communitylike/list`;
    //     let url3 = `http://139.155.44.190:3005/users/getName`;
    //     let url4 = `http://139.155.44.190:3005/users/list`;
    //     fetch(url)
    //         .then((res) => {
    //             this.setState({
    //                 data: res.data
    //             })

    //             fetch(url4)
    //                 .then((res) => {
    //                     for (var i = 0; i < res.data.length; i++) {
    //                         res.data[i].pic = "http://139.155.44.190:3005" + res.data[i].pic
    //                     }
    //                     this.setState({
    //                         yonghu: res.data
    //                     })
    //                     var qrr = []
    //                     var a = 0;
    //                     for (var i = 0; i < this.state.data.length; i++) {
    //                         for (var j = 0; j < this.state.yonghu.length; j++) {
    //                             if (this.state.data[i].name == this.state.yonghu[j].name) {
    //                                 a = this.state.yonghu[j].pic;
    //                                 break;
    //                             }
    //                             else {
    //                                 a = 0;
    //                             }
    //                         }
    //                         if (a != 0) {
    //                             qrr.push(a)
    //                         }
    //                     }
    //                     this.setState({
    //                         pic: qrr
    //                     })
    //                 })
    //             fetch(url2)
    //                 .then((res) => {
    //                     this.setState({
    //                         list: res.data
    //                     })
    //                     var brr = [];
    //                     this.state.list.map((item) => {
    //                         if (item.name == this.state.name) {
    //                             brr.push(item);
    //                         }
    //                         this.setState({
    //                             list: brr
    //                         })
    //                     })
    //                     var arr = [];
    //                     var a = 0;
    //                     for (var i = 0; i < this.state.data.length; i++) {
    //                         for (var j = 0; j < this.state.list.length; j++) {
    //                             if (this.state.data[i].id == this.state.list[j].cid) {
    //                                 a = 1;
    //                                 break;
    //                             } else {
    //                                 a = 0;
    //                             }
    //                         }
    //                         if (a == 1) {
    //                             arr.push('red');
    //                             a = 0;
    //                         } else {
    //                             arr.push('black');
    //                         }
    //                     }
    //                     this.setState({
    //                         color: arr
    //                     })
    //                 })

    //         })

    //     fetch(url3)
    //         .then((res) => {
    //             this.setState({
    //                 name: res.data.name
    //             })
    //         })
    //     this.state.data.map((item) => {
    //         this.setState({
    //             arr: item.id
    //         })
    //     })

    // }
    // changeSearch = (e) => {
    //     if (e.target.value == "") {
    //         window.location.href = "http://localhost:3000/community";
    //     } else {
    //         this.setState({
    //             search: e.target.value
    //         })
    //     }
    // }
    // change = (id) => {
    //     var crr = this.state.color;
    //     if (this.state.color[id] == "black") {
    //         crr = this.state.color
    //         crr[id] = "red";
    //         this.setState({
    //             color: crr
    //         })
    //         let url9 = `http://139.155.44.190:3005/communitylike/add?cid=${this.state.data[id].id}&name=${this.state.name}`
    //         fetch(url9)
    //             .then((res) => {
    //             })
    //     }
    //     else if (this.state.color[id] == "red") {
    //         crr = this.state.color
    //         crr[id] = "black";
    //         this.setState({
    //             color: crr
    //         })
    //         let url10 = `http://139.155.44.190:3005/communitylike/delete?cid=${this.state.data[id].id}&name=${this.state.name}`
    //         fetch(url10)
    //             .then((res) => {
    //             })
    //     }
    // }
    // clickSend = (id) => {
    //     let url = `http://139.155.44.190:3005/community/select?content=${this.state.search}`;
    //     fetch(url)
    //         .then((res) => {
    //             if (res.data.false) {
    //             } else {
    //                 for (var i = 0; i < res.data.length; i++) {
    //                     res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
    //                 }
    //                 this.setState({
    //                     data: res.data
    //                 })
    //             }
    //         })
    // };
    // constructor() {
    //     super();
    //     this.state = {
    //         tits: [],
    //         page: 1,
    //     }
    // }
    // componentDidMount() {
    //     fetch('http://139.155.44.190:3005/community/list')
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({ tits: res.data });
    //         })
    // }
    constructor() {
        super();
        this.state = {
            data: [],
            user: [],
            page: 1,
        }
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/community/list`;
        let url2 = `http://139.155.44.190:3005/communitylike/list`;
        let url3 = `http://139.155.44.190:3005/users/getName`;//当前用户
        let url4 = `http://139.155.44.190:3005/users/list`;//所有用户列表

        fetch(url1)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res });
                // console.log('社区评论用户列表')

                console.log('社区评论用户列表1'+this.state.data)
                console.log('社区评论用户列表2'+res)


                fetch(url4)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({ user: res });
                        console.log('所有用户的头像ddddddddddddd:' + this.state.user);//所有用户的头像
                        for (var i = 0; i < res.length; i++) {
                            console.log(res.user)
                            res.data[i].pic = 'http://139.155.44.190:3005' + res.data[i].pic
                            // console.log('所有用户的头像:' + res.data[i].pic);//所有用户的头像
                        }
                        this.setState({
                            yonghu: res.data
                        })
                        var qrr = []
                        var a = 0;
                        for (var i = 0; i < this.state.data.length; i++) {
                            for (var j = 0; j < this.state.data.yonghu.length; j++) {
                                if (this.state.data[i].name == this.state.yonghu[j].name) {
                                    a = this.state.yonghu[j].pic;
                                    break;
                                }
                                else {
                                    a = 0;
                                }
                            }
                            if (a != 0) {
                                qrr.push(a)
                            }
                        }
                        this.setState({
                            pic: qrr
                        })
                    })
            })

    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#EFEFF4' }}>
                {/* 搜索 */}
                <View

                    style={styles.hearder}>
                    <View
                        style={styles.search}>
                        <Icon
                            style={{ fontSize: 28, marginLeft: 15 }} name='search' />
                        <TextInput
                            placeholder='搜索'
                            style={{ fontSize: 17, height: '100%' }}
                        />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>

                {/* 评论 */}
                <View>
                    {
                        this.state.data.map((item) => (
                            <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 20 * s }}>
                                <View style={styles.user}>
                                    <Image style={styles.avatar} source={require('../../assets/gonglve/服务.jpg')} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <Text style={{ fontSize: 22 * s }}>{item.name}</Text>
                                        <Text>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={styles.comment}>
                                    <Text style={{ fontSize: 22 * s }}>{item.content}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', height: 50, paddingTop: 10 * s, justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                    <Icon onPress={() => Actions.details()} name="comment" style={{ fontSize: 40 * s }}></Icon>
                                    <Icon name="heart" style={{ fontSize: 40 * s }}></Icon>
                                </View>
                            </View>
                        ))
                    }
                     {
                        this.state.user.map((item) => (
                            <View style={{ backgroundColor: '#ccc', width: '100%', marginBottom: 20 * s }}>
                                <View style={styles.user}>
                                    <Image style={styles.avatar} source={require('../../assets/gonglve/服务.jpg')} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <Text style={{ fontSize: 22 * s }}>{item.name}</Text>
                                        <Text>{item.pic}</Text>
                                    </View>
                                </View>
                                <View style={styles.comment}>
                                    <Text style={{ fontSize: 22 * s }}>{item.college}</Text>
                                </View>
                               
                            </View>
                        ))
                    }
                </View>
                </ScrollView>

                {/* 添加评论 */}
                <View style={styles.add}>
                    <Icon
                        style={{ fontSize: 80 * s, color: '#37376F' }}
                        name="plus"
                        onPress={() => Actions.add()}
                    />
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    hearder: {
        height: 60,
        backgroundColor: '#EFEFF4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        height: 40,
        width: 530 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.6,
        // backgroundColor: 'blue'
    },
    user: {
        flexDirection: 'row',
        height: 100 * s,
        // backgroundColor: 'red',
        // justifyContent:'center',
        alignItems: 'center'
    },
    avatar: {
        marginLeft: 20 * s,
        height: 70 * s,
        width: 70 * s,
        backgroundColor: 'yellow'
    },
    comment: {
        // backgroundColor: 'yellow',
        marginLeft: 30 * s,
        marginRight: 30 * s,
        marginTop: 10 * s,
        marginBottom: 20 * s
    },
    add: {
        position: "absolute",
        bottom: 30,
        right: 40,
        height: 50,
        width: 50,
        // backgroundColor:'red',
        justifyContent: "center",
    }
})