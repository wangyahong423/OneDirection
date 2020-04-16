import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Art extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.fumei}>
                        <ImageBackground source={require('../../../assets/gonglve/fumei.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>扶梅戏曲社</Text>
                    </View>
                    <View style={styles.qiaopai}>
                        <ImageBackground source={require('../../../assets/gonglve/qiaopai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>桥牌社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.lvtaiyang}>
                        <ImageBackground source={require('../../../assets/gonglve/lvtaiyang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>绿太阳曲艺工作室</Text>
                    </View>
                    <View style={styles.liyuan}>
                        <ImageBackground source={require('../../../assets/gonglve/liyuanchun.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>梨园春戏曲社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.shousui}>
                        <ImageBackground source={require('../../../assets/gonglve/shougong.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:5*s,marginTop:10*s}}>“手随心动”手工制作协会</Text>
                    </View>
                    <View style={styles.disheng}>
                        <ImageBackground source={require('../../../assets/gonglve/disheng.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>笛声悠扬社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.dashou}>
                        <ImageBackground source={require('../../../assets/gonglve/dslxs.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>大手拉小手手工社</Text>
                    </View>
                    <View style={styles.wenming}>
                        <ImageBackground source={require('../../../assets/gonglve/wenming.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>文明礼仪社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.lvyou}>
                        <ImageBackground source={require('../../../assets/gonglve/lvyou.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>旅游协会</Text>
                    </View>
                    <View style={styles.ziyou}>
                        <ImageBackground source={require('../../../assets/gonglve/bbsy.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>自由行摄影协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.linchi}>
                        <ImageBackground source={require('../../../assets/gonglve/shushe.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>临池书社</Text>
                    </View>
                    <View style={styles.shier}>
                        <ImageBackground source={require('../../../assets/gonglve/shierye.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>十二夜动漫社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.zailushang}>
                        <ImageBackground source={require('../../../assets/gonglve/zls.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>在路上话剧社</Text>
                    </View>
                    <View style={styles.yinxiang}>
                        <ImageBackground source={require('../../../assets/gonglve/yinxiang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>印象吉他社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.qixian}>
                        <ImageBackground source={require('../../../assets/gonglve/qixian.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>七弦吉他音乐协会</Text>
                    </View>
                    <View style={styles.diy}>
                        <ImageBackground source={require('../../../assets/gonglve/diy.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:5*s,marginTop:10*s}}>DIY服装形象设计工作室</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.dianzi}>
                        <ImageBackground source={require('../../../assets/gonglve/dzjj.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>电子竞技协会</Text>
                    </View>
                    <View style={styles.hanbo}>
                        <ImageBackground source={require('../../../assets/gonglve/shuhua.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>瀚博轩书画社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.hulu}>
                        <ImageBackground source={require('../../../assets/gonglve/hulusi.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>葫芦丝学社</Text>
                    </View>
                    <View style={styles.mohuai}>
                        <ImageBackground source={require('../../../assets/gonglve/mohuai.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>墨槐书画社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.zhiyi}>
                        <ImageBackground source={require('../../../assets/gonglve/zhiyi.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>纸艺DIY社</Text>
                    </View>
                    <View style={styles.huayun}>
                        <ImageBackground source={require('../../../assets/gonglve/huayun.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>花韵艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.zhongmi}>
                        <ImageBackground source={require('../../../assets/gonglve/zhenzhi.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>中秘文化交流社</Text>
                    </View>
                    <View style={styles.mengzhiling}>
                        <ImageBackground source={require('../../../assets/gonglve/Efeng.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>梦之翎舞蹈社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.ruiyi}>
                        <ImageBackground source={require('../../../assets/gonglve/ruichi.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>睿译戏剧社</Text>
                    </View>
                    <View style={styles.haiyun}>
                        <ImageBackground source={require('../../../assets/gonglve/huayun.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>海韵艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.hongfan}>
                        <ImageBackground source={require('../../../assets/gonglve/wenhua.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>红帆戏剧社</Text>
                    </View>
                    <View style={styles.xishan}>
                        <ImageBackground source={require('../../../assets/gonglve/hanfu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>溪山琴况汉服社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiangli}>
                        <ImageBackground source={require('../../../assets/gonglve/xiangqi.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>象里象外棋社</Text>
                    </View>
                    <View style={styles.chenguang}>
                        <ImageBackground source={require('../../../assets/gonglve/chenguang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>晨光社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.hanmo}>
                        <ImageBackground source={require('../../../assets/gonglve/shufamo.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>翰墨奇香书法协会</Text>
                    </View>
                    <View style={styles.xhands}>
                        <ImageBackground source={require('../../../assets/gonglve/mofang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>x-hands魔之旅魔方协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.peiyin}>
                        <ImageBackground source={require('../../../assets/gonglve/peiyin.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>配音社</Text>
                    </View>
                    <View style={styles.shiye}>
                        <ImageBackground source={require('../../../assets/gonglve/yingxiang.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>视野影像协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.moshu}>
                        <ImageBackground source={require('../../../assets/gonglve/moshu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>魔术协会</Text>
                    </View>
                    <View style={styles.xingkong}>
                        <ImageBackground source={require('../../../assets/gonglve/xkyy.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>星空音乐坊</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.jiaoyi}>
                        <ImageBackground source={require('../../../assets/gonglve/jyw.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>交谊舞</Text>
                    </View>
                    <View style={styles.taiji}>
                        <ImageBackground source={require('../../../assets/gonglve/taijiquan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>太极协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.xiyu}>
                        <ImageBackground source={require('../../../assets/gonglve/xywz.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>西域舞者</Text>
                    </View>
                    <View style={styles.aigu}>
                        <ImageBackground source={require('../../../assets/gonglve/fzsj.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>艾古服装设计协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.sanda}>
                        <ImageBackground source={require('../../../assets/gonglve/sanda.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>河北师范大学散打队</Text>
                    </View>
                    <View style={styles.shiguang}>
                        <ImageBackground source={require('../../../assets/gonglve/sgkj.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>时光空间</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.guoji}>
                        <ImageBackground source={require('../../../assets/gonglve/gjxq.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>国际象棋</Text>
                    </View>
                    <View style={styles.chawenhua}>
                        <ImageBackground source={require('../../../assets/gonglve/chawenhua.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:37*s,marginTop:10*s}}>茶文化协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.yangguang}>
                        <ImageBackground source={require('../../../assets/gonglve/yghx.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:50*s,marginTop:10*s}}>阳光化学协会</Text>
                    </View>
                    <View style={styles.muke}>
                        <ImageBackground source={require('../../../assets/gonglve/mooc.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>慕课协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.o2o}>
                        <ImageBackground source={require('../../../assets/gonglve/o2o.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>o2o电商平台兴趣小组</Text>
                    </View>
                    <View style={styles.caimo}>
                        <ImageBackground source={require('../../../assets/gonglve/caimohuihua.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:42*s,marginTop:10*s}}>彩墨绘画社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.yingxiang}>
                        <ImageBackground source={require('../../../assets/gonglve/yingxaingshiguan.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>映像时光</Text>
                    </View>
                    <View style={styles.shuxue}>
                        <ImageBackground source={require('../../../assets/gonglve/shuxuejianmo.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>数学建模</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.lingtu}>
                        <ImageBackground source={require('../../../assets/gonglve/lingtu.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:65*s,marginTop:10*s}}>凌途城乡规划协会</Text>
                    </View>
                    <View style={styles.chuangyi}>
                        <ImageBackground source={require('../../../assets/gonglve/youman.jpg')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginLeft:55*s,marginTop:10*s}}>创译游漫社</Text>
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
    fumei:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    qiaopai:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    lvtaiyang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    liyuan:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shousui:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    disheng:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    dashou:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    wenming:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    lvyou:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    ziyou:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    ziyou:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    linchi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shier:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    qixian:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    diy:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    dianzi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hanbo:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hulu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    mohuai:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zhiyi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    huayun:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    zhongmi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hongfan:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xishan:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xiangli:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    chenguang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    hanmo:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xhands:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    peiyin:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shiye:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    moshu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    xingkong:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    jiaoyi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    taiji:{
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
    aigu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    sanda:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    guoji:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    chawenhua:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yangguang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    muke:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    o2o:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    caimo:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    yingxiang:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    shuxue:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    lingtu:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    },
    chuangyi:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden'
    }
})