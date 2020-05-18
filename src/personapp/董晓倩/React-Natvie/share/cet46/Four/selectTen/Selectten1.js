import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Selectten1 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {


    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#ffffff', }}>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.one1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第一篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.two2()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第二篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.three3()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第三篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.four4()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第四篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi5()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第五篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi6()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第六篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi7()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第七篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi8()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第八篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi9()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第九篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi10()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 190 * s, marginTop: 11 * s }}>第十篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 50 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi11()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十一篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi12()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十二篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi13()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十三篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi14()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十四篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi15()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十五篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi16()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十六篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi17()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十七篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi18()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十八篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  > 
                    <TouchableOpacity onPress={() => Actions.xuanshi19()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第十九篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
                <View style={{
                    height: 50 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1, marginTop: 10 * s
                }}  >
                    <TouchableOpacity onPress={() => Actions.xuanshi20()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 180 * s, marginTop: 11 * s }}>第二十篇</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40 * s, marginTop: 10 * s }} />
                </View>
            </ScrollView>
        )
    }
}

