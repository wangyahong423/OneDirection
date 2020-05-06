import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';

export default class Xiaoxi extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{
                    height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 3, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }}>
                    <Text style={{ fontSize: 22, marginLeft: '8%', marginTop: '3%' }} onPress={() => Actions.hshezhi()}>好物分享</Text>
                    <Text style={{color:'#666666',fontSize:18,marginLeft:'50%',marginTop:'4%'}}>提醒关闭</Text>
                </View>
                <Text style={{color:'#666666',marginLeft:'10.5%',marginTop:'-5%'}}>声音、震动</Text>
                <Text style={{color:'#666666',marginLeft:'9%',marginTop:'1%'}}>开启后，可及时收到好物分享的消息</Text>
                <View style={{
                    height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 3, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }}>
                    <Text style={{ fontSize: 22, marginLeft: '8%', marginTop: '3%' }} onPress={() => Actions.xshezhi()}>学习交流</Text>
                    <Text style={{color:'#666666',fontSize:18,marginLeft:'50%',marginTop:'4%'}}>提醒关闭</Text>
                </View>
                <Text style={{color:'#666666',marginLeft:'10.5%',marginTop:'-5%'}}>声音、震动</Text>
                <Text style={{color:'#666666',marginLeft:'9%',marginTop:'1%'}}>开启后，可及时收到学习交流的消息</Text>
            </ScrollView>
        )
    }
}
