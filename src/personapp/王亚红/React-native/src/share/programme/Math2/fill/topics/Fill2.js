import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Fill2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】1',
                content2: '【考点分析】：',
                content3: '本题考查隐函数的微分',
                content4: '【解析】',
                content5: "隐函数求导的常用方法有：1. 利用复合函数求导法，将每个方程两边对指定的自变量求偏导数（或导数），此时一定要注意谁是自变量，谁是因变量，对中间变量的求导不要漏项。然后求解相应的线性方程式或方程组，求得所要的隐函数的偏导数或导数。",
                content6:   "2、 利用一阶全微分形式的不变性，对每个方程两边求全微分，此时各变量的地位是平等的，然后求解相应的线性方程组或者方程式，求的相应的隐函数的全微分。对于多元隐函数来说，若题目中求的是全部偏导数或全微分，往往是用方法2比较简单些，若只求某个偏导数，则方法1和方法2的繁简程度差不多。",
                content7:"在本题中，令x=0,得y(0)=0,等式两边同时对x求导,得：",
                content8:"2x-y^t=e^y*y^t,令x=0,y=0得：-y^t(0)=Y^t(Q),于是y^t(0)=0,再将(*)是对x求导得:2-y''=e^y*y'^2+e^y+y'',令x=0,y=0，y'=0得2-y''(0)=y''(0),于是y''(0)=1"
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content8}</Text>
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
                        <Text style={{ fontSize: 16 * s }}>{`2、设y=y(x)是由方程x^2-y+1=e^y所确定的隐函数，则(d^2y)/dx^2|x=0 =________`}</Text>
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