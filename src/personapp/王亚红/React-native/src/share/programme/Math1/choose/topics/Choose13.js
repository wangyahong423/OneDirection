import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose13 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】A',
                content2: '【解析】：',
                content3: '1/2e^(2x)，-1/3e^x为齐次方程的解，所以2、1为特征方程λ^2+aλ+b=0的根，',
                content4: "从而a=-(1+2)=-3，b=1*2=2，再将特解y=xe^x代入方程y''-3y'+2y=ce^x得：c=-1"
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content4}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`13、设y=1/2·e^(2x)+(x-1/3)e^x是二阶常系数非齐次线性微分方程y''+ay'+by=ce^x的一个特解，则()`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) a=-3,b=-1,c=-1`}&emsp;&emsp;{`(B) a=3,b=2,c=-1`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) a=-3,b=2,c=1`}&emsp;&emsp;&#32;&#32;{`(D) a=3,b=2,c=1`}</Text>
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