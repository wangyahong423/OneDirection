import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, DeviceEventEmitter, Alert, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      data: [],
      todo: [],
      isloading: false,//true显示正在登陆中，false不显示
      unum: 0, //0：不为空；1：为空
      pnum: 0,
      isnull: true,//true没有提示，false显示提示“该用户不存在”,
      college: '',
      pic: ''
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
  login = () => {
    if (this.state.username != '' && this.state.pwd != "") {
      let url = `http://139.155.44.190:3005/users/login?name=${this.state.username}&pwd=${this.state.pwd}`;
      fetch(url)
        .then(res => res.json())
        .then(res => {
          if (res.ok) {
            this.setState({
              isloading: true
            })
            AsyncStorage.setItem('username', this.state.username);
            AsyncStorage.setItem('password', this.state.pwd);

            this.setState({
              isnull: true,
            })
            let url = `http://139.155.44.190:3005/users/list`;
            fetch(url)
              .then(res => res.json())
              .then((res) => {
                if (res.err) {
                } else {
                  this.setState({
                    data: res
                  })
                  let arr = [];
                  res.map((item) => {
                    if (item.name === this.state.username) {
                      arr.push(item)
                    }
                  })
                  this.setState({
                    college: arr[0].college,
                    pic: "http://139.155.44.190:3005" + arr[0].pic
                  })
                }
              })
            var param = { "college": this.state.college, "pic": this.state.pic }
            DeviceEventEmitter.emit('refresh', param)
            Actions.methodPage();//登录成功跳转首页
          }
          else {
            Alert.alert(res.msg)
            this.setState({
              username: '',
              pwd: ''
            })
          }
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
    const shadowOpt = {
      width: 100,
      height: 100,
      color: "#000",
      border: 10,
      radius: 50,
      opacity: 0.2,
      x: 0,
      y: 8,
      style: { marginVertical: 5 }
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground style={{ flex: 1, width: '100%', height: "100%" }} source={require('../../assets/login/login8.png')}>
          <View style={{ alignItems: "center", height: height, width: width, justifyContent: "center" }}>
            <View style={{ marginTop: -90 * s }}>
              <Text style={{ color: "#fff", fontSize: 40 * s }}>Welcome</Text>
            </View>
            <View
              style={{ alignItems: 'center', height: height * 0.5, width: width * 0.8, borderRadius: 10 * s, justifyContent: "center", }}>
              <View
                style={{
                  width: '90%',
                  height: 50 * s,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20 * s,
                  borderBottomColor: "#fff",
                  borderBottomWidth: 1 * s,
                }}>
                <Icon style={{ fontSize: 25 * s, color: "#fff", marginLeft: "5%" }} name="user" />
                <TextInput placeholder="用户名"
                  onChangeText={this.userhandle}
                  placeholderTextColor="#fff"
                  style={{color:"#FFF"}}
                />
              </View>
              <View
                style={{
                  width: '90%',
                  height: 50 * s,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 30 * s,
                  borderBottomColor: "#fff",
                  borderBottomWidth: 1 * s,
                }}>
                <Icon style={{ fontSize: 25 * s, color: "#fff", marginLeft: "5%" }} name="unlock" />

                <TextInput
                  onChangeText={this.pwdhandle}
                  placeholder="密码"
                  secureTextEntry={true}
                  placeholderTextColor="#fff"
                  style={{color:"#FFF"}}

                />
              </View>
              <View style={{ flexDirection: 'row', marginTop: 30 * s, width: "90%", justifyContent: "space-around" }}>
                <Text style={{ fontSize: 14 * s, color: '#fff' }} onPress={() => { Actions.forget() }}>忘记密码</Text>
                <Text style={{ fontSize: 14 * s, color: '#fff' }} onPress={() => Actions.signin()}>没有账号？  去注册</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 50 * s,
                  backgroundColor: "#4874E1",
                  marginTop: 50*s,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 25 * s,
                }}
                onPress={this.login}>
                <Text style={{ color: '#ffffff' }}>登 录</Text>
              </TouchableOpacity>
              {
                this.state.unum == 0
                  ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                  : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 110*s, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入用户名！</Text></View>
              }
              {
                this.state.pnum == 0
                  ? <View style={{ position: 'absolute', top: 290 }}><Text></Text></View>
                  : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 190*s, left: 65 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入正确的密码！</Text></View>
              }
            </View>
          </View>
          {
            this.state.isloading
              ? <View style={{ position: 'absolute', top: 650*s, zIndex: 11, left: 190, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 14,color:"#fff" }}>正在登录中...</Text></View>
              : null
          }
          {
            !this.state.isnull
              ? <View style={{ position: 'absolute', top: 530, zIndex: 11, left: 180, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 14 }}>此用户不存在！</Text></View>
              : null
          }
        </ImageBackground>
      </SafeAreaView>
    );
  }
}