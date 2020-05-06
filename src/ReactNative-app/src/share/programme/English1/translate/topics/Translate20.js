import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Translate20 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '参考翻译：',
                content2: '但是合并运动必须受到严密监视这个事实仍然存在。就在几星期以前，格林斯潘对银行业的巨大合并发出了警告。如果合并后如此巨大的银行出现，谁来充当最终的借贷者，发挥监督、规范和运作的作用呢？当一个国家对破坏公平竞争的行为的处理过于严厉时，跨国公司会不会把它们的生产从一地转到另一地呢？在那些将会影响许多其他国家的事情中，如美国政府与微软公司的诉讼案，一个国家是否应该担负起“保护竞争”的责任呢？'
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
                            &emsp;&emsp;{`Yet the fact remains that the merger movement must be watched. A few weeks ago， Alan Greenspan warned against the megamergers in the banking industry. Who is going to supervise， regulate and operate as lender of last resort with the gigantic banks that are being created？ Won‘t multinationals shift production from one place to another when a nation gets too strict about infringements to fair competition？ And should one country take upon itself the role of “defending competition” on issues that affect many other nations， as in the US vs. Microsoft case？`}
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