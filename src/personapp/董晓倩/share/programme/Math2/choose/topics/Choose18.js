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
                content1: '【答案】A',
                content2: '【解析】',
                content3: "函数f(x)在x=x0处可导的充分必要条件是f-'(x0)与f+'(x0)存在且相等，由于F(x)=f(x)+f(x)|sinx|,而f(x)可导，所以F(x)在x=0处可导等价于f(x)|sinx|在x=0可导，要使F(x)在x=0处可导，当且仅当-f(0)=f(0),即f(0)=0,故选择A"
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
                        <Text style={{ fontSize: 16 * s }}>{`18、设f(x)可导，F(x)=f(x)(1+|sinx|),若使F(x)在x=0处可导，则必有（   ）`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) f(0)=0`}&emsp;&emsp;&emsp;{`(B) f'(0)=0`}`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) f(0)+f'(0)=0`}&emsp;&emsp;{`(D) f(0)-f'(0)=0`}`}</Text>
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