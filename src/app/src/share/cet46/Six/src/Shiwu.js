import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Shiwu extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', }}>
                <ScrollView style={{ backgroundColor: '#ffffff' }}>
                </ScrollView>
            </View>
        )
    }
}

