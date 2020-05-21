import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu17 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Recently， every morning when I wake up， I findmy air-conditioner automatically turned off . I didn't understand why at first ， but soon Ilearned that there was a great shortage of electricity supply in our city – my air-conditionerturned off because of a power failure midnight.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　With the rapidly developing industry and the ever-increasing population， demand forelectricity supply is soaring. Besides， summers in recent years are much hotter than before ，so most working places and households are air-conditioned ， which consumes additionalelectricity.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Face with such a hard nut ， we have to find ways to crack it . Above all ， in western areasChina ， there is surplus of electricity supply. So ， cities that are thirsty for electricity mayask for remote help. Then ，when we have electricity ， we should remember to save it . Setyour air-conditioners at 27C and you won't feel less comfortable than when they are at 26C . Infact ， some factories already shift their working hours to avoid the peak time of electricityconsuming. My parents don’t work from Monday to Friday as before – they work form Saturdayto Wednesday and have the following two days off instead. This is also a way out， isn't it?`}
                        </Text>
                        
                    </View>
                </View>
            </ScrollView>
        )
    }
}
