import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tiezi extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'#ffffff'}}>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.wordone()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>必备词汇 </Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon  name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.appear()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>高频词汇 </Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.readone()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>阅读练习题 </Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.cet41()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>十五选十</Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                }}  >
                    <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.cet41()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 40, marginTop: 11 }}>七选五</Text>
                        <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 210, marginTop: 15 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

