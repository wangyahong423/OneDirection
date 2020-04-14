import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Yinsi extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{
                    height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 3, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }}>
                    <Text style={{ fontSize: 20, marginLeft: '8%', marginTop: 18 }} onPress={() => Actions.yinsi()}>允许别人评论我的分享</Text>
                    <Text style={{ fontSize: 20, marginLeft: '28%', marginTop: '4%' }}>条不会写</Text>
                </View>
                <View style={{
                    height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 3, borderTopColor: 'white',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",marginTop:'5%'
                }} >
                    <Text style={{ fontSize: 20, marginLeft: '8%', marginTop: 18 }} onPress={() => Actions.yinsi()}>允许别人查看我的分享</Text>
                    <Text style={{ fontSize: 20, marginLeft: '28%', marginTop: '4%' }}>条不会写</Text>
                </View>
            </ScrollView>
        )
    }
}

