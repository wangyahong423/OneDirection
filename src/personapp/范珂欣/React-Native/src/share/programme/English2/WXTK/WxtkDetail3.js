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
            answerContent: ['1. A. swept             2. C. while                    3. B. lawless                               4. D. proposal        5. D. equivalent            6. B. into                                  7. A. linked             8. C. create                   9. C. select               10. A. released      11. D. log in                  12. B. In effect   13. A. trusted         14. C. confidence       15. A. on           16. C. protected     17. D. eventually         18. A. skepticism   19. C. vulnerable    20. D. forced'],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 3</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;"The Internet affords anonymity to its users — a boon to privacy and freedom of speech. But that very anonymity is also behind the explosion of cybercrime that has __1__ across the Web.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Can privacy be preserved __2__ bringing a semblance of safety and security to a world that seems increasingly __3__ ? {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Last month, Howard Schmidt, the nation’s cyberczar, offered the Obama government a __4__ to make the Web a safer place — a “voluntary identify” system that would be the high-tech __5__ of a physical key, fingerprint and a photo ID card, all rolled __6__ one. The system might use a smart identity card, or a digital credential __7__ to a specific computer, and would authenticate users at a range of online services.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The idea is to __8__ a federation of private online identify systems. Users could __9__ which system to join, and only registered users whose identities have been authenticated could navigate those systems. The approach contrasts with one that would require an Internet driver’s license __10__ by the government.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Google and Microsoft are among companies that already have sign-on” systems that make it possible for users to __11__ just once but use many different services.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp; __12__ , the approach would create a “walled garden” in  safe “neighborhoods” and bright “streetlights” to establish a sense of __13__ community.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Mr. Schmidt described it as a “voluntary ecosystem” in which individuals and organizations can complete online transactions with __14__ ,trusting the identities of the infrastructure that the transaction runs __15__ ." {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Still, the administration’s plan has __16__ privacy rights activists. Some applaud the approach; others are concerned. It seems clear that such an initiative push toward what would __17__ be a license” mentality.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The plan has also been greeted with __18__ by some experts, who worry that the “voluntary ecosystem” would still leave much of the Internet __19__ . They argue that should be __20__ to register and identify themselves, in drivers must be licensed to drive on public roads.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;&nbsp;&nbsp;&nbsp;A. swept&nbsp;&nbsp;&nbsp;&nbsp;B. skipped&nbsp;&nbsp;&nbsp;&nbsp;C. walked&nbsp;&nbsp;&nbsp;&nbsp;D. ridden{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;&nbsp;&nbsp;&nbsp;A. for&nbsp;&nbsp;&nbsp;&nbsp;B. within&nbsp;&nbsp;&nbsp;&nbsp;C. while&nbsp;&nbsp;&nbsp;&nbsp;D. though{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;&nbsp;&nbsp;A. careless&nbsp;&nbsp;&nbsp;&nbsp;B. lawless&nbsp;&nbsp;&nbsp;&nbsp;C. pointless&nbsp;&nbsp;&nbsp;&nbsp;D. helpless{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;&nbsp;&nbsp;A. reason&nbsp;&nbsp;&nbsp;&nbsp;B. reminder&nbsp;&nbsp;&nbsp;&nbsp;C. compromise&nbsp;&nbsp;&nbsp;&nbsp;D. proposal{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;&nbsp;&nbsp;&nbsp;A. information&nbsp;&nbsp;&nbsp;&nbsp;B. interference&nbsp;&nbsp;&nbsp;&nbsp;C. entertainment&nbsp;&nbsp;&nbsp;&nbsp;D. equivalent{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;&nbsp;&nbsp;&nbsp;A. by&nbsp;&nbsp;&nbsp;&nbsp;B. into&nbsp;&nbsp;&nbsp;&nbsp;C. from&nbsp;&nbsp;&nbsp;&nbsp;D. over{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;7.&nbsp;&nbsp;&nbsp;&nbsp;A. linked&nbsp;&nbsp;&nbsp;&nbsp;B. directed&nbsp;&nbsp;&nbsp;&nbsp;C. chained&nbsp;&nbsp;&nbsp;&nbsp;D. compared{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;&nbsp;&nbsp;&nbsp;A. dismiss&nbsp;&nbsp;&nbsp;&nbsp;B. discover&nbsp;&nbsp;&nbsp;&nbsp;C. create&nbsp;&nbsp;&nbsp;&nbsp;D. improve{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;&nbsp;&nbsp;&nbsp;A.recall&nbsp;&nbsp;&nbsp;&nbsp;B. suggest&nbsp;&nbsp;&nbsp;&nbsp;C. select&nbsp;&nbsp;&nbsp;&nbsp;D. realize{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;&nbsp;&nbsp;&nbsp;A. released&nbsp;&nbsp;&nbsp;&nbsp;B. issued&nbsp;&nbsp;&nbsp;&nbsp;C. distributed&nbsp;&nbsp;&nbsp;&nbsp;D. delivered {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;11.&nbsp;&nbsp;&nbsp;&nbsp;A. carry on&nbsp;&nbsp;&nbsp;&nbsp;B. linger on&nbsp;&nbsp;&nbsp;&nbsp;C. set in&nbsp;&nbsp;&nbsp;&nbsp;D. log in{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;12.&nbsp;&nbsp;&nbsp;&nbsp;A. In vain&nbsp;&nbsp;&nbsp;&nbsp;B. In effect&nbsp;&nbsp;&nbsp;&nbsp;C. In return&nbsp;&nbsp;&nbsp;&nbsp;D. In contrast{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;13.&nbsp;&nbsp;&nbsp;&nbsp;A. trusted&nbsp;&nbsp;&nbsp;&nbsp;B. modernized&nbsp;&nbsp;&nbsp;&nbsp;C. thriving&nbsp;&nbsp;&nbsp;&nbsp;D competing{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;14.&nbsp;&nbsp;&nbsp;&nbsp;A. caution&nbsp;&nbsp;&nbsp;&nbsp;B. delight&nbsp;&nbsp;&nbsp;&nbsp;C. confidence&nbsp;&nbsp;&nbsp;&nbsp;D. patience{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;15.&nbsp;&nbsp;&nbsp;&nbsp;A. on&nbsp;&nbsp;&nbsp;&nbsp;B. after&nbsp;&nbsp;&nbsp;&nbsp;C. beyond&nbsp;&nbsp;&nbsp;&nbsp;D. across{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;16.&nbsp;&nbsp;&nbsp;&nbsp;A. divided&nbsp;&nbsp;&nbsp;&nbsp;B. disappointed&nbsp;&nbsp;&nbsp;&nbsp;C. protected&nbsp;&nbsp;&nbsp;&nbsp;D. united{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;17.&nbsp;&nbsp;&nbsp;&nbsp;A. frequently&nbsp;&nbsp;&nbsp;&nbsp;B. incidentally&nbsp;&nbsp;&nbsp;&nbsp;C. occasionally&nbsp;&nbsp;&nbsp;&nbsp;D. eventually{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;18.&nbsp;&nbsp;&nbsp;&nbsp;A. skepticism&nbsp;&nbsp;&nbsp;&nbsp;B. tolerance&nbsp;&nbsp;&nbsp;&nbsp;C. indifference&nbsp;&nbsp;&nbsp;&nbsp;D. enthusiasm{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;19.&nbsp;&nbsp;&nbsp;&nbsp;A. manageable&nbsp;&nbsp;&nbsp;&nbsp;B. defendable&nbsp;&nbsp;&nbsp;&nbsp;C. vulnerable&nbsp;&nbsp;&nbsp;&nbsp;D. invisible {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;20.&nbsp;&nbsp;&nbsp;&nbsp;A. invited&nbsp;&nbsp;&nbsp;&nbsp;B. appointed&nbsp;&nbsp;&nbsp;&nbsp;C.allowed&nbsp;&nbsp;&nbsp;&nbsp;D. forced</Text>
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
