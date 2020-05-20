import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, AsyncStorage, Dimensions, SafeAreaView, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '',
            length: 0,
            prompt: []
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
                // console.log("用户名：", this.state.username)
            });
    }
    con = (e) => {
        this.setState({ content: e });
        var length = e.length;
        // var length = 0;
        // for (var i = 0; i < e.length; i++) {
        //     if (32 <= e[i].charCodeAt() && e[i].charCodeAt() <= 126) {
        //         length++;
        //     }
        //     else {
        //         length = length + 2;
        //     }
        // }
        this.setState({ length: length });
        if (length > 500) {
            Alert.alert("文本内容超过上限！");
        }
    }
    add = () => {
        if (this.state.content) {
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            let url1 = `http://139.155.44.190:3005/users/list`;
            var card = '';
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].name == this.state.username) {
                            card = res[i].card;
                            break;
                        }
                    }
                    let url = `http://139.155.44.190:3005/learn/addLearn?content=${this.state.content}&name=${this.state.username}&time=${time}&card=${card}`;
                    console.log(url);
                    fetch(url)
                        .then((res) => res.json())
                        .then((res) => {
                            if (res.ok) {
                                Actions.pop();
                            } else {
                                Alert.alert(res.msg);
                            }
                        });
                });

            let url2 = `http://139.155.44.190:3005/users/list`;
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        lvlist: res
                    })
                    this.state.lvlist.map((item) => {
                        if (item.name == this.state.username) {
                            this.setState({
                                lvnum: item.lvnum + 2
                            })
                            let url3 = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                            fetch(url3)
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
                            else if (this.state.lvnum == 16) {
                                Alert.alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 30) {
                                Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 31) {
                                Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 45) {
                                Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 46) {
                                Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 60) {
                                Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 61) {
                                Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 75) {
                                Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 76) {
                                Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 90) {
                                Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 91) {
                                Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 105) {
                                Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 106) {
                                Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 120) {
                                Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 121) {
                                Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 135) {
                                Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 136) {
                                Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                            }
                        }
                    })
                })
        }
        else {
            Alert.alert("未填写内容")
        }
        var param = { "content": this.state.content, "name": this.state.username, "time": time };
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    height: 300 * s,
                    borderBottomColor: '#37376F',
                    borderBottomWidth: 1 * s
                }}
                >
                    <ScrollView>
                        <TextInput
                            placeholder="请输入文本内容，不超过500字"
                            onChangeText={this.con}
                            multiline={true}
                            autoFocus={true}
                            style={{ fontSize: 20 * s }}
                        />
                    </ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        right: 0,
                        bottom: 0
                    }}>
                        <Text style={{ fontSize: 20 * s, color: 'gray' }}>{this.state.length}</Text>
                        <Text style={{ fontSize: 20 * s }}>/500</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            width: 80 * s,
                            height: 40 * s,
                            borderRadius: 20 * s,
                            backgroundColor: '#37376F',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 5 * s,
                            position: 'absolute',
                            right: 0,
                            marginTop: 20 * s
                        }}
                        onPress={this.add}
                    >
                        <Text style={{ color: '#fff', fontSize: 17 * s }}>发布</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}
