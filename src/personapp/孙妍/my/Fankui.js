import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@ant-design/react-native';
import axios from 'axios';
export default class Fankui extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            tel: '',
            time: new Date().toLocaleString(),
        }
    }
    handleRegister = () => {
        let url = `http://139.155.44.190:3005/feedback/addFeedback?content=${this.state.content}&tel=${this.state.tel}&time=${this.state.time}`;
        axios(url)
            .then((res) => {
                if (res.data.ok) {
                    Actions.tijiao();
                } else {
                    alert(res.data.msg);
                }
            })
            console.log(this.state.tel)
            console.log(this.state.content)
    }
    getTel = (text) => {
        this.setState({
            tel: text
        })
        
    }
    getContent = (text) => {
        this.setState({
            content: text
        })
        
    }
    render() {
        return (
            <ScrollView>
                <View style={{ height: 200, width: 350, marginLeft: 60, marginTop: 40 }}>
                    <Image source={require('../../assets/my2.png')} style={{ width: 350, height: 200 }} />
                </View>
                <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 40, fontWeight: 'bold' }}>校园新生通</Text>
                <View style={{
                    height: 70, width: 350, backgroundColor: '#ffffff', marginLeft: 60, marginTop: 30,
                    borderBottomColor: 'gray', borderLeftColor: 'gray',
                    borderTopColor: 'gray', borderRightColor: 'gray', borderWidth: 1
                }}>
                    <TextInput placeholder="请输入您的联系方式(邮箱或电话)" style={{ marginTop: 10 }} onChangeText={this.getTel} />
                </View>
                <View style={{
                    height: 150, width: 350, backgroundColor: '#ffffff', marginLeft: 60, marginTop: 30,
                    borderBottomColor: 'gray', borderLeftColor: 'gray',
                    borderTopColor: 'gray', borderRightColor: 'gray', borderWidth: 1
                }}>
                    <TextInput placeholder="有什么想说的尽管说吧..." style={{ marginTop: 10 }} onChangeText={this.getContent} />
                </View>
                <Button style={{ width: 100, backgroundColor: '#37476F', marginLeft: 180, marginTop: 40 }} onPress={this.handleRegister}>
                    提交
                </Button>
            </ScrollView>
        )
    }
}

