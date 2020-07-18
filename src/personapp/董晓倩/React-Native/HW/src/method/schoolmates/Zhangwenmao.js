import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Zhangwenmao extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/张文茂.png')} style={styles.img} />
                    <Text style={styles.name}>【张/文/茂】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        张文茂，男，1954年出生，中共党员，特级教师，中学正高级教师，正高级政工师，曾任河北衡水中学校长。自贡衡水一中富顺学校名誉校长。2017年5月起，担任衡水中学保定分校（保定贺阳衡水一中高级中学）名誉校长.
                    </Text>
                    <Text style={styles.introduction}>
                        曾先后在《人民日报》、《人民教育》等国家、省级报刊发表理论文章20余篇，主编并正式出版了《张文茂与责任教育》、《我这样做校长》、《衡水中学解码》等30余本著作。作为全国知名高中校长，曾多次应邀到全国各地作学术报告。
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