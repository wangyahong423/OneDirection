import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Actions, Image, Animated, TouchableOpacity, ImageBackground } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Achievement extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.name} >
                    <Text style={{ fontWeight: "bold", fontSize: 20 ,color:'#eee225' }}>国&nbsp;家&nbsp;级&nbsp;教&nbsp;学&nbsp;成&nbsp;果&nbsp;奖</Text>
                </View>
                <Animated.View style={{ height: 555*s, width: '100%' }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginTop: 10 * s, marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement1.png')} />
                </Animated.View>
                <View style={[styles.name,{marginTop:-20*s}]} >
                    <Text style={{ fontWeight: "bold", fontSize: 20,color:'#eee225' }}>省&nbsp;级&nbsp;教&nbsp;学&nbsp;成&nbsp;果&nbsp;奖</Text>
                </View>
                <View style={{ height: 605*s, width: '100%' }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginTop: 10 * s, marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement2.png')} />
                </View>
                <View style={{ height: 625*s, width: '100%',marginTop:-48*s }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement3.png')} />
                </View>
                <View style={{ height: 605*s, width: '100%' ,marginTop:-70*s }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginTop: 10 * s, marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement4.png')} />
                </View>
                <View style={{ height: 605*s, width: '100%' ,marginTop:-58*s  }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginTop: 10 * s, marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement5.png')} />
                </View>
                <View style={{ height: 705*s, width: '100%' ,marginTop:-58*s  }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginTop: 10 * s, marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement6.png')} />
                </View>
                <View style={{ height: 154*s, width: '100%'  ,marginTop:-69*s }}>
                    <ImageBackground style={{ height: '95%', width: '98%', marginTop: 10 * s, marginLeft: '2%' }} source={require('../../../assets/gonglve/achievement7.png')} />
                </View>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    name: {
        height: 40 * s,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        height: '100%',
        width: '100%'
    }
})