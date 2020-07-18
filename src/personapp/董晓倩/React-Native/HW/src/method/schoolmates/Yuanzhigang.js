import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Yuanzhigang extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/袁志刚.png')} style={styles.img} />
                    <Text style={styles.name}>【袁/志/刚】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        袁志刚，男,1958年生于上海。法国巴黎社会科学高等研究院经济学博士，教育部“长江学者”特聘教授，博士生导师，全国教学名师。
                    </Text>
                    <Text style={styles.introduction}>
                        复旦大学经济学院原院长，华东师范大学经济与管理学部学术委员会主任；复旦大学理论经济学博士后流动站负责人，复旦大学校务委员会委员，教育部“长江学者奖励计划”特聘教授，博士生导师，国务院政府特殊津贴专家，2006年国家高校教学名师。兼任复旦大学就业与社会保障研究中心主任，教育部经济学教学指导委员会委员，国家劳动和社会保障部专家咨询委员会委员，上海经济学会副会长等职。
                    </Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%', marginTop: 15 * s }} resizeMode='stretch' />
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        width: '80%',
        height: '85%',
        margin: '10%',
        alignItems: 'center'
    },
    img: {
        height: 130 * s,
        width: 100 * s,
        borderRadius: 20 * s,
        marginTop: '10%'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 15 * s,
        marginBottom: 15 * s
    },
    introduction: {
        width: '70%',
        color: '#ffffff',
        marginTop: 15 * s,
        // textAlign:'center'
    }
});