import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CNJ1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["　筷子(chopsticks)是中国古人发明的一种具有鲜明民族特色的进食工具(tableware)，是反映中国饮食文化特色的重要组成部分。中国人使用筷子的历史可追溯到商代，距今已有三千多年。筷子可谓是中国国粹，既轻巧又灵活，在世界各国餐具中独树一帜，被西方人誉为“东方的文明”。凡是使用过筷子的人，不论中国人或是外国人，都因其使用方便、物美价廉而赞叹不绝。"]
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 8</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Chopsticks, invented by ancient Chinese people, are a kind of tableware with distinct national features, being an important component that reflects the characteristics of Chinese diet culture. The history of using chopsticks in China dates back to the Shang Dynasty, more than3,000 years ago. Chopsticks, the quintessence of Chinese culture, whose lightness and flexibility develop a school of its own among various tableware all over the world, are praised as "Eastern Civilization" by the westerners. All those people who have ever used chopsticks, no matter Chinese or foreigners, marvel at their convenience, excellent quality and reasonable price.</Text>
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
