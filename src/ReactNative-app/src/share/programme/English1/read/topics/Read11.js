import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read11 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【B】 encourage jobseekers’ active engagement in job seeking.',
                content2: '解析：',
                content3: '细节题。本道题的关键是intended to问的是目的，所以我们也应该去寻找体现目的性的词汇，所以在首段首句看到了in order to ,则后面的内容即为本题答案，结合后面找工作的内容则选择B选项。',
                content4:'2. 答案【C】 to register for an allowance from the government.',
                content5:'解析：',
                content6:"词义句意题。先根据题干定位到第二段第三行，to sign on前面有一个很明显的not，则我们可以推知，这一定是前面的反义，我们只要读懂前面半部分就可以了，前面说应该spend looking for work，正好和A选项相符，所以我们只要选择一个相反的选项即可，则选择C选项。",
                content7:'3. 答案【A】 A desire to secure a better life for all.',
                content8:'解析：',
                content9:'细节题。本道题的关键是题目中的prompted和chancellor，根据chancellor能定位到二段第五行，再向下寻找则可发现motivate和prompt是对应的，所以看本句即可发现和A选项是对应的。',
                content10:'4. 答案【A】 uneasy.',
                content11:'解析：',
                content12:'细节题。本道题根据unemployed回到文中定位在第三段的最后一句，没有感觉相关内容，所以需要向前找答案，再根据本段第一句话中的losing a job即可判定答案在第二句，因此选择A选项。另我们会发现BCD三个选项趋于强烈和负面，所以，我们选择A选项。',
                content13:'5. 答案【B】 Osborne’s reforms will reduce the risk of unemployment.',
                content14:'解析：',
                content15:'细节题。本题题根据选项定位。A选项根据大写字母The British welfare system定位到最后一段的第三句，原文是“no longer”，选项与原文反向干扰。B选项根据Osborne’s reforms定位到第一段第二句，可以得出该项目可减少失业危险，所以B为正确答案。C选项根据题干“the jobseekers’ allowance”定位到最后一段倒数第二句，该句提到“no fundamental right”，恰与C选项表意相反，所以C是反向干扰。D选项根据题干“conditional”定位到最后一段最后一句，其中只提到“conditional on actively seeking a job…”，并没有要说以后应该怎样，所以属于无中生有。'
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
                            &emsp;&emsp;{`In order to “change lives for the better” and reduce “dependency,” George Orbome, Chancellor of the Exchequer, introduced the “upfront work search” scheme. Only if the jobless arrive at the jobcentre with a CV register for online job search, and start looking for work will they be eligible for benefit-and then they should report weekly rather than fortnightly. What could be more reasonable?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`More apparent reasonableness followed. There will now be a seven-day wait for the jobseeker’s allowance. “Those first few days should be spent looking for work, not looking to sign on.” he claimed. “We’re doing these things because we know they help people say off benefits and help those on benefits get into work faster” Help? Really? On first hearing, this was the socially concerned chancellor, trying to change lives for the better, complete with “reforms” to an obviously indulgent system that demands too little effort from the newly unemployed to find work, and subsides laziness. What motivated him, we were to understand, was his zeal for “fundamental fairness”-protecting the taxpayer, controlling spending and ensuring that only the most deserving claimants received their benefits.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Losing a job is hurting: you don’t skip down to the jobcentre with a song in your heart, delighted at the prospect of doubling your income from the generous state. It is financially terrifying, psychologically embarrassing and you know that support is minimal and extraordinarily hard to get. You are now not wanted; you support is minimal and extraordinarily hard to get. You are now not wanted; you are now excluded from the work environment that offers purpose and structure in your life. Worse, the crucial income to feed yourself and your family and pay the bills has disappeared. Ask anyone newly unemployed what they want and the answer is always: a job.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But in Osborneland, your first instinct is to fall into dependency —permanent dependency if you can get it — supported by a state only too ready to indulge your falsehood. It is as though 20 years of ever-tougher reforms of the job search and benefit administration system never happened. The principle of British welfare is no longer that you can insure yourself against the risk of unemployment and receive unconditional payments if the disaster happens. Even the very phrase “jobseeker’s allowance” — invented in 1996 — is about redefining the unemployed as a “jobseeker” who had no mandatory right to a benefit he or she has earned through making national insurance contributions.Instead, the claimant receives a time-limited “allowance,” conditional on actively seeking a job; no entitlement and no insurance, at ?71.70 a week, one of the least generous in the EU.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. George Osborne’s scheme was intended to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] provide the unemployed with easier access to benefits.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] encourage jobseekers’ active engagement in job seeking.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] motivate the unemployed to report voluntarily.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] guarantee jobseekers’ legitimate right to benefits.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. The phrase “to sign on”(Line 3,Para.2) most probably means`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] to check on the availability of jobs at the jobcentre.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] to accept the government’s restrictions on the allowance.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] to register for an allowance from the government.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] to attend a governmental job-training program.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. What promoted the chancellor to develop his scheme?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] A desire to secure a better life for all.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] An eagerness to protect the unemployed.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] An urge to be generous to the claimants.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] A passion to ensure fairness for taxpayers.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. According to Paragraph 3, being unemployed makes one one feel`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] uneasy.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] enraged.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] insulted.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] guilty.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. To which of the following would the author most probably agree?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] The British welfare system indulges jobseekers’ laziness.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Osborne’s reforms will reduce the risk of unemployment.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] The jobseekers’ allowance has met their actual needs.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Unemployment benefits should not be made conditional.`}
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