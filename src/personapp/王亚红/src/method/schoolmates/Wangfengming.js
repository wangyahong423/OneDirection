import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Wangfengming extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/王凤鸣.jpg')} style={styles.img} />
                    <Text style={styles.name}>【王/凤/鸣】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        王凤鸣，男，1963年8月20日出生，博士、教授、博士生导师。现任河北地质大学校长、中共河北地质大学第一届委员会党委委员、常委、副书记.
                    </Text>
                    <Text style={styles.introduction}>
                        河北省第十届、十一届人民代表大会代表、省人大法制委员会委员。全国青联社会科学工作者联谊会常务理事。河北省中青年社科专家50人工程首批入选者。河北省有突出贡献中青年专家、河北省第六批省管优秀专家。
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