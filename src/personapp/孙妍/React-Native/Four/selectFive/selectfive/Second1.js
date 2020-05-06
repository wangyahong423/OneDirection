import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Second1 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Like tangible cultural heritages such as theGreat Wall and the Forbidden City, intangiblecultural heritages like Peking Opera and Confucius-commemorating rituals are equally crucial. Weshould make our utmost efforts to preserveintangible heritages because, without their physicalform of existence, they are in greater risk ofextinction.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`According to UNESCO’s Convention for the Safeguarding of Intangible Cultural Heritage(2003), all forms of social customs and habits, folklore, performing arts, rituals, oral traditions, festivals, traditional crafts and various knowledge and practices about nature and universecan be classified as intangible cultural heritages. As a country consisting of a great diversityof ethnic groups and with time-honored history and civilization, China abounds in intangiblecultural heritages. Cultural heritages connect modern people with the historical past, allowingthem to acquire a cultural and historical identity. Without cultural heritages, we would berendered absolutely rootless and we would find it hard to cope with challenges at present andin the future.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`However, the modernization process poses mounting threats to intangible heritages. Many people have a blind faith in the latest electronic devices. It is also pathetic to see elderlypeople in possession of such legacies pass away without transmitting them to the youngergeneration. Faced with those challenges, we should both preserve and renovate our ancestralheritages so that we can help contribute to the cultural diversity of the world and return toour spiritual homeland in this age of impersonal science and technology.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
