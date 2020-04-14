import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class AddLearn extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '李四',
            length: 0
        };
    }
    getData = () => {
        AsyncStorage.getItem('user')
            .then((value) => {
                this.setState({
                    username: JSON.parse(value).username
                });
            });
    }
    con = (e) => {
        this.setState({ content: e });
        var length = e.length;
        // var length = 0;
        // for (var i = 0; i < e.length; i++) {
        //     if (32 <= e[i].charCodeAt() && e[i].charCodeAt() <= 126) {
        //         length++;
        //     }
        //     else {
        //         length = length + 2;
        //     }
        // }
        this.setState({ length: length });
        if (length > 500) {
            Alert.alert("文本内容超过上限！");
        }
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
            let url = `http://139.155.44.190:3005/learn/addLearn?content=${this.state.content}&name=${this.state.username}&time=${time}`;
            console.log(url);
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok) {
                        // Alert.alert(res.msg);
                        Actions.pop();
                    } else {
                        Alert.alert(res.msg);
                    }
                });
        }
        else {
            Alert.alert("未填写内容")
        }
        var param={"content": this.state.content, "name": this.state.username, "time":time};
        DeviceEventEmitter.emit('refresh',param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    height: 300 * s,
                    borderBottomColor: '#37376F',
                    borderBottomWidth: 1 * s
                }}
                >
                    <ScrollView>
                        <TextInput
                            placeholder="请输入文本内容，不超过500字"
                            onChangeText={this.con}
                            multiline={true}
                            autoFocus={true}
                            style={{ fontSize: 20 * s }}
                        />
                    </ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        right: 0,
                        bottom: 0
                    }}>
                        <Text style={{ fontSize: 20 * s, color: 'gray' }}>{this.state.length}</Text>
                        <Text style={{ fontSize: 20 * s }}>/500</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            width: 80 * s,
                            height: 40 * s,
                            borderRadius: 20 * s,
                            backgroundColor: '#37376F',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 5 * s,
                            position: 'absolute',
                            right: 0,
                            marginTop: 20 * s
                        }}
                        onPress={this.add}
                    >
                        <Text style={{ color: '#fff', fontSize: 17 * s }}>发布</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}
