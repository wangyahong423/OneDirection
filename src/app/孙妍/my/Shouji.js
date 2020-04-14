import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';

export default class Shouji extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: '50%', width: '78%', backgroundColor: '#ffffff', marginLeft: '10%', marginTop: '10%',
                        borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                        borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2
                    }}>
                        <TextInput placeholder="请输入手机号" style={{ fontSize: 18 }} />
                    </View>
                    <View style={{ width: '25%', height: '10%', marginLeft: '-25%', marginTop: '12%' }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 18, borderRadius: 20,
                            borderBottomColor: '#e2e2e2', borderLeftColor: '#e2e2e2',
                            borderTopColor: '#e2e2e2', borderRightColor: '#e2e2e2', borderWidth: 2,
                        }}>获取验证码</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: '50%', width: '78%', backgroundColor: '#ffffff', marginLeft: '10%', marginTop: '10%',
                        borderBottomColor: '#e2e2e2', borderLeftColor: 'white',
                        borderTopColor: 'white', borderRightColor: 'white', borderWidth: 2
                    }}>
                        <TextInput placeholder="请输入验证码" style={{ fontSize: 18 }} />
                    </View>
                </View>
                <View style={{marginTop:'10%',marginLeft:'20%'}}>
                    <Button style={{ borderRadius: 20, width: '75%' }}>完成</Button>
                </View>

            </ScrollView>
        )
    }
}
