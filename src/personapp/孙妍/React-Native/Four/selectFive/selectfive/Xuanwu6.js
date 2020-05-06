import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu6 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Everyone may encounter a scene when he orshe wonders what the meaning and purpose of lifeis. Answers to this question vary from person toperson. As for me, I agree with the view that themeaning of life is to discover your gift and thepurpose of life is to make the best of it.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　On one hand, one's gift could be the source of his inner happiness, providing spiritualimpetus and correct orientation. Take the world-renowned Chinese pianist Lang Lang as anexample. His gift was noticed before he was 3 years old, which laid the foundation of hisglorious life. On the other hand, proper use of talent helps people to realize their value in apositive way, thus making contribution to the society as a whole. For instance, Isaac Newtonmade a universally amazing discovery by digging into his gift and finding the Newton's law ofgravitation.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　In conclusion, let's search for our true gift and utilize it to the fullest to achieve a happyand valuable life.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
