import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Teaching extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 70 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22* s }}>教学督导</Text>
                </View>
                <View style={styles.box}>
                    <View style={styles.one}>
                        <Text style={styles.text1}>一、 教 学 督 导 委 员 会 </Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 15 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主任：林广瑞　赵彦民</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 15 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;成员：孙梅艳　孙　鸿　史锦秀　程培社　车文芬{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刘秀萍　程海魁　高永昌　杨述韬　付尊英{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;南月省　赵其林　张庆秀　郭泽英　姜玉兴{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;戴俊奎</Text>
                    </View>
                    <View style={styles.two}>
                        <Text style={styles.text2}>二、教 学 督 导 委 员 会 主 要 工 作 职 责 </Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 15 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教学督导专家围绕课程教学开展活动。通过课堂听课、开展专项检查与调研等多种形式，深入教学第一线了解教师教学水平、讲课质量、教学态度、教学秩序及教学管理等情况，分析和评估课堂教学效果，检查教学环境和教学条件，听取教师的意见和建议，了解学生学习情况并听取学生对教学工作的意见。及时向管理部门反馈有关情况，为学校发展和教育教学改革提出建议和决策咨询，在督促教师遵守本科教学工作规范，指导教师提高教学水平，促进学风建设和改进学校教育教学管理水平等方面发挥应有的作用。</Text>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
let styles = StyleSheet.create({
    box: {
        width: '94%',
        marginLeft: '3%',
    },
    one: {
        width: '96%',
        marginLeft: '2%',
        marginTop: '2%'
    },
    two: {
        width: '96%',
        marginLeft: '2%',
        marginTop: '2%'
    },
    text1: {
        color: 'rgb(255,192,203)',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: '#C0C0C0',
        textShadowRadius: 2,
        textShadowOffset: { width: 2, height: 2 },
    },
    text2: {
        color: 'rgb(255,192,203)',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: '#C0C0C0',
        textShadowRadius: 2,
        textShadowOffset: { width: 2, height: 2 },
    }
})