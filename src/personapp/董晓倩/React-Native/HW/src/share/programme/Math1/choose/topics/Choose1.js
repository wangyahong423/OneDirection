import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】C',
                content2: '【考点分析】：',
                content3: '本题考查拐点的判断。直接利用判断拐点的必要条件和第二充分条件即可。',
                content4: '【解析】',
                content5: "由y=(x-1)(x-2)^2(x-3)^3(x-4)^4可知，1,2,3,4分别是y=(x-1)(x-2)^2(x-3)^3(x-4)^4=0的一、二、三、四重根，故由导数与原函数之间的关系可知y'(1)=/0，y'(2)=y'(3)=y'(4)=0，y''(2)=/0，y''(3)=y''(4)=0，y'''(3)=/0，y'''(4)=0，故(3,0)是一拐点。"
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
                              <Text>{`1、曲线y=(x-1)(x-2)^2(x-3)^3(x-4)^4的拐点是()`}</Text>
                              <Text>{`(A) (1,0)`}&emsp;&emsp;{`(B) (2,0)`}&emsp;&emsp;{`(C) (3,0)`}&emsp;&emsp;{`(D) (4,0)`}</Text>
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
        marginBottom:20*s
    },
    headerText: {
        fontSize: 19*s,
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