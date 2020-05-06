import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu20 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In recent years the problems which are causedby the inequality of education opportunity haveattracted the public's attention. For instance, thebackward teaching facilities and dilapidated schoolbuildings in rural areas are in sharp contrast tothose advanced facilities and well-equipped classrooms in urban areas, students from poorfamilies cannot go to universities because of the high tuition.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`There are several factors which contribute lo these problems. First, the distribution ofresources is unbalanced between rural and urban schools. Second, educational loans for poorstudents are far from enough. Third, the inequality in some schools' admission policies alsoturns many students away. The education inequality can result in many bad impacts. On onehand, it can affect people’s future employment. On the other hand，it is the root of manysocial problems.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`To change this situation, I think, we should take the following measures. Firstly, thegovernment's spending on education should be increased and the allocation of public resourcesgives priority to rural and weak urban schools. Secondly, the implementation of thegovernment financial aid system for students should be accelerated. Thirdly, the governmentshould speed up education reforms to ensure everyone has equal access to schools.`}
                        </Text>
                       
                    </View>
                </View>
            </ScrollView>
        )
    }
}
