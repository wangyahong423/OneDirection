import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Fanqianwen extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/schoolmatebg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode='stretch'
            >
                <View style={styles.box}>
                    <Image source={require('../../../assets/gonglve/范千文.jpg')} style={styles.img} />
                    <Text style={styles.name}>【范/千/文】</Text>
                    <Image source={require('../../../assets/gonglve/line.png')} style={{ width: '90%' }} resizeMode='stretch' />
                    <Text style={styles.introduction}>
                        范千文，男，汉族，1954年7月生，中共党员，河北井陉矿区人。大学学历，法学硕士。研究员。
                    </Text>
                    <Text style={styles.introduction}>
                        1971年7月参加工作，1976年6月加入中国共产党。曾任井径矿区北寨、南寨学校副校长。1979年7月毕业于河北师范大学化学系，1999年1月，获河北师范大学法学硕士。毕业后在河北医科大学工作，1984年5月调至河北省教育厅招生办工作，历任河北省教育厅学生处副处长、处长。2004年10月起任石家庄铁道学院党委副书记。2010年3月任石家庄铁道大学党委副书记兼纪委书记。
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