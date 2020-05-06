import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read15 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【D】 ended his reign in embarrassment',
                content2: '解析：',
                content3: '事实细节题。根据题干要求，定位到文章前两段。而文章第一段的第二句话提到“But embarrassing scandals and the popularity of the republican left in the recent Euro-elections have forced him to eat his words and stand down.”(在最近的欧洲选举中，令人尴尬的丑闻和受欢迎的共和党，均迫使Carlos收回前言并退位)。D选项中，“stand down”是“end reign”的同义置换，且“embarrassment”与导致Carlos卸任的原因“embarrassing scandals”是相呼应的。故D是正确答案。A、B、C均属于无中生有。',
                content4:'2. 答案【A】 owing to their undoubted and respectable status',
                content5:'解析：',
                content6:"事实细节题。根据题干关键词“monarchs”和“heads of state”，定位到第三段的最后一句话“...most royal families have survived because they allow voters to avoid the difficult search for a non-controversial but respected public figure.”(大多数的王室幸存下来是由于他们让选民可以避免去寻找一个不受争议且受尊敬的公众人物的困难)其中“non-controversial but respected public figure”正是A选项中“undoubted and respectable status”的同义置换。故A是正确答案。",
                content7:'3. 答案【B】 The role of the nobility in modern democracies',
                content8:'解析：',
                content9:'事实细节题。定位在第四段的最后一句话“...it is bizarre that wealthy aristocratic families should still be the symbolic heart of modern democratic states.”(离奇的是，富有的贵族竟然仍是现代民主国家的象征核心)其中，the symbolic heart of modern democratic states是题干the role of the nobility in modern democracies的同义置换。',
                content10:'4. 答案【D】 fails to adapt himself to his future role',
                content11:'解析：',
                content12:'事实细节题。该题考查：英国皇家贵族们非常害怕是因为查尔斯……。根据题干专有名词Charles可定位到文章第七段“the danger will come with Charles...worst enemies”。本段指出“危险源自于查尔斯，他生活奢靡，等级观念显著;并且他没有意识到君王的幸存很大程度上取决于君王提供了公共服务，同时，查尔斯并不知道，国王才是君主制度最大的敌人，而非共和党人。”选项A意为：对待政治问题态度强硬，文章并无提及;选项B意为，对待建议的生活方式改变失败，文章中提到生活方式，但并未提到改变生活方式;选项C意为：视共和党人为潜在盟友，文章中提到，共和党人并非最大的敌人，并未指明把共和党人视为盟友，属于偷换概念，选项D意为：适应未来身份失败，文章指出查尔斯的生活方式，世界观以及他对于君王制度的错误理解均为身份特殊的他的不正确言行，与选项D表述吻合，故为正确答案。',
                content13:'5. 答案【C】 Carlos, a Lesson for All European Monarchs',
                content14:'解析：',
                content15:'主旨大意题。该题考察四个选项中哪个可作为文章最佳标题。文章从西班牙国王Carlos退位事件切入，主要讨论当下欧洲君王制度所存在的问题，并非讨论查尔斯的事件，即可排除选项B“查尔斯—继位焦虑”和D“查尔斯—应对威胁缓慢”，而选项A“卡洛斯—荣辱并存” 和C“卡洛斯—欧洲君王们的前车之鉴”中，选项A属于细节信息，不能概括文章大意，选项C可概括，故为正确答案。另外，文章主题词Monarch只有在选项C中出现，也可作为迅速解题的依据。'
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
                            &emsp;&emsp;{`King Juan Carlos of Spain once insisted “kings don’t abdicate, they dare in their sleep.” But embarrassing scandals and the popularity of the republican left in the recent Euro-elections have forced him to eat his words and stand down. So, does the Spanish crisis suggest that monarchy is seeing its last days? Does that mean the writing is on the wall for all European royals, with their magnificent uniforms and majestic lifestyle?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The Spanish case provides arguments both for and against monarchy. When public opinion is particularly polarised, as it was following the end of the Franco regime, monarchs can rise above “mere” politics and “embody” a spirit of national unity.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is this apparent transcendence of politics that explains monarchs’ continuing popularity polarized. And also, the Middle East excepted, Europe is the most monarch-infested region in the world, with 10 kingdoms (not counting Vatican City and Andorra). But unlike their absolutist counterparts in the Gulf and Asia, most royal families have survived because they allow voters to avoid the difficult search for a non-controversial but respected public figure.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Even so, kings and queens undoubtedly have a downside. Symbolic of national unity as they claim to be, their very history—and sometimes the way they behave today – embodies outdated and indefensible privileges and inequalities. At a time when Thomas Piketty and other economists are warning of rising inequality and the increasing power of inherited wealth, it is bizarre that wealthy aristocratic families should still be the symbolic heart of modern democratic states.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The most successful monarchies strive to abandon or hide their old aristocratic ways. Princes and princesses have day-jobs and ride bicycles, not horses (or helicopters). Even so, these are wealthy families who party with the international 1%, and media intrusiveness makes it increasingly difficult to maintain the right image.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`While Europe’s monarchies will no doubt be smart enough to survive for some time to come, it is the British royals who have most to fear from the Spanish example.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is only the Queen who has preserved the monarchy’s reputation with her rather ordinary (if well-heeled) granny style. The danger will come with Charles, who has both an expensive taste of lifestyle and a pretty hierarchical view of the world. He has failed to understand that monarchies have largely survived because they provide a service – as non-controversial and non-political heads of state. Charles ought to know that as English history shows, it is kings, not republicans, who are the monarchy’s worst enemies.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. According to the first two Paragraphs, King Juan Carlos of Spain`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] used turn enjoy high public support`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] was unpopular among European royals`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] cased his relationship with his rivals`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] ended his reign in embarrassment`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. Monarchs are kept as heads of state in Europe mostly`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] owing to their undoubted and respectable status`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] to achieve a balance between tradition and reality`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] to give voter more public figures to look up to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] due to their everlasting political embodiment`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. Which of the following is shown to be odd, according to Paragraph 4?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Aristocrats’ excessive reliance on inherited wealth`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] The role of the nobility in modern democracies`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] The simple lifestyle of the aristocratic families`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] The nobility’s adherence to their privileges`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The British royals “have most to fear” because Charles`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] takes a rough line on political issues`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] fails to change his lifestyle as advised`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] takes republicans as his potential allies`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] fails to adapt himself to his future role`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following is the best title of the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Carlos, Glory and Disgrace Combined`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Charles, Anxious to Succeed to the Throne`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Carlos, a Lesson for All European Monarchs`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Charles, Slow to React to the Coming Threats`}
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