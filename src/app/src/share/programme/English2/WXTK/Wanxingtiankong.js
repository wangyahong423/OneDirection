import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Wanxingtiankong extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center',marginTop:15, alignItems: 'center' }}>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 1</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Weighing yourself regularly is a wonderful way to stay aware of any significant  weight fluctuations  1  , when done too...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail1() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 2</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Why do people read negative Internet comments and do other things that will obviously ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail2() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 3</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;"The Internet affords anonymity to its users — a boon to privacy and freedom of speech. But that very anonymity is also behind...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail3() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 4</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;A recent poll indicated that half the teenagers in the United States believe that communication between them and their parents ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail4() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 5</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Chronic insomnia is a major public health problem. And too many people are using__1__ therapies，even while there are a few ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail5() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 6</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;There is growing interest in East Japan Railway Co. ltd，one of the six companies，created out of the privatized nationa ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail6() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 7</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;People are, on the whole, poor at considering background information when making individual decisions. At first ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail7() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 8</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Aging poses a serious challenge to OECD(Organization of Economic Co-operation and Development)countries ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail8() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 9</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;We have moregenes in common with people we pick to be our friends than with strangers....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail9() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 10</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;In our contemporary culture, the prospect ofcommunicating with -- or even looking at -- a stranger is virtually  ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail10() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 11</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Happy people work differently. They’re more productive, more creative...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail11() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 12</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;People have speculated for centuries about a future without work .Today is no different, with academics, writers ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail12() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 13</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Thinner isn’t always better. A number of studies have ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail13() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 14</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Given the advantages of electronic money, you might think that we would move ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail14() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 15</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Millions of Americans and foreignerssee GI.Joe as a mindless war toy ,the symbol of American militarys ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail15() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 16</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;"The Internet affords anonymity to its users — a boon to privacy and freedom off...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail16() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 17</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The outbreak of swine flu that was first deteccted in Mexico was declared a global  ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail17() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 18</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Research on animal intelligence always makes me wonder just how smart humans are...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail18() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 19</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The idea that some groups of people may be more intelligent than others is one of those hypotheses that ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail19() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center',marginTop:15}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 20</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;　By 1830 the former Spanish and Portuguese colonies had become independent nations....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.wxtkDetail20() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}