import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;
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
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{
              width: '100%',
              height: 63 * s,
              backgroundColor: '#37376F',
              alignItems: 'center',
              justifyContent: "center",
              flexDirection: "row"
            }}>
              <TouchableOpacity
                onPress={() => Actions.pop()}
                style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                <Image source={require('../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
              </TouchableOpacity>
              <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>学院</Text>
            </View>
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
            </SafeAreaView>
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
        fontSize: 20*s,
        lineHeight: 60,
        color: '#343466',
        fontWeight: 'bold'
    }
});