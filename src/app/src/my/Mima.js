import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';

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
            name:'',
            tel:''
        }
    }
    getNewPwd = (text) => {
        if (text !== '') {
            this.setState({
                newPwd: text,unum:0
            })
        }
    }
    getReNewPwd = (text) => {
        if (text !== '') {
            this.setState({
                reNewPwd: text,pnum:0
            })
        }
    }
    nameChange = (text) => {
        if (text !== '') {
            this.setState({
                name: text,vnum:0
            })
        }
    }
    telChange = (text) => {
        if (text !== '') {
            this.setState({
                tel: text,wnum:0
            })
        }
    }
    getRepwd = () => {
        fetch(`http://139.155.44.190:3005/users/judge?name=${this.state.name}&tel=${this.state.tel}`)
            .then(res => res.json())

            .then(
                
                data => {
                    this.setState({
                        name:this.state.name,
                        tel:this.state.tel
                    })
                    console.log(this.state.name)
                    console.log(this.state.tel)
                    if (this.state.name !== '' && this.state.tel !== '' && this.state.newPwd !== '' && this.state.reNewPwd !== '') {
                        if (data.ok == 1) {
                            fetch(`http://139.155.44.190:3005/users/alter?name=${this.state.name}&pwd=${this.state.newPwd}&tel=${this.state.tel}`)
                                .then(res => res.json())

                                .then(
                                    data => {
                                    }
                                )
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
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: '50%', width: '78%', backgroundColor: '#ffffff', marginLeft: '10%', marginTop: '10%',
                        borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                        borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2
                    }}>
                        <TextInput placeholder="请输入昵称" style={{ fontSize: 18 }} onChangeText={this.nameChange} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: '50%', width: '78%', backgroundColor: '#ffffff', marginLeft: '10%', marginTop: '10%',
                        borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                        borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2
                    }}>
                        <TextInput placeholder="请输入手机号" style={{ fontSize: 18 }} onChangeText={this.telChange} />
                    </View>

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: '50%', width: '78%', backgroundColor: '#ffffff', marginLeft: '10%', marginTop: '10%',
                        borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                        borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2
                    }}>
                        <TextInput placeholder="请输入新密码" style={{ fontSize: 18 }} onChangeText={this.getNewPwd} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: '50%', width: '78%', backgroundColor: '#ffffff', marginLeft: '10%', marginTop: '10%',
                        borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                        borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2
                    }}>
                        <TextInput placeholder="请再次输入新密码" style={{ fontSize: 18 }} onChangeText={this.getReNewPwd} />
                    </View>
                </View>
                {
                    this.state.unum == 0
                        ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 300, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入新密码！</Text></View>
                }
                {
                    this.state.pnum == 0
                        ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 390, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请再次输入新密码！</Text></View>
                }
                {
                    this.state.vnum == 0
                        ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 100, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入昵称！</Text></View>
                }
                {
                    this.state.wnum == 0
                        ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 200, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入手机号！</Text></View>
                }
                <View style={{ marginTop: '10%', marginLeft: '20%' }}>
                    <Button style={{ borderRadius: 20, width: '75%' }} onPress={this.getRepwd}>提交</Button>
                </View>

            </ScrollView>
        )
    }
}
