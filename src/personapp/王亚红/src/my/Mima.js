import React, { Component } from 'react';
import { View,  AsyncStorage, ScrollView, TextInput, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';

export default class Mima extends Component {
    constructor() {
        super();
        this.state = {
            newPwd: '',
            reNewPwd: ''
        }
    }
    getNewPwd = (text) => {
        this.setState({
            newPwd: text
        })
    }
    getReNewPwd = (text) => {
        this.setState({
            reNewPwd: text
        })
    }
    nameChange = (text) => {
        this.setState({
            name: text
        })
    }
    telChange = (text) => {
        this.setState({
            tel: text
        })
    }
    getRepwd = () => {
        fetch(`http://139.155.44.190:3005/users/judge?name=${this.state.name}&tel=${this.state.tel}`)
            .then(res => res.json())
            .then(
                data => {
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
                        Actions.login();
                    }
                }
            )

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
                <View style={{ marginTop: '10%', marginLeft: '20%' }}>
                    <Button style={{ borderRadius: 20, width: '75%' }} onPress={this.getRepwd}>提交</Button>
                </View>

            </ScrollView>
        )
    }
}
