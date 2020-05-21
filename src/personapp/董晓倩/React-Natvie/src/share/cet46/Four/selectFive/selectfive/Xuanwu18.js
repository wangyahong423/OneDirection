import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu18 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`With the rapid economic development, the mobilephone has found its way into campuses and a hostof students take advantage of this wonderfulgadget to communicate with each other. Thisphenomenon gives rise to this question: What arethe advantages and disadvantages of the mobilephone?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is widely believed that it greatly facilitatesstudents’ campus life. Many instances could be foundto support this type of opinion. A graduating student in our university bought a mobile phonein the course of hunting for his job. He told me that through the mobile phone he could easilykeep in touch with the employer of the company he intends to work with and would not missany opportunities.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`However, everything has both positive and negative facets. The mobile phone also hasmany disadvantages. For instance, the ringing of the mobile phone often disturbs the teacher’steaching and other students’ learning.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Personally, the advantages of the mobile phone outweigh the disadvantages of it as long aswe don’t interfere with others while using it.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
