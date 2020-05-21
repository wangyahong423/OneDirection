import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, StyleSheet, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
const { width } = Dimensions.get('window');
const s = width / 460;

export default class Continus extends Component {
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
            <ScrollView>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:10*s,marginLeft:-45}}>
                    <Button onPress={() => { this.zoom() }}>
                        <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                    </Button>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>相&nbsp;关&nbsp;链&nbsp;接：</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://cjxy.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                    }}>
                        <Text  style={{color:'blue'}}>继续教育学院</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: '#258743', marginLeft: 10 * s, marginRight: 10 * s }}>||</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://dgsxb.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                    }}>
                        <Text style={{color:'blue'}}>顶岗支教指导中心</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center',marginTop:10*s}}>
                    <Button onPress={() => { this.zoom() }}>
                        <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                    </Button>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>相&nbsp;关&nbsp;链&nbsp;接：</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://gszx.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                    }}>
                        <Text style={{color:'blue'}}>高师培训中心</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', color: '#258743', marginLeft: 10 * s, marginRight: 10 * s }}>||</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://www.hbte.com.cn/').catch(err => console.error('An error occurred', err));
                    }}>
                        <Text style={{color:'blue'}}>中小学教师继续教育中心</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '94%', marginLeft: '3%', marginTop: 15 * s }}>
                    <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是一所具有百年历史和光荣传统的省属重点大学。学校研究生教育始于1978年，经过30多年的发展，逐步形成结构合理，门类齐全的学科体系。学校现有博士学位授权一级学科11个，博士专业学位授权点1个，可招收培养博士生的专业50多个；硕士学位授权一级学科29个，可招收培养硕士生的专业130多个，学科专业覆盖哲学、经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等10大学科门类。现有国家重点学科1个，博士后科研流动站9个，河北省“双一流”建设学科7个、省高校国家重点学科培育项目1个、省高校强势特色学科4个、省高校重点学科14个，有教育部重点实验室1个、教育部人文社会科学重点研究基地1个、省级重点实验室8个。</Text>
                    <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                    <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学师资力量雄厚，拥有一支高水平的研究生导师队伍。截止2018年12月，学校共有导师895人，其中博士研究生导师149人，硕士研究生导师746人。学校拥有一大批国内外著名学者，其中中国科学院院士1人，省级以上各类优秀专家113人次。</Text>
                </View>
            </ScrollView>
        )
    }
}
