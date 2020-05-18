import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu12 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'Ⅰ. 1. T 2. F 3 . F 4 . F 5. T 6. T',
                content3: 'Ⅱ. 1. It really means that he is flattering orfawning some figures.2. For students, the most exciting moment is thegraduation ceremony, especially the moment whenthe president makes the announcement.3. After graduation, the tassel should be put to theleft side.',
            }]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content10}</Text>
                
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`An Apple for the Teacher`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`American schoolchildren occasionally present anapple to the teacher. Obviously the custom containsan element of bribery 1 — you offer sweet fruit toauthority figures to “sweeten” 2 their disposition3. In school children's case, the apple is offered tomake their grades more favorable. Therefore, theapple has more or less acquired a corrosive4 reputation and maybe for this reason, in slangEnglish “to applepolish” means“to flatter or fawn” and an applepolisher is a flatterer.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But the custom might also be explained as a fair payment for the teacher's instruction. In theearly days of public education, school teachers were not always salaried. Often they would bepaid in goods and services, offered by either the school, or the pupils or the parents. . ..Therefore, the occasional gift of an apple for the teacher in today's classroom should be awelcome reminder of the era when education was one -to-one and when teaching meantenlightening the students rather than identifying their rankings.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Caps and Gowns`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`For students, the most exciting moment may be the graduation ceremony 5: parents, relativesand friends are invited to the ceremony; all the graduates are wearing black square flat capsand gowns. They all await the president to announce in the end,“Now, please move yourtassels from right to left. ”`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The caps and gowns worn by high school and college graduates today are survivors of theeveryday dress worn by members of the academic community in medieval Europe. Themajority of scholars in the Middle Ages6 were churchmen, or soon to become so, and theirdress was often strictly regulated by the universities where they taught and studied. Thestandard clerical dress throughout Europe was the long black cope. The original preferencefor black was changed in the thirteenth and fourteenth centuries, as such colors as red, violetand purple came into fashion; but by the Renaissance black was back, as the color blacksymbolized simple and plain, or austere way of life in the sixteenth century. With fewexceptions, modern universities keep that ceremonial austerity.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The origin of the square flat cap, or mortarboard7 , is obscure, though it probably derives fromthe medieval biretta . Such a tufted square cap is considered the badge of the 024 mastership, and is later adopted by undergraduates and schoolboys. The term mortarboard does notappear in English until the 1850 s. The tassel that graduates transfer from one side to anotheras a signal of their elevation is an outgrowth of the medieval tuft. The tuft still appears onthe modern biretta, worn by bishops throughout the Church of Rome .`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Ⅰ. True o r false :
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. Nowadays, American pupils always offer an apple to the teacher in order to get a bettergrade.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. In the early days of public education, schoolteachers were paid in money.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. In America, the caps and gowns are only adopted by college graduates during graduationceremonies.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. Before the Renaissance, the standard clerical dress was black.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. The biretta was considered the mark of scholarship.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　6. That the graduates move the tassel from one side to the other is a signal of elevation.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　Ⅱ. Questions :
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. According to the passage, when you say somebody is an apple polisher, what do you reallymean by saying that?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. For students, when is the most exciting moment?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. After graduation, which side should you put your tassel, right or left?
                        </Text>
                    </View>
                </View>
                <Accordion
                    sections={this.state.todo}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: '#37376F',
        borderBottomWidth: 1 * s,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft:'40%',
        marginBottom:20*s
    },
    headerText: {
        fontSize: 16,
        color: '#fff'
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})