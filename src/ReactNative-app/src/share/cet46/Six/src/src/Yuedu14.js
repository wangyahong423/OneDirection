import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu14 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[B] 从文章第3句“手语提供了一种新方法，用以探索大脑如何产生和理解语言，并为一个长期以来的科学争端——语言(连同语法)究竟是我们与生俱来的，还是一种我们后天学会的行为——提出了新的解释”可以看出，这是对语言的性质的传统观点的挑战，即B 。A错在learning,文章并不是在讨论语言的学习，而是语言的产生和理解;C为简单原词干扰D;中的an attempt to clarify misunderstanding是对throw new light on an old scientific controversy的曲解，因为controversy不等于misunderstanding。另外，第1段最后一句中的rebel“反叛”一词也与B中的“挑战”一致。',
                content3: '2.[C] 根据第1段最后一句可知，选C。题干中的was stimulated相当于原文中的has roots in。',
                content5: '3.[B] 事实细节题。第2段第3句中的malpractice和第4句中的虚拟语气说明，她认为学校没有对她的自杀企图采取足够的防范措施，故选B。选项A最具干扰性，但第3句说明学校关注过她的问题，只是关注不够，因此选项A过于绝对。选项C中的academic instructions和D中的physical disease属于与文章无关的信息。',
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
                            &emsp;&emsp;{`Divorce doesn't necessarily make adults happy. But toughing it out in an unhappy marriage until it turns around just might do, a new study says.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The research identified happy and unhappy spouses. culled (选出 ) from a national database. Of the unhappypartners who divorced. about half were happy five years later. But unhappy spouses who stuck it out often did better. About two-thirds were happy five years later. Study results contradict what seems to be commonsense, says David Blankenhorn of the Institute for American Values, a think-tank on the family. The institute helped sponsor the research leam based at the University of Chicago. Findings will be presented in Arlington, Va.. at the "Smart Marriage" conference. sponsored by the Coalition for Marriage. Families and Couples Education.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The study looked at data on 5,232 married adults from the National Survey of Families and Households. It included .64.5 who were unhappy. The adults in the national sample were analyzed through 13 measures of psychological well being. Within the five years, 167 of the unhappy were divorced or separated and 478 stayedmarried.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Divorce didn't reduce symptoms of depression, raise self-esteem or increase sense of mastery compared withthose who stayed married, the report says.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Results were controlled for factors including race, age, gender and income. Staying married did not tend to trap unhappy spouses in violent relationships. What helped the unhappy married turn things around? To supplement the formal study data, the research team asked professional firms to recruit focus groups totaling 55 adults who were "marriage survivors". All had moved from unhappy to happy marriages. These 55 once-discontented married felt their unions got better via one of three routes, the report says:`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Marital endurance. "Wich time, job situations improved, children got older or better. or chronic ongoing problems got put into new perspective." Partners did not work on their marriages.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Marital work. Spouses actively worked "to solve problems, change behavior of improve communication".`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Personal change. Partners found "alternative ways to improve their own happiness and build a good and happy life despite a mediocre marriage." In effect the unhappy partner changed.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. According to David Blankenhorn. people commonly believe that________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) divorce is a better solution to an unhappy marriage than staying together
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) divorce is not necessarily the only solution to an unhappy marriage
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) keeping an unhappy marriage needs much courage and endurance 
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) to end an unhappy marriage or not is a tough decision for the spouses
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. Which of the following is true about the research under discussion?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) It was conducted by che Institute for the American Values headed by David Blankenhorn.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) It was sponsored by the Coalition for Marriage, Families and Couples Education.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) Its subjects were chosen from a national database based at the University of Chicago.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) Its report will be included in the schedule of the "Smart Marriage"conference.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. The 13 measures of psychological well-being are used to_______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) serve as the standards for choosing the subjects of the research
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) serve as the ways to help adults to get over their unhappy marriage
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) examine all the 5232 married adults
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) examine all the adults in the database
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. The author's attitude towards divorce may best be described as ________".
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) critical
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) impersonal
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) arbitrary
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) scornful
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. According to the report, chose unhappily-wedded may not survive their marriage by_______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) waiting for the living conditions to get improved
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) achieving children’s understanding
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) changing their own attitude towards mediocre marriages
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) working on their problems and strengthening communication
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