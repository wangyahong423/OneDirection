import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Practice extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yanyang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>晏阳初三农学社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/tianshiaixin.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>天使爱心社</Text>
                    </View>
                </View>
                
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yanjing.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>眼镜服务中心</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/qingchun.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>青春之歌导游队</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/hongshizihui.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>春雨爱心社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/ziqiang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>自强社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/huanbao.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>绿航环保协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/aixin.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>爱心365</Text>
                    </View>
                </View>
                <View style={[styles.box,{marginBottom:20*s}]}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/lvse.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>绿色方舟环保协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/minsu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>中华风民俗文化社</Text>
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
    div:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden',
        alignItems:"center"
    },
})