import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, SafeAreaView, ImageBackground, Dimensions, TouchableOpacity, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
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
          <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>社团组织</Text>
        </View>
        <ScrollView style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
          <View style={{ height: 280 * s, width: width, backgroundColor: "#fff" }}>
            <View style={{ height: 50 * s, width: width, justifyContent: "center", backgroundColor: "#F1F1F1", marginBottom: 3 * s }}>
              <Text style={{ marginLeft: 10 * s, fontSize: 20 * s, }}> 十佳社团</Text>
            </View>
            {/* 轮播图 */}
            <Swiper autoplay={true} autoplayDirection={true} style={styles.wrapper} showsButtons={false}>
              {
                data.map((value, index) => (
                  <View style={{ marginLeft: width * 0.01 }}>
                    <Image source={value.img} style={{ height: 223 * s, width: width * 0.98 }} />
                  </View>
                ))
              }
            </Swiper>
          </View>
          <View style={styles.sort}>
            <Text style={{ marginLeft: 10 * s, fontSize: 20 * s, marginTop: 15 * s, marginBottom: -5 * s }}>分类排行</Text>
            <View style={{ width: '100%' }}>
              <TouchableOpacity onPress={() => { Actions.schoolorg() }} style={{ width: '100%', height: 65 * s, backgroundColor: '#fff', marginTop: 11, paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                <Image style={{ height: 50 * s, width: 50 * s }} source={require('../../../assets/gonglve/zuzhi.png')} />
                <Text style={{ marginLeft: 25 * s, fontSize: 18 * s }}>校级组织类</Text>
                <Icon style={{ marginLeft: 250 * s }} name='angle-right' size={18} color='#000' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Actions.practice() }} style={{ width: '100%', height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                <Image style={{ height: 50 * s, width: 50 * s }} source={require('../../../assets/gonglve/shijian.png')} />
                <Text style={{ marginLeft: 25 * s, fontSize: 18 * s }}>实践服务类</Text>
                <Icon style={{ marginLeft: 250 * s }} name='angle-right' size={18} color='#000' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Actions.physical() }} style={{ width: '100%', height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                <Image style={{ height: 50 * s, width: 50 * s }} source={require('../../../assets/gonglve/tiyu.png')} />
                <Text style={{ marginLeft: 25 * s, fontSize: 18 * s }}>体育健身类</Text>
                <Icon style={{ marginLeft: 250 * s }} name='angle-right' size={18} color='#000' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Actions.academic() }} style={{ width: '100%', height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                <Image style={{ height: 50 * s, width: 50 * s }} source={require('../../../assets/gonglve/xueshu.png')} />
                <Text style={{ marginLeft: 25 * s, fontSize: 18 * s }}>学术研究类</Text>
                <Icon style={{ marginLeft: 250 * s }} name='angle-right' size={18} color='#000' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { Actions.art() }} style={{ width: '100%', height: 65 * s, backgroundColor: '#fff', paddingLeft: 15 * s, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderTopWidth: 1, borderTopColor: 'rgb(230,230,230)' }}>
                <Image style={{ height: 50 * s, width: 50 * s }} source={require('../../../assets/gonglve/wenhua.png')} />
                <Text style={{ marginLeft: 25 * s, fontSize: 18 * s }}>文化艺术类</Text>
                <Icon style={{ marginLeft: 250 * s }} name='angle-right' size={18} color='#000' />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
let styles = StyleSheet.create({
  wrapper: {
    height: 223 * s,
    // width:width*0.98,
    // marginLeft:width*0.01
  },
  tens: {
    padding: 10 * s,
    height: 270 * s,
    backgroundColor: "#fff"
  },
  sort: {
    // padding:10*s,
  }
})