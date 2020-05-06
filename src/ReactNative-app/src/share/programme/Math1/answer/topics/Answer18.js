import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer18 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: "(1)曲线L在任一处(x,y)的切线斜率为dy/dx=-sin t/f'(t)，过该点(x,y)处的切线为",
                content3:"Y-cos t = -sin t/f'(t) (X-f(t))，令Y=0得X=f'(t)·cos t+f(t)。由于曲线L与x轴和y轴的交点到切点的距离恒为1。",
                content4:"故有[f'(t)cot t+f(t)-f(t)]^2+cos^2 t=1，又因为f'(t)>0 (0<t<π/2)",
                content5:"所以f'(t)=sin t/cos t，两边同时取不定积分可得f(t)=ln |sec t+tan t|=sin t+C，又由于f(0)=0，",
                content6:"所以C=0，故函数f(t)=ln |sec t+tan t|-sin t+C，又由于f(0)=0，",
                content7:"(2)此曲线L与x轴和y轴的所围成的无边界的区域的面积为：",
                content8:"S=∫[0,π/2] cos t·f'(t) dt = π/4"
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
                <Text style={[{ marginTop: 5 * s}, styles.contentText]}>&emsp;&emsp;&#32;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content3}</Text>
                <Text style={[{ marginTop: 5 * s}, styles.contentText]}>&emsp;&emsp;&#32;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content6}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content8}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`18、已知曲线L:{x=f(t);y=cos t  (0<=t<π/2)，其中函数f(t)具有连续导数，且f(0)=0，f(t)>0 (0<t<π/2)，若曲线L的切线与x轴的交点到切点的距离恒为1，求函数f(t)的表达式，并求此曲线L与x轴与y轴无边界的区域的面积。`}</Text>
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