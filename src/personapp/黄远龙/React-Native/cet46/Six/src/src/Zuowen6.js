import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Zuowen6 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'Over the years, the great majority of men have successfully resisted all attempts to makethem change their style of dress. The same cannot be said of women. Each year a few so called "top designers" in Paris and London lay down the law and women the whole world over rush toobey. This year, they decide in their arbitrary fashion, skirts will be short and waists will behigh; zip s are in and buttons are out. Next year the law is reversed and far from takingexception, no one is even mildly surprised.',
                content3: 'If women are mercilessly exploited year after year, they have only themselves to blame, because they are afraid of the thought of being seen in public in clothes that are out of fashion. They are annually blackmailed by the designers and the big stores. Clothes which have beenworn only a few times have to be discarded because of old fashion. When you come to think ofit, only a woman is capable of standing in front of a wardrobe packed full of clothes andannouncing that she has nothing to wear.',
                content5: 'Changing fashions are nothing more than the deliberate creation of waste. Many women spendvast sums of money each year to replace clothes that have hardly been worn. Women whocannot afford to discard clothing in this way, waste hour s of their time altering the dressesthey have. Fashion designers are rarely concerned with vital things like warmth, comfort anddurability. They are only interested in outward appearance and they take advantage of thefact that women will put up with any amount of discomfort, providing they look charmingand attractive.',
                content7: 'When comparing men and women in the matter of fashion, the conclusion to be drawn isobvious. Do the constantly changing fashion of women＇s clothes reflect basic qualities offickleness and instability? Do men＇s unchanging styles of dress reflect basic qualities ofstability and reliability? This is for you to decide.',
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
                            &emsp;&emsp;{`Exploited by New Fashions in Clothing. Do you Agree or Disagree with ThisStatement?`}
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