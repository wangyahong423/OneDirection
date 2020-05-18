import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Shezhi extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            islogin:false
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
                            console.log('成功')
                        }
                    })
            });
        AsyncStorage.setItem('username','');
        AsyncStorage.setItem('pwd','');
        AsyncStorage.setItem('pic','');
        AsyncStorage.setItem('college','');
        Actions.login(); 
    } 
    render() {
        return (
            <ScrollView>
                <View style={{
                    height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }}>
                    <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} onPress={() => Actions.mima()}>密码重置</Text>
                    <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 300, marginTop: 19 }} />
                </View>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: 60 * s,
                        backgroundColor: '#37376F',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15 * s,
                        marginLeft: '25%'
                    }}
                    onPress={this.outlogin}>
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>退出登录</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

