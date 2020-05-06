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
            answerContent: ["1.   C. Flaws in U.S. immigration rules for farm workers                            2.   D. the aging of immigrant farm workers                                                                  3.   B. To get native U.S. workers back to farming                                                                                          4.   A. slow granting procedures                                                     5.   B. Import Food or Labor?"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 20</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;American farmers have been complaining of labor shortages for several years.The complaints are unlikely to stop without an overhaul of immigration rules for farm works.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Congress has obstructed efforts to create a more straightforward visa for agricultural workers that would let foreign workers stay longer in the U.S. and change jobs within the industry.If this doesn’t change.American businesses.communities, and consumers will be the losers.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Perhaps half of U.S. farm laborers are undocumented immigrants. As fewer such workers enter the country, the characteristics of the agricultural workforce are changing. Today's farm laborers, while still predominantly born in Mexico, are more likely to be settled rather than migrating and more likely to be married than single, They're also aging. At the start of this century, about one-third of crop workers were over the age of 35. Now more than half are. And picking crops is hard on older bodies. One oft-debated cure for this labor shortage remains as implausible as it's been all along: Native U.S. workers won't be returning to the farm.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Mechanization is not the answer either—not yet, at least. Production of com,cotton, rice, soybeans, and wheat has been largely mechanized, but many high-value, labor-intensive crops, such as strawberries, need labor. Even dairy farms,where robots do a small share of milking, have a long way to go before they ' re automated.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;As a result, farms have grown increasingly reliant on temporary guest workers using the H-2A visa to fill the gaps in the workforce. Starting around 2012, requests for the visas rose sharply; from 2011 to 2016 the number of visas issued more than doubled.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The H-2A visa has no numerical cap, unlike the H-2B visa for nonagricultural work which is limited to 66,000 a year. Even so, employers complain they aren’t given all the workers they need.The process is cumbersome,expensive,and unreliable. One survey found that bureaucratic delays led the average H-2A worker to arrive on the job 22 days late. The shortage is compounded by federal immigration raids, which remove some workers and drive others underground.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;In a 2012 survey, 71 percent of tree-fruit growers and nearly 80 percent of raisin and berry growers said they were short of labor. Some western growers have responded by moving operations to Mexico. From 1998-2000, 14.5 percent of the fruit Americans consumed was imported. Little more than a decade later, the share of imported fruit had increased to 25.8 percent.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;In effect, the U.S. can import food or it can import the workers who pick it.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. What problem should be addressed according to the first two paragraphs?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.	Discrimination against foreign workers in the U.S.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.  Biased laws in favor of some American businesses.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.  Flaws in U.S. immigration rules for farm workers.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.	Decline of job opportunities in U.S. agriculture.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2. One trouble with U.S. agricultural workforce is_  .{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.  the rising number of illegal immigrants{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.  the high mobility of crop workers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.  the lack of experienced laborers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.  the aging of immigrant farm workers{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3. What is the much-argued solution to the labor shortage in U.S farming?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. To attract younger laborers to farm work.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. To get native U.S. workers back to farming.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. To use more robots to grow high-value crops.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. To strengthen financial support for farmers.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. Agricultural employers complain about the H-2A visa for its    {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. slow granting procedures{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.  limit on duration of stay{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. tightened requirements{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. control of annual admissions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. Which of the following could be the best title for this text? {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. U.S. Agriculture in Decline?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. Import Food or Labor?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. America Saved by Mexico?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.  Manpower vs. Automation?</Text>
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
