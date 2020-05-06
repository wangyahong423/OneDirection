import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native';

import VerifyCode from './VerifyCode'

export default class VerifyCodeDemo extends Component {

    beforeCountdown = () => {
        //需要返回boolean值，true：开始倒计时，false：不开始倒计时，这里可以做一些验证，比如手机号的验证
        return true;
    }

    startCountdown = () => {
        // Alert.alert('已发送');
    }

    onValueChange = (text) => {
        Alert.alert(text);
    }

    render() {
        return (
            <View style={{ flex: 1, paddingTop: 30, paddingRight: 20, paddingLeft: 20 }}>
                <VerifyCode
                    countdownNormalStyle={styles.countdownNormalStyle}
                    countdownStartStyle={styles.countdownStartStyle}
                    countdownEndStyle={styles.countdownEndStyle}
                    countdownNormalTextStyle={styles.countdownNormalTextStyle}
                    countdownStartTextStyle={styles.countdownStartTextStyle}
                    countdownEndTextStyle={styles.countdownEndTextStyle}
                    maxTime={6}
                    normalTxt='获取验证码'
                    countdownTxt=' 秒后发送'
                    endTxt='获取验证码'
                    auto={false}
                    beforeCountdown={this.beforeCountdown}
                    startCountdown={this.startCountdown}
                    onValueChange={this.onValueChange} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    countdownNormalStyle: {
        backgroundColor: '#37376F',
        borderRadius: 10
    },
    countdownStartStyle: {
        backgroundColor: 'grey',
        borderRadius: 10

    },
    countdownEndStyle: {
        borderRadius: 10,
        backgroundColor: '#37376F',
    },
    countdownNormalTextStyle: {
        color: 'white',
    },
    countdownStartTextStyle: {
        color: '#37376F',
    },
    countdownEndTextStyle: {
        color: 'white',
    },
})






















// import React, { Component } from 'react'
// import { Text, View, Alert, TextInput,TouchableOpacity } from 'react-native'
// import { Actions } from 'react-native-router-flux';
// import { createForm } from "rc-form";
// import { provinceLite } from "antd-mobile-demo-data";
// class Zhuce extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             college: "",
//             tel: "",
//             pwd: "",
//             repwd: "",
//             trueNum: "",
//             checkNum: ""
//         }
//     }
//     nameChange = (text) => {
//         this.setState({
//             name: text
//         })
//     }
//     collegeChange = (text) => {
//         this.setState({
//             college: text
//         })
//     }
//     telChange = (text) => {
//         this.setState({
//             tel: text
//         })
//     }
//     pwdChange = (text) => {
//         this.setState({
//             pwd: text
//         })
//     }
//     repwdChange = (text) => {
//         this.setState({
//             repwd: text
//         })
//     }

//     numChange = (text) => {
//         this.setState({
//             checkNum: text
//         }, () => {
//         })
//     }
//     getCode = () => {
//         let url = `http://139.155.44.190:3005/users/Getnum?tel=${this.state.tel}`;
//         console.log(1111);
//         fetch(url)
//             .then(res => res.json())
//             .then(
//                 data => {
//                     console.log(222)
//                     this.setState({
//                         trueNum: data.trueNum
//                     })
//                 }
//             )
//     }
//     getConnect = () => {
//         let text = { name: this.state.name, pwd: this.state.pwd, repwd: this.state.repwd };
//         let send = JSON.stringify(text);
//         if (this.checkNum === "") {
//             Alert.alert("验证码不能为空");
//         }
//         else if (this.state.checkNum == this.state.trueNum) {
//             fetch(`http://139.155.44.190:3005/users/addUser?name=${this.state.name}&pwd=${this.state.pwd}&tel=${this.state.tel}&college=${this.state.college}`)
//                 .then(res => res.json())
//                 .then(
//                     data => {
//                         if (data.ok == 1) {
//                             Alert.alert("注册成功");
//                             Actions.login();
//                         }
//                         else if (data.ok == 0) {
//                             Alert.alert("注册失败，用户名已存在");
//                         }
//                     }
//                 )
//         }
//         else {
//             Alert.alert("请输入正确的验证码");
//         }
//     }
//     state = {
//         colorValue: ["#00FF00"],
//     };
//     onClick = () => {
//         setTimeout(() => {
//             this.setState({
//                 data: provinceLite,
//             });
//         }, 120);
//     };
//     onChangeColor = (color) => {
//         this.setState({
//             colorValue: color,
//         });
//     };

//     render() {
//         const { getFieldProps } = this.props.form;
//         return (
//             <View>
//                 <TextInput placeholder="请输入用户名" onChangeText={this.nameChange} />
//                 <TextInput placeholder="请输入所在学院" onChangeText={this.nameChange} />
//                 <TextInput placeholder="请输入手机号" onChangeText={this.nameChange} />
//                 <TextInput placeholder="请输入验证码" onChangeText={this.nameChange} />
//                 <TouchableOpacity onPress={this.getCode} style={{ width: '30%', borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8', borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1, alignItems: 'center', borderRadius: 20, backgroundColor: '#37376F' }}><Text style={{ lineHeight: 50, color: 'white', fontSize: 13 }}>获取验证码</Text></TouchableOpacity>
//                 <TextInput placeholder="请输入密码" onChangeText={this.nameChange} />
//                 <TextInput placeholder="请再次输入密码" onChangeText={this.nameChange} />
//                 <TouchableOpacity
//                     style={{
//                         width: '30%',
//                         height: 40,
//                         backgroundColor: '#37376F',
//                         marginTop: 60,
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}
//                     onPress={this.getConnect}
//                 >
//                     <Text style={{ color: '#ffffff' }}>注册</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }
// const ZhuceWrapper = createForm()(Zhuce);
// const TestWrapper = createForm()(Zhuce);
// export default ZhuceWrapper