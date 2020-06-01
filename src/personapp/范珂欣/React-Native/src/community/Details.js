import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Img from "./Img"
const { width, height } = Dimensions.get('window');
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
            isLoading: true,
            height: 0
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
                let url1 = `http://139.155.44.190:3005/learntalk/list`;
                let url2 = `http://139.155.44.190:3005/users/list`;
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({
                            pic: res,
                        });
                        fetch(url1)
                            .then((res) => res.json())
                            .then((res) => {
                                var arr = [];
                                console.log("aaa:" + this.state.page.head)
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
    release = () => {
        if (this.state.comment) {
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            console.log(time);
            var num = this.state.page.cnum;
            if (num == null || num == 0) {
                num = 1;
            } else {
                num = num + 1;
            }
            let url = `http://139.155.44.190:3005/learntalk/add?lid=${this.state.page.id}&name=${this.state.username}&content=${this.state.comment}&time=${time}`;
            let url11 = `http://139.155.44.190:3005/learn/change?cnum=${num}&lid=${this.state.page.id}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok) {
                    } else {
                        Alert.alert(res.msg);
                    }
                    fetch(url11)
                        .then((res) => res.json())
                        .then((res) => {
                            console.log(res);
                        })
                })
            var param = { "content": this.state.comment, "name": this.state.username, "time": time };
            DeviceEventEmitter.emit('pinglun', param);
            let url2 = `http://139.155.44.190:3005/users/list`;
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
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
                            if (this.state.lvnum == 15) {
                                Alert.alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 30) {
                                Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 45) {
                                Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 60) {
                                Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 75) {
                                Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 90) {
                                Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 105) {
                                Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 120) {
                                Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 135) {
                                Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                            }
                        }
                    })
                }
                )
        }
        else {
            Alert.alert("评论不能为空");
        }

    }
    delete = (idx) => {
        Alert.alert('确认要删除吗', '',
            [
                { text: "确认", onPress: this.opntion1.bind(this, (this.state.list[idx].id)) },
                { text: "取消", onPress: this.opntion2 }
            ]
        );
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
    person = (idx) => {
        var value = { name: this.state.list[idx].name, pic: this.state.list[idx].pic, level: this.state.list[idx].level, college: this.state.list[idx].college };
        AsyncStorage.setItem('details', JSON.stringify(value));
        Actions.person();
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('refresh', param);
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
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
                            borderRadius: 25 * s
                        }} source={{ uri: this.state.page.pic }} />
                        <Image style={{
                            height: 70 * s,
                            width: 70 * s,
                            borderRadius: 35 * s,
                            // backgroundColor:'green',
                            position: 'absolute',
                            top: 5,
                            left: 10
                        }}
                            source={{ uri: this.state.page.head }} />
                        <View style={{ marginLeft: 30 * s }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18 * s, color: '#37376F' }}>{this.state.page.name}</Text>
                                <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.page.level]} />
                            </View>
                            <Text>{this.state.page.time}</Text>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 30 * s,
                        marginRight: 30 * s,
                        marginBottom: 20 * s
                    }}
                    >
                        <Text style={{ fontSize: 18 * s }}>{this.state.page.content}</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    // height: 70 * s,
                    height: Math.max(70 * s, this.state.height),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginBottom: 5 * s
                }}>
                    <TextInput
                        style={{
                            // height: 100 * s,
                            height: Math.max(40 * s, this.state.height),
                            width: "80%",
                            padding: 0,
                            fontSize: 15 * s,
                            borderRadius: 10 * s,
                            backgroundColor: '#fff',
                            paddingLeft: 10 * s,
                        }}
                        clearButtonMode="while-editing"
                        placeholderTextColor='#e0e0e0'
                        placeholder="填写评论"
                        onChangeText={this.change}
                        multiline={true}
                        onContentSizeChange={(event) => {
                            this.setState({ height: event.nativeEvent.contentSize.height });
                        }}
                    />
                    <TouchableOpacity style={{
                        width: 60 * s,
                        height: 35 * s,
                        borderRadius: 10 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F'
                    }}
                        onPress={this.release}
                    >
                        <Text style={{ color: 'white', fontSize: 15 * s }}>发送</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ paddingLeft: 10 * s, fontSize: 16 * s, marginBottom: 5 * s }}>评论</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', borderBottomWidth: 1 * s, borderBottomColor: '#EEEEEE' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <TouchableOpacity onPress={this.person.bind(this, (idx))}>
                                            <Image style={{
                                                marginLeft: 20 * s,
                                                height: 50 * s,
                                                width: 50 * s,
                                                borderRadius: 25 * s,
                                                backgroundColor: 'yellow'
                                            }} source={{ uri: item.pic }} />
                                        </TouchableOpacity>
                                        <Image style={{
                                            height: 70 * s,
                                            width: 70 * s,
                                            borderRadius: 35 * s,
                                            // backgroundColor:'green',
                                            position: 'absolute',
                                            top: 5,
                                            left: 10
                                        }}
                                            source={{ uri: this.state.page.head }} />
                                        <View style={{ marginLeft: 30 * s, marginRight: 60 * s }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={this.state.page.name == item.name ? { fontSize: 15 * s, color: 'red', marginTop: 5 * s } : { fontSize: 15 * s, color: '#37376F', marginTop: 5 * s }}>{item.name}</Text>
                                                <Image style={{ height: 20 * s, width: 35 * s, marginLeft: 10 * s, marginTop: 5 * s }} source={Img['png' + item.level]} />
                                            </View>
                                            <Text style={{ fontSize: 18 * s, marginRight: 30 * s }}>{item.content}</Text>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 40 * s,
                        borderRadius: 15 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                        margin: 10 * s
                        // position: 'absolute',
                        // top: 0,
                        // right: 0
                    }}
                        onPress={() => this.back()}
                    >
                        <Text style={{ color: '#e8e8e8', fontSize: 20 * s }}>返回</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView >
        )
    }
}
