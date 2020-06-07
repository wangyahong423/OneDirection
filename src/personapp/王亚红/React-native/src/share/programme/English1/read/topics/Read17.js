import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read17 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【B】 journals are strengthening their statistical checks',
                content2: '解析：',
                content3: '推理题。根据题干直接定位到第一段。解题关键在于第二句The policy follows similar efforts from other journals(该政策得到其他期刊类似的努力)the policy指第一句The journal Science is adding an extra round of statistical checks to its peer-review process, (《科学》杂志把统计检查额外添加到它的同行评审过程中)，由此可直接推断出正确答案为[B] journals are strengthening their statistical checks (各大期刊正在加强统计数字检查)。选项[A]中simplify与原文语意不符，所以选项C、D属于无中生有。',
                content4:'2. 答案【D】 marked',
                content5:'解析：',
                content6:"词义题。根据题干定位回第二段第三句Manuscript will be flagged up for additional scrutiny by the journal’s internal editors, (杂志内部编辑将通过更多的审查来标记手稿)。文中运用代入法，把各选项代入句中替换，可知选项C marked(标记)为正确答案。选项A found(发现，找到)，选项B revised(修改)，选项 D stored(存储)。",
                content7:'3. 答案【D】 set an example for other journals',
                content8:'解析：',
                content9:'细节题。根据题干关键词Giovanni Parmigiani，the establishment of the SBoRE和may定位到第四段的最后一句“… but hopefully through a larger group of publishing places that may want to model their approach after Science。选项中的example是model的同义替换，others journals是原文中a larger group of publishing places的同义替换。文章中出现了hopefully，表示作者积极的态度。选项A中的threat，选项B中的opposition分别表达负向消极的态度，所以错误。选项C increase Science’s circulation(增加《科学》杂志的发行量)，文章并未提到，属于无中生有。',
                content10:'4. 答案【C】 has room for further improvement',
                content11:'解析：',
                content12:'细节题。由题干关键词David Vaux和Science，可定位到第六段最后一句。Vaux says that Science’s idea to pass some papers to statisticians “has some merit, but a weakness is that it relies on the board of reviewing editors to identify ‘the papers that need scrutiny’ in the first place”. (《科学》杂志把论文推给统计员审核有一些优点，但缺点是它依赖于审稿编委会首先需要确定审查的文件。)选项A中workload，选项B. diminish the role of reviewers和选项D中的foreseeable future没有提到，属于无中生有。',
                content13:'5. 答案【A】 science joins push to screen statistics in papers',
                content14:'解析：',
                content15:'文章第一段由Science将增加statistical checks引出话题，接下来各段就此问题McNutt, Giovanni Parmigianni, John Ioannidis, David Vaux提出各自的看法。文中statistical，papers反复提及，可知该词是文中核心词。选项B和选项D首先排除，偏离主题，statisticians仅在文中提及，非重点讨论内容;选项C与文中主题相差较大，因此排除。'
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
                            &emsp;&emsp;{`The journal Science is adding an extra round of statistical checks to its peer-review process, editor-in-chief Marcia McNutt announced today. The policy follows similar efforts from other journals, after widespread concern that basic mistakes in data analysis are contributing to the irreproducibility of many published research findings.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“Readers must have confidence in the conclusions published in our journal,” writes McNutt in an editorial. Working with the American Statistical Association, the journal has appointed seven experts to a statistics board of reviewing editors(SBoRE). Manuscript will be flagged up for additional scrutiny by the journal’s internal editors, or by its existing Board of Reviewing Editors or by outside peer reviewers. The SBoRE panel will then find external statisticians to review these manuscripts.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Asked whether any particular papers had impelled the change, McNutt said: “The creation of the ‘statistics board’ was motivated by concerns broadly with the application of statistics and data analysis in scientific research and is part of Science’s overall drive to increase reproducibility in the research we publish.”`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Giovanni Parmigiani, a biostatistician at the Harvard School of Public Health, a member of the SBoRE group. He says he expects the board to “play primarily an advisory role.” He agreed to join because he “found the foresight behind the establishment of the SBoRE to be novel, unique and likely to have a lasting impact. This impact will not only be through the publications in Science itself, but hopefully through a larger group of publishing places that may want to model their approach after Science.”`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`John Ioannidis, a physician who studies research methodology, says that the policy is “a most welcome step forward” and “long overdue.” “Most journals are weak in statistical review, and this damages the quality of what they publish. I think that, for the majority of scientific papers nowadays, statistical review is more essential than expert review,” he says. But he noted that biomedical journals such as Annals of Internal Medicine, the Journal of the American Medical Association and The Lancet pay strong attention to statistical review.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Professional scientists are expected to know how to analyze data, but statistical errors are alarmingly common in published research, according to David Vaux, a cell biologist. Researchers should improve their standards, he wrote in 2012, but journals should also take a tougher line, “engaging reviewers who are statistically literate and editors who can verify the process”. Vaux says that Science’s idea to pass some papers to statisticians “has some merit, but a weakness is that it relies on the board of reviewing editors to identify ‘the papers that need scrutiny’ in the first place”.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. It can be learned from Paragraph 1 that`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Science intends to simplify their peer-review process.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] journals are strengthening their statistical checks.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] few journals are blamed for mistakes in data analysis.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] lack of data analysis is common in research projects.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. The phrase “flagged up” (Para. 2) is the closest in meaning to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] found.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] marked.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] revised.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] stored.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. Giovanni Parmigiani believes that the establishment of the SBoRE may`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] pose a threat to all its peers.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] meet with strong opposition.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] increase Science’s circulation.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] set an example for other journals.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. David Vaux holds that what Science is doing now`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] adds to researchers’ workload.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] diminishes the role of reviewers.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] has room for further improvement.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] is to fail in the foreseeable future`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following is the best title of the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Science Joins Push to Screen Statistics in Papers.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Professional Statisticians Deserve More Respect`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Data Analysis Finds Its Way onto Editors’ Desks`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Statisticians Are Coming Back with Science`}
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