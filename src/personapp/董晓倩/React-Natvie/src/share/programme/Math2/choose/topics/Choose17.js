import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】B',
                content2: '【解析】',
                content3: "由f''(x)>0可知f'(x)在区间[0,1]上为严格的单调递增函数，故f'(1)>f'(x)>f'(0),(0<x<1),由微分中值定理，f(1)-f(0)=f'(m),(0<m<1),所以f'(1)>f(1)-f(0)=f'(m)>f'(0),(0<m<1)，应该选B"
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
                        <Text style={{ fontSize: 16 * s }}>{`17、设函数f(x)在[0,1]上f''(x)>0,则f'(1),f'(0),f(1)-f(0)或f(0)-f(1)的大小顺序是（   ）`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) f'(1)>f'(0)>f(1)-f(0)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(B) f'(1)>f(1)-f(0)>f'(0)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) f(1)-f(0)>f'(1)>f'(0)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(D) f'(1)>f(0)-f(1)>f'(0)`}</Text>
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