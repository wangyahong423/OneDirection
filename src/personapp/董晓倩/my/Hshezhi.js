import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';

export default class Hshezhi extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{ color: 'green', fontSize: 18, marginTop: '3%', marginLeft: '4%' }}>设置提醒的方式</Text>
                <View style={{
                    height: 90, width: '94%', marginTop: '2%', marginLeft: '3%',
                    flexDirection: 'row',
                    borderBottomColor: '#dedede', borderWidth: 2, borderTopColor: 'green',
                    borderLeftColor: '#eae9ef', borderRightColor: '#eae9ef',
                }}>
                    <Text style={{ fontSize: 40, marginLeft: '2%', marginTop: '3%' }}>声音</Text>
                    <Text style={{ marginLeft: '55%', marginTop: '6%', fontSize: 18 }}>条不会写</Text>
                </View>
                <View style={{
                    height: 90, width: '94%', marginTop: '2%', marginLeft: '3%',
                    flexDirection: 'row',
                }}>
                    <Text style={{ fontSize: 40, marginLeft: '2%', marginTop: '3%' }}>震动</Text>
                    <Text style={{ marginLeft: '55%', marginTop: '6%', fontSize: 18 }}>条不会写</Text>
                </View>
                <Text style={{ color: 'green', fontSize: 18, marginTop: '3%', marginLeft: '4%' }}>设置提醒的方式</Text>
                <View style={{
                    height: 90, width: '94%', marginTop: '2%', marginLeft: '3%',
                    flexDirection: 'row',
                    borderBottomColor: '#eae9ef', borderWidth: 2, borderTopColor: 'green',
                    borderLeftColor: '#eae9ef', borderRightColor: '#eae9ef',
                }}>
                    <Text style={{ fontSize: 40, marginLeft: '2%', marginTop: '3%' }}>提醒时间</Text>
                    <Text style={{ marginLeft: '36%', marginTop: '6%', fontSize: 18 }}>前一天9:00</Text>
                </View>
            </ScrollView>
        )
    }
}