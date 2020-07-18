import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Linking, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Obtainemployment extends Component {
    constructor() {
        super();
        this.state = {
            width: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(this.state.width, {
            toValue: 50,
        }).start()
    }
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 70 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22* s }}>就业服务</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', height: 50 * s }}>
                        <Button onPress={() => { this.zoom() }}>
                            <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                        </Button>
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;相&nbsp;关&nbsp;链&nbsp;接：</Text>

                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://heshida.jiuyeb.cn/').catch(err => console.error('An error occurred', err));
                        }}>
                            <Text style={{ color: 'blue' }}>   &nbsp;就&nbsp;业&nbsp;创&nbsp;业&nbsp;指&nbsp;导&nbsp;中&nbsp;心</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginBottom:'7%'}}>
                        <Text style={{ fontSize: 18, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校以“怀天下，求真知”为指引，以促进学生全面发展为宗旨，以人才培养的结构优化和质量提升为根本，强化顶层设计、分层对接，把就业创业纳入人才培养的全局统筹谋划，作为人才培养链条的重要节点整体推进，作为诸多要素相互作用的系统工程协调联动，把考生志趣、市场需求信号向优化结构、对接产业、提升质量、凝练特色传导反馈，把招收优质生源压力和高质量就业需求转化为创新发展“内生”的动力、人才培养“开放”的活力、学科优势“集成”的实力，春风化雨、久久为功，逐步使人才培养结构与社会需求统合；创新服务模式，注重全员参与、全程用力，注重分类指导、精准帮扶，注重全要素集约、线上线下覆盖，注重拓展市场、对接行业，注重就业调研、数据盘点，注重榜样示范、制度激励，构建统筹联动、扁平高效、智慧精准的指导服务体系，实施就业促进、创业引领、基层成长计划，为实现毕业生的自主发展、充分发展和全面发展夯实基础。
                        </Text >
                        <Text style={{ fontSize: 18, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校把深入推进创新创业教育改革作为学校综合改革的突破口，把创新精神、创业意识和创新创业实践能力作为评价人才培养质量的重要指标，打造“涵养生态、优化环境；厚植沃土、集聚要素；春华秋实、赋能成长”的创新创业工作体系，构建“面向全体、分层施教，制度保障、培训引领，竞赛播种、园区孵化，典型示范、考核激励，导师把脉、基金风投”的创新创业工作机制，推动创新创业教育与思想政治教育、专业教育、体育、美育、劳动教育有机融合，引领创新教学与创业实践协同并进，激励大学生在创新创业中增长智慧才干、锤炼意志品质，以生动实践奋力书写创新创业生机勃发的华彩篇章。
                        </Text>
                        <Text style={{ fontSize: 18, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2013年6月8日下午，中共中央政治局常委、国务院总理李克强在人力资源和社会保障部部长尹蔚民、教育部部长袁贵仁等同志的陪同下专程来学校考察毕业生就业工作，与毕业生和用人单位亲切交谈，对我校毕业生顶岗实习、面向基层就业给予充分肯定。
                        </Text>
                        <Text style={{ fontSize: 18, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2015年，学校入选教育部“全国毕业生就业典型经验高校”，获评中国高等教育学会创新创业教育分会“全国高等学校创业教育研究与实践先进单位”，与河北科投集团共建的时光空间被科技部纳入“国家级科技企业孵化器”；2016年，学校被教育部认定为“全国首批深化创新创业教育改革示范高校”，学校创业孵化园被河北省人力资源和社会保障厅、河北省财政厅评为“河北省创业就业众创空间”，资助经费200万元。
                        </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
