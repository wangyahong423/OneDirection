import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class translate3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '解析',
                content2: '考察重点：',
                content3: '时间状语从句，定语从句',
                content4: '这个句子结构稍显复杂：Mast of us give in to a demoralization of spirit which we usually blame on some psychological conditions 是主句，其中which we usually blame on some psychological conditions 是定语从句until one day we find ourselves in a garden and feel the oppression vanish as if by magic.是时间状语从句。',
                content5: '参考翻译：',
                content6: '我们当中大多数人都屈服于精神的道德败坏，我们经常把这种精神上的败坏推卸到心理环境上，直到有一天我们发现自己处于一个家园当中，并感受到这种压迫好像魔法一样消失。'
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
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                    <Text style={[{ marginTop: 5 * s }, styles.contentText]}>{section.content3}</Text>
                </View>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
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
                <View style={{ width: '85%', margin: '7.5%',borderColor:'#37376F',borderWidth:1,padding:'2%' }}>
                    <Text style={{ fontSize: 16 * s }}>
                        &emsp;&emsp;{`Mast of us give in to a demoralization of spirit which we usually blame on some psychological conditions until one day we find ourselves in a garden and feel the oppression vanish as if by magic`}
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
        marginLeft:'40%'
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