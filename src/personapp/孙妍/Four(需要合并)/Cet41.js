import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tiezi extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#ffffff'}}>
                    <Image source={require('../../../../assets/gonglve/fight.png')} style={{ height: 223, width: '100%' }} />
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:40
                }}  >
                    <Icon name="bookmark" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.wordone()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>必备词汇 </Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon  name="magic" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.appear()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>高频词汇 </Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="file-text-o" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.readone()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>阅读练习题 </Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft:188, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="calendar-o" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.selectten1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>十五选十</Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="stack-overflow" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.selectfive1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>七选五</Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 230, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
}

