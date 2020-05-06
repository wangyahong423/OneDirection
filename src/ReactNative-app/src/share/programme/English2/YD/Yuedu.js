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
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 5</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Every Saturday morning, at 9 am, more than 50,000 runners ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail5() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 6</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;With so much focus on children's use of screens, it's easy for parents to forget about their own screen ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail6() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 7</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Today, widespread social pressure to immediately go to college in conjunction...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail7() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 8</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Though often viewed as a problem for western states, the growing frequency of wildfires is a national ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail8() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 9</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The decline in American manufacturing is a common refrain, particularly...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail9() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 10</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;I was addressing a small gathering in a suburban Virginia living room...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail10() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 11</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Charlie Bell became chief executive of McDonald's in April....</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail11() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 12</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;While fossil fuels- coal, oil, gas- still generate roughly 85 percent at the world's  ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail12() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 13</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;The power and ambition of the giants of the digital economy is...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail13() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 14</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Amold Schwarzenegger, Dia Mirza and Adrian Grenier have a message for you: It's easy to...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail14() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 15</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;American farmers have been complaining of labor shortages for several years.The complaints are unlikely to stop without an overhaul of...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail15() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 16</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Forests give us shade, quiet and one of ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail16() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 17</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Unlike so-called basic emotions such as sadness, fear, and anger, guilt emerges a little later, in conjunction...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail17() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 18</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Amold Schwarzenegger, Dia Mirza and Adrian Grenier have a message for you: It's easy to...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail18() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 19</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;American farmers have been complaining of labor shortages for several years.The complaints are unlikely to stop without an overhaul of...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail19() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:'rgb(245,246,247)',marginTop:15,borderRadius:10,paddingBottom:10,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
                            <Text style={{ marginTop: 10,marginBottom:5, color: 'red', fontSize: 17 }}>Text 20</Text>
                            <View style={{width:'100%',paddingLeft:5,paddingRight:5,borderTopWidth:1,borderTopColor:'grey',borderBottomWidth:1,borderBottomColor:'grey'}}>
                                <Text style={{width:'98%',lineHeight:25}}>&nbsp;&nbsp;&nbsp;&nbsp;Forests give us shade, quiet and one of ...</Text>
                            </View>
                            <TouchableOpacity style={{height:30,width:100,marginTop:10,marginLeft:'65%',backgroundColor:'blue',borderRadius:15,justifyContent:'center',alignItems:'center'}} onPress={() => { Actions.textDetail20() }}>
                                <Text style={{color:'white'}}>查看详情>></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}