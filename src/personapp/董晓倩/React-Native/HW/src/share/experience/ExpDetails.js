import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Img from "../../community/Img"
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class ExpDetails extends Component {
    constructor() {
        super();
        this.state = {
            all: ''
        };
        this.getData();
    }
    getData = () => {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        AsyncStorage.getItem('EPage')
            .then((res) => {
                this.setState({
                    all: JSON.parse(res)
                })
            });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, }} >
                <View style={{
                    width: '100%',
                    height: 63 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    // position: "absolute",
                    // top: 0
                }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>详情</Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', backgroundColor: "#fff" }}>
                    <View style={{ width: '90%', marginBottom: 5 * s, opacity: 1.0 }}>
                        <View style={{
                            flexDirection: 'row',
                            height: 80 * s,
                            alignItems: 'center'
                        }}>
                            <View style={{
                                marginLeft: 20 * s,
                                height: 60 * s,
                                width:60 * s,
                                borderRadius: 30 * s,
                            }}>
                                <Image style={{
                                    marginTop: 2 * s,
                                    marginLeft: 2 * s,
                                    height: 54 * s,
                                    width: 54 * s,
                                    borderRadius: 27 * s
                                }} source={{ uri: this.state.all.pic }} />
                            </View>
                            <Image style={{
                                height: 66 * s,
                                width: 66 * s,
                                borderRadius: 33* s,
                                position: 'absolute',
                                top: 7 * s,
                                left: 16 * s
                            }}
                                source={{ uri: this.state.all.head }} />
                            <View style={{ marginLeft: 30 * s }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18 * s, color: '#37376F' }}>{this.state.all.name}</Text>
                                    <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.all.level]} />

                                </View>
                                <Text style={{ fontSize: 14 * s, }}>{this.state.all.time}</Text>

                            </View>
                        </View>
                        <View style={{
                            marginLeft: 30 * s,
                            marginRight: 30 * s,
                            marginTop: 10 * s,
                            marginBottom: 20 * s
                        }}
                        >
                            <Text style={{ fontSize: 18 * s, }}>{this.state.all.content}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        )
    }
}
