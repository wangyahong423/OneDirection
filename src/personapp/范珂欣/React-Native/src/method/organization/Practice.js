import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Practice extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.yanyang}>
                        <ImageBackground source={require('../../../assets/gonglve/yanyang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>晏阳初三农学社</Text>
                    </View>
                    <View style={styles.tianshi}>
                        <ImageBackground source={require('../../../assets/gonglve/tianshiaixin.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>天使爱心社</Text>
                    </View>
                </View>
                
                <View style={styles.box}>
                    <View style={styles.yanjing}>
                        <ImageBackground source={require('../../../assets/gonglve/yanjing.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>眼镜服务中心</Text>
                    </View>
                    <View style={styles.qingchun}>
                        <ImageBackground source={require('../../../assets/gonglve/qingchun.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>青春之歌导游队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.chunyu}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>春雨爱心社</Text>
                    </View>
                    <View style={styles.ziqiang}>
                        <ImageBackground source={require('../../../assets/gonglve/ziqiang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>自强社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.lvhang}>
                        <ImageBackground source={require('../../../assets/gonglve/huanbao.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>绿航环保协会</Text>
                    </View>
                    <View style={styles.aixin}>
                        <ImageBackground source={require('../../../assets/gonglve/aixin.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:60*s,marginTop:10*s}}>爱心365</Text>
                    </View>
                </View>
                <View style={[styles.box,{marginBottom:20*s}]}>
                    <View style={styles.lvse}>
                        <ImageBackground source={require('../../../assets/gonglve/lvse.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:28*s,marginTop:10*s}}>绿色方舟环保协会</Text>
                    </View>
                    <View style={styles.zhonghua}>
                        <ImageBackground source={require('../../../assets/gonglve/minsu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:28*s,marginTop:10*s}}>中华风民俗文化社</Text>
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
        paddingTop:20*s,
    },
    yanyang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    tianshi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yanjing:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    qingchun:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    chunyu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    ziqiang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    lvhang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    aixin:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    lvse:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zhonghua:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    }
})