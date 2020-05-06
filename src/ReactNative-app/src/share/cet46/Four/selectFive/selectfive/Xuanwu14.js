import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu14 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`According to a survey, in recent years the monthly expenditure of a college student hasbeen on the sharp rise. Many college students have no concept of thrift in their mind. Theytake it for granted that they spend money from their parents before they enter into the society.This extravagant spending is primarily caused by the following factors.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`First of all, nowadays most of the students are the only children of their families. They arethe apple in their family’s eyes and naturally get more care and pocket money. In addition, withthe improvement of living standards, parents can afford higher expenditure of their children.Moreover, some students like to pursue fashion and trends, which tend to need more money.Finally, campus love is also a possible factor causing extravagant spending.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`From my point of view, a college student, as a pure consumer, should learn to be thrifty.We should limit our expenditure on daily necessities but not buy whatever we want regardlessof their prices. The habit of thrift can help us form right values and is favorable to our futuredevelopment.`}
                        </Text>
                        
                    </View>
                </View>
            </ScrollView>
        )
    }
}
