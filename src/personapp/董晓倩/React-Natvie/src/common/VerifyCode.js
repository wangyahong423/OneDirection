import React, { Component } from 'react';
import { StyleSheet, Text, AsyncStorage, DeviceEventEmitter, TextInput, View, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Touchable from 'react-native-touchable';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import Modes from './config';
import verificationStyle from './style';
import VerificationCode from 'react-native-verification-code';
import Asc from './create';
import LinearGradient from 'react-native-linear-gradient';

const Status = {
    Normal: 1,  //正常状态
    Start: 2,    //倒计时开始状态
    End: 3,//倒计时结束
}
const { width, height } = Dimensions.get('window');
const s = width / 460;
const vcStyle = StyleSheet.create(verificationStyle);
export default class VerifyCode extends Component {
    static defaultProps = {
        containerStyle: vcStyle.container, //容器样式
        textStyle: vcStyle.textStyle, //验证码文本样式
        codeLength: 4, //验证码长度
        mode: Modes[0], //模式默认字母，支持letter,number两种
        init: () => { },
        isColor: false, //是否开启验证码随机字体颜色
        isBgColor: false, //是否开启容器背景随机颜色
        time: 200, //ms //响应时间内多次点击无效
        onClick: () => { } //点击事件
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pwd: '',//密码
            repwd: '',//确认密码
            tel: '',//电话号码
            num: '',//验证码
            college: '你选择的学院为',
            isloading: false,
            usernameNull: 0,//用户名是否为空，如果是空设置为0，弹出提示“请输入用户名”，如果不为空设置为1，不弹出提示。
            pwdNull: 0,//密码是否为空，如果是空设置为0，弹出提示“请输入密码”，如果不为空设置为1，不弹出提示。
            repwdNull: 0,//确认密码是否为空，如果是空设置为0，弹出提示“请再次确认密码”，如果不为空设置为1，不弹出提示。
            telNull: 0,//手机号码格式是否正确，如果不正确设置为0，弹出提示“请正确输入手机号码的格式”，如果正确设置为1，不弹出提示。
            numNull: 0,//验证码是否正确，如果不正确设置为0。弹出提示“验证码不正确！”，如果正确设置为1，不弹出提示。
            collegeNull: 0,
            timeContent: '',
            code: this.getCode()
        };
    }

    //get code value
    getValue = () => this.state.code;

    //refresh code
    refresh = () => {
        if (!this.timer) {
            this.timer = setTimeout(() => {
                const code = this.getCode();
                this.colors = this.getColors();
                this.setState({
                    code
                }, () => {
                    this.timer = null;
                    this.props.onClick
                        && this.props.onClick({
                            componentName: 'VerificationCode',
                            value: code
                        })
                })
            }, this.props.time)
        }
    }

    getColors = () => Asc.createContainerStyle(this.props.isBgColor);

    userhandle = (text) => {
        if (text !== '') {
            this.setState({ username: text, usernameNull: 0 })
        }

    }
    pwdhandle = (text) => {
        if (text !== '') {
            this.setState({ pwd: text, pwdNull: 0 })
        }
    }
    repwdhandle = (text) => {
        if (text !== '') {
            this.setState({ repwd: text, repwdNull: 0 })
        }
    }
    telhandle = (text) => {
        if (text !== '') {
            var t = text.split('');
            if (t.length == 11 && t[1] == 3 | 4 | 5 | 6 | 7 | 8 | 9 && t[0] == 1) {
                this.setState({ tel: text, telNull: 0 })
            }
        }
    }
    numhandle = (text) => {
        if (text !== '') {
            this.setState({ num: text, numNull: 0 })
        }
    }

    getTouchableStyle = () => {
        var style = {};
        switch (this.status) {
            case Status.Start:
                style = [styles.touchable, this.props.countdownStartStyle];
                break;
            case Status.End:
                style = [styles.touchable, this.props.countdownEndStyle];
                break;
            default:
                style = [styles.touchable, this.props.countdownNormalStyle];
        }
        return style;
    }

    getTouchableTextStyle = () => {
        var style = {};
        switch (this.status) {
            case Status.Start:
                style = [styles.touchableText, this.props.countdownStartTextStyle];
                break;
            case Status.End:
                style = [styles.touchableText, this.props.countdownEndTextStyle];
                break;
            default:
                style = [styles.touchableText, this.props.countdownNormalTextStyle];
        }
        return style;
    }

    register = () => {
        if (this.state.username == '') {
            this.setState({
                usernameNull: 1
            })
        }
        else if (this.state.pwd == '') {
            this.setState({
                pwdNull: 1
            })
        }
        else if (this.state.repwd == '') {
            this.setState({
                repwdNull: 1
            })
        }
        else if (this.state.college == '') {
            this.setState({
                collegeNull: 1
            })
        }
        else if (this.state.tel == '') {
            this.setState({
                telNull: 1
            })
        }
        else if (this.state.num == '') {
            this.setState({
                numNull: 1
            })
        }
        else if (this.state.username !== '' && this.state.pwd !== '' && this.state.repwd !== '' && this.state.college !== '' && this.state.tel !== '' && this.state.num !== '') {
            var c = '';
            for (var i = 0; i < this.state.code.length; i++) {
                c += this.state.code[i];
            }
            if (c.toLocaleLowerCase() == this.state.num) {
                fetch(`http://139.155.44.190:3005/users/addUser?name=${this.state.username}&pwd=${this.state.pwd}&tel=${this.state.tel}&college=${this.state.college}`)
                    .then(res => res.json())
                    .then(
                        data => {
                            if (data.ok == 1) {
                                Alert.alert('注册成功');
                                AsyncStorage.setItem('college', '你选择的学院为');
                                Actions.login();
                            }
                            else if (data.ok == 0) {
                                Alert.alert("注册失败，用户名已存在");
                            }
                        }
                    )
            }
            else if(c.toLocaleLowerCase() != this.state.num){
                Alert.alert('验证码错误！');
            }

        }
    }

    componentWillMount() {
        this.timer = null;
        this.colors = this.getColors();
    }

    //get code value
    getCode = () => {
        const { mode, codeLength } = this.props;
        return Asc.randomCode(mode, codeLength);
    }

    componentDidMount = () => {
        this.props.init && this.props.init(this);
        this.setState({
            college: '你选择的学院'
        })
        AsyncStorage.getItem('college')
            .then((v) => {
                this.setState({
                    college: v
                })
            })
        var self = this;
        this.listener = DeviceEventEmitter.addListener('refresh', function (param) {
            self.setState({
                college: '你选择的学院'
            })
            AsyncStorage.getItem('college')
                .then((v) => {
                    self.setState({
                        college: v
                    })
                })
        })
    }
    componentWillUnmount() {
        this.listener.remove();
    }

    render() {
        var props = Object.assign({}, this.props);
        props.containerStyle = [styles.container, props.containerStyle];
        props.textInputStyle = [styles.textInput, props.textInputStyle];
        props.touchableTextStyle = this.getTouchableTextStyle();

        return (
            <View style={{ alignItems: 'center', marginTop: '12%' }}>
                <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                    <Icon name="user-o" color="#fff" size={25 * s} style={{ marginLeft: 15 * s }} />
                    <TextInput onChangeText={this.userhandle} placeholder="请输入用户名" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                    <Icon name="lock" color="#fff" size={30 * s} style={{ marginLeft: 15 * s }} />
                    <TextInput onChangeText={this.pwdhandle} secureTextEntry={true} placeholder="请输入密码" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                    <Icon name="lock" color="#fff" size={30 * s} style={{ marginLeft: 15 * s }} />
                    <TextInput onChangeText={this.repwdhandle} secureTextEntry={true} placeholder="请再次确认密码" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '80%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                    <Icon name="mobile-phone" color="#fff" size={34 * s} style={{ marginLeft: 15 * s }} />
                    <TextInput onChangeText={this.telhandle} placeholder="请输入手机号码" placeholderTextColor="#fff" style={{ color: "#fff" }} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: 'row', marginTop: 25, height: 40 * s, width: '53%', borderBottomWidth: 1, borderBottomColor: "#fff", alignItems: "center" }}>
                        <Icon name="mortar-board" color="#fff" size={25 * s} style={{ marginLeft: 15 * s }} />
                        <View
                            style={{
                                width: "80%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 10 * s,
                                height: 42 * s,
                            }}>
                            <Text style={{ color: "#fff" }}>{this.state.college}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => { Actions.choosecollege() }}
                        style={{
                            width: '22%',
                            height: 40 * s,
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            marginTop: 20 * s,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10 * s,
                            marginLeft: 18 * s,
                            borderWidth: 1,
                            borderColor: "#FFF"
                        }}
                    >
                        <Text style={{ lineHeight: 42, fontSize: 13 }}>选择学院</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={[props.containerStyle, { marginTop: 25, height: 40 * s, width: '53%', borderBottomWidth: 1, borderBottomColor: "#fff" }]}>
                        <Icon name="edit" color="#fff" size={30 * s} style={{ marginLeft: 15 * s }} />
                        <TextInput placeholderTextColor="#fff" style={{ color: "#fff" }}
                            underlineColorAndroid='transparent'
                            {...props}
                            placeholder='请输入验证码'
                            onChangeText={this.numhandle}
                        />

                    </View>
                    <TouchableOpacity onPress={this.refresh} activeOpacity={1}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={[...this.colors]}
                            style={this.props.containerStyle}
                        >
                            {
                                this.state.code
                                && this.state.code.length
                                && this.state.code
                                    .map((v, k) => <Text key={k}
                                        style={[
                                            this.props.textStyle,
                                            {
                                                ...Asc.createTextStyle(this.props.isColor)
                                            }]}>{v}</Text>)
                            }
                        </LinearGradient>
                    </TouchableOpacity>
                </View>


                <Text style={{ color: 'black', marginTop: 22, marginBottom: -20, width: '70%', marginLeft: 76 }}>{this.state.timeContent}</Text>
                <TouchableOpacity
                    style={{
                        width: width * 0.5,
                        height: 46 * s,
                        backgroundColor: '#4874E1',
                        marginTop: 40 * s,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 23 * s
                    }}
                    onPress={this.register}
                >
                    <Text style={{ color: '#ffffff' }}>注册</Text>
                </TouchableOpacity>
                {
                    this.state.usernameNull == 0
                        ? <View style={{ position: 'absolute', top: 52 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 57, left: 97 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入用户名！</Text></View>
                }
                {
                    this.state.pwdNull == 0
                        ? <View style={{ position: 'absolute', top: 119 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 122, left: 97 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入密码！</Text></View>
                }
                {
                    this.state.repwdNull == 0
                        ? <View style={{ position: 'absolute', top: 195 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 187, left: 97 }}><Text style={{ color: 'red', fontSize: 13 }}>请再次确认密码！</Text></View>
                }
                {
                    this.state.collegeNull == 0
                        ? <View style={{ position: 'absolute', top: 195 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 252, left: 97 }}><Text style={{ color: 'red', fontSize: 13 }}>请选择学院！</Text></View>
                }
                {
                    this.state.telNull == 0
                        ? <View style={{ position: 'absolute', top: 270 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 328, left: 97 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入正确手机号码！</Text></View>
                }
                {
                    this.state.numNull == 0
                        ? <View style={{ position: 'absolute', top: 345 }}><Text></Text></View>
                        : <View style={{ height: 40, justifyContent: 'center', position: 'absolute', top: 392, left: 97 }}><Text style={{ color: 'red', fontSize: 13 }}>请输入验证码！</Text></View>
                }
            </View>
        );
    }
}

//default proptype
VerificationCode.propTypes = {
    mode: PropTypes.string,
    containerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    init: PropTypes.func,
    time: PropTypes.number,
    isColor: PropTypes.bool,
    onClick: PropTypes.func,
    isBgColor: PropTypes.bool,
    codeLength: PropTypes.number,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        fontSize: 15,
        paddingLeft: 12
    },
    touchable: {
        width: 128,
        marginLeft: 24,
        backgroundColor: '#161616',
    },
    touchableText: {
        color: 'white',
    }
})