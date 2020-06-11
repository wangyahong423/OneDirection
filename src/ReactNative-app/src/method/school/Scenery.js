import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
const { width ,height} = Dimensions.get('window');
const s = width / 460;
let data = [
    {
        img: require('../../../assets/gonglve/fengguang1.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang2.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/fengguang3.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang4.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang5.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang6.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang7.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang8.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang9.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang10.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang11.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang12.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/fengguang13.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang14.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang15.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang16.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang17.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang18.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang19.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang20.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang21.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang22.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang23.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang24.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang25.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang26.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang27.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang28.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang29.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang20.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang31.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang32.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang33.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang34.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang35.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang36.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang37.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang38.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang39.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang40.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang41.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang42.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang43.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang44.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang45.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang46.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang47.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang48.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang49.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang50.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/fengguang51.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/fengguang52.png'),
    // },
    {
        img: require('../../../assets/gonglve/fengguang53.png'),
    },
    {
        img: require('../../../assets/gonglve/fengguang54.png'),
    }
]
let old = [
    {
        img: require('../../../assets/gonglve/ctdxy1.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy2.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy3.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy4.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy5.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy6.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy7.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy8.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy9.png'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy10.png'),
    },
    // {
    //     img: require('../../../assets/gonglve/ctdxy11.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy12.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy13.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy14.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy15.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy16.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy17.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy18.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy19.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy20.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy21.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy22.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy23.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy24.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy25.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy26.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy27.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy28.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy29.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy20.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy31.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy32.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy33.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy34.png'),
    // },
    // {
    //     img: require('../../../assets/gonglve/ctdxy35.png'),
    // },
]
export default class Scenery extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 65 * s, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>校园风光</Text>
                </View>
                <View style={{ width: '100%', height: '90%' }}>
                    <View style={{ height: '48%', width: '96%', marginLeft: '2%', }}>
                        <Text style={{ height: '10%', marginTop: 10 * s, fontSize: 18 }}>醉美校园</Text>
                        <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='1.5' showsButtons={false} dotStyle={{ display: 'none' }}>
                            {
                                data.map((value, index) => (
                                    <View>
                                        <Image source={value.img} style={{ height: '100%', width: '100%' }} />
                                    </View>
                                ))
                            }
                        </Swiper>
                    </View>
                    <View style={{ height: '48%', width: '96%', marginLeft: '2%' }}>
                        <Text style={{ height: '10%', marginTop: 10 * s, fontSize: 18 }}>老校区回忆</Text>
                        <Swiper autoplay={true} autoplayDirection={true} autoplayTimeout='1.5' showsButtons={false} dotStyle={{ display: 'none' }}>
                            {
                                old.map((value, index) => (
                                    <View>
                                        <Image source={value.img} style={{ height: '100%', width: '100%' }} />
                                    </View>
                                ))
                            }
                        </Swiper>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
