import React, { Component } from 'react'
import { Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Synopsis extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 70 * s,  flexDirection: "row", alignItems: "center" ,justifyContent:"center"}}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                            <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{fontSize:22*s}}>学校简介</Text>
                </View>
                <View >
                    <Text style={{ fontSize: 18*s, width: '93%', lineHeight: 27, marginLeft: '3%', }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是河北省人民政府与教育部共建的省属重点大学，河北省“双一流”建设一层次高校。学校起源于1902年创建于北京的顺天府学堂和1906年创建于天津的北洋女师范学堂，具有117年的发展历史和光荣的办学传统。1996年6月，原河北师范大学、河北师范学院与创建于1952年的河北教育学院、创建于1984年的河北职业技术师范学院合并，组建成新的河北师范大学。校友中有老一代革命家邓颖超、刘清扬、郭隆真、杨秀峰、康世恩、荣高棠等，有学界名人梁漱溟、张申府、汤用彤等，有中科院院士严陆光、郝柏林、李树深、贺泓等，也有许绍发、蔡振华等一批体育界精英。新中国成立以来，学校共为国家培养了26万余名各类专业人才。
                    </Text >
                    <Text style={{ fontSize: 18*s, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校于2011年整体迁入新校区办学。新校区占地1829亩，馆藏图书303万册，中外文数据库67 个。学校现有在职教职工2606人，其中专任教师1617人。在职教职工中，正高职人员431人，副高职人员915人，中国科学院院士1人，省级以上各类优秀专家215人次，博士研究生导师124人，硕士研究生导师768人。在校本科生23692人，研究生4638人，成人教育学生8418人。
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}