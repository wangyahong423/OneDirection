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
            answerContent: ["1.A.gained great popularity                                                 2.B.promote sport participation                                                                  3.C.does not emphasize elitism                                                                                      4.D.invest in public sports facilities                                                 5. B.critical"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 5</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　Every Saturday morning, at 9 am, more than 50,000 runners set off to run 5km around their local park. The Parkrun phenomenon began with a dozen friends and has inspired 400 events in the UK and more abroad. Events are free, staffed by thousands of volunteers. Runners range from four years old to grandparents; their times range from Andrew Baddeley's world record 13 minutes 48 seconds up to an hour.

                        Parkrun is succeeding where London's Olympic "legacy" is failing. Ten years ago on Monday, it was announced that the Games of the 30th Olympiad would be in London. Planning documents pledged that the great legacy of the Games would be to level a nation of sport lovers away from their couches. The population would be fitter, healthier and produce more winners. It has not happened. The number of adults doing weekly sport did rise, by nearly 2 million in the run-up to 2012-but the general population was growing faster. Worse, the numbers are now falling at an accelerating rate. The opposition claims primary school pupils doing at least two hours of sport a week have nearly halved. Obesity has risen among adults and children. Official retrospections continue as to why London 2012 failed to "inspire a generation." The success of Parkrun offers answers.

                        Parkun is not a race but a time trial: Your only competitor is the clock. The ethos welcomes anybody. There is as much joy over a puffed-out first-timer being clapped over the line as there is about top talent shining. The Olympic bidders, by contrast, wanted to get more people doing sports and to produce more elite athletes. The dual aim was mixed up: The stress on success over taking part was intimidating for newcomers.

　　Indeed, there is something a little absurd in the state getting involved in the planning of such a fundamentally "grassroots", concept as community sports associations. If there is a role for government, it should really be getting involved in providing common goods-making sure there is space for playing fields and the money to pave tennis and netball courts, and encouraging the provision of all these activities in schools. But successive governments have presided over selling green spaces, squeezing money from local authorities and declining attention on sport in education. Instead of wordy, worthy strategies, future governments need to do more to provide the conditions for sport to thrive. Or at least not make them worse.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. According to Paragraph1, Parkrun has_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.gained great popularity{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.created many jobs{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.strengthened community ties{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.become an official festival{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.The author believes that London's Olympic "legacy" has failed to_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.boost population growth{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.promote sport participation{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.improve the city's image{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.increase sport hours in schools{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.Parkrun is different from Olympic games in that it_____. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.aims at discovering talents{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.focuses on mass competition{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.does not emphasize elitism{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.does not attract first-timers

{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.With regard to mass sport, the author holds that governments should_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.organize "grassroots" sports events{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.supervise local sports associations&nbsp;&nbsp;&nbsp;&nbsp;C.increase funds for sports clubs{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.invest in public sports facilities{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.The author's attitude to what UK governments have done for sports is_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.tolerant{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.critical{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.uncertain{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.sympathetic</Text>
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
