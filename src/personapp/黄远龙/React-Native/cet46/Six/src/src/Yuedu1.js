import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Yuedu1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'Ⅰ. 1. consumption 2 . descendants 3. industrious 4 . Immigrants ',
                content2: 'Ⅱ. 1. dominate 2 . ensure 3. characterized 4. enforce 5. funded',
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
                            &emsp;&emsp;{`Singapore is a small, flat, marshy island that has been developed to become the most important port and business center in Southeast Asia and one of the ten wealthiest countries in the world in terms of gross national product per capita.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Singapore has a population of 3. 5 million people and a high density of more than 500 people per square kilometer. The superior infrastructure — especially the excellent port and international airport — has made Singapore the import and transshipment center for the region. It is one of the world’s largest oil refining centers, where crude oil is unloaded and refined before shipment to the rest of Asia . These functions are complemented by a large variety of maritime service activities, including banking, insurance, communications, and consulting.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Singapore has diversified its service sector to include a wider range of financial, communications, and management activities and has attracted the regional headquarters of many multinational corporations. And tourism has also become a significant industry. This diversification, as well as high consumption levels in the domestic market, allowed Singapore to cope with the 1983 oil crisis and 1997 Asian financial crisis somewhat more easily than did other countries in the region.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Singapore has a population of diverse ethnicity and religion, but it is dominated ( 77 percent) by overseas Chinese, descendants of immigrants who moved to Singapore in the colonial period and followed the religions of Buddhism and Taoism. Other groups include Malays ( about 15 percent) and Indians ( about 7 percent, mainly Hindu) . Fertility rates are low in Singapore, and the government has tried to promote more births among the highly educated in order to reduce labor shortages and ensure a workforce to support the older population. Colonial Singapore was residentially segregated, with the British living next to the government buildings on the east shore of the Singapore River, Chinatown on the west riverbank, and Indian and Malay neighborhoods farther toward the east. There are remnants of this structure in contemporary Singapore, but the city is now characterized by dozens of tall office buildings, housing complexes, new towns and new industrial parks.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The government has made serious attempts to foster harmony between ethnic groups and to create a sense of national identity by designating four official languages ( Mandarin 064 Chinese, English, Malay, and Indian Tamil) . They promote an Asian identity through schools and national military service that emphasize hard work, community consensus, and respect for authority. They also enforce Singapore’s image of a clean and crime-free  environment through very strict rules against litter and graffiti, media censorship, and licensing of satellite dishes and street entertainers.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Ⅰ. Complete the sentence s with the proper forms of the words given in parentheses :
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. The nation’s _______(consume) of coal decreased continuously last year.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. Today’s bicycles are _______( descend ) of the earlier velocipede ( 早期的脚踏两 轮车) .
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. The Chinese are an _______ ( industry) nation.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. _______( immigrate) can’t work in the United States without a permit.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        　Ⅱ. Complete each sentence with a proper word , and make changes if necessary: ( characterize , fund, enforce, ensure , dominate)
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. Successful leaders events rather than react to them.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. We can that the work shall be done in the right way.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. This disease is by rash and high fever.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. The responsibility that the police shoulders is to the law.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                          5. The space program is completely by the central government
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