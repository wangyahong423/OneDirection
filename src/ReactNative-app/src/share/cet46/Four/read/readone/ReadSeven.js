import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadSeven extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[C] ',
                content2: '【解析】语义理解题。该短语所在句子的上文(第1段最后一句)表明“孩子的课余时间比以前少了”,而本句指出父母和孩子都受time crunch的影响，可见the same time crunch是指空闲时间不够用，故C正确。',
                content3: '2. 【答案】[B]',
                content4: '【解析】 观点态度题。第2段第2句中括号里的内容表明了作者的观点。转折词Nevertheless说明作者的观点跟上文Sandra Hofferth的看法不完全一致，而作者在下文举例中提到，单身母亲因为要上班，与孩子在起的时间只有9个小时，确实少了很多，这与Hofferth所述一致，因此选B。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】 事实细节题。第3段最后一句表明孩子自由玩乐能促使他们独立思考，并使他们学会处理与同龄关系，其中unstructured play 相当于B中的play in his own way，故B正确。',
                content7: '4. 【答案】[A]',
                content8: '【解析】观点态度题。文章一开头作者就说孩子们比1981年时上学的时间每周多8小时，他们还做更多的家务,参加更多的有组织性的活动等等,而这些均是造成孩子们空闲时间越来越少的原因，而孩子们空闲时间少也正是作者忧虑的问题，故可推知本题选A。B是作者在第2段括号里反驳过的观点;C错在more and more time，而且作者对孩子看电视也不完全反对;孩子们事实上要做更多家务，故D错。',
                content9: '5. 【答案】[D]',
                content10: '【解析】推理判断题。文章最后一段倒数第2句说“尽管父母费尽心思培养孩子的读书兴趣，可孩子们一周也只不过花一个多小时读书”。由此可见,父母认为读书对孩子有好处，即D。A中的extracurricular activities包含 structured and unstructured activities，文中只说unstructured activities有助于培养孩子独立思考以及与同龄人交往的能力，没有说structured activities对intelligence有什么帮助;B与文章的倒数第3句不符;C与倒数第2句不符。',
                
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
                            &emsp;&emsp;{`On average, American kids ages 3 to 12 spent 29 hours a week in school, eight hours more that they did in 1981. They also did more household work and participated in more of such organized activities as soccer and ballet (芭蕾舞). Involvement in sports, in particular, rose almost 50% from 1981 to 1997: boys now spendan average of four hours a week playing sports; girls log hall that time. All in all, however, children’sleisure time dropped from 40% of the day in 1981 to 25%`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　“Children are affected by the same time crunch (危机) that affects their parents,” says Sandra Hofferth,who headed the recent study of children’s timetable. A chief reason, she says, is that more mothers are working outside the home. (Nevertheless, children in both double-income and “male breadwinner” householdsspent comparable amounts of time interacting with their parents 19 hours and 22 hours respectively. In contrast, children spent only 9 hours with their single mothers.)`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`All work and no play could make for some very messed-up kids. “Play is the most powerful way a child explores the world and learns about himself,” says T. Berry Brazelton, professor at Harvard Medical School Unstructured play encourages independent thinking and allows the young to negotiate their relationships withtheir peers, but kids ages 3 to 12 spent only 12 hours a week engaged in it.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The children sampled spent a quarter of their rapidly decreasing “free time” watching television. But that, believe it or not, was one of the findings parents might regard as good news. If they’re spending less time in front of the TV set, however, kids aren’t replacing it with reading. Despite efforts to get kids more interested in books, the children spent just over an hour a week reading. Let’s face it, who’s got the time?`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1. By mentioning “the same time crunch” (Line 1, Para. 2) Sandra Hofferth means ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.children have little time to play with their parents
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.children are not taken good care of by their working parents
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.both parents and children suffer from lack of leisure time
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.both parents and children have trouble managing their time
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2. According to the author, the reason given by Sandra Hofferth for the time crunch is ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.quite convincing
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.partially true
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. totally groundless
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.rather confusing
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.According to the author a child develops better if ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.he has plenty of time reading and studying
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.he is left to play with his peers in his own way
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.he has more time participating in school activities
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.he is free to interact with his working parents
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The author is concerned about the fact that American kids ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.are engaged in more and more structured activities
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. are increasingly neglected by their working mothers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.are spending more and more time watching TV
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.are involved less and less in household work
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.We can infer from the passage that ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.extracurricular activities promote children’s intelligence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.most children will turn to reading with TV sets switched off
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.efforts to get kids interested in reading have been fruitful
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.most parents believe reading to be beneficial to children
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