import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Wanxingtiankong extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center',marginTop:15, alignItems: 'center' }}>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 1</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Weighing yourself regularly is a wonderful way to stay aware of any significant  weight fluctuations  1  , when done too...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail1() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 2</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Why do people read negative Internet comments and do other things that will obviously ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail2() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 3</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;"The Internet affords anonymity to its users — a boon to privacy and freedom of speech. But that very anonymity is also behind...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail3() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}