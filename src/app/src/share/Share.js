import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Share extends Component {
    render() {
        return (
            <View>
                {/* 顶部 */}
                <View style={{
                    width: '100%',
                    height: 30 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                }}>
                    <Text style={{ color: '#fff', lineHeight: 30 * s, }}>共享</Text>
                </View>
                {/* <ScrollView> */}
                    <ImageBackground style={{ flex: 1, width: '100%', height: height }} source={require('../../assets/share/3.jpg')}>
                        <View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{
                                        width: 200*s,
                                        height: 100*s,
                                        backgroundColor: '#675858',
                                        opacity:0.8,
                                        marginTop: 150*s,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => Actions.sharefile()}>
                                    <Icon color='#fff' size={26} name='book' />
                                    <Text style={{ color: '#fff',fontSize:25*s }}>资料共享</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        width: 200*s,
                                        height: 100*s,
                                        backgroundColor: '#675858',
                                        opacity:0.8,
                                        marginTop: 140*s,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => Actions.learn()}>
                                    <Icon color='#fff' size={26} name='comments-o' />
                                    <Text style={{ color: '#fff',fontSize:25*s }}>学习交流</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground >
                {/* </ScrollView> */}
            </View>
        )
    }
}
