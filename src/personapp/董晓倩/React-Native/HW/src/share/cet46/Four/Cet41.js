import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TouchableOpacity, SafeAreaView ,Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
const s = width / 460;
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tiezi extends Component {
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
                        <Image source={require('../../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>四级资料</Text>
                </View>
                <ScrollView >
                    <Image source={require('../../../../assets/gonglve/fight.png')} style={{ height: 260, width: '100%' }} />
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, marginTop: 10, backgroundColor: "#fff",justifyContent:"center",alignItems:"center"
                    }}  >
                        <Icon name="bookmark" size={30*s} color="#5f6fcd" style={{ marginLeft: 40*s }} />
                        <TouchableOpacity onPress={() => Actions.wordone()} style={{ flexDirection: 'row', alignItems: "center" }}>
                            <View style={{ height: 60, width: "88%", justifyContent: "center" }}>
                                <Text style={{ fontSize: 22*s,marginLeft: 30*s }}>必备词汇 </Text>
                            </View>
                            <Icon name="chevron-right" size={20*s} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff",justifyContent:"center",alignItems:"center"
                    }}  >
                        <Icon name="magic" size={30*s} color="#5f6fcd" style={{ marginLeft: 40*s }} />
                        <TouchableOpacity onPress={() => Actions.appear()} style={{ flexDirection: 'row', alignItems: "center" }}>
                            <View style={{ height: 60, width: "88%", justifyContent: "center" }}>

                                <Text style={{ fontSize: 22*s,  marginLeft: 30*s }}>高频词汇 </Text>
                            </View>
                            <Icon name="chevron-right" size={20*s} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff",justifyContent:"center",alignItems:"center"
                    }}  >
                        <Icon name="file-text-o" size={30*s} color="#5f6fcd" style={{ marginLeft: 40*s }} />
                        <TouchableOpacity onPress={() => Actions.readone()} style={{ flexDirection: 'row', alignItems: "center" }}>
                            <View style={{ height: 60, width: "88%", justifyContent: "center" }}>

                                <Text style={{ fontSize: 22*s,  marginLeft: 30*s }}>阅读练习题 </Text>
                            </View>
                            <Icon name="chevron-right" size={20*s} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff",justifyContent:"center",alignItems:"center"
                    }}  >
                        <Icon name="calendar-o" size={30*s} color="#5f6fcd" style={{ marginLeft: 40*s }} />
                        <TouchableOpacity onPress={() => Actions.selectten1()} style={{ flexDirection: 'row', alignItems: "center" }}>
                            <View style={{ height: 60, width: "88%", justifyContent: "center" }}>

                                <Text style={{ fontSize: 22*s,  marginLeft: 30*s }}>十五选十</Text>
                            </View>
                            <Icon name="chevron-right" size={20*s} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff", borderBottomColor: '#E9E9EF', borderBottomWidth: 1,justifyContent:"center",alignItems:"center"
                    }}  >
                        <Icon name="stack-overflow" size={30*s} color="#5f6fcd" style={{ marginLeft: 40*s }} />
                        <TouchableOpacity onPress={() => Actions.selectfive1()} style={{ flexDirection: 'row', alignItems: "center" }}>
                            <View style={{ height: 60, width: "88%", justifyContent: "center" }}>

                                <Text style={{ fontSize: 22*s, marginLeft: 30*s, marginTop: 11 }}>四级作文</Text>
                            </View>
                            <Icon name="chevron-right" size={20*s} color="#aaa" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

