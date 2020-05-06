import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu16 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As a product of modern computer and theInternet, online games have become very popular among college students. A great manystudents have enjoyed great pleasure and satisfaction from these games. But as we see,some students lacking self-discipline are too much indulged in these games so that their healthand academic performances are affected. This phenomenon has caused much worry fromthe teachers and parents.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`However, some others argue that online games are not always harmful. They can train theability of youngsters to respond to things quickly. Moreover, they can stimulate theirimagination and their interest in computer science. More importantly, it does bring collegestudents much pleasure and release their pressure greatly.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`From my point of view, online games are a wonderful entertainment if you play them in areasonable way. When they interfere too much with your study, it is better for you to givethem up at once. Yet if you have enough self-control over them, you can certainly obtain realpleasure and benefit a lot from them.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
