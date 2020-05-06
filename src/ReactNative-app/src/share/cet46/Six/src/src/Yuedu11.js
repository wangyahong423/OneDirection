import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu11 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[D] 事实细节题。根据题干定位第2段第2、3句。这两句之间存在隐含的因果关系，第2句是因，第3句是果。只有选项D在第2句提到其他选项均未提及。',
                content3: '2.[B] 推理判断题。本文开头的例子所支持的现点在第3段第1句，同时结合suicide，此题答案为B。选项A、D的观点有误,选项C与本文的写作目的无关。',
                content5: '3.[B] 事实细节题。第2段第3句中的malpractice和第4句中的虚拟语气说明，她认为学校没有对她的自杀企图采取足够的防范措施，故选B。选项A最具干扰性，但第3句说明学校关注过她的问题，只是关注不够，因此选项A过于绝对。选项C中的academic instructions和D中的physical disease属于与文章无关的信息。',
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
                            &emsp;&emsp;{`Thoughts of suicide haunted Anita Rutnam long before she arrived at Syracuse University. She had a historyof mental illness and had even attempted to kill herself. During her junior year of college, she tried again. On a February morning in 1998, just days after a campus counselor recommended she be hospitalized for her suicidal tendencies, Rutnam threw herself off the eighth floor of a Syracuse dormitory.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Miraculously, she survived. But three years later, Rutnam still feels the effects of that day. She has notbeen able to finish college and is suing her former school for malpractice. Her suit asserts that, given the campus counselor's advice, school officials should have done more to prevent her suicide attempt.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`This incident and others have thrown a spotlight on an issue that is causing growing concern in dorm roomsand students center. Are colleges providing adequate care for students who may be struggling with a range of mental illnesses? In the Syracuse cases, a spokesman for the school contends, "The University tried repeatedly to help Anita, and we felt that they acted appropriately." But lawyers are busy there and elsewhere.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`After accidents, suicide is the second biggest killer of kids in college. And while the number of studentswho kill themselves on campus is no higher than that of 18-to-24-year-olds in the general population, a series of sensational incidents has raised the question of whether troubled students are getting proper attention.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`So what are the schools' responsibilities to at-risk students, particularly those who may be genetically predisposed (易患……病的)to mental illness? College can be a breeding ground for Psychiatric problems. Poor eating habits and irregular sleeping patterns-especially combined with the academic stress of college life -may all play roles in triggering mental problems. Additionally, many of the major psychiatric illnesses including depression often do not manifest themselves until the late teens or early 20s.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. Anita Rutnam couldn't finish college most probably because_____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. she couldn't get enough concern from Syracuse University
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. she wasn't physically healthy enough to continue schooling
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. she still kept thinking about killing herself whenever at school
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. she has been troubled by the memory of the incident very often
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. What does the author want us to know through Anita Rutnam's story?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. The universities are not responsible for their students.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. Suicides are popular on college campus and should be handled properly.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. Why Anita committed suicide is still a mystery.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. Universities should get prepared in case their students sue them.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. What does Anita accuse her former school of?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. Ignorance of her abnormal behaviors.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. Lack of safeguard against her suicidal intention.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. Failure to give her proper academic instructions.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. Indifference to her physical disease.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. How does Syracuse University defend itself against Anita's suit?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. It has given her due attention as well as help.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. Adult students should be able to control their own behavior.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. It is more than the school's responsibility to supervise the students.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. Colleges can be a breeding ground for psychiatric problems.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. All the following problems are implied as possible causes of campus suicide incidents EXCEPT _____.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. poor academic results
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. failing to get proper sleep
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. lack of family concern
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. family history of mental illness
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