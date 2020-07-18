import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, Image ,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Study extends Component {
    zongheceping = () => {
        Actions.zongheceping()
    }
    scholarship = () => {
        Actions.scholarship()
    }
    second = () => {
        Actions.second()
    }
    agrant = () => {
        Actions.agrant()
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
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>学习</Text>
                </View>
                <ImageBackground
                    source={require('../../../assets/gonglve/study.png')}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={styles.box}>
                        <TouchableOpacity style={[{ marginTop: '15%', marginRight: '-2.5%' }, styles.block]} onPress={this.zongheceping}>
                            <Icon name='thumbs-o-up' size={60} style={{ marginTop: '30%' }} />
                            <Text style={styles.word}>综合学生测评</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ marginTop: '15%' }, styles.block]} onPress={this.scholarship}>
                            <Icon name='mortar-board' size={60} style={{ marginTop: '30%' }} />
                            <Text style={styles.word}>奖学金</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ marginRight: '-2.5%' }, styles.block]} onPress={this.second}>
                            <Icon name='key' size={60} style={{ marginTop: '30%' }} />
                            <Text style={styles.word}>第二课堂</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.block} onPress={this.agrant}>
                            <Icon name='twitter' size={60} style={{ marginTop: '30%' }} />
                            <Text style={styles.word}>助学金</Text>
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
        backgroundColor: 'rgba(255,255,255,0.4)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    block: {
        height: 240,
        borderRadius: 20,
        width: '40%',
        margin: '5%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        alignItems: 'center'
    },
    word: {
        fontSize: 23*s,
        lineHeight: 80,
        fontWeight: 'bold',
        marginTop: '5%'
    }
});