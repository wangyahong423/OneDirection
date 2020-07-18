import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Zuowen7 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'If you smoke and still dont believe that there is a definite link between smoking and bronchialtroubles, heart disease, and lung cancer, then you are certainly deceiving yourself. Wheneverthe subject of smoking and health is raised, the governments of most countries hear no evil, seeno evil and smell no evil. In Britain, for instance, cigarette advertising has been banned on TV. The conscience of the nation is appeased while the population continues to puff its way tosmoky, cancerous death.',
                content3: 'If the governments of the world were honestly concerned about the welfare of their peoples, you＇d think they＇d conduct aggressive anti-smoking campaigns. Far from it! The tobaccoindustry is allowed to spend huge sums on advertising. The advertisements suggest it is manlyto smoke, even positively healthy! Smoking is as sociated with the great open-air life, withbeautiful girls, true love and togetherness.',
                content5: 'So I suggest that governments begin by banning all cigarette and tobacco advertising and thenconduct anti-smoking adve rtising campaigns of their own. Smoking should be banned in allpublic areas like theatres, cinemas and restaurants. Great efforts should be made to informyoung people especially of the dire consequences of taking up the habit. A horrific warning — say, a picture of a death＇s head — should be included in every packet of cigarettes that is sold. As individuals we are certainly weak, but if governments acted honestly and courageously, theycould protect us from ourselves.',
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
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
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
                            &emsp;&emsp;{`Governments of All Countries Should Launch Serious Campaigns Against Smoking. DoYou Agree`}
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
        marginLeft: '40%',
        marginBottom: 20 * s
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