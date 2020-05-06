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
            answerContent: ['1. B. concluded          2. A.protective                3. C.Likewise                               4. A.indicator           5. D.concern               6. A.in terms of                                  7. C.equals              8. C.in turn                       9. D.straightforward                 10. B.while       11. A.shape                          12. B.qualify            13.C.normal         14.D.tendency       15.B.pictured         16.D.associated         17.A.Even                  18.D.grounded   19.C.policies        20.B.against'],
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
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Thinner isn’t always better. A number of studies have __1 (concluded)___ that normal-weight people are in fact at higher risk of some diseases compared to those who are overweight. And there are health conditions for which being overweight is actually ___2 (protective) ___. For example, heavier women are less likely to develop calcium deficiency than thin women. ___3 (Likewise) ___ among the elderly, being somewhat overweight is often an ___4 (indicator) ___ of good health.

                        Of even greater __5(concern) __ is the fact that obesity turns out to be very difficult to define. It is often defined ___6(in terms of) __ body mass index, or BMI. BMI ___7 (equals) __ body mass divided by the square of height. An adult with a BMI of 18 to 25 is often considered to be normal weight. Between 25 and 30 is overweight. And over 30 is considered obese. Obesity, ___8(in turn) __,can be divided into moderately obese, severely obese, and very severely obese.

                        While such numerical standards seem __9 (straightforward) __ , they are not. Obesity is probably less a matter of weight than body fat. Some people with a high BMI are in fact extremely fit, __10（while）__ others with a low BMI may be in poor __11( shape)__ .For example, many collegiate and professional football players __12 (qualify)__ as obese, though their percentage body fat is low. Conversely, someone with a small frame may have high body fat but a __13 (normal) __ BMI.

                        Today we have a(an) _14 (tendency)_ to label obesity as a disgrace.The overweight are sometimes_15 (pictured)_ in the media with their faces covered. Stereotypes _16 (associated)_ with obesity include laziness, lack of will power,and lower prospects for success.Teachers,employers,and health professionals have been shown to harbor biases against the obese. _17 (Even)_ very young children tend to look down on the overweight, and teasing about body build has long been a problem in schools.

Negative attitudes toward obesity, _18(grounded)_ in health concerns, have stimulated a number of anti-obesity _19(policies). My own hospital system has banned sugary drinks from its facilities, making it impossible to purchase a non-diet soft drink there. Many employers have instituted weight loss and fitness initiatives. Michelle Obama has launched a high-visibility campaign _20(against)_ childhood obesity, even telling Dr. Oz that it represents our greatest national security threat.</Text>
<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A.denied           </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. concluded       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. doubled       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. ensured`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. ensured      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.dangerous    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C.sufficient       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.troublesome`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. Instead       </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. However       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Likewise         `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. Therefore`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. indicator       </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.objective      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. origin          `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. example`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. impact        </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. relevance        `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. assistance        `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. concern`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A.in terms of     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. in case of     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. in favor of   `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. in respect of `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. measures     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. determines     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. equals     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. modifies`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. in essence      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. in contrast    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. in turn     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. in part`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. complicated       </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. conservative       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. variable       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. straightforward`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. so         </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.while        `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. since       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.unless`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. shape     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. spirit     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. balance    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. taste`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. restart   </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. qualify      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. retire    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. stay`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. strange     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. changeable    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.  normal      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. constant`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. option    </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. reason     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. opportunity       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. tendency`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. employed      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. pictured     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. imitated       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. monitored`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. compared   </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.combined     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. settled    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.associated`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A.Even </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.Still `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. Yet  `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. Only`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A.despised     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.corrected    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.ignored     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. grounded`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. discussions    </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. businesses      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.  policies     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.studies`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A.for     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. against      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. with      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. without`}</Text>
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
