import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SectionList, Dimensions, TouchableOpacity, SafeAreaView, Image } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 460;
import { Actions } from 'react-native-router-flux';
export default class Loss extends Component {
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
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>一卡通丢失</Text>
                </View>
            <ImageBackground style={styles.bgImg} source={require('../../../assets/gonglve/jianjie.png')}>
                <View style={styles.box}>
                    <SectionList
                        renderItem={({ item, index, section }) => <Text style={styles.word} key={index}>{item}</Text>}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={{ fontWeight: "bold", fontSize: 19 * s, lineHeight: 32 * s, marginBottom: 10 * s, marginTop: 15 * s }}>{title}</Text>
                        )}
                        sections={[
                            { title: "一卡通挂失方式：", data: ["1、首先可以通过发布朋友圈、QQ空间、信息墙等，集众人力量帮助自己寻卡；", "2、其次如果长时间未寻得一卡通，可通过师生活动中心一楼勤助中心大厅的西侧柜台上进行补卡，携带身份证等证件和现金，十元补一张卡，银行卡也是可以在那里补。"] },
                            { title: "对于补完银行卡之后银行卡和一卡通的使用情况：", data: ["1、补完卡之后和原来的两卡一题是不一样的，变成一卡通和银行卡分离，但是不影响原来的功能；", "2、银行卡的卡号也不再是原来那个卡号，但是不用担心无法充值饭卡的问题，银行卡也是自己的名字、电话等信息。"] },
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
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
    }
})