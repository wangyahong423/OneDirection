import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Bibei extends Component {
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
                </ScrollView>
            </View>
        )
    }
}

