import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 30,
            inputValue: ''
        }
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
    changeText(text) {
        this.setState({
            inputValue: text
        })
    }
    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity activeOpacity={1} style={styles.textInputInner} onPress={() => this.TextInput.focus()} >
                    <TextInput
                        {...this.prop}
                        placeholder={'请输入文本内容'}
                        placeholderTextColor={'#666666'}
                        underlineColorAndroid={'transparent'}
                        multiline//多行设置
                        value={this.state.inputValue}
                        ref={textInput => this.TextInput = textInput}
                        onContentSizeChange={this.cauculateHeight.bind(this)}
                        onChangeText={text => this.changeText(text)}
                        style={{ height: Math.max(35, this.state.height), fontSize: 22 * s }}
                    />
                </TouchableOpacity>
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
        minHeight: 200
    },
})
