import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu7 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In recent years there has been a dramatic rise in the cell phones, which are now essentialto millions of people as a convenient form of communication. In 2004 the number reached315,000,000, with an average annual increase at 57,500,000.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Some people can now no longer imagine life without their cell phones. The fact that theyare so popular proves that they are useful and convenient. Cell phones enable people toeasily and quickly communicate with one another; wherever you are, you can instantly reachsomebody. Cell phones eliminate the　trouble of not being able to meet someone in person,and therefore increase business's efficiency.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Mobile phones necessarily also harbor disadvantages. The radiation such phones emit ishazardous to one's health. Furthermore, if people become too reliant on the use of cell phones,our face to face skills may decline. Any new invention has its drawbacks, and such negativeaspects cannot always diminish its popularity. Despite the negative effects of television, forexample, the number of people who own televisions continues to grow at a tremendous rate.This is also the case with mobile phones. People won't stop eating just because of the riskofchoking. In addition, the swift development of science and technology will likely eliminatethe hazards cell phones may cause. One can safely predict, therefore, that with theintroduction of new techniques, mobile phones will have more applications and become evenmore appealing to customers.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
