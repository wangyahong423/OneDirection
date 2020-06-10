import React, { Component } from 'react'
import { Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Subject extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 70 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>学科专业</Text>
                </View>
                <View >
                    <Text style={{ fontSize: 16 * s, width: '93%', lineHeight: 27, marginLeft: '3%' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我校于1981年获批硕士学位授权单位，是全国首批硕士学位授权单位之一；1998年，学校获批博士学位授权单位。经过三十多年的努力，学校的学科建设取得了长足的进步和发展。
                    </Text >
                    <Text style={{ fontSize: 16 * s, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学位授权点方面，学校现有博士学位授权一级学科11个，硕士学位授权一级学科29个；博士专业学位授权类别1种，硕士专业学位授权类别14种；学科专业覆盖哲学、经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等十大学科门类。
                    </Text>
                    <Text style={{ fontSize: 16 * s, width: '93%', lineHeight: 27, marginLeft: '3%', marginTop: '4%' }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重点学科方面，学校现有国家重点学科1个，河北省“双一流”建设学科7个，河北省高校国家重点学科培育项目1个，河北省强势特色学科4个，省级重点学科14个，校级重点学科18个。
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}
