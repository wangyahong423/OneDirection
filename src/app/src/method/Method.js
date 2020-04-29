import React, { Component } from 'react'
import { Text, View, Linking, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Method extends Component {
    onecard = () => {
        Actions.onecard()
    }
    organization = () => {
        Actions.organization()
    }
    school = () => {
        Actions.school()
    }
    study = () => {
        Actions.study()
    }
    schoolmates = () => {
        Actions.schoolmates()
    }
    college = () => {
        Actions.college()
    }
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Text style={{ color: '#fff', lineHeight: 30 * s, }}>校园新生通</Text>
                </View>
                <ScrollView style={{marginBottom:30}}>
                    {/* 顶部 */}

                    {/* 轮播图 */}
                    <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='1.5' style={styles.wrapper} showsButtons={false}>
                        <View>
                            <Image source={require('../../assets/gonglve/method1.jpg')} style={{ height: 223, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../assets/gonglve/method2.jpg')} style={{ height: 223, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../assets/gonglve/method3.jpg')} style={{ height: 223, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../assets/gonglve/method4.jpg')} style={{ height: 223, width: '100%' }} />
                        </View>
                    </Swiper>
                    {/* 六项 */}
                    <View style={styles.six}>
                        <View style={styles.sixOne}>
                            <TouchableOpacity onPress={this.onecard} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37376F' }}><Icon name='vcard-o' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>一卡通</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.organization} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37376F' }}><Icon name='resistance' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>社团组织</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.school} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37376F' }}><Icon name='fort-awesome' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>学校</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sixOne}>
                            <TouchableOpacity onPress={this.study} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37376F' }}><Icon name='trophy' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>学习</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.schoolmates} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37376F' }}><Icon name='group' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>杰出校友</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.college} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37376F' }}><Icon name='mortar-board' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>学院</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { Actions.collegemajor() }} style={{ width: '94%', backgroundColor: 'red', marginTop: 15 * s, marginLeft: '3%', borderRadius: 30, overflow: 'hidden' }}>
                        <ImageBackground style={{ width: '100%', flexDirection: 'row' }} source={require('../../assets/gonglve/ks.png')}>
                            <Icon name='search' size={28} style={{ lineHeight: 60 * s, marginLeft: 20 }} color="white" />
                            <Text style={{ lineHeight: 60 * s, fontSize: 26, color: '#ceff85', fontWeight: 'bold', marginLeft: 10, textShadowColor: '#C0C0C0', textShadowRadius: 5, textShadowOffset: { width: 5, height: -4 } }}>快速了解自己的专业？</Text>
                            <Text style={{ lineHeight: 60 * s, fontSize: 18, color: '#544de9', fontWeight: 'bold', marginLeft: 10, textShadowColor: '#C0C0C0', textShadowRadius: 5, textShadowOffset: { width: 5, height: -4 } }}>&nbsp;&nbsp;查看详情</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={styles.ying}>
                        <View style={{ width: '96%', borderLeftWidth: 5, borderLeftColor: 'blue', paddingLeft: 10 * s, backgroundColor: 'white', marginTop: 10 * s }}>
                            <Text>一键直达</Text>
                        </View>
                        <View style={styles.sixOne}>
                            <TouchableOpacity onPress={() => { Actions.notesks() }} style={styles.yjzd}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#37a9c7' }}><Icon name='search' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10, color: '#37a9c7' }}>添加笔记</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Actions.obtainemployment() }} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#efcd00' }}><Icon name='hand-stop-o' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10, color: '#efcd00' }}>就业服务</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Linking.openURL('http://heshida.jiuyeb.cn/').catch(err => console.error('An error occurred', err)); }} style={styles.yjzd}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: '#12ed5a' }}><Icon name='handshake-o' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10, color: '#12ed5a' }}>校友会</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
let styles = StyleSheet.create({
    // 顶部
    header: {
        width: '100%',
        height: 30 * s,
        backgroundColor: '#37376F',
        alignItems: 'center',

    },
    // 轮播图
    wrapper: {
        height: 220 * s
    },
    // 六项
    six: {
        height: 260 * s,
        width: '96%',
        marginTop: 15 * s,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: '2%'
    },
    sixOne: {
        justifyContent: 'space-around',
        height: 130,
        flexDirection: 'row',
        width: '100%',
    },
    one: {
        height: 100 * s,
        width: 80 * s,
        marginTop: 15,
        alignItems: 'center',
    },
    ying: {
        width: '96%',
        backgroundColor: 'white',
        marginTop: '3%',
        marginLeft: '3%',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10 * s
    },
    yjzd: {
        height: 100 * s,
        width: 90 * s,
        marginTop: 15,
        alignItems: 'center',
    },
})