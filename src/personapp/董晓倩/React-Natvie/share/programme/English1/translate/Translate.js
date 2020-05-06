import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Translate extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.outbox, { marginTop: '10%' }]}
                    onPress={() => Actions.translate1()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`yet when one looks at the photographs of the gardens created by the homeless, it strikes one that, for all their diversity of styles, these gardens speak of various other fundamental urges beyond... `}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate2()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`The gardens of the homeless which are in effect homeless garden introduce from in to an urban environment where it either didn’t exist or was not discernible as such`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate3()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`Mast of us give in to a demoralization of spirit which we usually blame on some psychological conditions until one day we find ourselves in a garden and feel the oppression vanish as...`}</Text>
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