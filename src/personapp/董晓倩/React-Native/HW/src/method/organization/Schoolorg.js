import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, ImageBackground, SafeAreaView, TouchableOpacity ,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Schoolorg extends Component {
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
                        <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>校级组织类</Text>
                    </View>
                <ScrollView>
                    <View style={styles.box}>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/xueshenghui.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>校学生会</Text>
                        </View>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/qingxie.jpeg')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>校青协</Text>
                        </View>
                    </View>

                    <View style={styles.box}>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/tuanwei.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>校团委</Text>
                        </View>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/tushuguan.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>图书馆读者协会</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/hongshizihui.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>校红十字会</Text>
                        </View>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/yishutuan.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>校艺术团</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/guoqidui.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>大学生国旗队</Text>
                        </View>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/libindui.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>大学生礼宾队</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/guangbotai.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>广播台</Text>
                        </View>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/qinzhu.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>勤助中心</Text>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.div}>
                            <ImageBackground source={require('../../../assets/gonglve/gongyulou.png')} style={{ width: 170 * s, height: 130 * s }} />
                            <Text style={{ marginTop: 10 * s }}>公寓楼管理委员会</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
let styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop: 20 * s
    },
    box2: {
        paddingTop: 20 * s,
        paddingLeft: 30 * s
    },
    div: {
        height: 170 * s,
        width: 170 * s,
        backgroundColor: 'white',
        borderRadius: 35 * s,
        overflow: 'hidden',
        alignItems: "center"
    }
})