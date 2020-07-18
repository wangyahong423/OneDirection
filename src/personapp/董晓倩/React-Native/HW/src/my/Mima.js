import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions, TextInput, SafeAreaView, Image, ImageBackground, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Mima extends Component {
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
                        <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>密码重置</Text>
                    </View>
                    <View style={{ flexDirection: 'row', height: 60 * s, width: width, alignItems: "center", justifyContent: "center", marginTop: 150 * s }}>
                        <View style={{
                            height: 55 * s, width: width * 0.8, backgroundColor: '#ffffff',
                            borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                            borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2,
                        }}>
                            <TextInput
                                placeholderTextColor={'#666666'}
                                placeholder="请输入昵称" style={{ fontSize: 18 * s }}
                                onChangeText={this.nameChange} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 60 * s, width: width, alignItems: "center", justifyContent: "center", marginTop: 30 * s }}>
                        <View style={{
                            height: 55 * s, width: width * 0.8, backgroundColor: '#ffffff',
                            borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                            borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2,
                        }}>
                            <TextInput
                                placeholderTextColor={'#666666'}
                                placeholder="请输入手机号" style={{ fontSize: 18 * s }}
                                onChangeText={this.telChange} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 60 * s, width: width, alignItems: "center", justifyContent: "center", marginTop: 30 * s }}>
                        <View style={{
                            height: 55 * s, width: width * 0.8, backgroundColor: '#ffffff',
                            borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                            borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2,
                        }}>
                            <TextInput
                                placeholderTextColor={'#666666'}
                                placeholder="请输入新密码" style={{ fontSize: 18 * s }}
                                onChangeText={this.getNewPwd} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', height: 60 * s, width: width, alignItems: "center", justifyContent: "center", marginTop: 30 * s }}>
                        <View style={{
                            height: 55 * s, width: width * 0.8, backgroundColor: '#ffffff',
                            borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                            borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2,
                        }}>
                            <TextInput
                                placeholderTextColor={'#666666'}
                                placeholder="请再次输入新密码" style={{ fontSize: 18 * s }}
                                onChangeText={this.getReNewPwd} />
                        </View>
                    </View>
                    {
                        this.state.unum == 0
                            ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                            : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 435 * s, left: 100 * s }}><Text style={{ color: 'red', fontSize: 13 }}>请输入新密码！</Text></View>
                    }
                    {
                        this.state.pnum == 0
                            ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                            : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 525 * s, left: 100 * s }}><Text style={{ color: 'red', fontSize: 13 }}>请再次输入新密码！</Text></View>
                    }
                    {
                        this.state.vnum == 0
                            ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                            : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 255 * s, left: 100 * s }}><Text style={{ color: 'red', fontSize: 13 }}>请输入昵称！</Text></View>
                    }
                    {
                        this.state.wnum == 0
                            ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                            : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 345 * s, left: 100 * s }}><Text style={{ color: 'red', fontSize: 13 }}>请输入手机号！</Text></View>
                    }
                    <TouchableOpacity
                        style={{
                            width: '50%',
                            height: 60 * s,
                            backgroundColor: '#37376F',
                            marginTop: 80 * s,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={this.getRepwd}>
                        <Text style={{ color: '#ffffff', fontSize: 21 * s }}>提交</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
