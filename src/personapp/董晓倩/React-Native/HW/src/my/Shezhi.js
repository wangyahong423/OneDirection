import React, { Component } from 'react'
import { Text, AsyncStorage, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, View, Image, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Shezhi extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            islogin: false
        }
    }
    outlogin = () => {
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
        AsyncStorage.setItem('username', '');
        AsyncStorage.setItem('pwd', '');
        AsyncStorage.setItem('pic', '');
        AsyncStorage.setItem('college', '');
        Actions.login();
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
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
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>设置</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity style={{
                        height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                        borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                    }}
                        onPress={() => Actions.mima()}
                    >
                        <Text style={{ fontSize: 21 * s, lineHeight: 60 * s, marginLeft: 30 * s }} >密码重置</Text>
                        <Icon name="chevron-right" style={{ marginRight: 20 * s }} size={30 * s} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                        borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                    }}
                        onPress={() => Actions.guanyu()}
                    >
                        <Text style={{ fontSize: 21 * s, lineHeight: 60 * s, marginLeft: 30 * s }} >关于我们</Text>
                        <Icon name="chevron-right" style={{ marginRight: 20 * s }} size={30 * s} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                        borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                    }}
                        onPress={() => Actions.fankui()}
                    >
                        <Text style={{ fontSize: 21 * s, lineHeight: 60 * s, marginLeft: 30 * s }} >用户反馈</Text>
                        <Icon name="chevron-right" style={{ marginRight: 20 * s }} size={30 * s} color="#aaa" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '60%',
                            height: 60 * s,
                            backgroundColor: '#37376F',
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 15 * s,
                            marginLeft: '20%'
                        }}
                        onPress={this.outlogin}>
                        <Text style={{ color: '#ffffff', fontSize: 21 * s }}>退出登录</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

