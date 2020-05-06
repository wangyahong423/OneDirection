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
            answerContent: ['1. B. resolve          2. D. seek                            3. A. hurt                               4. D. expose           5. C. trail                             6. D. deliver                                  7. A. when              8. B. happen                       9. D. such as                  10. A. discover      11. D. food                          12. A.lead to            13. C. inquiry         14. B. self-destructive       15. B. resist         16. B. predict         17. C. choose                  18. D. outcome   19. B. whether        20. A. consequences'],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 2</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Why do people read negative Internet comments and do other things that will obviously be painful? Because humans have an inherent need to __1__ , uncertainty, according to a recent study in Psychological Science. The new research reveals that the need to know is so strong that people will __2__ to satisfy their curiosity even when it is clear the answer will __3__ . {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In a series of four experiments, behavioral scientists at the University of Chicago Booth School of Business and the Wisconsin School of Business tested students' willingness to __4__ themselves to unpleasant stimuli in an effort to satisfy curiosity. For one __5__ , my goals. each participant was shown a pile of pens that the researcher claimed were from a previous experiment. The twist? Half of the pens would __6__ an electric shock when clicked. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twenty-seven students were told which pens were electrified, another twenty-seven were told only that some were electrified. __7__ left alone in the room， the students who did not know which ones would shock them clicked more pens and incurred more shocks than the students who knew what would __8__ . Subsequent experiments reproduced this effect with other stimuli,  __9__ the sound of fingernails on a chalkboard and photographs of disgusting insects.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The drive to __10__ is deeply rooted in humans, much the same as the basic drives for __11__ or shelter, says Christopher Hsee of the University of Chicago, a co-author of the paper. Curiosity is often considered a good instinct—it can __12__ new scientific advances, for instance—but sometimes such __13__ can backfire. The insight that curiosity can drive you to do __14__ things is a profound one.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Unhealthy curiosity is possible to __15__ , however. In a final experiment, participants who were encouraged to __16__ however. In a final experiment, participants who were encouraged to __17__ to see such an image. These results suggest that imagining the __18__ of following through on one’s curiosity ahead of time can help determine __19__ it is worth the endeavor. “Thinking about long-term __20__ is key to reducing the possible negative effects of curiosity.” Hsee says. In other words, don’t read online comments.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;&nbsp;&nbsp;&nbsp;A. protect&nbsp;&nbsp;&nbsp;&nbsp;B. resolve&nbsp;&nbsp;&nbsp;&nbsp;C. discuss&nbsp;&nbsp;&nbsp;&nbsp;D. ignore{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;&nbsp;&nbsp;&nbsp;A. refuse&nbsp;&nbsp;&nbsp;&nbsp;B. wait&nbsp;&nbsp;&nbsp;&nbsp;C. regret&nbsp;&nbsp;&nbsp;&nbsp;D. seek{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;&nbsp;&nbsp;A. hurt&nbsp;&nbsp;&nbsp;&nbsp;B. last&nbsp;&nbsp;&nbsp;&nbsp;C. mislead&nbsp;&nbsp;&nbsp;&nbsp;D. rise{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;&nbsp;&nbsp;A. alert&nbsp;&nbsp;&nbsp;&nbsp;B. tie&nbsp;&nbsp;&nbsp;&nbsp;C. treat&nbsp;&nbsp;&nbsp;&nbsp;D. expose{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;&nbsp;&nbsp;&nbsp;A. message&nbsp;&nbsp;&nbsp;&nbsp;B. review&nbsp;&nbsp;&nbsp;&nbsp;C. trial&nbsp;&nbsp;&nbsp;&nbsp;D. concept{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;&nbsp;&nbsp;&nbsp;A. remove&nbsp;&nbsp;&nbsp;&nbsp;B. weaken&nbsp;&nbsp;&nbsp;&nbsp;C. interrupt&nbsp;&nbsp;&nbsp;&nbsp;D. deliver{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;7.&nbsp;&nbsp;&nbsp;&nbsp;A. When&nbsp;&nbsp;&nbsp;&nbsp;B. If&nbsp;&nbsp;&nbsp;&nbsp;C. Though&nbsp;&nbsp;&nbsp;&nbsp;D. Unless{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;&nbsp;&nbsp;&nbsp;A. continue&nbsp;&nbsp;&nbsp;&nbsp;B. happen&nbsp;&nbsp;&nbsp;&nbsp;C. disappear&nbsp;&nbsp;&nbsp;&nbsp;D. change{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;&nbsp;&nbsp;&nbsp;A. rather than&nbsp;&nbsp;&nbsp;&nbsp;B. regardless of&nbsp;&nbsp;&nbsp;&nbsp;C. such as &nbsp;&nbsp;&nbsp;&nbsp;D. owing to{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;&nbsp;&nbsp;&nbsp;A. discover&nbsp;&nbsp;&nbsp;&nbsp;B. forgive&nbsp;&nbsp;&nbsp;&nbsp;C. forget&nbsp;&nbsp;&nbsp;&nbsp;D. disagree {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;11.&nbsp;&nbsp;&nbsp;&nbsp;A. pay&nbsp;&nbsp;&nbsp;&nbsp;B. marriage&nbsp;&nbsp;&nbsp;&nbsp;C. schooling&nbsp;&nbsp;&nbsp;&nbsp;D. food{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;12.&nbsp;&nbsp;&nbsp;&nbsp;A. lead to&nbsp;&nbsp;&nbsp;&nbsp;B. rest on&nbsp;&nbsp;&nbsp;&nbsp;C. learn from&nbsp;&nbsp;&nbsp;&nbsp;D. begin with{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;13.&nbsp;&nbsp;&nbsp;&nbsp;A. withdrawal&nbsp;&nbsp;&nbsp;&nbsp;B. persistence&nbsp;&nbsp;&nbsp;&nbsp;C. inquiry&nbsp;&nbsp;&nbsp;&nbsp;D diligence{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;14.&nbsp;&nbsp;&nbsp;&nbsp;A. self-reliant&nbsp;&nbsp;&nbsp;&nbsp;B. self-deceptive&nbsp;&nbsp;&nbsp;&nbsp;C. self-evident&nbsp;&nbsp;&nbsp;&nbsp;D. self-destructive{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;15.&nbsp;&nbsp;&nbsp;&nbsp;A. define&nbsp;&nbsp;&nbsp;&nbsp;B. resist&nbsp;&nbsp;&nbsp;&nbsp;C. replace&nbsp;&nbsp;&nbsp;&nbsp;D. trace{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;16.&nbsp;&nbsp;&nbsp;&nbsp;A. overlook&nbsp;&nbsp;&nbsp;&nbsp;B. predict&nbsp;&nbsp;&nbsp;&nbsp;C. design&nbsp;&nbsp;&nbsp;&nbsp;D. conceal{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;17.&nbsp;&nbsp;&nbsp;&nbsp;A. remember&nbsp;&nbsp;&nbsp;&nbsp;B. promise&nbsp;&nbsp;&nbsp;&nbsp;C. choose&nbsp;&nbsp;&nbsp;&nbsp;D. pretend{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;18.&nbsp;&nbsp;&nbsp;&nbsp;A. relief&nbsp;&nbsp;&nbsp;&nbsp;B. plan&nbsp;&nbsp;&nbsp;&nbsp;C. duty&nbsp;&nbsp;&nbsp;&nbsp;D. outcome{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;19.&nbsp;&nbsp;&nbsp;&nbsp;A. why&nbsp;&nbsp;&nbsp;&nbsp;B. whether&nbsp;&nbsp;&nbsp;&nbsp;C. where&nbsp;&nbsp;&nbsp;&nbsp;D. how {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;20.&nbsp;&nbsp;&nbsp;&nbsp;A. consequences&nbsp;&nbsp;&nbsp;&nbsp;B. investments&nbsp;&nbsp;&nbsp;&nbsp;C. strategies&nbsp;&nbsp;&nbsp;&nbsp;D. limitations</Text>
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
