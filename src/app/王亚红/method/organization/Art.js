import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Art extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.xueshenghui}>
                        <ImageBackground source={require('../../../assets/gonglve/xueshenghui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校学生会</Text>
                    </View>
                    <View style={styles.xiaoqingxie}>
                        <ImageBackground source={require('../../../assets/gonglve/qingxie.jpeg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校青协</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaotuanwei}>
                        <ImageBackground source={require('../../../assets/gonglve/tuanwei.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校团委</Text>
                    </View>
                    <View style={styles.tushuguanduzhexiehui}>
                        <ImageBackground source={require('../../../assets/gonglve/tushuguan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>图书馆读者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaohongshizihui}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>校红十字会</Text>
                    </View>
                    <View style={styles.xiaoyishutuan}>
                        <ImageBackground source={require('../../../assets/gonglve/yishutuan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guoqidui}>
                        <ImageBackground source={require('../../../assets/gonglve/guoqidui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生国旗队</Text>
                    </View>
                    <View style={styles.libindui}>
                        <ImageBackground source={require('../../../assets/gonglve/libindui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生礼宾队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guangbotai}>
                        <ImageBackground source={require('../../../assets/gonglve/guangbotai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>广播台</Text>
                    </View>
                    <View style={styles.qinzhu}>
                        <ImageBackground source={require('../../../assets/gonglve/qinzhu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>勤助中心</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xueshenghui}>
                        <ImageBackground source={require('../../../assets/gonglve/xueshenghui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校学生会</Text>
                    </View>
                    <View style={styles.xiaoqingxie}>
                        <ImageBackground source={require('../../../assets/gonglve/qingxie.jpeg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校青协</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaotuanwei}>
                        <ImageBackground source={require('../../../assets/gonglve/tuanwei.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校团委</Text>
                    </View>
                    <View style={styles.tushuguanduzhexiehui}>
                        <ImageBackground source={require('../../../assets/gonglve/tushuguan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>图书馆读者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaohongshizihui}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>校红十字会</Text>
                    </View>
                    <View style={styles.xiaoyishutuan}>
                        <ImageBackground source={require('../../../assets/gonglve/yishutuan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guoqidui}>
                        <ImageBackground source={require('../../../assets/gonglve/guoqidui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生国旗队</Text>
                    </View>
                    <View style={styles.libindui}>
                        <ImageBackground source={require('../../../assets/gonglve/libindui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生礼宾队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guangbotai}>
                        <ImageBackground source={require('../../../assets/gonglve/guangbotai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>广播台</Text>
                    </View>
                    <View style={styles.qinzhu}>
                        <ImageBackground source={require('../../../assets/gonglve/qinzhu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>勤助中心</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xueshenghui}>
                        <ImageBackground source={require('../../../assets/gonglve/xueshenghui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校学生会</Text>
                    </View>
                    <View style={styles.xiaoqingxie}>
                        <ImageBackground source={require('../../../assets/gonglve/qingxie.jpeg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校青协</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaotuanwei}>
                        <ImageBackground source={require('../../../assets/gonglve/tuanwei.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校团委</Text>
                    </View>
                    <View style={styles.tushuguanduzhexiehui}>
                        <ImageBackground source={require('../../../assets/gonglve/tushuguan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>图书馆读者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaohongshizihui}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>校红十字会</Text>
                    </View>
                    <View style={styles.xiaoyishutuan}>
                        <ImageBackground source={require('../../../assets/gonglve/yishutuan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guoqidui}>
                        <ImageBackground source={require('../../../assets/gonglve/guoqidui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生国旗队</Text>
                    </View>
                    <View style={styles.libindui}>
                        <ImageBackground source={require('../../../assets/gonglve/libindui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生礼宾队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guangbotai}>
                        <ImageBackground source={require('../../../assets/gonglve/guangbotai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>广播台</Text>
                    </View>
                    <View style={styles.qinzhu}>
                        <ImageBackground source={require('../../../assets/gonglve/qinzhu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>勤助中心</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xueshenghui}>
                        <ImageBackground source={require('../../../assets/gonglve/xueshenghui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校学生会</Text>
                    </View>
                    <View style={styles.xiaoqingxie}>
                        <ImageBackground source={require('../../../assets/gonglve/qingxie.jpeg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校青协</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaotuanwei}>
                        <ImageBackground source={require('../../../assets/gonglve/tuanwei.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校团委</Text>
                    </View>
                    <View style={styles.tushuguanduzhexiehui}>
                        <ImageBackground source={require('../../../assets/gonglve/tushuguan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>图书馆读者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaohongshizihui}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>校红十字会</Text>
                    </View>
                    <View style={styles.xiaoyishutuan}>
                        <ImageBackground source={require('../../../assets/gonglve/yishutuan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guoqidui}>
                        <ImageBackground source={require('../../../assets/gonglve/guoqidui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生国旗队</Text>
                    </View>
                    <View style={styles.libindui}>
                        <ImageBackground source={require('../../../assets/gonglve/libindui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生礼宾队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guangbotai}>
                        <ImageBackground source={require('../../../assets/gonglve/guangbotai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>广播台</Text>
                    </View>
                    <View style={styles.qinzhu}>
                        <ImageBackground source={require('../../../assets/gonglve/qinzhu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>勤助中心</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xueshenghui}>
                        <ImageBackground source={require('../../../assets/gonglve/xueshenghui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校学生会</Text>
                    </View>
                    <View style={styles.xiaoqingxie}>
                        <ImageBackground source={require('../../../assets/gonglve/qingxie.jpeg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校青协</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaotuanwei}>
                        <ImageBackground source={require('../../../assets/gonglve/tuanwei.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>校团委</Text>
                    </View>
                    <View style={styles.tushuguanduzhexiehui}>
                        <ImageBackground source={require('../../../assets/gonglve/tushuguan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>图书馆读者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiaohongshizihui}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>校红十字会</Text>
                    </View>
                    <View style={styles.xiaoyishutuan}>
                        <ImageBackground source={require('../../../assets/gonglve/yishutuan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>校艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guoqidui}>
                        <ImageBackground source={require('../../../assets/gonglve/guoqidui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生国旗队</Text>
                    </View>
                    <View style={styles.libindui}>
                        <ImageBackground source={require('../../../assets/gonglve/libindui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生礼宾队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guangbotai}>
                        <ImageBackground source={require('../../../assets/gonglve/guangbotai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>广播台</Text>
                    </View>
                    <View style={styles.qinzhu}>
                        <ImageBackground source={require('../../../assets/gonglve/qinzhu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>勤助中心</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guangbotai}>
                        <ImageBackground source={require('../../../assets/gonglve/guangbotai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>广播台</Text>
                    </View>
                    <View style={styles.qinzhu}>
                        <ImageBackground source={require('../../../assets/gonglve/qinzhu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>勤助中心</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop:20*s
    },
    box2:{
        paddingTop:20*s,
        paddingLeft:30*s
    },
    xueshenghui:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiaoqingxie:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiaotuanwei:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    tushuguanduzhexiehui:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiaohongshizihui:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiaoyishutuan:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    guoqidui:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    libindui:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    guangbotai:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    qinzhu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    gongyulou:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    }
})