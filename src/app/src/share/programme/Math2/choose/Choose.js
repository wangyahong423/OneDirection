import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const s = width / 460;


export default class Choose extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[styles.outbox, { marginTop: '10%' }]}
                        onPress={() => Actions.choose21()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`1、曲线y=(x-1)(x-2)^2(x-3)^3(x-4)^4的拐点是()`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose22()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`2、设函数f(x)具有二阶连续导数，且f(x)>0，f(0)'=0,则函数z=f(x)lnf(y)在点(0,0)处取得极小值的一个充分条件是()`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.outbox}
                        onPress={() => Actions.choose23()}
                    >
                        <View>
                            <Icon name="rocket" size={30} color="#900" />
                        </View>
                        <View style={styles.inbox}>
                            <View style={{ padding: 8 * s }}>
                                {/* <Icon name="rocket" size={30} color="#900" /> */}
                                <Text style={{ fontSize: 16 * s }}>{`3、设a为n维单位列向量，E为n阶单位矩阵，则()`}</Text>
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