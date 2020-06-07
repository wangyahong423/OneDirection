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
            answerContent: ["1.   D. forests may become a potential threat                            2.   D.lower their present carbon- absorbing capacity                                                                  3.   B. reduce the density of some of its forest                                                                                          4.   A. To handle the areas in serious danger first                                                      5.   C. Supportive"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 4</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Forests give us shade, quiet and one of the harder challenges in the fight against climate change. Even as we humans count on forests to soak up a good share of the carbon dioxide we produce, we are threatening their ability to do so.The climate change we are hastening could one day leave us with forests that emit more carbon than they absorb.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Thankfully, there is a way out of this trap . but it involves striking a subtle balance. Helping forests flourish as valuable"carbon sinks" long into the future may require reducing their capacity to absorb carbon now, California is leading the way,as it does on so many climate efforts, in figuring out the details.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The state's proposed Forest Carbon Plan aims to double efforts to thin out young trees and clear brush in parts of the forest. This temporarily lowers carbon-carrying capacity. But the remaining trees draw a greater share of the available moisture, so they grow and thrive, restoring the forest's capacity to pull carbon from the air. Healthy trees are also better able to fend off insects. The landscape is rendered less easily burnable. Even in the event of a fire, fewer trees are consumed.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The need for such planning is increasingly urgent. Already, since 2010,drought and insects have killed over 100million trees in California, most of them in 2016 alone, and wildfires have burned hundreds of thousands of acres.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;California plans to treat 35,000 acres of forest a year by 2020, and 60,00 by 2030- financed from the proceeds of the state' s emissions- permit auctions, That's only a small share of the total acreage that could benefit, about half a million acres in all, so it will be vital to prioritize areas at greatest risk of fire or drought.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The strategy also aims to ensure that carbon in woody material removed from the forests is locked away in the form of solid lumber or burned as biofuel in vehicles that would otherwise run on fossil fuels. New research on transportation biofuels is already under way.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;State governments are well accustomed to managing forests, but traditionally they've focused on wildlife, watersheds and opportunities for recreation. Only recently have they come to see the vital part forests will have to play in storing carbon. Califormia's plan, which is expected to be finalized by the governor next year, should serve as a model.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1. By saying "one of the harder challenges ,"the author implies that_______.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. global climate change may get out of control{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. people may misunderstand global warming{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. extreme weather conditions may arise{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. forests may become a potential threat{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2. To maintain forests as valuable "carbon sinks," we may need to ____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. preserve the diversity of species in them{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. accelerate the growth of young trees{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. strike a balance among different plants{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. lower their present carbon- absorbing capacity{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3. California's Forest Carbon Plan endeavors to ____. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. cultivate more drought-resistant trees{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. reduce the density of some of its forests{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. find more effective ways to kill insects{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. restore its forests quickly after wildfires{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. What is essential to California's plan according to Paragraph 5? {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. To handle the areas in serious danger first{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. To carry it out before the year of 2020{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. To perfect the emissions-permit auctions.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. To obtain enough financial support{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. The author's attitude to California's plan can best be described as___. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. Ambiguous{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. Tolerant{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. Supportive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D. cautious</Text>
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
