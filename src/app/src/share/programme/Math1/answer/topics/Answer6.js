import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer6 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: '(1)由一阶线性微分方程的求解公式可得y=e^(-x)·(∫xe^x dx+C)',
                content3:"=Ce^(-z)+x-1",
                content4:"(2)由一阶线性微分方程的求解公式可得",
                content5:"y(x)=e^(-x)[∫[0,x] e^t·f(t) dt+C]",
                content6:"y(x+T)=e^[-(x+T)][∫[-T,x] e^t·f(t) dt+C]",
                content7:"设u=t-T,=e^[-(x+T)]∫[-T,x] e^(u+T)·f(u+T) du+Ce^[-(x+T)]",
                content8:"=e^(-x)∫[-T,x] e^u·f(u) du+Ce^[-(x+T)]",
                content9:"则y(x+T)-y(x)=e^(-x)∫[-T,0] e^u·f(u) du=Ce^(-x)",
                content10:"若要y(x+T)-y(x)恒为0，则有e^(-x)∫[-T,0] e^u·f(u) du+Ce^(-x)[e^(-T)-1]=0",
                content11:"即∫[-T,0] e^u·f(u) du+C[e^(-T)-1]=0。又由于∫[-T,0] e^u·f(u) du与e^(-T)-1均为常数，可知",
                content12:"当且仅当C=∫[-T,0] e^u·f(u) du时，y(x)以T为周期，故微分方程存在的唯一以T为周期的解。"
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
                <Text style={[{ marginTop: 5 * s}, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={[{ marginTop: 5 * s}, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content10}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content12}</Text>
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
                    <Text style={{ fontSize: 16 * s }}>{`6、已知微分方程y'+y=f(x)，其中f(x)是R上的连续函数。`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)若f(x)=x，求方程的通解；(2)若f(x)是周期为T的函数，证明：方程存在唯一以T为周期的解。`}</Text>
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