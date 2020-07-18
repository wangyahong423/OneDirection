import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Dimensions,
    SafeAreaView,
    TouchableOpacity,
    Image,
    AsyncStorage,
    DeviceEventEmitter,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import Img from './Img'
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class SearchExp extends Component {
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
    }
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
                                                        res[i].head = self.state.person.head;
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
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    this.setState({ isLoading: false });
                                                    this.setState({ list: list });
                                                    this.setState({ all: list });
                                                });
                                        });
                                });
                        });
                    var self = this;
                    this.listener = DeviceEventEmitter.addListener('PErefresh', function (param) {
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
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        self.setState({ isLoading: false });
                                                        self.setState({ list: list });
                                                        self.setState({ all: list });
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
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    this.setState({ isLoading: false });
                                                    this.setState({ list: list });
                                                    this.setState({ all: list });
                                                });
                                        });
                                });
                        });
                    var self = this;
                    this.listener = DeviceEventEmitter.addListener('PErefresh', function (param) {
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
                                                                    break;
                                                                }
                                                            }
                                                        }
                                                        self.setState({ isLoading: false });
                                                        self.setState({ list: list });
                                                        self.setState({ all: list });
                                                    });
                                            });
                                    });
                            });
                    });
                }
            });
    }
    componentWillUnmount() {
        if (this.listener) {
            this.listener.remove();
        }

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
            var num = this.state.list[idx].likenum;
            if (num == null || num == 0) {
                num = 1;
            } else {
                num = num + 1;
            }
            let url1 = `http://139.155.44.190:3005/experiencelike/add?eid=${this.state.list[idx].id}&name=${this.state.username}&ename=${this.state.list[idx].name}`;
            let url11 = `http://139.155.44.190:3005/experience/changeLike?eid=${this.state.list[idx].id}&likenum=${num}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    fetch(url11)
                        .then((res) => res.json())
                        .then((res) => {
                            var param = 1;
                            DeviceEventEmitter.emit('Mrefresh', param);
                        });
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
            var num = this.state.list[idx].cenum;
            if (num == null || num == 0) {
                num = 1;
            } else {
                num = num + 1;
            }
            let url1 = `http://139.155.44.190:3005/collect/addCollect?eid=${this.state.list[idx].id}&name=${this.state.username}`;
            let url11 = `http://139.155.44.190:3005/experience/change?eid=${this.state.list[idx].id}&cnum=${num}`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    fetch(url11)
                        .then((res) => res.json())
                        .then((res) => {
                            var param = 1;
                            DeviceEventEmitter.emit('Mrefresh', param);
                        });
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
    onPenLeftDrawer() {
        this.drawer.openDrawer();
    }

    closeLeftDrawer() {
        this.drawer.closeDrawer();
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{
                    width: '100%',
                    height: 100 * s,
                    flexDirection: 'row',
                }}>
                    <View style={{
                        height: 90 * s,
                        width: width,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        flexDirection: "row",
                        paddingTop: 45 * s
                    }}>
                        <View style={{
                            height: 40 * s,
                            width: '75%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#E3E3E3',
                            borderRadius: 28 * s,
                        }}>
                            <TextInput
                                style={{
                                    height: 50 * s,
                                    width: "80%",
                                    padding: 0,
                                    marginLeft: 20 * s,
                                    fontSize: 18 * s,
                                }}
                                clearButtonMode="while-editing"
                                placeholderTextColor='#A6A6A6'
                                placeholder="搜索"
                                onChangeText={this.change}
                            />
                            <Icon style={{ fontSize: 28 * s, marginLeft: 10 * s }} name="search" onPress={() => this.search()} />
                        </View>
                        <TouchableOpacity style={{ marginLeft: 20 * s, color: "#696969", marginTop: 5 * s }} onPress={() => this.back()}>
                            <Text style={{ fontSize: 20 * s, color: "#696969" }}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
                                        height: 54 * s,
                                        width: 54 * s,
                                        borderRadius: 27 * s,
                                    }} source={{ uri: item.pic }} />
                                    <Image style={{
                                        height: 62 * s,
                                        width: 62 * s,
                                        borderRadius: 31 * s,
                                        position: 'absolute',
                                        top: 9 * s,
                                        left: 16 * s
                                    }}
                                        source={{ uri: item.head }} />
                                    <View style={{ marginLeft: 30 * s }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                            <Image style={{ height: 20 * s, width: 35 * s, marginLeft: 10 * s }} source={Img['png' + item.level]} />

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
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: height * 0.4,
                                width: '100%'
                            }}>
                            <View style={{
                                alignItems: 'center',
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 23 * s, marginTop: 10 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
            </SafeAreaView >
        )
    }
}
