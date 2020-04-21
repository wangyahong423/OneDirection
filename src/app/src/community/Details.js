import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, TextInput, Dimensions, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            page: '',
            username: '',
            comment: '',
            list: [],
            pic: [],
            lvlist: [],
            isLoading: true
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
        AsyncStorage.getItem('lPage')
            .then((value) => {
                this.setState({
                    page: JSON.parse(value).page
                });
                this.setState({ isLoading: true })
                let url1 = `http://139.155.44.190:3005/Communitytalk/list`;
                let url2 = `http://139.155.44.190:3005/users/list`;
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({
                            pic: res,
                            lvlist: res
                        });
                        this.state.lvlist.map((item) => {
                            if (item.name == this.state.username) {
                                this.setState({
                                    lvnum: item.lvnum + 1
                                })
                                let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                                fetch(url)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        if (res.ok) {
                                        } else {
                                            Alert.alert(res.msg);
                                        }
                                    });
                            }
                        })
                        fetch(url1)
                            .then((res) => res.json())
                            .then((res) => {
                                var arr = [];
                                res.communitytalk.forEach(item => {
                                    if (item.cid == this.state.page.id) {
                                        for (var i = 0; i < this.state.pic.length; i++) {
                                            if (item.name == this.state.pic[i].name) {
                                                item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
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
                this.listener = DeviceEventEmitter.addListener('comments', function (param) {
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            self.setState({
                                pic: res,
                                lvlist:res
                            });
                            self.state.lvlist.map((item) => {
                                if (item.name == self.state.username) {
                                    self.setState({
                                        lvnum: item.lvnum + 1
                                    })
                                    let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${self.state.lvnum}&name=${self.state.username}`;
                                    fetch(url)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            if (res.ok) {
                                            } else {
                                                Alert.alert(res.msg);
                                            }
                                        });
                                }
                            })
                            fetch(url1)
                                .then((res) => res.json())
                                .then((res) => {
                                    var arr = [];
                                    res.communitytalk.forEach(item => {
                                        if (item.cid == self.state.page.id) {
                                            for (var i = 0; i < self.state.pic.length; i++) {
                                                if (item.name == self.state.pic[i].name) {
                                                    item.pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
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
    componentWillUnmount() {
        this.listener.remove();
    }
    change = (e) => {
        this.setState({ comment: e });
    }
    release = () => {
        if (this.state.comment) {
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            let url = `http://139.155.44.190:3005/Communitytalk/add?cid=${this.state.page.id}
                &name=${this.state.username}&content=${this.state.comment}&time=${time}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok) {

                    } else {
                        Alert.alert(res.msg);
                    }
                })
            var param = { "content": this.state.comment, "name": this.state.username, "time": time };
            DeviceEventEmitter.emit('comments', param);
        }
        else {
            Alert.alert("评论不能为空");
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 5 * s }}>
                    <View style={styles.user}>
                        <Image style={styles.avatar} source={{ uri: this.state.page.pic }} />
                        <View style={{ marginLeft: 30 * s }}>
                            <Text style={{ fontSize: 18 * s }}>{this.state.page.name}</Text>
                            <Text>{this.state.page.time}</Text>
                        </View>
                    </View>
                    <View style={styles.comment}>
                        <Text style={{ fontSize: 18 * s }}>{this.state.page.content}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 * s, marginBottom: 10 * s }}>
                    <View style={{ width: 350 * s, marginLeft: 10 * s }}>
                        <TextInput
                            style={{ backgroundColor: '#fff', borderRadius: 5 * s, fontSize: 15 * s }}
                            clearButtonMode="while-editing"
                            placeholderTextColor='#e0e0e0'
                            placeholder="说点什么吧..."
                            onChangeText={this.change}
                        />
                    </View>
                    <TouchableOpacity style={styles.send} onPress={this.release}>
                        <Text style={{ color: '#fff', fontSize: 15 * s }}>发送</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item) => (
                                <View style={{ backgroundColor: "#fff", flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: "#E9E9EF" }}>
                                    <View style={{ width: 60 * s }}>
                                        <Image style={styles.avatar} source={{ uri: item.pic }} />
                                    </View>
                                    <View style={{ marginLeft: 20 * s, marginTop: 10 * s, marginBottom: 10 * s, width: 385 * s, }} >
                                        <Text style={{ fontSize: 15 * s, marginBottom: 5 * s }}>{item.name}</Text>
                                        <Text style={{ fontSize: 16 * s }}>{item.content}</Text>
                                        <Text style={{ fontSize: 14 * s, color: '#747475', marginTop: 10 * s }}>{item.time}</Text>
                                    </View>
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
    send: {
        width: 80 * s,
        height: 44 * s,
        borderRadius: 5 * s,
        backgroundColor: '#37376F',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10 * s,
        position: 'absolute',
        right: 0,
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