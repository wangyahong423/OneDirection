import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read18 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【A】 the consequences of the current sorting mechanism',
                content2: '解析：',
                content3: '通过题干可以将此题锁定在前两段。第一段指出Elisabeth谈到了“我们很多机构都面临着令人沮丧的正直感的丧失”。接下来第二句指出这种正直感的丧失是因为大家普遍认为社会中唯一的分类机制(sorting mechanism)应该是利益和市场。而从第一段最后一句我们看出，她认为“应该是我们人类自己创造我们想要的社会，而不应该是利益”。可见，Elisabeth很不认可目前的这种分类机制(sorting mechanism)以及所造成的不良后果，这也正是她感到沮丧的原因。故A选项consequence of the current sorting mechanism(目前这种分类机制的后果)是真正让她沮丧的原因。',
                content4:'2. 答案【B】 more journalists may be found guilty of phone hacking',
                content5:'解析：',
                content6:"第三段第一句指出，Andy Coulson因为参与手机黑客案件被裁定有罪，然而他的前任却被认定是无罪的。通过这一事件，作者得出由此造成的道德沦丧广泛问题依然存在(the wider issue of dearth of integrity still stands)。即仍然存在一些人没有被裁定有罪。接着文章指出了在新闻业中，已经有记者被认定非法侵入用户手机。而还有一些在等待审判(others await trial)，由此可以推出，将会有更多的记者因为涉及手机黑客案件而被裁定有罪。故正确答案为选项B。",
                content7:'3. 答案【C】 was hardly convincing',
                content8:'解析：',
                content9:'根据题干中的“defence”可以回文定位到文章第四段最后一句话。该句指出Ms. Brooks辩护成功的关键在于她对这个事件一无所知(she knew nothing)。而作者在该段第一句话中指出，道德丧失不仅体现在普遍存在的手机黑客这一事实上，更体现在一些审判案件所使用的条款上，其中最震惊的就是对Ms. Brooks的审判。可见，作者对该案的审判持否定态度。因此，认为她的辩护是不可信的。故正确答案为C。',
                content10:'4. 答案【A】 generally distorted values',
                content11:'解析：',
                content12:'通过题干中的“collective doctrine”可以直接定位到文中第五段第三行。该句指出“collective doctrine”是社会的分类机制应该是利益。接下来可以看出，那些真正起作用的是那些表示利益的词“efficiency，flexibility，shareholder value，business-friendly，wealth generation…”，而表示公平、正义的词(Justice，fairness，tolerance…)则被置于边缘。可见，这种教义(collective doctrine)只关注利益，而忽略了公平与正义，这显然是一种扭曲的价值观。故A选项正确。',
                content13:'5. 答案【C】 moral awareness matters in editing a newspaper',
                content14:'解析：',
                content15:'这是一道开放式推理题。作者在最后一段前两句话指出，新闻报道的目的不是为了促进读者的理解，也不是为了追求公平或者违背人类共有的人性，而是通过追求发行量的影响率来破坏人们的生活。即文章从一开始指出的一个问题，为了追求利益而造成了正值感的丧失。从“ruin”一词可以看出，作者对新闻记者的这一行为持否定的态度。并且通过Ms. Brooks女士的行为加以佐证。作者通过正话反说的方式，突出新闻报道过程中正值感的重要性。故正确答案为C，moral awareness matters in editing a newspaper(在新闻报道中，道德意识很重要)，其中moral awareness和integrity是同义互换。'
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
                            &emsp;&emsp;{`Two years ago, Rupert Murdoch’s daughter ,Elisabeth ,spoke of the “unsettling dearth of integrity across so many of our institutions” Integrity had collapsed, she argued, because of a collective acceptance that the only “sorting mechanism ”in society should be profit and the market .But “it’s us ,human beings ,we the people who create the society we want ,not profit ”.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Driving her point home, she continued: “It’s increasingly apparent that the absence of purpose, of a moral language within government, media or business could become one of the most dangerous foals for capitalism and freedom.” This same absence of moral purpose was wounding companies such as News International ,shield thought ,making it more likely that it would lose its way as it had with widespread illegal telephone hacking .`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As the hacking trial concludes – finding guilty ones-editor of the News of the World, Andy Coulson, for conspiring to hack phones ,and finding his predecessor, Rebekah Brooks, innocent of the same charge –the winder issue of dearth of integrity still standstill, Journalists are known to have hacked the phones of up to 5,500 people .This is hacking on an industrial scale ,as was acknowledged by Glenn Mulcaire, the man hired by the News of the World in 2001 to be the point person for phone hacking. Others await trial. This long story still unfolds.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In many respects, the dearth of moral purpose frames not only the fact of such widespread phone hacking but the terms on which the trial took place .One of the astonishing revelations was how little Rebekah Brooks knew of what went on in her newsroom, wow little she thought to ask and the fact that she never inquired wow the stories arrived. The core of her successful defence was that she knew nothing.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In today’s world, title has become normal that well—paid executives should not be accountable for what happens in the organizations that they run perhaps we should not be so surprised. For a generation, the collective doctrine has been that the sorting mechanism of society should be profit. The words that have mattered are efficiency, flexibility, shareholder value, business–friendly, wealth generation, sales, impact and, in newspapers, circulation. Words degraded to the margin have been justice fairness, tolerance, proportionality and accountability.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The purpose of editing the News of the World was not to promote reader understanding to be fair in what was written or to betray any common humanity. It was to ruin lives in the quest for circulation and impact. Ms Brooks may or may not have had suspicions about how her journalists got their stories, but she asked no questions, gave no instructions—nor received traceable, recorded answers.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. According to the first two paragraphs, Elisabeth was upset by`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the consequences of the current sorting mechanism`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] companies’ financial loss due to immoral practices.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] governmental ineffectiveness on moral issues.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the wide misuse of integrity among institutions.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. It can be inferred from Paragraph 3 that`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Glem Mulcaire may deny phone hacking as a crime`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] more journalists may be found guilty of phone hacking.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Andy Coulson should be held innocent of the charge.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] phone hacking will be accepted on certain occasions.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. The author believes the Rebekah Books’s deference`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] revealed a cunning personality`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] centered on trivial issues`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] was hardly convincing`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] was part of a conspiracy`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The author holds that the current collective doctrine shows`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] generally distorted values`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] unfair wealth distribution`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] a marginalized lifestyle`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] a rigid moral cote`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following is suggested in the last paragraph?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] The quality of writing is of primary importance.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Common humanity is central news reporting.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Moral awareness matters in exciting a newspaper.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Journalists need stricter industrial regulations.`}
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