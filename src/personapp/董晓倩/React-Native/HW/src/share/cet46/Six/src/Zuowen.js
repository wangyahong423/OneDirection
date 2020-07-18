import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Zuowen extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#ffffff',}}>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>喜欢居住在大城市or乡村 </Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 90*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen2()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>英国就业率</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 217*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen3()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>快餐在中国快速发展</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 137*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen4()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>小企业的劣势</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 200*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen5()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>助学贷款的优势</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 180*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen6()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>你是否同意...</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 205*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen7()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>你是否同意各国...</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 165*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen8()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>你对出版物应该审查持什么态度</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen9()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>独生子女的利弊</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 185*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.zuowen10()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 50*s, marginTop: 11*s }}>为小学生选择一种牌子的面包</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 64*s, marginTop: 10*s }} />
                </View>
            </ScrollView>
        )
    }
}

