import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Gaopin extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1,
            // isloading: false
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/cet6/list`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tits: res
                });
                console.log('tits', this.state.tits)
            })

    }

    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', }}>
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
            </View>
        )
    }
}

