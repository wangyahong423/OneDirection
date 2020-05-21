import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer15 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: '由题意可知矩阵C为2阶矩阵，故可设C=(x1 x2,x3 x4)，则由AC-CA=B可得线性方程组：',
                content3:"{-x2+a·x3=0; -a·x1+x2+a·x4=1; x1-x3-x4=1; x2-a·x3=b  (1)",
                content4:"(0 -1 a 0 0,-a 1 0 a 1,1 0 -1 -1 1,0 1 -a 0 b)->",
                content5:"(1 0 -1 -1 1,-a 1 0 a 1,0 -1 a 0 0,0 1 -a 0 b)->",
                content6:"(1 0 -1 -1 1,0 1 -a 0 1+a,0 -1 a 0 0,0 1 -a 0 b)->",
                content7:"(1 0 -1 -1 1,0 1 -a 0 1+a,0 0 0 0 1+a,0 0 0 0 b-1-a)",
                content8:"由于方程组(1)有解，故有1+a=0，b-1-a=0，即a=-1，b=0，从而有",
                content9:"(0 -1 a 0 0,-a 1 0 a 1,1 0 -1 -1 1,0 1 -a 0 b)->",
                content10:"(1 0 -1 -1 1,0 1 1 0 0,0 0 0 0 0,0 0 0 0 0)，故有{x1=k1+k2+1;x2=-k1;x3=k1;x4=k2，其中k1、k2任意。",
                content11:"从而C=(k1+k2+1 -k1,k1 k2)"
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content3}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content6}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content9}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content10}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content11}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`15、设A=(1 a,1 0)，B=(0 1,1 b)，当b为何值时，存在矩阵C使得AC-CA=B，并求所有矩阵C。`}</Text>
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