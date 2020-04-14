import React, {Component} from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class Inputs extends Component{
    state= {
        height: 1,
    }
    onContentSizeChange(event) {
        this.setState({height: event.nativeEvent.contentSize.height});
    }
    render() {
        return (
            <TextInput {...this.props}
                       multiline={true}
                       onChange={this.onChange}
                       onContentSizeChange={this.onContentSizeChange.bind(this)}
                       style={[styles.textInputStyle,{height:Math.max(35,this.state.height)}]}
                       value={this.state.text}
            />
        );
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
});