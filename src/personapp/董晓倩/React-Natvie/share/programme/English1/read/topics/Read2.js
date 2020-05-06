import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
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
                content1: '1. 答案【A】 enhance bankers’sense of responsibility',
                content2: '解析：',
                content3: '本题目为细节题，考察具体细节。根据题干关键词Paragraph 1和one motive in imposing the new rule定位到第一段第三句。The main purpose of this “clawback” rule is to hold bankers accountable for harmful risk-taking and to restore public trust in financial institution.这项“回扣”规则的主要目的是让银行家为有害的风险承担责任，并恢复公众对金融机构的信任。正确答案A的enhance bankers’sense of responsibility增强银行家的责任感,是原文的同义表达。干扰项B的help corporations achieve larger profits帮助公司获得更大的利润，并未提及，是常识性干扰。选项C的build a new system of financial regulation建立新的金融监管体系，原文并未提及，属于无中生有;选项D的guarantee the bonuses of top executives保证高层管理人员的奖金与原文提到的 any guaranteed bonus of top executives could be delayed 10 years 任何有保证的高管奖金都可能推迟10年，表述相反，属于正反混淆。',
                content4: '2. 答案【D】 “short-termism” in economic activities',
                content5: '解析：',
                content6: '本题目为例证题，考察论据和论点的内容。根据题干关键词Alfred Marshall地位到第二段三句，但是考察论点，定位到论据的上一句，“Short-termism” or the desire for quick profits, has worsened in publicly traded companies“短期主义”或对快速获利的渴望，在公开交易的公司中变得更加严重。正确选项D short-termism” in economic activities经济活动中的短期主义，其中主语short-termism是原文的原词。干扰项A的the conditions for generating quick profits快速获利的条件，并非论点内容。选项B政府决策缺乏耐心，无关内容。选项C the solid structure of publicly traded companies上市公司稳健结构，原文并未提及。',
                content7: '3. 答案【B】 adverse',
                content8: '解析：',
                content9: '本题目为细节题，考察具体细节内容。根据题干关键词the influence of transient investment on public companies定位到原文第三段第二句，. Transient investors, who demand high quarterly profits from companies, can hinder a firm’s efforts to invest in long-term research or to build up customer loyalty. 会妨碍公司投资于长期研究或建立客户忠诚度的努力，因此可知此影响是不好的，正确选项B adverse不利的，A选项 indirect，不直接的 选项C minima 极小值 D temporary 暂时的，因此只有B正确。',
                content10: '4. 答案【C】 the approaches to promoting “long-termism”.',
                content11: '解析：',
                content12: '本题目为例证题，考察论点论据内容。根据题干关键词US and France examples定位到原文五六段，五段为美国的例子，六段为法国的例子，第六段首句承前启后过渡到Much more could be done to encourage “long-termism，”要鼓励“长期主义”，还有很多工作要做。正确选项C the approaches to promoting “long-termism”.促进“长期主义”的方法。为原文的同意转换',
                content13: '5. 答案【B】 Patience as a Corporate Virtue',
                content14: '解析：',
                content15: '本题目为主旨题，考察全文的主旨要义。纵观全文，文章围绕西方国家的金融行业的短期主义投资和长期主义投资展开，第一段由一项限制高管津贴措施引出话题。第二段介绍英国短期主义占主流，三段短期主义的弊端，四段介绍美国现阶段的短期主义投资。五段六段举例美国，法国为促进短期主义投资的措施，尾段再次呼应首段，注意长期投资。B 选项Patience对应原文的short temisim和 long temisim, corporate原文多次出现，为本文的关键词，选项A Failure of Quarterly Capitalism 季度资本主义的失败选项C Decisiveness Required of Top Executives高管需要决断力D Frustration of Risk-taking Bankers 冒险银行家的挫败感，都不能概括全文，只有B选项正确。',
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content3}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content6}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content9}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content10}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content12}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content13}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content14}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content15}</Text>
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