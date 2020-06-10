import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Scholarship extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 60 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>奖学金</Text>
                </View>
                <View style={styles.box}>
                    <ScrollView>
                        <View style={styles.block}>
                            <Text style={styles.word}>&emsp;&emsp;{`为了激励广大学生奋发向上，刻苦学习，充分调动学生学习的积极性和主动性，根据国家教育部、财政部有关规定制定。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第一条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`本办法适用于我校在籍的全日制本、专科学生`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第二条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`奖学金分一、二、三等，奖金分别为2000元、1000元、500元。一等奖学金按学生总人数的5%评定；二等奖学金按学生总人数的10%评定；三等奖学金按学生总人数的25%评定。设单项奖，奖金额度为300元，单项奖按学生总数的5%评定。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第三条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`学生从第二学年开始每学年以学生年级（班级）为单位进行奖学金评定。年级（班级）奖学金评定小组由辅导员、学生干部代表和普通学生代表5-7人组成，其中普通学生代表不得少于小组成员中学生人数的1/2。评选结果经学院领导小组审核并签署意见后，交学生处审核，报主管校长审批`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第四条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`获得奖学金的同学，学校同时发给荣誉证书，并填写学生奖学金登记表，存入学生本人档案`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第五条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`同一学年内，获得学校奖学金（单项奖除外）的学生不能同时获得其他类别的奖学金，但家庭经济困难的学生可以同时申请并获得各种级别的助学金。获得学校奖学金的学生可以同时获得校、院级三好学生，但奖金不重复发放，取最高项。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第六条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`奖学金评选的基本条件：`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、坚持四项基本原则，努力学习社会主义理论，关心时事政治，积极参加政治学习，团结同学，尊敬师长，自觉遵守国家法律、法规和学校规章制度，拥护党的路线、方针、政策，思想品德品质良好`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、学习目的明确，学习态度端正，热爱所学专业，学习努力，较好地掌握了所学基础理论和知识，有一定分析、解决问题的能力。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、积极参加学校、学院组织的活动，热心公益事业。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`4、积极参加体育锻炼，身体健康，体育成绩合格。`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`5、一、二、三等奖学金获得者按学业成绩（公公必修课程和专业必修、选修课程成绩）平均学分绩排名产生。单项奖奖励在思想品德、劳动卫生、科研创新、文体活动、社会实践、职业素质、顶岗支教方面能力突出、有较大贡献的学生，由年级（班级）奖学金评定小组评选产生。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第七条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`凡有以下情况之一者，一年内取消一、二、三等奖的评定资格，已发奖学金的予以收回：`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`1、体育成绩不达标者；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`2、学年内有两门（含两门）以上考试不及格者；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`3、受到学校通报（含通报）以上批评及各种处分者；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`4、无故欠缴学费者；`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`5、有不良诚信记录者。`}</Text>
                            <Text style={[styles.word, { color: 'red' }]}>&emsp;&emsp;{`第八条`}</Text>
                            <Text style={styles.word}>&emsp;&emsp;{`本办法由学生工作部负责解释，自印发之日起施行`}</Text>
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
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    block: {
        width: '80%',
        marginTop: '7%',
        margin: '10%',
        // alignItems: 'center'
    },
    word: {
        fontSize: 18
    }
});