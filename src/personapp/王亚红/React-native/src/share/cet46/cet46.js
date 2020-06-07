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
                <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='2' style={styles.wrapper} showsButtons={false}>
                    <View>
                        <Image source={require('../../../assets/gonglve/four1.png')} style={{ height: 223, width: '100%' }} />
                    </View>
                    <View>
                        <Image source={require('../../../assets/gonglve/four2.png')} style={{ height: 223, width: '100%' }} />
                    </View>
                    <View>
                        <Image source={require('../../../assets/gonglve/four3.png')} style={{ height: 223, width: '100%' }} />
                    </View>
                    <View>
                        <Image source={require('../../../assets/gonglve/four4.png')} style={{ height: 223, width: '100%' }} />
                    </View>
                </Swiper>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[{ marginTop: 80 * s }, styles.whole]}
                        onPress={() => Actions.cet41()}
                    >
                        <View>
                            <Text style={{ fontSize: 20 * s, marginLeft: 100 * s }}>四级资料</Text>
                        </View>
                        {/* <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.whole}
                        onPress={() => Actions.cet61()}
                    >
                        <View>
                            <Text style={{ fontSize: 20 * s, marginLeft: 100 * s }}>六级资料</Text>
                        </View>
                        {/* <Icon name="road" style={{ marginLeft: '30%' }} size={40} color="#37376F" /> */}
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
        width: '60%',
        height: 130 * s,
        marginBottom: 20 * s,
        borderRadius: 10 * s,
        borderWidth: 2,
        borderColor: '#37376F',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});