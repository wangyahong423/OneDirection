import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class School extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
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
                <Image source={require('../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
              </TouchableOpacity>
              <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>学校</Text>
            </View>
            <ScrollView>
                <View style={{ height: 250 * s, width: '96%', overflow: 'hidden', marginLeft: '2%' }}>
                    <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='1.5' style={styles.wrapper} showsButtons={false}>
                        <View>
                            <Image source={require('../../../assets/gonglve/method1.png')} style={{ height: 223, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../../assets/gonglve/method2.png')} style={{ height: 223, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../../assets/gonglve/method3.png')} style={{ height: 223, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../../assets/gonglve/method4.png')} style={{ height: 223, width: '100%' }} />
                        </View>
                    </Swiper>
                </View>
                <View style={styles.part}>
                    <TouchableOpacity onPress={() => { Actions.synopsis() }} style={styles.box1}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>学校简介</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.subject() }} style={styles.box2}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>学科专业</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.schoollogo() }} style={styles.box3}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>学校标志</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.scenery() }} style={styles.box4}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>校园风光</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.govern() }} style={styles.box6}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>治理架构</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.personnel() }} style={styles.box5}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>人才培养</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.science() }} style={styles.box5}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>科学研究</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.obtainemployment() }} style={styles.box5}>
                        <Text style={{ marginLeft: 30 * s, fontSize: 20*s, color: '#fff' }}>就业服务</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
let styles = StyleSheet.create({
    wrapper: {
        height: 250 * s,
        marginTop: 20 * s
    },
    part: {
        width: '96%',
        marginTop: 20 * s,
        marginLeft: '2%',
        marginBottom: 20 * s
    },
    box1: {
        height: 56 * s,
        width: '100%',
        backgroundColor: '#37376F',
        justifyContent: 'center',
    },
    box2: {
        height: 56 * s,
        width: '100%',
        marginTop: 15 * s,
        justifyContent: 'center',
        backgroundColor: '#37376F',
    },
    box3: {
        height: 56 * s,
        width: '100%',
        justifyContent: 'center',
        marginTop: 15 * s,
        backgroundColor: '#37376F',
    },
    box4: {
        height: 56 * s,
        width: '100%',
        marginTop: 15 * s,
        justifyContent: 'center',
        backgroundColor: '#37376F',
    },
    box5: {
        height: 56 * s,
        width: '100%',
        marginTop: 15 * s,
        justifyContent: 'center',
        backgroundColor: '#37376F',
    },
    box6: {
        height: 56 * s,
        width: '100%',
        marginTop: 15 * s,
        justifyContent: 'center',
        backgroundColor: '#37376F',
    }
})