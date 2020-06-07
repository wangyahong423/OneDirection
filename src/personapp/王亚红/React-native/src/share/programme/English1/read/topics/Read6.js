import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read6 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【D】 its content acquisition cost nothing',
                content2: '解析：',
                content3: '根据题干中关键词a licence to print money because ,定位到第一段第二句，其他科学家也免费进行同行评议的专门工作，因为它是获得地位和生产科学知识的核心要素。正确选项D，acquisition原词， for free替换选项中的，cost nothing.',
                content4:'2. 答案【A】 thrived mainly on universities libraries',
                content5:'解析：',
                content6:"根据题干关键词Elsevier定位到第三段第一句话，The Dutch giant Elsevier, ....made profits of more than 490m last year. while UK universities alone spent more than 210m in 2016,该公司去年利润超过4.9亿英镑 然而仅英国大学在2016年就花费了超过2.1亿英镑。正确选项A 主要依靠大学图书馆 为定位句的同意表达",
                content7:'3. 答案【C】 concerned',
                content8:'解析：',
                content9:'根据题干中关键词Sci-Hub的成功定位到第四段第二句， The success of Sci- Hub, .... have themselves legally accessed shows the legal ecosystem has lost legitimacy among its users and must be transformed so that it works for all participants这表明法律生态系统在其用户中已经失去了合法性，必须进行改造，以便为所有参与者服务. 可见作者对于Sci- Hub的成功采取否定态度，正确选项B concerned担忧，担心。A relieved宽慰的，C puzzled困惑的属错误选项， D encouraged鼓励的，正反混淆',
                content10:'4. 答案【A】 allow publishers some room to make money',
                content11:'解析：',
                content12:'根据题干关键词open access定位到第四段，最后一句 ...so that the publishers can make a profit before...,合理收取费用是未来出版商能够获利，A选项为同义替换。B render publishing much easier for scientists使发表对科学家来说容易得多 .C reduce the cost of publication substantiality 降低出版成本 D. free universities from financial burdens使大学摆脱财政负担',
                content13:'5. 答案【D】 the few feed on the many',
                content14:'解析：',
                content15:'根据题干关键词scientific publishing model定位到最后一段第五句，labour is provided places free in exchange for the hope of status, while huge profits are made by a few big firms who run the market places.劳动力被免费提供，以换取地位的希望，而一些经营市场的大公司则获得了巨额利润。 可知少部分作者免费劳动，大部分公司盈利，A选项为同义替换'
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
                            &emsp;&emsp;{`Scientific publishing has long been a licence to print money. Scientists need joumals in which to publish`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`their research, so they will supply the articles without monetary reward. Other scientists perform the specialised work of peer review also for free, because it is a central element in the acquisition of status and the production of scientific knowledge.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`With the content of papers secured for free, the publisher needs only fnd a market for its journal. Until this century, university libraries were not very price sensitive. Scientific publishers routinely report profit margins approaching 40% on their operations, at a time when the rest of the publishing industry is in an existential crisis.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The Dutch giant Elsevier, which claims to publish 25% of the scientific papers produced in the world,made profits of more than £900m last year, while UK universities alone spent more than £210m in 2016 toenable researchers to access their own publicly funded research; both figures seem to rise unstoppably despite increasingly desperate efforts to change them.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The most drastic, and thoroughly illegal, reaction has been the emergence of Sci-Hub, a kind of global photocopier for scientific papers, set up in 2012, which now claims to offer access to every paywalled article published since 2015. The success of Sci-Hub, which relies on researchers passing on copies they have themselves legally accessed, shows the legal ecosystem has lost legitimacy among its users and must be transformed so that it works for all participants.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In Britain the move towards open access publishing has been driven by funding bodies. In some ways it has been very successful. More than half of all British scientific research is now published under open access terms: either freely available from the moment of publication, or paywalled for a year or more so that the publishers can make a profit before being placed on general release.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Yet the new system has not worked out any cheaper for the universities. Publishers have responded to the demand that they make their product free to readers by charging their writers fees to cover the costs of preparing an article. These range from around ￡500 to $5,000. A report last year pointed out that the costs both of subscriptions and of these’’article preparation costs’’ had been steadily rising at a rate above inflation. In some ways the scientific publishing model resembles the economy of the social internet: labour is provided free in exchange for the hope of status, while huge profits are made by a few big firms who run the market places. In both cases, we need a rebalancing of power.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. Scientific publishing is seen as“a licence to print money" partly because________`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] its funding has enjoyed a steady increase .`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] its marketing strategy has been successful.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] its payment for peer review is reduced.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] its content acquisition costs nothing.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. According to Paragraphs 2 and 3, scientific publishers Elsevier have________`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] hrived mainly on university libraries.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] gone through an existential crisis.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] revived the publishing industry.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] financed researchers generously.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. How does the author feel about the success of Sci-Hub?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Relieved.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Puzzled.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Concerned`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Encouraged.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. It can be learned from Paragraphs 5 and 6 that open access terms________`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] allow publishers some room to make money.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] render publishing much easier for scientists.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] reduce the cost of publication substantially.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] free universities from financial burdens.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following characterises the scientific publishing model?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Trial subscription is offered.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Labour triumphs over status.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Costs are well controlled.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] The few feed on the many.`}
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