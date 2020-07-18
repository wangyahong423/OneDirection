import React, { Component } from 'react'
import { View, Text, AsyncStorage, ScrollView, Dimensions, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class NewAdd extends Component {
    constructor() {
        super();
        this.state = {
            learn: 0,
            experience: 0,
            learnlist: [],
            experiencelist: [],
            username: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('newlearn')
            .then((value) => {
                var learn = JSON.parse(value).learn.length;
                this.setState({
                    learn: learn,
                    learnlist: JSON.parse(value).learn
                });
            });
        AsyncStorage.getItem('newexperience')
            .then((value) => {
                var experience = JSON.parse(value).experience.length;
                this.setState({
                    experience: experience,
                    experiencelist: JSON.parse(value).experience
                });
            });
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Mrefresh', param);
    }
    learn = () => {
        var arr = this.state.learnlist;
        let url1 = `http://139.155.44.190:3005/learn/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < res.length; j++) {
                        if (arr[i] == res[j].id) {
                            let url2 = `http://139.155.44.190:3005/follow/changeLL?nname=${res[j].name}&lname=${this.state.username}&learn=${""}`;
                            fetch(url2)
                                .then((res) => res.json())
                                .then((res) => {
                                });
                        }
                    }
                }
                this.setState({
                    learn: 0
                });
                Actions.newl();
            });
    }
    experience = () => {
        var arr = this.state.experiencelist;
        let url1 = `http://139.155.44.190:3005/experience/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                for (var i = 0; i < arr.length; i++) {
                    for (var j = 0; j < res.length; j++) {
                        if (arr[i] == res[j].id) {
                            let url2 = `http://139.155.44.190:3005/follow/changeEE?nname=${res[j].name}&lname=${this.state.username}&experience=${""}`;
                            fetch(url2)
                                .then((res) => res.json())
                                .then((res) => {

                                });
                        }
                    }
                }
                this.setState({
                    experience: 0
                });
                Actions.newe();
            });
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.learn
                        ? <TouchableOpacity style={{
                            height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                            borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}
                            onPress={() => this.learn()}
                        >
                            <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >社区</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, lineHeight: 60 * s, marginRight: 10 * s }} >{this.state.learn}</Text>
                                <Icon name="chevron-right" style={{ marginRight: 30 * s }} size={20} color="#aaa" />
                            </View>
                        </TouchableOpacity>
                        : <TouchableOpacity style={{
                            height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                            borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}
                        >
                            <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >社区</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, lineHeight: 60 * s, marginRight: 10 * s }} >{this.state.learn}</Text>
                                <Icon name="chevron-right" style={{ marginRight: 30 * s }} size={20} color="#aaa" />
                            </View>
                        </TouchableOpacity>
                }
                {
                    this.state.experience
                        ? <TouchableOpacity style={{
                            height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                            borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}
                            onPress={() => this.experience()}
                        >
                            <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >经验分享</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, lineHeight: 60 * s, marginRight: 10 * s }} >{this.state.experience}</Text>
                                <Icon name="chevron-right" style={{ marginRight: 30 * s }} size={20} color="#aaa" />
                            </View>
                        </TouchableOpacity>
                        : <TouchableOpacity style={{
                            height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                            borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white",
                            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                        }}
                        >
                            <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} >经验分享</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, lineHeight: 60 * s, marginRight: 10 * s }} >{this.state.experience}</Text>
                                <Icon name="chevron-right" style={{ marginRight: 30 * s }} size={20} color="#aaa" />
                            </View>
                        </TouchableOpacity>
                }

                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: 60 * s,
                        backgroundColor: '#37376F',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15 * s,
                        marginLeft: '25%'
                    }}
                    onPress={() => this.back()}
                >
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>返回</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

