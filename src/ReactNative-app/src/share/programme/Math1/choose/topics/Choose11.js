import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose11 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】A',
                content2: '【解析】：',
                content3: '将y=(1+x^2)^2-√(1+x^2)代入微分方程可得：',
                content4: '4x(1+x^2)-x/√(1+x^2)+p(x)[(1+x^2)^2-√(1+x^2)]=q(x)',
                content5: "而将y=(1+x^2)^2+√(1+x^2)代入微分方程可得：",
                content6:'4x(1+x^2)+x/√(1+x^2)+p(x)[(1+x^2)^2+√(1+x^2)]=q(x)',
                content7:'将这两个式子可得：8x(1+x^2)+2p(x)(1+x^2)^2=2q(x)',
                content8:'两个式子相减可得：2x/√(1+x^2)+2p(x)√(1+x^2)=0',
                content9:'因此可得q(x)=4x(1+x^2)+(-x/1+x^2)(1+x^2)^2=4x(1+x^2)-x(1+x^2)=3x(1+x^2)，故选择A'
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content6}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content9}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`11、若y=(1+x^2)^2-√(1+x^2)，y=(1+x^2)^2+√(1+x^2) 是微分方程y'+P(x)y=q(x)的两个解，则q(x)=()`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) 3x(1+x^2)`}&emsp;&emsp;&emsp;&emsp;{`(B) -3x(1+x^2)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) x/(1+x^2) `}&emsp;&emsp;&emsp;&emsp;{`(D) -x/(1+x^2)`}</Text>
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