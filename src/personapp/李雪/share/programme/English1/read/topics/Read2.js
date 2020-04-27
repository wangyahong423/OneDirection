import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '解析',
                content2: '考察重点：',
                content3: '非谓语动词做后置定语，状语从句，插入语',
                content4: '这个句子结构非常清晰：it strikes one that, for all their diversity of styles,these gardens speak of various other fundamental urges beyond that of decoration and creative expression 是主句，其中 for all their diversity of styles是插入语。时间状语从句yet when one looks at the photoraphs of the gardens created by the homeless,提前至主句之前，其中created by the homeless 是过去分词短语充当后置定语，用来修饰the gardens词汇的识别：句子中的动词looks at对应的宾语是the photographs of the gardens,因此翻译成“观看”。句子中created by the homeless对应的宾语是the gardens,因此翻译成“创建、建立”。句子中的动词speak of对应的宾语是various other fundamental urges，因此翻译成“透露、显示、表明”',
                content5: '参考翻译：',
                content6: '然而当我们观看那些由无家可归的人创建的家园的照片时，它们的那些各种各样的风格，会给人以深深的震撼。这些家园在它的装饰和创造性表示之上，透露出了其他基本的需求。'
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
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                    <Text style={[{ marginTop: 5 * s }, styles.contentText]}>{section.content3}</Text>
                </View>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
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
                            &emsp;&emsp;{`Financial regulators in Britain have imposed a rather unusual rule on the bosses of big banks. Starting next year, any guaranteed bonus of top executives could be delayed 10 years if their banks are under investigation for wrongdoing. The main purpose of this “clawback” rule is to hold bankers accountable for harmful risk-taking and to restore public trust in financial institution. Yet officials also hope for a much larger benefit: more long term decision-making not only by banks but by all corporations, to build a stronger economy for future generations.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“Short-termism” or the desire for quick profits, has worsened in publicly traded companies, says the Bank of England’s top economist. Andrew Haldane. He quotes a giant of classical economics, Alfred Marshall, in describing this financial impatience as acting like “Children who pick the plums out of their pudding to eat them at once” rather than putting them aside to be eaten last.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The average time for holding a stock in both the United States and Britain, he notes, has dropped from seven years to seven months in recent decades. Transient investors, who demand high quarterly profits from companies, can hinder a firm’s efforts to invest in long-term research or to build up customer loyalty. This has been dubbed “quarterly capitalism”`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In addition, new digital technologies have allowed more rapid trading of equities, quicker use of information, and thus shorters attention spans in financial markets. "There seems to be a predominance of short-term thinking at the expense of long-term investing,” said Commissioner Daniel Gallagher of the US Securities and Exchange Commission in a speech this week.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In the US, the Sarbanes-Oxley Acl of 2002 has pushed most public companies to defer performance bonuses for senior executives by about a year, slightly helping reduce “short -termism .” In its latest survey of CEO pay ,The Wall Street Journal finds that “a substantial part ” of executive pay is now tied to performance .`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Much more could be done to encourage “long-termism，” such as changes in the tax code and quicker disclosure of stock acquisitions. In France, shareholders who hold onto a company investment for at least two years can sometimes earn more voting rights in a company.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Within companies, the right compensation design can provide incentives for executives to think beyond their own time at the company and on behalf of all stakeholders. Britain's new rule is a reminder to bankers that society has an interest in their performance, not just for the short term but for the long term.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. According to Paragraph 1, one motive in imposing the new rule is the`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] enhance bankers’ sense of responsibility`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] help corporations achieve larger profits`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] build a new system of financial regulation`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] guarantee the bonuses of top executives`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. Alfred Marshall is quoted to indicate`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the conditions for generating quick profits`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] governments’ impatience in decision-making`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the solid structure of publicly traded companies`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] “short-termism” in economic activities`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. It is argued that the influence of transient investment on public companies can be`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] indirect`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] adverse`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] minimal`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] temporary`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The US and France examples and used to illustrate`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the obstacles to preventing “short-termism”`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the significance of long-term thinking`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the approaches to promoting “long-termism”`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the prevalence of short-term thinking`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following would be the best title for the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Failure of Quarterly Capitalism`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Patience as a Corporate Virtue`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Decisiveness Required of Top Executives`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Frustration of Risk-taking Bankers`}
                            </Text>
                        </View>
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
        marginLeft: '40%',
        marginBottom: 20 * s
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