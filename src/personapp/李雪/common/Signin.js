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
