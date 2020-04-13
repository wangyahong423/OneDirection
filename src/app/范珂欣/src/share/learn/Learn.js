import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Learn extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            pic: [],
            like: [],
            search: '',
            likeNum: [],
            username: '张三'
        };
        // Actions.refresh(this.state.list);
    }
    getData = () => {
        AsyncStorage.getItem('user')
            .then((value) => {
                this.setState({
                    username: JSON.parse(value).username
                });
            });
    }
    componentDidMount() {
        var url1 = `http://139.155.44.190:3005/learn/list`;
        var url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ pic: res });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ likeNum: res });
                        var likeList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                likeList.push(res[i]);
                            }
                        }
                        this.setState({ like: likeList });
                        fetch(url1)
                            .then((res) => res.json())
                            .then((res) => {
                                res.forEach(item => {
                                    for (var i = 0; i < this.state.pic.length; i++) {
                                        if (item.name == this.state.pic[i].name) {
                                            item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                            break;
                                        }
                                    }
                                    for (var j = 0; j < this.state.like.length; j++) {
                                        if (item.id == this.state.like[j].lid) {
                                            item.like = true;
                                            break;
                                        }
                                        else {
                                            item.like = false;
                                        }
                                    }
                                    var likeNum = 0;
                                    for (var z = 0; z < this.state.likeNum.length; z++) {
                                        if (item.id == this.state.likeNum[z].lid) {
                                            likeNum++;
                                        }
                                    }
                                    item.likeNum = likeNum;
                                    item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                                });
                                this.setState({ list: res });
                            });
                    });
            });
    }
    details = (idx) => {
        var value = { page: this.state.list[idx].id };
        console.log(idx);
        AsyncStorage.setItem('lPage', JSON.stringify(value));
        Actions.learndetails();
    }
    like = (idx) => {
        var crr = '';
        if (this.state.list[idx].like == false) {
            crr = this.state.list;
            crr[idx].like = true;
            crr[idx].likeNum++;
            this.setState({
                list: crr
            })
            console.log(2);
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url1);
                });
        }
        else if (this.state.list[idx].like == true) {
            crr = this.state.list;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/learnlike/delete?lid=${this.state.list[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url2);
                });
        }
    }
    change = (e) => {
        this.setState({
            search: e
        })
    }
    search = (e) => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.false) { }
                else {
                    res.forEach(item => {
                        for (var i = 0; i < this.state.pic.length; i++) {
                            if (item.name == this.state.pic[i].name) {
                                item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                break;
                            }
                        }
                        for (var j = 0; j < this.state.like.length; j++) {
                            if (item.id == this.state.like[j].lid) {
                                item.like = true;
                                break;
                            }
                            else {
                                item.like = false;
                            }
                        }
                        item.content = item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content;
                    });
                    this.setState({ list: res });
                }
            });
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: '100%',
                    height: 70 * s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 40 * s,
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#D7D3D3',
                        borderRadius: 28 * s

                    }}>
                        <Icon
                            style={{
                                marginLeft: 25 * s,
                                marginRight: 20 * s
                            }}
                            onPress={this.search}
                            color='#fff' size={20} name='search' />
                        <TextInput
                            style={{
                                height: 50 * s,
                                width: "80%",
                                padding: 0,
                                fontSize: 15 * s
                            }}
                            clearButtonMode="while-editing"
                            // autoFocus={true}
                            placeholderTextColor='#fff'
                            placeholder="请输入您要搜索的关键字"
                            onChangeText={this.change}
                        />
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 20 * s }}>
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
                                        }} source={{ uri: item.pic }} />
                                        <View style={{ marginLeft: 30 * s }}>
                                            <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                            <Text>{item.time}</Text>
                                        </View>
                                    </View>
                                    <View style={{
                                        marginLeft: 30 * s,
                                        marginRight: 30 * s,
                                        marginTop: 10 * s,
                                        marginBottom: 20 * s
                                    }}
                                    >
                                        <Text onPress={this.details.bind(this, (idx))} style={{ fontSize: 18 * s }}>{item.content}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 40 * s, paddingTop: 5 * s, justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                        <Icon name="comment" style={{ fontSize: 30 * s }}></Icon>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon name="heart" onPress={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                            <Text>{item.likeNum}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                </ScrollView>
                <TouchableOpacity style={{
                    width: 60 * s,
                    height: 60 * s,
                    borderRadius: 30 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#37376F',
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}
                    onPress={() => Actions.addlearn()}
                >
                    <Text style={{ color: 'white', fontSize: 30 * s }}>+</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
