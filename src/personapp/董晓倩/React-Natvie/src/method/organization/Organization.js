import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions,Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width / 460;
let data = [
    {
      img: require('../../../assets/gonglve/gonglve1.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve2.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve3.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve4.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve5.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve6.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve7.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve8.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve9.png'),
    },
    {
      img: require('../../../assets/gonglve/gonglve10.png'),
    }
  ]

export default class Organization extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.tens}>
                    <Text style={{marginBottom:6*s,marginLeft:-5*s,fontSize:16*s}}> 十佳社团 </Text>
                    {/* 轮播图 */}
                    <Swiper autoplay={true} autoplayDirection={true} style={styles.wrapper} showsButtons={false}>
                        {
                            data.map((value, index) => (
                                <View>
                                    <Image source={value.img} style={{height:223*s,width:'100%'}} />
                                </View>
                            ))
                        }
                    </Swiper>
                </View>
                <View style={styles.sort}>
                    <Text style={{marginLeft:10*s,fontSize:16*s,marginTop:5*s,marginBottom:-5*s}}>分类排行</Text>
                    <View style={{width:'100%'}}>
                        <TouchableOpacity onPress={()=>{Actions.schoolorg()}} style={{width:'100%',height:65*s,backgroundColor:'#fff',marginTop:11,paddingLeft:15*s,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderTopWidth:1,borderTopColor:'rgb(230,230,230)'}}>
                            <Image style={{height:50*s,width:50*s}} source={require('../../../assets/gonglve/zuzhi.png')} />
                            <Text style={{marginLeft:25*s}}>校级组织类</Text>
                            <Icon style={{marginLeft:260*s}} name='angle-right' size={18} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Actions.practice()}} style={{width:'100%',height:65*s,backgroundColor:'#fff',paddingLeft:15*s,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderTopWidth:1,borderTopColor:'rgb(230,230,230)'}}>
                            <Image style={{height:50*s,width:50*s}} source={require('../../../assets/gonglve/shijian.png')} />
                            <Text style={{marginLeft:25*s}}>实践服务类</Text>
                            <Icon style={{marginLeft:260*s}} name='angle-right' size={18} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Actions.physical()}} style={{width:'100%',height:65*s,backgroundColor:'#fff',paddingLeft:15*s,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderTopWidth:1,borderTopColor:'rgb(230,230,230)'}}>
                            <Image style={{height:50*s,width:50*s}} source={require('../../../assets/gonglve/tiyu.png')} />
                            <Text style={{marginLeft:25*s}}>体育健身类</Text>
                            <Icon style={{marginLeft:260*s}} name='angle-right' size={18} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Actions.academic()}} style={{width:'100%',height:65*s,backgroundColor:'#fff',paddingLeft:15*s,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderTopWidth:1,borderTopColor:'rgb(230,230,230)'}}>
                            <Image style={{height:50*s,width:50*s}} source={require('../../../assets/gonglve/xueshu.png')} />
                            <Text style={{marginLeft:25*s}}>学术研究类</Text>
                            <Icon style={{marginLeft:260*s}} name='angle-right' size={18} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{Actions.art()}} style={{width:'100%',height:65*s,backgroundColor:'#fff',paddingLeft:15*s,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',borderTopWidth:1,borderTopColor:'rgb(230,230,230)'}}>
                            <Image style={{height:50*s,width:50*s}} source={require('../../../assets/gonglve/wenhua.png')} />
                            <Text style={{marginLeft:25*s}}>文化艺术类</Text>
                            <Icon style={{marginLeft:260*s}} name='angle-right' size={18} color='#000' />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    wrapper:{
        height:223*s,
    },
    tens:{
        padding:10*s,
        height:270*s
    },
    sort:{
        // padding:10*s,
    }
})