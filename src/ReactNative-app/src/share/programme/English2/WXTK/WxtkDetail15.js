import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class WxtkDetail1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ['1. B. served              2. B. common                 3. A. bore                                        4. A. necessities           5. C. but                      6. B. into                                7. C. symbolizing               8. A. handed out   9. D. managed               10.B. never               11. D. distinguished           12. B.collection    13.C. interviewed            14. D. human        15. B. commuted              16. A. paralleled                 17. C. emphasized      18. B. illusions       19. B. To                   20. D. at that point'],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 15</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Millions of Americans and foreignerssee GI.Joe as a mindless war toy ,the symbol of American military adventurism,but that’s not how it used to be .To the men and women who( 1 )in World War II and the people they liberated ,the GI.was the (2) man grown into hero ,the pool farm kid torn away from his home,the guy who( 3) all the burdens of battle ,who sleptin cold foxholes,who went without the( 4) of food andshelter ,who stuck it out and drove back the Nazi reign of murder .this was nota volunteer soldier ,not someone well paid , (5) anaverage guy ,up( 6 )the best trained ,best equipped,fiercest ,most brutal enemies seen in centuries.

                        Hisname is not much.GI. is just a military abbreviation (7) Government Issue ,and it was on allof the article( 8) to soldiers .And Joe? A common namefor a guy who never (9) it to the top .Joe Blow ,JoeMagrac …a working class name.The United States has( 10) had a president or vicepresident or secretary of state Joe.

　　GI .joehad a (11)career fighting German ,Japanese , and Korean troops . He appers as acharacter ,or a (12 ) of american personalities, in the 1945 movie The Story ofGI. Joe, based on the last days of war correspondent Ernie Pyle. Some of thesoldiers Pyle(13)portrayde themselves in the film. Pyle was famous for coveringthe (14)side of the warl, writing about the dirt-snow –and-mud soldiers, nothow many miles were(15)or what towns were captured or liberated, His reports(16)the“willie”cartoons of famed Stars and Stripes artist Bill Maulden. Both men(17)the dirtand exhaustion of war, the (18)of civilization that the soldiers shared witheach other and the civilians: coffee, tobacco, whiskey, shelter, sleep.(19)Egypt, France, and a dozen more countries, G.I. Joe was any Americansoldier,(20)the most important person in their lives.</Text>
<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A.performed     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. served           `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. rebelled           `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. betrayed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. In returnactual             </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.common        `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C.special            `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.normal`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. bore                </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. cased            `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. removed             `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. loaded`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. necessities         </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.facilitice      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. commodities           `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. propertoes`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. and                  </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. nor               `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. but                 `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. hence`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A.for                </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. into            `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. form           `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. against `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. meaning           </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. implying       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. symbolizing     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. symbolizing `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. handed out      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. turn over    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. brought back     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. passed down`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. pushed              </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. got             `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. made               `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. managed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. ever                 </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.never             `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. either             `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  neither`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. disguised        </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. disturbed      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. disturbed     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. distinguished`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. company              </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. collection      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. community       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. colony`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. employed        </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. appointed       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.  interviewed      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. questioned`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. ethical        </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. military         `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. political        `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. human`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. ruined           </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. ruined          `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. ruined            `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  ruined      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. paralleled    </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.  counteracted      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. duplicated     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  contradicted`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. contradicted   </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.avoided         `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.emphasized    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.admired`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. stages         </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.illusions       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. fragments       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. advancea`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A.  With           </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. To                `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.  Among           `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  Beyond`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A.  on the contrary    </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.  by this means     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. from the outset      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. at that point`}</Text>
                        </View>
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
        marginLeft: '40%',
        marginBottom: 20 * s,
        marginTop: 10
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
