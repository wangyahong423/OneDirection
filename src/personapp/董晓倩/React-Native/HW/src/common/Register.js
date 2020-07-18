import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      password: '',
    }
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  passwordhandle = (text) => {
    this.setState({ password: text })
  }
  register = () => {
    if (this.state.username != '' && this.state.pwd != '' && this.state.password != '') {
      if (this.state.pwd != this.state.password) {
        ToastAndroid.show('密码不一致！', 1000);
      }
      else {
        myFetch.post('/register', {
          username: this.state.username,
          pwd: this.state.pwd,
        }
        ).then(res => {
          if (res.data.back == '1') {
            ToastAndroid.show('用户名已存在！', 1000);
          }
          else if (res.data.back == '2') {
            ToastAndroid.show('用户名存在敏感词！', 1000);
          }
          else {
            ToastAndroid.show('注册成功！', 1000);
            AsyncStorage.setItem('user', JSON.stringify(res.data))
              .then(() => {
                Actions.replace('login')
              })
          }
        })
      }
    }
    else {
      ToastAndroid.show('输入内容不能为空！', 1000);
    }
  }
  render() {
    return (
      <View style={styles.box} >
        <Image
          style={styles.img}
          source={require('../../assets/login.png')}
        />
        <View
          style={styles.title}>
          <View
            style={styles.phone}>
            <Icon name="user" color="#F2BA96" />
            <TextInput placeholder="请输入用户名"
              onChangeText={this.userhandle}
            />
          </View>
          <View
            style={styles.code}>
            <Icon name="lock" color="#F2BA96" />
            <TextInput placeholder="请输入密码"
              onChangeText={this.pwdhandle}
              secureTextEntry={true}
            />
          </View>
          <View
            style={styles.pwd}>
            <Icon name="lock" color="#F2BA96" />
            <TextInput
              onChangeText={this.passwordhandle}
              placeholder="请确认密码"
              secureTextEntry={true}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '70%', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.register}
              onPress={this.register}>
              <Text>注册</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.login}
              onPress={() => Actions.replace('login')}>
              <Text>去登录</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  img: {
    width: "100 %",
    height: "100 %",
  },
  title: {
    position: 'absolute',
    width: 350,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: " rgba(255,255,255,0.6)"
  },
  phone: {
    width: '80%',
    marginRight: 10,
    marginBottom: 20,
    borderColor: '#F2BA96',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  },
  code: {
    width: '80%',
    marginRight: 10,
    marginBottom: 20,
    borderColor: '#F2BA96',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  },
  pwd: {
    width: '80%',
    marginRight: 10,
    marginBottom: 10,
    borderColor: '#F2BA96',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 10
  },
  register: {
    width: '40%',
    height: 40,
    backgroundColor: '#F2BA96',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  login: {
    width: '40%',
    height: 40,
    marginTop: 20,
    borderColor: '#F2BA96',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});