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
            answerContent: ["1.D.it was successfully made just before the world financial crisis                                                          2.A . collectors were no longer actively involved in art-market auctions                                                                  3.B.The art market surpassed many other industries in momentum.                                                                                                                                4.C.factors promoting artwork circulation                                                                                5.C.Art Market in Decline"],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 9</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;The longest bull run in a century of art-market history ended on a dramatic note with a sale of 56 works by Damien Hirst, “Beautiful Inside My Head Forever”, at Sotheby’s in London on September 15th 2008 (see picture). All but two pieces sold, fetching more than ￡70m, a record for a sale by a single artist. It was a last hurrah. As the auctioneer called out bids, in New York one of the oldest banks on Wall Street, Lehman Brothers, filed for bankruptcy.

　　The world art market had already been losing momentum for a while after rising vertiginously since 2003. At its peak in 2007 it was worth some $65 billion, reckons Clare McAndrew, founder of Arts Economics, a research firm-double the figure five years earlier. Since then it may have come down to $50 billion. But the market generates interest far beyond its size because it brings together great wealth, enormous egos, greed, passion and controversy in a way matched by few other industries.

　　In the weeks and months that followed Mr Hirst’s sale, spending of any sort became deeply unfashionable, especially in New York, where the bail-out of the banks coincided with the loss of thousands of jobs and the financial demise of many art-buying investors. In the art world that meant collectors stayed away from galleries and salerooms. Sales of contemporary art fell by two-thirds, and in the most overheated sector-for Chinese contemporary art-they were down by nearly 90% in the year to November 2008. Within weeks the world’s two biggest auction houses, Sotheby’s and Christie’s, had to pay out nearly $200m in guarantees to clients who had placed works for sale with them.

　　The current downturn in the art market is the worst since the Japanese stopped buying Impressionists at the end of 1989, a move that started the most serious contraction in the market since the second world war. This time experts reckon that prices are about 40% down on their peak on average, though some have been far more volatile. But Edward Dolman, Christie’s chief executive, says: “I’m pretty confident we’re at the bottom.”

　　What makes this slump different from the last, he says, is that there are still buyers in the market, whereas in the early 1990s, when interest rates were high, there was no demand even though many collectors wanted to sell. Christie’s revenues in the first half of 2009 were still higher than in the first half of 2006. Almost everyone who was interviewed for this special report said that the biggest problem at the moment is not a lack of demand but a lack of good work to sell. The three Ds-death, debt and divorce-still deliver works of art to the market. But anyone who does not have to sell is keeping away, waiting for confidence to return.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.In the first paragraph,Damien Hirst's sale was referred to as “a last victory”because ____.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.the art market hadwitnessed a succession of victoryies{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.the auctioneer finally got the two pieces at the highest bids{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.Beautiful Inside My Head Forever won over all masterpieces{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.it was successfully made just before the world financial crisis{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.By saying “spending of any sort became deeply unfashionable”(Line 1-2,Para.3),the author suggests that_____ .{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;　A . collectors were no longer actively involved in art-market auctions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B .people stopped every kind of spending and stayed away from galleries{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.art collection as a fashion had lost its appeal to a great extent{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D .works of art in general had gone out of fashion so they were not worth buying{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.Which of the following statements is NOT ture?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A .Sales of contemporary art fell dramatically from 2007to 2008.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.The art market surpassed many other industries in momentum.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.The market generally went downward in various ways.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.Some art dealers were awaiting better chances to come.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4.The three Ds mentioned in the last paragraph are ____ {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.auction houses ' favorites{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.contemporary trends{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.factors promoting artwork circulation{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.styles representing impressionists{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.The most appropriate title for this text could be ___{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.Fluctuation of Art Prices{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.Up-to-date Art Auctions{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.Art Market in Decline{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.Shifted Interest in Arts</Text>
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
