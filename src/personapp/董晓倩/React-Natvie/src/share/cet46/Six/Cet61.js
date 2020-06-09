import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Tiezi extends Component {
    render() {
        return (
            <ScrollView >
                <Image source={require('../../../../assets/gonglve/fight.png')} style={{ height: 260, width: '100%' }} />
                <View style={{
                    height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, marginTop: 10, backgroundColor: "#fff", alignItems: "center"
                }}  >
                    <Icon name="bookmark" size={30} color="#5f6fcd" style={{ marginLeft: 30, }} />
                    <TouchableOpacity onPress={() => Actions.word6()} style={{ flexDirection: 'row', alignItems: "center" }}>
                        <View style={{ height: 60, width: "88%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, marginLeft: 45 }}>必背词汇 </Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff", alignItems: "center"
                }}  >
                    <Icon name="magic" size={30} color="#5f6fcd" style={{ marginLeft: 30, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => Actions.gaopin6()} style={{ flexDirection: 'row', alignItems: "center" }}>
                        <View style={{ height: 60, width: "88%", justifyContent: "center" }}>

                            <Text style={{ fontSize: 20, marginLeft: 40 }}>高频词汇 </Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff", alignItems: "center"
                }}  >
                    <Icon name="file-text-o" size={30} color="#5f6fcd" style={{ marginLeft: 30 }} />
                    <TouchableOpacity onPress={() => Actions.yuedu6()} style={{ flexDirection: 'row', alignItems: "center" }}>
                        <View style={{ height: 60, width: "88%" , justifyContent: "center"}}>

                            <Text style={{ fontSize: 20, marginLeft: 40 }}>阅读练习题 </Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff", alignItems: "center"
                }}  >
                    <Icon name="calendar-o" size={30} color="#5f6fcd" style={{ marginLeft: 30 }} />
                    <TouchableOpacity onPress={() => Actions.shiwu6()} style={{ flexDirection: 'row', alignItems: "center" }}>
                        <View style={{ height: 60, width: "88%", justifyContent: "center" }}>

                            <Text style={{ fontSize: 20, marginLeft: 40 }}>十五选十</Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: 60, width: '100%', flexDirection: 'row', borderTopColor: '#E9E9EF', borderTopWidth: 1, backgroundColor: "#fff", borderBottomColor: '#E9E9EF', borderBottomWidth: 1, alignItems: "center"
                }}  >
                    <Icon name="hand-o-right" size={30} color="#5f6fcd" style={{ marginLeft: 30 }} />
                    <TouchableOpacity onPress={() => Actions.zuowen()} style={{ flexDirection: 'row', alignItems: "center" }}>
                        <View style={{ height: 60, width: "88%", justifyContent: "center" }}>
                            <Text style={{ fontSize: 20, marginLeft: 40 }}>作文</Text>
                        </View>
                        <Icon name="chevron-right" size={20} color="#aaa" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

