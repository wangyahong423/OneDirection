import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, ImageBackground, SafeAreaView, TouchableOpacity ,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;


export default class Physical extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                width: '100%',
                height: 63 * s,
                backgroundColor: '#37376F',
                alignItems: 'center',
                justifyContent: "center",
                flexDirection: "row"
            }}>
                <TouchableOpacity
                    onPress={() => Actions.pop()}
                    style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                    <Image source={require('../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                </TouchableOpacity>
                <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>体育健身类</Text>
            </View>
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/taiquandao.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>乐道跆拳道协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/pingpangqiu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>爱乒协会</Text>
                    </View>
                </View>
                
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yangguangyundong.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>阳光运动协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yumaoqiu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>翔羽羽毛球协会</Text>
                    </View>
                </View>
                <View style={[styles.box,{marginBottom:20*s}]}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zixingche.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>自行车协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/piaoyiban.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>漂移板</Text>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
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
    div:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden',
        alignItems:"center"
    }
})