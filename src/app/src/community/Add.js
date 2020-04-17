import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, AsyncStorage, Dimensions, SafeAreaView, TouchableOpacity, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '',
            length: 0
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
       //动态计算TextInput高度来解决TextInput文字始终垂直居中的问题
       cauculateHeight(e) {
        if (e.nativeEvent.contentSize.height > 30) {
            height = e.nativeEvent.contentSize.height;
        } else {
            height = this.state.height;
        }
        this.setState({
            height: height
        })
    }
    con = (e) => {
        this.setState({ content: e });
        var length = e.length;
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
            let url = `http://139.155.44.190:3005/community/addCommunity?content=${this.state.content}&name=${this.state.username}&time=${time}`;
            fetch(url)
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
            Alert.alert("未填写内容")
        }
        var param = { "content": this.state.content, "name": this.state.username, "time": time };
        DeviceEventEmitter.emit('refresh', param);
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ alignItems: "center" }}>
                    <ScrollView style={styles.textInputInner}>
                        <TextInput
                            placeholder="请输入文本内容，不超过500字"
                            placeholderTextColor='#666666'
                            style={{ height: Math.max(35, this.state.height), fontSize: 16 * s }}
                            onChangeText={this.con}
                            multiline={true}
                            autoFocus={true}
                            style={{ fontSize: 18 * s }}
                        />
                    </ScrollView>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        right: 10,
                        bottom: 0
                    }}>
                        <Text style={{ fontSize: 16 * s, color: 'gray' }}>{this.state.length}</Text>
                        <Text style={{ fontSize: 16 * s }}>/500</Text>
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
const styles = StyleSheet.create({
    textInputInner: {
        marginTop: 10,
        width: "98%",
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        minHeight: 200,

    },
})
