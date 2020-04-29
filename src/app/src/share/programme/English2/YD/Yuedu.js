import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Yuedu extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center',marginTop:15, alignItems: 'center' }}>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 1</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Unlike so-called basic emotions such as sadness, fear, and anger, guilt emerges a little later, in conjunction...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail1() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 2</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Amold Schwarzenegger, Dia Mirza and Adrian Grenier have a message for you: It's easy to...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail2() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 3</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;American farmers have been complaining of labor shortages for several years.The complaints are unlikely to stop without an overhaul of...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail3() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 4</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Forests give us shade, quiet and one of ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail4() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}