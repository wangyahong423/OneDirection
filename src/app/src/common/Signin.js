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







// import React, { Component } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Actions } from 'react-native-router-flux';
// export default class Signin extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       pwd: '',//密码
//       repwd: '',//确认密码
//       tel: '',//电话号码
//       num: '',//验证码
//       college: '',
//       isloading: false,
//       usernameNull: 0,//用户名是否为空，如果是空设置为0，弹出提示“请输入用户名”，如果不为空设置为1，不弹出提示。
//       pwdNull: 0,//密码是否为空，如果是空设置为0，弹出提示“请输入密码”，如果不为空设置为1，不弹出提示。
//       repwdNull: 0,//确认密码是否为空，如果是空设置为0，弹出提示“请再次确认密码”，如果不为空设置为1，不弹出提示。
//       telNull: 0,//手机号码格式是否正确，如果不正确设置为0，弹出提示“请正确输入手机号码的格式”，如果正确设置为1，不弹出提示。
//       numNull: 0,//验证码是否正确，如果不正确设置为0。弹出提示“验证码不正确！”，如果正确设置为1，不弹出提示。
//       timeContent: '点击获取验证码',
//       once: true,//once是true表示第一次点击，可以点击；false表示正在倒计时，不可点击
//       returnNum: '验证码：',
//       collegeNull: 0
//     }
//   }
//   userhandle = (text) => {
//     if (text !== '') {
//       this.setState({ username: text, usernameNull: 0 })
//     }

//   }
//   pwdhandle = (text) => {
//     if (text !== '') {
//       this.setState({ pwd: text, pwdNull: 0 })
//     }
//   }
//   repwdhandle = (text) => {
//     if (text !== '') {
//       this.setState({ repwd: text, repwdNull: 0 })
//     }
//   }
//   telhandle = (text) => {
//     if (text !== '') {
//       var t = text.split('');
//       if(t.length == 11 && t[1]== 3|4|5|6|7|8|9 && t[0]==1){
//         this.setState({ tel: text, telNull: 0 })
//       }
//     }
//   }
//   numhandle = (text) => {
//     if (text !== '') {
//       this.setState({ num: text, numNull: 0 })
//     }
//   }
//   collegehandle = (text) => {
//     if (text !== '') {
//       this.setState({ college: text, collegeNull: 0 })
//     }
//   }

//   // 获取验证码
//   getNum = () => {
//     if (this.state.tel !== '' && this.state.returnNum == '验证码：') {
//       var id = 6
//       setInterval(() => {
//         if (id >= 0) {
//           this.setState({
//             once: false,
//             timeContent: id + ' 秒之后重试'
//           })
//           id--;
//         } else {
//           this.setState({
//             once: true,
//             timeContent: '点击获取验证码'

//           })
//         }

//       }, 1000)
//       var n = this.state.returnNum.substr(0, 4);
//       for (var i = 0; i < 6; i++) {
//         var j = parseInt(Math.random() * 10);
//         n = n + j;
//       }
//       console.log('n：', n)
//       setInterval(() => {
//         if (id == parseInt(Math.random() * 6)) {
//           this.setState({
//             returnNum: n,
//           })
//         }
//       }, 1000)
//     }
//     else {
//       this.setState({
//         telNull: 1
//       })
//     }
//   }

//   register = () => {
//     if (this.state.username == '') {
//       this.setState({
//         usernameNull: 1
//       })
//     }
//     else if (this.state.pwd == '') {
//       this.setState({
//         pwdNull: 1
//       })
//     }
//     else if (this.state.repwd == '') {
//       this.setState({
//         repwdNull: 1
//       })
//     }
//     else if (this.state.tel == '') {
//       this.setState({
//         telNull: 1
//       })
//     }
//     else if (this.state.num == '') {
//       this.setState({
//         numNull: 1
//       })
//     }
//     else if (this.state.username !== '' && this.state.pwd !== '' && this.state.repwd !== '' && this.state.tel !== '' && this.state.num !== '') {
//       var p = this.state.returnNum;
//       console.log(p.substr(4))
//       if (p.substr(4) == this.state.num) {
//         fetch(`http://139.155.44.190:3005/users/addUser?name=${this.state.username}&pwd=${this.state.pwd}&tel=${this.state.tel}&college=${this.state.college}`)
//           .then(res => res.json())
//           .then(
//             data => {
//               if (data.ok == 1) {
//                 Alert.alert('注册成功');
//                 Actions.login();
//               }
//               else if (data.ok == 0) {
//                 Alert.alert("注册失败，用户名已存在");
//               }
//             }
//           )
//       }
//     }
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ffffff' }}>
//         <View
//           style={{ alignItems: 'center', marginTop: -80 }}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Icon name="user" color="red" size={30} />
//             <View
//               style={{
//                 width: '70%',
//                 marginRight: 10,
//                 borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
//                 borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 20,
//                 borderRadius: 20,
//                 marginLeft: 20
//               }}>

