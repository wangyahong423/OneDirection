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
            answerContent: ["　李白是唐朝(the Tang Dynasty)的著名诗人。他和他的朋友杜甫是唐代中期中国诗歌繁盛时期最杰出的两位人物。他一生四处游历，写下了大约1000首诗篇。这些诗堪称是赞美友情、享受大自然和饮酒作乐的模板。他的诗浪漫、豪迈，想象力丰富。作为一个浪漫主义天才，李白把中国的传统诗歌形式推向了一个新的离度，对后世的诗歌产生了深远的影响。"]
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 9</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　Li Bai was a famous poet in the Tang Dynasty. He and his friend Du Fu were the two most prominent figures in the flourishing of Chinese poetry in the mid-Tang Dynasty. He traveled around the country in his lifetime, composing about 1,000 pieces of poems which were models for celebrating the friendship, appreciating the nature and the joys of drinking wine. His poems are romantic with heroic style and rich imagination. As a romantic genius, Li Bai took traditional poetic forms to a new height and exerted a far-reaching influence on the poems of the future generation.</Text>
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
