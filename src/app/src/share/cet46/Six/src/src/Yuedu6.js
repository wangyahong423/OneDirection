import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu6 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '[A]原文该段第4句表明阅读是a partial solution,这表明阅读有助于解决某个问题，而这个问题就是该段第2句和第3句提到的坐长途火车会让人觉得烦闷，由此可见，本题答案应为选项A。',
                content3: '[B]首段第8句中的for引出一个原因从句，表明一种因果关系，而选项B表达的因果关系与此相同，因此为本题答案。原文该段第9句提到了safely at high speeds，但安全和高速之间并不存在因果关系，因此选项A不正确;选项C没在原文提及，建项D的因果关系也不正确。',
                content5: '[C]首段倒数第3句指出了两种因果关系：第一，海洋不平静会导致你晕船;第二，晕船会让你觉得坐船是最糟糕的交通方式，由此可见，本题应选C。在原文虽有提及weather，但与题干关系不大，故A不对;时间的问题虽在下一句提及，但与题干不构成因果关系，故B不正确;D是因其晕船的原因，与题干之间的因果关系不直接，故也不对。',
                content7: '[A]虽然文章没有明显地比较飞机与其他交通方式，但是从首段的内容来看，可以知道当作者描述其他交通方式时，都提到它们很累人，而第2段末句中的fresh and uncrumpled表明坐飞机旅行不会让旅行者觉得累，由此可见，本题应选A。',
                content9: '[A]作者在原文首句提到了三种交通方式，然后分别描述了三种方式各自的特点，由此可见，作者写本文是为了介绍三种不同的交通方式，故选A。作者只是描述三种交通方式的特点，没有突山哪一个是最好的，困此选项B不正确;选项C只是第2段的内容，并非全文主题，因此也不是正确答案;本文的主题是交通方式，并非relaxing(放松的方式)，因此选项D不正确。',
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
                            &emsp;&emsp;{`People traveling long distances frequently have to decide whether they would prefer to go by land. sea, orair. Hardly can anyone positively enjoy sitting in a train for mort than a few hours. Train compartments soon get cramped and stuffy. Reading is only a partial solution. for the monotonous rhythm of the wheels clicking on the rails soon lulls you to sleep. During the day, sleep comes in snatches. At night when you really wish to go to sleep you rarely manage to do so. Inevitably you arrive at your destination almost exhausted. Long car journey are even less pleasant. for it is quite impossible even to read. On motorways you can. at least, travel fairly safely at high speeds, but more often than not, the greater pan of the journey is spent on narrow. bumpy roads which are crowded wich traffic. By comparison, trips by sea offer a great variety of civilized comforts. You can stretch your legs on the spacious decks, play games, swim, meet interesting people and enjoy good food-always assuming, of course, that the sea is calm. If it is not and you are likely to get seasick; no form of transport could be worse. Even if you travel in ideal weather, sea journeys take a long time. Relatively few people are prepared to sacrifice up to a third of their holidays for the pleasure of traveling on a ship.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Airplanes have the reputation of being dangerous and expensive. But nothing can match them for speed and comfort. Traveling at a height of 30,000 feet. far above the clouds, and at over 500 miles an hour is an exhilarating experience. For a few hours, you settle back in a deep armchair to enjoy the flight. The real escapist can watch a free film show and sip champagne on some services. But even when such refinements are not available, there is plenty to keep you occupied. An airplane offers you an unusual and breathtaking view of the world. You soar effortlessly over high mountains and deep valleys. You really see the shape of the land. If the landscape is hidden from the view. you can enjoy the extraordinary sight of unbroken cloudplains that stretch om for miles before you, while the sun shines brilliantly in a clear sky. The journey is so smooth that there is nothing to prevent you from reading or sleeping. However you decide to spend your time, one thing is certain: you will arrive at your destination fresh and uncrumpled.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1. The author indicates that reading can help lessen_______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) the boredom of being in the train
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) the tiresome clicking of the wheels
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) the sleeplessness during the journey
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) the poor ventilation of the compartment
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. what can we leam about the long distance journey by car?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) It is safe because the car usually goes at high speeds.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) It is monotonous because reading is quite impossible.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) It is exhausting because you seldom manage to sleep.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) It is dangerous because the traffic is always too dense.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. Trips by sea is regarded as the worst means of traveling when______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) the weather is terrible
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) the traveler has little time
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) the traveler feels seasick
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) the sea is not calm
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. What is the greatest difference between traveling by air and the other means of traveling?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) Traveling by air is not so tiring as the others.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) Traveling by air brings more fun than the others.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) Traveling by air is much more expensive than the others.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) Traveling by air offers more time for sleep than the others.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. By writing the passage the author intends to_______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) introduce diverse ways of traveling
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) points out the best mode of traveling
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) emphasize the advantages of traveling by air
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) compare the means of relaxing when traveling
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