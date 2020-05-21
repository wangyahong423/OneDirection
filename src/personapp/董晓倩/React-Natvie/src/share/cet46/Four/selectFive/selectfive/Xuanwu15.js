import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu15 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In recent years, to get a certificate has become anew craze among college students. Just randomly ask a student on campus what he or she isbusy doing, quite possibly, you may get the answer that he is preparing for a certificate ofsome kind. Why does this craze appear?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`There are mainly two reasons behind this phenomenon. To begin with, it is theemployment pressure that forces college students to get more certificates. With the admissionexpansion of colleges, a lot more graduates have to face the fierce competition in the jobmarket. How can one make himself more competitive? More certificates at hand, maybe.Furthermore, diploma and certificates are still vital standards by which a good many employersmeasure a person’s ability. In order to increase the qualifications for a job, the studentscompel themselves to run from one exam to another.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`From my point of view, we should be more rational when it comes to certificates, sincecertificates do not necessarily prove one’s ability. Being crazy in getting certificates blindly isnothing but wasting time. To conclude, we should focus on improving our ability but notgetting a certificate of no practical value.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
