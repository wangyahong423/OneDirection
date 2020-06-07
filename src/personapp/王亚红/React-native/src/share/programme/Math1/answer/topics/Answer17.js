import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Answer17 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】',
                content2: '令f(x)=x·ln (1+x)/(1-x)+cos x-1-x^2/2，可得',
                content3:"f'(x)=ln (1+x)/(1-x)+[x·(1+x)/(1-x)]·2/(1-x)^2 - sin x-x",
                content4:"=ln (1+x)/(1-x)+2x/(1-x^2)-sin x-x",
                content5:"=ln (1+x)/(1-x)+(1+x^2)/(1-x^2)·x-sin x",
                content6:"当0<x<1时，有ln (1+x)/(1-x)>=0，[(1+x^2)/(1-x^2)]>1，所以[(1+x^2)/(1-x^2)]·x-sin x>=0，",
                content7:"故f'(x)>0，而f(0)=0，即得x·ln (1+x)/(1-x)+cos x-1-x^2/2>=0",
                content8:"所以x·ln (1+x)/(1-x)+cos x>=x^2/2+1。",
                content9:"当-1<x<0，有ln (1+x)/(1-x)<=0，(1+x^2)/(1-x^2)>1，所以(1+x^2)/(1-x^2)·x-sin x<=0，",
                content10:"故f'(x)>=0，即得x·ln (1+x)/(1-x)+cos x-1-x^2/2 >=0",
                content11:"可知，x·ln (1+x)/(1-x)+cos x>=1+x^2/2, -1<x<1"
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
                        <Text style={{ fontSize: 16 * s }}>{`17、证明：x·ln (1+x)/(1-x)+cos x >= 1+x^2/2，-1<x<1`}</Text>
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