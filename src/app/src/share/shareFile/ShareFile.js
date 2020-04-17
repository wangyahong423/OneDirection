import React, { Component } from 'react';
import {  View, ScrollView, TextInput, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class ShareFile extends Component {
    search=(e)=>{
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: '100%',
                    height:70*s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 40 * s,
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#D7D3D3',
                        borderRadius: 28 * s

                    }}>
                        <Icon
                            style={{
                                marginLeft: 25 * s,
                                marginRight: 20 * s
                            }}
                            color='#fff' size={20} name='search' />
                        <TextInput
                            style={{
                                height: 50 * s,
                                width: "80%",
                                padding: 0,
                                fontSize: 15 * s
                            }}
                            placeholderTextColor='#fff'
                            placeholder="请输入您要搜索的关键字"
                            onChangeText={this.search}
                        />
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
