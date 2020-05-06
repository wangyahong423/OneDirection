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
            answerContent: ["1.   B. urge consumers to cut the use of plastics                            2.   B. prevent us from making further efforts                                                                  3.   D: We should press our government to lead the combat                                                                                          4.   D: a top-down process                                                                    5.   C: are far from sufficient"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 14</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Amold Schwarzenegger, Dia Mirza and Adrian Grenier have a message for you: It's easy to beat plastic. They're part of a bunch of celebrities starring in a new video for World Environment Day encouraging you, the consumer, to swap out your single-use plastic staples like straws and cutlery to combat the plastics crisis.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The key messages that have been put together for World Environment Day do include a call for governments to enact legislation to curb single-use plastics. But the overarching message is directed at individuals.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;My concern with leaving it up to the individual, however, is our limited sense of what needs to be achieved. On their own, taking our own bags to the grocery store or quitting plastic straws, for example, will accomplish little and require very little of us. They could even be detrimental, satisfying a need to have "done our bit" without ever progressing onto bigger, bolder, more effective actions a kind of "moral licensing" that allays our concerns and stops us doing more and asking more of those in charge.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;While the conversation around our environment and our responsibility toward it remains centered on shopping bags and straws, we're ignoring the balance of power that implies that as "consumers" we must shop sustainably, rather than as"citizens" hold our governments and industries to account to push for real systemic change.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;It's important to acknowledge that the environment isn't everyone's priority - or even most people's. We shouldn't expect it to be. In her latest book, Why Good People Do Bad Environmental Things, Wellesley College professor Elizabeth R. DeSombre argues that the best way to collectively change the behavior of large numbers of people is for the change to be structural.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;This might mean implementing policy such as a plastic tax that adds a cost to environmentally problematic action,or banning single-use plastics altogether. India has just announced it will "eliminate all single-use plastic in the country by 2022." There are also incentive-based ways of making better environmental choices easier, such as ensuring recycling is at least as easy as trash disposal.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;DeSombre isn't saying people should stop caring about the environment. It's just that individual actions are too slow,she says, for that to be the only, or even primary, approach to changing widespread behavior.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;None of this is about writing off the individual, It's just about putting things into perspective. We don't have time to wait. We need progressive policies that shape collective action (and rein in polluting businesses), alongside engaged citizens pushing for change.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. Some celebrities star in a new video to.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. demand new laws on the use of plastics{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. urge consumers to cut the use of plastics{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. invite public opinion on the plastics crisis{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. disclose the causes of the plastics crisis{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2. The author is concerned that moral licensing" may ____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. mislead us into doing worthless things{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. prevent us from making further efforts{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. weaken our sense of accomplishment{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. suppress our desire for success{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3. By pointing out our identity as “citizens,",the author indicates that . {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. our focus should be shifted to community welfare{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. our relationship with local industries is improving{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. We have been actively exercising our civil rights{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. We should press our government to lead the combat{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. DeSombre argues that the best way for a collective change should be {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. a win-win arrangement{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. a self-driven mechanism{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. a cost-effective approach{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. a top down process{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. The author concludes that individual efforts ___. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. can be too aggressive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. can be too inconsistent{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. are far from sufficient{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. are far from rational</Text>
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
