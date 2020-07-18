import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu19 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[to test missile defense systems][定位]首段。解析：原文该段中修饰nuclear treaty的定语从句表明了美国退出核仿控制条约的原因，且原文中的bans...与题目中的require... not同义。要注意的是，require常用require sb.to do/not to do sth.，因此，回答本题时，要先将原文中的testing改为动词不定式形式to test，故本题答案为to best missile defense systems。',
                content3: '2.[In six months.][定位]开关两段。解析：第2段段末的six months‘notice before...表明美国将在6个月后正式退出条约，故答案为“6个月后”，注意在将来时中表达“6个月后”要用介词in而非after。',
                content5: '3.[a nuclear arms race][定位]第4段首句。解析：原文该句中的trigger与题目中的bring about都有“导致”的意思，由此可见，原文中tigger的宾语a nuclear arms为本题答案。',
                content7: '4.[Approving/Supportive.][定位]第8段。解析：原文该段末的...US-Russian relations would not suffer even if Bush pulled out of the treaty表明俄罗斯对美国退出ABM条约的态度是“认可的”，这种态度可以表达为approving或supportive。',
                content9: '5.[a US missile defense][定位]末段。解析：该段段末的but表明at odds与该段前半个分句中的agreement表达的含义相反，可见美俄两国在a US missile defense方面未能达成一致，故可知答案。',
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
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content10}</Text>

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
                            &emsp;&emsp;{`US President Bush will soon give Russia notice that the United States is withdrawing from the 1972 nucleartreaty that bans testing of missile defense systems. US government officials said on Tuesday.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`He will announce the decision in the next several days, effectively citing a clause in the Anti-Ballistic Missile Treaty that requires the United States and Russia to give six months' notice before abandoning thepact.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Wich the decision, Bush takes the first step foward fulfilling a campaign pledge to develop and deploy an anti-missile system that he says will protect the United States and its allies, including Russia, from missiles fired by hostile nations.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Russia and many US allies have warned Bush that withdrawing from the pact might trigger a nuclear arms race. Critics of the plan also question whether an effective system can be developed without enormous expense.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The president defended his push for a missile shield during a national security speech Tuesday at the Citadel in South Carolina.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"Last week we conducted another promising test of our missile defense technology," Bush said. "For the good of peace, we're moving forward with an active program to determine what works and what does not work. In order to do so, we must move beyond the 1972 Anti-Ballistic Missile Treaty, a treaty that was written ina different era, for a different enemy."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"America and our allies must not be bound to the past. We must be able to build the defenses we need against the enemies of the 2lst century," he said.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`According to Bush administration officials, Russian President Vladimir Putin had assured Bush during theirOctober talks in Washington that US-Russian relations would not suffer even if Bush pulled out of the treaty.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The decision came as Secretary of State Colin Powell, in Moscow, said Russia and the United States are near agreement on drastic cuts in long-range nuclear arsenals, but remain, at odds over a US missile defense.`}
                        </Text>
                        <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                            阅读自测
                        </Text>
                        <Text style={{ fontSize: 16 * s, marginTop: 5 * s }}>
                            Choose correct answers to the question:
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        1.The U.S. decided to withdraw from the nuclear treaty because the treaty required its members not__________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        2.When will the U.S. withdraw from the nuclear treaty?
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        3.According to Russia, US' withdrawal from the treaty may bring about__________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        4.What is Russia's attitude towards U.S. withdrawal from the 1972 ABM Treaty?
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        5.Russian and the U.S. still couldn't reach agreement on_________________.
                        </Text>
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