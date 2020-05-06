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
            answerContent: ["1.B.absorb user attention                                                2.D.reduces mother-child communication                                                                 3. D.parents need to respond to children's emotional needs                                     4.C.ensure constant interaction with their children                  5. A.give their parents some free time"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 6</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;With so much focus on children's use of screens, it's easy for parents to forget about their own screen use. "Tech is designed to really suck on you in," says Jenny Radesky in her study of digital play, "and digital products are there to promote maximal engagement. It makes it hard to disengage, and leads to a lot of bleed-over into the family routine."

                        Radesky has studied the use of mobile phones and tablets at mealtimes by giving mother-child pairs a food-testing exercise. She found that mothers who sued devices during the exercise started 20 percent fewer verbal and 39 percent fewer nonverbal interactions with their children. During a separate observation, she saw that phones became a source of tension in the family. Parents would be looking at their emails while the children would be making excited bids for their attention.

                        Infants are wired to look at parents' faces to try to understand their world, and if those faces are blank and unresponsive—as they often are when absorbed in a device-it can be extremely disconcerting foe the children. Radesky cites the "still face experiment" devised by developmental psychologist Ed Tronick in the 1970s. In it, a mother is asked to interact with her child in a normal way before putting on a blank expression and not giving them any visual social feedback; The child becomes increasingly distressed as she tries to capture her mother's attention. "Parents don't have to be exquisitely parents at all times, but there needs to be a balance and parents need to be responsive and sensitive to a child’s verbal or nonverbal expressions of an emotional need," says Radesky.

　　On the other hand, Tronick himself is concerned that the worries about kids' use of screens are born out of an "oppressive ideology that demands that parents should always be interacting" with their children: "It's based on a somewhat fantasized, very white, very upper-middle-class ideology that says if you're failing to expose your child to 30,000 words you are neglecting them." Tronick believes that just because a child isn't learning from the screen doesn't mean there's no value to it-particularly if it gives parents time to have a shower, do housework or simply have a break from their child. Parents, he says, can get a lot out of using their devices to speak to a friend or get some work out of the way. This can make them feel happier, which lets then be more available to their child the rest of the time.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.According to Jenny Radesky, digital products are designed to ______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.simplify routine matters{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.absorb user attention{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.better interpersonal relations{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.increase work efficiency{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Radesky's food-testing exercise shows that mothers' use of devices ______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.takes away babies' appetite{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.distracts children's attention{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. slows down babies' verbal development{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.reduces mother-child communication{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.Radesky's cites the "still face experiment" to show that _______. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.it is easy for children to get used to blank expressions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.verbal expressions are unnecessary for emotional exchange{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.children are insensitive to changes in their parents' mood{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.parents need to respond to children's emotional needs{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.The oppressive ideology mentioned by Tronick requires parents to_______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.protect kids from exposure to wild fantasies{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.teach their kids at least 30,000 words a year{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.ensure constant interaction with their children{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.remain concerned about kid's use of screens{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.According to Tronick, kid's use of screens may_______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.give their parents some free time{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.make their parents more creative{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.help them with their homework{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.help them become more attentive</Text>
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
