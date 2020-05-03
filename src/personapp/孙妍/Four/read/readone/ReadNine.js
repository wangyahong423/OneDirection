import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadNine extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[D] ',
                content2: '【解析】主旨大意题。本文为Walker教授的研究成果，旨在说明不同专业的毕业生有不同的经济回报，并非要传授发财心得或者比较文理科的异同。文章首句即为本题解题关键，故D正确。',
                content3: '2. 【答案】[B]',
                content4: '【解析】事实细节题。定位至第3段第1句。本文只有这一句与收取学费有关，后一个分句即前一个分句的理由，抓住其中隐含的因果关系就不难找到正确答案。',
                content5: '3. 【答案】[C] ',
                content6: '【解析】词义理解题。通过下文数据earnings 25% higher和get 10-15% extra可以推测lucrative大意应为“给人带来丰厚收入的”,故选C。',
                content7: '4. 【答案】[C]',
                content8: '【解析】事实细节题。第4段中出现了几个比较数字，考题要求找到此段首句提到的收人增加25%的参照点。第2段第1句中的Getting through university 表明这类学生收人增加25%的参照对象是没读大学的人，且从第4段第3句中的the list和第4句即可以确定这一段是在比较大学毕业与18岁毕业(即没读大学)收入的不同，因此C正确。',
                content9: '5. 【答案】[D]',
                content10: '【解析】推理判断题。结论往往出现在文章结尾,要想答对此题,一定要仔细体会本文末句。本文虽然重点讨论文科没有经济效益，但是作者并没有做出主观判断，故A、B、C都不正确，而作者在文章最后讲到了人文学科虽然经济效益不佳但学习过程更有趣，故D符合作者意思。',
                
            }]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content10}</Text>
                
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Normally a student must attend a certain number of courses in order to graduate, and each course which he attends gives him a credit which he may count towards a degree,In many American universities the total work for a degree consists of thirty-six courses each lasting for one semester. A typical course consists of three classes per week for fifteen weeks;while attending a university a student will probably attend four or five courses during each semester. Normally a student. Would expect to take four years attending two semesters each year. It is possible to spread the period of work for the degree over a longer period. It is also possible for a student to move between one university and another during his degree course,though this is not in fact done as a regular practice.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`For very course that the follows a student is given a grade,which is recorded, and the record is availablefor the student to show to prospective employers.All this imposes a constant pressure and strain of work,but in spite of this some students still find time for great activity in student affairs.Elections to positions in student organizations arouse much enthusiasm.The effective work of maintaining discipline is usually performed by students who advise the academic authorities.Any student who is thought to have broken therules,for example,by cheating his to appear before a student court.With the enormous numbers of students, the operation of the system does involve a certain amount of activity.A student who has held one of these positions of authority is much respected and it will be of benefit to him later in his career.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.Normally a student would at least attend ______ classes each week.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.36
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.20
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.12
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.15
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.According to the first paragraph an American student is allowed ______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.to live in a different university
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. to live at home and drive to classes
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. to take a particular course in a different university
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.to get two degrees from two different universities
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3..America university students are usually under pressure of work because__________
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.they have to observe university discipline
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.they are heavily involved in student affairs
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.their academic performance will affect their future careers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.they want to run for positions of authority
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.Some students are enthusiastic for positions in student organizations probably because______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.such positions help them get better jobs
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.they hate the constant pressure and strain of their study
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.they will then be able to stay longer in the university
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. such positions are usually well paid
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The student organizations seem to be effective in ___________
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.ensuring that the students observe university regulations
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.dealing with the academic affairs of the university
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.evaluating students’ performance by bringing them before a court
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.keeping up the students’ enthusiasm for social activities
                        </Text>
                    </View>
                </View>
                <Accordion
                    sections={this.state.todo}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: '#37376F',
        borderBottomWidth: 1 * s,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft:'40%',
        marginBottom:20*s
    },
    headerText: {
        fontSize: 16,
        color: '#fff'
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})