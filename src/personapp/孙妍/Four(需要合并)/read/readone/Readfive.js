import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Readfive extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[D] ',
                content2: '【解析】词义理解题。本句说到公司要在地球村和全球市场上竞争，多样性是imperative，由前文“没有取消引起多样性的手段”和下文提到的公司对各种各样有技能的美国人的需求可知，多样性对于企业来说应该“必需的”故D正确。',
                content3: '2. 【答案】[B]',
                content4: '【解析】事实细节题。第2段末句指出这种辩论主要存在于政治圈和媒体中，结合上句内容，可知其中的this debate指的就是关于多样性的辩论，故B正确。',
                content5: '3. 【答案】[C] ',
                content6: '【解析】事实细节题。由第1段第4句可知，公司高层领导人促进多样化的原因是想要在全球市场上更具竞争力，C与此相符。',
                content7: '4. 【答案】[A]',
                content8: '【解析】推理判断题。第2段中提到有些人认为在没有多样性的过去照样能做到不拘—格选人才，但作者马上which was never true否定此观点，故A正确。第2段只提到多样性的辩论存在于政治圈和媒体，但并不代 表在这两个圈子里不能接受或从未出现多样性，故排除B、C;D说法过于绝对,且在文中找不到依据，也可排除。',
                content9: '5. 【答案】[D]',
                content10: '【解析】 推理判断埋。由第1段倒数第2句可知企业expand the pool就意味着向more minorities，more women 和 more immigrants提供技能培训，而expand the pool对应的就是题干中的说的多样性的形成，D中的race 和sex分别对文中minorities和women，故正确。A泛泛而谈，没有说到点子上，不如D具体、准确;B与多样性没有关系，C是利用文中的有关职业的词拼凑而成的干扰项。',
                
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
                            &emsp;&emsp;{`It’s very interesting to note where the debate about diversity(多样化) is taking place. It is taking place primarily in political circles. Here at the College Fund, we have a lot of contact with top corporate(公司的) leaders; none of them is talking about getting rid of those instruments that produce diversity. In fact, they say that if their companies are to compete in the global village and in the global market place,diversity. In fact, they say that if their companies are to compete in the global village and in the global market place, diversity is an imperative. They also say that the need for talented, skilled Americans means we have to expand the pool of potential employees. And in looking at where birth rates are growing andat where the population is shifting, corporate America understands that expanding the pool means promotingpolicies that help provide skills to more minorities, more women and more immigrants. Corporate leaders know that if that does not occur in our society, they will not have the engineers, the scientists, the lawyers, or the business managers they will need.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Likewise, I don’t hear people in the academy saying.”Let’s go backward. Let’s go back to the good old days, when we had a meritocracy(不拘一格选人才)” (which was never true-we never had a meritocracy, although we’ve come closer to it in the last 30 years.) I recently visited a great little college in New York where the campus has doubled its minority population in the last six years. I talked with an African American who has been a professor there for a long time, and she remembers that when she first joined the community, there were fewer than a handful of minorities on campus. Now, all of us feel the university is betterbecause corporate board rooms or on college campuses.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The word”imperative”(Line5,Para.1) most probably refers to something _____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Superficial
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.remarkable
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.debatable
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.essential
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.Which of the following groups of people still differ in their views on diversity?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Minorities.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Politicians.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Professors.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Managers.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.High corporate leaders seem to be in favor of promoting diversity so as to ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.lower the rate of unemployment
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.win equal political rights for minorities
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.be competitive in the world market
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.satisfy the demands of a growing population
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.It can be inferred from the passage that _____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.meritocracy can never be realized without diversity
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.American political circles will not accept diversity
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. it is unlikely that diversity will occur in the U.S. Media
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.minorities can only enter the fields were no debate is heard about diversity
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.According to the passage diversity can be achieved in American society by ____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.expanding the pool of potential employees
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. promoting policies that provide skills to employees
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. training more engineers, scientists lawyers and business managers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. providing education for all regardless of race or sex
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