import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadEleven extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[C] ',
                content2: '【解析】事实细节题。根据文中第2段第3、4句的具体说明以及第3段末句的概括说明“我将成为一个完整的工程师：集理性的技术天才和感性的人文学者于一体。”可知C正确。',
                content3: '2. 【答案】[A]',
                content4: '【解析】事实推理题。由文章第2段第4句“我想通过与非理工科的同学的相互交往来开阔我的视野”，可推断出A正确。其他均无原文依据或断章取义。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】事实推理题。第3段最后一句说，“我将成为一个完整的工程师：集技术天才和人文学者于一体”，B“成为视野宽阔的技术天才”与原文相符，故选B。A、C、D均无原文支持或断章取义。',
                content7: '4. 【答案】[D]',
                content8: '【解析】事实推理题。根据第4段第2句“我的崇髙理想与现实发生了冲突”，以及下文对于作者在协调文理科之间的困难可知，原文的想法是不现实的，故可推断D正确。',
                content9: '5. 【答案】[B]',
                content10: '【解析】词义理解题。they—般指代前一句话中的复数名词,根据最后一段的第1、2句“…engineering and the liberal arts simply don’t mix as easily…together they threaten to confuse”可以推断，they指的是engineering and the liberal arts。',
                
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
                            &emsp;&emsp;{`Engineering students are supposed to be examples of practicality and rationality， but when it comes to mycollege education I am an idealist and a fool. In high school I wanted to be an electrical engineer and, of course,any sensible student with my aims would have chosen a college with a large engineering department，famous reputation and lots of good labs and research equipment. But that‘s not what I did.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`I chose to study engineering at a small liberal-arts(文科)university that doesn‘t even offer a major in electrical engineering. Obviously, this was not a practical choice; I came here for more noble reasons. I wanted a broad education that would provide me with flexibility and a value system to guide me in my career.I wanted to open my eyes and expand my vision by interacting with people who weren’t studying science orengineering. My parents, teachers and other adults praised me for such a sensible choice. They told me I was wise and mature beyond my 18 years,and I believed them.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`I headed off to college sure I was going to have an advantage over those students who went to big engineering “factories” where they didn‘t care if you have values or were flexible. I was going to be a complete engineer: technical genius and sensitive humanist(人文学者)all in one.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Now I‘m not so sure. Somewhere along the way my noble ideals crashed into reality, as all noble ideals eventually do. After three years of struggling to balance math, physics and engineering courses with liberal-arts courses,I have learned there are reasons why few engineering students try to reconcile(协调) engineering with liberal-arts courses in college.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The reality that has blocked my path to become the typical successful student is that engineering and the liberal arts simply don’t mix as easily as I assumed in high school. Individually they shape a person in very different ways; together they threaten to confuse. The struggle to reconcile the two fields of study is difficult.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The author chose to study engineering at a small liberal-arts university because he ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. intended to be a combination of engineer and humanist
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.wanted to be an example of practicality and rationality
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.intended to be a sensible student with noble ideals
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.wanted to coordinate engineering with liberal-arts courses in college
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.According to the author，by interacting with people who study liberal arts， engineering students can ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.broaden their horizons
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.become noble idealists
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.receive guidance in their careers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. balance engineering and the liberal arts
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3. In the eyes of the author，a successful engineering student is expected ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. to be imaginative with a value system to guide him
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.to be a technical genius with a wide vision
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.to have an excellent academic record
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.to be wise and mature
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The author‘s experience shows that he was ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.creative
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.irrational
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.ambitious
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Unrealistic
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The word“they”in“together they threaten to confuse.”(Line 3，Para. 5) refers to ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. practicality and rationality·
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.engineering and the liberal arts
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.reality and noble ideals
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.flexibility and a value system
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