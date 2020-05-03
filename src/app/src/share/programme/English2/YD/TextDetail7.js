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
            answerContent: ["1.C.it feels strange to do differently from others                          2.D.relieve freshmen of pressures                                                                  3.A.adaptation                                                                                        4. D.decide on the right major                                                    5.A.In Favor of the Gap Year"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 7</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Today, widespread social pressure to immediately go to college in conjunction with increasingly high expectations in a fast-moving world often causes students to completely overlook the possibility of taking a gap year. After all, if everyone you know is going to college in the fall, it seems silly to stay back a year, doesn't it? And after going to school for 12 years, it doesn't feel natural to spend a year doing something that isn't academic.

                        But while this may be true, it's not a good enough reason to condemn gap years. There's always a constant fear of falling behind everyone else on the socially perpetuated "race to the finish line," whether that be toward graduate school, medical school or lucrative career. But despite common misconceptions, a gap year does not hinder the success of academic pursuits-in fact, it probably enhances it.

                        Studies from the United States and Australia show that students who take a gap year are generally better prepared for and perform better in college than those who do not. Rather than pulling students back, a gap year pushes them ahead by preparing them for independence, new responsibilities and environmental changes-all things that first-year students often struggle with the most. Gap year experiences can lessen the blow when it comes to adjusting to college and being thrown into a brand new environment, making it easier to focus on academics and activities rather than acclimation blunders.

　　If you're not convinced of the inherent value in taking a year off to explore interests, then consider its financial impact on future academic choices. According to the National Center for Education Statistics, nearly 80 percent of college students end up changing their majors at least once. This isn’t surprising, considering the basic mandatory high school curriculum leaves students with a poor understanding of themselves listing one major on their college applications, but switching to another after taking college classes. It’s not necessarily a bad thing, but depending on the school, it can be costly to make up credits after switching too late in the game. At Boston College, for example, you would have to complete an extra year were you to switch to the nursing school from another department. Taking a gap year to figure things out initially can help prevent stress and save money later on.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. One of the reasons for high-school graduates not taking a gap year is that_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.they think it academically misleading{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.they have a lot of fun to expect in college{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.it feels strange to do differently from others{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.it seems worthless to take off-campus courses{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Studies from the US and Australia imply that taking a gap year helps_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.keep students from being unrealistic{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.lower risks in choosing careers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.ease freshmen's financial burdens{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.relieve freshmen of pressures{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.The word "acclimation" (Line 8, Para. 3) is closest in meaning to_____.&nbsp;&nbsp;&nbsp;A.adaptation{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.application{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.motivation{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.competition{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.A gap year may save money for students by helping them_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.avoid academic failures{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.establish long-term goals{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.switch to another college{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.decide on the right major{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.The most suitable title for this text would be_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.In Favor of the Gap Year{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.The ABCs of the Gap Year{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.The Gap Year Comes Back{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.The Gap Year: A Dilemma</Text>
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
