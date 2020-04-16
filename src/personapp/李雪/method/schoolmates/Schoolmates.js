import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Schoolmates extends Component {
    cailimin = ()=>{
        Actions.cailimin()
    }
    caijiming = ()=>{
        Actions.caijiming()
    }
    chaiguanjing = ()=>{
        Actions.chaiguanjing()
    }
    chenshuzeng = ()=>{
        Actions.chenshuzeng()
    }
    dengyingchao = ()=>{
        Actions.dengyingchao()
    }
    fanqianwen = ()=>{
        Actions.fanqianwen()
    }
    fengjiannan = ()=>{
        Actions.fengjiannan()
    }
    fengshaohui = ()=>{
        Actions.fengshaohui()
    }
    gesangdeji = ()=>{
        Actions.gesangdeji()
    }
    haobolin = ()=>{
        Actions.haobolin()
    }
    hehong = ()=>{
        Actions.hehong()
    }
    houliang = ()=>{
        Actions.houliang()
    }
    lishushen = ()=>{
        Actions.lishushen()
    }
    liyimin = ()=>{
        Actions.liyimin()
    }
    lizhanshu = ()=>{
        Actions.lizhanshu()
    }
    liangxingjie = ()=>{
        Actions.liangxingjie()
    }
    linwanli = ()=>{
        Actions.linwanli()
    }
    liujianya = ()=>{
        Actions.liujianya()
    }
    liuxiaojun = ()=>{
        Actions.liuxiaojun()
    }
    liuyongrui = ()=>{
        Actions.liuyongrui()
    }
    longzhuangwei = ()=>{
        Actions.longzhuangwei()
    }
    luhongchang = ()=>{
        Actions.luhongchang()
    }
    mayujun = ()=>{
        Actions.mayujun()
    }
    panglaixing = ()=>{
        Actions.panglaixing()
    }
    situlanfang = ()=>{
        Actions.situlanfang()
    }
    suguoan = ()=>{
        Actions.suguoan()
    }
    wangfengming = ()=>{
        Actions.wangfengming()
    }
    wangjinjiang = ()=>{
        Actions.wangjinjiang()
    }
    wangzhixin = ()=>{
        Actions.wangzhixin()
    }
    xiachuancai = ()=>{
        Actions.xiachuancai()
    }
    yanluguang = ()=>{
        Actions.yanluguang()
    }
    yuanzhigang = ()=>{
        Actions.yuanzhigang()
    }
    zhanghe = ()=>{
        Actions.zhanghe()
    }
    zhangmeizhi = ()=>{
        Actions.zhangmeizhi()
    }
    zhangwenmao = ()=>{
        Actions.zhangwenmao()
    }
    zhangyanping = ()=>{
        Actions.zhangyanping()
    }
    zhangzhiwei= ()=>{
        Actions.zhangzhiwei()
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.block} onPress={this.cailimin}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/才利民.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>才利民</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.caijiming}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>蔡继明</Text>
                            <Image source={require('../../../assets/gonglve/蔡继明.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.chaiguanjing}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/柴冠景.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>柴冠景</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.chenshuzeng}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>陈书增</Text>
                            <Image source={require('../../../assets/gonglve/陈书增.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.dengyingchao}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/邓颖超.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>邓颖超</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.fanqianwen}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>范千文</Text>
                            <Image source={require('../../../assets/gonglve/范千文.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.fengjiannan}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/冯建男.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>冯健男</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.fengshaohui}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>冯韶慧</Text>
                            <Image source={require('../../../assets/gonglve/冯韶慧.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.gesangdeji}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/格桑德吉.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>格桑德吉</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.haobolin}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>郝柏林</Text>
                            <Image source={require('../../../assets/gonglve/郝柏林.png')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.hehong}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/贺弘.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>贺泓</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.houliang}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>侯亮</Text>
                            <Image source={require('../../../assets/gonglve/侯亮.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.lishushen}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/李树深.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>李树深</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.liyimin}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>李益民</Text>
                            <Image source={require('../../../assets/gonglve/李益民.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.lizhanshu}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/栗战书.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>栗战书</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.liangxingjie}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>梁兴杰</Text>
                            <Image source={require('../../../assets/gonglve/梁兴杰.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.linwanli}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/林万里.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>林万里</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.liujianya}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>刘建亚</Text>
                            <Image source={require('../../../assets/gonglve/刘建亚.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.liuxiaojun}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/刘晓军.png')} style={styles.imgs} />
                            <Text style={styles.word}>刘晓军</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.liuyongrui}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>刘永瑞</Text>
                            <Image source={require('../../../assets/gonglve/刘永瑞.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.longzhuangwei}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/龙庄伟.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>龙庄伟</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.luhongchang}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>路洪昌</Text>
                            <Image source={require('../../../assets/gonglve/路洪昌.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.mayujun}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/马宇骏.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>马宇骏</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.panglaixing}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>庞来兴</Text>
                            <Image source={require('../../../assets/gonglve/庞来兴.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.situlanfang}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/司徒兰芳.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>司徒兰芳</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.suguoan}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>苏国安</Text>
                            <Image source={require('../../../assets/gonglve/苏国安.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.wangfengming}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/王凤鸣.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>王凤鸣</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.wangjinjiang}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>王进江</Text>
                            <Image source={require('../../../assets/gonglve/王进江.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.wangzhixin}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/王志欣.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>王志欣</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.xiachuancai}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>夏传才</Text>
                            <Image source={require('../../../assets/gonglve/夏传才.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.yanluguang}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/严陆光.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>严陆光</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.yuanzhigang}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>袁志刚</Text>
                            <Image source={require('../../../assets/gonglve/袁志刚.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.zhanghe}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/张和.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>张和</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.zhangmeizhi}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>张妹芝</Text>
                            <Image source={require('../../../assets/gonglve/张妹芝.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.zhangwenmao}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/张文茂.png')} style={styles.imgs} />
                            <Text style={styles.word}>张文茂</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.zhangyanping}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={styles.word}>张砚平</Text>
                            <Image source={require('../../../assets/gonglve/张砚平.jpg')} style={styles.imgs} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={this.zhangzhiwei}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Image source={require('../../../assets/gonglve/张志伟.jpg')} style={styles.imgs} />
                            <Text style={styles.word}>张志伟</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block}></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        marginTop: 80 * s
    },
    block: {
        height: 160 * s,
        borderRadius: 20,
        width: '40%',
        marginTop: '7%'
    },
    imgs: {
        height: 160 * s,
        width: 130 * s,
        borderRadius: 20 * s
    },
    word: {
        width: 20 * s
    }
});