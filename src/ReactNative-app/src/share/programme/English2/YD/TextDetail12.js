import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class TextDetails1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["1.D.rising                                                                                            2.D.has proved to be impractical                                                                     3.B.wind energy has replaced fossil fuels                                                                                         4.A.Its application has boosted battery storage.                                                     5. C. is not really encouraged by the US government"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 12</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;While fossil fuels- coal, oil, gas- still generate roughly 85 percent at the world's energy supply, it'sclearer than ever tha the future belongs to renewable sources such as wind and solar. The move to renewables is picking up momentum around the world .They now account for more than half of new power sources going on line.

Some growth stems from a commitment by governments and farsighted
businsses to fund cleaner energy sources. But inereasingly thestory isabout the
plummeting prices of renewables, especially wind and solar. The cost of solar panels has dropped by 80 percen and the cos of wind turbines by close to one-third in the past eight years.

In many parts of the world renewable energy is already a principal energy source. In Scotland, for example, wind turbines provide enough electricity to power 95 percent of homes. While the rest of the world takes the lead, notably China and Europe, the United States is also seeing a remarkable shift. In March,for the first time, wind and solar power accounted for more than 10 percent of the power generated in the US. reported the US Energy Information Administration.  

President Trump has underlined fossil fuels- especially coal-as the path to economic growth. In a recent speech in Iowa, he dismissed wind power as an unreliable energy source. But that message did not play well with many in lowa, where wind turbines dot the fieldsand provide 36 percent of the state's electricity generation- and where tech giants like Microsoft are being attracted by the availability of clean energy to power their data centers.

The question "“what happens when the wind doesn't blow or the sun doesn't shine?" has provided a quick put-dowm for skeptics. But a boost in the storage capacity of batteries is making their ability to keep power flowing around the clock more likely.

The advance is driven in par by vehicle manufacturers, who are placing big bets on battery-powered electric vehicles. Although electric cars are still a rarity on roads now, this massive investment could change the picture rapidly in coming years.

While there's a long way to go, the trend lines for renewable are spiking The pace of change in energy sources appears to be speeding up perhaps just in time to have a meaningful effect in slowing climate change.What Washington does- or doesn't do- to promote alternative energy may mean less and less at a time of a global shift in thought.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.The word “plummeting”(Line 3,Para 2)is closest in meeting to ______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.stabilizing{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.changing{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.falling{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.rising{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.AccordingtoParagraph 3,the use of renewable energy in America______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. is progressing notably{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. is as extensive as in Europe{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. faces many challenges{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.has proved to be impractical{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.It can be learned that in lowa,______. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.wind is a widely used energy source{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.wind energy has replaced fossil fuels{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. tech giants are investing in clean energy{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. tech giants are investing in clean energy{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.Which of the following is true about clean energy according Paagraps5&? {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.Its application has boosted battery storage.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.It is commonly used in car manufacturing.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.Its continuous supply is becoming a reality.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. Its continuous supply is becoming a reality.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. It can be inferred from the last paragraph tha renewable energy {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.will bring the US closer to other countries{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. will accelerate global environmental change{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. is not really encouraged by the US government{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.  is not competitive enough with regard to its cost</Text>
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