//               <TextInput
//                 onChangeText={this.userhandle}
//                 placeholder="请输入用户名"
//               />
//             </View>
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
//             <Icon name="key" color="red" size={30} style={{ marginLeft: -4 }} />
//             <View
//               style={{
//                 width: '70%',
//                 marginRight: 10,
//                 borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
//                 borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 20,
//                 borderRadius: 20,
//                 marginLeft: 20
//               }}>

//               <TextInput
//                 onChangeText={this.pwdhandle}
//                 placeholder="请输入密码"
//                 secureTextEntry={true}
//               />
//             </View>
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
//             <Icon name="key" color="red" size={30} style={{ marginLeft: -4 }} />
//             <View
//               style={{
//                 width: '70%',
//                 marginRight: 10,
//                 borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
//                 borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 20,
//                 borderRadius: 20,
//                 marginLeft: 20
//               }}>

//               <TextInput
//                 onChangeText={this.repwdhandle}
//                 placeholder="请确认密码"
//                 secureTextEntry={true}
//               />
//             </View>
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
//             <Icon name="key" color="red" size={30} style={{ marginLeft: -4 }} />
//             <View
//               style={{
//                 width: '70%',
//                 marginRight: 10,
//                 borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
//                 borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 20,
//                 borderRadius: 20,
//                 marginLeft: 20
//               }}>

//               <TextInput
//                 onChangeText={this.collegehandle}
//                 placeholder="请输入学院"
//               />
//             </View>
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
//             <Icon name="mobile" color="red" size={44} />
//             <View
//               style={{
//                 width: '40%',
//                 marginRight: 10,
//                 borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
//                 borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 20,
//                 borderRadius: 20,
//                 marginLeft: 24
//               }}>

//               <TextInput
//                 onChangeText={this.telhandle}
//                 placeholder="请输入手机号码"
//               />
//             </View>
//             {
//               this.state.once
//                 ? <TouchableOpacity onPress={this.getNum} style={{ width: '30%', borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8', borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1, alignItems: 'center', borderRadius: 20, backgroundColor: '#37376F' }}><Text style={{ lineHeight: 50, color: 'white', fontSize: 13 }}>{this.state.timeContent}</Text></TouchableOpacity>
//                 : <View style={{ width: '30%', borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8', borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1, alignItems: 'center', borderRadius: 20, backgroundColor: '#37376F' }}><Text style={{ lineHeight: 50, color: 'white', fontSize: 13 }}>{this.state.timeContent}</Text></View>
//             }
//           </View>
//           <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
//             <Icon name="stack-exchange" color="red" size={30} />
//             <View
//               style={{
//                 width: '40%',
//                 marginRight: 10,
//                 borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
//                 borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 paddingLeft: 20,
//                 borderRadius: 20,
//                 marginLeft: 20
//               }}>

//               <TextInput
//                 onChangeText={this.numhandle}
//                 placeholder="请输入验证码"
//               />
//             </View>
//             <View style={{ width: '30%', borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8', borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1, alignItems: 'center', borderRadius: 20, backgroundColor: '#37376F' }}><Text style={{ lineHeight: 50, color: 'white', fontSize: 13 }}>{this.state.returnNum}</Text></View>
//           </View>


//           <TouchableOpacity
//             style={{
//               width: '30%',
//               height: 40,
//               backgroundColor: '#37376F',
//               marginTop: 60,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//             onPress={this.register}
//           >
//             <Text style={{ color: '#ffffff' }}>注册</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               width: '30%',
//               height: 40,
//               backgroundColor: '#37376F',
//               marginTop: 30,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//             onPress={() => Actions.login()}>
//             <Text style={{ color: '#ffffff' }}>返回登录</Text>
//           </TouchableOpacity>
//           {
//             this.state.usernameNull == 0
//               ? <View style={{ position: 'absolute', top: 42 }}><Text></Text></View>
//               : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 43, left: 110 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入用户名！</Text></View>
//           }
//           {
//             this.state.pwdNull == 0
//               ? <View style={{ position: 'absolute', top: 119 }}><Text></Text></View>
//               : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 119, left: 110 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入密码！</Text></View>
//           }
//           {
//             this.state.repwdNull == 0
//               ? <View style={{ position: 'absolute', top: 195 }}><Text></Text></View>
//               : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 195, left: 110 }}><Text style={{ color: 'red', fontSize: 13 }}>请再次确认密码！</Text></View>
//           }
//           {
//             this.state.collegeNull == 0
//               ? <View style={{ position: 'absolute', top: 195 }}><Text></Text></View>
//               : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 272, left: 110 }}><Text style={{ color: 'red', fontSize: 13 }}>请选择学院！</Text></View>
//           }
//           {
//             this.state.telNull == 0
//               ? <View style={{ position: 'absolute', top: 270 }}><Text></Text></View>
//               : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 348, left: 110 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入正确手机号码！</Text></View>
//           }
//           {
//             this.state.numNull == 0
//               ? <View style={{ position: 'absolute', top: 345 }}><Text></Text></View>
//               : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 345, left: 110 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入验证码！</Text></View>
//           }
//         </View>
//         {
//           this.state.isloading
//             ? <View><Text>注册成功...</Text></View>
//             : null
//         }
//       </View>
//     );
//   }
// }