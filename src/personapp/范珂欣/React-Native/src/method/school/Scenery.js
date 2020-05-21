import React, { Component } from 'react'
import { Text, View, Image ,Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window');
const s = width / 460;
let data = [
    {
        img: require('../../../assets/gonglve/fengguang1.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang2.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang3.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang4.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang5.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang6.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang7.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang8.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang9.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang10.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang11.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang12.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang13.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang14.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang15.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang16.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang17.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang18.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang19.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang20.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang21.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang22.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang23.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang24.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang25.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang26.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang27.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang28.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang29.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang20.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang31.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang32.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang33.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang34.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang35.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang36.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang37.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang38.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang39.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang40.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang41.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang42.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang43.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang44.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang45.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang46.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang47.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang48.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang49.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang50.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang51.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang52.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang53.jpg'),
    },
    {
        img: require('../../../assets/gonglve/fengguang54.jpg'),
    }
]
let old = [
    {
        img: require('../../../assets/gonglve/ctdxy1.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy2.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy3.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy4.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy5.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy6.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy7.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy8.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy9.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy10.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy11.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy12.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy13.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy14.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy15.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy16.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy17.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy18.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy19.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy20.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy21.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy22.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy23.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy24.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy25.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy26.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy27.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy28.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy29.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy20.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy31.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy32.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy33.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy34.jpg'),
    },
    {
        img: require('../../../assets/gonglve/ctdxy35.jpg'),
    },
]
export default class Scenery extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ height: '48%', width: '96%', marginLeft: '2%', }}>
                    <Text style={{height:'10%',marginTop:10*s,fontSize:18}}>醉美校园</Text>
                    <Swiper autoplay={true}  autoplayDirection={true} autoplayTimeout='1.5' showsButtons={false} dotStyle={{display:'none'}}>
                        {
                            data.map((value, index) => (
                                <View>
                                    <Image source={value.img} style={{ height: '100%', width: '100%' }} />
                                </View>
                            ))
                        }
                    </Swiper>
                </View>
                <View style={{ height: '48%', width: '96%', marginLeft: '2%'}}>
                    <Text style={{height:'10%',marginTop:10*s,fontSize:18}}>老校区回忆</Text>
                    <Swiper autoplay={true}  autoplayDirection={true} autoplayTimeout='1.5' showsButtons={false} dotStyle={{display:'none'}}>
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
        )
    }
}
