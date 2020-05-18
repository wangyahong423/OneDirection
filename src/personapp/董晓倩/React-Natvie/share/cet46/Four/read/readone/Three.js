import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class question1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[B] ',
                content2: '【解析】推理判断题。首先依据题目中的casual dining找到第2段中的informality。其后有两个for引导的介词短语，后一个说“对于英国精致瓷器的制造商来说，这(informality)意味着经济困难时期”;此外,第3段用数据具体指出陶瓷业裁员之严重，说明陶瓷业在萎缩，即B。A、D均属夸大事实，C与文章内容无关。',
                content3: '2. 【答案】[B]',
                content4: '【解析】事实细节题。根据倒数第2段第2句中指出现今休闲文化流行的背景：工作时间长，家庭生活节奏紧张,B中的 Busy schedules与文中的demanding family schedules对应，故为答案。',
                content5: '3. 【答案】[D] ',
                content6: '【解析】事实细节题。Royal Doulton在文章中出现过两次：第3段说它裁员，因为人们用餐越来越随意(不再讲究餐具的精致);第 4 段中“A spokesman for Royal Doulton admitted that the company...”，暗示公司的性质，可以推断它是精制器皿的生产者。',
                content7: '4. 【答案】[C]',
                content8: '【解析】事实细节题。根据题目中的the layoffs找到文章第4段首句，其中的have their roots in相当于题目中的main cause is,shifts相当于C中的change。其实本题与第1题是交叉相关的，从第1题的题目可找到本题的答案。',
                content9: '5. 【答案】[A]',
                content10: '【解析】事实细节题。根据最后一段，特别是第2句“The fine points of etiquette... must be picked up elsewhere良好的餐桌礼仪必须在其他地方被重拾起来”，可知礼仪在某些场合还是必要的，故答案为A。',
                
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
                            &emsp;&emsp;{`When families gather for Christmas dinner, some will stick to formal traditions dating back to Grandma’s generation. Their tables will be set with the good dishes and silver, and the dress code will be Sunday-best.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But in many other homes, this china--and--silver elegance has given way to stoneware (粗陶)--and--stainless informality, with dresses assuming an equally casual--Friday look. For hosts and guests, the change means greater simplicity and comfort. For makers of fine china in Britain, it spells economic hard times.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Last week Royal Doulton, the largest employer in Stoke-onTrent, announced that it is eliminating 1,000 jobs--one-fifth of its total workforce. That brings to more than 4,000 the number of positions lost in 18 months in the pottery (陶瓷) region. Wedgwood and other pottery factories made cuts earlier.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“Although a strong pound and weak markets in Asia play a role in the downsizing, the layoffs in Stoke have their roots in earthshaking social shifts. A spokesman for Royal Doulton admitted that the company “has been somewhat slow in catching up with the trend”toward casual dining. Families eat together less often, he explained, and more people eat alone, either because they are single or they eat in front of television.”`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“Even dinner parties, if they happen at all, have gone causal. In a time of long work hours and demanding family schedules, busy hosts insist, rightly, that it’s better to share a takeout pizza on paper plates inthe family room than to wait for the perfect moment or a “real” dinner party. Too often, the perfect moment never comes, Iron a fine-pattened tablecloth? Forget it. Polish the silver? Who has time?”`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“Yet the loss of formality has its down side. The fine points of etiquette(礼节) that children might once have learned at the table by observation or instruction from parents and grandparents(“Chew with your mouth closed.”“keep your elbows off the table.”)must be picked up elsewhere. Some companies now offer etiquette seminars for employees who may be competent professionally but clueless socially.”`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The trend toward casual dining has resulted in ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.bankruptcy of fine china manufacturers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Shrinking of the pottery industry
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. restructuring of large enterprises
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Economic recession in Great Britain
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.Which of the following may be the best reason for casual dining?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Family members need more time to relax.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. Busy schedules leave people no time for formality.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.People want to practice economy in times of scarcity.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Young people won’t follow the etiquette of the older generation.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.It can be learned from the passage that Royal Doulton is _______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. a retailer of stainless steel tableware
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.a dealer in stoneware
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.a pottery chain store
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.a producer of fine china
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The main cause of the layoffs in the pottery industry is _______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.the increased value of the pound
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.the economic recession in Asia
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.the change in people’s way of life
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.the fierce competition at home and abroad
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.Refined table manners, though less popular than before in current social life, _______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.are still a must on certain occasions
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. are bound to return sooner or later
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. are still being taught by parents at home
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. Can help improve personal relationships
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