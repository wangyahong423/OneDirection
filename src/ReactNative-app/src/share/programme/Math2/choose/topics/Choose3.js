import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】A',
                content2: '【详解】',
                content3: "微分方程的特征方程为r^2-4r+8=0,有一对共轭的复数根r=2±2i,所以入1=2不是特征方程的根，所以对应方程y''-4y'+89=e^2x的特解应该设为y1*=Ae^2x;而入2=2+2i是方程的单根，所以对应方程y'''-4y'+89=e^2x*cos2x的特解应该设为y2*=xe^2x*(Bcos2x+Csin2x);从而微分方程y''-4y'+89=e^2x*(1+cos2x)的特解可设为y*=y1*+y2*=Ae^2x+xe^2x(Bcos2x+Csin2x),应该选C"
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
                        <Text style={{ fontSize: 16 * s }}>{`3、微分方程y''-4y'+89=e^2x*(1+cos2x)的特解可设为y^*=(  )`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) Ae^2x + e^2x*(Bcos2x+Csin2x)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(B) Axe^2x + xe^2x*(Bcos2x+Csin2x)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) Ae^2x + xe^2x*(Bcos2x+Csin2x)`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(D) Axe^2x + e^2x*(Bcos2x+Csin2x)`}</Text>
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