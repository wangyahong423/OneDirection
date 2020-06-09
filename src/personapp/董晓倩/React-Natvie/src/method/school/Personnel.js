import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Personnel extends Component {
    render() {
        return (
            <View style={{ width: '100%' }}>
                <TouchableOpacity onPress={() => { Actions.shiziduiwu() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', marginTop: 15 * s, paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/shiziduiwu.png')} />
                    <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 25 * s }}>师资队伍</Text>
                    </View>
                    <Icon name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.undergradute() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/benkesheng.png')} />
                    <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 25 * s }}>本科生教育</Text>
                    </View>
                    <Icon name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.gradute() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/yanjiusheng.png')} />
                    <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 25 * s }}>研究生教育</Text>
                    </View>
                    <Icon name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.continus() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/jixujiaoyu.png')} />
                    <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 25 * s }}>继续教育</Text>
                    </View>
                    <Icon name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { Actions.overseas() }} style={{ width: '100%', marginBottom: 15 * s, height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/liuxuejiaoyu.png')} />
                    <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 25 * s }}>留学生教育</Text>
                    </View>
                    <Icon name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                    <Image style={{ height: 50 * s, width: 50 * s, borderRadius: 25 * s }} source={require('../../../assets/gonglve/zhongwaihezuo.png')} />
                    <View style={{ height: 50 * s, width: width * 0.78, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 25 * s }}>中外合作办学</Text>
                    </View>
                    <Icon name='angle-right' size={18} color='#000' />
                </TouchableOpacity>
            </View>
        )
    }
}
