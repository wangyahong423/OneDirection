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
            answerContent: ["1.[D] were in a desperate situation                           2.[B] newspapers wanted to reduce costs                                                                  3.[C] are less dependent on advertising                                      4.[A] Distinctiveness is an essential feature of newspapers.                5.[A] American Newspapers: Struggling for Survival"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 16</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Whatever happened to the death of newspaper? A year ago the end seemed near. The recession threatened to remove the advertising and readers that had not already fled to the internet. Newspapers like the San Francisco Chronicle were chronicling their own doom. America's Federal Trade commission launched a round of talks about how to save newspapers. Should they become charitable corporations? Should the state subsidize them? It will hold another meeting soon. But the discussions now seem out of date.
　　In much of the world there is little sign of crisis. German and Brazilian papers shrugged off the recession. Even American newspapers, which inhabit the most troubled corner of the global industry, have not only survived but often returned to profit. Not the 20% profit margins that were routine a few years ago, but profit all the same.
　　It has not been much fun. Many papers stayed afloat by pushing journalists overboard. The American Society of News Editors reckons that 13,500 newsroom jobs have gone since 2007. Readers are paying more for slimmer products. Some papers even had the nerve to refuse delivery to distant suburbs. Yet these desperate measures have proved the right ones and, sadly for many journalists, they can be pushed further.
　　Newspapers are becoming more balanced businesses, with a healthier mix of revenues from readers and advertisers. American papers have long been highly unusual in their reliance on ads. Fully 87% of their revenues came from advertising in 2008, according to the Organization for Economic Cooperation & Development (OECD). In Japan the proportion is 35%. Not surprisingly, Japanese newspapers are much more stable.
　　The whirlwind that swept through newsrooms harmed everybody, but much of the damage has been concentrated in areas where newspaper are least distinctive. Car and film reviewers have gone. So have science and general business reporters. Foreign bureaus have been savagely cut off. Newspapers are less complete as a result. But completeness is no longer a virtue in the newspaper business.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;By saying "Newspapers like … their own doom" (Lines 3-4, Para. 1), the author indicates that newspaper __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.neglected the sign of crisis{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.failed to get state subsidies{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.were not charitable corporations{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.were in a desperate situation{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Some newspapers refused delivery to distant suburbs probably because __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. readers threatened to pay less{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. newspapers wanted to reduce costs{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. journalists reported little about these areas{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. subscribers complained about slimmer products{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.Compared with their American counterparts, Japanese newspapers are much more stable because they __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.have more sources of revenue{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.have more balanced newsrooms{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.are less dependent on advertising{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.are less affected by readership{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.  What can be inferred from the last paragraph about the current newspaper business?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.Distinctiveness is an essential feature of newspapers.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.Completeness is to blame for the failure of newspaper.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. Foreign bureaus play a crucial role in the newspaper business.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.Readers have lost their interest in car and film reviews.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.The most appropriate title for this text would be __________. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. American Newspapers: Struggling for Survival{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. American Newspapers: Gone with the Wind{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. American Newspapers: A Thriving Business{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. American Newspapers: A Hopeless Story</Text>
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
