import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, ScrollView, TouchableOpacity, DeviceEventEmitter, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const { width, height } = Dimensions.get('window');
const s = width / 460;
// console.log(width * 0.2)
export default class Touxiang extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pic: '',
            isLoading: true,
            lvlist: []

        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })

        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        let url = `http://139.155.44.190:3005/users/list`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    lvlist: res
                })
                this.state.lvlist.map((item) => {
                    if (item.name == this.state.username) {
                        this.setState({
                            level: item.level
                        })
                    }
                })
                this.setState({ isLoading: false });

            })
    }
    selectImg = (text) => {//获取
        this.setState({
            pic: text
        })
    }

    imgChange = () => {//提交
        let url = `http://139.155.44.190:3005/users/change?name=${this.state.username}&pic=${this.state.pic}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                Actions.myPage();
            })
        var param = 1;
        DeviceEventEmitter.emit('freshone', param);
        DeviceEventEmitter.emit('refresh', param);
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    render() {
        return (
            <View>
                <View style={{
                    width: '100%',
                    height: 60 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => this.back()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>我的头像</Text>
                </View>
                <ScrollView style={{ height: " 83 %" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/56.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/56.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? width * 0.2 : 0, height: (this.state.level) < 2 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/2.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/2.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? width * 0.2 : 0, height: (this.state.level) < 2 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/3.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/3.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? width * 0.2 : 0, height: (this.state.level) < 2 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/4.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/4.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? width * 0.2 : 0, height: (this.state.level) < 2 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/5.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/5.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? width * 0.2 : 0, height: (this.state.level) < 2 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/6.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/6.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? width * 0.2 : 0, height: (this.state.level) < 3 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/7.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/7.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? width * 0.2 : 0, height: (this.state.level) < 3 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/8.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/8.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? width * 0.2 : 0, height: (this.state.level) < 3 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/9.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/9.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? width * 0.2 : 0, height: (this.state.level) < 3 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/10.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/10.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? width * 0.2 : 0, height: (this.state.level) < 3 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/11.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/11.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? width * 0.2 : 0, height: (this.state.level) < 4 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/12.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/12.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? width * 0.2 : 0, height: (this.state.level) < 4 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/13.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/13.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? width * 0.2 : 0, height: (this.state.level) < 4 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/14.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/14.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? width * 0.2 : 0, height: (this.state.level) < 4 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/15.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/15.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? width * 0.2 : 0, height: (this.state.level) < 4 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/21.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/21.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? width * 0.2 : 0, height: (this.state.level) < 5 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/22.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/22.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? width * 0.2 : 0, height: (this.state.level) < 5 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/23.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/23.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? width * 0.2 : 0, height: (this.state.level) < 5 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/24.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/24.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? width * 0.2 : 0, height: (this.state.level) < 5 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/25.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/25.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? width * 0.2 : 0, height: (this.state.level) < 5 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/26.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/26.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? width * 0.2 : 0, height: (this.state.level) < 6 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/27.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/27.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? width * 0.2 : 0, height: (this.state.level) < 6 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/28.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/28.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? width * 0.2 : 0, height: (this.state.level) < 6 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/29.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/29.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? width * 0.2 : 0, height: (this.state.level) < 6 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/30.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/30.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? width * 0.2 : 0, height: (this.state.level) < 6 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/31.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/31.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? width * 0.2 : 0, height: (this.state.level) < 7 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/32.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/32.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? width * 0.2 : 0, height: (this.state.level) < 7 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/33.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/33.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? width * 0.2 : 0, height: (this.state.level) < 7 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/34.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/34.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? width * 0.2 : 0, height: (this.state.level) < 7 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/35.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/35.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? width * 0.2 : 0, height: (this.state.level) < 7 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/41.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/41.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? width * 0.2 : 0, height: (this.state.level) < 8 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/42.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/42.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? width * 0.2 : 0, height: (this.state.level) < 8 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/43.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/43.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? width * 0.2 : 0, height: (this.state.level) < 8 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/44.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/44.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? width * 0.2 : 0, height: (this.state.level) < 8 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/45.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/45.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? width * 0.2 : 0, height: (this.state.level) < 8 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/46.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/46.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? width * 0.2 : 0, height: (this.state.level) < 9 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/47.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/47.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? width * 0.2 : 0, height: (this.state.level) < 9 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/48.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/48.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? width * 0.2 : 0, height: (this.state.level) < 9 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/49.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/49.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? width * 0.2 : 0, height: (this.state.level) < 9 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/50.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/50.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? width * 0.2 : 0, height: (this.state.level) < 9 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/51.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/51.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? width * 0.2 : 0, height: (this.state.level) < 10 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/52.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/52.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? width * 0.2 : 0, height: (this.state.level) < 10 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/53.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/53.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? width * 0.2 : 0, height: (this.state.level) < 10 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/54.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/54.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? width * 0.2 : 0, height: (this.state.level) < 10 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/55.png')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/55.png' }} style={{ width: width * 0.2, height: width * 0.2 }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? width * 0.2 : 0, height: (this.state.level) < 10 ? width * 0.2 : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 30, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{
                    width: '100%',
                    height: 100 * s,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: "#fff"
                }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 52 * s,
                        borderRadius: 5 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                    }}
                        onPress={this.imgChange}
                    >
                        <Text style={{ color: '#fff', fontSize: 21 * s }}>确定</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoading
                        ? <View style={{ position: 'absolute', top: 0, width: '100%', height: "100%", backgroundColor: "black", opacity: 0.7 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ fontSize: 23 * s, color: "#fff" }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
            </View>
        )
    }
}