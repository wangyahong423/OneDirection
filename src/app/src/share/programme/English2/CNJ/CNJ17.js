import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CNJ3 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["既然投机有很大的带来损失的风险，我们可能要问为什么还会允许进行投机呢。根本原因在于投机能在经济发展中发挥有益的功能。由于相信价格会上涨从而买商品或期货加快了市场均衡，并能鼓励更多的供应商更快地进入市场。如果价格变化滞后到商品短缺真正出现时才发生，那么价格波动很可能更为剧烈、突然。采取补救措施增加供应将刻不容缓。类似的，如果投机者预见到某商品将过剩，他们就会卖出期货，这样做有助于在过剩真正发生之前在一定程度上降低价格。而当投机者预见到将会出现短缺的时候，就会哄抬物价，这样做也有助于保存当前的供给。物价上涨时，商品购买量就会变少，因为价格上涨将促使消费者节约。同样的，物价下跌将促使消费者增加购买，这样就有助于将正在增加的过剩商品出售出去。"]
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 17</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;One might ask why speculation is permitted when there is so real a danger of loss. The basic reason is that speculation can perform useful functions in the market equilibrium and encourages faster entry of more suppliers. If the price change lagged until after an actual commodity shortage had occurred, the fluctuation would probably be sharper and more sudden. Remedial supply action could not be further delayed. Similarly, if speculators foresee a surplus in some commodity, their selling of futures will help drive the price down to some extent before the surplus actually occurs. When speculators foresee a shortage and bid up the price, they are also helping to conserve the present supply. As the price goes up, less of the commodity is purchased; a rise in price encourages users to economize. Similarly, a lowering of price encourages users to buy more, thus helping to sell the surplus which is developing.</Text>
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
