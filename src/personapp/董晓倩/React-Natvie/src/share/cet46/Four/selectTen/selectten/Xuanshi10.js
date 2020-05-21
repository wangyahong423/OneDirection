import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanshi10 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】英格兰(36)开展了2000位成人的投票活动，以帮助政府努力控制人们的饮酒习惯。这项活动同时也指出，不健康的早餐总是(37)紧随酗酒之后，这反而更加会让人长胖。这次“了解自己的极限”的活动过去的重点是喝酒带来的如患疾病风险这类的其他(38)后果。但是为了(39)配合民众对体重的关注，卫生署进行了研究，表明每周喝5品脱或者是在一年(40)中喝250品脱的普通啤酒饮用者，吸收的卡路里和一个在12个月内吃了221个甜甜圈的人一样多。',
                
                content3: '2. 【答案】研究还指出，普通的葡萄酒饮用者一个月吸收2000卡路里。在一年中所吸收的热量(41)相当于吃38顿额外的烤牛肉。卫生部长菲力•侯朴说：“经常每天喝酒超过我们(42)推荐的限制会对我们的健康产生连锁打击，包括腰围增加。”“不仅仅是酒本身中的卡路里能让我们发胖，当我们一种东西吃得太多时，我们更(43)有可能吃高脂肪食品。”',
                
                content5: '3. 【答案】希瑟•卡斯韦尔补充说：“大多数人会在一大杯稀奶油面前踟蹰不前，但是面对几杯酒却从不会(44)犹豫。”“但是卡路里的成份是相似的，而且随着时间的推移，过量饮酒更有可能导致体重增加。”Dfinkaware信托公司的一个发言人也指出：“我们(45)必须要知道我们喝酒时都喝了些什么。” ',
              
                
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
                            &emsp;&emsp;{`The poll of 2,000 adults in England was(36)__________out as part of the government’s drive to curb people’s drinking habits.The campaign also stresses that a heavy drinking session is often(37)__________by an unhealthy breakfast，which again helps to pile on the pounds.The Know Your Limits campaign has in the past focused on other(38)__________0f drinking，such as di sease risk.But to(39)__________with the focus on weight，the DepaIhiient of Health carried out research showing a regular beer drinker,who downed(喝)five pints a week or 250 over the(40)__________of a year,packed away the same number of calories as someone eating 22 1 doughnuts over the space of 12 months.It also revealed the average wine drinker consumed 2,000 calories each month.over the course of a year,that is the(41)__________ofeating all extra 38 roast beefdinners.Health minister Phil Hope said，“Regularly drinking more than our(42)__________daily limits can have a knock-on effect on our health，including an expanding waistline.“It’s not only the calories in the drinks themselves that can help to pile on the pounds，we’re also more(43)__________to eat fatty foods when we’ve had one too many.” Heather Caswell，of the British Nutrition Foundation，added，“Most people would baulk(犹豫)at consuming a full glass of single cream，but wouldn’t minl(44)__________about a couple ofpints.” “But the calorie content is similar and，over time，excess alcohol intake is likely to lead to weight gain.” And a spokesman for the Drinkaware Trust added：“It’s(45)__________we are in the know when it comes to what we are drinking.”`}
                        </Text> 
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 16 * s,marginLeft:20*s }}>
                            &emsp;&emsp;{`A.consequences

　　B.carried

　　C.communicate.

　　D.followed

　　E.equivalent

　　F.held

　　G.twice

　　H.likely`}
                        </Text> 
                        <Text style={{ fontSize: 16 * s ,marginLeft:50*s}}>
                            &emsp;&emsp;{`I.coincide

　　J.necessity

　　K.course

　　L.related

　　M.imperative

　　N. over

　　0.recommended`}
                        </Text> 
                        </View>
                                         
                        
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