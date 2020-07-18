import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Four extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Nowadays, with the development of technology and economy, living conditions of youngster have been improved substantially. However, it is surprising that the level of their happiness does not grow correspondingly. In this essay, I will give possible reasons and solutions to this issue.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Firstly, as the young generation grow up and live in a time when there is much more abundant materials, they take for granted their high living standard and become less sensitive to any improvement in this regard. On the other hand, their spiritual need cannot satisfy due to the loss of traditional values. They strive for fame and profit and suffer from high stress every day, but get disoriented in a fast-changing world and have no idea about the ultimate goal of their lives.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In addition, as many young people were spoilt by their parents in their childhood, they become self-centered, inconsiderate and apathetic. All they care about is no more than their personal interests and feelings, instead of having a charitable heart for giving and helping others. Therefore, love and care, the key elements connecting people together emotionally, are fading. Therefore, young people gradually become indifferent from their friends and families, which then trapping them into negative emotions like loneliness, depression and anxiety.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`To address this problem, young people should realize that the main solution lies with their own change. They should shift their attention from the pursuit of fame and money to their families and a balanced life. Also, engaging in interpersonal activities like parties and sports with friends is an idea way that helping young generations recover their emotional pleasure and well-being back, because sharing true feelings, experience and inner-heart ideas with others is a wonderful means of relieving stress, mentally.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
