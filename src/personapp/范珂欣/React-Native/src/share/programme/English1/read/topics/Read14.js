import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read14 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【A】 Critical',
                content2: '解析：',
                content3: '该题是细节态度题。并非考察全文的态度，也就是说要细节定位。根据题干定位原则，定位第一段AAAS出现之处，并且一定要找到表示评价的部分。该题迷惑性很强，因为文章在AAAS后面就又”praise”所以容易误导大家选择答案B “appreciative(欣赏的)”，但是我们应该看到有however，我们知道如果第一段出现转折，那此转折一定跟主旨有关。同时各个题都与主旨相关，所以这道题应该于主旨相关，后文中的“may cause more harm than good.”让我们知道它的还多余利，所以答案选择A，批判性的。',
                content4:'2. 答案【C】 keep a leading position in liberal education',
                content5:'解析：',
                content6:'细节题。根据自然段定位原则，36题在第一段出题，38题在第三段出题，那37题在第二段出题的可能性就很大。同时题干定位”Influential figures in the Congress”与“leading congressional Democrats and Republicans”同义替换。定位的答案是asking that it identify actions that could be taken by "federal, state and ….., individual benefactors and others" to "asking that it identify actions that could be taken by "federal, state and local governments, universities, foundations, educators, individual benefactors and others" to "maintain national excellence in humanities and social scientific scholarship and education. “In humanities and social scientific scholarship and education. “也就是说答案重点在maintain national excellence 刚好与选项C 中的leading position 进行同义替换。ABD与文章不符合。',
                content7:'3. 答案【C】 the application of emerging technologies',
                content8:'解析：',
                content9:'推理题。Suggest 是推理题的标志。先化选项关键词，发现选项A是讲American history选项B； 是讲theoretical subjects；选项C]emerging technologies；选项Dfunding foreign languages。返回原文定位的时候，A 选项中的“exclusive 排外”并没有在“stresses the study of history and government, particularly American history and American government;”这句话中体现。B选项中的理论学科没有定位点。D选项与原文“increased funding for teachers”以及“greater study of foreign languages,”不符。属于张冠李戴。“encourages the use of new digital technologies.”与选项C 同义替换。',
                content10:'4. 答案【B】 cautious about intellectual investigation',
                content11:'解析：',
                content12:'属于推理题。Implies是推理题的标志。同时根据提题干定位第五段，找professor. “professors routinely treat the progressive interpretation of history and progressive public policy as the proper subject of study while portraying conservative or classical liberal ideas—such as free markets, self-reliance —as falling outside the boundaries of routine, and sometimes legitimate, intellectual investigation.”A 选项中的free markets前面的修饰词语是conservative or liberal ideas 没有体现A 选项中的supportive。C选项中的conservative 与文中progressive public policy 不符合。D选项中biased 没有体现，故排除。所以选B。',
                content13:'5. 答案【B】 Illiberal Education and “The Heart of the Matter”',
                content14:'解析：',
                content15:'主旨大意题。先看其他题题干，我们锁定关键词是report ，而report 就是“the heart of the matter “ 故排除C和D.而我们看A 发现文章并没有讲如何抓住“问题核心”的各个方法。排除A，选择B'
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
                            &emsp;&emsp;{`“The Heart of the Matter,” the just-released report by the American Academy of Arts and Sciences, deserves praise for affirming the importance of the humanities and social sciences to the prosperity and security of liberal democracy in America. Regrettably, however, the report's failure to address the true nature of the crisis facing liberal education may cause more harm than good.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In 2010, leading congressional Democrats and Republicans sent letters to the American Academy of Arts and Sciences asking that it identify actions that could be taken by "federal, state and local governments, universities, foundations, educators, individual benefactors and others" to "maintain national excellence in humanities and social scientific scholarship and education."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In response, the American Academy formed the Commission on the Humanities and Social Sciences, with Duke University President Richard Brodhead and retired Exelon CEO John Rowe as co-chairmen. Among the commission's 51 members are top-tier-university presidents, scholars, lawyers, judges, and business executives, as well as prominent figures from diplomacy, filmmaking, music and journalism.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The goals identified in the report are generally admirable. Because representative government presupposes an informed citizenry, the report supports full literacy; stresses the study of history and government, particularly American history and American government; and encourages the use of new digital technologies.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`To encourage innovation and competition, the report calls for increased investment in research, the crafting of coherent curricula that improve students' ability to solve problems and communicate effectively in the 21st century, increased funding for teachers and the encouragement of scholars to bring their learning to bear on the great challenges of the day. The report also advocates greater study of foreign languages, international affairs and the expansion of study abroad programs.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`One of the more novel ideas in the report is the creation of a "Culture Corps" in cities and town across America to "transmit humanistic and social scientific expertise from one generation to the next."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Unfortunately, despite 2? years in the making, "The Heart of the Matter" never gets to the heart of the matter: the illiberal nature of liberal education at our leading colleges and universities.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The commission ignores that for several decades America's colleges and universities have produced graduates who don't know the content and character of liberal education and are thus deprived of its benefits. Sadly, the spirit of inquiry once at home on campus has been replaced by the use of the humanities and social sciences as vehicles for disseminating "progressive," or left-liberal propaganda.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Today, professors routinely treat the progressive interpretation of history and progressive public policy as the proper subject of study while portraying conservative or classical liberal ideas—such as free markets, self-reliance and a distrust of central planning—as falling outside the boundaries of routine, and sometimes legitimate, intellectual investigation.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The AAAS displays great enthusiasm for liberal education. Yet its report may well set back reform by obscuring the depth and breadth of the challenge that congress asked it to illuminate.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. According to Paragraph 1, what is the author’s attitude toward the AAAS’s report?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Critical`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Appreciative`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Contemptuous`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Tolerant`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. Influential figures in the Congress required that the AAAS report on how to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] retain people’s interest in liberal education`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] define the government’s role in education`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] keep a leading position in liberal education`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] safeguard individuals rights to education`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. According to Paragraph 3, the report suggests`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] an exclusive study of American history`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] a greater emphasis on theoretical subjects`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the application of emerging technologies`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] funding for the study of foreign languages`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The author implies in Paragraph S that professors are`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] supportive of free markets`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] cautious about intellectual investigation`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] conservative about public policy`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] biased against classical liberal ideass`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following would be the best title for the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Ways to Grasp “The Heart of the Matter”`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Illiberal Education and “The Heart of the Matter”`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] The AAAS’s Contribution to Liberal Education`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Progressive Policy vs. Liberal Education`}
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