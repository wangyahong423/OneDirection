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
            answerContent: ["1.D. quality service                                                                             2.D.mislead the European commission                                                                3.B.may worsen the economic imbalance                                                                                         4.A. they are no defined as customers                                                      5.C. the benefits provided for digital giants' customers"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 13</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;The power and ambition of the giants of the digital economy is astonishing- Amazon has just announced the purchase of the up market grocery chain Whole Foods for $13.5bn,but two years ago Facebook paid even more than that to acquire the WhatsApp messaging service,which doesn't have any physical product at all.What WhatsApp offered Facebook was an intricate and finely detailed web of its users' friendships and social lives. Facebook promised the European commission then that it would not link phone numbers to Facebook identities,but it broke the promise almost as soon as the deal went through. Even without knowing what was in the messages, the knowledge of who sent them and to whom was enormously revealing and still could be.What political jourmalist,what party whip,would not want to know the makeup of the WhatsApp groups in which Theresa May's enemies are currently potting? It may be that the value of Whole Foods to Aazon is not so much the 460 shops it owns, but the record of which customers have purchased what.

Competition law appears to be the only way to address these imbalances of power. But is clumsy. For one thing. it is very slow compared to the pace of change within the digital cconomy. By the time a problem has been addressed and remedied it may have vanished in the market place, to be replaced by new abuses of power. But there is a deeper conceptual problem, too. Competition law as presently interpreted deals with financial disadvantage to consumers and this is not obvious when the users of these services don't pay for them. The users of their services  are  not their customers. That would be the people who buy adverising from them-and Facebook and Google the two virtual giants dominate digital advertising to the disadvantage ofall other media and entertainment companies.

The product they're slling is data, and we, the users, convert our lives to date for the benefit of the digital giants Just as some ants farm the bugs called aphids for the honeydew they produce when they feed, so Google farms us for the data that our digital lives yield.Ants keep predatory insects away from where their aphids feed; Gmail keeps the spammers out of our in boxes. It doesn't feel like a human or democratic relationship, even if both sides benefit.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.According to Paragraph 1.,Facebookacquired WhatsApp for its{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. digital products{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.user information{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.physical assets{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. quality service{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Linking phone numbers to Facebook identities may_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.worsen political disputes{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.mess up customer records{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. pose a risk to Facebook users{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.mislead the European commission{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.According to the author, competition law_____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. should serve the new market powers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.may worsen the economic imbalance{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.should not provide just one legal solution{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. cannot keep pace with the changing market{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.Competition law as presently interpreted can hardly protect Facebook because_______. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. they are no defined as customers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. they are no financially reliable{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.  the services are generally digital{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.the services are paid for by advertisers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.The ants analogy is used to illustrate______. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. a win-win business model between digital {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.  a typical competition pattern among digital giants{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. the benefits provided for digital giants' customers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. the relationship between digital giants and their users</Text>
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
