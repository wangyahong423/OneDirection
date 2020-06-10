import React, { Component } from 'react'
import { View, TextInput, ImageBackground, AsyncStorage, Dimensions, SafeAreaView, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class AddNotes extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '',
            title: '',
            show: '',
            lvlist: '',
            length: 0,
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
    noteCon = (e) => {
        this.setState({ content: e });
    }
    titleCon = (e) => {
        this.setState({ title: e });
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
            if (this.state.title) {
                let url1 = `http://139.155.44.190:3005/notes/addNote?content=${this.state.content}&name=${this.state.username}&time=${time}&title=${this.state.title}&show=${this.state.title}`;
                fetch(url1)
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
                let url1 = `http://139.155.44.190:3005/notes/addNote?content=${this.state.content}&name=${this.state.username}&time=${time}&title=${this.state.title}&show=${this.state.content}`;
                fetch(url1)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.ok) {
                            Actions.pop();
                        } else {
                            Alert.alert(res.msg);
                        }
                    });
            }
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
            Alert.alert("不能保存空笔记")
        }
        var param = 1;
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/share/notes.png')}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity style={{ height: 50 * s, width: 30 * s, justifyContent: "center", alignItems: "center" }} onPress={() => Actions.pop()}>
                            <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "#54487D" }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50 * s, width: 50 * s, justifyContent: "center", alignItems: "center" }} onPress={this.add}>
                            <Icon name="ios-checkmark" style={{ fontSize: 50 * s, color: "#54487D" }} />
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        placeholder="标题"
                        placeholderTextColor='#666666'
                        style={{ fontSize: 20 * s }}
                        onChangeText={this.titleCon}
                    />
                    <TextInput
                        placeholder="输入笔记内容"
                        placeholderTextColor='#666666'
                        onChangeText={this.noteCon}
                        multiline={true}
                        autoFocus={true}
                        style={{ fontSize: 18 * s }}
                    />
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
