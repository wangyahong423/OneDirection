import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Haobolin extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/郝柏林.png')} style={styles.img} />
                    <Text style={styles.name}>【郝/柏/林】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        郝柏林（1934年6月26日—2018年3月7日），北京人，理论物理学家，中国科学院学部委员（院士）、第三世界科学院院士，复旦大学教授、博士生导师。
                    </Text>
                    <Text style={styles.introduction}>
                        1952年郝柏林加入中国共产党；1954年进入前苏联哈尔科夫工程经济学院学习；1956年转学到哈尔科夫国立大学物理数学系；1959年从哈尔科夫国立大学毕业后到中国科学院理论物理研究所工作，先后担任研究实习员、助理研究员、研究员；1961年至1963年在莫斯科大学和苏联科学院物理问题研究所作就读研究生；1980年当选为中国科学院学部委员（院士）；1990年至1994年担任中国科学院理论物理研究所所长；1995年当选为第三世界科学院院士；1997年转向理论生命科学领域研究；2005年担任复旦大学教授；2018年3月7日在北京公安医院逝世，享年84岁
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