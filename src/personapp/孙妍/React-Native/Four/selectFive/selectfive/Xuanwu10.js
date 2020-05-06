import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu10 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It has been said that when people succeed, it is because of hard work and that luck has nothing to do with success. Although I believe that hard work is very important and is the surest way to success for most people, I must disagree with this statement. It cannot be denied that luck often plays an important role in success. For example, many important discoveries have been made by accident. There have been many cases of researchers and inventors making major breakthroughs while they were actually trying to solve another problem or create a different device.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Furthermore, there is something to be said for simply being in the right place at the right time-perhaps meeting someone by chance who can offer a good job or rare opportunity. And of course, there are the rare examples of gamblers and lottery winners who beat the odds and achieve sudden and unexpected success.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`While the influence of luck cannot be ignored, this is not to say that one should depend on it and ignore the value of hard work. If one is willing to work hard, I believe that success will eventually be achieved, with or without the added benefit of luck. Moreover, hard work is often an essential ingredient of luck because it enables one to take advantage of a lucky encounter. If the scientist has not worked hard to develop his knowledge and skills, he may not recognize that lucky breakthrough when it comes along. Therefore, my suggestion is not to count on luck to bring you success. Instead, work hard and keep your eyes open for that lucky opportunity.`}
                        </Text>
                       
                    </View>
                </View>
            </ScrollView>
        )
    }
}
