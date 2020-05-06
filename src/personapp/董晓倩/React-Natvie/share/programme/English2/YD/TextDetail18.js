import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class TextDetails1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["1.[B] even its supporters begin to feel concerned                           2.[C] fail to reach an agreement on harmonization                                                                3.[B] stricter regulations be imposed                                                                                        4.[A] poor countries are more likely to get funds                                                    5.[D] hopeful"],
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={{ color: 'white' }}>查看答案</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>{this.state.answerContent}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 18</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Will the European Union make it? The question would have sounded strange not long ago. Now even the project's greatest cheerleaders talk of a continent facing a "Bermuda triangle" of debt, population decline and lower growth.
　　As well as those chronic problems, the EU face an acute crisis in its economic core, the 16 countries that use the single currency. Markets have lost faith that the euro zone's economies, weaker or stronger, will one day converge thanks to the discipline of sharing a single currency, which denies uncompetitive members the quick fix of devaluation.
　　Yet the debate about how to save Europe's single currency from disintegration is stuck. It is stuck because the euro zone's dominant powers, France and Germany, agree on the need for greater harmonization within the euro zone, but disagree about what to harmonies.
　　Germany thinks the euro must be saved by stricter rules on borrow spending and competitiveness, backed by quasi- automatic sanctions for governments that do not obey. These might include threats to freeze EU funds for poorer regions and EU mega-projects and even the suspension of a country's voting rights in EU ministerial councils. It insists that economic co-ordination should involve all 27 members of the EU club, among whom there is a small majority for free-market liberalism and economic rigour; in the inner core alone, Germany fears, a small majority favour French interference.
　　A "southern" camp headed by French wants something different: "European economic government" within an inner core of euro-zone members. Translated, that means politicians intervening in monetary policy and a system of redistribution from richer to poorer members, via cheaper borrowing for governments through common Eurobonds or complete fiscal transfers. Finally, figures close to the France government have murmured, euro-zone members should agree to some fiscal and social harmonization: e.g., curbing competition in corporate-tax rates or labour costs.
　　It is too soon to write off the EU. It remains the world's largest trading block. At its best, the European project is remarkably liberal: built around a single market of 27 rich and poor countries, its internal borders are far more open to goods, capital and labour than any comparable trading area. It is an ambitious attempt to blunt the sharpest edges of globalization, and make capitalism benign.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.The EU is faced with so many problems that__________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.it has more or less lost faith in markets{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.even its supporters begin to feel concerned{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.some of its member countries plan to abandon euro{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.it intends to deny the possibility of devaluation{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.The debate over the EU's single currency is stuck because the dominant powers __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.are competing for the leading position{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.are busy handling their own crises{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.fail to reach an agreement on harmonization{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.disagree on the steps towards disintegration{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3. To solve the euro problem, Germany proposed that __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. EU funds for poor regions be increased{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. stricter regulations be imposed{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.only core members be involved in economic co-ordination{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.voting rights of the EU members be guaranteed{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.The French proposal of handling the crisis implies that __  __. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.poor countries are more likely to get funds{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. strict monetary policy will be applied to poor countries{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.loans will be readily available to rich countries{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. rich countries will basically control Eurobonds{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.Regarding the future of the EU, the author seems to feel __  __. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.pessimistic  	{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.desperate	{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.conceited	{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.hopeful</Text>
                        <Accordion
                            sections={this.state.todo}
                            activeSections={this.state.activeSections}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft:'40%',
        marginBottom:20*s,
        marginTop:10
    },
    headerText: {
        fontSize: 20
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
