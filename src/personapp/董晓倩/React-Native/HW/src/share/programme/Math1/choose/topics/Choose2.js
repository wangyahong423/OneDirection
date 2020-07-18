import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】C',
                content2: '【考点分析】：',
                content3: '本题考查二元函数取极值的条件，直接套用二元函数取极值的充分条件即可。',
                content4: '【解析】',
                content5: "由z=f(x)lnf(y)Zx'=f'(x)lnf(y)，Zy'=f(x)/f(y)*f'(y)，Zxy''=f'(x)/f(y)f'(y)，Zxy''=f''(x)lnf(y)，Zxy''=f(x)*(f''(y)f(y)-(f'(y))^2)/f^2(y)，所以Zxy''|(x=0,y=0)=f'(0)/f(0)*f'(0)=0，Zxy''|(x=0,y=0)=f''(0)lnf(0)，要使得函数Z=f(x)lnf(y)在点(0,0)处取得极小值，仅需f''(0)ln f(0)>0,f''(0)ln f(0)·f''(0)>0，所以有f(0)>1,f''(0)>0。"
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;&#32;{section.content5}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: '100%',
                    height: 63 * s,
                    backgroundColor: '#37376F',
                    alignItems: 'center',
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ width: 60 * s, height: 60 * s, justifyContent: "center", alignItems: "center", position: "absolute", left: 0 }}>
                        <Image source={require('../../../../../../assets/left.png')} style={{ height: 23 * s, width: 23 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', lineHeight: 60 * s, fontSize: 22 * s }}>选择题</Text>
                </View>
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: '85%', margin: '7.5%', borderColor: '#37376F', borderWidth: 1, padding: '2%' }}>
                            <Text>{`2、设函数f(x)具有二阶连续导数，且f(x)>0，f(0)'=0,则函数z=f(x)lnf(y)在点(0,0)处取得极小值的一个充分条件是()`}</Text>
                            <Text>{`(A) f(0)>1,f''(0)>0`}&emsp;&emsp;{`(B) f(0)>1,f''(0)<0`}</Text>
                            <Text>{`(C) f(0)<1,f''(0)>0`}&emsp;&emsp;{`(D) f(0)<1,f''(0)<0`}</Text>
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
            </SafeAreaView>
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
        marginLeft: '40%',
        marginBottom: 20 * s
    },
    headerText: {
        fontSize: 19 * s,
        color: '#fff',
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})