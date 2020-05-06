import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】B',
                content2: '【详解】',
                content3: "由f'(x0)=0知x=x0为f(x)的驻点，把x=x0带入恒等式x0f''(x0)=1-e^(-x0),即f''(x0)=(1-e^-x0)/x0,由于分子、分母同号。故f''(x0)>0,因此驻点x=x0为极小值点，应该选B"
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`10、已知函数y=f(x)对一切x满足xf''(x)+3x[f'(x)]^2=1-e^(-x),若f'(x0)=0(x0!=0)，则（   ）`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) f(x0)是f(x)的极大值`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(B) f(x0)是f(x)的极小值`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) (x0,f(x0))是曲线y=f(x)的拐点`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(D) f(x0)不是f(x)的极值，(x,f(x0))也不是曲线y=f(x)的拐点`}</Text>
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