import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer4 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: "(1) 这是一个一阶线性非齐次微分方程，先求解对应的线性齐次方程y'+xy=0的通解：",
                content3:"y=C·e^(x^2/2)，其中C为任意常数；",
                content4:"再用常数变易法求y'+xy=e^(-x^2/2)通解，",
                content5:"设y=C(x)e(x^2/2)为其解，代入方程，",
                content6:"得C'(x)e(-x^2/2)=e(-x^2/2),C'(x)=1，",
                content7:"C(x)=∫1 dx=x+C1，也就是通解为：y=(x+C1)·e(-x^2/2)",
                content8:"把初始条件y(0)=0代入，得C1=0，从而得到y(x)=x·e(-x^2/2)。",
                content9:"(2) y(x)=x·e(-x^2/2)，y'(x)=e(-x^2/2)·(1-x^2)，y''=(x^3-3x)·e(-x^2/2)=x(x-√3)(x+√3)·e(-x^2/2)",
                content10:"令y''(x)=0得x1=-√3，x2=0，x3=√3。",
                content11:"当x<-√3或0<x<√3时，y''<0，是曲线的凸区间；",
                content12:"当-√3<x<0或x>√3时，y''>0，是曲线的凹区间。",
                content13:"曲线的拐点有3个，分别为(-√3,-√3·e^(-3/2))，(0,0)，(-√3,√3·e^(-3/2))。"
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
                <Text style={[{ marginTop: 10 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content10}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content12}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content13}</Text>
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
                    <Text style={{ fontSize: 16 * s }}>{`4、设函数y(x)是微分方程y'+xy=e^(-x^2/2)满足条件y(0)=0的特解。`}</Text>
                            <Text style={{ fontSize: 16 * s }}>{`(1)求y(x)；(2)求曲线y=y(x)的凸凹区间拐点。`}</Text>
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