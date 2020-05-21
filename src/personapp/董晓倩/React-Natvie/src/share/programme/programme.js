import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class programme extends Component {
    render() {
        return (
            <ScrollView>
                {/* 轮播图 */}
                <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='1.5' style={styles.wrapper} showsButtons={false}>
                    <View>
                        <Image source={require('../../../assets/gonglve/kaoyan1.jpg')} style={{ height: 223, width: '100%' }} />
                    </View>
                    <View>
                        <Image source={require('../../../assets/gonglve/kaoyan2.jpg')} style={{ height: 223, width: '100%' }} />
                    </View>
                    <View>
                        <Image source={require('../../../assets/gonglve/kaoyan5.jpg')} style={{ height: 223, width: '100%' }} />
                    </View>
                    <View>
                        <Image source={require('../../../assets/gonglve/kaoyan7.jpg')} style={{ height: 223, width: '100%' }} />
                    </View>
                </Swiper>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[{marginTop:10*s},styles.whole]}
                        onPress={() => Actions.math1()}
                    >
                        <View style={styles.left}>
                            <View style={styles.outcircle}>
                                <View style={styles.incircle}>
                                    <Text style={{ fontSize: 30 * s, color: '#37376F' }}>研</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 * s, fontStyle: 'italic', marginLeft: '15%' }}>数学一</Text>
                        </View>
                        <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.whole}
                        onPress={() => Actions.math2()}
                    >
                        <View style={styles.left}>
                            <View style={styles.outcircle}>
                                <View style={styles.incircle}>
                                    <Text style={{ fontSize: 30 * s, color: '#37376F' }}>研</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 * s, fontStyle: 'italic', marginLeft: '15%' }}>数学二</Text>
                        </View>
                        <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.whole}
                        onPress={() => Actions.english1()}
                    >
                        <View style={styles.left}>
                            <View style={styles.outcircle}>
                                <View style={styles.incircle}>
                                    <Text style={{ fontSize: 30 * s, color: '#37376F' }}>研</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 * s, fontStyle: 'italic', marginLeft: '15%' }}>英语一</Text>
                        </View>
                        <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.whole}
                        onPress={() => Actions.english2()}
                    >
                        <View style={styles.left}>
                            <View style={styles.outcircle}>
                                <View style={styles.incircle}>
                                    <Text style={{ fontSize: 30 * s, color: '#37376F' }}>研</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 * s, fontStyle: 'italic', marginLeft: '15%' }}>英语二</Text>
                        </View>
                        <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.whole}
                        onPress={() => Actions.politics()}
                    >
                        <View style={styles.left}>
                            <View style={styles.outcircle}>
                                <View style={styles.incircle}>
                                    <Text style={{ fontSize: 30 * s, color: '#37376F' }}>研</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 * s, fontStyle: 'italic', marginLeft: '15%' }}>{`政治`}&#12288;</Text>
                        </View>
                        <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    // 轮播图
    wrapper: {
        height: 220 * s
    },
    whole: {
        width: '80%',
        height: 80 * s,
        marginBottom: 20 * s,
        borderRadius: 10 * s,
        borderWidth: 2,
        borderColor: '#37376F',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    left: {
        width: '20%',
        height: 78 * s,
        borderTopLeftRadius: 10 * s,
        borderBottomLeftRadius: 10 * s,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outcircle: {
        width: 60 * s,
        height: 60 * s,
        borderRadius: 35 * s,
        backgroundColor: '#37376F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    incircle: {
        width: 50 * s,
        height: 50 * s,
        borderRadius: 25 * s,
        backgroundColor: '#e9e9ef',
        justifyContent: 'center',
        alignItems: 'center'
    }
});