import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, ImageBackground, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

import Button from 'react-native-button';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Technology extends Component {
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
                    <Text style={{ fontSize: 20 * s }}>自然科学与技术</Text>
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
                            <Text style={{ color: 'blue' }}>   &nbsp;科&nbsp;技&nbsp;处</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '94%', marginLeft: '3%', marginBottom: '3%' }}>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学是一所综合型的师范类院校。科研工作在学校发展中处于重要地位，是学校求生存、谋发展中最有效、最持久的决定性因素。学校科研工作的基本思路是：发挥优势，突出重点，力求他有我优；融合渗透，突出特色，力求他无我有；统筹兼顾，远近结合，做到基础研究与应用研究并重；协同合作，做大做强，提高科研项目和成果的竞争力。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;学校在自然科学研究方面具有深厚的基础，现有国家重点学科1个，博士后科研流动站3个，燕赵学者岗位2个，河北省高校强势特色学科3个，省级重点学科8个、省级重点实验室7个。 学校设有数学研究中心、生态环境研究中心、杂交小麦研究所等17个科研机构。</Text>
                        <Text style={{ lineHeight: 15 * s, fontSize: 10 }}></Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，学校适时进行科技政策调整，强调科技人员的社会责任，提出了“基础研究要水平，应用研究要效益”这一指导思想。在广大科技工作者和管理人员的共同努力下，学校科技工作取得了可喜的成绩。基础理论研究方面承担了一批具有较大影响的国家级项目，如国家“973”计划项目、国家“863”计划项目、国家自然科学基金重大研究计划重点基金项目、杰出青年基金项目、国家科技部基础研究重大前期专项、国家科技部转基因产业化开发项目、新世纪优秀人才支持计划等。各类项目取得的科技成果居国内领先、国际先进行列，一些科技论文在国际权威专业期刊上发表，如：Nature Cell Biology、The Plant Cell、Inventiones Mathematicae、Advances in Mathematics、Physical Review Letters、Astrophysical Journal、Chemical Commucation、Green Chemistry等期刊。孙大业院士课题组获2010年国家自然科学二等奖，填补了河北省的空白；蒋春澜教授指导的博士生的毕业论文也曾获全国“百篇优博”。应用研究方面，积极与机关、企、事业单位合作，走产、学、研结合的道路。“生细胞信号与环境适应”和“数字教育”两个协同创新中心2013年12月获得省级认定。拥有学校自主知识产权的优质小麦新品种“师栾02-1”，在2006年国家品种“区试”中品质居于同类首位，该小麦品种依托敦煌种业公司进行了广泛地推广。平菇、杏鲍菇、白灵菇等新型菌种先进的选育栽培技术科技服务为承德、保定和石家庄附近郊县等地企业和农民带来良好的经济效益。在土地评估与规划、生态环境保护与开发、人口预测与问题研究等方面取得了一系列成果，为政府决策提供了科学依据，服务于地方经济建设。学校的科学研究在为社会做贡献的同时，得到了政府和社会的认可。</Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}
