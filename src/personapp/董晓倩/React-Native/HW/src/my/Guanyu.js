import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Guanyu extends Component {
    constructor() {
        super();
        this.state = {
            newPwd: '',//tel
            reNewPwd: '',//content
            unum: 0,
            pnum: 0,
            vnum: 0,
            wnum: 0,
            name: '',
            tel: '',
            username: '',
            islogin: false
        }
    }
    getNewPwd = (text) => {
        if (text !== '') {
            this.setState({
                newPwd: text, unum: 0
            })
        }
    }
    getReNewPwd = (text) => {
        if (text !== '') {
            this.setState({
                reNewPwd: text, pnum: 0
            })
        }
    }
    nameChange = (text) => {
        if (text !== '') {
            this.setState({
                name: text, vnum: 0
            })
        }
    }
    telChange = (text) => {
        if (text !== '') {
            this.setState({
                tel: text, wnum: 0
            })
        }
    }
    getRepwd = () => {
        fetch(`http://139.155.44.190:3005/users/judge?name=${this.state.name}&tel=${this.state.tel}`)
            .then(res => res.json())
            .then(
                data => {
                    this.setState({
                        name: this.state.name,
                        tel: this.state.tel
                    })
                    if (this.state.name !== '' && this.state.tel !== '' && this.state.newPwd !== '' && this.state.reNewPwd !== '') {
                        if (data.ok == 1) {
                            fetch(`http://139.155.44.190:3005/users/alter?name=${this.state.name}&pwd=${this.state.newPwd}&tel=${this.state.tel}`)
                                .then(res => res.json())
                                .then(
                                    data => {
                                    }
                                )
                            AsyncStorage.getItem('username')
                                .then((res) => {
                                    let name = { username: res }
                                    this.setState({
                                        username: name.username
                                    })
                                    let url1 = `http://139.155.44.190:3005/users/exitLogin?name=${this.state.username}&islogin=${this.state.islogin}`;
                                    fetch(url1)
                                        .then(res => res.json())
                                        .then((res) => {
                                            if (res.err) {
                                            } else {
                                            }
                                        })
                                });
                            window.alert("修改成功！");
                            AsyncStorage.setItem('username', '')
                            AsyncStorage.setItem('pwd', '');
                            AsyncStorage.setItem('pic', '');
                            AsyncStorage.setItem('college', '');
                            Actions.login();
                        }
                    }

                    else if (this.state.name == '') {
                        this.setState({
                            vnum: 1
                        })
                    }
                    else if (this.state.tel == '') {
                        this.setState({
                            wnum: 1
                        })
                    }
                    else if (this.state.newPwd == '') {
                        this.setState({
                            unum: 1
                        })
                    }
                    else if (this.state.reNewPwd == '') {
                        this.setState({
                            pnum: 1
                        })
                    }

                })
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1, alignItems: "center" }} source={require('../../assets/community/img15.png')}>
                    <View style={{
                        width: '100%',
                        height: 63 * s,
                        backgroundColor: '#37376F',
                        alignItems: 'center',
                        justifyContent: "center",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity
                            onPress={() => this.back()}
                            style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                            <Image source={require('../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                        </TouchableOpacity>
                        <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>关于我们</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 30 * s, marginTop: 100, fontWeight: 'bold' }}>校园新生通</Text>
                    <View style={{
                        height: 200, width: 300, backgroundColor: '#ffffff', marginTop: 100,
                        borderBottomColor: 'gray', borderLeftColor: 'gray',
                        borderTopColor: 'gray', borderRightColor: 'gray', borderWidth: 1
                    }}>
                        <Text style={{ marginLeft: 70, fontSize: 20, marginTop: 25 }}>团队:One Direction</Text>
                        <Text style={{ marginLeft: 40, fontSize: 20, marginTop: 10 }}>微信公众号:One Dircetion</Text>
                        <Text style={{ marginLeft: 80, fontSize: 20, marginTop: 10 }}>版本信息:1.0.1</Text>
                        <Text style={{ marginLeft: 45, fontSize: 20, marginTop: 10 }}>意见联系:88888888888</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 250, color: 'gray' }}>最终解释权归本APP开发团队所有</Text>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

