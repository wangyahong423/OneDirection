import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Notes extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            show: [],
            search: '',
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
            });
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        let url1 = `http://139.155.44.190:3005/users/list`;
        var url2 = `http://139.155.44.190:3005/notes/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res
                });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        var notesList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                notesList.push(res[i]);
                            }
                        }
                        this.setState({list: notesList})
                        this.setState({ isLoading: false })
                    })
            })
        var self = this;
        this.listener = DeviceEventEmitter.addListener('refresh', function (param) {
            let url1 = `http://139.155.44.190:3005/users/list`;
            var url2 = `http://139.155.44.190:3005/notes/list`;
            fetch(url1)
                .then((res) => res.json())
                .then((res) => {
                    self.setState({
                        data: res
                    });
                    fetch(url2)
                        .then((res) => res.json())
                        .then((res) => {
                            var notesList = [];
                            for (var i = 0; i < res.length; i++) {
                                if (res[i].name == self.state.username) {
                                    notesList.push(res[i]);
                                }
                            }
                            self.setState({
                                list: notesList
                            })
                        })
                })
        });
    }
    componentWillUnmount() {
        this.listener.remove();
    }

    change = (e) => {
        this.setState({
            search: e
        })
    }
    details = (idx) => {
        var value = { page: this.state.list[idx] };
        AsyncStorage.setItem('lPage', JSON.stringify(value));
        Actions.notesDetails();
    }
    search = (e) => {
        let url = `http://139.155.44.190:3005/notes/select?show=${this.state.search}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.false) { }
                else {
                    res.forEach(item => {
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
                            style={{ marginLeft: 25 * s, marginRight: 20 * s }}
                            onPress={this.search}
                            style={{ fontSize: 23, marginLeft: 15 }} name='search1' />
                        <TextInput
                            style={{ fontSize: 17, height: '100%' }}
                            clearButtonMode="while-editing"
                            placeholder="搜索笔记"
                            onChangeText={this.change}
                        />
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {
                        this.state.list.map((item, idx) => (
                            <View style={{ alignItems: "center", marginBottom: 10 }}>
                                <View style={{ height: 80, width: "95%", backgroundColor: "#fff", borderRadius: 10 }}>
                                    <Text onPress={this.details.bind(this, (idx))} numberOfLines={1} style={{ marginTop: 10, marginRight: 10, marginLeft: 15, fontSize: 19 }}>{item.show}</Text>
                                    <Text onPress={this.details.bind(this, (idx))} style={{ marginTop: 5, marginLeft: 15, fontSize: 17, color: "#999999" }}>{item.time}</Text>
                                </View>
                            </View>
                        ))
                    }
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
                    onPress={() => Actions.addNotes()}
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