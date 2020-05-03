import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Changnanju extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center',marginTop:15, alignItems: 'center' }}>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 1</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;My dream has always been to work somewhere in an area between fashion and ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ1() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 2</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;When a new movement in art attains a certain fashion, it is advisable to...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ2() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 3</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;While talking to you, your could-be employer is deciding whether your...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ3() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 4</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The change met the technical requirements of the new age...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ4() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 5</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;A survey of news stories in 1996 reveals that the anti-science tag has been ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ5() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 6</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Peking Opera facial makeup is a kind of specialmakeup method with national characteristic ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ6() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 7</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Eighty percent of China's net users frequently or occasionally visite-business websites. Less...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ7() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 8</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Chopsticks, invented by ancient Chinese people, are a kind of tableware with distinct national features, ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ8() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 9</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Li Bai was a famous poet in the Tang Dynasty. He and his friend Du Fu were the two most prominent ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ9() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 10</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The color of red in Chinese culture usually means good luck, longevity and happiness....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ10() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 11</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Many recent college graduates can’t find a job and students are fearful about their future. ....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ11() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 12</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;While fossil fuels- coal, oil, gas- still generate roughly 85 percent at the world's  ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ12() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 13</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;China’s young adults are gaining more weight and exercising less than their elders. ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ13() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 14</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Chinese Dragon Dragon totem worship in China has been around for the last 8,000 years....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ14() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 15</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The Silk Road is a historically important international trade route between China and the Mediterranean....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ15() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 16</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Globalization is the process of internationalintegration. It originated ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ16() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 17</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;One might ask why speculation is permitted when there is so real a danger of loss. ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ17() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 18</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;My dream has always been to work somewhere in an area between fashion and publishing. Two...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ18() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 19</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;At present,the development of Asia is facing new challenges as well as...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ19() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 20</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Chinese painting is an important part of thecountry's cultural heritage....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.CNJ20() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}