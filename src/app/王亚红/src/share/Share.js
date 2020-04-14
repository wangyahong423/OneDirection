import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Share extends Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <ImageBackground style={{ flex: 1, width: '100%', height: '100%' }} source={require('../../assets/share/3.jpg')}>
                    {/* 顶部 */}
                    <View style={{
                        width: '100%',
                        height: '4%',
                        backgroundColor: '#37376F',
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: '#fff', lineHeight: 30 * s, }}>共享</Text>
                    </View>
                    <ScrollView style={{ height: '96%' }}>

                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{
                                        width: 200 * s,
                                        height: 100 * s,
                                        backgroundColor: '#675858',
                                        opacity: 0.8,
                                        marginTop: 150 * s,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => Actions.sharefile()}>
                                    <Icon color='#fff' size={26} name='book' />
                                    <Text style={{ color: '#fff', fontSize: 25 * s }}>资料共享</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        width: 200 * s,
                                        height: 100 * s,
                                        backgroundColor: '#675858',
                                        opacity: 0.8,
                                        marginTop: 140 * s,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => Actions.learn()}>
                                    <Icon color='#fff' size={26} name='comments-o' />
                                    <Text style={{ color: '#fff', fontSize: 25 * s }}>学习交流</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground >

            </View>
        )
    }
}
