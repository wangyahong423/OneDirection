import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Translate19 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '参考翻译：',
                content2: '目前证明这股合并浪潮是带来利还是弊的实例并不多。但是很难想像当今的几个石油公司的合并是否会重新造成约100年前美国标准石油公司对竞争造成的同样的威胁，那时由于人们对该公司的这种担心而导致了它最终的解散。像世界通讯这样的通讯公司合并似乎没有给消费者带来更高的价格，或者降低技术进步的速度。相反，通信的价格在迅速下降。在汽车行业，合并也同样在增加——比如戴姆勒与克莱斯勒，雷诺与尼桑的合并——但消费者看起来并未受到伤害。'
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
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
                    <View style={{ width: '85%', margin: '7.5%', borderColor: '#37376F', borderWidth: 1, padding: '2%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Examples of benefits or costs of the current concentration wave are scanty. Yet it is hard to imagine that the merger of a few oil firms today could re-create the same threats to competition that were feared nearly a century ago in the US,when the Standard Oil trust was broken up. The mergers of telecom companies,such as World Com, hardly seem to bring higher prices for consumers or a reduction in the pace of technical progress. On the contrary,the price of communications is coming down fast. In cars, too, concentration is increasing — witness Daimler and Chrysler,Renault and Nissan — but it does not appear that consumers are being hurt.`}
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
        marginLeft: '40%'
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