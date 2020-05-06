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
            answerContent: ["目前，亚洲的发展面临着新的机遇，也面临着新的挑战。亚洲总体上依然是当今世界最具经济活力和发展潜力的地区。经济全球化的深入发展和科学技术的迅猛进步，有利于亚洲各国利用国际资本，引进先进技术，开拓国际市场，推动本国经济的发展。但是亚洲某些地区的安全形势仍不容乐观，反对恐怖主义的斗争尚待深入。经济全球化在带来发展机遇的同时，也增加了国际经济环境的不确定性，增加了本地区内发展中经济体结构调整的难度和遭遇外部冲击的风险。"]
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 19</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　At present,the development of Asia is facing new challenges as well as opportunitis.As a whole,Asia is still the region with the greatest economic vigor and potential for development in the world.The further development of the economic globalization and the rapid advancement of science and technology make it possible for the various countries in Asia to use the international capitals and introduce new technologies and to explore the international market so as to promote the economic growth of their own countries.However,we can not be too optimistic over the security situation in some regions of Asia and the anti-terroism struggles need further developing.Having brought the opportunities for development,the economic globalization makes the international economy even more uncertain,and it is more difficult to restructure the economies in their own regions.And also it makes these countries more likely to be impacted by external risks.</Text>
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
