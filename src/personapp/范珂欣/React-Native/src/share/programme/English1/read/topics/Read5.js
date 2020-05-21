import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read5 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【C】 impose a levy on tech multinationals',
                content2: '解析：',
                content3: '细节题。根据题干直接定位到第一段第一句话 a digital services tax, which would impose an entirely new tax on large multinationals that provide digital services…;选项C中的“levy”和“tax”同义复现;“tech multinationals” 和digital services 同义复现。因此C为正确答案，奇遇选项均未体现。',
                content4:'2. 答案【A】 may trigger countermeasures against France',
                content5:'解析：',
                content6:"推断题。根据提干定位到第二段，第二段第二句话but it has already sparked significant controversy,…,which in turn could lead to trade sanctions against France(这已经引起了巨大的反抗，…, 反过来也会导致针对法国的贸易制裁)和选项A相一致;其中选项中的“trigger”和原文的“lead to”同义复现，“sanction”和“countermeasure”同义复现。其余选项均未体现。",
                content7:'3. 答案【B】 the current international tax system needs upgrading',
                content8:'解析：',
                content9:'细节题。根据题干定位到第四段最后一句话 “they all share a view that the international tax system has failed to keep up with the current economy(他们都认为国际税收体系并未跟上当前经济形势)。选项B目前的国际税收体系需要升级是该句话的反义复现。其余选项均为体现。',
                content10:'4. 答案【C】 is faced with uncertain prospects ',
                content11:'解析：',
                content12:'细节题。根据提干定位到第五段最后一句话”raise questions about what the future holds for the international tax system(对于国际税收体系的未来充满疑虑)”和选项C相一致。其中选项中的“uncertain”和原文中的“raise questions”同义复现，“prospects”和原文中的 “future”同义复现。',
                content13:'5. 答案【B】 France leads the charge on digital tax',
                content14:'解析：',
                content15:'主旨题。题干中的title为标题题的信息，所以此题考查的是文章的主旨大意。B 选项里的 tax是贯穿全文的主旨词;而文章以法国对数字服务征税为起点，全文描写了包括法国在内的其它国家对全球税收系统的担忧，因此选项B和文章的主旨相符合。剩余选项均选项未能体现文章关键词和全文主旨。'
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
                            &emsp;&emsp;{`Last Thursday, the French Senate passed a digital services tax, which would impose an entirely new tax`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`on large multinationals that provide digital services to consumers or users in France. Digital services include everything from providing a platform for selling goods and services online to targeting advertising based on user data, and the tax applies to gross revenue from such servces. Many French politicians and media outlets have referred to this as a“GAFA tax," meaning that it is designed to apply primarily to companies such as Google, Apple, Facebook and Amazon- in other words, multiational tech companies based in the United States.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The digital services tax now awaits the signature of President Emmanuel Macron, who has expressed support for the measure, and it could go into effect within the next few weeks. But it has already sparked significant controversy, with the Unite Sates trade representative opening an investigation into whether the tax discriminates against American companies, which in turn could lead to trade sanctions against France.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The French tax is not just a unilateral move by one country in need of revenue. Instead, the digital services tax is part of a much larger trend, with countries over the past few years proposing or putting in place an alphabet soup of new international tax provisions. These have included Britain's DPT (diverted profits tax), Australia's MAAL (multinational antiavoidance law), and India's SEP (significant economic presence) test, to name but a few. At the same time, the European Union, Spain, Britain and several other countries have all seriously contemplated digital services taxes.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`These unilateral developments differ in their specifics, but they are all designed to tax multinationals on income and revenue that countries believe they should have a right to tax, even if international tax rules do not grant them that right. In other words, they all share a view that the international tax system has failed to keep ;up with the current economy.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In response to these many unilateral measures, the Organization for Economic Cooperation and Development (OECD) is currently working with 131 countries to reach a consensus by the end of 2020 on an international solution. Both France and the United States are involved in the organization' s work, but France's digital services tax and the American response raise questions about what the future holds for the international tax system.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`France‘s planned tax is a clear warning: Unless a broad consensus can be reached on reforming the international tax system, other nations are likely to follow suit, and American companies will face a cascade of different taxes from dozens of nations that will prove burdensome and costly.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`The French Senate has passed a bill to_____`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] regulate digital services platforms.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] protect French companies' interests .`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] impose a levy on tech multinationals.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] curb the influence of advertising.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. It can be learned from Paragraph 2 that the digital services tax _____`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] may trigger countermeasures against France.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] is apt to arouse criticism at home and abroad.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] aims to ease international trade tensions.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] will prompt the tech giants to quit France.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. The countries adopting the unilateral measures share the opinion that _____`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] redistribution of tech giants' revenue must be ensured.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the current international tax system needs upgrading.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] tech multinationals' monopoly should be prevented.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] all countries ought to enjoy equal taxing rights.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. It can be learned from Para 5 that the OECO's current work_____`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] is being resisted by US companies.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] needs to be readjusted immediately.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] is faced with uncertain prospects.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] needs to in involve more countries.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following might be the. best title for this text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] France Is Confronted with Trade Sanctions`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] France leads the charge on Digital Tax`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] France Says "NO" to Tech Multinationals`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] France Demands a Role in the Digital Economy`}
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