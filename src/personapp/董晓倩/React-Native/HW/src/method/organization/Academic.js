import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, ImageBackground, SafeAreaView, TouchableOpacity ,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Academic extends Component {
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
                <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>学术研究类</Text>
            </View>
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/dexinshe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>德馨社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/feiyang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>校飞扬演讲社</Text>
                    </View>
                </View>
                
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/xinzhi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>新知社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/faxueshe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>法学社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/kaoyanjiuye.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>考研与就业协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shizheng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>时政论坛设</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/bian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>彼岸演讲社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yyaihaozhe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>英语爱好者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/kuangyeyy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>狂野英语社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yueduzhe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>悦读者交流协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zhixingshe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>知行社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/lxdd.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>理想担当青年社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/sibian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{xmarginTop:10*s}}>大学生思辨社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yyjlb.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>DEC英语俱乐部</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/jingmaoyy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>河北师大经贸英语社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/chuangye.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>大学生创业协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/swahz.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{xmarginTop:10*s}}>生物爱好者协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zhenzhi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>真知书社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shuma.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>数码PC协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/diannao.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>电脑爱好者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/eyu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>俄语桦林社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/xiyu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{xmarginTop:10*s}}>西语社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yitong.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>译通英语社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yinghua.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>樱花社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/hongxue.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>红学会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/jinglun.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>经伦汉语言协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/qianyuan.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>乾元国学社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zifeng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>子风文学社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/chunqiu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>春秋诗社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/hanyu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>韩国语协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/wuxiandian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>无线电协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/tianwen.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>天文爱好者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/qianrushi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>嵌入式电子协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/web.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>Web协会</Text>
                    </View>
                </View>
                <View style={[styles.box,{marginBottom:20*s}]}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/Efeng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>E风英语社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/ruichi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>睿驰空间信息爱好者协会</Text>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}
let styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingTop:20*s
    },
    div:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden',
        alignItems:"center"
    }
})