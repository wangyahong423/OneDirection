import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, ScrollView, TouchableOpacity, DeviceEventEmitter, StyleSheet, scrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const { width, height } = Dimensions.get('window');
const s = width / 5;
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
                        this.setState({ isLoading: false });
                    }
                })
            })
    }
    selectImg = (text) => {//获取
        this.setState({
            pic: text
        })
        console.log("头像", this.state.pic)
    }

    imgChange = () => {//提交
        console.log("输出头像", this.state.pic)
        let url = `http://139.155.44.190:3005/users/change?name=${this.state.username}&pic=${this.state.pic}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                Actions.myPage();
            })
        var param = 1;
        DeviceEventEmitter.emit('freshone', param);
    }

    render() {
        return (
            <View>
                <ScrollView style={{ height: "90%" }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/56.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/56.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? s : 0, height: (this.state.level) < 2 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/2.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/2.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? s : 0, height: (this.state.level) < 2 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/3.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/3.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? s : 0, height: (this.state.level) < 2 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/4.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/4.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? s : 0, height: (this.state.level) < 2 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 2} onPress={this.selectImg.bind(this, '/images/5.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/5.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 2 ? s : 0, height: (this.state.level) < 2 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 2 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/6.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/6.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? s : 0, height: (this.state.level) < 3 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/7.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/7.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? s : 0, height: (this.state.level) < 3 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/8.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/8.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? s : 0, height: (this.state.level) < 3 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/9.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/9.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? s : 0, height: (this.state.level) < 3 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 3} onPress={this.selectImg.bind(this, '/images/10.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/10.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 3 ? s : 0, height: (this.state.level) < 3 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 3 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/11.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/11.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? s : 0, height: (this.state.level) < 4 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/12.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/12.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? s : 0, height: (this.state.level) < 4 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/13.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/13.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? s : 0, height: (this.state.level) < 4 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/14.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/14.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? s : 0, height: (this.state.level) < 4 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 4} onPress={this.selectImg.bind(this, '/images/15.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/15.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 4 ? s : 0, height: (this.state.level) < 4 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 4 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/21.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/21.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? s : 0, height: (this.state.level) < 5 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/22.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/22.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? s : 0, height: (this.state.level) < 5 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/23.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/23.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? s : 0, height: (this.state.level) < 5 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/24.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/24.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? s : 0, height: (this.state.level) < 5 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 5} onPress={this.selectImg.bind(this, '/images/25.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/25.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 5 ? s : 0, height: (this.state.level) < 5 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 5 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/26.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/26.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? s : 0, height: (this.state.level) < 6 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/27.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/27.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? s : 0, height: (this.state.level) < 6 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/28.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/28.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? s : 0, height: (this.state.level) < 6 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/29.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/29.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? s : 0, height: (this.state.level) < 6 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 6} onPress={this.selectImg.bind(this, '/images/30.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/30.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 6 ? s : 0, height: (this.state.level) < 6 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 6 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/31.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/31.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? s : 0, height: (this.state.level) < 7 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/32.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/32.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? s : 0, height: (this.state.level) < 7 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/33.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/33.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? s : 0, height: (this.state.level) < 7 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/34.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/34.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? s : 0, height: (this.state.level) < 7 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 7} onPress={this.selectImg.bind(this, '/images/35.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/35.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 7 ? s : 0, height: (this.state.level) < 7 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 7 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/41.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/41.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? s : 0, height: (this.state.level) < 8 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/42.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/42.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? s : 0, height: (this.state.level) < 8 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/43.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/43.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? s : 0, height: (this.state.level) < 8 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/44.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/44.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? s : 0, height: (this.state.level) < 8 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 8} onPress={this.selectImg.bind(this, '/images/45.jpeg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/45.jpeg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 8 ? s : 0, height: (this.state.level) < 8 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 8 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/46.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/46.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? s : 0, height: (this.state.level) < 9 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/47.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/47.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? s : 0, height: (this.state.level) < 9 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/48.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/48.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? s : 0, height: (this.state.level) < 9 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/49.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/49.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? s : 0, height: (this.state.level) < 9 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 9} onPress={this.selectImg.bind(this, '/images/50.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/50.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 9 ? s : 0, height: (this.state.level) < 9 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 9 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/51.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/51.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? s : 0, height: (this.state.level) < 10 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/52.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/52.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? s : 0, height: (this.state.level) < 10 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/53.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/53.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? s : 0, height: (this.state.level) < 10 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/54.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/54.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? s : 0, height: (this.state.level) < 10 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={this.state.level < 10} onPress={this.selectImg.bind(this, '/images/55.jpg')}>
                            <Image source={{ uri: 'http://139.155.44.190:3005/images/55.jpg' }} style={{ width: s, height: s }} />
                            <View style={{ position: 'absolute', width: (this.state.level) < 10 ? s : 0, height: (this.state.level) < 10 ? s : 0, backgroundColor: "black", top: 0, opacity: 0.7, borderWidth: (this.state.level) < 10 ? 1 : 0, borderColor: "black", alignItems: 'center', justifyContent: "center" }}><Icon name="lock" style={{ fontSize: 40, color: '#fff' }} /></View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{ justifyContent: "center", alignItems: "center", height: "10%" }}>
                    <TouchableOpacity onPress={this.imgChange} style={{ width: 100, height: 50, backgroundColor: '#37376F' }}>
                        <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 20, marginTop: 10 }}> 确定</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoading
                        ? <View style={{ position: 'absolute', top: 0, width: '100%', height: "100%", backgroundColor: "black", opacity: 0.7 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', height: '100%' }}>
                                <Text style={{ fontSize: 20, color: "#fff" }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
            </View>
        )
    }
}