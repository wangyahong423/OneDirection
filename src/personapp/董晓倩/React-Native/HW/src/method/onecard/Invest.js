import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SectionList, Dimensions, TouchableOpacity, SafeAreaView, Image } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 460;
import { Actions } from 'react-native-router-flux';

export default class Invest extends Component {
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
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>一卡通充值</Text>
                </View>
                <ImageBackground style={styles.bgImg} source={require('../../../assets/gonglve/jianjie.png')}>
                    <View style={styles.box}>
                        <SectionList
                            renderItem={({ item, index, section }) => <Text style={styles.word} key={index}>{item}</Text>}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={{ fontWeight: "bold", fontSize: 19 * s, lineHeight: 32 * s, marginBottom: 10 * s, marginTop: 15 * s }}>{title}</Text>
                            )}
                            sections={[
                                { title: "一卡通充值地点：", data: ["1.在师生活动中心一楼勤助中心大厅西侧，柜台可以用现金充值、墙上有圈存机可以直接使用，注意放上卡之后选择“签约圈存”；", "2.在四食堂前台、二食堂前台可以现金、支付宝、微信充值；", "3.在宿舍楼下的自动圈存机，放上一卡通，选择“签约圈存”可以完成充值。", "4.在天客隆超市付款门口可以进行一卡通充值。"] },
                            ]}
                            keyExtractor={(item, index) => item + index}
                        />
                        <Text style={{ color: 'red', position: 'absolute', top: '75%', left: '6%', fontSize: 15 * s, marginTop: 20 * s }}>注意：一卡通的初始密码是身份证号后六位。</Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
let styles = StyleSheet.create({
    bgImg: {
        height: '100%',
        width: '100%',
    },
    box: {
        width: '84%',
        marginTop: '10%',
        marginLeft: '8%',
        height: '80%',
        padding: '4%',
        backgroundColor: 'white',
        opacity: 0.7
    },
    word: {
        color: 'black',
        fontSize: 18 * s,
        marginBottom: 20 * s
    }
})