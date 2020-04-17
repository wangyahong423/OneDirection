import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Zhanghao extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{
                    height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 3, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }}>
                    <Text style={{ fontSize: 20, marginLeft: '8%', marginTop: 18 }} onPress={() => Actions.shouji()}>手机号码</Text>
                    <Text style={{fontSize:20,marginLeft:'35%',marginTop:'4%'}}>***********</Text>
                    <Icon name="arrow-right" size={20} color="#6d6d6d" style={{ marginLeft:'5%', marginTop: 18 }} />
                </View>
                <View style={{
                    height: 70, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 3, borderTopColor: 'white',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }} >
                    <Text style={{ fontSize: 20, marginLeft: '8%', marginTop: 18 }} onPress={() => Actions.mima()}>密码重置</Text>
                    <Icon name="arrow-right" size={20} color="#6d6d6d" style={{ marginLeft: '60%', marginTop: 18 }} />
                </View>
            </ScrollView>
        )
    }
}

