import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, AsyncStorage, Image, Dimensions, SafeAreaView, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class AddExp extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '',
            length: 0
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
                console.log("用户名：", this.state.username)
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
            let url = `http://139.155.44.190:3005/experience/add?content=${this.state.content}&name=${this.state.username}&time=${time}`;
            console.log(url);
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok) {
                        let url4 = `http://139.155.44.190:3005/experience/list`;
                        fetch(url4)
                            .then((res) => res.json())
                            .then((res) => {
                                var id = 0;
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == this.state.username && res[i].time == time) {
                                        id = res[i].id;
                                        break;
                                    }
                                }
                                let url6 = `http://139.155.44.190:3005/follow/list`;
                                fetch(url6)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        var arr = [];
                                        for (var j = 0; j < res.length; j++) {
                                            if (res[j].nname == this.state.username) {
                                                arr.push(res[j]);
                                            }
                                        }
                                        // console.log(arr, id);
                                        for (var z = 0; z < arr.length; z++) {
                                            var experience = arr[z].experience;
                                            if (experience == null || experience == "") {
                                                experience = id;
                                            }
                                            else {
                                                experience = experience + ',' + id;
                                            }
                                            let url46 = `http://139.155.44.190:3005/follow/changeEE?lname=${arr[z].lname}&nname=${this.state.username}&experience=${experience}`;
                                            fetch(url46)
                                                .then((res) => res.json())
                                                .then((res) => {

                                                });
                                        }

                                        Actions.pop();
                                    });
                            });
                    } else {
                        Alert.alert(res.msg);
                    }
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
        var param = 1;
        DeviceEventEmitter.emit('Erefresh', param);
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('ELrefresh', param);
        DeviceEventEmitter.emit('Erefresh', param);//经验分享
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#F1F2F4" }}>
                <View style={{
                   height: 300 * s,
                   borderBottomColor: '#F6F6F6',
                   borderBottomWidth: 1 * s
                }}>
                    <View style={{ width: width, height: 55 * s, backgroundColor: "#37376F", flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity
                            onPress={() => this.back()}
                            style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                            <Image style={{ height: 20 * s, width: 20 * s }} source={require('../../../assets/gonglve/left.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: 80 * s,
                                height: 40 * s,
                                borderRadius: 20 * s,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 5 * s,
                                position: 'absolute',
                                right: 0,
                                marginTop: 20 * s
                            }}
                            onPress={this.add}
                        >
                            <Text style={{ color: '#fff', fontSize: 18 * s }}>发布</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ backgroundColor: "#fff" }}>
                        <TextInput
                            placeholder="请输入文本内容，不超过500字"
                            onChangeText={this.con}
                            multiline={true}
                            autoFocus={true}
                            style={{ fontSize: 20 * s }}
                            placeholderTextColor="#AEAFAB"
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
            </SafeAreaView>
        )
    }
}
