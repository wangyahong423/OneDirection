import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadFifteen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[C] ',
                content2: '【解析】 第1段第3句说的是题干内容，由第4句Soon…句中的five knives...等数字可知孩子会数数了,故可直接选出C。',
                content3: '2. 【答案】[B]',
                content4: '【解析】第2段第3句中they refused... to concede...中的they指children,对比题干与原文意思可知孩子们是“难以相信(理解)，故选B。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】第2段倒数第3句。文章是以pencils为例进行说明的，题目中换成了balls,但是目的是相同的，都是为了表述儿童更愿意根据颜色的不同来数数，而不愿数总数，故B正确。A、D都没有提到;C的说法过于绝对，与文章表述也不相符。',
                content7: '4. 【答案】[B]',
                content8: '【解析】这道题目需要认真理解了文章的意思才能正确作答。第1段的主题是:有些数字概念是人天生就有的;第2段的主题是:有一些是后天学习获得的。B是第1段中明确给出的例子，因此这个例子应该支持该段的主题。A 错误地理解了第1段最后举的例子。C和D在第2段最后提到,都不是先天获取的数学知识。',
                content9: '5. 【答案】[D]',
                content10: '【解析】考査全文的观点态度。纵观全文可知，作者很客观、如实地说明事实，分两段报告了心理学家的研究结果，并未做出任何评价，故D正确。题目中的children’s numerical skills即全文的主题。',
                
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
                            &emsp;&emsp;{`people appear to born to compute. The numerical skills of children develop so early and so inexorably(坚定地) that it is easy to imagine an internal clock of mathematical maturity guiding their growth. Not long after learning to walk and talk, they can set the table with impress accuracy---one knife, one spoon, one fork, for each of the five chairs. Soon they are capable of nothing that they have placed five knives, spoons and forks on the table and, a bit later, that this amounts to fifteen pieces of silverware. Having thusmastered addition, they move on to subtraction. It seems almost reasonable to expect that if a child were secluded on a desert island at birth and retrieved seven years later, he or she could enter a second entera second-grade mathematics class without any serious problems of intellectual adjustment.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Of course, the truth is not so simple. This century, the work of cognitive psychologists has illuminated the subtle forms of daily learning on which intellectual progress depends. Children were observed as they slowly grasped----or, as the case might be, bumped into---- concepts that adults take for quantity is unchanged as water pours from a short glass into a tall thin one. Psychologists have since demonstrated that young children, asked to count the pencils in a pile, readily report the number of blue or red pencils, but must be coaxed(说服) into finding the total. Such studies have suggested that the rudiments(基本原理) of mathematics are mastered gradually, and with effort. They have also suggested that the very concept of abstract numbers-----the idea of a oneness, a twoness, a twoness that applies to any class of objects and is aprerequisite(先决条件) for doing anything more mathematically demanding than setting a table----is itself far from innate.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.After children have helped to set the table with impressive accuracy, they ______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.are able to help parents serve dishes
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.tend to do more complicated housework
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.are able to figure out the total pieces
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.can enter a second-grade mathematics class
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.It is _____to believe that the quality of water keeps unchanged when it is contained in two different glasses.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.easy to persuade children
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.hard for most children
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.the innate of most children
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.difficult for both adults and children
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.It can be inferred from the passage that children are likely to _____when they are asked to count all the balls of different colors
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.give the accurate answer
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.count the balls of each color
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.be too confused to do anything
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.make minor mistakes
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.According to this passage,_____is mastered by birth.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.the ability to survive in a desert island
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.the way of setting tables
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.the basic principles of mathematics
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.the concept of oneness
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.What’s the author‘s attitude towards “children’s numerical skills”?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Critical.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Approving.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Questioning.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Objective.
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