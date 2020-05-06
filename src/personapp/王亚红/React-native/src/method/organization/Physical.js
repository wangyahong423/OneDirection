import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Physical extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.ledao}>
                        <ImageBackground source={require('../../../assets/gonglve/taiquandao.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>乐道跆拳道协会</Text>
                    </View>
                    <View style={styles.aiping}>
                        <ImageBackground source={require('../../../assets/gonglve/pingpangqiu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>爱乒协会</Text>
                    </View>
                </View>
                
                <View style={styles.box}>
                    <View style={styles.yangguang}>
                        <ImageBackground source={require('../../../assets/gonglve/yangguangyundong.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>阳光运动协会</Text>
                    </View>
                    <View style={styles.xiangyu}>
                        <ImageBackground source={require('../../../assets/gonglve/yumaoqiu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>翔羽羽毛球协会</Text>
                    </View>
                </View>
                <View style={[styles.box,{marginBottom:20*s}]}>
                    <View style={styles.zixingche}>
                        <ImageBackground source={require('../../../assets/gonglve/zixingche.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>自行车协会</Text>
                    </View>
                    <View style={styles.piaoyiban}>
                        <ImageBackground source={require('../../../assets/gonglve/piaoyiban.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>漂移板</Text>
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
    ledao:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    aiping:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yangguang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiangyu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zixingche:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    piaoyiban:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    }
})