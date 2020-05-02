import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Shiwu extends Component {
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
                    <TouchableOpacity onPress={() => Actions.shiwu1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（一） </Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu2()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（二）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu3()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（三）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu4()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（四）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu5()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（五）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu6()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（六）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu7()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（七）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu8()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（八）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu9()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（九）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu10()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu11()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十一）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu12()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十二）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu13()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十三）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu14()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十四）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu15()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十五）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu16()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十六）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu17()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十七）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu18()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十八）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu19()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（十九）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.shiwu20()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>六级十五选十（二十）</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
            </ScrollView>
        )
    }
}

