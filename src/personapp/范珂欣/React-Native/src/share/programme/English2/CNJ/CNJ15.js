import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CNJ3 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["　丝绸之路(the Silk Road)是历史上连接中国和地中海的一条重要 贸易路线。因为这条路上的丝绸贸易占绝大部分，所以在1877年它 被德国的一位地理学家命名为“丝绸之路”。这条古道从长安开始， 经过河西走廊(the Hexi Corridor),到达敦煌后分成三条：南部路线， 中部路线和北部路线。这三条路遍布新疆维吾尔自治区(Xinjiang Uygur Autonomous Region)，然后扩展到巴基斯坦(Pakistan)，印度， 甚至罗马。"]
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 15</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　The Silk Road is a historically important international trade route between China and the Mediterranean. Because silk comprised a large proportion of trade along this road, in 1877, it was named the Silk Road by an eminent German geographer. This ancient road begins at Chang’an, then by way of the Hexi Corridor，and it reaches Dunhuang, where it divides into three, the Southern Route，Central Route and North¬ern Route. The three routes spread all over the Xinjiang Uygur Autono¬mous Region, and then they extend as far as Pakistan, India and even Rome.</Text>
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
