import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet,Dimensions, ImageBackground } from 'react-native'
const {width} = Dimensions.get('window');
const s = width / 460;

export default class Art extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/fumei.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>扶梅戏曲社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/qiaopai.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>桥牌社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/lvtaiyang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>绿太阳曲艺工作室</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/liyuanchun.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>梨园春戏曲社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shougong.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>“手随心动”手工制作协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/disheng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>笛声悠扬社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/dslxs.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>大手拉小手手工社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/wenming.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>文明礼仪社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/lvyou.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>旅游协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/bbsy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>自由行摄影协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shushe.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>临池书社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shierye.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>十二夜动漫社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zls.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>在路上话剧社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yinxiang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>印象吉他社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/qixian.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>七弦吉他音乐协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/diy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>DIY服装形象设计工作室</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/dzjj.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>电子竞技协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shuhua.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>瀚博轩书画社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/hulusi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>葫芦丝学社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/mohuai.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>墨槐书画社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zhiyi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>纸艺DIY社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/huayun.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>花韵艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/zhenzhi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>中秘文化交流社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/Efeng.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>梦之翎舞蹈社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/ruichi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>睿译戏剧社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/huayun.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>海韵艺术团</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/wenhua.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>红帆戏剧社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/hanfu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>溪山琴况汉服社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/xiangqi.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>象里象外棋社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/chenguang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>晨光社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shufamo.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>翰墨奇香书法协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/mofang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>x-hands魔之旅魔方协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/peiyin.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>配音社</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yingxiang.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>视野影像协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/moshu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>魔术协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/xkyy.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>星空音乐坊</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/jyw.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>交谊舞</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/taijiquan.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>太极协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/xywz.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>西域舞者</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/fzsj.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>艾古服装设计协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/sanda.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>河北师范大学散打队</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/sgkj.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>时光空间</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/gjxq.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>国际象棋</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/chawenhua.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>茶文化协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yghx.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>阳光化学协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/mooc.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>慕课协会</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/o2o.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>o2o电商平台兴趣小组</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/caimohuihua.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>彩墨绘画社</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/yingxaingshiguan.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>映像时光</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/shuxuejianmo.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>数学建模</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/lingtu.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>凌途城乡规划协会</Text>
                    </View>
                    <View style={styles.div}>
                        <ImageBackground source={require('../../../assets/gonglve/youman.png')} style={{width:170*s,height:130*s}} />
                        <Text style={{marginTop:10*s}}>创译游漫社</Text>
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
    div:{
        height:170*s,
        width:170*s,
        backgroundColor:'white',
        borderRadius:35*s,
        overflow:'hidden',
        alignItems:"center"
    }
})