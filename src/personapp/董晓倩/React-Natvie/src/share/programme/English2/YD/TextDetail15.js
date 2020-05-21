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
            answerContent: ["1.B.failing to fulfill her duty                                                                  2.D.independent advisers                                                                                    3.C.do less well in the stock market                                                                                          4.A. may stay for the attractive offers from the firm                                                    5.B.positive	 	"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 15</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　Ruth Simmons joined Goldman Sachs's board as an outside director in January 2000: a year later she became president of Brown University. For the rest of the decade she apparently managed both roles without attracting much criticism. But by the end of 2009 Ms. Simmons was under fire for having sat on Goldman's compensation committee; how could she have let those enormous bonus payouts pass unremarked? By February the next year Ms. Simmons had left the board. The position was just taking up too much time, she said.
　　Outside directors are supposed to serve as helpful, yet less biased, advisers on a firm's board. Having made their wealth and their reputations elsewhere, they presumably have enough independence to disagree with the chief executive's proposals. If the sky, and the share price, is falling, outside directors should be able to give advice based on having weathered their own crises.
　　The researchers from Ohio University used a database that covered more than 10,000 firms and more than 64,000 different directors between 1989 and 2004. Then they simply checked which directors stayed from one proxy statement to the next. The most likely reason for departing a board was age, so the researchers concentrated on those "surprise" disappearances by directors under the age of 70. They found that after a surprise departure, the probability that the company will subsequently have to restate earnings increased by nearly 20%. The likelihood of being named in a federal class-action lawsuit also increases, and the stock is likely to perform worse. The effect tended to be larger for larger firms. Although a correlation between them leaving and subsequent bad performance at the firm is suggestive, it does not mean that such directors are always jumping off a sinking ship. Often they "trade up." Leaving riskier, smaller firms for larger and more stable firms.
　　But the researchers believe that outside directors have an easier time of avoiding a blow to their reputations if they leave a firm before bad news breaks, even if a review of history shows they were on the board at the time any wrongdoing occurred. Firms who want to keep their outside directors through tough times may have to create incentives. Otherwise outside directors will follow the example of Ms. Simmons, once again very popular on campus.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp; According to Paragraph 1, Ms. Simmons was criticized for _________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;gaining excessive profits{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. failing to fulfill her duty{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.refusing to make compromises{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.leaving the board in tough times.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2. We learn from Paragraph 2 that outside directors are supposed to be _________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. generous investors {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.unbiased executives{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.share price forecasters{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.independent advisers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.According to the researchers from Ohio University after an outside director's surprise departure, the firm is likely to _________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.become more stable{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.report increased earnings{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.do less well in the stock market {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.perform worse in lawsuits{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.It can be inferred from the last paragraph that outside directors _________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.may stay for the attractive offers from the firm{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.have often had records of wrongdoings in the firm{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.are accustomed to stress-free work in the firm{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.will decline incentives from the firm{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.The author's attitude toward the role of outside directors is _________. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. permissive {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.positive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.scornful	{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.critical</Text>
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
