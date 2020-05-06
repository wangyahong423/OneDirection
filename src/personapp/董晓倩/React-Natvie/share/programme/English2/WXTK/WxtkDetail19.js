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
            answerContent: ['1. B. prepared          2. D. rare            3. A. of                                4. C. previously         5. C. Even             6. A. thought                                   7. B. suggests             8. D. question   9. B. scoring                10. C. mean          11. B. disproportionately           12.D.careers   13.A. affirm            14. C. however         15. D. put down         16. D. valuing               17. C. consequence     18. A. linked    19. B. subjected         20. A. paradoxical '],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 19</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;The idea that some groups of people may be more intelligent than others is one of those hypotheses that dare not speak its name. But Gregory Cochran is 1 to say it anyway. He is that 2 bird, a scientist who works independently 3 any institution. He helped popularize the idea that some diseases not 4 thought to have a bacterial cause were actually infections, which aroused much controversy when it was first suggested.

　　5 he, however, might tremble at the 6 of what he is about to do. Together with another two scientists, he is publishing a paper which not only 7 that one group of humanity is more intelligent than the others, but explains the process that has brought this about. The group in 8 are a particular people originated from central Europe. The process is natural selection.

　　This group generally do well in IQ test, 9 12-15 points above the 10 value of 100, and have contributed 11 to the intellectual and cultural life of the West, as the 12 of their elites, including several world-renowned scientists,13 hey also suffer more often than most people from a number of nasty genetic diseases, such as breast cancer. These facts, 14 ave previously been thought unrelated. The former has been 15 social effects, such as a strong tradition of 16 ucation. The latter was seen as a (an) 17 genetic isolation. Dr. Cochran suggests that the intelligence and diseases are intimately18 is argument is that the unusual history of these people has 19 em to unique evolutionary pressures that have resulted in this 20 ate of affairs.</Text>
<View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A.selected           </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. prepared       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. obliged       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. pleased`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. unique      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.particular  `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C.special  `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. rare`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. of       </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. with       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. in         `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. against`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. subsequently       </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.presently      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. previously           `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. lately `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. Only        </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. So        `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Even        `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. Hence`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A.thought      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. sight      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. cost     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. risk `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. advises     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. suggests     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. protests     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. objects`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. progress      </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. fact     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. need      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. question`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. attaining       </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. scoring       `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. reaching       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. calculating`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. normal         </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.common        `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. mean       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  total`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. unconsciously     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. disproportionately    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. indefinitely    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. unaccountably`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. missions         </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. fortunes      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. interests    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. careers`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. affirm     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. witness    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.  observe      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. approve`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. moreover    </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. therefore     `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. however       `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. meanwhile`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. given up     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. got over    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. carried on      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  put down`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. assessing   </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.  supervising      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. administering    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  valuing`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A.development   </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.origin   `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.consequence  `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. instrument`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A.linked     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. integrated    `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. woven    `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.combined`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A.  limited    </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. subjected      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C.  converted     `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D.  directed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A.  paradoxical     </Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.  incompatible      `}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. inevitable      `}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. continuous`}</Text>
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
