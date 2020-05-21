import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Dengyingchao extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/邓颖超.jpg')} style={styles.img} />
                    <Text style={styles.name}>【邓/颖/超】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        邓颖超（1904年2月4日-1992年7月11日）原名邓文淑，祖籍河南光山，生于广西南宁。邓颖超青年时代投身革命，1924年参加中国共产主义青年团，1925年3月转为中国共产党党员。
                    </Text>
                    <Text style={styles.introduction}>
                        邓颖超同志是伟大的无产阶级革命家、政治家、著名社会活动家、坚定的马克思主义者，党和国家的卓越领导人，中国妇女运动的先驱。她在70多年的革命生涯中，为中国革命、建设和改革事业毫无保留地奉献了自己的一切。她是20世纪中国妇女的杰出代表，也是中国妇女的骄傲，在国内外享有崇高声誉，深受全党和全国人民的尊敬和爱戴。
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