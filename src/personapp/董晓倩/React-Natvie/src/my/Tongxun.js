import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';
export default class Tongxun extends Component {
    render() {
        return (
            <ScrollView>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：赵月霞</Text>
                    <Text>80789909</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：蒋春澜</Text>
                    <Text>80789919</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：戴建兵</Text>
                    <Text>80789989</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：陆军恒</Text>
                    <Text>80789979</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：邓明立</Text>
                    <Text>80789819</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：李 榕</Text>
                    <Text>80789829</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：张士欢</Text>
                    <Text>80799839</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：王大勇</Text>
                    <Text>80789849</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：刘敬泽</Text>
                    <Text>80789859</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校领导：郑振峰</Text>
                    <Text>80799869</Text>
                </Button>
                
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室:</Text>
                    <Text>80787777</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室（传真）:</Text>
                    <Text>80788888</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：主任</Text>
                    <Text>80789801</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：副主任</Text>
                    <Text>80789802</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：党务</Text>
                    <Text>80789803</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：支秘</Text>
                    <Text>80789804</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：机要</Text>
                    <Text>80789805</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：文印</Text>
                    <Text>80789806</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：收发</Text>
                    <Text>80789808</Text>
                </Button>
                <Button style={{flexDirection:'row'}}>
                    <Text>学校办公室：收发</Text>
                    <Text>80789809</Text>
                </Button>
            </ScrollView>
        )
    }
}

