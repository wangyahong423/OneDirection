import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Appear extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {


    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#ffffff',}}>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.first()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第一篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.second1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第二篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.third()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第三篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.fourth()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第四篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu5()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第五篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu6()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第六篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu7()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第七篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu8()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第八篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu9()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第九篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu10()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190*s, marginTop: 11*s }}>第十篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu11()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十一篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu12()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十二篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu13()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十三篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu14()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十四篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                 <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu15()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十五篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu16()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十六篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu17()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十七篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu18()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十八篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu19()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第十九篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanwu20()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180*s, marginTop: 11*s }}>第二十篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
            </ScrollView>
        )
    }
}

