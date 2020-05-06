import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: '(1)Qlim(x->0+) f(x)/x<0，由极限的局部保号性，∃c∈(0,g)，使得f(c)<0，又Qf(1)>0，由零点存在定理知，∃e∈(c,1)，使得，f(e)=0',
                content3: "(2)构造F(x)=f(x)f'(x)，F(0)=f(0)f'(0)=0，F(e)=f(e)f'(e)=0，Qlim(x->0+) f(x)/x<0，",
                content4: "∴f'(0)<0，由拉格朗日中值定理知∃g∈(0,1),[f(1)-f(0)]/1-0=f'(g)>0，Qf'(0)f'(g)<0，所以由零点定理知∃e1∈(0,g)⊂(0,1)，使得f'(e1)=0，",
                content5: "∴F(e1)=f(e1)f'(e1)=0，所以原方程至少有两个不同实根。"
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
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
                    <Text style={{ fontSize: 16 * s }}>{`2、设函数f(x)在区间[0,1]上具有2阶导数，且f(1)>0，lim(x->0) f(x)/x <0，证明：`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(I)方程f(x)=0在区间(0,1)内至少存在一个实根；`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(II)方程f(x)f''(x) + [f'(x)]^2 = 0在区间(0,1)内至少存在两个不同实根。`}</Text>
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