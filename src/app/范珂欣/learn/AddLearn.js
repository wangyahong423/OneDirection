import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class AddLearn extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            username: '张三'
        };
    }
    con = (e) => {
        this.setState({ content: e });
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
            this.setState({ time: time });
            let url = `http://139.155.44.190:3005/learn/addLearn?content=${this.state.content}&name=${this.state.username}&time=${time}`;
            console.log(url);
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok) {
                        Alert.alert(res.msg);
                    } else {
                        Alert.alert(res.msg);
                    }
                });
        }
        else {
            Alert.alert("未填写内容")
        }
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
                            placeholder="请输入文本内容"
                            onChangeText={this.con}
                            multiline={true}
                            autoFocus={true}
                            style={{ fontSize: 20 * s }}
                        />
                    </ScrollView>
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
                        <Text style={{ color: '#fff',fontSize:17*s }}>发布</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
