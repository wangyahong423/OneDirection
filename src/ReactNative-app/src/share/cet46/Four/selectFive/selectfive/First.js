import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class First extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Dear Han Dong,`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`I am a sophomore and I'm taking the CET-4 forthe second time. It has cost lots of money and timeto prepare for the exam. Meanwhile, my schedule isgetting tighter, for I have to take much more classesthan before. So I really want to make things workthis time. That's why I'm writing to you for help.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`My biggest headache is the listening part, whose proportion becomes even more after theCET exam reform. Moreover, my vocabulary is poor, too. I'm wondering if there is any short-cut to memorize words more quickly in shorter time. I also want to know in what degree a CETtraining class can help. Finally, I need you recommend some better books to me.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`I'm gratefully looking forward to your reply.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s ,marginLeft:230*s}}>
                            &emsp;&emsp;{`Sincerely yours,`}
                        </Text>
                        <Text style={{ fontSize: 16 * s,marginLeft:230*s }}>
                            &emsp;&emsp;{`Li Qiang`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
