import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.outbox, { marginTop: '10%' }]}
                        onPress={() => Actions.read1()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`An old saying has it that half of all advertisting budgets are wasted-the trouble is, no one konws whitch half . In the internet age, at least in theory ,this fraction can be much reduced . By watching what... `}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.read2()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`Financial regulators in Britain have imposed a rather unusual rule on the bosses of big banks. Starting next year, any guaranteed bonus of top executives could be delayed 10 years if their banks are under investigation for...`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.read3()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`France，which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law...`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    outbox: {
        marginBottom: '5%',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    inbox: {
        width: '80%',
        height: 120 * s,
        borderWidth: 2,
        borderRadius: 10 * s
    }
})