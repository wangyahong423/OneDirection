import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose4 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】C',
                content2: '【详解】',
                content3: "由Z=f(x)ln f(y)知Zx'=f'(x)ln f(y)，Zy'=f(x)/f(y)*f'(y)，Zxy''=f'(x)/f(y)*f'(y)，Zxx''=f''(x)ln f(y)，Zyy''=f(x)*{[f''(y)f(y)-(f'(y))^2]/f^2(y)}",
                content4:"所以Zxy''|(x=0,y=0)=f'(0)/f(0)=0，Zxy''|(x=0,y=0)=f''(0)ln f(0)，要使得函数Z=f(x)ln f(y)在点(0,0)处取得极小值，仅需f''(0)ln f(0)>0,f''(0)f(0)·f''(0)>0，所以有f(0)>1,f''(0)>0"
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
                        <Text style={{ fontSize: 16 * s }}>{`3、4、设函数f(x)具有二阶函数连续导数，且f(x)>0，f(0)'=0，则函数Z=f(x)ln f(y)在点(0,0)处取得极小值的一个充分条件是（）`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) f(0)>1,f''(0)>0`}&emsp;&emsp;&#8194;&#32;&#32;{`(B) f(0)>1,f''(0)<0`}</Text>
                        <Text style={{fontSize:16*s}}>{`(C) f(0)<1,f''(0)>0`}&emsp;&emsp;&emsp;{`(D) f(0)<1,f''(0)<0`}</Text>
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