import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class College extends Component {
    collegeHistory = () => {
        Actions.collegehistory()
    }
    collegeTeachers = () => {
        Actions.collegeteachers()
    }
    collegeMajor = () => {
        Actions.collegemajor()
    }
    collegeOther = () => {
        Actions.collegeother()
    }
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/fengguang31.png')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.box}>
                    <TouchableOpacity style={[{ marginTop: '30%' }, styles.block]} onPress={this.collegeHistory}>
                        <Text style={styles.word}>历史介绍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.collegeTeachers}>
                        <Text style={styles.word}>学院领导</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.collegeMajor}>
                        <Text style={styles.word}>专业介绍</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.collegeOther}>
                        <Text style={styles.word}>其他学院</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    block: {
        height: 60,
        width: '50%',
        backgroundColor: '#9ec3eb',
        marginBottom: '15%',
        borderRadius: 8,
        alignItems: 'center'
    },
    word: {
        fontSize: 20,
        lineHeight: 60,
        color: '#343466',
        fontWeight: 'bold'
    }
});