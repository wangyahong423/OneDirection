import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read13 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【A】 a symbol of the entrepreneurs’s wealth.',
                content2: '解析：',
                content3: '为细节题。根据题干中的Fundamental Physics Prize可以定位到第一段，但除此之外就没有其他细节提示信息了，所以我们只能根据几个选项去定位，分别根据选项中的entrepreneurs、Nobel Prize、investment、reward去定位，在第一段末句找到了与A选项相一致的句子，则判定A选项正确。',
                content4:'2. 答案【B】 the founders of the new award.',
                content5:'解析：',
                content6:"为细节题。根据题干中的critics定位到第三段，可知第二段没有出题，从第三段第二句可以得出本道题的正确选项，who have made their careers in research即为B选项中的The founders。",
                content7:'3. 答案【D】 the demonstration of research findings.',
                content8:'解析：',
                content9:'为细节题。本道题如果从题干中看更像是例证题，但题目中说道the case involves即问例子本身，所以为一道细节题。我们在第四段倒数第三句中找到了Higgs boson，定位到本句可以得知nature of modern research---as well as demonstrated by……即为本道题正确答案。',
                content10:'4. 答案【A】 Their endurance has done justice to them.',
                content11:'解析：',
                content12:'此类题型是考试中的一个难点，在题干中提示信息非常少，所以我们需要根据每个选项分别定位。A选项的durance定位到本段最后一句time。B选项根据legitimacy定位到第一句。C选项没有提到。D选项从最后一段可以验证确实是收到了质疑，B选项和原文不符，可以得知答案为A。',
                content13:'5. 答案【A】 acceptable despite the criticism.',
                content14:'解析：',
                content15:'本题属于作者观点，出在最后一段则说明更多体现了文章的主旨，因为还有一个段落对应，则我们可以在最后一段找答案，根据题干中的award我们可以得知全文的最后一句明确体现了作者的观点，故选A。'
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
                            &emsp;&emsp;{`The US$3-million Fundamental physics prize is indeed an interesting experiment, as Alexander Polyakov said when he accepted this year’s award in March. And it is far from the only one of its type. As a News Feature article in Nature discusses, a string of lucrative awards for researchers have joined the Nobel Prizes in recent years. Many, like the Fundamental Physics Prize, are funded from the telephone-number-sized bank accounts of Internet entrepreneurs. These benefactors have succeeded in their chosen fields, they say, and they want to use their wealth to draw attention to those who have succeeded in science.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`What’s not to like? Quite a lot, according to a handful of scientists quoted in the News Feature. You cannot buy class, as the old saying goes, and these upstart entrepreneurs cannot buy their prizes the prestige of the Nobels, The new awards are an exercise in self-promotion for those behind them, say scientists. They could distort the achievement-based system of peer-review-led research. They could cement the status quo of peer-reviewed research. They do not fund peer-reviewed research. They perpetuate the myth of the lone genius.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The goals of the prize-givers seem as scattered as the criticism.Some want to shock, others to draw people into science, or to better reward those who have made their careers in research.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As Nature has pointed out before, there are some legitimate concerns about how science prizes—both new and old—are distributed. The Breakthrough Prize in Life Sciences, launched this year, takes an unrepresentative view of what the life sciences include.But the Nobel Foundation’s limit of three recipients per prize, each of whom must still be living, has long been outgrown by the collaborative nature of modern research—as will be demonstrated by the inevitable row over who is ignored when it comes to acknowledging the discovery of the Higgs boson. The Nobels were, of course,themselves set up by a very rich individual who had decided what he wanted to do with his own money. Time, rather than intention, has given them legitimacy.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As much as some scientists may complain about the new awards, two things seem clear. First, most researchers would accept such a prize if they were offered one. Second, it is surely a good thing that the money and attention come to science rather than go elsewhere, It is fair to criticize and question the mechanism—that is the culture of research, after all—but it is the prize-givers’ money to do with as they please. It is wise to take such gifts with gratitude and grace.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. The Fundamental Physical Prize is seen as`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] a symbol of the entrepreneurs’s wealth.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] a possible replacement of the Nobel Prize.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] an example of bankers’ investment.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] a handsome reward for researchers.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. The phrase “to sign on”(Line 3,Para.2) most probably means`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the profit-oriented scientists.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the founders of the new award.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the achievement-based system.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] peer-review-led research.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. What promoted the chancellor to develop his scheme?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] controversies over the recipients’ status.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the joint effort of modern researchers.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] legitimate concerns over the new prize.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the demonstration of research findings.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. According to Paragraph 3, being unemployed makes one one feel`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Their endurance has done justice to them.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Their legitimacy has long been in dispute.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] They are the most representative honor.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] History has never cast doubt on them.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. To which of the following would the author most probably agree?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] acceptable despite the criticism.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] harmful to the culture of research.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] subject to undesirable changes.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] unworthy of public attention.`}
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