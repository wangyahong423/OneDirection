import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xiachuancai extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/夏传才.jpg')} style={styles.img} />
                    <Text style={styles.name}>【夏/传/才】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        1924-2017，安徽亳县人，现代著名学者。1945年毕业于北京师范大学中文系。历任晋察冀边区民政处、军区民运部干事，北京师范大学教师，天津师范学院讲师，河北师范学院学报主编，河北师范学院教授、研究生导师，中国诗经学会会长，全球汉诗总会名誉理事，教授。
                    </Text>
                    <Text style={styles.introduction}>
                        1998年加入中国作家协会。著有专著《诗经研究史概要》、《诗经语言艺术》、《中国古代文学理论名篇今译》，主编《中国现代文学名篇选读》(上、下册，大学教材)等。1924年生于今安徽省亳州市。40年代的诗人，50年代从事古典文学研究。现任河北师大教授，博士生导师，中国诗经学会会长。2017年2月7日下午在石家庄逝世，享年94岁。
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