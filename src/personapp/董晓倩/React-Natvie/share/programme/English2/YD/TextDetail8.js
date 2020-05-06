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
            answerContent: ["1.B.consumed a record-high percentage of budget                          2.D.guarantee safer spending of public funds                                                                  3.D. We should press our government to lead the combat                                                                                          4.C.other factors should not be overlooked                                                    5.B.come to terms with"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 8</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Though often viewed as a problem for western states, the growing frequency of wildfires is a national concern because of its impact on federal tax dollars, says Professor Max Moritz, a specialist in fire ecology and management.

                        In 2015, the US Forest Service for the first time spent more than half of its $5.5 billion annual budget fighting fires-nearly double the percentage it spent on such efforts 20 years ago. In effect, fewer federal funds today are going towards the agency's other work-such as forest conservation, watershed and cultural resources management, and infrastructure upkeep-that affect the lives of all Americans.

                        Another nationwide concern is whether public funds from other agencies are going into construction in fire-prone districts. As Moritz puts it, how often are federal dollars building homes that are likely to be lost to a wildfire?

                        "It's already a huge problem from a public expenditure perspective for the whole country," he says. We need to take a magnifying glass to that. Like, "Wait a minute, is this OK?" "Do we want instead to redirect those funds to concentrate on lower-hazard parts of the landscape?"

                        Such a view would require a corresponding shift in the way US society today views fire, researchers say.

                        For one thing, conversations about wildfires need to be more inclusive. Over the past decade, the focus has been on climate change-how the warming of the Earth from greenhouse gases is leading to conditions that worsen fires.

                        While climate is a key element, Moritz says, it shouldn't come at the expense of the rest of the equation.

                        "The human systems and the landscapes we live on are linked, and the interactions go both ways," he says. Failing to recognize that, he notes, leads to "an overly simplified view of what the solutions might be. Our perception of the problem and of what the solution is becomes very limited."

                        At the same time, people continue to treat fire as an event that needs to be wholly controlled and unleashed only out of necessity, says Professor Balch at the University of Colorado. But acknowledging fire's inevitable presence in human life is an attitude crucial to developing the laws, policies, and practices that make it as safe as possible, she says.

　　"We've disconnected ourselves from living with fire," Balch says. "It is really important to understand and try and tease out what is the human connection with fire today."</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.More frequent wildfires have become a national concern because in 2015 they_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.exhausted unprecedented management efforts{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.consumed a record-high percentage of budget{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.severely damaged the ecology of western states{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.caused a huge rise of infrastructure expenditure{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2. Moritz calls for the use of "a magnifying glass" to _____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.raise more funds for fire-prone areas{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.avoid the redirection of federal money{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.find wildfire-free parts of the landscape{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.guarantee safer spending of public funds{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.While admitting that climate is a key element, Moritz notes that _____. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.public debates have not settled yet{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.fire-fighting conditions are improving{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.other factors should not be overlooked{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.a shift in the view of fire has taken place{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.The overly simplified view Moritz mentions is a result of failing to _____. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.A.discover the fundamental makeup of nature{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.explore the mechanism of the human systems{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.maximize the role of landscape in human life{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.understand the interrelations of man and nature{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.Professor Balch points out that fire is something man should _____. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.A.do away with{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.come to terms with{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.pay a price for{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.keep away from</Text>
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
