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
            answerContent: ["1.B.Trusting them.                                                                               2.B. prevent us from making further efforts                                                                  3.D. We should press our government to lead the combat                                                                                       4. D. a top down process                                                                           5.C. are far from sufficient"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 10</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　I was addressing a small gathering in a suburban Virginia living room -- a women's group that had invited men to join them. Throughout the evening one man had been particularly talkative frequently offering ideas and anecdotes while his wife sat silently beside him on the couch. Toward the end of the evening I commented that women frequently complain that their husbands don't talk to them. This man quickly concurred. He gestured toward his wife and said "She's the talker in our family." The room burst into laughter; the man looked puzzled and hurt. "It's true" he explained. "When I come home from work I have nothing to say. If she didn't keep the conversation going we'd spend the whole evening in silence."

                        This episode crystallizes the irony that although American men tend to talk more than women in public situations they often talk less at home. And this pattern is wreaking havoc with marriage.

                        The pattern was observed by political scientist Andrew Hacker in the late '70s. Sociologist Catherine Kohler Riessman reports in her new book "Divorce Talk" that most of the women she interviewed -- but only a few of the men -- gave lack of communication as the reason for their divorces. Given the current divorce rate of nearly 50 percent that amounts to millions of cases in the United States every year -- a virtual epidemic of failed conversation.

                        In my own research complaints from women about their husbands most often focused not on tangible inequities such as having given up the chance for a career to accompany a husband to his or doing far more than their share of daily life-support work like cleaning cooking social arrangements and errands. Instead they focused on communication: "He doesn't listen to me" "He doesn't talk to me." I found as Hacker observed years before that most wives want their husbands to be first and foremost conversational partners but few husbands share this expectation of their wives.

　　In short the image that best represents the current crisis is the stereotypical cartoon scene of a man sitting at the breakfast table with a newspaper held up in front of his face while a woman glares at the back of it wanting to talk.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. What is most wives' main expectation of their husbands??{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.Talking to them.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.Trusting them.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.Supporting their careers.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. Shsring housework.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Judging from the context ,the phrase “wreaking havoc”(Line 3,Para.2)most probably means ___ .{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. mislead us into doing worthless things{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. prevent us from making further efforts{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. weaken our sense of accomplishment{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. suppress our desire for success{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3. By pointing out our identity as “citizens,",the author indicates that . {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. our focus should be shifted to community welfare{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. our relationship with local industries is improving{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. We have been actively exercising our civil rights{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. We should press our government to lead the combat{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. DeSombre argues that the best way for a collective change should be {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. a win-win arrangement{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. a self-driven mechanism{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. a cost-effective approach{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. a top down process{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. The author concludes that individual efforts ___. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. can be too aggressive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. can be too inconsistent{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. are far from sufficient{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. are far from rational</Text>
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
        marginLeft: '40%',
        marginBottom: 20 * s,
        marginTop: 10
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
