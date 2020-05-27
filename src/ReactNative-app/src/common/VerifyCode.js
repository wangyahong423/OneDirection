import React, { Component } from 'react';
import { StyleSheet, Text, AsyncStorage, DeviceEventEmitter, TextInput, View, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Touchable from 'react-native-touchable';
import { Actions } from 'react-native-router-flux';


const Status = {
    Normal: 1,  //正常状态
    Start: 2,    //倒计时开始状态
    End: 3,//倒计时结束
}
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class VerifyCode extends Component {
    static defaultProps = {
        maxTime: 60,
        normalTxt: '发送验证码',
        endTxt: '重新发送',
        countdownTxt: '秒后重新发送',
        auto: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            countdownTxt: props.normalTxt,
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
        };
    }

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

    componentDidMount() {
        if (this.props.auto) {
            this.startCountdown();
        }
    }


    status = Status.Normal;
    //点击开始
    startCountdown = () => {
        if (this.status != Status.Start) {
            if (this.props.beforeCountdown) {
                var flag = this.props.beforeCountdown();
                if (flag) {
                    this._startTimer();
                    var n = '';
                    for (var i = 0; i < 6; i++) {
                        var j = parseInt(Math.random() * 10);
                        n = n + j;
                    }
                    setTimeout(() => {
                        this.setState({
                            timeContent: '验证码为：' + n,
                        })

                    }, 1000 * parseInt(Math.random() * 6))


                }
            } else {
                this._startTimer();
            }
        }
    }

    countdownTime = 0;//倒计时时间
    _startTimer = () => {
        const { maxTime, endTxt, countdownTxt, startCountdown } = this.props;
        if (startCountdown) {
            startCountdown();
        }

        this.countdownTime = maxTime; //倒计时时间
        this.status = Status.Start;
        this.setState({
            countdownTxt: maxTime + countdownTxt,
        });
        this.timer = setInterval(() => {
            var currTime = this.countdownTime - 1;
            if (currTime <= 0) {
                this.countdownTime = maxTime;
                this.status = Status.End;
                this.setState({
                    countdownTxt: endTxt,
                });
                clearInterval(this.timer);
            } else {
                this.countdownTime = currTime;
                if (this.countdownTime == maxTime) {
                    this.setState({
                        countdownTxt: this.countdownTime + countdownTxt,
                    });
                } else {
                    this.setState({
                        countdownTxt: this.countdownTime + countdownTxt,
                    });
                }
            }
        }, 1000);
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
    }

    componentDidMount = () => {
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
        props.touchableStyle = this.getTouchableStyle();
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
                                // marginRight: 15*s,
                                // borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8',
                                // borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 10 * s,
                                // borderRadius: 10,
                                // marginLeft: 13,
                                // backgroundColor:'white',
                                height: 42*s,
                                // backgroundColor:"yellow"
                            }}>
                            <Text style={{ color: "#fff" }}>{this.state.college}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => { Actions.choosecollege() }}
                        // style={{ width: '30%', borderBottomColor: '#e8e8e8', borderLeftColor: '#e8e8e8', borderTopColor: '#e8e8e8', borderRightColor: '#e8e8e8', borderWidth: 1, alignItems: 'center', borderRadius: 10, backgroundColor: '#37376F' }}
                        style={{
                            width: '22%',
                            height: 40*s,
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            marginTop: 20*s,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius:10*s,
                            marginLeft:18*s,
                            borderWidth:1,
                            borderColor:"#FFF"
                        }}
                    >
                        <Text style={{ lineHeight: 42,  fontSize: 13 }}>选择学院</Text>
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
                    <Touchable style={[props.touchableStyle, { width: width * 0.2, height: 40 * s, marginTop: 25 * s, marginLeft: 20 * s }]} onPress={this.startCountdown}>
                        <Text style={props.touchableTextStyle}>{this.state.countdownTxt}</Text>
                    </Touchable>
                </View>
                <Text style={{ color: 'black', marginTop: 22, marginBottom: -20, width: '70%', marginLeft: 76 }}>{this.state.timeContent}</Text>
                <TouchableOpacity
                    style={{
                        width: width*0.5,
                        height: 46*s,
                        backgroundColor: '#4874E1',
                        marginTop: 40*s,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:23*s
                    }}
                    onPress={this.register}
                >
                    <Text style={{ color: '#ffffff' }}>注册</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    style={{
                        width: '30%',
                        height: 40,
                        backgroundColor: '#37376F',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => Actions.login()}>
                    <Text style={{ color: '#ffffff' }}>返回登录</Text>
                </TouchableOpacity> */}
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