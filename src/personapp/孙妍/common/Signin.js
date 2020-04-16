import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Signin extends Component {
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
    myFetch.post('/signup', {
      username: this.state.username,
      pwd: this.state.pwd
    }
    ).then(res => {
      // 根据返回状态进行判断，正确时跳转首页
      // if(res){

      // }
      AsyncStorage.setItem('user2', JSON.stringify(res.data))
        .then(() => {
          this.setState({ isloading: false })
          Actions.login();
        })
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'#ffffff'}}>
        <View
          style={{ alignItems: 'center',marginTop:-80}}>
          <View style={{flexDirection:'row'}}>
            <Icon name="user" color="red" size={30}/>
            <View
              style={{
                width: '70%',
                marginRight: 10,
                borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
                borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                borderRadius:20,
                marginLeft:20
              }}>

              <TextInput
                onChangeText={this.pwdhandle}
                placeholder="请输入昵称"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{flexDirection:'row',marginTop:20}}>
            <Icon name="mobile" color="red" size={40}/>
            <View
              style={{
                width: '70%',
                marginRight: 10,
                borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
                borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                borderRadius:20,
                marginLeft:20
              }}>

              <TextInput
                onChangeText={this.pwdhandle}
                placeholder="请输入手机号码"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{flexDirection:'row',marginTop:20}}>
            <Icon name="stack-exchange" color="red" size={30}/>
            <View
              style={{
                width: '70%',
                marginRight: 10,
                borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
                borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                borderRadius:20,
                marginLeft:20
              }}>

              <TextInput
                onChangeText={this.pwdhandle}
                placeholder="请输入验证码"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{flexDirection:'row',marginTop:20}}>
            <Icon name="key" color="red" size={30}/>
            <View
              style={{
                width: '70%',
                marginRight: 10,
                borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
                borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                borderRadius:20,
                marginLeft:20
              }}>

              <TextInput
                onChangeText={this.pwdhandle}
                placeholder="请输入密码"
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{flexDirection:'row',marginTop:20}}>
            <Icon name="key" color="red" size={30}/>
            <View
              style={{
                width: '70%',
                marginRight: 10,
                borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
                borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 20,
                borderRadius:20,
                marginLeft:20
              }}>

              <TextInput
                onChangeText={this.pwdhandle}
                placeholder="请确认密码"
                secureTextEntry={true}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: '30%',
              height: 40,
              backgroundColor: '#37376F',
              marginTop: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={this.login}>
            <Text style={{color:'#ffffff'}}>注册</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '30%',
              height: 40,
              backgroundColor: '#37376F',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => Actions.login()}>
            <Text style={{color:'#ffffff'}}>返回登录</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.isloading
            ? <View><Text>注册成功...</Text></View>
            : null
        }
      </View>
    );
  }
}