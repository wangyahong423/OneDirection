import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Dimensions ,ImageBackground,Image} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
const { width ,height} = Dimensions.get('window');
const s = width / 460;
export default class Undergradute extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 70 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Image source={require('../../../assets/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>本科生教育</Text>
                </View>
            <ScrollView >
                <View style={{ width: '96%', marginLeft: '2%', marginBottom: '2%' }}>
                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: 10 * s }}>
                        <Icon name='appstore-o' size={23} color='#565656' />
                        <Text style={{ lineHeight: 30 * s,color:'#565656' }}>&nbsp;&nbsp;&nbsp;分类模块</Text>
                    </View>
                    <View style={styles.six}>
                        <View style={styles.sixOne}>
                            <TouchableOpacity onPress={() => { Actions.course() }} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: 'orange' }}><Icon name='plussquareo' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>课程设置</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Actions.practise() }} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: 'purple' }}><Icon name='piechart' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>实践教学</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.sixOne}>
                            <TouchableOpacity onPress={() => { Actions.teaching() }} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: 'pink' }}><Icon name='tago' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>教学督导</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Actions.famousteachers() }} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: 'green' }}><Icon name='customerservice' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>教学名师</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { Actions.achievement() }} style={styles.one}>
                                <View style={{ height: 70 * s, width: 70 * s, alignItems: 'center', justifyContent: 'center', borderRadius: 35 * s, backgroundColor: 'yellow' }}><Icon name='exclefile1' size={36} color="white" /></View>
                                <Text style={{ marginTop: 10 }}>教学成果</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginTop: 10 * s }}>
                            <Icon name='profile' size={26} color='#565656' />
                            <Text style={{ lineHeight: 30 * s ,color:'#565656'}}>&nbsp;&nbsp;&nbsp;精细解读</Text>
                        </View>
                        <View style={styles.jingxi}>
                            <View style={{ width: '96%', marginLeft: '2%' }}>
                                <View style={{ height: 5 }}><Text></Text></View>
                                <Text style={{ lineHeight: 23, fontSize: 15 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;河北师范大学本科教育秉承“怀天下、求真知”的校训，认真贯彻落实全国和全省教育工作会议精神以及新时代本科教育工作会议精神，始终坚持以学生为中心、立德树人，坚持以本为本、推进四个回归。经过百余年的不断求索，本科教学工作进入了一个崭新的发展阶段。学校现有21个学院95个本科专业，专业覆盖哲学、经济学、法学、教育学、文学、历史学、理学、工学、管理学、艺术学等十大学科门类，全日制本科在校生23879人。</Text>
                                <Text style={{ lineHeight: 23, fontSize: 15 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，我校高度重视本科教育，在专业建设、课程建设、学生学业发展、教师教学发展与教风建设、教师教学评价与激励、教学业绩考核、教学质量保障与监控等方面采取了系列举措，并取得了初步成效。通过实施专业准入、专业认证、专业评估等举措积极推进专业动态调整，优化专业布局，强化和促进专业内涵建设，以师范三级认证和国家专业类质量标准对标为抓手，启动了新的人才培养方案和课程大纲编写修订工作，通过正向设计反向施工，认真做好培养目标、毕业要求、课程体系及课程大纲的对标工作；继续完善大类培养和完全学分制管理，拓展通识教育；通过招生培养就业一体化联动机制，以培养社会主义建设者和接班人为目标，强化课程思政建设，加强过程考核，提高学生学习效果；通过开展在线开放课程建设与混合式教学，推动优质资源建设共享，推进课堂革命；开展本科教学奖评选与奖励，激励教师潜心教学；学校出台《河北师范大学课堂教学规范》、《河北师范大学关于教师系列基本本科教学工作量的规定》等文件，规范教学过程，提高教学质量。河北师范大学本科教育以实施“本科教学质量与教学改革工程”为契机，紧紧抓住人才培养模式改革这一关键，全面深化教育教学综合改革，人才培养质量稳步提高。近十年来，学校荣获5项国家级教学成果奖，拥有国家级人才培养模式创新实验区1个、国家级教学团队1个、国家级特色专业建设点6个、国家级专业综合改革试点项目4项，国家级精品资源共享课程6门、国家级精品视频公开课1门，国家级实验教学示范中心4个、国家级虚拟仿真实验教学项目1项，国家教学名师1人、国家“万人计划”教学名师1人、霍英东青年教师奖获得者3人、入选国家“万人计划”青年拔尖人才支持教师1人；有河北省本科教育创新高地7个、省级教学团队6个、省级品牌特色专业8个、省级专业综合改革试点项目5项，省级精品课程54门，省级精品在线建设课程12门、省级实验教学示范中心5个、省级虚拟仿真实验教学中心2个、省级虚拟仿真实验教学项目3项，省级质量教育社会实践基地3个，省级教学名师16人。</Text>
                                <Text style={{ lineHeight: 23, fontSize: 15 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为一所百余年老校，我们有责任、有义务聚焦一流本科，承担为国家社会培养“爱国、励志、求真、力行”的一流人才的时代使命。“以本为本”，回归常识、回归本分、回归初心、回归梦想，共同助力构建一流本科教育，为实现高等教育强国梦作出新的更大贡献！</Text>
                                <View style={{ height: 5 }}><Text></Text></View>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
            </ImageBackground>
        )
    }
}
let styles = StyleSheet.create({
    six: {
        width: '100%',
        marginTop: 10 * s,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: 'center',
    },
    sixOne: {
        justifyContent: 'space-around',
        height: 120,
        flexDirection: 'row',
        width: '100%',
    },
    one: {
        height: 100 * s,
        width: 80 * s,
        marginTop: 10,
        alignItems: 'center',
    },
    jingxi: {
        width: '100%',
        marginTop: 10 * s,
        backgroundColor: 'rgba(255,255,255,0.4)',
    }
})