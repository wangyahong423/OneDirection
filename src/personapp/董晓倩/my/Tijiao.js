import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';
export default class Tijiao  extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{height:200,width:350,marginLeft:60,marginTop:40}}>
                    <Image source={require('../../assets/my2.png')} style={{width:350,height:200}}/>
                </View>
                <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 60, }}>校园新生通</Text>
                <View style={{ height: 150, width: 350, backgroundColor: '#ffffff', marginLeft: 60, marginTop: 60,backgroundColor:"#37376F"}}>
                    <Text style={{color:'white',fontSize:20,textAlign:'center',marginTop:40}}>提交成功!</Text>
                    <Text style={{color:'white',fontSize:20,textAlign:'center',marginTop:10}}>我们会尽快处理您的建议的!</Text>
                </View>
            </ScrollView>
        )
    }
}

