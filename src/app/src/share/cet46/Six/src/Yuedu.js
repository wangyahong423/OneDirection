import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#ffffff',}}>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu61()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第一篇：新加坡 </Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu62()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第二篇：基督教</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu63()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第三篇：澳大利亚</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu64()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第四篇：埃及</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu65()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第五篇：体育休闲</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu66()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第六篇：旅游休闲</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu67()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第七篇：发挥你的潜力</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu68()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第八篇：社会文化</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu69()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第九篇：休闲艺术</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu610()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十篇：eBay购物</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu611()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十一篇：心理健康</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu612()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十二篇：Campus Life</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu613()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十三篇：手语</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu614()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十四篇：家庭生活</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu615()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十五篇：人文知识</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu616()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十六篇：生活现象</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu617()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十七篇：教育</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu618()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十八篇：娱乐</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu619()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十九篇：政治军事</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.yuedu620()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第二十篇：生活方式</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
            </ScrollView>
        )
    }
}