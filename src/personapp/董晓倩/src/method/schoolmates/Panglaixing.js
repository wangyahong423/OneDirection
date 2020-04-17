import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Panglaixing extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/庞来兴.jpg')} style={styles.img} />
                    <Text style={styles.name}>【庞/来/兴】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        庞来兴，河北沧州人，1974年生，企业家、学者。中山大学博士后。
                    </Text>
                    <Text style={styles.introduction}>
                        现为广州博兴化工科技有限公司总经理，中国感光学会辐射固化专业委员会委员；曾任南昌航空大学兼职硕士导师，广东省科技咨询专家库成员。2007年创办广州市博兴化工科技有限公司，2010年创办广东新丰博兴聚合材料有限公司。2013年入选首届广州青年企业家发展领航计划，评为科技部首届科技创新创业领军人才，并入选首批国家高层次人才特殊支持计划（又称“万人计划”）。
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