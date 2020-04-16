import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';
export default class Fankui  extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{height:200,width:350,marginLeft:60,marginTop:40}}>
                    <Image source={require('../../assets/my2.png')} style={{width:350,height:200}}/>
                </View>
                <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 40, fontWeight: 'bold' }}>校园新生通</Text>
                <View style={{ height: 70, width: 350, backgroundColor: '#ffffff', marginLeft: 60, marginTop: 30,
                    borderBottomColor: 'gray', borderLeftColor: 'gray',
                    borderTopColor: 'gray', borderRightColor: 'gray', borderWidth:1}}>
                    <TextInput placeholder="请输入您的联系方式(邮箱或电话)" style={{marginTop:10}}/>
                </View>
                <View style={{ height: 150, width: 350, backgroundColor: '#ffffff', marginLeft: 60, marginTop: 30,
                    borderBottomColor: 'gray', borderLeftColor: 'gray',
                    borderTopColor: 'gray', borderRightColor: 'gray', borderWidth:1}}>
                    <TextInput placeholder="有什么想说的尽管说吧..." style={{marginTop:10}}/>
                </View>
                <Button style={{width:100,backgroundColor:'#37476F',marginLeft:180,marginTop:40}} onPress={()=>Actions.tijiao()}>
                    提交
                </Button>
            </ScrollView>
        )
    }
}

