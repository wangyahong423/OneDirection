import React, { Component } from 'react';
import { Text, View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Share extends Component {
    render() {
        return (
            <View style={{ height: '100%' }}>
                <ImageBackground style={{ flex: 1, width: '100%', height: height }} source={require('../../assets/share/3.jpg')}>
                    {/* 顶部 */}
                    {/* <View style={{
                        width: '100%',
                        height: 30 * s,
                        backgroundColor: '#37376F',
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: '#fff', lineHeight: 30 * s, }}>共享</Text>
                    </View> */}

                    <View>
                    <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    width: 200 * s,
                                    height: 100 * s,
                                    backgroundColor: '#675858',
                                    opacity: 0.8,
                                    marginTop: 80 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => Actions.cet46()}>
                                <Icon color='#fff' size={26} name='book' />
                                <Text style={{ color: '#fff', fontSize: 25 * s }}>四六级资料</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    width: 200 * s,
                                    height: 100 * s,
                                    backgroundColor: '#675858',
                                    opacity: 0.8,
                                    marginTop: 40 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => Actions.programme()}>
                                <Icon color='#fff' size={26} name='book' />
                                <Text style={{ color: '#fff', fontSize: 25 * s }}>考研</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 200 * s,
                                    height: 100 * s,
                                    backgroundColor: '#675858',
                                    opacity: 0.8,
                                    marginTop: 40 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => Actions.notes()}>
                                <Icon color='#fff' size={26} name='book' />
                                <Text style={{ color: '#fff', fontSize: 25 * s }}>笔记</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 200 * s,
                                    height: 100 * s,
                                    backgroundColor: '#675858',
                                    opacity: 0.8,
                                    marginTop: 40 * s,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={() => Actions.experience()}>
                                <Icon color='#fff' size={26} name='book' />
                                <Text style={{ color: '#fff', fontSize: 25 * s }}>经验分享</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground >
            </View>
        )
    }
}
