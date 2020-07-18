import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, DeviceEventEmitter, Image, SafeAreaView, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Fankui extends Component {
    constructor() {
        super();
        this.state = {
            height: 30,
            tel: '',
            content: '',
            isloading: false,//true显示正在登陆中，false不显示
            unum: 0, //0：不为空；1：为空
            pnum: 0,
        }
    }
    userhandle = (text) => {
        if (text !== '') {
            this.setState({ tel: text, unum: 0 })
        }
    }
    pwdhandle = (text) => {
        if (text !== '') {
            this.setState({ content: text, pnum: 0 })
        }
    }
    handleRegister = () => {
        if (this.state.tel != '' && this.state.content != "") {
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            let url = `http://139.155.44.190:3005/feedback/addFeedback?content=${this.state.content}&tel=${this.state.tel}&time=${time}`;
            fetch(url)
                .then(res => res.json())
                .then((res) => {
                    if (res.ok) {
                        Actions.tijiao();
                    } else {
                        Actions.fankui();
                        alert(res.msg);
                    }
                })
        }
        else if (this.state.tel == '') {
            this.setState({
                unum: 1
            })
        }
        else if (this.state.content == '') {
            this.setState({
                pnum: 1
            })
        }
    }
    cauculateHeight(e) {
        if (e.nativeEvent.contentSize.height > 30) {
            height = e.nativeEvent.contentSize.height;
        } else {
            height = this.state.height;
        }
        this.setState({
            height: height
        })
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{
                    width: '100%',
                    height: 63 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => this.back()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>用户反馈</Text>
                </View>
                <ImageBackground style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }} source={require('../../assets/community/img15.png')}>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={1} style={styles.textInputInner1} onPress={() => this.TextInput.focus()} >
                            <TextInput
                                {...this.prop}
                                placeholder={'请输入手机号'}
                                placeholderTextColor={'#666666'}
                                underlineColorAndroid={'transparent'}
                                multiline//多行设置
                                value={this.state.inputValue}
                                ref={textInput => this.TextInput = textInput}
                                onContentSizeChange={this.cauculateHeight.bind(this)}
                                onChangeText={this.userhandle}
                                style={{ height: Math.max(35, this.state.height), fontSize: 20 * s }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1} style={styles.textInputInner} onPress={() => this.TextInput.focus()} >
                            <TextInput
                                {...this.prop}
                                placeholder={'请输入反馈内容'}
                                placeholderTextColor={'#666666'}
                                underlineColorAndroid={'transparent'}
                                multiline//多行设置
                                value={this.state.inputValue}
                                ref={textInput => this.TextInput = textInput}
                                onContentSizeChange={this.cauculateHeight.bind(this)}
                                onChangeText={this.pwdhandle}
                                style={{ height: Math.max(35, this.state.height), fontSize: 20 * s }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: '50%',
                                height: 60 * s,
                                backgroundColor: '#37376F',
                                marginTop: 80 * s,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onPress={this.handleRegister}>
                            <Text style={{ color: '#ffffff', fontSize: 22 * s }}>提交</Text>
                        </TouchableOpacity>
                        {
                            this.state.unum == 0
                                ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                                : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 40, left: 55 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入手机号！</Text></View>
                        }
                        {
                            this.state.pnum == 0
                                ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                                : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 300, left: 55 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入反馈内容！</Text></View>
                        }

                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    textInputInner: {
        marginTop: 50,
        width: "80%",
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        minHeight: 220
    },
    textInputInner1: {
        width: "80%",
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        minHeight: 10
    },
})