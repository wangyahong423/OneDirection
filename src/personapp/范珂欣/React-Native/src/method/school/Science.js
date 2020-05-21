import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Dimensions ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Science extends Component {
    render() {
        return (
            <View style={{ width: '100%' }}>
                <TouchableOpacity onPress={() => { Actions.terrace() }} style={{ width: '100%',marginBottom:15*s, height: 65 * s, backgroundColor: '#fff', marginTop: 15*s, paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s,borderRadius:25*s }} source={require('../../../assets/gonglve/terrace.jpg')} />
                    <Text style={{ marginLeft: 25 * s }}>科学研究平台</Text>
                    <Icon style={{ marginLeft: 260 * s }} name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.technology() }} style={{ width: '100%',marginBottom:15*s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s ,borderRadius:25*s}} source={require('../../../assets/gonglve/tec.jpg')} />
                    <Text style={{ marginLeft: 25 * s }}>自然科学与技术</Text>
                    <Icon style={{ marginLeft: 260 * s }} name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.human() }} style={{ width: '100%',marginBottom:15*s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s ,borderRadius:25*s}} source={require('../../../assets/gonglve/human.jpg')} />
                    <Text style={{ marginLeft: 25 * s }}>人文与社会科学</Text>
                    <Icon style={{ marginLeft: 260 * s }} name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.cooperate() }} style={{ width: '100%',marginBottom:15*s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s ,borderRadius:25*s}} source={require('../../../assets/gonglve/coo.jpg')} />
                    <Text style={{ marginLeft: 25 * s }}>合作交流</Text>
                    <Icon style={{ marginLeft: 260 * s }} name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.learning() }} style={{ width: '100%',marginBottom:15*s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s ,borderRadius:25*s}} source={require('../../../assets/gonglve/learn.jpg')} />
                    <Text style={{ marginLeft: 25 * s }}>学术期刊</Text>
                    <Icon style={{ marginLeft: 260 * s }} name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
            </View>
        )
    }
}
