import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class LearnDetails extends Component {
    constructor() {
        super();
        this.state = {
            page: '',
            username: '李四',
            comment: '',
            list: [],
            pic: []
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('lPage')
            .then((value) => {
                this.setState({
                    page: JSON.parse(value).page
                });
                let url1 = `http://139.155.44.190:3005/learntalk/list`;
                let url2 = `http://139.155.44.190:3005/users/list`;
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ pic: res });
                        fetch(url1)
                            .then((res) => res.json())
                            .then((res) => {
                                var arr = [];
                                res.forEach(item => {
                                    if (item.lid == this.state.page.id) {
                                        for (var i = 0; i < this.state.pic.length; i++) {
                                            if (item.name == this.state.pic[i].name) {
                                                item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                break;
                                            }
                                        }
                                        arr.push(item);
                                    }

                                });
                                this.setState({ list: arr });
                            })
                    })
            });
    }
    change = (e) => {
        this.setState({ comment: e });
        console.log(this.state.comment);
    }
    release = () => {
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        var hour = date.getHours().toString();
        var minute = date.getMinutes().toString();
        var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
        console.log(time);
        let url = `http://139.155.44.190:3005/learntalk/add?lid=${this.state.page.id}
                &name=${this.state.username}&content=${this.state.comment}&time=${time}`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.ok) {
                    Alert.alert(res.msg);
                } else {
                    Alert.alert(res.msg);
                }
            })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 5 * s }}>
                    <View style={{
                        flexDirection: 'row',
                        height: 80 * s,
                        alignItems: 'center'
                    }}>
                        <Image style={{
                            marginLeft: 20 * s,
                            height: 50 * s,
                            width: 50 * s,
                            borderRadius: 25 * s,
                            backgroundColor: 'yellow'
                        }} source={{ uri: this.state.page.pic }} />
                        <View style={{ marginLeft: 30 * s }}>
                            <Text style={{ fontSize: 18 * s }}>{this.state.page.name}</Text>
                            <Text>{this.state.page.time}</Text>
                        </View>
                    </View>
                    <View style={{
                        marginLeft: 30 * s,
                        marginRight: 30 * s,
                        marginTop: 10 * s,
                        marginBottom: 20 * s
                    }}
                    >
                        <Text style={{ fontSize: 18 * s }}>{this.state.page.content}</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: 70 * s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}>
                    <TextInput
                        style={{
                            height: 30 * s,
                            width: "75%",
                            padding: 0,
                            fontSize: 15 * s,
                            borderRadius: 15 * s,
                            backgroundColor: '#fff',
                            paddingLeft: 10 * s
                        }}
                        clearButtonMode="while-editing"
                        // autoFocus={true}
                        placeholderTextColor='#e0e0e0'
                        placeholder="填写评论"
                        onChangeText={this.change}
                    />
                    <TouchableOpacity style={{
                        width: 55 * s,
                        height: 30 * s,
                        borderRadius: 15 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F'
                    }}
                        onPress={this.release}
                    >
                        <Text style={{ color: 'white', fontSize: 15 * s }}>发送</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderBottomColor: '#000',
                        borderBottomWidth: 1 * s
                    }}
                >
                    <Text style={{paddingLeft:10*s,fontSize:20*s}}>评论</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item) => (
                                <View style={{ backgroundColor: '#fff', width: '100%',borderBottomWidth:1*s,borderBottomColor:'#808080' }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }}>
                                        <Image style={{
                                            marginLeft: 20 * s,
                                            height: 50 * s,
                                            width: 50 * s,
                                            borderRadius: 25 * s,
                                            backgroundColor: 'yellow'
                                        }} source={{ uri: item.pic }} />
                                        <View style={{ marginLeft: 30 * s }}>
                                            <Text style={{ fontSize: 15 * s,color:'#37376F',marginTop:5*s}}>{item.name}</Text>
                                            <Text style={{ fontSize: 18 * s }}>{item.content}</Text>
                                            <Text style={{fontSize:10*s,color:'#808080',marginTop:5*s,marginBottom:5*s}}>{item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}
