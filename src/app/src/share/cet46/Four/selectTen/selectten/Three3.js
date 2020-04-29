import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Three3 extends Component {
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
                            &emsp;&emsp;{`One of the bitterest and most time-worm debates in student union bars up and down the country is resolved as academic research confirms that in financial terms at least, arts degrees are a complete waste of time.Getting through university boosts students’earnings by 25%, on a weighted average, or $220,000 over theirlifetime, according to Professor Ian Walker of Warwick University-but if they study Shakespeare or the peasants’revolt instead of anatomy of contract law, those gains are likely to be completely wiped out.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The government is about to allow universities to charge students up to $3,000 a year for their degrees, arguing that it’s a small price to pay compared with the financial rewards graduates reap later in life. But Prof. Walker’s research shows there are sharp variations in returns according to which subject a student takes.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Law, medicine and economics or business are the most lucrative choices, making their average earnings 25% higher, according to the article, published in the office for national statistics’monthly journal. Scientists get 10-15% extra. At the bottom of the list are arts subjects, which make only a “small ”differenceto earnings- a small negative one, in fact. Just ahead are degrees in education-which leave hard pressed teachers anaverage of 5% better off a year than if they had left school at 18.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“it’s hard to resist the conclusion that what students learn does matter a lot; and some subject areas givemore modest financial returns than others,” Prof. Walker said. As an economist, he was quick to point outthat students might gain non-financial returns from arts degrees:”Studying economics might be very dull, forexample, and studying post-modernism might be a lot of fun.”`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.What is the best title for the passage?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Professor Walker’s Research
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.How to Make Big Money.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Differences Between Science and Arts Degrees.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Studying Arts Has Negative Financial Outcome.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.Universities charge students a rather high tuition mainly b
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.they provide the students with very prosperous subjects
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.they assume that their graduates can earn much more than
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.they don’t get financial support from the government
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.they need much revenue to support the educational expenses
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.The word “lucrative”(Line 1, Para. 4) most probably means _____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.sensible
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.creative
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.profitable
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.reliable
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.Law, medical and business graduates could earn 25% more than ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.education graduates
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.arts graduates
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.those who had not studied at the university
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.the average income
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.We can safely conclude that the author ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.regards arts degrees as meaningless
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.finds this result disappointing and unfair
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.wants the students to think twice before they decide what to learn in &emsp;college
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.holds that arts degrees are still rewarding despite its scarce financial &emsp;returns
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