import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Liangxingjie extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/梁兴杰.jpg')} style={styles.img} />
                    <Text style={styles.name}>【梁/兴/杰】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        梁兴杰，中国科学院“百人计划”研究员，国家“杰出青年”基金获得者，国家纳米科学中心研究员，博士生导师。
                    </Text>
                    <Text style={styles.introduction}>
                        2012年获得“国家杰出青年”基金资助，曾主持科技部“973”等项目2000年在中国科学院生物物理研究所，生物大分子国家重点实验室膜分子生物学室获得博士学位，其后在美国国立卫生研究院(NIH)国家肿瘤研究所(NCI)细胞生物学实验室(LCB),在NIH副院长Michael M. Gottesman博士研究组从事博士后研究，之后在美国国家神经疾病与中风研究所(NINDS),帕特神经科学研究中心(Porter Neuroscience Research Center)，外科和分子肿瘤神经实验室工作，研究恶性脑灰质瘤的药物和基因治疗机理。回国前作为助理教授在Howard University医学院放射医疗系从事纳米药物分子在动物体内的分子和细胞成像研究。
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