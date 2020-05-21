import React, { Component } from 'react'
import { Text, View, ImageBackground,StyleSheet, SectionList } from 'react-native'

export default class Activate extends Component {
    render() {
        return (
            <ImageBackground style={styles.bgImg} source={require('../../../assets/gonglve/jianjie.png')}>
                <View style={styles.box}>
                    <SectionList
                        renderItem={({ item, index, section }) => <Text style={styles.word} key={index}>{item}</Text>}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={{ fontWeight: "bold" }}>{title}</Text>
                        )}
                        sections={[
                            { title: "", data: ["一卡通激活方式："] },
                            { title: "", data: ["1、在师生活动中心二楼建设银行，在开学之际人可能比较多，排队进入，会有工作人员帮助你激活一卡通；"] },
                            { title: "", data: ["2、在手机建设银行APP，会有详细的激活一卡通的方式；"] },
                            { title: "", data: ["3、在不进行任何操作的情况下，对一卡通直接进行充值，也相当于完成了一卡通的激活。"] }
                        ]}
                        keyExtractor={(item, index) => item + index}
                        />
                </View>
            </ImageBackground>
        )
    }
}
let styles = StyleSheet.create({
    bgImg: {
        height: '100%',
        width: '100%',
    },
    box:{
        width:'84%',
        marginTop:'10%',
        marginLeft:'8%',
        height:'80%',
        padding:'4%',
        backgroundColor:'white',
        opacity:0.7
    },
    word:{
        color:'black',
        fontSize:18
    }
})