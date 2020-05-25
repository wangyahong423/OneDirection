import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';
import VerifyCode from './VerifyCode'
const { width, height } = Dimensions.get('window');
const s = width / 460;
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
            <ImageBackground style={{ flex: 1, width: '100%', height: "100%" }} source={require('../../assets/login/login8.png')}>
                <Icon onPress={() => Actions.login()} style={{ color: "#fff", fontSize: 40 * s, marginTop: 15 * s, marginLeft: width * 0.9 }} name="ios-close" />
                <View style={{ width: width, height: 50 * s, alignItems: "center", marginTop: 25 * s ,marginBottom:-10*s}}>
                    <Text style={{ color: "#fff", fontSize: 40 * s }}>Sigin In</Text>
                </View>
                <View style={{ flex: 1 }}>
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
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    countdownNormalStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1
    },
    countdownStartStyle: {
        // backgroundColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0)',
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1
    },
    countdownEndStyle: {
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderColor: "#fff",
        borderWidth: 1
    },
    countdownNormalTextStyle: {
        color: 'black',
    },
    countdownStartTextStyle: {
        color: 'black',
    },
    countdownEndTextStyle: {
        color: 'black',
    },
})
