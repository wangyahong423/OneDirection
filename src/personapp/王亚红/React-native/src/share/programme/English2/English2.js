import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class English2 extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize:30*s,fontStyle:'italic',color:'#37376F',marginTop:30*s}}>专项练习</Text>
                <View style={{ alignItems: 'center',marginTop:50*s }}>
                    <TouchableOpacity
                        style={[styles.box,{marginTop:'15%'}]}
                        onPress={() => Actions.wanxingtiankong()}
                    >
                        <View style={styles.circle}></View>
                        <View
                            style={styles.rectangle}
                        ><Text style={{ color: '#fff',marginLeft:20*s }}>完型填空</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => Actions.yuedu()}
                    >
                        <View style={styles.circle}></View>
                        <View
                            style={styles.rectangle}
                        ><Text style={{ color: '#fff',marginLeft:20*s }}>阅读理解</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => Actions.changnanju()}
                    >
                        <View style={styles.circle}></View>
                        <View
                            style={styles.rectangle}
                        ><Text style={{ color: '#fff',marginLeft:20*s }}>翻译</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    box: {
        width: '80%',
        height: 60 * s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom:40*s
    },
    circle:{
        width: 60 * s, 
        height: 60 * s, 
        backgroundColor: '#37376F', 
        borderRadius: 30 * s 
    },
    rectangle:{
        width: 311 * s, 
        height: 30 * s, 
        marginLeft: -3 * s, 
        backgroundColor: '#37376F', 
        justifyContent: 'center'
    }
})