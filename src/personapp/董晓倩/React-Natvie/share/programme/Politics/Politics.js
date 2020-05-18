import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Politics extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center',marginTop:15, alignItems: 'center' }}>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2020年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail1() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2019年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail2() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2018年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail3() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2017年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail4() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2016年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail5() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2015年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail6() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2014年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail7() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2013年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail8() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2012年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail9() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-around',alignItems:'center',flexDirection:'row',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 ,marginRight:20}}>2011年政治考研真题</Text>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.politicsDetail10() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
