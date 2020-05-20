import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert, DrawerLayoutAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class PerExp extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            all: [],
            pic: '',
            like: [],
            personlike: [],
            collect: [],
            personcollect: [],
            search: '',
            likeNum: [],
            colNum: [],
            username: '',
            person: [],
            isLoading: true
        };
        // this.getData();
    }
    // getData = () => {
    //     AsyncStorage.getItem('username')
    //         .then((res) => {
    //             let name = { username: res }
    //             this.setState({
    //                 username: name.username
    //             })
    //         });
    //     AsyncStorage.getItem('personname1')
    //         .then((res) => {
    //             this.setState({
    //                 person: JSON.parse(res)
    //             })
    //             console.log(this.state.person.title);
    //         });

    // }
    componentDidMount() {
        this.setState({ isLoading: true });
        var url1 = `http://139.155.44.190:3005/experience/list`;
        var url2 = `http://139.155.44.190:3005/experiencelike/list`;
        let url3 = `http://139.155.44.190:3005/users/list`;
        let url4 = `http://139.155.44.190:3005/collect/list`;
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        AsyncStorage.getItem('personname1')
            .then((res) => {
                this.setState({
                    person: JSON.parse(res)
                })
                console.log(this.state.person.title);
                if (this.state.person.title == 'issue') {
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            this.setState({ likeNum: res });
                            var likeList = [];
                            for (var i = 0; i < res.length; i++) {
                                if (res[i].name == this.state.username && res[i].ename == this.state.person.name) {
                                    likeList.push(res[i]);
                                }
                            }
                            this.setState({ like: likeList });
                            fetch(url4)
                                .then((res) => res.json())
                                .then((res) => {
                                    this.setState({ colNum: res });
                                    var colList = [];
                                    for (var i = 0; i < res.length; i++) {
                                        if (res[i].name == this.state.username) {
                                            colList.push(res[i]);
                                        }
                                    }
                                    this.setState({ collect: colList });
                                    fetch(url1)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            var list = [];
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].name == this.state.person.name) {
                                                    res[i].pic = this.state.person.pic;
                                                    res[i].college = this.state.person.college;
                                                    res[i].level = this.state.person.level;
                                                    res[i].head = this.state.person.head;
                                                    res[i].like = false;
                                                    for (var j = 0; j < this.state.like.length; j++) {
                                                        if (res[i].id == this.state.like[j].eid) {
                                                            res[i].like = true;
                                                            break;
                                                        }
                                                        else {
                                                            res[i].like = false;
                                                        }
                                                    }
                                                    var likeNum = 0;
                                                    for (var z = 0; z < this.state.likeNum.length; z++) {
                                                        if (res[i].id == this.state.likeNum[z].eid) {
                                                            likeNum++;
                                                        }
                                                    }
                                                    res[i].likeNum = likeNum;
                                                    res[i].collect = false;
                                                    for (var j = 0; j < this.state.collect.length; j++) {
                                                        if (res[i].id == this.state.collect[j].eid) {
                                                            res[i].collect = true;
                                                            break;
                                                        }
                                                        else {
                                                            res[i].collect = false;
                                                        }
                                                    }
                                                    var colNum = 0;
                                                    for (var z = 0; z < this.state.colNum.length; z++) {
                                                        if (res[i].id == this.state.colNum[z].eid) {
                                                            colNum++;
                                                        }
                                                    }
                                                    res[i].colNum = colNum;
                                                    list.push(res[i]);
                                                }
                                            }

                                            this.setState({ isLoading: false });
                                            this.setState({ list: list });
                                            this.setState({ all: list });
                                        });
                                });
                        });
                    var self = this;
                    this.listener = DeviceEventEmitter.addListener('PErefresh', function (param) {
                        // var arr=self.state.list;
                        // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
                        // arr.splice(0,0,a);
                        // self.setState({list:arr});
                        fetch(url2)
                            .then((res) => res.json())
                            .then((res) => {
                                self.setState({ likeNum: res });
                                var likeList = [];
                                for (var i = 0; i < res.length; i++) {
                                    if (res[i].name == self.state.username && res[i].ename == self.state.person.name) {
                                        likeList.push(res[i]);
                                    }
                                }
                                self.setState({ like: likeList });

                                fetch(url4)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        self.setState({ colNum: res });
                                        var colList = [];
                                        for (var i = 0; i < res.length; i++) {
                                            if (res[i].name == self.state.username) {
                                                colList.push(res[i]);
                                            }
                                        }
                                        self.setState({ collect: colList });

                                        fetch(url1)
                                            .then((res) => res.json())
                                            .then((res) => {
                                                var list = [];
                                                for (var i = 0; i < res.length; i++) {
                                                    if (res[i].name == self.state.person.name) {
                                                        res[i].pic = self.state.person.pic;
                                                        res[i].college = self.state.person.college;
                                                        res[i].level = self.state.person.level;
                                                        res[i].head = this.state.person.head;
                                                        res[i].like = false;
                                                        for (var j = 0; j < self.state.like.length; j++) {
                                                            if (res[i].id == self.state.like[j].eid) {
                                                                res[i].like = true;
                                                                break;
                                                            }
                                                            else {
                                                                res[i].like = false;
                                                            }
                                                        }
                                                        var likeNum = 0;
                                                        for (var z = 0; z < self.state.likeNum.length; z++) {
                                                            if (res[i].id == self.state.likeNum[z].eid) {
                                                                likeNum++;
                                                            }
                                                        }
                                                        res[i].likeNum = likeNum;
                                                        res[i].collect = false;
                                                        for (var j = 0; j < self.state.collect.length; j++) {
                                                            if (res[i].id == self.state.collect[j].eid) {
                                                                res[i].collect = true;
                                                                break;
                                                            }
                                                            else {
                                                                res[i].collect = false;
                                                            }
                                                        }
                                                        var colNum = 0;
                                                        for (var z = 0; z < self.state.colNum.length; z++) {
                                                            if (res[i].id == self.state.colNum[z].eid) {
                                                                colNum++;
                                                            }
                                                        }
                                                        res[i].colNum = colNum;
                                                        list.push(res[i]);
                                                    }
                                                }

                                                self.setState({ isLoading: false });
                                                self.setState({ list: list });
                                                self.setState({ all: list });
                                            });
                                    });
                            });
                    });
                } else if (this.state.person.title == 'like') {
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
                                    var personlike = [];
                                    for (var i = 0; i < res.length; i++) {
                                        if (res[i].name == this.state.person.name) {
                                            personlike.push(res[i]);
                                        }
                                    }
                                    this.setState({ personlike: personlike });
                                    fetch(url4)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            this.setState({ colNum: res });
                                            var colList = [];
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].name == this.state.username) {
                                                    colList.push(res[i]);
                                                }
                                            }
                                            this.setState({ collect: colList });
                                            fetch(url1)
                                                .then((res) => res.json())
                                                .then((res) => {
                                                    var list = [];
                                                    for (var b = 0; b < this.state.personlike.length; b++) {
                                                        for (var a = 0; a < res.length; a++) {
                                                            if (this.state.personlike[b].eid == res[a].id) {
                                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                                    if (res[a].name == this.state.pic[i].name) {
                                                                        res[a].pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                                        res[a].head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                                        res[a].college = this.state.pic[i].college;
                                                                        res[a].level = this.state.pic[i].level;
                                                                        break;
                                                                    }
                                                                }
                                                                res[a].like = false;
                                                                for (var j = 0; j < this.state.like.length; j++) {
                                                                    if (res[a].id == this.state.like[j].eid) {
                                                                        res[a].like = true;
                                                                        break;
                                                                    }
                                                                    else {
                                                                        res[a].like = false;
                                                                    }
                                                                }
                                                                var likeNum = 0;
                                                                for (var z = 0; z < this.state.likeNum.length; z++) {
                                                                    if (res[a].id == this.state.likeNum[z].eid) {
                                                                        likeNum++;
                                                                    }
                                                                }
                                                                res[a].likeNum = likeNum;
                                                                res[a].collect = false;
                                                                for (var j = 0; j < this.state.collect.length; j++) {
                                                                    if (res[a].id == this.state.collect[j].eid) {
                                                                        res[a].collect = true;
                                                                        break;
                                                                    }
                                                                    else {
                                                                        res[a].collect = false;
                                                                    }
                                                                }
                                                                var colNum = 0;
                                                                for (var z = 0; z < this.state.colNum.length; z++) {
                                                                    if (res[a].id == this.state.colNum[z].eid) {
                                                                        colNum++;
                                                                    }
                                                                }
                                                                res[a].colNum = colNum;
                                                                list.push(res[a]);
                                                                // console.log(res[a]);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    this.setState({ isLoading: false });
                                                    this.setState({ list: list });
                                                    this.setState({ all: list });
                                                    // console.log(list);
                                                });
                                        });
                                });
                        });
                    var self = this;
                    this.listener = DeviceEventEmitter.addListener('PErefresh', function (param) {
                        // var arr=self.state.list;
                        // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
                        // arr.splice(0,0,a);
                        // self.setState({list:arr});
                        fetch(url3)
                            .then((res) => res.json())
                            .then((res) => {
                                self.setState({ pic: res });
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
                                        var personlike = [];
                                        for (var i = 0; i < res.length; i++) {
                                            if (res[i].name == self.state.person.name) {
                                                personlike.push(res[i]);
                                            }
                                        }
                                        self.setState({ personlike: personlike });
                                        fetch(url4)
                                            .then((res) => res.json())
                                            .then((res) => {
                                                self.setState({ colNum: res });
                                                var colList = [];
                                                for (var i = 0; i < res.length; i++) {
                                                    if (res[i].name == self.state.username) {
                                                        colList.push(res[i]);
                                                    }
                                                }
                                                self.setState({ collect: colList });
                                                fetch(url1)
                                                    .then((res) => res.json())
                                                    .then((res) => {
                                                        var list = [];
                                                        for (var b = 0; b < self.state.personlike.length; b++) {
                                                            for (var a = 0; a < res.length; a++) {
                                                                if (self.state.personlike[b].eid == res[a].id) {
                                                                    for (var i = 0; i < self.state.pic.length; i++) {
                                                                        if (res[a].name == self.state.pic[i].name) {
                                                                            res[a].pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
                                                                            res[a].head = 'http://139.155.44.190:3005/head/' + self.state.pic[i].head;
                                                                            res[a].college = self.state.pic[i].college;
                                                                            res[a].level = self.state.pic[i].level;
                                                                            break;
                                                                        }
                                                                    }
                                                                    res[a].like = false;
                                                                    for (var j = 0; j < self.state.like.length; j++) {
                                                                        if (res[a].id == self.state.like[j].eid) {
                                                                            res[a].like = true;
                                                                            break;
                                                                        }
                                                                        else {
                                                                            res[a].like = false;
                                                                        }
                                                                    }
                                                                    var likeNum = 0;
                                                                    for (var z = 0; z < self.state.likeNum.length; z++) {
                                                                        if (res[a].id == self.state.likeNum[z].eid) {
                                                                            likeNum++;
                                                                        }
                                                                    }
                                                                    res[a].likeNum = likeNum;
                                                                    res[a].collect = false;
                                                                    for (var j = 0; j < self.state.collect.length; j++) {
                                                                        if (res[a].id == self.state.collect[j].eid) {
                                                                            res[a].collect = true;
                                                                            break;
                                                                        }
                                                                        else {
                                                                            res[a].collect = false;
                                                                        }
                                                                    }
                                                                    var colNum = 0;
                                                                    for (var z = 0; z < self.state.colNum.length; z++) {
                                                                        if (res[a].id == self.state.colNum[z].eid) {
                                                                            colNum++;
                                                                        }
                                                                    }
                                                                    res[a].colNum = colNum;
                                                                    list.push(res[a]);
                                                                    // console.log(res[a]);
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        self.setState({ isLoading: false });
                                                        self.setState({ list: list });
                                                        self.setState({ all: list });
                                                        // console.log(list);
                                                    });
                                            });
                                    });
                            });
                    });
                } else if (this.state.person.title == 'collect') {
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
                                    fetch(url4)
                                        .then((res) => res.json())
                                        .then((res) => {
                                            this.setState({ colNum: res });
                                            var colList = [];
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].name == this.state.username) {
                                                    colList.push(res[i]);
                                                }
                                            }
                                            this.setState({ collect: colList });
                                            var personcollect = [];
                                            for (var i = 0; i < res.length; i++) {
                                                if (res[i].name == this.state.person.name) {
                                                    personcollect.push(res[i]);
                                                }
                                            }
                                            this.setState({ personcollect: personcollect });
                                            console.log(this.state.personcollect);
                                            fetch(url1)
                                                .then((res) => res.json())
                                                .then((res) => {
                                                    var list = [];
                                                    for (var b = 0; b < this.state.personcollect.length; b++) {
                                                        for (var a = 0; a < res.length; a++) {
                                                            if (this.state.personcollect[b].eid == res[a].id) {
                                                                for (var i = 0; i < this.state.pic.length; i++) {
                                                                    if (res[a].name == this.state.pic[i].name) {
                                                                        res[a].pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                                                        res[a].college = this.state.pic[i].college;
                                                                        res[a].head = 'http://139.155.44.190:3005/head/' + this.state.pic[i].head;
                                                                        res[a].level = this.state.pic[i].level;
                                                                        break;
                                                                    }
                                                                }
                                                                res[a].like = false;
                                                                for (var j = 0; j < this.state.like.length; j++) {
                                                                    if (res[a].id == this.state.like[j].eid) {
                                                                        res[a].like = true;
                                                                        break;
                                                                    }
                                                                    else {
                                                                        res[a].like = false;
                                                                    }
                                                                }
                                                                var likeNum = 0;
                                                                for (var z = 0; z < this.state.likeNum.length; z++) {
                                                                    if (res[a].id == this.state.likeNum[z].eid) {
                                                                        likeNum++;
                                                                    }
                                                                }
                                                                res[a].likeNum = likeNum;
                                                                res[a].collect = false;
                                                                for (var j = 0; j < this.state.collect.length; j++) {
                                                                    if (res[a].id == this.state.collect[j].eid) {
                                                                        res[a].collect = true;
                                                                        break;
                                                                    }
                                                                    else {
                                                                        res[a].collect = false;
                                                                    }
                                                                }
                                                                var colNum = 0;
                                                                for (var z = 0; z < this.state.colNum.length; z++) {
                                                                    if (res[a].id == this.state.colNum[z].eid) {
                                                                        colNum++;
                                                                    }
                                                                }
                                                                res[a].colNum = colNum;
                                                                list.push(res[a]);
                                                                // console.log(res[a]);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    this.setState({ isLoading: false });
                                                    this.setState({ list: list });
                                                    this.setState({ all: list });
                                                    // console.log(list);
                                                });
                                        });
                                });
                        });
                    var self = this;
                    this.listener = DeviceEventEmitter.addListener('PErefresh', function (param) {
                        // var arr=self.state.list;
                        // var a = {"content": param.content, "like": false, "likeNum": 0, "name": param.name, "pic": "http://139.155.44.190:3005/images/6.jpg", "time": param.time};
                        // arr.splice(0,0,a);
                        // self.setState({list:arr});
                        fetch(url3)
                            .then((res) => res.json())
                            .then((res) => {
                                self.setState({ pic: res });
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
                                                self.setState({ colNum: res });
                                                var colList = [];
                                                for (var i = 0; i < res.length; i++) {
                                                    if (res[i].name == self.state.username) {
                                                        colList.push(res[i]);
                                                    }
                                                }
                                                self.setState({ collect: colList });
                                                var personcollect = [];
                                                for (var i = 0; i < res.length; i++) {
                                                    if (res[i].name == self.state.person.name) {
                                                        personcollect.push(res[i]);
                                                    }
                                                }
                                                self.setState({ personcollect: personcollect });
                                                console.log(self.state.personcollect);
                                                fetch(url1)
                                                    .then((res) => res.json())
                                                    .then((res) => {
                                                        var list = [];
                                                        for (var b = 0; b < self.state.personcollect.length; b++) {
                                                            for (var a = 0; a < res.length; a++) {
                                                                if (self.state.personcollect[b].eid == res[a].id) {
                                                                    for (var i = 0; i < self.state.pic.length; i++) {
                                                                        if (res[a].name == self.state.pic[i].name) {
                                                                            res[a].pic = 'http://139.155.44.190:3005' + self.state.pic[i].pic;
                                                                            res[a].college = self.state.pic[i].college;
                                                                            res[a].head = 'http://139.155.44.190:3005/head/' + self.state.pic[i].head;
                                                                            res[a].level = self.state.pic[i].level;
                                                                            break;
                                                                        }
                                                                    }
                                                                    res[a].like = false;
                                                                    for (var j = 0; j < self.state.like.length; j++) {
                                                                        if (res[a].id == self.state.like[j].eid) {
                                                                            res[a].like = true;
                                                                            break;
                                                                        }
                                                                        else {
                                                                            res[a].like = false;
                                                                        }
                                                                    }
                                                                    var likeNum = 0;
                                                                    for (var z = 0; z < self.state.likeNum.length; z++) {
                                                                        if (res[a].id == self.state.likeNum[z].eid) {
                                                                            likeNum++;
                                                                        }
                                                                    }
                                                                    res[a].likeNum = likeNum;
                                                                    res[a].collect = false;
                                                                    for (var j = 0; j < self.state.collect.length; j++) {
                                                                        if (res[a].id == self.state.collect[j].eid) {
                                                                            res[a].collect = true;
                                                                            break;
                                                                        }
                                                                        else {
                                                                            res[a].collect = false;
                                                                        }
                                                                    }
                                                                    var colNum = 0;
                                                                    for (var z = 0; z < self.state.colNum.length; z++) {
                                                                        if (res[a].id == self.state.colNum[z].eid) {
                                                                            colNum++;
                                                                        }
                                                                    }
                                                                    res[a].colNum = colNum;
                                                                    list.push(res[a]);
                                                                    // console.log(res[a]);
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        self.setState({ isLoading: false });
                                                        self.setState({ list: list });
                                                        self.setState({ all: list });
                                                        // console.log(list);
                                                    });
                                            });
                                    });
                            });
                    });
                }
            });


        // var self1 = this;
        // this.listener1 = DeviceEventEmitter.addListener('com', function (num){
        //     console.log(num);
        // })

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
        let url = `http://139.155.44.190:3005/experience/delete?id=${id}`;
        let url1 = `http://139.155.44.190:3005/experiencelike/deleteAll?eid=${id}`;
        let url2 = `http://139.155.44.190:3005/collect/deleteAll?eid=${id}`;
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
                                DeviceEventEmitter.emit('PErefresh', param);
                            });
                    });
            });
    }
    opntion2 = () => {

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
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.list[idx].id}&name=${this.state.username}&ename=${this.state.list[idx].name}`;
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
            let url2 = `http://139.155.44.190:3005/experiencelike/delete?eid=${this.state.list[idx].id}&name=${this.state.username}`
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url2);
                });
        }
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
    collect = (idx) => {
        var crr = '';
        if (this.state.list[idx].collect == false) {
            crr = this.state.list;
            crr[idx].collect = true;
            crr[idx].colNum++;
            this.setState({
                list: crr
            })
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url1);
                });
        }
        else if (this.state.list[idx].collect == true) {
            crr = this.state.list;
            crr[idx].collect = false;
            crr[idx].colNum--;
            this.setState({
                list: crr
            })
            let url2 = `http://139.155.44.190:3005/collect/deleteCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            fetch(url2)
                .then((res) => res.json())
                .then((res) => {
                    console.log(url2);
                });
        }
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
    change = (e) => {
        this.setState({
            search: e
        })
    }
    search = () => {
        let url = `http://139.155.44.190:3005/experience/select?content=${this.state.search}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.false) { }
                else {
                    var list = [];
                    for (var i = 0; i < res.length; i++) {
                        for (var j = 0; j < this.state.all.length; j++) {
                            if (res[i].id == this.state.all[j].id) {
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
    classify = (data) => {
        if (data == '全部') {
            this.setState({ list: this.state.all });
        }
        else {
            var arr = [];
            for (var i = 0; i < this.state.all.length; i++) {
                if (this.state.all[i].college == data) {
                    arr.push(this.state.all[i]);
                }
            }
            this.setState({ list: arr });
        }
    }
    // cla = () => {
    //     this.refs['list'].style.display='flex';
    //     console.log(1);
    // }
    onPenLeftDrawer() {
        this.drawer.openDrawer();
    }

    closeLeftDrawer() {
        this.drawer.closeDrawer();
    }
    render() {
        var navigationView = (
            <View style={{ backgroundColor: '#fff', marginBottom: 10 * s }}>
                <FlatList
                    data={[
                        { key: '全部' },
                        { key: '马克思主义学院' },
                        { key: '历史文化学院' },
                        { key: '美术与设计学院' },
                        { key: '商学院' },
                        { key: '法政与公共管理学院' },
                        { key: '化学与材料科学学院' },
                        { key: '体育学院' },
                        { key: '国际文化交流学院' },
                        { key: '初等教育系' },
                        { key: '软件学院' },
                        { key: '教育学院' },
                        { key: '外国语学院' },
                        { key: '新闻传播学院' },
                        { key: '数学与信息科学学院（田家炳教育书院）' },
                        { key: '生命科学学院' },
                        { key: '计算机与网络空间安全学院、计算机教学部' },
                        { key: '教师教育学院' },
                        { key: '大学外语教学部' },
                        { key: '汇华学院' },
                        { key: '文学院' },
                        { key: '音乐学院' },
                        { key: '物理学院' },
                        { key: '资源与环境科学学院' },
                        { key: '职业技术学院、中燃工学院' },
                        { key: '学前教育学院（旅游系）' },
                        { key: '公共体育教学部' }
                    ]}
                    horizontal={false}
                    numColumns={1}
                    // columnWrapperStyle={styles.columnStyle}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ backgroundColor: '#eee', margin: 5 * s, height: 20 * s }} onPress={this.classify.bind(this, (item.key))}>
                            <Text style={{
                                // color: 'white',
                                backgroundColor: 'blur'
                            }}>{item.key}</Text>
                        </TouchableOpacity>
                    }
                />
            </View >
        );
        return (
            <SafeAreaView style={{ flex: 1 }} >
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
                <DrawerLayoutAndroid
                    ref={(drawer) => {
                        this.drawer = drawer;
                    }}
                    drawerWidth={350 * s}
                    drawerPosition={'left'}
                    renderNavigationView={() => navigationView}>
                    <View style={{ width: 50 * s, height: 25 * s, borderRadius: 10 * s, backgroundColor: '#37376F', alignItems: 'center', justifyContent: 'center', marginLeft: 10 * s }}>
                        <TouchableOpacity
                            // underlayColor="rgb(210, 230, 255)"
                            activeOpacity={0.5}
                            // style={styles.touchable}
                            onPress={() => this.onPenLeftDrawer()}
                            style={{}}
                        //onPress={this.onPenLeftDrawer.bind(this)}
                        >
                            <Text style={{ fontSize: 16, color: '#fff' }}>分类</Text>
                        </TouchableOpacity>
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
                                            <Image style={{
                                                height: 70 * s,
                                                width: 70 * s,
                                                borderRadius: 35 * s,
                                                // backgroundColor:'green',
                                                position: 'absolute',
                                                top: 5,
                                                left: 10
                                            }}
                                                source={{ uri: item.head }} />
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
                                            <Text style={{ fontSize: 18 * s }}>{item.content}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', height: 40 * s, alignItems: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                                <Icon name="star" onPress={this.collect.bind(this, (idx))} style={item.collect ? { color: 'yellow', fontSize: 30 * s } : { fontSize: 30 * s }}></Icon>
                                                <Text>{item.colNum}</Text>
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
                                    top: 100 * s,
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
                    <View style={{
                        width: '100%',
                        marginTop: 10 * s,
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
                    </View>
                </DrawerLayoutAndroid>
            </SafeAreaView >

        )
    }
}
