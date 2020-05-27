import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class OneCard extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../assets/gonglve/yika.png')} style={styles.bgImg}>
                <TouchableOpacity onPress={() => { Actions.activate() }} style={styles.activate}>
                    <Text style={{ fontSize: 19, marginTop: 80 }}>一卡通激活</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.invest() }} style={styles.invest}>
                    <Text style={{ fontSize: 19, marginTop: 55 }}>一卡通充值</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.loss() }} style={styles.loss}>
                    <Text style={{ fontSize: 19, marginTop: 55 }}>一卡通挂失</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

let styles = StyleSheet.create({
    bgImg: {
        height: '100%',
        width: '100%',
    },
    activate: {
        height: 90 * s,
        width: 140 * s,
        borderRadius: 45 * s,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '17%',
        marginTop: '30%',
        opacity: 0.7
    },
    invest: {
        height: 90 * s,
        width: 140 * s,
        borderRadius: 45 * s,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '17%',
        marginTop: '20%',
        opacity: 0.7
    },
    loss: {
        height: 90 * s,
        width: 140 * s,
        borderRadius: 45 * s,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '17%',
        marginTop: '20%',
        opacity: 0.7
    }
})