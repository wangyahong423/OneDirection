import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Luhongchang extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/路洪昌.jpg')} style={styles.img} />
                    <Text style={styles.name}>【路/洪/昌】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        路洪昌，男，汉族，1961年12月生，河北孟村人，1992年6月加入中国共产党，1982年7月参加工作，河北师范大学地理专业毕业，大学学历，理学学士，副编审。
                    </Text>
                    <Text style={styles.introduction}>
                        现任河北省承德市委常委、市纪委书记，市监察委主任。
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