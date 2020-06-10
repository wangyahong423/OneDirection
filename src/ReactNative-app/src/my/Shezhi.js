import React, { Component } from 'react'
import { Text, AsyncStorage, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
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
    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={{
                    height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}
                    onPress={() => Actions.mima()}
                >
                    <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >密码重置</Text>
                    <Icon name="chevron-right" style={{ marginRight: 20 * s }} size={20} color="#aaa" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}
                onPress={() => Actions.guanyu()}
                >
                    <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >关于我们</Text>
                    <Icon name="chevron-right" style={{ marginRight: 20 * s }} size={20} color="#aaa" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}
                onPress={() => Actions.fankui()}
                >
                    <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >用户反馈</Text>
                    <Icon name="chevron-right" style={{ marginRight: 20 * s }} size={20} color="#aaa" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: 50 * s,
                        backgroundColor: '#37376F',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15 * s,
                        marginLeft: '25%'
                    }}
                    onPress={this.outlogin}>
                    <Text style={{ color: '#ffffff', fontSize: 18*s }}>退出登录</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

