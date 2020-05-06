import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu8 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Today, few people would defend the traditionalattitude to children. If you recall what happened inold days, you would be astonished at the severeand strict education for children, for instance, old-fashioned spanking was common punishment forchildren. As a result, while the parents thusestablished their own authority, the poor children would never recover from the dreadfultraumatic experience when they grew up.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`However, as you know, things often go to extremes. Nowadays, parents' confidence in theirown authority has been greatly undermined. Countless articles in magazines and newspapersand tv programmes publicize childcare. When so much over-enthusiastic advice flying about,mum and dad just don't know what to do any more. In the end, they do nothing.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`So from early childhood, the kids are in charge and parents' lives are regulated according tothe needs of their off spring. When the little dears develop into teenagers, they take completecontrol. If the young people are going to have a party, for example, parents are asked to leavethe house. Their presence merely spoils the fun. What else can the poor parents do butobey?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In my mind, a child certainly needs love, and a lot of it. But the excessive pe rmissiveness ofmodern parents is surely doing more harm than good. The spread of juvenile delinquency islargely due to parental laxity. Mother, believing that her little baobao can look after himself, isnot at home when he returns f rom school, so little baobao roams the street. The dividing-linebetween permissiveness and sheer negligence is very fine indeed.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
