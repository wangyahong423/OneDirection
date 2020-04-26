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
    Alert,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Details1 extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            user: [],
            brr: [],
            pic: [],
            todo: [],
            img:[],
            username: '',
            content: ''
        }
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
        let id = this.props.navigation.state.params.id;
        let url1 = `http://139.155.44.190:3005/community/list`;
        let url2 = `http://139.155.44.190:3005/users/list`;//所有用户列表
        let url3 = `http://139.155.44.190:3005/communitytalk/list/`;//用户评论信息
        fetch(url1)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res })
                var brr = []
                this.state.data.map((item) => {
                    if (item.id === id) {
                        brr.push(item);
                    }
                    this.setState({
                        data: brr
                    })
                })
                fetch(url2)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({ user: res });
                        for (var i = 0; i < res.length; i++) {
                            res[i].pic = 'http://139.155.44.190:3005' + res[i].pic
                        }
                        var qrr = []
                        var a = 0;
                        for (var i = 0; i < this.state.data.length; i++) {
                            for (var j = 0; j < this.state.user.length; j++) {
                                if (this.state.data[i].name == this.state.user[j].name) {
                                    a = this.state.user[j].pic;
                                    break;
                                }
                                else {
                                    a = 0;
                                }
                            }
                            if (a != 0) {
                                qrr.push(a)//qrr是社区评论里面用户的头像
                            }
                        }
                        this.setState({
                            pic: qrr
                        })
                    })
                fetch(url3)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({ todo: res.communitytalk });
                        var arr = [];
                        this.state.todo.map((item) => {
                            if (item.cid == id) {
                                arr.push(item);
                            }
                            this.setState({ todo: arr })
                        })
                        console.log("输出todo",this.state.todo)
                        var qrr = []
                        var a = 0;
                        // for (var i = 0; i < this.state.data.length; i++) {
                            for (var j = 0; j < this.state.user.length; j++) {
                                if (this.state.todo.name == this.state.user[j].name) {
                                    a = this.state.user[j].pic;
                                    break;
                                }
                                else {
                                    a = 0;
                                }
                            }
                            if (a != 0) {
                                qrr.push(a)//qrr是社区评论里面用户的头像
                            }
                        // }
                        this.setState({
                            img: qrr
                        })
                    })

            })
    }
    changeText = (text) => {
        this.setState({ content: text })
    }
    add = () => {
        let id = this.props.navigation.state.params.id;
        if (this.state.content) {
            console.log(this.state.content)
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            this.setState({ time: time });
            let url = `http://139.155.44.190:3005/communitytalk/add?cid=${id}&content=${this.state.content}&name=${this.state.username}&time=${time}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok) {
                        Actions.pop();
                    } else {
                        Alert.alert(res.msg);
                    }
                });
        }
        else {
            Alert.alert("未填写内容")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.data.map((item, idx) => (
                        <View style={{ backgroundColor: '#fff', width: '100%' }}>
                            <View style={styles.user}>
                                <Image style={styles.avatar} source={{ uri: this.state.pic[idx] }} />
                                <View style={{ marginLeft: 30 * s }}>
                                    <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                    <Text>{item.time}</Text>
                                </View>
                            </View>
                            <View style={styles.comment}>
                                <Text style={{ fontSize: 18 * s }}>{item.content}</Text>
                            </View>
                        </View>
                    ))
                }
                <View style={{ flexDirection: 'row', marginTop: 10 * s, marginBottom: 10 * s }}>
                    <View style={{ width: 350 * s, marginLeft: 10 * s }}>
                        <TextInput
                            placeholder={'说点什么吧...'}
                            onChangeText={this.changeText}
                            style={{ backgroundColor: '#fff', borderRadius: 5 * s, fontSize: 15 * s }}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            width: 80 * s,
                            height: 44 * s,
                            borderRadius: 5 * s,
                            backgroundColor: '#37376F',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10 * s,
                            position: 'absolute',
                            right: 0,
                        }}
                        onPress={this.add}
                    >
                        <Text style={{ color: '#fff', fontSize: 16 * s }}>发送</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.todo.map((item, idx) => (
                        <View style={{ backgroundColor: "#fff", flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#E9E9EF" }}>
                            <View style={{ width: 60 * s }}>
                                <Image style={styles.avatar} source={{ uri: this.state.img[idx] }} />
                            </View>
                            <View style={{ marginLeft: 20 * s, marginTop: 10 * s, marginBottom: 10 * s, width: 385 * s, }}>
                                <Text style={{ fontSize: 16 * s, marginBottom: 5 * s }}>{item.name}</Text>
                                <Text style={{ fontSize: 16 * s }}>{item.content}</Text>
                                <Text style={{ fontSize: 14 * s, color: '#747475', marginTop: 10 * s }}>{item.time}</Text>
                            </View>
                        </View>

                    ))
                }

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
        width: 430 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.6,
    },
    user: {
        flexDirection: 'row',
        // height: 100 * s,
        alignItems: 'center'
    },
    comment: {
        marginLeft: 30 * s,
        marginRight: 30 * s,
        marginBottom: 20 * s
    },
    avatar: {
        marginLeft: 20 * s,
        height: 50 * s,
        width: 50 * s,
        marginTop: 10 * s,
        borderRadius: 25 * s,
        backgroundColor: 'yellow'
    },
    img: {
        marginLeft: 20 * s,
        height: 40 * s,
        width: 40 * s,
        marginTop: 10 * s,
        borderRadius: 20 * s,
        backgroundColor: 'yellow'
    },
    bottom: {
        flexDirection: 'row',
        height: 50,
        paddingTop: 10 * s,
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: "#EFEFF4"
    }
})