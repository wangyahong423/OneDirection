import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput,ImageBackground, AsyncStorage, Dimensions, SafeAreaView, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class AddNotes extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '',
            title: '',
            show: '',
            length: 0,
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

    }
    noteCon = (e) => {
        this.setState({ content: e });
    }
    titleCon = (e) => {
        this.setState({ title: e });
    }
    add = () => {
        if (this.state.content) {
            var date = new Date();
            var year = date.getFullYear().toString();
            var month = (date.getMonth() + 1).toString();
            var day = date.getDate().toString();
            var hour = date.getHours().toString();
            var minute = date.getMinutes().toString();
            var time = year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute;
            if (this.state.title) {
                let url1 = `http://139.155.44.190:3005/notes/addNote?content=${this.state.content}&name=${this.state.username}&time=${time}&title=${this.state.title}&show=${this.state.title}`;
                fetch(url1)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.ok) {
                            Actions.pop();
                        } else {
                            Alert.alert(res.msg);
                        }
                    });
            }
            else {
                let url1 = `http://139.155.44.190:3005/notes/addNote?content=${this.state.content}&name=${this.state.username}&time=${time}&title=${this.state.title}&show=${this.state.content}`;
                fetch(url1)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res.ok) {
                            Actions.pop();
                        } else {
                            Alert.alert(res.msg);
                        }
                    });
            }
        }
        else {
            Alert.alert("不能保存空笔记")
        }
        var param = { "content": this.state.content, "name": this.state.username, "time": time, "title": this.state.title, "show": this.state.show };
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1, width: '100%', height: height }} source={require('../../../assets/share/notes.jpg')}>
                <View style={{ alignItems: "center" }}>
                    <ScrollView style={styles.textInputInner}>
                    <View style={{ flexDirection: "row" }}>
                            <Text style={{ marginLeft: 10 * s, marginTop: 10 * s }} onPress={() => Actions.pop()}>
                                <Icon name="ios-arrow-back" style={{ fontSize: 30 * s, color: "#54487D" }} />
                            </Text>
                            <Text style={{ marginLeft: 400 * s }} onPress={this.add}>
                                <Icon name="ios-checkmark" style={{ fontSize: 50 * s, color: "#54487D" }} />
                            </Text>
                        </View>
                        <TextInput
                            placeholder="标题"
                            placeholderTextColor='#666666'
                            style={{ fontSize: 20 * s }}
                            onChangeText={this.titleCon}
                        />
                        <TextInput
                            placeholder="输入笔记内容"
                            placeholderTextColor='#666666'
                            onChangeText={this.noteCon}
                            multiline={true}
                            autoFocus={true}
                            style={{ fontSize: 18 * s }}
                        />
                    </ScrollView>
                </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    textInputInner: {
        width: "100%",
        height: "100%",
        borderWidth: 1,
        borderColor: '#ccc',
    },
})
