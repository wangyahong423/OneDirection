import React, { Component } from 'react'
import { Text, View, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
const { width ,height} = Dimensions.get('window');
const s = width / 460;

export default class Science extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 60 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>科学研究</Text>
                </View>
                <View style={{ width: '100%' }}>
                    <TouchableOpacity onPress={() => { Actions.terrace() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                        <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/terrace.png')} />
                        <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                            <Text style={{ marginLeft: 25 * s ,fontSize:16*s }}>科学研究平台</Text>
                        </View>
                        <Icon name='chevron-small-right' size={25*s} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.technology() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                        <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/tec.png')} />
                        <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                            <Text style={{ marginLeft: 25 * s ,fontSize:16*s }}>自然科学与技术</Text>
                        </View>
                        <Icon name='chevron-small-right' size={25*s} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.human() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                        <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/human.png')} />
                        <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                            <Text style={{ marginLeft: 25 * s ,fontSize:16*s }}>人文与社会科学</Text>
                        </View>
                        <Icon name='chevron-small-right' size={25*s} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.cooperate() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                        <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/coo.png')} />
                        <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                            <Text style={{ marginLeft: 25 * s ,fontSize:16*s }}>合作交流</Text>
                        </View>
                        <Icon name='chevron-small-right' size={25*s} color='#000' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { Actions.learning() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                        <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/learn.png')} />
                        <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                            <Text style={{ marginLeft: 25 * s ,fontSize:16*s }}>学术期刊</Text>
                        </View>
                        <Icon name='chevron-small-right' size={25*s} color='#000' />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}
