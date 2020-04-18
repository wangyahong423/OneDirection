import React, { Component } from 'react'
import { Text, View, StyleSheet,AsyncStorage, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Add1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 30,
            username: '',
            content: ''
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
    changeText = (text) => {
        this.setState({ content: text })
    }
    //发布动态：
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
            let url = `http://139.155.44.190:3005/community/addCommunity?content=${this.state.content}&name=${this.state.username}&time=${time}`;
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
    }
    render() {
        return (
            <View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity activeOpacity={1} style={styles.textInputInner} onPress={() => this.TextInput.focus()} >
                        <TextInput
                            {...this.prop}
                            placeholder={'请输入文本内容'}
                            placeholderTextColor={'#666666'}
                            underlineColorAndroid={'transparent'}
                            multiline//多行设置
                            value={this.state.content}
                            ref={textInput => this.TextInput = textInput}
                            onContentSizeChange={this.cauculateHeight.bind(this)}
                            onChangeText={this.changeText}
                            style={{ height: Math.max(35, this.state.height), fontSize: 16 * s }}

                        />
                    </TouchableOpacity>
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
                            marginRight: 10 * s,
                            position: 'absolute',
                            right: 0,
                            marginTop: 20 * s
                        }}
                        onPress={this.add}
                    >
                        <Text style={{ color: '#fff', fontSize: 17 * s }}>发布</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
