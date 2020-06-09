import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Appear extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1,
            isLoading: true,

            // isloading: false
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })

        let url = `http://139.155.44.190:3005/cet4/list`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tits: res
                });
                this.setState({ isLoading: false });

                console.log('tits', this.state.tits)
            })

    }

    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', }}>
                <View style={{height:40*s,flexDirection:'row',}}>
                    <Text style={{marginLeft:50*s,fontSize:20,marginTop:10*s}}>单词</Text>
                    <Text style={{marginLeft:120*s,fontSize:20,marginTop:10*s}}>翻译</Text>
                    <Text style={{marginLeft:130*s,fontSize:20,marginTop:10*s}}>词性</Text>
                </View>
                <ScrollView style={{ backgroundColor: '#ffffff' }}>
                    
                    {
                        this.state.tits.map((item) => (
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ marginLeft: 30 * s, width: 120 * s, color: 'grey', fontSize: 17 }}>{item.english}</Text>
                                <Text numberOfLines={1} style={{ marginLeft: 20 * s, width: 180 * s, color: 'grey', fontSize: 17 }}>{item.chinese}</Text>
                                <Text numberOfLines={1} style={{ marginLeft: 40 * s, width: 180 * s, color: 'grey', fontSize: 17 }}>{item.nature}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: 80 * s,
                                width: '100%'
                            }}>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 20, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
            </View>
        )
    }
}

