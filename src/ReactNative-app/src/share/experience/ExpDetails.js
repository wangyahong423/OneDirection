import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Img from "../../community/Img"
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(67,67,157,0.4)' }} >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '90%', marginBottom: 5 * s, opacity: 1.0 }}>
                            <View style={{
                                flexDirection: 'row',
                                height: 80 * s,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    marginLeft: 20 * s,
                                    height: 54 * s,
                                    width: 54 * s,
                                    borderRadius: 27 * s,
                                    backgroundColor: '#37376F'
                                }}>
                                    <Image style={{
                                        marginTop: 2 * s,
                                        marginLeft: 2 * s,
                                        height: 50 * s,
                                        width: 50 * s,
                                        borderRadius: 25 * s
                                    }} source={{ uri: this.state.all.pic }} />
                                </View>
                                <Image style={{
                                    height: 70 * s,
                                    width: 70 * s,
                                    borderRadius: 35 * s,
                                    position: 'absolute',
                                    top: 4 * s,
                                    left: 13 * s
                                }}
                                    source={{ uri: this.state.all.head }} />
                                <View style={{ marginLeft: 30 * s }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={{ fontSize: 18 * s, color: '#37376F' }}>{this.state.all.name}</Text>
                                            <Image style={{ height: 25 * s, width: 40 * s, marginLeft: 10 * s }} source={Img['png' + this.state.all.level]} />
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 15 * s, color: '#37376F' }}>{this.state.all.time}</Text>

                                </View>
                            </View>
                            <View style={{
                                marginLeft: 30 * s,
                                marginRight: 30 * s,
                                marginTop: 10 * s,
                                marginBottom: 20 * s
                            }}
                            >
                                <Text style={{ fontSize: 18 * s, backgroundColor: '#37376F', color: '#fff' }}>        {this.state.all.content}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        )
    }
}
