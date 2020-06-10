import React, { Component } from 'react'
import { Text, View, SectionList, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Entypo';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Govern extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 60 * s,  flexDirection: "row", alignItems: "center" ,justifyContent:"center"}}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                            <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20*s}}>治理架构</Text>
                </View>
                <View>
                    <SectionList
                        renderItem={({ item, index, section }) => <Text style={styles.txt} key={index}>{item}</Text>}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.title}>{title}</Text>
                        )}
                        sections={[
                            { title: "现任领导", data: ["党委书记                          戴建兵", "党委副书记、校长          刘敬泽", "党委副书记                      刘士欢", "党委副书记                      霍丙泉", "党委常委、副校长          郑振峰", "党委常委、纪委书记      杨士彬", "党委常委、副校长          武志英", "党委常委、副校长          关守义", "党委常委、副校长          刘    英", "副校长                              郭    毅"] },
                            { title: "中共河北师范大学第八届委员会", data: ["委    员：（按姓氏笔画为序）", "于海涛     史秉强     付建军     刘    英     刘敬泽", "闫东利     关守义     苏玉民     杨士彬     张士欢", "陈小雷     陈嘉兴     邵军永     武志英     郑振峰", "赵小兰     胡景敏     樊翠英     霍丙泉     戴建兵"] },
                            { title: "中共河北师范大学第八届纪律检查委员会", data: ["委    员：（按姓氏笔画为序）", "于华龙     习永凯     王新平     李双进     李庆祥", "杨    轶     杨士彬     杨彦辉     周春江     赵德勇", "魏世亮"] },
                            { title: "河北师范大学学术委员会", data: ["主    任：龚贵华", "副主任：郑振峰     程志华", "主    任：赵宝华     杨    瑞", "委    员：", "张继良     张志杰     邢建昌     贾丽英     郭小丽", "王福明     张学文     纪    奎     安    忠     曾艳丽", "汤文强     路    紫     赵焕彬     赵书良     武金玲", "刘毅玮     张志永     田宝军", "（二零一九年六月二十七日）"] },
                            { title: "河北师范大学第十届学位评定委员会", data: ["主    席：刘敬泽", "副主席：郑振峰     郭    毅", "秘书长：周春江", "委    员：（按音序排列）", "白彦魁     常彦忠     陈嘉兴     韩启超     贾丽英", "姜文振     蒋锋春     靳慧龙     李春晖     李仁杰    ", "李素霞     刘    森     刘毅玮     马    剑     南    方", "王福明     苑立平     曾艳丽     曾智安     张广兴", "张志杰     赵书良     赵小兰    ", "（二零一九年九月二十六日）"] },
                            { title: "河北师范大学教学委员会", data: ["主    任：郭    毅", "副主任：米据生     陈嘉兴", "秘书长：陈嘉兴", "委    员：（按音序排列）", "马    剑     王向鹏     王宪峰     王润兰     白    玫", "白彦魁     李仁杰     李春晖     李艳灵     李素霞    ", "李    冀     张广兴     张    晖     武明星     苑立平", "周春江     赵小兰     赵英俊     南    方     姜文振", "徐书景     高立中     郭瑞强     常彦忠     崔    强", "曾智安     靳慧龙     潘新民", "（二零一九年七月十日）"] },
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
            </ImageBackground>
        )
    }
}
let styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        height: 40 * s,
        width: '100%',
        textAlign: 'left',
        paddingLeft: '5%',
        lineHeight: 40 * s,
        backgroundColor: '#fff',
        fontSize: 18
    },
    txt: {
        fontSize: 16,
        marginLeft: '12%',
        lineHeight: 25,
        marginBottom: 10 * s
    }
})