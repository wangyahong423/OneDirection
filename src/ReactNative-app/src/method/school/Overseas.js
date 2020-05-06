import React, { Component } from 'react'
import { Text, View, ScrollView, ImageBackground, Dimensions, Animated, Linking, TouchableOpacity, StyleSheet, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
const { width } = Dimensions.get('window');
const s = width / 460;

export default class Overseas extends Component {
    constructor() {
        super();
        this.state = {
            width: new Animated.Value(0),
            height1: new Animated.Value(0),
            height2: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(this.state.width, {
            toValue: 50,
        }).start()
    }
    show1 = () => {
        Animated.timing(this.state.height1, {
            toValue: 300 * s,
            duration: 1000,
        }).start()
    }
    show2 = () => {
        Animated.timing(this.state.height2, {
            toValue: 365 * s,
            duration: 1000,
        }).start()
    }

    render() {
        return (
            <ScrollView style={{ width: '96%', marginLeft: '2%', marginTop: '3%', height: '100%' }}>
                <Text style={{ lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学于上世纪80年代开始招收海外留学生，是河北省第一批接收外国留学生的省属重点大学之一，目前共培养了来自42个国家的3000余名留学生。河北师范大学根据留学生不同的学习目的、不同的汉语水平、不同的专业背景等具体情况，提供语言进修和学历学位教育两大类项目。其中语言进修教育项目分别设置长期和短期语言课程教学；学历学位教育项目依托学校各招生专业分别提供学士、硕士、博士的课程教学和科学研究。 </Text>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', height: 50 * s }}>
                    <Button onPress={() => { this.zoom() }}>
                        <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                    </Button>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>相&nbsp;关&nbsp;链&nbsp;接：</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://rsc.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                    }}>
                        <Text style={{color:'blue'}}>   &nbsp;国&nbsp;际&nbsp;文&nbsp;化&nbsp;交&nbsp;流&nbsp;学&nbsp;院</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show1() }}>
                    <Text style={{ fontWeight: "bold", color: '#489444', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>一、语 言 进 修 教 育 项 目</Text>
                </TouchableOpacity>
                <Animated.View style={{ height: this.state.height1, width: '100%' }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、长期语言课程{'\r\n'}学习时间为1个学期（约20周）以上不等，根据汉语水平不同，设有初级、中级和高级三种不同级别，分别提供听、说、读、写以及中国传统文化知识在内的全方位汉语言及汉文化学习内容。{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校同时也开设HSK考试培训，学生可以根据需要自主选择相应级别，报名参加培训。除以上语言课程外，学院还设有免费的自主选修课程，内容包括中国武术、舞蹈、民歌或中国剪纸、国画、书法等课程。{'\r\n'}2、短期语言课程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习时间1周至3个月不等，主要为有兴趣接触中国文化，但又没有太多时间在中国学习的个人及团组开设。{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短期学习团安排包括：语言文化课程、文化活动、旅游参观、实地考察等。</Text>
                    </ImageBackground>
                </Animated.View>

                <TouchableOpacity style={[styles.name, { marginTop: 20 * s }]} onPress={() => { this.show2() }}>
                    <Text style={{ fontWeight: "bold", color: '#921434', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>二、学 历 、 学 位 教 育 项 目</Text>
                </TouchableOpacity>
                <Animated.View style={{ height: this.state.height2, width: '100%' }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学接收来自世界各地的留学生攻读学士、硕士、博士学位课程，根据修读专业或专业方向，分别设计相应的培养计划。{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本科：学制4年，修满相应学分，通过毕业论文答辩，可取得毕业证书，符合学士学位规定条件者，授予学士学位证书。{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校同时也开设HSK考试培训，学生可以根据需要自主选择相应级别，报名参加培训。除以上语言课程外，学院还设有免费的自主选修课程，内容包括中国武术、舞蹈、民歌或中国剪纸、国画、书法等课程。{'\r\n'}2、短期语言课程{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学习时间1周至3个月不等，主要为有兴趣接触中国文化，但又没有太多时间在中国学习的个人及团组开设。{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;硕士研究生：根据不同专业，学制有2年和3年两种，修满相应学分，通过毕业论文答辩，可取得毕业证书，符合硕士学位规定条件者，授予硕士学位证书。博士研究生：学制4年，修满相应学分，取得一定的科研成绩，完成博士学位论文，通过论文答辩，可取得毕业证书和博士学位证书。</Text>
                    </ImageBackground>
                </Animated.View>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        height: 30 * s,
        width: '100%',
        textAlign: 'left',
        paddingLeft: '3%',
        lineHeight: 30 * s,
        backgroundColor: '#fff',
        fontSize: 16
    },
    txt: {
        fontSize: 14,
        marginLeft: '5%',
        lineHeight: 25,
    },
    name: {
        height: 30 * s,
        width: '100%',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        paddingLeft: '5%',
        borderRadius: 15 * s,
    },
    txt: {
        height: '100%',
        width: '100%'
    }
})