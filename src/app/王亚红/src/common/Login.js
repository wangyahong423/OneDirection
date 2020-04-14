import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false,
      unum: 0, //0：不为空；1：为空
      pnum: 0
    }
  }
  userhandle = (text) => {
    if (text !== '') {
      this.setState({ username: text, unum: 0 })
    }

  }
  pwdhandle = (text) => {
    if (text !== '') {
      this.setState({ pwd: text, pnum: 0 })
    }
  }
  // login = () => {
  //   if (this.state.username != '' && this.state.pwd != "") {
  //     this.setState({
  //       isloading: true
  //     })
  //     myFetch.post('/login', {
  //       username: this.state.username,
  //       pwd: this.state.pwd
  //     }
  //     ).then(res => {
  //       console.log(this.state.username, this.state.pwd)
  //       AsyncStorage.setItem('user', JSON.stringify(res.data))
  //         .then(() => {
  //           this.setState({ isloading: false })
  //           Actions.methodPage();
  //         })
  //     })
  //   }
  //   else if (this.state.username == '') {
  //     this.setState({
  //       unum: 1
  //     })
  //   }
  //   else if (this.state.pwd == '') {
  //     this.setState({
  //       pnum: 1
  //     })
  //   }
  // }

  login = () => {
    if (this.state.username != '' && this.state.pwd != "") {
      let url = `http://139.155.44.190:3005/users/login?name=${this.state.username}&pwd=${this.state.pwd}`;
      this.setState({isloading: true})
      fetch(url)
      .then(res => res.json())
      .then(res=>{
        console.log('数据库：',res)
      })
    }
    else if (this.state.username == '') {
      this.setState({
        unum: 1
      })
    }
    else if (this.state.pwd == '') {
      this.setState({
        pnum: 1
      })
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
        <View
          style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/my3.png')} style={{ width: 180, height: 180, marginTop: -100, borderRadius: 100 }} />
          <View
            style={{
              width: '70%',
              marginRight: 10,
              borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
              borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              marginTop: 50
            }}>

            <TextInput placeholder="输入账号"
              onChangeText={this.userhandle}
              style={{ marginLeft: 100 }}
            />
          </View>
          <View
            style={{
              width: '70%',
              marginRight: 10,
              borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
              borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              marginTop: 30
            }}>

            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="输入密码"
              secureTextEntry={true}
              style={{ marginLeft: 100 }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '30%',
              height: 40,
              backgroundColor: '#37376F',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.login}>
            <Text style={{ color: '#ffffff' }}>登录</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <Text style={{ fontSize: 18, color: 'blue' }}>忘记密码</Text>
            <Text style={{ fontSize: 18, marginLeft: 150, color: 'blue' }} onPress={() => Actions.signin()}>没有账号？  去注册</Text>

          </View>
          {
            this.state.unum == 0
              ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
              : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 175, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入用户名！</Text></View>
          }
          {
            this.state.pnum == 0
              ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
              : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 255, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入正确的密码！</Text></View>
          }

        </View>
        {
          this.state.isloading
            ? <View style={{ position: 'absolute', top: 530, zIndex: 11, left: 190, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 14 }}>正在登录中...</Text></View>
            : null
        }
      </View>
    );
  }
}