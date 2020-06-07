import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read4 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【A】 help little to reduce gender bias',
                content2: '解析：',
                content3: '纵观全文，文章一直在论述该法案，在最后一段作者提出了自己的想法，下次有人把企业配额作为促进性别平等的一种方式。请记住，这些基本上都是自私自利的措施，让他们的赞助商感觉良好，但其实并没有什么帮助，由此可见作者对此法案采取否定态度，A help little to reduce gender bias对减少性别偏见没什么帮助为同义替换的正确选项',
                content4: '2. 答案【C】 it may go against the constitution',
                content5: '解析：',
                content6: '根据题干中的关键词 California measures定位到原文第五段第二句，Because the California law applies to all boards, ... courts are likely to rule that the law violate the constitutional guarantee of "equal protection" violate 违反宪法，选项C against替换violate为正确选项',
                content7: '3. 答案【D】 the needlessness of government interventions',
                content8: '解析：',
                content9: '根据题干中catalyst替换到第7段，论点为上一句The number of women on corporate boards has been steadily increasing without government . 在没有政府的情况下，公司董事会中的妇女人数一直在稳步增加。可见D选项中the needlessness of government interventions政府干预的不必要性',
                content10: '4. 答案【C】 the entry of unqualified candidates into the board',
                content11: '解析：',
                content12: '根据Norway定位到倒数第三段第一句，要求将性别作为董事会成员的主要资格，必然会导致私营部门董事会减少。紧接着下文董事会成员的机会越来越多，却没有合格的女性来担任董事会成员， 由此可见会有不合格的人进入董事会，正确选项C 不合格候选人进入董事会',
                content13: '5. 答案【B】 Feasibility should be a prime concern in policymaking',
                content14: '解析：',
                content15: '由最后一段可知，下次有人把企业配额作为促进性别平等的一种方式。请记住，这些基本上都是自私自利的措施，让他们的赞助商感觉良好，但其实并没有什么帮助。由此可知该政策并不可取，正确选项B可行性应是决策的首要考虑因素'
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
                            &emsp;&emsp;{`Progressives often support diversity mandates as a path to equality and a way to level the playing field. But all too often such policies are an insincere form of virtue-signaling that benefits only the most privileged and does little to help average people.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`A pair of bills sponsored by Massachusetts state Senator Jason Lewis and House Speaker Pro Tempore Patricia Haddad, to ensure "gender parity" on boards and commissions, provide a case in point.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Haddad and Lewis are concerned that more than half the state-government boards are less than 40 percent female. In order to ensure that elite women have more such opportunities, they have proposed imposing government quotas. If the bills become law, state boards and commissions will be required to set aside 50 percent of board seats for women by 2022.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The bills are similar to a measure recently adopted in Califomia, which last year became the first state to require gender quotas for private companies. In signing the measure, California Governor Jerry Brown admitted that the law, which expressly classifies people on the basis of sex, is probably unconstitutional.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The US Supreme Court frowns on sex-based classifications unless they are designed to address an "important" policy interest, Because the California law applies to all boards, even where there is no history of prior discrimination, courts are likely to rule that the law violates the constitutional guarantee of "equal protection".`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But are such government mandates even necessary? Female participation on corporate boards may not currently mirror the pereentage of women in the general population, but so what?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The number of women on corporate boards has been steadily increasing without government interference. According to a study by Catalyst, between 2010 and 2015 the share of women on the boards of global corporations increased by 54 percent.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Requiring companies to make gender the primary qualification for board membership will inevitably lead to less experienced private sector boards. That is exactly what happened when Norway adopted a nationwide corporate gender quota.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Wrting in The New Republic, Alice Lee notes that increasing the number of opportunities for board membership without increasing the pool of qualified women to serve on such boards has led to a"golden skirt "phenomenon, where the same clite women scoop up multiple seats on a variety of boards.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Next time somebody pushes corporate quotas as a way to promote gender equity, remember that such policies are largely self-serving measures that make their sponsors feel good but do litle to help average women.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. The author believes that the bills sponsored by Lewis and Haddad wills________`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] help little to reduce gender bias.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] pose a threat to the state government.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] raise women's position in politics.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] greatly broaden career options.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. Which of the following is true of the California measure?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] It has irritated private business owners.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] It is welcomed by the Supreme Court,`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] It may go against the Constitution.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] It will settle the prior controversies.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. The author mentions the study by Catalyst to ilustrate____`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the harm from arbitrary board decision.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the importance of constitutional guaranees.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the pressure on women in global corporations.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the needlessness of government interventions.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. Norway's adoption of a nationwide corporate gender quota has led to____`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the underestimation of elite women's role.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the objection to female participation on boards.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the entry of unqualified candidates into the board.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the growing tension between labor and management.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following can be inferred from the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Women's need in employment should be considered.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Feasibility should be a prime concern in policymaking.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Everyone should try hard to promote social justice.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Major social issues should be the focus of legislation.`}
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