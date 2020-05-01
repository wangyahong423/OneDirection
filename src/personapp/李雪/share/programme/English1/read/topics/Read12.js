import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read12 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【D】 the attraction of financial rewards.',
                content2: '解析：',
                content3: '该题是因果细节题，考察细节。首先，根据段落定位原则模糊定位，定位到前几段。其次，再精确定位，题干中有关键词“students”“law”“profession”，回到原文寻找相关信息。第一段未发现相关信息，然后到第二段看到“The best lawyers made skyscrapers-full of money, tempting ever more students to pile into law schools.”与题干有重合之处，选项D是该句的同义替换。A、B、C三个选项根据原文个别词汇“clients”“inflation”“big-firm”等进行干扰。注意，第一段的But是个假转折词，并非答案处。',
                content4:'2. 答案【C】 Pursuing a bachelor’s degree in another major.',
                content5:'解析：',
                content6:"该题是细节题，考察细节。首先根据段落定位原则定位到第三段。其次，根据题干关键词“the costs of legal education”精确定位到第三段第二句话“One is the excessive costs of a legal education.”问题是“which of the following adds to the costs of legal education”，因此定位句的下一句就是答案，即“There is just one path for a lawyer in most American states: a four-year undergraduate degree in some unrelated subject, then a three-year law degree at one of 200 law schools accredited by the American Bar Association and an expensive preparation for the bar exam.”分析选项可知，选项C恰当概况了该句子的涵义。A选项利用三段末尾的“This leaves today’s average law-school graduate with $100,000 of debt on top of undergraduate debts.”进行干扰。B选项无中生有。D选项根据四段最后一句出现的“training”个别词汇进行干扰。",
                content7:'3. 答案【B】 the rigid bodies governing the profession.',
                content8:'解析：',
                content9:'该题是原因细节题，问来源。首先段落定位原则定位到第四段。其次，根据题干关键词“the reform of the legal system”定位到第二句“Sensible ideas have been around for a long time, but the state-level bodies that govern the profession have been too conservative to implement them.”选项B即为该句的同义替换。',
                content10:'4. 答案【A】 bans outsiders’ involvement in the profession.',
                content11:'解析：',
                content12:'该题为因果细节题，问原因。根据段落定位原则定位至倒数第二段。其次，题干中出现“the guild-like ownership structure”，精确定位到第二句“Except in the District of Columbia, non-lawyers may not own any share of a law firm. This keeps fees high and innovation slow.”此外，在该段最后一句提到“…keeping outsiders out of a law firm isolates lawyers from the pressure to make money rather than serve clients ethically.”从而可以得出答案选A。',
                content13:'5. 答案【C】 a problem in America’s legal profession and solutions to it.',
                content14:'解析：',
                content15:'该题为文章主旨题，考察文章中心。该篇文章属于问题解决型文章，前5段均在说美国法律职业存在的问题，最后一段提出了解决措施“allowing non-lawyers to own shares in law firms would reduce costs and improve services to customers, by encouraging law firms to use technology and to employ professional managers to focus on improving firms’ efficiency.”。因此，该篇属于问题解决型文章，选C。其他几个选项均为文中的个别细节，以偏概全。'
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
                            &emsp;&emsp;{`All around the world, lawyers generate more hostility than the members of any other profession---with the possible exception of journalism. But there are few places where clients have more grounds for complaint than America.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`During the decade before the economic crisis, spending on legal services in America grew twice as fast as inflation. The best lawyers made skyscrapers-full of money, tempting ever more students to pile into law schools. But most law graduates never get a big-firm job. Many of them instead become the kind of nuisance-lawsuit filer that makes the tort system a costly nightmare.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`There are many reasons for this. One is the excessive costs of a legal education. There is just one path for a lawyer in most American states: a four-year undergraduate degree at one of 200 law schools authorized by the American Bar Association and an expensive preparation for the bar exam. This leaves today’s average law-school graduate with $100,000 of debt on top of undergraduate debts. Law-school debt means that they have to work fearsomely hard.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Reforming the system would help both lawyers and their customers. Sensible ideas have been around for a long time, but the state-level bodies that govern the profession have been too conservative to implement them. One idea is to allow people to study law as an undergraduate degree. Another is to let students sit for the bar after only two years of law school. If the bar exam is truly a stern enough test for a would-be lawyer, those who can sit it earlier should be allowed to do so.Students who do not need the extra training could cut their debt mountain by a third.The other reason why costs are so high is the restrictive guild-like ownership structure of the business. Except in the District of Columbia, non-lawyers may not own any share of a law firm. This keeps fees high and innovation slow. There is pressure for change from within the profession, but opponents of change among the regulators insist that keeping outsiders out of a law firm isolates lawyers from the pressure to make money rather than serve clients ethically.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In fact,allowing non-lawyers to own shares in law firms would reduce costs and improve services to customers, by encouraging law firms to use technology and to employ professional managers to focus on improving firms’ efficiency. After all, other countries, such as Australia and Britain, have started liberalizing their legal professions. America should follow.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. a lot of students take up law as their profession due to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the growing demand from clients.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the increasing pressure of inflation.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the prospect of working in big firms.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the attraction of financial rewards.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. Which of the following adds to the costs of legal education in most American states?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Higher tuition fees for undergraduate studies.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Admissions approval from the bar association.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Pursuing a bachelor’s degree in another major.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Receiving training by professional associations.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. Hindrance to the reform of the legal system originates from`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] lawyers’ and clients’ strong resistance.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the rigid bodies governing the profession.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the stem exam for would-be lawyers.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] non-professionals’ sharp criticism.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The guild-like ownership structure is considered “restrictive” partly because it`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] bans outsiders’ involvement in the profession.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] keeps lawyers from holding law-firm shares.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] aggravates the ethical situation in the trade.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] prevents lawyers from gaining due profits.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. In this text, the author mainly discusses`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] flawed ownership of America’s law firms and its causes.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the factors that help make a successful lawyer in America.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] a problem in America’s legal profession and solutions to it.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the role of undergraduate studies in America’s legal education.`}
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