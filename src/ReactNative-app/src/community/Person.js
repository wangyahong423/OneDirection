import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            all: '',
            learn: 0,
            exp: 0
        };
        this.getData();
    }
    getData = () => {
        // AsyncStorage.getItem('username')
        //     .then((res) => {
        //         let name = { username: res }
        //         this.setState({
        //             username: name.username
        //         })
        //     });
        AsyncStorage.getItem('details')
            .then((res) => {
                this.setState({
                    all: JSON.parse(res)
                })
            });
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/learn/list`;
        let url2 = `http://139.155.44.190:3005/experience/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                var num = 0;
                res.forEach(item => {
                    if (item.name == this.state.all.name) {
                        num++;
                    }
                });
                this.setState({
                    learn: num
                });
            })
        fetch(url2)
            .then((res) => res.json())
            .then((res) => {
                var num = 0;
                res.forEach(item => {
                    if (item.name == this.state.all.name) {
                        num++;
                    }
                });
                this.setState({
                    exp: num
                });
            })
    }
    render() {
        return (
            // <ImageBackground style={{ flex: 1, width: '100%', height: height }} source={require('../../../assets/share/3-6.jpg')}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(67,67,157,0.4)' }} >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        padding: 10 * s
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>昵称：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>头像：</Text>
                            <View style={{
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
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>等级：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.level}级</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>学院：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.all.college}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在社区中发帖子数量：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.learn}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 * s }}>
                            <Text style={{ fontSize: 20 * s, color: '#000' }}>在经验交流中发帖子数量：</Text>
                            <Text style={{ fontSize: 20 * s, color: '#37376F' }}>{this.state.exp}</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
            // </ImageBackground >
        )
    }
}
