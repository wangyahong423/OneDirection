import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, SectionList, Dimensions ,TouchableOpacity, SafeAreaView, Image} from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 460;
import { Actions } from 'react-native-router-flux';
export default class Activate extends Component {
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
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>一卡通激活</Text>
                </View>
                <ImageBackground style={styles.bgImg} source={require('../../../assets/gonglve/jianjie.png')}>
                    <View style={styles.box}>
                        <SectionList
                            renderItem={({ item, index, section }) => <Text style={styles.word} key={index}>{item}</Text>}
                            renderSectionHeader={({ section: { title } }) => (
                                <Text style={{ fontWeight: "bold", fontSize: 19 * s, lineHeight: 32 * s, marginBottom: 10 * s, marginTop: 15 * s }}>{title}</Text>
                            )}
                            sections={[
                                { title: "一卡通激活方式：", data: ["1、在师生活动中心二楼建设银行，在开学之际人可能比较多，排队进入，会有工作人员帮助你激活一卡通；", "2、在手机建设银行APP，会有详细的激活一卡通的方式；", "3、在不进行任何操作的情况下，对一卡通直接进行充值，也相当于完成了一卡通的激活。"] },
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
        marginBottom: 20 * s,
    }
})