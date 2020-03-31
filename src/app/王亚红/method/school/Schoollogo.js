import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions,Actions, Image, Animated, TouchableOpacity, ImageBackground } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Schoollogo extends Component {
    constructor(){
        super();
        this.state={
            height1:new Animated.Value(0),
            height2:new Animated.Value(0),
            height3:new Animated.Value(0),
        }
    }

    show1 = ()=>{
        Animated.timing(this.state.height1,{
            toValue:85,
            duration: 1000,
        }).start()
    }
    show2 = ()=>{
        Animated.timing(this.state.height2,{
            toValue:305,
            duration: 1000,
        }).start()
    }
    show3 = ()=>{
        Animated.timing(this.state.height3,{
            toValue:235,
            duration: 1000,
        }).start()
    }
    render() {
        return (
            <ScrollView>
                
                <TouchableOpacity style={styles.name} onPress={()=>{this.show1()}}>
                    <Text style={{ fontWeight: "bold",fontSize:20 }}>校&nbsp;&nbsp;名</Text>
                </TouchableOpacity>
                <Animated.View style={{height:this.state.height1,width:'100%'}}>
                    <ImageBackground style={{height:'95%',width:'95%',marginTop:10*s,marginLeft:'2.5%',marginBottom:20*s}} source={require('../../../assets/gonglve/xiaoming.png')} />
                </Animated.View>

                <TouchableOpacity style={[styles.name,{marginTop:20*s}]}  onPress={()=>{this.show2()}}>
                    <Text style={{ fontWeight: "bold",fontSize:20 }}>校&nbsp;&nbsp;训</Text>
                </TouchableOpacity>
                <Animated.View style={{height:this.state.height2,width:'100%'}}>
                    <ImageBackground style={{height:'95%',width:'60%',marginTop:10*s,marginLeft:'33%',marginBottom:20*s}} source={require('../../../assets/gonglve/xiaoxun.png')} />
                </Animated.View>

                <TouchableOpacity style={[styles.name,{marginTop:20*s}]} onPress={()=>{this.show3()}}>
                    <Text style={{ fontWeight: "bold",fontSize:20 }}>校&nbsp;&nbsp;徽</Text>
                </TouchableOpacity>
                <Animated.View style={{height:this.state.height3,width:'100%'}}>
                    <ImageBackground style={{height:'95%',width:'70%',marginTop:10*s,marginLeft:'25%',marginBottom:20*s}} source={require('../../../assets/gonglve/xiaohui.gif')} />
                </Animated.View>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    name:{
        height:50*s,
        width:'100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    txt:{
        height:'100%',
        width:'100%'
    }
})