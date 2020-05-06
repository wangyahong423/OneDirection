import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class WxtkDetail4 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ['1. D. poor         2. B. deficient             3. A. case                                4. C. hearing         5. B. convinced             6. B. tuning                                   7. A. rising               8. D. interact   9. C. responds                10. A. like          11. C. appointed            12. D.touch   13. B. representing            14. A. legislative         15. C. handed          16. C. deliver                17. A. to     18. C. amusement    19. C. concluding         20. C. interrupted '],
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
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;　A recent poll indicated that half the teenagers in the United States believe that communication between them and their parents is__1__and further that one of the prime causes of this gap is __2__listening behavior. As a(an)__3__ in point，one parent believed that her daughter had a severe__4__problem. She was so __5__that she took her to an audiologist to have her ear tested. The audiologist carefully tested both ears and reported back to the parent：“There‘s nothing wrong with her hearing. She’s just __6__you out.” 　　A leading cause of the __7__divorce rate(more than half of all marriages end in divorce)is the failure of husbands and wives to __8__effectively. They don‘t listen to each other. Neither person__9__to the actual message sent by the other. In __10__fashion，political scientists report that a growing number of people believe that their elected and __11__officials are out of__12__with the constituents they are supposedly __13__. Why?Because they don’t believe that they listen to them. In fact，it seems that sometimes our politicians don‘t even listen to themselves. The following is a true story：At a national__14__conference held in Albuquerque some years ago，then Senator Joseph Montoya was__15__a copy of a press release by a press aide shortly before he got up before the audience to__16__ a speech. When he rose to speak，__17__the horror of the press aide and the__18__of his audience，Montoya began reading the press release，not his speech. He began，“For immediate release. Senator Joseph M. Montoya，Democrat of New Mexico，last night told the National……”Montoya read the entire six-page release，__19__ with the statement that he“was repeatedly __20__by applause.” </Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;
                            1.&nbsp;&nbsp;&nbsp;&nbsp;A. scarce &nbsp;&nbsp;&nbsp;&nbsp;B. little &nbsp;&nbsp;&nbsp;&nbsp;C. rare &nbsp;&nbsp;&nbsp;&nbsp;D. poor{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            2.&nbsp;&nbsp;&nbsp;&nbsp;A. malignant &nbsp;&nbsp;&nbsp;&nbsp;B. deficient &nbsp;&nbsp;&nbsp;&nbsp;C. ineffective &nbsp;&nbsp;&nbsp;&nbsp;D. feeble{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            3.&nbsp;&nbsp;&nbsp;&nbsp;A. case &nbsp;&nbsp;&nbsp;&nbsp;B. example &nbsp;&nbsp;&nbsp;&nbsp;C. lesson &nbsp;&nbsp;&nbsp;&nbsp;D. suggestion{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            4.&nbsp;&nbsp;&nbsp;&nbsp;A. audio&nbsp;&nbsp;&nbsp;&nbsp;B. aural &nbsp;&nbsp;&nbsp;&nbsp;C. hearing &nbsp;&nbsp;&nbsp;&nbsp;D. listening{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            5.&nbsp;&nbsp;&nbsp;&nbsp;A. believing &nbsp;&nbsp;&nbsp;&nbsp;B. convinced &nbsp;&nbsp;&nbsp;&nbsp;C. assured &nbsp;&nbsp;&nbsp;&nbsp;D. doubtless{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            6.&nbsp;&nbsp;&nbsp;&nbsp;A. turning &nbsp;&nbsp;&nbsp;&nbsp;B. tuning &nbsp;&nbsp;&nbsp;&nbsp;C. tucking &nbsp;&nbsp;&nbsp;&nbsp;D. tugging{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            7.&nbsp;&nbsp;&nbsp;&nbsp;A. rising &nbsp;&nbsp;&nbsp;&nbsp;B. arising &nbsp;&nbsp;&nbsp;&nbsp;C. raising &nbsp;&nbsp;&nbsp;&nbsp;D. arousing{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            8.&nbsp;&nbsp;&nbsp;&nbsp;A. exchange&nbsp;&nbsp;&nbsp;&nbsp;B. interchange&nbsp;&nbsp;&nbsp;&nbsp;C. encounter&nbsp;&nbsp;&nbsp;&nbsp;D. interact{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            9.&nbsp;&nbsp;&nbsp;&nbsp;A.relates &nbsp;&nbsp;&nbsp;&nbsp;B. refers &nbsp;&nbsp;&nbsp;&nbsp;C. responds &nbsp;&nbsp;&nbsp;&nbsp;D. resorts{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            10.&nbsp;&nbsp;&nbsp;&nbsp;A. like &nbsp;&nbsp;&nbsp;&nbsp;B. alike &nbsp;&nbsp;&nbsp;&nbsp;C. likely &nbsp;&nbsp;&nbsp;&nbsp;D. likewise {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            11.&nbsp;&nbsp;&nbsp;&nbsp;A. nominated &nbsp;&nbsp;&nbsp;&nbsp;B. selected &nbsp;&nbsp;&nbsp;&nbsp;C. appointed &nbsp;&nbsp;&nbsp;&nbsp;D. supported{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            12.&nbsp;&nbsp;&nbsp;&nbsp;A. connection &nbsp;&nbsp;&nbsp;&nbsp;B. reach &nbsp;&nbsp;&nbsp;&nbsp;C. association &nbsp;&nbsp;&nbsp;&nbsp;D. touch{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            13.&nbsp;&nbsp;&nbsp;&nbsp;A. leading &nbsp;&nbsp;&nbsp;&nbsp;B. representing &nbsp;&nbsp;&nbsp;&nbsp;C. delegating &nbsp;&nbsp;&nbsp;&nbsp;D supporting{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            14.&nbsp;&nbsp;&nbsp;&nbsp;A. legislative &nbsp;&nbsp;&nbsp;&nbsp;B. legitimate &nbsp;&nbsp;&nbsp;&nbsp;C. legalized &nbsp;&nbsp;&nbsp;&nbsp;D. liberal{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            15.&nbsp;&nbsp;&nbsp;&nbsp;A. distributed &nbsp;&nbsp;&nbsp;&nbsp;B. awarded &nbsp;&nbsp;&nbsp;&nbsp;C. handed &nbsp;&nbsp;&nbsp;&nbsp;D. submitted{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            16.&nbsp;&nbsp;&nbsp;&nbsp;A. present &nbsp;&nbsp;&nbsp;&nbsp;B. publish &nbsp;&nbsp;&nbsp;&nbsp;C. deliver &nbsp;&nbsp;&nbsp;&nbsp;D. pursue{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            17.&nbsp;&nbsp;&nbsp;&nbsp;A. to &nbsp;&nbsp;&nbsp;&nbsp;B. with &nbsp;&nbsp;&nbsp;&nbsp;C. for &nbsp;&nbsp;&nbsp;&nbsp;D. on{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            18.&nbsp;&nbsp;&nbsp;&nbsp;A. joy &nbsp;&nbsp;&nbsp;&nbsp;B. enjoyment &nbsp;&nbsp;&nbsp;&nbsp;C. amusement &nbsp;&nbsp;&nbsp;&nbsp;D. delight{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            19.&nbsp;&nbsp;&nbsp;&nbsp;A. conclude &nbsp;&nbsp;&nbsp;&nbsp;B. to conclude&nbsp;&nbsp;&nbsp;&nbsp;C. concluding &nbsp;&nbsp;&nbsp;&nbsp;D. concluded {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;
                            20.&nbsp;&nbsp;&nbsp;&nbsp;A. disrupted &nbsp;&nbsp;&nbsp;&nbsp;B. interfered &nbsp;&nbsp;&nbsp;&nbsp;C.interrupted &nbsp;&nbsp;&nbsp;&nbsp;D. stopped</Text>
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
