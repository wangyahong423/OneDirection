import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Zuowen3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'In present-day China, we can find two types of fast food: western and Chinese. However, notuntil the recent decade has western fast food become popular in China. Before the firsthamburger walked its way into the Chinese food market, we had little idea about such terms ashot dog, pizza, potato chips, let alone Kentucky and McDonald＇s. It is the reform and opening-up policy that has brought about the interflow of the food culture between China and thewestern countries.',
                content3: 'Fast food, both Chinese and western, has several advantages. In the first place, fast food, as ischaracterized by its name, is fast. The food is always ready and fresh, waiting for its customers. This saves people＇s precious time, and consequently goes well with the tempo of life inmodern society.',
                content5: 'Secondly, it is very convenient. As we know, fast food restaurants are much the same ascafeterias. Customers may feel free to help themselves to any variety provided and eat to theirhearts＇content.',
                content7: 'Thirdly, fast food restaurants are environmentally comfortable. Clean dishes, shiny tables, decent service and light music all stimulate people＇s appetite to eat more.',
                content9: 'The above-mentioned advantages make fast food become rooted in almost all parts of thecountry and enjoy popularity among people. That＇s also why nowadays Singapore fast food, Turkish fast food and Indian-Pakistani fast food have found their homes in China.As every coin has two sides, fast food also has its disadvantages such as lack of nutrition, dulltaste. Nevertheless, these are minor points compared with its advantages. Since most peopleagree with fast food, it t ends to grow more rapidly.',
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
                            &emsp;&emsp;{`The Growth of Fast Food in China`}
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