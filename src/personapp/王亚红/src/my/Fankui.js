import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Fankui extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            tel: '',
        }
    }
    handleRegister = () => {
        var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
        let url = `http://139.155.44.190:3005/feedback/addFeedback?content=${this.state.content}&tel=${this.state.tel}&time=${time}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.ok) {
                    Actions.tijiao();
                } else {
                    alert(res.msg);
                }
            })
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
                <TouchableOpacity style={{ width: 100, backgroundColor: '#37476F', marginLeft: 180, marginTop: 40,height:40 }} onPress={this.handleRegister}>
                    <Text style={{color:'#ffffff',textAlign:'center',fontSize:20,marginTop:5}}>提交</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

