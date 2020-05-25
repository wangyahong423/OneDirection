import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Situlanfang extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.png')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/司徒兰芳.png')} style={styles.img} />
                    <Text style={styles.name}>【司/徒/兰/芳】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        司徒兰芳，1月15日出生于河北省唐山市，中国内地女歌手。毕业于河北师范大学音乐系。
                    </Text>
                    <Text style={styles.introduction}>
                        2008年11月7日，因推出个人首支天籁歌曲《凤凰展翅》而正式出道；12月24日，参与拍摄Mv歌曲《凤凰展翅》。2014年8月5日，参与央视《星光大道》周赛获得冠军。2015年4月22日，发行歌曲《大叔很跩》；5月26日，发行电音歌曲《带你潇洒带你嗨》。
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