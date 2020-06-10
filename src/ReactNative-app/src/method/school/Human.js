import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, ImageBackground, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Human extends Component {
    constructor() {
        super();
        this.state = {
            width: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(this.state.width, {
            toValue: 50,
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
                    <Text style={{ fontSize: 20 * s }}>人文与社会科学</Text>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center', height: 50 * s }}>
                        <Button onPress={() => { this.zoom() }}>
                            <Animated.View style={{ width: this.state.width }}><Icon name='arrow-right' color='blue' size={26}></Icon></Animated.View>
                        </Button>
                        <Text style={{ color: 'orange', fontWeight: 'bold' }}>相&nbsp;关&nbsp;链&nbsp;接：</Text>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://kjc.hebtu.edu.cn/').catch(err => console.error('An error occurred', err));
                        }}>
                            <Text style={{ color: 'blue' }}>   &nbsp;社&nbsp;会&nbsp;科&nbsp;学&nbsp;处</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '94%', marginLeft: '3%', marginBottom: '3%' }}>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是一所综合型的师范类院校，人文、艺术与社会科学有着深厚的文化底蕴和历史沿革。发展至今，学科门类齐全，涵盖了文学、历史学、哲学、法学、经济学、教育学、新闻学、管理学、体育学和艺术学等。涌现了梁漱溟、张申府、汤用彤、王蒙、胡如雷、苑书义、陈超等学界名人。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人文社会科学研究不断取得新进展，承担国家社科基金项目数量位居省内高校前列。主持承担了国家社科基金重大招标项目、国家哲学社会科学成果文库、中宣部马克思主义理论研究和建设工程重大委托项目、国家工程主体类项目（清史纂修工程和中华大典编纂出版工程）以及河北省省长特批项目等一批具有较大影响的科研课题。出版了《中国封建社会形态研究》、《宋金元明清曲词通释》、《西柏坡与新中国》、《河北经济史》、《晚清海防思想与制度研究》、《河北文学通史》和《打开诗的漂流瓶——现代诗研究论集》等有较大影响学术著作；在《中国社会科学》、《历史研究》、《文学评论》和《哲学研究》等国内权威学术期刊上发表多篇高水平理论研究成果，产生良好社会反响。部分成果还获得国家辞书奖、鲁迅文学奖、教育部高等学校科学研究优秀成果奖（人文社会科学）、全国教育科学研究优秀成果奖和河北省社会科学特别奖等人文社科类重要奖项。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发挥学校研究优势，整合校内外资源和研究力量，利用行业和地方的有利资源优势，共建研究机构，推进国家及省级创新型平台建设。近年来我校自建“燕赵文化研究中心”等人文社会科学研究平台40多个，自此基础上，衍生孵化教育部人文社会科学重点研究基地1个（“河北师范大学中国共产党革命精神与文化资源研究中心”）；河北省新型智库1个（长城文化安全研究中心）；河北省协同创新中心1个（燕赵文化研究协同创新中心）；河北省软科学研究基地1个（“河北师范大学现代服务与公共政策研究基地”）；河北省哲学社会科学研究基地1个（“河北师范大学燕赵文化遗产保护与研究”）；河北省高等学校人文社会科学重点研究基地共6个（“河北师范大学中国畿辅学研究中心、河北师范大学县域历史文化研究中心、河北师范大学基层治理研究中心、河北师范大学职业教育研究中心、河北师范大学全人教育研究中心和河北师范大学公共政策评估中心”）。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加强人才队伍建设，以各类高层次人才计划有效衔接和学科长远发展为导向，培养造就一批拔尖创新人才和青年学者。其中国务院特殊津贴专家7人；省管优秀专家8人；河北省有突出贡献中青年专家12人；教育部新世纪优秀人才支持计划2人；河北省社科优秀青年专家12人；河北中青年社科专家五十人工程9人；河北省新世纪“三三三人才工程3人”； 河北省首批青年拔尖人才5人；教育厅百名优秀人才支持计划13人。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重视成果转化，提升服务社会能力。文科年到位外科研经费快速增长，2018年到位经费达（2600）余万元。服务地方经济社会建设的能力明显增强，涉及旅游、经济、社会、城市规划设计、职业教育和人口等多个行业。多篇应用对策很强的研究报告被党和国家、省级领导人批示批转，其中《加强未成年人思想道德建设七项对策》、《稳控菜价需改革城市菜市场经营体制》两篇研究报告分别得到了中央政治局委员李长春和回良玉副总理的重要批示，同时又分别被人民日报要闻版刊登和中办秘书局《观点摘编》摘录；《应利用县级职教中心在乡村振兴中实现新作为》得到国务院副总理孙春兰批示。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下一步，学校贯彻落实《教育部关于深入推进高等学校哲学社会科学繁荣发展的意见》、《高等学校哲学社会科学繁荣计划（2010-2020）》和《河北师范大学“十三五”规划》等文件精神，制定相关实施意见，为我校哲学社会科学的繁荣发展提供内驱力，推动我校哲学社会科学的发展繁荣，为我省的文化强省战略做出贡献。</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

