import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class PerLearn extends Component {
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
            all:[],
            username: '',
            isLoading: true,
            person: ''
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
        AsyncStorage.getItem('personname2')
            .then((res) => {
                this.setState({
                    person: JSON.parse(res)
                })
            });
        console.log(this.state.person)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        var url1 = `http://139.155.44.190:3005/learn/list`;
        var url2 = `http://139.155.44.190:3005/learnlike/list`;
        let url4 = `http://139.155.44.190:3005/learntalk/list`;
        fetch(url2)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ likeNum: res });
                var likeList = [];
                for (var i = 0; i < res.length; i++) {
                    if (res[i].name == this.state.username && res[i].lname == this.state.person.name) {
                        likeList.push(res[i]);
                    }
                }
                this.setState({ like: likeList });
                fetch(url4)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ comNum: res });
                        fetch(url1)
                            .then((res) => res.json())
                            .then((res) => {
                                var list = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == this.state.person.name) {
                                        res[i].pic = this.state.person.pic;
                                        res[i].college = this.state.person.college;
                                        res[i].level = this.state.person.level;
                                        res[i].like = false;
                                        for (var j = 0; j < this.state.like.length; j++) {
                                            if (res[i].id == this.state.like[j].lid) {
                                                res[i].like = true;
                                                break;
                                            }
                                            else {
                                                res[i].like = false;
                                            }
                                        }
                                        var likeNum = 0;
                                        for (var z = 0; z < this.state.likeNum.length; z++) {
                                            if (res[i].id == this.state.likeNum[z].lid) {
                                                likeNum++;
                                            }
                                        }
                                        res[i].likeNum = likeNum;
                                        var comNum = 0;
                                        for (var z = 0; z < this.state.comNum.length; z++) {
                                            if (res[i].id == this.state.comNum[z].lid) {
                                                comNum++;
                                            }
                                        }
                                        res[i].comNum = comNum;
                                        list.push(res[i]);
                                    }
                                }
                                this.setState({ isLoading: false });
                                this.setState({ list: list });
                                this.setState({ all: list });
                                console.log(this.state.list);
                            });
                    });
            });

        var self = this;
        this.listener = DeviceEventEmitter.addListener('ELrefresh', function (param) {
            // var arr=self.state.list;
            // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
            // arr.splice(0,0,a);
            // self.setState({list:arr});
            // console.log(param);
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    self.setState({ likeNum: res });
                    var likeList = [];
                    for (var i = 0; i < res.length; i++) {
                        if (res[i].name == self.state.username && res[i].lname == self.state.person.name) {
                            likeList.push(res[i]);
                        }
                    }
                    self.setState({ like: likeList });
                    fetch(url4)
                        .then((res) => res.json())
                        .then((res) => {
                            self.setState({ comNum: res });
                            fetch(url1)
                                .then((res) => res.json())
                                .then((res) => {
                                    var list = [];
                                    for (var i = 0; i < res.length; i++) {
                                        if (res[i].name == self.state.person.name) {
                                            res[i].pic = self.state.person.pic;
                                            res[i].college = self.state.person.college;
                                            res[i].level = self.state.person.level;
                                            res[i].like = false;
                                            for (var j = 0; j < self.state.like.length; j++) {
                                                if (res[i].id == self.state.like[j].lid) {
                                                    res[i].like = true;
                                                    break;
                                                }
                                                else {
                                                    res[i].like = false;
                                                }
                                            }
                                            var likeNum = 0;
                                            for (var z = 0; z < self.state.likeNum.length; z++) {
                                                if (res[i].id == self.state.likeNum[z].lid) {
                                                    likeNum++;
                                                }
                                            }
                                            res[i].likeNum = likeNum;
                                            var comNum = 0;
                                            for (var z = 0; z < self.state.comNum.length; z++) {
                                                if (item.id == self.state.comNum[z].lid) {
                                                    comNum++;
                                                }
                                            }
                                            res[i].comNum = comNum;
                                            list.push(res[i]);
                                        }
                                    }
                                    self.setState({ isLoading: false });
                                    self.setState({ list: list });
                                    self.setState({ all: list });
                                });
                        });
                });
            // var self1 = this;
            // this.listener1 = DeviceEventEmitter.addListener('com', function (num){
            //     console.log(num);
            // })
        });
    }
    componentWillUnmount() {
        this.listener.remove();
        // this.listener1.remove();
    }
    delete = (idx) => {
        Alert.alert('确认要删除吗', '',
            [
                { text: "确认", onPress: this.opntion1.bind(this, (this.state.list[idx].id)) },
                { text: "取消", onPress: this.opntion2 }
            ]
        );
    }
    opntion1 = (id) => {
        let url = `http://139.155.44.190:3005/learn/deleteLearn?id=${id}`;
        let url1 = `http://139.155.44.190:3005/learntalk/deleteAll?lid=${id}`;
        let url2 = `http://139.155.44.190:3005/learnlike/deleteAll?lid=${id}`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        fetch(url)
                            .then((res) => res.json())
                            .then((res) => {
                                Alert.alert(res.msg);
                                var param = 1;
                                DeviceEventEmitter.emit('ELrefresh', param);
                            });
                    });
            });
    }
    opntion2 = () => {

    }
    details = (idx) => {
        var value = { page: this.state.list[idx] };
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
            let url1 = `http://139.155.44.190:3005/learnlike/add?lid=${this.state.list[idx].id}&name=${this.state.username}&lname=${this.state.list[idx].name}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url1);
                });
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
                            if (this.state.lvnum == 15) {
                                Alert.alert("恭喜你提升为二级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 30) {
                                Alert.alert("恭喜你提升为三级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 45) {
                                Alert.alert("恭喜你提升为四级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 60) {
                                Alert.alert("恭喜你提升为五级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 75) {
                                Alert.alert("恭喜你提升为六级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 90) {
                                Alert.alert("恭喜你提升为七级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 105) {
                                Alert.alert("恭喜你提升为八级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 120) {
                                Alert.alert("恭喜你提升为九级用户，快去解锁新的头像吧！")
                            }
                            else if (this.state.lvnum == 135) {
                                Alert.alert("恭喜你提升为十级用户，快去解锁新的头像吧！")
                            }
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
    search = () => {
        let url = `http://139.155.44.190:3005/learn/select?content=${this.state.search}`;
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            if (res.false) { }
            else {
                var list=[];
                for(var i = 0;i<res.length;i++){
                    for(var j =0 ;j<this.state.all.length;j++){
                        if(res[i].id==this.state.all[j].id){
                            list.push(this.state.all[j]);
                            break;
                        }
                    }
                }
                this.setState({ list: list });
            }
        });
        
    }
    back = () => {
        Actions.pop();
        var param = 1;
        DeviceEventEmitter.emit('Prefresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    width: '100%',
                    height: 55 * s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 40 * s,
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        // borderRadius: 28 * s
                        borderBottomLeftRadius: 28 * s,
                        borderTopLeftRadius: 28 * s,
                        marginLeft: -55 * s,
                    }}>

                        <TextInput
                            style={{
                                height: 50 * s,
                                width: "80%",
                                padding: 0,
                                marginLeft: 20 * s,
                                fontSize: 15 * s,
                            }}
                            clearButtonMode="while-editing"
                            placeholderTextColor=''
                            placeholder="请输入搜索的关键字"
                            onChangeText={this.change}
                        />
                        <Button style={{ borderBottomRightRadius: 28 * s, borderTopRightRadius: 28 * s, height: 42 * s, }} onPress={this.search}>
                            搜索
                        </Button>
                    </View>
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 10 * s }}>
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
                                        }}
                                            source={{ uri: item.pic }} />
                                        <View style={{ marginLeft: 30 * s }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                                <Text style={{ fontSize: 15 * s, marginLeft: 10 * s, color: 'red' }}>Lv.{item.level}</Text>
                                            </View>
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
                                        <Text onPress={this.details.bind(this, (idx))} style={{ fontSize: 18 * s }}>{item.content.length > 20 ? item.content.slice(0, 20) + '...' : item.content}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', height: 40 * s, alignItems: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon onPress={this.details.bind(this, (idx))} name="comment" style={{ fontSize: 30 * s }}></Icon>
                                            <Text>{item.comNum}</Text>
                                        </View>
                                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                            <Icon name="heart" onPress={this.like.bind(this, (idx))} style={item.like ? { color: 'red', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                            <Text>{item.likeNum}</Text>
                                        </View>
                                    </View>
                                    {
                                        this.state.username == item.name
                                            ? <TouchableOpacity style={{
                                                width: 30 * s,
                                                height: 30 * s,
                                                borderRadius: 15 * s,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                // backgroundColor: '#37376F',
                                                position: 'absolute',
                                                top: 5,
                                                right: 5
                                            }}
                                                onPress={this.delete.bind(this, (idx))}
                                            >
                                                <Text style={{ color: '#e8e8e8', fontSize: 30 * s }}>×</Text>
                                            </TouchableOpacity>
                                            : null
                                    }
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
                                <Text style={{ fontSize: 20, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
                < View style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 40 * s,
                        borderRadius: 15 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                        marginBottom: 10 * s
                    }}
                        onPress={() => this.back()}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 * s }}>返回</Text>
                    </TouchableOpacity>
                </View >
            </SafeAreaView >
        )
    }
}