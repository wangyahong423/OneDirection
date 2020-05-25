import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Academic extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.dexin}>
                        <ImageBackground source={require('../../../assets/gonglve/dexinshe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>德馨社</Text>
                    </View>
                    <View style={styles.xiaofeiyang}>
                        <ImageBackground source={require('../../../assets/gonglve/feiyang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>校飞扬演讲社</Text>
                    </View>
                </View>
                
                <View style={styles.box}>
                    <View style={styles.xinzhi}>
                        <ImageBackground source={require('../../../assets/gonglve/xinzhi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>新知社</Text>
                    </View>
                    <View style={styles.faxue}>
                        <ImageBackground source={require('../../../assets/gonglve/faxueshe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>法学社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.kaoyan}>
                        <ImageBackground source={require('../../../assets/gonglve/kaoyanjiuye.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>考研与就业协会</Text>
                    </View>
                    <View style={styles.shizheng}>
                        <ImageBackground source={require('../../../assets/gonglve/shizheng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>时政论坛设</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.bian}>
                        <ImageBackground source={require('../../../assets/gonglve/bian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>彼岸演讲社</Text>
                    </View>
                    <View style={styles.yingyuaihaozhe}>
                        <ImageBackground source={require('../../../assets/gonglve/yyaihaozhe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>英语爱好者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.kuangye}>
                        <ImageBackground source={require('../../../assets/gonglve/kuangyeyy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>狂野英语社</Text>
                    </View>
                    <View style={styles.yuedu}>
                        <ImageBackground source={require('../../../assets/gonglve/yueduzhe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>悦读者交流协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.zhixing}>
                        <ImageBackground source={require('../../../assets/gonglve/zhixingshe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>知行社</Text>
                    </View>
                    <View style={styles.lixiang}>
                        <ImageBackground source={require('../../../assets/gonglve/lxdd.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>理想担当青年社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.daxuesheng}>
                        <ImageBackground source={require('../../../assets/gonglve/sibian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大学生思辨社</Text>
                    </View>
                    <View style={styles.yingyu}>
                        <ImageBackground source={require('../../../assets/gonglve/yyjlb.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:40*s,marginTop:10*s}}>DEC英语俱乐部</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.hebei}>
                        <ImageBackground source={require('../../../assets/gonglve/jingmaoyy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:22*s,marginTop:10*s}}>河北师大经贸英语社</Text>
                    </View>
                    <View style={styles.daxue}>
                        <ImageBackground source={require('../../../assets/gonglve/chuangye.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>大学生创业协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.shengwu}>
                        <ImageBackground source={require('../../../assets/gonglve/swahz.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>生物爱好者协会</Text>
                    </View>
                    <View style={styles.zhenzhi}>
                        <ImageBackground source={require('../../../assets/gonglve/zhenzhi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>真知书社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.shuma}>
                        <ImageBackground source={require('../../../assets/gonglve/shuma.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>数码PC协会</Text>
                    </View>
                    <View style={styles.diannao}>
                        <ImageBackground source={require('../../../assets/gonglve/diannao.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>电脑爱好者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.eyu}>
                        <ImageBackground source={require('../../../assets/gonglve/eyu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>俄语桦林社</Text>
                    </View>
                    <View style={styles.xiyu}>
                        <ImageBackground source={require('../../../assets/gonglve/xiyu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>西语社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.yitong}>
                        <ImageBackground source={require('../../../assets/gonglve/yitong.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>译通英语社</Text>
                    </View>
                    <View style={styles.yinghua}>
                        <ImageBackground source={require('../../../assets/gonglve/yinghua.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>樱花社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.hongxue}>
                        <ImageBackground source={require('../../../assets/gonglve/hongxue.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>红学会</Text>
                    </View>
                    <View style={styles.jinglun}>
                        <ImageBackground source={require('../../../assets/gonglve/jinglun.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>经伦汉语言协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.qianyuan}>
                        <ImageBackground source={require('../../../assets/gonglve/qianyuan.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>乾元国学社</Text>
                    </View>
                    <View style={styles.zifeng}>
                        <ImageBackground source={require('../../../assets/gonglve/zifeng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>子风文学社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.chunqiu}>
                        <ImageBackground source={require('../../../assets/gonglve/chunqiu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>春秋诗社</Text>
                    </View>
                    <View style={styles.hanyu}>
                        <ImageBackground source={require('../../../assets/gonglve/hanyu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>韩国语协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.wuxian}>
                        <ImageBackground source={require('../../../assets/gonglve/wuxiandian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>无线电协会</Text>
                    </View>
                    <View style={styles.tianwen}>
                        <ImageBackground source={require('../../../assets/gonglve/tianwen.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>天文爱好者协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.qianru}>
                        <ImageBackground source={require('../../../assets/gonglve/qianrushi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>嵌入式电子协会</Text>
                    </View>
                    <View style={styles.web}>
                        <ImageBackground source={require('../../../assets/gonglve/web.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>Web协会</Text>
                    </View>
                </View>
                <View style={[styles.box,{marginBottom:20*s}]}>
                    <View style={styles.efeng}>
                        <ImageBackground source={require('../../../assets/gonglve/Efeng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>E风英语社</Text>
                    </View>
                    <View style={styles.ruichi}>
                        <ImageBackground source={require('../../../assets/gonglve/ruichi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:5*s,marginTop:10*s}}>睿驰空间信息爱好者协会</Text>
                    </View>
                </View>
            </ScrollView>
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
    dexin:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiaofeiyang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xinzhi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    bian:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yingyuaihaozhe:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    faxue:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    kaoyan:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shizheng:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    kuangye:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yuedu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zhixing:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    lixiang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    daxuesheng:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    }
    ,
    yingyu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hebei:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    daxue:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shengwu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zhenzhi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shuma:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    diannao:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    eyu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiyu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yitong:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yinghua:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hongxue:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    jinglun:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    qianyuan:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zifeng:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    chunqiu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hanyu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    wuxian:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    tianwen:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    qianru:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    web:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    efeng:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    ruichi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    }
})