import React, { Component } from 'react'
import { Text, ScrollView, View, Dimensions, ImageBackground, Animated, TouchableOpacity, StyleSheet, } from 'react-native'
const { width ,height} = Dimensions.get('window');
const s = width / 460;
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
export default class Terrace extends Component {
    constructor() {
        super();
        this.state = {
            height1: new Animated.Value(0),
            height2: new Animated.Value(0),
            height3: new Animated.Value(0),
            height4: new Animated.Value(0),
            height5: new Animated.Value(0),
            height6: new Animated.Value(0),
            height7: new Animated.Value(0),
            height8: new Animated.Value(0),
            height9: new Animated.Value(0),
            height10: new Animated.Value(0),
            height11: new Animated.Value(0),
        }
    }

    show1 = () => {
        Animated.timing(this.state.height1, {
            toValue: 25 * s,
            duration: 1000,
        }).start()
    }
    show2 = () => {
        Animated.timing(this.state.height2, {
            toValue: 25 * s,
            duration: 1000,
        }).start()
    }
    show3 = () => {
        Animated.timing(this.state.height3, {
            toValue: 65 * s,
            duration: 1000,
        }).start()
    }
    show4 = () => {
        Animated.timing(this.state.height4, {
            toValue: 25 * s,
            duration: 1000,
        }).start()
    }
    show5 = () => {
        Animated.timing(this.state.height5, {
            toValue: 85 * s,
            duration: 1000,
        }).start()
    }
    show6 = () => {
        Animated.timing(this.state.height6, {
            toValue: 25 * s,
            duration: 1000,
        }).start()
    }
    show7 = () => {
        Animated.timing(this.state.height7, {
            toValue: 25 * s,
            duration: 1000,
        }).start()
    }
    show8 = () => {
        Animated.timing(this.state.height8, {
            toValue: 195 * s,
            duration: 1000,
        }).start()
    }
    show9 = () => {
        Animated.timing(this.state.height9, {
            toValue: 130 * s,
            duration: 1000,
        }).start()
    }
    show10 = () => {
        Animated.timing(this.state.height10, {
            toValue: 967 * s,
            duration: 1000,
        }).start()
    }
    show11 = () => {
        Animated.timing(this.state.height11, {
            toValue: 305 * s,
            duration: 1000,
        }).start()
    }
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
            <View style={{ width: width, height: 70 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    onPress={() => Actions.pop()}
                    style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                    <Icon name="reply" style={{ fontSize: 35 * s }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 22* s }}>科学研究平台</Text>
            </View>
            <ScrollView>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show1() }}>
                        <Text style={{ fontWeight: "bold", color: '#BB8833', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>教 育 部 重 点 实 验 室</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height1, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分子细胞生物学实验室</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show2() }}>
                        <Text style={{ fontWeight: "bold", color: '#da2911', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>教 育 部 重 点 研 究 基 地</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height2, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学中国共产党革命精神与文化资源研究中心</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show3() }}>
                        <Text style={{ fontWeight: "bold", color: '#fa22fa', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>省 级 协 同 创 新 中 心</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height3, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省细胞信号与环境适应协同创新中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省数字教育协同创新中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕赵文化研究协同创新中心</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show4() }}>
                        <Text style={{ fontWeight: "bold", color: '#444400', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>河 北 省 新 型 智 库</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height4, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长城文化安全研究中心</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show5() }}>
                        <Text style={{ fontWeight: "bold", color: '#999999', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>省 级 重 点 实 验 室</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height5, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省计算数学与应用实验室{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新型薄膜材料实验室{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无机纳米材料实验室{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分子细胞生物学实验室{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动物生理生化与分子生物学实验室{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;环境演变与生态建设实验室{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人体运动生物信息测评实验室</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show6() }}>
                        <Text style={{ fontWeight: "bold", color: '#333333', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>河 北 省 软 科 学 研 究 基 地</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height6, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学现代服务与公共政策研究基地</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show7() }}>
                        <Text style={{ fontWeight: "bold", color: '#fef458', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>河 北 省 哲 学 社 会 科 学 研 究 基 地</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height7, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学燕赵文化遗产保护与研究基地</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show8() }}>
                        <Text style={{ fontWeight: "bold", color: '#035105', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>省 、 厅 级 主 管 部 门 批 设 研 究 机 构</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height8, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省数学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教育科学研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;古籍整理研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国家天文台-河北师范大学空间科学联合研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省特种经济动物研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省杂交小麦研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学人口研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省职业技术教育研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省高校社科信息研究中心</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show9() }}>
                        <Text style={{ fontWeight: "bold", color: '#cefcef', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>教 育 厅 高 等 学 校 人 文 社 会 科 学 重 点 研 究 基 地</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height9, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学中国畿辅学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学县域历史文化研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学基层治理研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学职业教育研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学全人教育研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学公共政策评估中心</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show10() }}>
                        <Text style={{ fontWeight: "bold", color: '#664646', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>校 内 研 究 机 构</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height10, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西柏坡精神研究基地{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;移动物联网研究院{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕赵文化研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;梁漱溟研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;环境史研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生态环境研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语言研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新药研发中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;科技与社会发展研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;张岱年研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;马克思主义研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;世界政治与经济研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;元曲研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;泥河湾考古研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省文化遗产保护研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;避暑山庄学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比较诗学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;音乐教育研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国画艺术研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美术研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;书法艺术研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现代管理研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;经济研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数学研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量子器件研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;药物研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;分子细胞生物学研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网络技术研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社会发展研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;非物质文化遗产研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;黑城学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省小额贷款研究咨询中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;体育法学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;印尼研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;秘鲁研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省金融数据研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国畿辅学研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;燕赵音乐文化研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国际岩画直接断代研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;宗教文化研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省创新驱动发展案例中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省产业优化研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中俄远东研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中华优秀传统文化传承与发展研究中心{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美术考古研究所{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工业设计研究中心</Text>
                    </ImageBackground>
                </Animated.View>
                <View style={{ height: 50 * s, width: '100%', backgroundColor: 'rgba(255,255,255,0.4)', alignContent: 'center' }}>
                    <TouchableOpacity style={[styles.name, { marginTop: 10 * s }]} onPress={() => { this.show11() }}>
                        <Text style={{ fontWeight: "bold", color: '#4de5f2', fontSize: 16, textShadowColor: '#C0C0C0', textShadowRadius: 2, textShadowOffset: { width: 2, height: 2 } }}>挂 靠 学 会</Text>
                    </TouchableOpacity>
                </View>
                <Animated.View style={{ height: this.state.height11, width: '100%', marginBottom: 15 * s }}>
                    <ImageBackground style={{ height: '98%', width: '95%', marginLeft: '2.5%', }}  >
                        <Text style={{ height: '99%', width: '95%', marginTop: 10 * s, marginLeft: '2.5%', lineHeight: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国诗经学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省数学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省史学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省哲学学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省心理学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省教师教育学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省遗传学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省细胞生物学学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省电教技术学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北省莎士比亚学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;石家庄市化学学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;石家庄生物学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;石家庄市地理学会{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;石家庄市计算机学会</Text>
                    </ImageBackground>
                </Animated.View>
            </ScrollView>
            </ImageBackground>
        )
    }
}
let styles = StyleSheet.create({
    name: {
        height: 30 * s,
        width: '90%',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        paddingLeft: '3%',
        borderTopRightRadius: 15 * s,
        borderBottomRightRadius: 15 * s
    },
    txt: {
        height: '100%',
        width: '100%'
    }
})