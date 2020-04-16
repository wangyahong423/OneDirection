import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, StyleSheet, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
const { width } = Dimensions.get('window');
const s = width / 460;

export default class Shiziduiwu extends Component {
    constructor() {
        super();
        this.state = {
            width: new Animated.Value(0),
        }
    }
    componentDidMount(){
        Animated.timing(this.state.width, {
            toValue: 50,
        }).start()
    }

    render() {
        return (
            <ScrollView style={{ width: '96%', marginLeft: '2%', marginTop: '3%', height: '100%' }}>
                <Text style={{lineHeight:20*s}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来学校加大引进和培养优秀人才力度，加强师资队伍建设，师资队伍水平稳步提高。学校现有在职教职工2606名，其中专任教师1617人，教授391人，副教授651人，中科院院士1人，在职省级以上各类优秀专家170余人。 </Text>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', height: 50 * s }}>
                    <Button onPress={() => { this.zoom() }}>
                        <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                    </Button>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}>相&nbsp;关&nbsp;链&nbsp;接：</Text>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://rsc.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                    }}>
                        <Text>   &nbsp;人&nbsp;事&nbsp;处</Text>
                    </TouchableOpacity>
                </View>
                <SectionList
                    renderItem={({ item, index, section }) => <Text style={styles.txt} key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.title}>{title}</Text>
                    )}
                    sections={[
                        { title: "中国科学院院士", data: ["孙大业"] },
                        { title: "国务院特殊津贴专家", data: ["孙大业     蒋春澜     王长华     戴建兵     杨欢进     路    紫     黄华方", "张    骥     王宏斌     白云乡     高    亭     孙    颖     唐贵德"] },
                        { title: "国家“百千万人才工程”入选者、国家有突出贡献中青年专家", data: ["孙    颖"] },
                        { title: "国家“万人计划”教学名师", data: ["段相林"] },
                        { title: "国家级教学名师", data: ["路    紫"] },
                        { title: "燕赵学者", data: ["蒋春澜"] },
                        { title: "省管优秀专家", data: ["孙大业     李建强     蒋春澜     王长华     杨欢进     白云乡     王宏斌", "朱兴华     徐    莉     高    亭     蒋世国"] },
                        { title: "河北省有突出贡献中青年专家", data: ["孙大业     蒋春澜     王长华     戴建兵     邓明立     刘敬泽     杨欢进", "唐贵德     安    忠     孟令鹏     崔素娟     路    紫     何玉秀     张    骥", "王宏斌     李正栓     刘    虹     王玉平     徐    莉     葛京凤     韩来平", "高    亭     尚忠林     王静红     石国兴     侯登录     常彦忠"] },
                        { title: "河北省政府特殊津贴专家", data: ["汤文强     孙    玉     邢建昌     刁哲军     米据生     郭    毅     郭宝亮", "谢启光     谭    克"] },
                        { title: "河北省巨人计划创新团队", data: ["孙大业     常彦忠"] },
                        { title: "河北省百人计划创新人才", data: ["汤文强     孙    玉     谢启光     谭    克     曹鹏秀"] },
                        { title: "河北省新世纪“三三三人才工程”一、二层次人选", data: ["一层次     崔素娟", "二层次     孙会元     安    忠     何玉秀     李月从     尚忠林     王静红", "                 郭    毅     郭小丽     赵学琳     崔文元     曾智安     武明星"] },
                        { title: "河北省青年拔尖人才", data: ["首    批:    王    静     崔文元     江合友     李东鸽     慕良泽     黎辉辉", "第二批:    宋俊涛     郭志辉     武明星     刘    博     李    亮     张胜伟", "                 王春城", "第三批:    于志军     何    敬     邵    琅     高国粉     郭中领     韩瑞玲", "                 鲁    明     蒲翠霞     袁世旭"] },
                        { title: "河北省杰出专业技术人才", data: ["王长华     戴建兵"] },
                        { title: "河北省优秀留学回国人员", data: ["张    骥"] },
                        { title: "国家优秀青年基金获得者", data: ["房军生"] },
                        { title: "教育部“新世纪优秀人才支持计划”入选者", data: ["安    忠     崔素娟     尚忠林     陈玉玲     苑立平     朱玉峻     郭    毅", "徐小冬     郭小丽     崔红芬"] },
                        { title: "河北省杰出青年科学基金获得者", data: ["安    忠     崔素娟     常彦忠     孙    政     陈玉玲     汤文强     徐小冬", "崔文元     苑立平     孙    玉     周春江     武明星     郭志辉     纪    奎", "白彦魁     韩占刚     宋俊涛"] },
                        { title: "河北省高校“百名优秀创新人才支持计划”入选者", data: ["刘敬泽     孙    政     常彦忠     孙    颖     王    军     邢建昌     郭宝亮", "徐    莉     汤文强     崔文元     徐小冬     苑立平     谷更有     郭小丽", "何玉秀     唐丽萍     郭    毅     武明星     胡景敏     王立新"] },
                        { title: "河北省中青年社科专家五十人工程", data: ["王玉平     邢建昌     戴建兵     李正栓     韩来平     赵学琳     张学文"] },
                        { title: "河北省宣传文化系统“四个一批”人才", data: ["杨    瑞     时俊静"] },
                        { title: "河北省社科优秀青年专家", data: ["刘    虹     王玉平     徐    莉     戴建兵     邢建昌     李正栓     姜文振     郭小丽     胡景敏"] },
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
                <Text style={{ marginLeft: '4%', marginBottom: 5 * s }}>（统计截止2019年3月）</Text>
            </ScrollView>
        )
    }
}
let styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        height: 30 * s,
        width: '100%',
        textAlign: 'left',
        paddingLeft: '3%',
        lineHeight: 30 * s,
        backgroundColor: '#fff',
        fontSize: 16
    },
    txt: {
        fontSize: 14,
        marginLeft: '5%',
        lineHeight: 25,
    }
})