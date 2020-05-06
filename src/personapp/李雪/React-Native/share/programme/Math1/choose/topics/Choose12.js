import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose12 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】C',
                content2: '【解析】：',
                content3: '因为A与B相似，因此存在可逆矩阵P，使得(P^-1)AP=B，于是有：',
                content4: '(P^-1AP)^T=P^TA^T(P^-1)^T=P^TA^T(P^T)^-1=B^T，即A^T~B^T，',
                content5: "(P^-1AP)^-1=P^-1A^-1(P^-1)^-1=P^-1A^-1P=B^-1，因此 A^-1~B^-1，",
                content6: "p^-1(A+A^-1)P=P^-1AP+P^-1A^-1P=B+B^-1，因此A+A^-1~B+B^-1，",
                content7: "而C选项中，P^-1A^T不一定等于B^T，故C不正确，选择C"
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
                        <Text style={{ fontSize: 16 * s }}>{`12、设A^T与B^T是可逆矩阵，且A与B相似，则下列结论错误的是()`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) A^T与B^T相似`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(B) A^-1与B^-1相似`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) A+A^T与B+B^T相似`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(D) A+A^-1与B+B^-1相似`}</Text>
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