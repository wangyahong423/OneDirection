import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView,  Dimensions,  Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Fans extends Component {
    constructor() {
        super();
        this.state = {
            all: '',
            learn: 0,
            exp: 0,
            follows: 0,
            fans: 0,
            Elike: 0,
            Llike: 0,
            list: [],
            follow: [],
            fol: false,
            myFol: [],
            pic: [],
            myFollow: []
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
            });
        AsyncStorage.getItem('fanslist')
            .then((res) => {
                this.setState({
                    all: JSON.parse(res)
                })
            });
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        let url1 = `http://139.155.44.190:3005/users/list`;
        let url2 = `http://139.155.44.190:3005/follow/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                var followsList = [];
                for (var i = 0; i < this.state.all.fansList.length; i++) {
                    for (var j = 0; j < res.length; j++) {
                        if (res[j].name == this.state.all.fansList[i]) {
                            res[j].pic = 'http://139.155.44.190:3005' + res[j].pic;
                            res[j].head = 'http://139.155.44.190:3005/head/' + res[j].head;
                            followsList.push(res[j])
                        }
                    }
                }
                this.setState({
                    follow: followsList
                })
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        var myfollowList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].lname == this.state.username) {
                                myfollowList.push(res[i]);
                            }
                        }
                        this.setState({ myFollow: myfollowList })//我关注的用户 列表
                        var myFolList = []
                        for (var i = 0; i < this.state.follow.length; i++) {
                            for (var j = 0; j < this.state.myFollow.length; j++) {
                                if (this.state.follow[i].name == this.state.myFollow[j].nname) {//如果和我关注的人相同，显示“取消关注”
                                    this.setState({
                                        fol: true
                                    })
                                    break;
                                }
                                else {
                                    this.setState({
                                        fol: false
                                    })
                                }
                            }
                            myFolList.push(this.state.fol)
                        }
                        this.setState({
                            myFol: myFolList
                        })
                    })
            });
        var self = this;
        this.listener = DeviceEventEmitter.addListener('Fansrefresh', function (param) {
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    var followsList = [];
                    for (var i = 0; i < self.state.all.fansList.length; i++) {
                        for (var j = 0; j < res.length; j++) {
                            if (res[j].name == self.state.all.fansList[i]) {
                                res[j].pic = 'http://139.155.44.190:3005' + res[j].pic;
                                res[j].head = 'http://139.155.44.190:3005/head/' + res[j].head;
                                followsList.push(res[j])
                            }
                        }
                    }
                    self.setState({
                        follow: followsList
                    })
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            var myfollowList = [];
                            for (var i = 0; i < res.length; i++) {
                                if (res[i].lname == self.state.username) {
                                    myfollowList.push(res[i]);
                                }
                            }
                            self.setState({ myFollow: myfollowList })//我关注的用户 列表
                            var myFolList = []
                            for (var i = 0; i < self.state.follow.length; i++) {
                                for (var j = 0; j < self.state.myFollow.length; j++) {
                                    if (self.state.follow[i].name == self.state.myFollow[j].nname) {//如果和我关注的人相同，显示“取消关注”
                                        self.setState({
                                            fol: true
                                        })
                                        break;
                                    }
                                    else {
                                        self.setState({
                                            fol: false
                                        })
                                    }
                                }
                                myFolList.push(self.state.fol)
                            }
                            self.setState({
                                myFol: myFolList
                            })
                        })
                });
        })
    }
    follow = (id) => {
        if (this.state.myFol[id] == false) {
            var arr = []
            for (var i = 0; i < this.state.myFol.length; i++) {
                if (i == id) {
                    arr.push(true)
                } else {
                    arr.push(this.state.myFol[i])
                }
            }
            this.setState({
                myFol: arr
            })
            let url1 = `http://139.155.44.190:3005/follow/changeP?lname=${this.state.username}&nname=${this.state.follow[id].name}&newp=${true}`;
            let url = `http://139.155.44.190:3005/follow/add?lname=${this.state.username}&nname=${this.state.follow[id].name}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    fetch(url1)
                    .then((res) => res.json())
                    .then((res) => {
                        var param = 1;
                        DeviceEventEmitter.emit('Fansrefresh', param);
                        Alert.alert("关注成功");
                    })
                })
        }
        else {
            var arr = []
            for (var i = 0; i < this.state.myFol.length; i++) {
                if (i == id) {
                    arr.push(false)
                } else {
                    arr.push(this.state.myFol[i])
                }
            }
            this.setState({
                myFol: arr
            })
            let url = `http://139.155.44.190:3005/follow/delete?nname=${this.state.follow[id].name}`;
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    Alert.alert("已经取消关注")
                })
        }
    }
    person = (idx) => {
        var value = { name: this.state.follow[idx].name, pic: this.state.follow[idx].pic, level: this.state.follow[idx].level, college: this.state.follow[idx].college,head: this.state.follow[idx].head };
        AsyncStorage.setItem('details', JSON.stringify(value));
        Actions.person();
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        this.state.follow.map((item, idx) => (
                            <TouchableOpacity
                                onPress={this.person.bind(this, (idx))}
                                style={{ flexDirection: 'row', height: 60 * s, width: "100%", backgroundColor: "#fff", marginTop: 10 * s, alignItems: "center" }}>
                                <Image style={{ marginLeft: 20 * s, height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={{ uri: item.pic }} />
                                <Image style={{
                                    height: 60 * s,
                                    width: 60 * s,
                                    borderRadius: 30 * s,
                                    position: 'absolute',
                                    top: 0,
                                    left: 15
                                }}
                                    source={{ uri: item.head }} />
                                <Text style={{ fontSize: 16 * s, marginLeft: 20 * s }}>{item.name}</Text>
                                {
                                    item.name == this.state.username
                                        ? null
                                        : <View style={{ position: "absolute", right: 20 * s, }}>
                                            {
                                                this.state.myFol[idx]
                                                    ? <TouchableOpacity
                                                        onPress={this.follow.bind(this, (idx))}
                                                        style={{ height: 35 * s, width: 90 * s, borderWidth: 1, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                                                        <Text style={{ fontSize: 14 * s }}>取消关注</Text>
                                                    </TouchableOpacity>
                                                    : <TouchableOpacity
                                                        onPress={this.follow.bind(this, (idx))}
                                                        style={{ flexDirection: "row",  height: 35 * s, width: 90 * s, borderWidth: 1, borderRadius: 20, borderColor: "red", justifyContent: "center", alignItems: "center" }}>
                                                        <Text style={{ color: "red", fontSize: 22 * s, marginRight: 8 * s }}>+</Text>
                                                        <Text style={{ color: "red", fontSize: 16 * s }}>关注</Text>
                                                    </TouchableOpacity>
                                            }
                                        </View>
                                }
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}