import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Person extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ height: 250, width: '100%' }}>
                    <Image source={require('../../assets/gonglve2.png')} />
                </View>
                <View style={{ width: '100%', height:470, backgroundColor: '#ffffff' }}>
                    <View style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                        <View style={{ width: 100, height: 100, position: "absolute", top: -50, left: 30 }}>
                            <Image source={require('../../assets/touxiang.png')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                        </View>
                        <Text style={{ position: 'absolute', left: 150, fontSize: 18, top: -3 }}>姓名</Text>
                        <Text style={{ position: 'absolute', left: 200, fontSize: 20, top: -3 }}>♂</Text>
                        <Text style={{ position: 'absolute', left: 150, top: 27, fontSize: 18 }}>河北师范大学软件学院</Text>
                    </View>

                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="star-o" size={30} color="#6d6d6d" style={{ marginLeft: 20,marginTop:10}} />
                        <Text style={{ fontSize: 20,marginLeft:40,marginTop:11}} onPress={()=>Actions.shoucang()}>我的收藏 </Text>
                        <Icon name="arrow-right" size={20} color="#6d6d6d" style={{marginLeft:260,marginTop:15}}/>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="hand-o-right" size={30} color="#6d6d6d" style={{ marginLeft: 20,marginTop:10}} />
                        <Text style={{ fontSize: 20,marginLeft:40,marginTop:11}} onPress={()=>Actions.tiezi()}>我的帖子</Text>
                        <Icon name="arrow-right" size={20} color="#6d6d6d" style={{marginLeft:262,marginTop:15}}/>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="group" size={25} color="#6d6d6d" style={{ marginLeft: 20,marginTop:10}} />
                        <Text style={{ fontSize: 20,marginLeft:40,marginTop:11}} onPress={()=>Actions.tongxun()}>通讯录</Text>
                        <Icon name="arrow-right" size={20} color="#6d6d6d" style={{marginLeft:285,marginTop:15}}/>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="smile-o" size={30} color="#6d6d6d" style={{ marginLeft: 20,marginTop:10}} />
                        <Text style={{ fontSize: 20,marginLeft:40,marginTop:11}} onPress={()=>Actions.guanyu()}>关于我们</Text>
                        <Icon name="arrow-right" size={20} color="#6d6d6d" style={{marginLeft:265,marginTop:15}}/>
                    </View>
                    <View style={{
                        height: 50, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                        borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1
                    }}>
                        <Icon name="user-o" size={30} color="#6d6d6d" style={{ marginLeft: 20,marginTop:10}} />
                        <Text style={{ fontSize: 20,marginLeft:40,marginTop:11}} onPress={()=>Actions.fankui()}>用户反馈</Text>
                        <Icon name="arrow-right" size={20} color="#6d6d6d" style={{marginLeft:265,marginTop:15}}/>
                    </View>
                    <View style={{ height: 50, width: '100%', flexDirection: 'row' }} >
                        <Icon name="cog" size={30} color="#6d6d6d" style={{ marginLeft: 20,marginTop:10}} />
                        <Text style={{ fontSize: 20,marginLeft:40,marginTop:11}} onPress={()=>Actions.shezhi()}>设置</Text>
                        <Icon name="arrow-right" size={20} color="#6d6d6d" style={{marginLeft:305,marginTop:15}}/>
                    </View>

                </View>

            </ScrollView>
        )
    }
}

