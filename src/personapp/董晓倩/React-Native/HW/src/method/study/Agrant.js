import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class Agrant extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 60 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize:22* s }}>助学金</Text>
                </View>
                <View style={styles.box}>
                    <ScrollView>
                        <View style={styles.block}>
                            <View style={{ width: '90%', alignItems: 'center' }}>
                                <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第一章  总则`}</Text>
                            </View>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第一条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`为体现党和政府对家庭经济困难学生的关怀，帮助他们顺利完成学业，根据《河北省财政厅、教育厅关于印发〈河北省普通本科高校、高等职业学校国家助学金实施办法〉的通知》（冀财教[2017]12号）文件精神，结合学校实际，制定本办法。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第二条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`国家助学金由中央和省政府共同出资设立，用于资助我校具有中华人民共和国国籍的全日制本专科学生（以下简称学生）中的家庭经济困难学生。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第三条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`学校按照省财政厅、教育厅分配给我校的国家助学金名额，依据学生人数和院（系）实际情况，分配各学院受助名额。`}</Text>
                            <View style={{ width: '90%', alignItems: 'center', marginTop: '5%' }}>
                                <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第二章  资助标准与申请条件`}</Text>
                            </View>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第四条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`国家助学金主要资助家庭经济困难学生的生活费用开支，资助标准分为3档。1档为每生每年2000元，资助对象为一般困难学生；2档为每生每年3000元，资助对象为困难学生；3档为每生每年4000元，资助对象为特别困难学生。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第五条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`国家助学金的申请条件：`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`（一）热爱社会主义祖国，拥护中国共产党的领导；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`（二）遵守宪法和法律，遵守学校规章制度；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`（三）诚实守信，道德品质优良；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`（四）勤奋学习，积极上进；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`（五）家庭经济困难，生活俭朴。`}</Text>
                            <View style={{ width: '90%', alignItems: 'center', marginTop: '5%' }}>
                                <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第三章  申请与评审`}</Text>
                            </View>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第六条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`国家助学金每学年评审一次，坚持公开、公平、公正的原则。同一学年内，申请并获得国家助学金的学生，可同时申请并获得各种奖学金。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第七条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`学生根据本办法规定的国家助学金申请条件，填写《普通本科高校、高等职业学校国家助学金申请表》（附件），交年级（班级）评定小组。评定小组由辅导员、学生干部代表和普通学生代表5-7人组成，其中普通学生代表不得少于小组成员中学生人数的1/2。评定小组在广泛听取学生意见的基础上严格按照评选条件进行评选推荐，推荐结果报学院学生工作领导小组。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第八条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`学院学生工作领导小组确定推荐结果，并将推荐结果在学院公示至少3个工作日，公示无异议后报学生处。学生处对学生情况和学院意见进行审核，报学校学生资助工作领导小组审批。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第九条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`对国家助学金评审结果有异议的学生，可在公示期向所在学院学生工作领导小组提出申诉，学院学生工作领导小组应及时研究并予以答复。如对答复仍有异议，可向学生处提请复议。`}</Text>
                            <View style={{ width: '90%', alignItems: 'center', marginTop: '5%' }}>
                                <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第四章  发放与管理`}</Text>
                            </View>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第十条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`待资金拨付后，学校按学期将国家助学金拨付到受助学生银行卡中。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第十一条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`各单位要切实加强管理，认真做好国家助学金的评审和发放工作，确保国家助学金真正用于资助家庭经济困难学生。`}</Text>
                            <View style={{ width: '90%', alignItems: 'center', marginTop: '5%' }}>
                                <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第五章  附则`}</Text>
                            </View>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第十二条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`本办法由学生处负责解释。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第十三条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`本办法自印发之日起施行，《河北师范大学本专科生国家助学金实施办法（暂行）》（校学字[2017]4号）同时废止。`}</Text>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginBottom:'20%'

    },
    block: {
        width: '80%',
        marginTop: '7%',
        margin: '10%',
    },
    word: {
        fontSize: 18
    }
});