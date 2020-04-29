import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.outbox, { marginTop: '10%' }]}
                    onPress={() => Actions.answer21()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`1、已知函数y(x)由方程x^3 + y^3 - 3x + 3y -2=0确定，求y(x)的极值`}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer22()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`2、设函数f(x)在区间[0,1]上具有2阶导数，且f(1)>0，lim(x->0) f(x)/x <0，证明：`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(I)方程f(x)=0在区间(0,1)内至少存在一个实根；`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(II)方程f(x)f''(x) + [f'(x)]^2 = 0在区间(0,1)内至少存在两个不同实根。`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.answer23()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>{`证明：(1)对任意正整数n，都有1/(n+1) < ln (1+1/n) < 1/n`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`设an=1+1/2+...+1/n-ln n(n=1,2,...)，证明数列{an}收敛`}</Text>
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