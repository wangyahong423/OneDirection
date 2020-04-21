import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class community extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            pic: [],
            like: [],
            lvlist: [],
            search: '',
            likeNum: [],
            comNum: [],
            username: '',
            isLoading: true
        };
        this.getData();
    }
    getData = () => {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
                console.log("用户名：", this.state.username)
            });
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        var url1 = `http://139.155.44.190:3005/community/list`;
        var url2 = `http://139.155.44.190:3005/communitylike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/communitytalk/list`;
        fetch(url3)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    pic: res,
                });//所有用户信息
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
                        fetch(url4)
                            .then((res) => res.json())
                            .then((res) => {
                                this.setState({ comNum: res.communitytalk });
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
                                            item.like = false;
                                            for (var j = 0; j < this.state.like.length; j++) {
                                                if (item.id == this.state.like[j].cid) {
                                                    item.like = true;
                                                    break;
                                                }
                                                else {
                                                    item.like = false;
                                                }
                                            }
                                            var likeNum = 0;
                                            for (var z = 0; z < this.state.likeNum.length; z++) {
                                                if (item.id == this.state.likeNum[z].cid) {
                                                    likeNum++;
                                                }
                                            }
                                            item.likeNum = likeNum;
                                            var comNum = 0;
                                            for (var z = 0; z < this.state.comNum.length; z++) {
                                                if (item.id == this.state.comNum[z].cid) {
                                                    comNum++;
                                                }
                                            }
                                            item.comNum = comNum;
                                        });
                                        this.setState({ isLoading: false });
                                        this.setState({ list: res });
                                    });
                            });
                    });
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('refresh', function (param) {
            fetch(url3)
                .then((res) => res.json())
                .then((res) => {
                    self.setState({
                        pic: res,
                    });
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            self.setState({ likeNum: res });
                            var likeList = [];
                            for (var i = 0; i < res.length; i++) {
                                if (res[i].name == self.state.username) {
                                    likeList.push(res[i]);
                                }
                            }
                            self.setState({ like: likeList });
                            fetch(url4)
                                .then((res) => res.json())
                                .then((res) => {
                                    self.setState({ comNum: res.communtiytalk });
                                    fetch(url1)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            res.forEach(item => {
                                                for (var i = 0; i < self.state.pic.length; i++) {
                                                    if (item.name == self.state.pic[i].name) {
                                                        item.pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
                                                        break;
                                                    }
                                                }
                                                item.like = false;
                                                for (var j = 0; j < self.state.like.length; j++) {
                                                    if (item.id == self.state.like[j].cid) {
                                                        item.like = true;
                                                        break;
                                                    }
                                                    else {
                                                        item.like = false;
                                                    }
                                                }
                                                var likeNum = 0;
                                                for (var z = 0; z < self.state.likeNum.length; z++) {
                                                    if (item.id == self.state.likeNum[z].cid) {
                                                        likeNum++;
                                                    }
                                                }
                                                item.likeNum = likeNum;
                                                var comNum = 0;
                                                for (var z = 0; z < self.state.comNum.length; z++) {
                                                    if (item.id == self.state.comNum[z].cid) {
                                                        comNum++;
                                                    }
                                                }
                                                item.comNum = comNum;
                                            });
                                            self.setState({ list: res });
                                        });
                                });
                        });
                });
        });
    }
    componentWillUnmount() {
        this.listener.remove();
    }
    details = (idx) => {
        var value = { page: this.state.list[idx] };
        AsyncStorage.setItem('lPage', JSON.stringify(value));
        Actions.details();
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
            let url1 = `http://139.155.44.190:3005/communitylike/add?cid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                });
            console.log(url1)
            let url2 = `http://139.155.44.190:3005/users/list`;
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        lvlist: res
                    });
                    this.state.lvlist.map((item) => {
                        if (item.name == this.state.username) {
                            this.setState({
                                lvnum: item.lvnum + 1
                            })
                            let url = `http://139.155.44.190:3005/users/changeLvnum?lvnum=${this.state.lvnum}&name=${this.state.username}`;
                            fetch(url)
                                .then((res) => res.json())
                                .then((res) => {
                                });
                        }
                    })
                })
        }
        else if (this.state.list[idx].like == true) {
            crr = this.state.list;
            crr[idx].like = false;
            crr[idx].likeNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/communitylike/delete?cid=${this.state.list[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                });
        }
    }
    change = (e) => {
        this.setState({
            search: e
        })
    }
    search = (e) => {
        let url = `http://139.155.44.190:3005/community/select?content=${this.state.search}`;
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
                            if (item.id == this.state.like[j].cid) {
                                item.like = true;
                                break;
                            }
                            else {
                                item.like = false;
                            }
                        }
                        var likeNum = 0;
                        for (var z = 0; z < this.state.likeNum.length; z++) {
                            if (item.id == this.state.likeNum[z].cid) {
                                likeNum++;
                            }
                        }
                        item.likeNum = likeNum;
                        var comNum = 0;
                        for (var z = 0; z < this.state.comNum.length; z++) {
                            if (item.id == this.state.comNum[z].cid) {
                                comNum++;
                            }
                        }
                        item.comNum = comNum;
                    });
                    this.setState({ list: res });
                }
            });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={styles.hearder}>
                    <View style={styles.search}>
                        <Icon
                            style={{
                                marginLeft: 25 * s,
                                marginRight: 20 * s
                            }}
                            onPress={this.search}
                            style={{ fontSize: 23, marginLeft: 15 }} name='search1' />
                        <TextInput
                            style={{ fontSize: 17, height: '100%' }}
                            clearButtonMode="while-editing"
                            placeholder="请输入您要搜索的关键字"
                            onChangeText={this.change}
                        />
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 10 * s }}>
                                    <View style={styles.user}>
                                        <Image style={styles.avatar} source={{ uri: item.pic }} />
                                        <View style={{ marginLeft: 30 * s }}>
                                            <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                            <Text>{item.time}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.comment}>
                                        <Text numberOfLines={2} onPress={this.details.bind(this, (idx))} style={{ fontSize: 18 * s }}>{item.content}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 40 * s, alignItems: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon onPress={this.details.bind(this, (idx))} name="message1" style={{ fontSize: 20 * s, marginRight: 10 }}></Icon>
                                            <Text>{item.comNum}</Text>
                                        </View>
                                        <View style={styles.bottom}>
                                            <Icon name="hearto" onPress={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: 20 * s, marginRight: 10 } : { fontSize: 20 * s, marginRight: 10 }}></Icon>
                                            <Text>{item.likeNum}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                </ScrollView>
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: 80 * s,
                                width: '100%'
                            }}>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 18, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
                <TouchableOpacity style={{
                    width: 60 * s,
                    height: 60 * s,
                    borderRadius: 30 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#37376F',
                    position: 'absolute',
                    bottom: 20 * s,
                    right: 20 * s
                }}
                    onPress={() => Actions.add()}
                >
                    <Icon style={{ fontSize: 35, color: '#fff' }} name="edit" />
                </TouchableOpacity>
            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    hearder: {
        height: 60,
        backgroundColor: '#EFEFF4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        height: 40,
        width: 430 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.6,
    },
    user: {
        flexDirection: 'row',
        height: 90 * s,
        alignItems: 'center',
        // backgroundColor:'red'
    },
    avatar: {
        marginLeft: 20 * s,
        height: 50 * s,
        width: 50 * s,
        borderRadius: 25 * s
    },
    comment: {
        marginLeft: 30 * s,
        marginRight: 30 * s,
        marginBottom: 20 * s,
        // overflow: "hidden",
        // textOverflow: "ellipsis",
        // whiteSpace: "nowrap"
    },
    add: {
        position: "absolute",
        bottom: 30,
        right: 30,
        height: 80,
        width: 80,
        justifyContent: "center",
    },
    bottom: {
        flexDirection: 'row',
        height: 50,
        paddingTop: 10 * s,
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: "#EFEFF4"
    }
})