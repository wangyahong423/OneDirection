import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer9 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: '(1)特征方程为r^2+2r+k=0，由0<k<1可知，特征方程由两个不同的实根，即',
                content3:"r1,2=[-2±√(4-4k)]/2=-1±√(1-k)且r1,2<0，因此二阶常系数齐次线性方程的解为：",
                content4:"y(x)=C1·e^(r1·x)+C2e^(r2·x),故可得",
                content5:"∫[0,+∞] y(x) dx = ∫[0,+∞] [C1·e^(r1·x)+C2·e^(r2·x)] dx",
                content6:"=C1/r1·e^(r1·x)|[0,+∞]+C2/r2·e^(r2·x)|[0,+∞]",
                content7:"=C1/r1(0-1)+C2/r2(0-1)",
                content8:"=-C1/r1-C2/r2",
                content9:"因此∫[0,+∞] y(x) dx收敛",
                content10:"(2)由y(x)=C1e^(r1·x)+C2e^(r2·x)，y(0)=1，y'(0)=1可得：",
                content11:"{C1+C2=1;C1r1+C2r2=1;r1,2=-1±√(1-k)，解得C1=C2=1/2",
                content12:"代入可得",
                content13:"∫[0,+∞] y(x) dx=-C1/r1-C2/r2=-1/2[1/(-1+√(1-k))+1/(-1-√(1-k))]",
                content14:"=-1/2*-2/[1-(1-k)]=1/k"
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
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content12}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content13}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content14}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`9、设函数y(x)满足方程y''+2y'+ky=0，其中0<k<1`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(1)证明：反常积分∫[0,+∞] y(x) dx收敛`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(2)若y(0)=1，y'(0)=1，求∫[0,+∞] y(x) dx的值`}</Text>
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