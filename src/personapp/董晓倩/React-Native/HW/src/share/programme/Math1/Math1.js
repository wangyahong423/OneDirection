import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Math1 extends Component {
    render() {
        return (
            <View>
                <View style={{
                    width: '100%',
                    height: 63 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>数学一</Text>
                </View>
                <Text style={{ fontSize: 28 * s, fontStyle: 'italic', color: '#37376F', marginTop: 30 * s, marginLeft: 10 * s }}>专项练习</Text>
                <View style={{ alignItems: 'center', marginTop: 80 * s }}>
                    <TouchableOpacity
                        style={[styles.box, { marginTop: '15%' }]}
                        onPress={() => Actions.choose()}
                    >
                        <View style={styles.circle}></View>
                        <View style={styles.rectangle}><Text style={{ color: '#fff', marginLeft: 20 * s }}>选择题</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => Actions.fill()}
                    >
                        <View style={styles.circle}></View>
                        <View
                            style={styles.rectangle}
                        ><Text style={{ color: '#fff', marginLeft: 20 * s }}>填空题</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.box}
                        onPress={() => Actions.answer()}
                    >
                        <View style={styles.circle}></View>
                        <View
                            style={styles.rectangle}
                        ><Text style={{ color: '#fff', marginLeft: 20 * s }}>解答题</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        width: '80%',
        height: 60 * s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 50 * s
    },
    circle: {
        width: 70 * s,
        height: 70 * s,
        backgroundColor: '#37376F',
        borderRadius: 35 * s
    },
    rectangle: {
        width: 311 * s,
        height: 40 * s,
        marginLeft: -8 * s,
        backgroundColor: '#37376F',
        justifyContent: 'center'
    }
})