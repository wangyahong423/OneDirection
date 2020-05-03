import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Third extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The further development of economy in Chinahas brought the more entertainment and leisure topeople's life. A case in point is the long holiday suchas the National Day, in which people can spend oneweek or so enjoying themselves in different ways, especially going shopping and traveling. It has beenagreed that the long holiday may bring much morebenefit to both the customer and the businessmen.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`On the other hand, however, the long holiday also brings much expectable problems to thesociety. First, too many visitors in the long holidays have caused the strain in traffic. Second, the visitors like to go to the well-known interesting places, which may lead to the seriousdamage to the nature and the scene.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In my view, people need such long holidays, and what really matters is how to guide peoplein their entertainment. For example, it is advisable that people try to avoid going shopping ortraveling in the rush days. Anyway, the long holiday is a good idea of satisfying both the peopleand the merchants.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
