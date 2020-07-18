import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, ImageBackground, Image, TouchableOpacity, AsyncStorage, Alert, DeviceEventEmitter, SafeAreaView,  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class programme extends Component {
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
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>考研资料</Text>
                </View>
                <ScrollView>
                    {/* 轮播图 */}
                    <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='2' style={styles.wrapper} showsButtons={false}>
                        <View>
                            <Image source={require('../../../assets/gonglve/four1.png')} style={{ height: height * 0.3, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../../assets/gonglve/four2.png')} style={{ height: height * 0.3, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../../assets/gonglve/four3.png')} style={{ height: height * 0.3, width: '100%' }} />
                        </View>
                        <View>
                            <Image source={require('../../../assets/gonglve/four4.png')} style={{ height: height * 0.3, width: '100%' }} />
                        </View>
                    </Swiper>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={[{ marginTop: 80 * s }, styles.whole]}
                            onPress={() => Actions.cet41()}
                        >
                            <View>
                                <Text style={{ fontSize: 22 * s, }}>四级资料</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.whole}
                            onPress={() => Actions.cet61()}
                        >
                            <View>
                                <Text style={{ fontSize: 22 * s, }}>六级资料</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    // 轮播图
    wrapper: {
        height: height * 0.3
    },
    whole: {
        width: width * 0.7,
        height: 130 * s,
        marginBottom: 30 * s,
        borderRadius: 10 * s,
        borderWidth: 2,
        borderColor: '#37376F',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});