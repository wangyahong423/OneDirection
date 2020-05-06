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
            answerContent: ["1.   A. foster a child's moral development                            2.   D. burdensome                                                                  3.   B. an emotion can play opposing roles                                      4.   B. can result from either sympathy or guilt                  5.   D. wrongdoings"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 1</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Unlike so-called basic emotions such as sadness, fear, and anger, guilt emerges a little later, in conjunction with a child's growing grasp of social and moral norms. Children aren't born knowing how to say "I'm sorry”; rather, they learn over time that such statements appease parents and friends - and their own consciences. This is why researchers generally regard so-called moral guilt, in the right amount, to be a good thing.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;In the popular imagination, of course, guilt still gets a bad rap. It is deeply uncomfortable - it's the emotional equivalent of wearing a jacket weighted with stones. Yet this understanding is outdated. "There has been a kind of revival or a rethinking about what guilt is and what role guilt can serve," says Amrisha Vaish, a psychology researcher at the University of Virginia, adding that this revival is part of a larger recognition that emotions aren't binary -feelings that may be advantageous in one context may be harmful in another. Jealousy and anger, for example, may have evolved to alert us to important inequalities. Too much happiness can be destructive.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;And guilt, by prompting us to think more deeply about our goodness, can encourage humans to make up for errors and fix relationships. Guilt, in other words, can help hold a cooperative species together. It is a kind of social glue.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Viewed in this light, guilt is an opportunity. Work by Tina Malti, a psychology professor at the University of Toronto, suggests that guilt may compensate for an emotional deficiency. In a number of studies, Malti and others have shown that guilt and sympathy may represent different pathways to cooperation and sharing Some kids who are low in sympathy may make up for that shortfall by experiencing more guilt, which can rein in their nastier impulses. And vice versa: High sympathy can substitute for low guilt.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;In a 2014 study, for example, Malti looked at 244 children Using caregiver assessments and the children's self-observations, she rated each child's overall sympathy level and his or her tendency to feel negative emotions after moral transgressions. Then the kids were handed chocolate coins, and given a chance to shared them with an anonymous child. For the low-sympathy kids, how much they shared appeared to turn on how inclined they were to feel guilty. The guilt-prone ones shared more, even though they hadn't magically become more sympathetic to the other child's deprivation. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;" That's good news, " Malti says. " We can be prosocial because we caused harm and we feel regret.”</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. Researchers think that guilt can be a good thing because it may help____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. foster a child's moral development{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. regulate a child's basic emotions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. improve a child’s intellectual ability{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. intensity a child's positive feelings{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2. According to paragraph 2, many people still consider guilt to be____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. inexcusable{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. deception{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. addictive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. burdensome{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3. Vaish hold that the rethinking about guilt comes from an awareness that . {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. emotions air context-independent{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. an emotion can play opposing roles{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. emotion are socially constructive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. emotional stability can benefit health{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. Malti and others have shown that cooperation and sharing. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. may help correct emotional deficiencies{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. can result from either sympathy or guilt{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. can bring about emotional satisfaction{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. may be the outcome of impulsive aets{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. The word "transgressions" (Line 4, Para. 5) is closest in meaning to___. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. Teachings{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. discussions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. Restrictions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. wrongdoings</Text>
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
