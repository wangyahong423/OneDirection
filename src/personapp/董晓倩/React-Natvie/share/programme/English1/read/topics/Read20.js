import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read20 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【D】 social media was a reliable source of news',
                content2: '解析：',
                content3: '细节题。根据题干信息定位到文中第一段与第二段。文章第一段提到在美国超过2/3的年轻人反对总统特朗普使用推特。接着提到美国公民更希望从别的渠道获得白宫的信息，而不是从总统的社交平台。第二段第二句指出由于美国人越来越不信任媒体，他们可能想办法提高自身的媒体文化素养。由此可见，很多美国年轻人怀疑社交媒体值不值得信任。因此D选项符合文意。',
                content4:'2. 答案【A】 sharpen',
                content5:'解析：',
                content6:"猜词题。根据题干定位到第二段第二句。上文提到大部分美国人依靠社交媒体来查看每日头条。第二句紧接着指出“由于美国人越来越不信任媒体，他们开始beef up 自身的媒体文化素养”。由此推测，美国人开始对媒体产生怀疑，所以是想办法强化自身的知识来辨别媒体可不可靠。选项中只有A项有(强化，加强)的含义。故A项为正确答案。",
                content7:'3. 答案【B】 verify news by referring to diverse resources. ',
                content8:'解析：',
                content9:'根据题目中的survey可以得出，本题目为细节题的研究结论型。题干中已知的关键词the knight foundation survey告诉我们本题在第三段第二句话的位置，原句指出“A knight foundation focus-group survey of young people...found they use distributed trust to verify stories.”，意思是他们使用distributed trust来verify stories。而且下一句又详细指出，they cross-check sources and prefer news from different perspectives。结合选项可看出B选项verify与原文一致，news对应原文的stories，referring to diverse resources即distributed trust，B为正确答案。',
                content10:'4. 答案【C】 readers’ misinterpretation.',
                content11:'解析：',
                content12:'根据题目中的Barna survey得出，该题为细节题中的研究结论型题目。从题干中的关键提示信息The Barna survey以及fake news可得出，本题目定位到倒数第二段的位置。该段后半部分提到了Barna survey也提到了fake news，可以定位到About a third这一句，“About a third say the problem of fake news lies in misinterpretation or exaggeration of actual news via social media.”。题干中的a main cause刚好对应了lie in，所以答案就是misinterpretation，对应选项得出C，readers’ misinterpretation。',
                content13:'5. 答案【A】 A Rise in Critical Skills for Sharing News Online.',
                content14:'解析：',
                content15:'根据题目中的best title可以得出，本题目考查全文主旨。首先，我们可以通过题目中反复出现的信息看出文章与什么话题有关，题目出现了young Americans，并指出了doubts，fake news problem等负向色彩，因此，整篇文章的倾向是负向的。下一步，文章主旨一般出现在文章的第一段和第二段开头的位置，第一段是通过survey引出了文章要讨论的话题，说出了news和source的话题，第二段第二句通过yet引出要讨论的distrust等内容。总结得出，文章讲述的话题是news online，倾向态度是distrust在rise，对应选项就是A项，A Rise in Critical Skills for Sharing News Online.'
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
                            &emsp;&emsp;{`A new survey by Harvard University finds more than two-thirds of young Americans disapprove of President Trump's use of Twitter. The implication is that Millennials prefer news from the White House to be filtered through other source, Not a president's social media platform.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Most Americans rely on social media to check daily headlines. Yet as distrust has risen toward all media, people may be starting to beef up their media literacy skills. Such a trend is badly needed. During the 2016 presidential campaign, nearly a quarter of web content shared by Twitter users in the politically critical state of Michigan was fake news, according to the University of Oxford. And a survey conducted for Buzz Feed News found 44 percent of Facebook users rarely or never trust news from the media giant.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Young people who are digital natives are indeed becoming more skillful at separating fact from fiction in cyberspace. A Knight Foundation focus-group survey of young people between ages 14and24 found they use “distributed trust” to verify stories. They cross-check sources and prefer news from different perspectives—especially those that are open about any bias. “Many young people assume a great deal of personal responsibility for educating themselves and actively seeking out opposing viewpoints,” the survey concluded.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Such active research can have another effect. A 2014 survey conducted in Australia, Britain, and the United States by the University of Wisconsin-Madison found that young people's reliance on social media led to greater political engagement.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Social media allows users to experience news events more intimately and immediately while also permitting them to re-share news as a projection of their values and interests. This forces users to be more conscious of their role in passing along information. A survey by Barna research group found the top reason given by Americans for the fake news phenomenon is “reader error,” more so than made-up stories or factual mistakes in reporting. About a third say the problem of fake news lies in “misinterpretation or exaggeration of actual news” via social media．In other words, the choice to share news on social media may be the heart of the issue. “This indicates there is a real personal responsibility in counteracting this problem,” says Roxanne Stone, editor in chief at Barna Group.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`So when young people are critical of an over-tweeting president, they reveal a mental discipline in thinking skills – and in their choices on when to share on social media.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. According to the Paragraphs 1 and 2, many young Americans cast doubts on`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the justification of the news-filtering practice.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] people's preference for social media platforms.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the administrations ability to handle information.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] social media was a reliable source of news.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. The phrase “beer up”(Line 2, Para.2) is closest in meaning to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] sharpen`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] define`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] boast`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] share`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. According to the knight foundation survey, young people`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] tend to voice their opinions in cyberspace.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] verify news by referring to diverse resources.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] have s strong sense of responsibility.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] like to exchange views on “distributed trust”`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The Barna survey found that a main cause for the fake news problem is`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] readers outdated values.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] journalists' biased reporting`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] readers' misinterpretation`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] journalists' made-up stories.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following would be the best title for the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] A Rise in Critical Skills for Sharing News Online`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] A Counteraction Against the Over-tweeting Trend`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] The Accumulation of Mutual Trust on Social Media.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] The Platforms for Projection of Personal Interests.`}
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