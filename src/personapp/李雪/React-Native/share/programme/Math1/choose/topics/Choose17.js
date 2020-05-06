import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose17 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】D',
                content2: '【解析】：',
                content3: '因为AX=0基础解系含一个线性无关的解向量，所以r(A)=3，于是r(A*)=1，故A*X=0基础解系含3个线性无关的解向量，又A*A=|A|E=0 且 r(A)=3，所以A的列向量组中含A*X=0的基础解系，因为(1,0,1,0)^T是方程AX=0的基础解系，所以α1+α3=0，故α1，α2，α4或α2，α3，α4线性无关，显然α1，α2，α3为A*X=0的一个基础解系，选D。'
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content3}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`17、设A=(a1,a2,a3,a4)是4阶矩阵，A*为A的伴随矩阵，若(1,0,1,0)^T是方程组Ax=0的一个基础解系，则A*x=0的基础解系可为()`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) α1，α2`}&emsp;&emsp;&emsp;&emsp;{`(B) α1，α3`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) α1，α2，α3`}&emsp;&emsp;{`(D) α2，α3，α4`}</Text>
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