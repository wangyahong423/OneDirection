import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Dimensions, SafeAreaView, TouchableOpacity, Image, AsyncStorage, DeviceEventEmitter, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Actions } from 'react-native-router-flux';
import { Button } from '@ant-design/react-native';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Appear extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        

    }

    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', }}>
                <ScrollView>
                   <View style={{width:'100%',height:'100%'}}>
                        <Text style={{fontSize:15}}>
                             One of the bitterest and most time-worm debates in student union bars up and down the country is resolved as academic research confirms that in financial terms at least, arts degrees are a complete waste of time.Getting through university boosts students’earnings by 25%, on a weighted average, or $220,000 over theirlifetime, according to Professor Ian Walker of Warwick University-but if they study Shakespeare or the peasants’revolt instead of anatomy of contract law, those gains are likely to be completely wiped out.
                        </Text>
                        <Text style={{fontSize:15,marginTop:5*s}}>
                          The government is about to allow universities to charge students up to $3,000 a year for their degrees, arguing that it’s a small price to pay compared with the financial rewards graduates reap later in life. But Prof. Walker’s research shows there are sharp variations in returns according to which subject a student takes.
                        </Text>
                        <Text style={{fontSize:15,marginTop:5*s}}>
                        Law, medicine and economics or business are the most lucrative choices, making their average earnings 25% higher, according to the article, published in the office for national statistics’monthly journal. Scientists get 10-15% extra. At the bottom of the list are arts subjects, which make only a “small ”differenceto earnings- a small negative one, in fact. Just ahead are degrees in education-which leave hard pressed teachers anaverage of 5% better off a year than if they had left school at 18.
                        </Text>
                        <Text style={{fontSize:15,marginTop:5*s}}>
                        “it’s hard to resist the conclusion that what students learn does matter a lot; and some subject areas givemore modest financial returns than others,” Prof. Walker said. As an economist, he was quick to point outthat students might gain non-financial returns from arts degrees:”Studying economics might be very dull, forexample, and studying post-modernism might be a lot of fun.”
                        </Text>
                        <Text>
                        Choose correct answers to the question:
                        </Text>
                        <Text>
                        1.What is the best title for the passage?
                        </Text>
                        <Text>
                        　A.Professor Walker’s Research
                        </Text>
                        <Text>
                        　B.How to Make Big Money.
                        </Text>
                        <Text>
                        　C.Differences Between Science and Arts Degrees.
                        </Text>
                        <Text>
                        　D.Studying Arts Has Negative Financial Outcome.
                        </Text>
                        <Text>
                        2.Universities charge students a rather high tuition mainly b
                        </Text>
                        <Text>
                        　A.they provide the students with very prosperous subjects
                        </Text>
                        <Text>
                        　B.they assume that their graduates can earn much more than
                        </Text>
                        <Text>
                        　C.they don’t get financial support from the government
                        </Text>
                        <Text>
                        　D.they need much revenue to support the educational expenses
                        </Text>
                        <Text>
                        3.The word “lucrative”(Line 1, Para. 4) most probably means _____
                        </Text>
                        <Text>
                        　A.sensible
                        </Text>
                        <Text>
                        　B.creative
                        </Text>
                        <Text>
                        　C.profitable
                        </Text>
                        <Text>
                        　D.reliable
                        </Text>
                        <Text>
                        4.Law, medical and business graduates could earn 25% more than ______
                        </Text>
                        <Text>
                        　A.education graduates
                        </Text>
                        <Text>
                        　B.arts graduates
                        </Text>
                        <Text>
                        　C.those who had not studied at the university
                        </Text>
                        <Text>
                        　D.the average income
                        </Text>
                        <Text>
                        5.We can safely conclude that the author ______
                        </Text>
                        <Text>
                        　A.regards arts degrees as meaningless
                        </Text>
                        <Text>
                        　B.finds this result disappointing and unfair
                        </Text>
                        <Text>
                        　C.wants the students to think twice before they decide what to learn in college
                        </Text>
                        <Text>
                        　D.holds that arts degrees are still rewarding despite its scarce financial returns
                        </Text>
                   </View>
                </ScrollView>
            </View>
        )
    }
}

