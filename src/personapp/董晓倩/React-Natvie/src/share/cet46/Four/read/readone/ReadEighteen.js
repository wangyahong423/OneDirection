import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadEighteen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[C] ',
                content2: '【解析】推理判断题。本题考查隐含的因果关系。第1段破折号后面的内容为隐含的原因，由此可见C为本题正确选项A没有原文依据，选项B与结论并无合理的因果关系，选项D对原文有曲解，原文是说这个问题使作者想起了年轻时候的往事，而并不是选项D中说的leam from the question。',
                content3: '2. 【答案】[D]',
                content4: '【解析】事实细节题。本题考查复合句的理解。第2段首句中 do the very best we can 与第2句We know…it’s our challenge表明选项D为本题正确答案。本题最具干扰性的是选项C，其中的challenge在第2句明确提到，但是此处的challenge不是指挑战生活，而是指本句第一个分句中提到的“让所有事情完美”。',
                content5: '3. 【答案】[A] ',
                content6: '【解析】主旨大意题。本段第1句是主题句,理解这个同位语从句是关键,只有选项A表达了这一句的意思。要注意其中surrender的宾语是the fact that life isn’t fair,而不是life,这样就可以否定最具干扰性的B选项了。',
                content7: '4. 【答案】[B]',
                content8: '【解析】词义推断题。本题考查this所指的理解。最后一段倒数第2句中,this very basic fact指的是本句的从句中的the injustices of the world,另外，短语the fact that life isn’t fair在文中反复出现，是本文的主题，因此结合上下文可以推出答案。其余三项虽然在文中均有提及,但只是个别细节,并非作者反复强调的中心话题。',
                content9: '5. 【答案】[A]',
                content10: '【解析】观点态度题。作者批评了自怜的情绪,提出对他人要有同情心,强调承认生活不公平并不是向生活妥协,而是将我们从自我怜悯中摆脱出来，采取一些有积极意义的行动，由此可见，作者对生活的态度是积极的，即选项A。',
                
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
                            &emsp;&emsp;{`　A friend of mine, in response to a conversation we were having about the injustices of life, asked me the question, “Who said life was going to be fair, or that it was even meant to be fair?” Her question was agood one. It reminded me of something I was taught as a youngster: life isn’t fair. It’s a disappointment, but it’s absolutely true. One of the mistakes many of us make is that we feel sorry for ourselves, or for others, thinking that life should be fair, or that someday it will be. It’s not and it won’t be.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`One of the nice things about surrendering to the fact that life isn’t fair is that it keeps us from feeling sorry for ourselves by encouraging us to do the very best we can with what we have. We know it’s not “life’s job”to make everything perfect: it’s our own challenge. Surrendering to this fact also keeps us from feeling sorry for others because we are reminded that everyone is dealt a different hand; everyone has unique strengths and problems in the process of growing up, facing the reality and making decisions; and everyone has those times that they feel unfairly treated.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The fact that life isn’t fair doesn’t mean we shouldn’t do everything in our power to improve our own lives or the world as a whole. To the contrary, it suggests that we should. When we don’t recognize or admit that life isn’t fair, we tend to feel pity for others and for ourselves. Pity, of course, is a self-defeating emotion that does nothing for anyone, except to make everyone feel worse than they already do. When we do recognize that life isn’t fair, however, we feel compassion for others and for ourselves. And compassion is a heartfelt emotion that delivers loving-kindness to everyone it touches. The next time you find yourself thinking about the injustices of the world, try reminding yourself of this very basic fact. Youmay be surprised that it can make you out of self-pity and into helpful action.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The author thought of his friend's question as a good one, because _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.he also wanted to know who held such an opinion
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. it made him recall something during his childhood
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.like his friend, he also thought life was unfair
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.he learned something from the question as a youngster
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.Surrendering to the fact that life isn't fair will ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. keep us from making everything perfect
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.keep us from doing everything in our power
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.make us face challenges in the life bravely
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.make us know it's our duty to perfect things
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.The second paragraph of the passage mainly discusses _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.it's nice to accept the injustice of life
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.it's nice to surrender to the life
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.we should not surrender to the life
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.we should not feel sorry for ourselves
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.n the last paragraph, “this very basic fact” refers to the fact that ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.you should not pity for others
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.life isn't and won't be fair
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.sympathy is a heartfelt emotion
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.pity is a self-defeating emotion
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.From the passage, we can learn that the author's attitude to life is ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.positive 
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.negative
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Self-pity
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. indifferent
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