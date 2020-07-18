import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadTen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[D] ',
                content2: '【解析】 文章首句提到，如同美味的食物,我们可以从好的作品中获得乐趣和享受，D与之相符，故为答案。',
                content3: '2. 【答案】[D]',
                content4: '【解析】原文第2段首句提到，这种public scribe会帮你写商业文件或社会交流文章，但他们也会收费的，D与之相符A中的secretary应该是不收贵的，故排除;D中的machine与文中的remote places不相符，故也可排除。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】文章第2段第2句提到，个别幸运的经理只需写下简便的笔记,其秘书就会写好所有的信件，因此B为答案。',
                content7: '4. 【答案】[C]',
                content8: '【解析】文章第3段倒数第2句的大意是：我们希望自己写的东西能被人从头到尾地读，能不被扔进“letters-to-be read” file,且根据下文的a wastepaper basket可推测这里说的是希望自己写的东西不被忽视，故本题应选C。',
                content9: '5. 【答案】[A]',
                content10: '【解析】由文章的结尾的this is the reason，知道作者有“解释”的目的，同时他说“我们要尽最大的努力学习和练习有趣、有效地写作的技巧”，可知有persuade(说服)的目的,故选A。',
                
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
                            &emsp;&emsp;{`　Like fine food, good writing is something we approach with pleasure and enjoy from the first taste to the last. And good writers, like good cooks, do not suddenly appear full-blown. Quite the opposite, just as the cook has to undergo a particular training, mastering the skills of his trade, the writer must sit at hisdesk and devote long hours to achieving a style in his writing, whatever its purpose is—schoolwork, matters of business, or purely social communication.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`You may be sure that the more painstaking the effort, the more effective the writing, and the more rewarding.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　There are still some faraway places in the world where you might find a public scribe to do your business or social writing for you, for money. There are a few managers who are lucky enough to have the service ofthat rare kind of secretary who can take care of all sorts of letter writing with no more than a quick note to work from. But for most of us, if there is any writing to be done, we have to do it ourselves.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`We have to write school papers, business papers or home papers. We are constantly called on to put words to papers. It would be difficult to count the number of such words, messages, letters, and reports put intomails or delivered by hand, but the daily figures must be extremely large. What is more, everyone who writes expects, or at least hopes whatever he writes will be read, from first word to last, not just thrown into some “letters-to-be-read” files or into a wastepaper basket. This is the reason we bend our efforts toward learning and practicing the skills of interesting, effective writing.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.In this passage, good writing is compared to fine food in that _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. both writers and cooks have to work a long time every day
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.both are essential to life
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. both are writers and cooks can earn a good living
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. both are enjoyable
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.A public "scribe" (Para 2, Line 1) is _____.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.a secretary who does your business or social writing
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. a machine that does writing for you
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. a public school where writing is taught
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. a person who ears a living by writing for others
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.According to the passage, some managers don't have to do any letter writing because _____.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. they rely on quick notes
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. they have excellent secretaries 
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.they have a computer to do it
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.they prefer making phone calls
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4. According to the author, if your letter is thrown into some "letter-to-be-read" file, ______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. it will receive immediate attention
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. it will be dealt with by the secretary
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.it is likely to be neglected
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. it is meant to be delivered soon
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The purpose of the author in writing this passage is _____.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. to explain and persuade
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.to comment and criticize
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. to interest and entertain
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.to argue and demonstrate
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