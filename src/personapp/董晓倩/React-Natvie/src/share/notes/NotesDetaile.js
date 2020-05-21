import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class NotesDetails extends Component {
    constructor() {
        super();
        this.state = {
            page: '',
            username: '',
            content: '',
            list: [],
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
                this.setState({
                    content: this.state.page.content,
                    title: this.state.page.title
                })
                this.setState({ isLoading: true })
            });
    }
    delete = (id) => {
        Alert.alert('确认要删除吗', '',
            [
                { text: "确认", onPress: this.opntion1.bind(this, id) },
                { text: "取消", onPress: this.opntion2 }
            ]
        );
    }
    opntion1 = (id) => {
        let url = `http://139.155.44.190:3005/notes/deleteNote?id=${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                Alert.alert(res.msg);
                var param = 1;
                DeviceEventEmitter.emit('refresh', param);
                Actions.pop()
            });
    }
    opntion2 = () => {
    }
    noteCon = (e) => {
        this.setState({ content: e });
    }
    titleCon = (e) => {
        this.setState({ title: e });
    }
    add = () => {
        if (this.state.content == this.state.page.content && this.state.title == this.state.page.title) {//没有修改内容
            Actions.pop()
        }
        else if (this.state.content) {//内容或者题目有修改,且内容不为空
            console.log("内容", this.state.content)
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            console.log(time)
            if (this.state.title != this.state.page.title && this.state.title && this.state.content == this.state.page.content) {//如果标题有修改且不为空,内容没修改
                let url1 = `http://139.155.44.190:3005/notes/change?content=${this.state.page.content}&time=${time}&title=${this.state.title}&show=${this.state.title}&id=${this.state.page.id}`;
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
            else if (this.state.content == this.state.page.content && !this.state.title) {//如果标题有修改为空,内容没修改
                let url1 = `http://139.155.44.190:3005/notes/change?content=${this.state.page.content}&time=${time}&title=${this.state.title}&show=${this.state.page.content}&id=${this.state.page.id}`;
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
            else if (this.state.content != this.state.page.content && this.state.content && this.state.title == this.state.page.title && this.state.page.show == this.state.page.title) {//如果内容修改且不为空,标题没有修改且显示标题
                let url1 = `http://139.155.44.190:3005/notes/change?content=${this.state.content}&title=${this.state.page.title}&time=${time}&show=${this.state.page.show}&id=${this.state.page.id}`;
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
            else if (this.state.content != this.state.page.content && this.state.content && this.state.title == this.state.page.title && this.state.page.show == this.state.page.content) {//如果内容修改且不为空,标题没有修改且显示内容
                let url1 = `http://139.155.44.190:3005/notes/change?content=${this.state.content}&title=${this.state.page.title}&time=${time}&show=${this.state.content}&id=${this.state.page.id}`;
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
            else if (this.state.title != this.state.page.title && this.state.content != this.state.page.content && this.state.title && this.state.content) {//标题和内容都有修改且都不为空
                let url1 = `http://139.155.44.190:3005/notes/change?content=${this.state.content}&time=${time}&title=${this.state.title}&show=${this.state.title}&id=${this.state.page.id}`;
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
            else if (this.state.title != this.state.page.title && this.state.content != this.state.page.content && !this.state.title) {//标题和内容都有修改，标题为空
                let url1 = `http://139.155.44.190:3005/notes/change?content=${this.state.content}&time=${time}&title=${this.state.title}&show=${this.state.content}&id=${this.state.page.id}`;
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
                })
        }
        else if (!this.state.content) {
            Alert.alert("不能保存空笔记")
        }
        var param = { "content": this.state.content, "name": this.state.username, "time": time, "title": this.state.title, "show": this.state.show };
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <ImageBackground style={{ flex: 1, width: '100%', height: height }} source={require('../../../assets/share/notes.jpg')}>
                    <ScrollView style={{ width: '100%', height: "100%" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginLeft: 10 * s, marginTop: 10 * s }} onPress={() => Actions.pop()}>
                                <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "#54487D" }} />
                            </Text>
                            <Text style={{ marginLeft: 350 * s, marginTop: 10 * s }} onPress={this.delete.bind(this, (this.state.page.id))}>
                                <Icon name="ios-trash" style={{ fontSize: 35 * s }} />
                            </Text>
                            <Text style={{ marginLeft: 20 * s }} onPress={this.add}>
                                <Icon name="ios-checkmark" style={{ fontSize: 50 * s, color: "#54487D" }} />
                            </Text>
                        </View>
                        <View>
                            {
                                this.state.page.title
                                    ? <TextInput onChangeText={this.titleCon} style={{ fontSize: 22 * s, fontWeight: "bold" }}>{this.state.page.title}</TextInput>
                                    : <TextInput onChangeText={this.titleCon} placeholder="标题" placeholderTextColor="#BBBBBB" style={{ fontSize: 22 * s, fontWeight: "bold" }}></TextInput>
                            }
                        </View>
                        <View>
                            <TextInput
                                multiline={true}
                                autoFocus={true}
                                onChangeText={this.noteCon} style={{ fontSize: 18 * s }}>{this.state.page.content}</TextInput>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView >
        )
    }
}
