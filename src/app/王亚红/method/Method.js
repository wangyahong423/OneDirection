import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions,Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Method extends Component {
    onecard = ()=>{
        Actions.onecard()
    }
    organization = ()=>{
        Actions.organization()
    }
    school = ()=>{
        Actions.school()
    }
    study = ()=>{
        Actions.study()
    }
    shetuan = ()=>{
        Actions.shetuan()
    }
    college = ()=>{
        Actions.college()
    }
    render() {
        return (
            <ScrollView>
                {/* 顶部 */}
                <View style={styles.header}>
                    <Text style={{ color: '#fff', lineHeight:30*s,}}>校园新生通</Text>
                </View>
                {/* 轮播图 */}
                <Swiper style={styles.wrapper} showsButtons={false}>
                    <View>
                        <Image source={require('../../assets/gonglve/method1.jpg')} style={{height:223,width:'100%'}} />
                    </View>
                    <View>
                        <Image source={require('../../assets/gonglve/method2.jpg')} style={{height:223,width:'100%'}} />
                    </View>
                    <View>
                        <Image source={require('../../assets/gonglve/method3.jpg')} style={{height:223,width:'100%'}} />
                    </View>
                    <View>
                        <Image source={require('../../assets/gonglve/method4.jpg')} style={{height:223,width:'100%'}} />
                    </View>
                </Swiper>
                {/* 六项 */}
                <View style={styles.six}>
                    <View style={styles.sixOne}>
                        <TouchableOpacity onPress={this.onecard} style={styles.one}>
                            <View style={{height:70*s,width:70*s,alignItems:'center',justifyContent:'center',borderRadius:35*s,backgroundColor:'blue'}}><Icon  name='vcard-o' size={36} color="white" /></View>
                            <Text style={{marginTop:10}}>一卡通</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.organization} style={styles.one}>
                            <View style={{height:70*s,width:70*s,alignItems:'center',justifyContent:'center',borderRadius:35*s,backgroundColor:'blue'}}><Icon  name='resistance' size={36} color="white" /></View>
                            <Text style={{marginTop:10}}>组织</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.school} style={styles.one}>
                            <View style={{height:70*s,width:70*s,alignItems:'center',justifyContent:'center',borderRadius:35*s,backgroundColor:'blue'}}><Icon  name='fort-awesome' size={36} color="white" /></View>
                            <Text style={{marginTop:10}}>学校</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sixOne}>
                        <TouchableOpacity onPress={this.study} style={styles.one}>
                            <View style={{height:70*s,width:70*s,alignItems:'center',justifyContent:'center',borderRadius:35*s,backgroundColor:'blue'}}><Icon  name='trophy' size={36} color="white" /></View>
                            <Text style={{marginTop:10}}>学习</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.shetuan} style={styles.one}>
                            <View style={{height:70*s,width:70*s,alignItems:'center',justifyContent:'center',borderRadius:35*s,backgroundColor:'blue'}}><Icon  name='institution' size={36} color="white" /></View>
                            <Text style={{marginTop:10}}>社团</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.college} style={styles.one}>
                            <View style={{height:70*s,width:70*s,alignItems:'center',justifyContent:'center',borderRadius:35*s,backgroundColor:'blue'}}><Icon  name='mortar-board' size={36} color="white" /></View>
                            <Text style={{marginTop:10}}>学院</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    // 顶部
    header: {
        width: '100%',
        height: 30 * s,
        backgroundColor: 'blue',
        alignItems: 'center',

    },
    // 轮播图
    wrapper: {
        height: 220*s
    },
    // 六项
    six:{
        height:240*s,
        width:'100%',
        marginTop:30*s,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    sixOne:{
        justifyContent:'space-around',
        height:120,
        flexDirection:'row',
        width:'100%',
    },
    one:{
        height:100*s,
        width:80*s,
        marginTop:10,
        alignItems:'center',
    }
})