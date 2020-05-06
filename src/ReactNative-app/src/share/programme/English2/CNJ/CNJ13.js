import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CNJ4 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["如今很多人都会借助互联网在家里舒舒服服地购物，网络购物已成为人们最喜爱的购物方式之一。对于消费者来说，网络购物不仅方便，选择范围广，价格具有竞争性，而且更容易获取商品信息。对于商家来说，网络提供了更多的客户和更大的市场空间。对于整个市场经济来说，这种新型的购物模式可在更大的范围内、更广的层面上以更高的效率实现资源配置(allocate resources)。"]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={{ color: 'white' }}>查看答案</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>{this.state.answerContent}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 13</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;These days, lots of people do their shopping in the comfort of their homes with the help of the Intemet. Online shopping has become one of people's favorite ways of shopping. For consumers, online shopping offers not only convenience, broader selection and competitive pricing, but also easier access to goods information. For businesses, the Internet brings in more customers and offers a larger market. For the entire market-oriented economy, this new type of shopping method can allocate resources with greater efficiency on a broader scale in a more extensive dimension.</Text>
                        <Accordion
                            sections={this.state.todo}
                            activeSections={this.state.activeSections}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft:'40%',
        marginBottom:20*s,
        marginTop:10
    },
    headerText: {
        fontSize: 20
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
