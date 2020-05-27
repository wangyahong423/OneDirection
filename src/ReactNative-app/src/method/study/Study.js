import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default class Study extends Component {
    zongheceping = ()=>{
        Actions.zongheceping()
    }
    scholarship = ()=>{
        Actions.scholarship()
    }
    second = ()=>{
        Actions.second()
    }
    agrant = ()=>{
        Actions.agrant()
    }
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/study.png')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.box}>
                    <TouchableOpacity style={[{ marginTop: '15%', marginRight: '-2.5%' }, styles.block]} onPress={this.zongheceping}>
                        <Icon name='thumbs-o-up' size={70} style={{ marginTop: '25%' }} />
                        <Text style={styles.word}>综合学生测评</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ marginTop: '15%' }, styles.block]} onPress={this.scholarship}>
                        <Icon name='mortar-board' size={70} style={{ marginTop: '25%' }} />
                        <Text style={styles.word}>奖学金</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ marginRight: '-2.5%' }, styles.block]} onPress={this.second}>
                        <Icon name='key' size={70} style={{ marginTop: '25%' }} />
                        <Text style={styles.word}>第二课堂</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.agrant}>
                        <Icon name='twitter' size={70} style={{ marginTop: '25%' }} />
                        <Text style={styles.word}>助学金</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    block: {
        height: 240,
        borderRadius:20,
        width: '40%',
        margin: '5%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        alignItems: 'center'
    },
    word: {
        fontSize: 20,
        lineHeight: 80,
        fontWeight: 'bold',
        marginTop:'5%'
    }
});