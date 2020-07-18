import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, ImageBackground, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Cooperate extends Component {
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
                    <Text style={{ fontSize: 22* s }}>合作交流</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', height: 50 * s }}>
                        <Button onPress={() => { this.zoom() }}>
                            <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                        </Button>
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}>相&nbsp;关&nbsp;链&nbsp;接：</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://io.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                        }}>
                            <Text style={{ color: 'blue' }}>   &nbsp;国&nbsp;际&nbsp;合&nbsp;作&nbsp;交&nbsp;流&nbsp;中&nbsp;心</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '94%', marginLeft: '3%', marginBottom: '3%' }}>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;秉持“怀天下，求真知”的校训，河北师范大学在积极开展国际交流与合作的同时，通过“平台建设、渠道开拓、项目管理、主动服务”，不断地提升全体师生参与国际教育实践的力度和广度。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;截止2014年8月底，学校和美、欧、亚等二十几个国家和地区的46所大学建立了正式的校际合作关系，与世界上200多所知名大学保持着学术联系。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过国际学术交流、科研协作和引智项目来提升学校的教学、科研水平和国际化程度是我校“质量工程”的一个重要环节，目前在校外籍教师和长短期专家规模为每年30人左右。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校通过开展公派留学、师生交流、合作研究、汉语推广（孔子学院）等项目帮助越来越多的师生走出国门，在培养具有国际视野和胸怀的高水平人才的同时，师生们也把中国文化的精华传播到了世界各地。目前学校在印尼万隆、秘鲁利马各承办有一所孔子学院，与巴西里约州教育厅合作的中葡文双语学校（数学特色）也已经在筹建中。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是国家教育部（原国家教委）批准的河北省首批具有留学生招生资格单位，目前国际留学生规模为每年300人左右。</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
