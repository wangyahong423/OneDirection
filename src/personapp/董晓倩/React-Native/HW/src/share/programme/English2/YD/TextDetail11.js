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
            answerContent: ["1.C. the health problems of the chief executives                           2.A. the change of the chief executive                                                             3.D. someone who is likely to take over a person's position when that person leaves                                                                                      4.B.prefers to appoint a new boss from within                                                5.D. praiseful"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 11</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　Charlie Bell became chief executive of McDonald's in April. Within a month doctors told him that he had colorectal cancer. After stockmarket hours on November 22nd， the fast-food firm said he had resigned； it would need a third boss in under a year. Yet when the market opened， its share price barely dipped then edged higher. After all， McDonald's had， again， shown how to act swiftly and decisively in appointing a new boss.

　　Mr Bell himself got the top job when Jim Cantalupo died of a heart attack hours before he was due to address a convention of McDonald's franchisees. Mr Cantalupo was a McDonald's veteran brought out of retirement in January 2003 to help remodel the firm after sales began falling because of dirty restaurants， indifferent service and growing concern about junk food. He devised a recovery plan， backed by massive marketing， and promoted Mr Bell to chief operating officer. When Mr Cantalupo died， a rapidly convened board confirmed Mr Bell， a 44-year-old Australian already widely seen as his heir apparent， in the top job. The convention got its promised chief executive's address， from the firm's first non-American leader.

　　Yet within weeks executives had to think about what to do if Mr Bell became too ill to continue. Perhaps Mr Bell had the same thing on his mind： he usually introduced Jim Skinner， the 60-year-old vice-chairman， to visitors as the “steady hand at the wheel”。 Now Mr Skinner （pictured）， an expert on the firm's overseas operations， becomes chief executive， and Mike Roberts， head of its American operations， joins the board as chief operating officer.

　　Is Mr Roberts now the new heir apparent？ Maybe. McDonald's has brought in supposedly healthier choices such as salads and toasted sandwiches worldwide and， instead of relying for most of its growth on opening new restaurants， has turned to upgrading its 31，000 existing ones. America has done best at this； under Mr Roberts， like-for-like sales there were up by 7.5% in October on a year earlier.

　　The new team's task is to keep the revitalisation plan on course， especially overseas， where some American brands are said to face political hostility from consumers. This is a big challenge. Is an in-house succession the best way to tackle it？ Mr Skinner and Mr Roberts are both company veterans， having joined in the 1970s. Some recent academic studies find that the planned succession of a new boss groomed from within， such as Mr Bell and now （arguably） Mr Roberts， produces better results than looking hastily， or outside， for one. McDonald's smooth handling of its serial misfortunes at the top certainly seems to prove the point. Even so， everyone at McDonald's must be hoping that it will be a long time before the firm faces yet another such emergency.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.The main reason for the constant change at the top of McDonald is ________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.the board's interference{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.the falling sales{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.the health problems of the chief executives{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.the constant change of its share price{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Which of the following was NOT a cause of the falling sales of McDonald？{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.the change of the chief executive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.people's concern about junk food{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.dirty restaurant{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.indifferent service{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.The phrase “heir apparent” （Line 7， Paragraph 2） in the article most probably means____________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.someone who has the same ideas， aims and style with a person{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. someone who has the unalienable right to receive the family title.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. someone who is appointed as a heir of a person.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. someone who is likely to take over a person's position when that person leaves.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. In terms of succession at the top， McDonald_________. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. has had to made rather hasty decisions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. prefers to appoint a new boss from within{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.acts in a quick and unreasonable way{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. surprises all the people with its decisions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.Toward McDonald's reaction to emergencies at the top， the writer’s attitude can be said to be___________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.indifferent{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. doubtful{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. objective{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.praiseful</Text>
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
