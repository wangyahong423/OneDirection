import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView, Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class OneCard extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: '100%',
                    height: 63 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>一卡通</Text>
                </View>
                <ImageBackground source={require('../../../assets/gonglve/yika.png')} style={styles.bgImg}>
                    <TouchableOpacity onPress={() => { Actions.activate() }} style={styles.activate}>
                        <Text style={{ fontSize: 20 * s, marginTop: 80 * s }}>一卡通激活</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.invest() }} style={styles.activate}>
                        <Text style={{ fontSize: 20 * s, marginTop: 80 * s }}>一卡通充值</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.loss() }} style={styles.activate}>
                        <Text style={{ fontSize: 20 * s, marginTop: 80 * s }}>一卡通挂失</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
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
        marginTop: '20%',
        opacity: 0.7,
    },

})