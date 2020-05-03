import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】C',
                content2: '【考点分析】：',
                content3: '本题考查的曲线的凹凸性的定义及判断方法。',
                content4: '【解析】',
                content5: "如果对曲线在区间[a,b]上凹凸得到定义比较熟悉的话，可以直接作出判断，显然g(x)=f(0)(1-x)+f(1)x就是连接(0,f(0)),(1,f(1))两点的直线方程，故当f''(x)>=0时，曲线是凹凸的，也就是f(x)<=g(x),应该选D"
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`2、设函数f(x)具有二阶导数，g(x)=f(0)(1-x)+f(1)x,则在[0,1]上 (  )`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) 当f'(x)>=0时，f(x)>=g(x)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(B) 当f'(x)>=0时，f(x)<=g(x)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) 当f''(x)>=0时，f(x)>=g(x)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(D) 当f''(x)>=0时，f(x)<=g(x)`}</Text>
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