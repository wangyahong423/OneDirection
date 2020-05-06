import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CNJ2 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["　国画是中国文化遗产的重要组成部分。不同于西方画，它是用毛笔(Chinese brush)和墨汁在宣纸(xuan paper)上作画的。精通这门艺术需要不断重复的练习， 需要控制好毛笔，需要对宣纸和墨汁有一定的认识。绘画前，画家必须在脑海里有一个草图并根据他的想象力和经验进行绘画。许多中国画家既是诗人，又是书法家。他们经常会在自己的画上亲手添加诗作。"]
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
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　Chinese painting is an important part of thecountry's cultural heritage. It distinguishes itselffrom Western painting in that it is drawn on xuanpaper with the Chinese brush and Chinese ink. Toattain proficiency in this art, it is necessary to havea good control of the brush, and certain knowledge of xuan paper and Chinese ink besidesrepeated exercises.Before painting, the painter must have a draft in his mind and drawaccording to his imagination and experience.Many a Chinese painter is at the same time a poetand calligrapher who often adds a poem with his own hand on the painting.</Text>
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
