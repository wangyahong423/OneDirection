import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

import { Inputs } from '../community/Inputs';

export default class Add extends Component {
    state = {
        height: 10,
    }
    onContentSizeChange(event) {
        this.setState({ height: event.nativeEvent.contentSize.height });
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput {...this.props}
                    multiline={true}
                    onChange={this.onChange}
                    onContentSizeChange={this.onContentSizeChange.bind(this)}
                    style={[styles.textInputStyle, { height: Math.max(35, this.state.height) }]}
                    value={this.state.text}
                    style={styles.textInputStyle}
                    onChangeText={this._onChangeText}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        height: "12%",
        width: "90%",
        backgroundColor: '#fff',
        marginTop:10,
    },
    container: {
        color: '#fff',
    },
    textInputStyle: {
        backgroundColor: '#fff',
    },
    textInputStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        marginTop:10
    },
})
