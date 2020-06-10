import React, { Component } from 'react';
import { View, AsyncStorage, ScrollView, TextInput, Text, ImageBackground, Dimensions, TouchableOpacity ,SafeAreaView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const s = width / 460;
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
            <SafeAreaView style={{ flex:1}}>
                <ImageBackground style={{ flex: 1, width: width, height: height }} source={require('../../assets/login/login8.png')}>
                    <Text onPress={() => Actions.login()} style={{ color: "#fff", fontSize: 40 * s, marginTop: 15 * s, marginLeft: width * 0.9 }} name="ios-close" >×</Text>
                    <View style={{ width: width, height: 50 * s, alignItems: "center", marginTop: height * 0.1 }}>
                        <Text style={{ color: "#fff", fontSize: 40 * s }}>Reset Password</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: height * 0.05 }}>
                        <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                            <Icon name="user-o" color="#fff" size={25 * s} style={{ marginLeft: 15 * s }} />
                            <TextInput onChangeText={this.nameChange} placeholder="请输入用户名" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                            <Icon name="mobile-phone" color="#fff" size={34 * s} style={{ marginLeft: 15 * s }} />
                            <TextInput onChangeText={this.telChange} placeholder="请输入手机号码" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                            <Icon name="lock" color="#fff" size={30 * s} style={{ marginLeft: 15 * s }} />
                            <TextInput onChangeText={this.getNewPwd} secureTextEntry={true} placeholder="请输入新密码" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                            <Icon name="lock" color="#fff" size={30 * s} style={{ marginLeft: 15 * s }} />
                            <TextInput onChangeText={this.getReNewPwd} secureTextEntry={true} placeholder="请再次确认新密码" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" ,borderRadius: 23 * s, width: width * 0.6, backgroundColor: '#4874E1', height: 46 * s, marginTop: 50 * s }} onPress={this.getRepwd}>
                            <Text style={{ color: 'white' }}>重置密码</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
