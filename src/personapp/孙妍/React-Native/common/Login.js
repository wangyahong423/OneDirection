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
      isloading: false
    }
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  login = () => {
    // myFetch.get('/topics',{limit:4,user:'sss'})
    //     .then(res=>console.log(res))
    this.setState({ isloading: true })
    myFetch.post('/login', {
      username: this.state.username,
      pwd: this.state.pwd
    }
    ).then(res => {
      // 根据返回状态进行判断，正确时跳转首页
      // if(res){

      // }
      AsyncStorage.setItem('user', JSON.stringify(res.data))
        .then(() => {
          this.setState({ isloading: false })
          Actions.homePage();
        })
    })
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
              style={{marginLeft:100}}
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
              style={{marginLeft:100}}
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
            <Text style={{color:'#ffffff'}}>登录</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row',marginTop:50 }}>
            <Text style={{fontSize:18,color:'blue'}}>忘记密码</Text>
            <Text style={{fontSize:18,marginLeft:150,color:'blue'}} onPress={() => Actions.signin()}>没有账号？  去注册</Text>

          </View>


        </View>
        {
          this.state.isloading
            ? <View><Text>正在登录...</Text></View>
            : null
        }
      </View>
    );
  }
}