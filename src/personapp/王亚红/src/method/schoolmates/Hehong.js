import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Hehong extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/贺弘.jpg')} style={styles.img} />
                    <Text style={styles.name}>【贺/泓】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        贺泓，1965年1月15日出生于河北省邯郸市，大气污染防治专家，中国工程院院士，中国科学院生态环境研究中心研究员、博士生导师，中国科学院城市环境研究所副所长。
                    </Text>
                    <Text style={styles.introduction}>
                        1985年贺泓毕业于河北师范大学；1990年获国家教委选派赴日本留学；1994年毕业于日本东京大学，获理学博士学位；2000年入选中国科学院百人计划；2001年底回国进入中国科学院生态环境研究中心工作；2004年获得国家杰出青年科学基金资助；2006年入选新世纪百千万人才工程国家级人选；2008年获得科技奥运先进个人称号；2014年领衔入选科技部创新人才推进计划重点领域创新团队；2015年出任中国科学院城市环境研究所副所长、中国科学院区域大气环境研究卓越创新中心首席科学家；2017年获得何梁何利基金科学与技术创新奖，同年当选为中国工程院院士 。2018年当选为第十三届全国人民代表大会代表。
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