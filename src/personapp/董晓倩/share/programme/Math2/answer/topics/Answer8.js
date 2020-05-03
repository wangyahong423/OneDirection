import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: "微分方程y''-3y'+2y=2xe^x的特征方程为",
                content3: '入^2-3入+2=0，',
                content4: "特征值为入1=1，入2=2，则方程y''-3y'+2y=0的通解为y=C1e^x+C2e^2x;",
                content5: "令原方程的特解为y0(x)=x(ax+b)e^x=(ax^2+bx)e^x,代入原方程得a=-1,b=-2",
                content6:"于是原方程的通解为y=C1e^x+C2e^2x-(x^2+2x)e^x(其中C1,C2为任意数)",
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
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
                    <Text style={{ fontSize: 16 * s }}>{`8、求微分方程y''-3y'+2y=2xe^x的通解`}</Text>
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
