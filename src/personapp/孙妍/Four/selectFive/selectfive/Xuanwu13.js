import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu13 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Nowadays a large number of universitiesencourage and organize students to take part in social practice activities. During theholidays, students in mounting numbers choose to be the volunteers, take part-time jobs, ortake part in other practical activities alike. It is obvious that social practice is playing anincreasingly essential role in China’s college education.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Undoubtedly, college students have benefited a lot from social practice. Above all, they areprovided with more opportunities to contact the real world outside campus. What is more, insocial practice activities, students can apply their theoretical knowledge to the solution to thepractical problems. So their practical skills are improved greatly. Besides, social practice helpsstrengthen students’ sense of social responsibility.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Considering the above-mentioned, it is necessary for college students to participate insocial practice. However, social practice may bring some problems. For example, somestudents spend too much time in taking part-time jobs so as to ignore their study. Hence, weshould try to balance the relationship between social practice and study.`}
                        </Text>
                        
                    </View>
                </View>
            </ScrollView>
        )
    }
}
