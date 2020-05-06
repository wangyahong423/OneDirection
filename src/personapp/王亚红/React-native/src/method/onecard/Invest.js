import React, { Component } from 'react'
import { Text, View,SectionList,StyleSheet,ImageBackground } from 'react-native'

export default class Invest extends Component {
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
                            { title: "", data: ["一卡通充值地点："] },
                            { title: "", data: ["1.在师生活动中心一楼勤助中心大厅西侧，柜台可以用现金充值、墙上有圈存机可以直接使用，注意放上卡之后选择“签约圈存”；"] },
                            { title: "", data: ["2.在四食堂前台、二食堂前台可以现金、支付宝、微信充值；"] },
                            { title: "", data: ["3.在宿舍楼下的自动圈存机，放上一卡通，选择“签约圈存”可以完成充值。"] },
                            { title: "", data: ["4.在天客隆超市付款门口可以进行一卡通充值。"] }
                        ]}
                        keyExtractor={(item, index) => item + index}
                        />
                        <Text style={{color:'red',position:'absolute',top:'75%',left:'6%'}}>注意：一卡通的初始密码是身份证号后六位。</Text>
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
        fontSize:18,
    }
})