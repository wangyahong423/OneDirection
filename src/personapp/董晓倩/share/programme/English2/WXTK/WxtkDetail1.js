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
            answerContent: ['1. C. However         2. D. helps            3. A. solely                               4. A. Lowering        5. C. reach            6. A. Depiction                                  7. D. due to              8. C. Immediate   9. B. Reasons               10. D. instead         11. A. track           12. C.account for   13. B. Adjust           14. D. results        15. B. Hungry         16. C. Sign               17. B. Decision    18. D. Disappointing   19. A. Because        20. D. Obsessing'],
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 1</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;Weighing yourself regularly is a wonderful way to stay aware of any significant  weight fluctuations __1__ , when done too often, this habit can sometimes hurt more that it __2__ .{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;As for me, weighing myself every day caused ma to shift my focus from being generally healthy and physically active to focusing __3__ on the scale. That was bad to my overall fitness goals. I had gained weight in the form of muscle mass, but thinking only of __4__ the number on the scale, I altered my training program. That conflicted with how I needed to train to __5__ my goals. {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;I also found that weighing myself daily did not provide an accurate __6__ of the hard work and progress I was making in the gym. It takes about three weeks to a month to notice any significant changes in your weight __7__ altering your training program. The most __8__ changes will be observed in skill level, strength and inches lost.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;For these __9__ I stopped weighing myself every day and switched to a bimonthly weighing schedule __10__ .Since weight loss is not my goal, it is less important for me to __11__ my weight each week. Weighing every other week allows me to observe and __12__ any significant weight changes. That tells me whether I need to __13__ my training program.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;I use my bimonthly weight-in __14__ to get information about my nutrition as well. If my training intensity remains the same, but I'm constantly __15__ and dropping weight, this is a __16__ that I need to increase my daily caloric intake.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;The __17__ to stop weighing myself every day has done wonders for my overall health, fitness and well-being. I’m experiencing increased zeal for working out since I no longer carry the burden of a __18__ morning weigh-in. I've also experienced greater success in achieving my specific fitness goals. __19__ I’m training according to those goals, not the numbers on a scale.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;Rather than __20__ over the scale, turn your focus to how you kook, feel, how you clothes fit and your overall energy level. </Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;&nbsp;&nbsp;&nbsp;A. Therefore&nbsp;&nbsp;&nbsp;&nbsp;B. Otherwise&nbsp;&nbsp;&nbsp;&nbsp;C. However&nbsp;&nbsp;&nbsp;&nbsp;D. Besides{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;&nbsp;&nbsp;&nbsp;A. cares&nbsp;&nbsp;&nbsp;&nbsp;B. warns&nbsp;&nbsp;&nbsp;&nbsp;C. reduces&nbsp;&nbsp;&nbsp;&nbsp;D. helps{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;&nbsp;&nbsp;A. solely&nbsp;&nbsp;&nbsp;&nbsp;B. occasionally&nbsp;&nbsp;&nbsp;&nbsp;C. formally&nbsp;&nbsp;&nbsp;&nbsp;D. initially{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;&nbsp;&nbsp;&nbsp;A. solely&nbsp;&nbsp;&nbsp;&nbsp;B. occasionally&nbsp;&nbsp;&nbsp;&nbsp;C. formally&nbsp;&nbsp;&nbsp;&nbsp;D. initially{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;&nbsp;&nbsp;&nbsp;A. set&nbsp;&nbsp;&nbsp;&nbsp;B. review&nbsp;&nbsp;&nbsp;&nbsp;C. reach&nbsp;&nbsp;&nbsp;&nbsp;D. modify{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;&nbsp;&nbsp;&nbsp;A. depiction&nbsp;&nbsp;&nbsp;&nbsp;B. distribution&nbsp;&nbsp;&nbsp;&nbsp;C. prediction&nbsp;&nbsp;&nbsp;&nbsp;D. definition{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;7.&nbsp;&nbsp;&nbsp;&nbsp;A. regardless of&nbsp;&nbsp;&nbsp;&nbsp;B. aside from&nbsp;&nbsp;&nbsp;&nbsp;C. along with&nbsp;&nbsp;&nbsp;&nbsp;D. due to{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;&nbsp;&nbsp;&nbsp;A. rigid&nbsp;&nbsp;&nbsp;&nbsp;B. precise&nbsp;&nbsp;&nbsp;&nbsp;C. immediate&nbsp;&nbsp;&nbsp;&nbsp;D. orderly{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;&nbsp;&nbsp;&nbsp;A.judgments&nbsp;&nbsp;&nbsp;&nbsp;B. reasons&nbsp;&nbsp;&nbsp;&nbsp;C. methods&nbsp;&nbsp;&nbsp;&nbsp;D. claims{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;&nbsp;&nbsp;&nbsp;A. though&nbsp;&nbsp;&nbsp;&nbsp;B. again&nbsp;&nbsp;&nbsp;&nbsp;C. indeed&nbsp;&nbsp;&nbsp;&nbsp;D. instead {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;11.&nbsp;&nbsp;&nbsp;&nbsp;A. track&nbsp;&nbsp;&nbsp;&nbsp;B. overlook&nbsp;&nbsp;&nbsp;&nbsp;C. conceal&nbsp;&nbsp;&nbsp;&nbsp;D. report{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;12.&nbsp;&nbsp;&nbsp;&nbsp;A. approve of&nbsp;&nbsp;&nbsp;&nbsp;B. hold onto&nbsp;&nbsp;&nbsp;&nbsp;C. account for&nbsp;&nbsp;&nbsp;&nbsp;D. depend on{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;13.&nbsp;&nbsp;&nbsp;&nbsp;A. share&nbsp;&nbsp;&nbsp;&nbsp;B. adjust&nbsp;&nbsp;&nbsp;&nbsp;C. confirm&nbsp;&nbsp;&nbsp;&nbsp;D prepare{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;14.&nbsp;&nbsp;&nbsp;&nbsp;A. features&nbsp;&nbsp;&nbsp;&nbsp;B. rules&nbsp;&nbsp;&nbsp;&nbsp;C. tests&nbsp;&nbsp;&nbsp;&nbsp;D. results{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;15.&nbsp;&nbsp;&nbsp;&nbsp;A. anxious&nbsp;&nbsp;&nbsp;&nbsp;B. hungry&nbsp;&nbsp;&nbsp;&nbsp;C. sick&nbsp;&nbsp;&nbsp;&nbsp;D. bored{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;16.&nbsp;&nbsp;&nbsp;&nbsp;A. secret&nbsp;&nbsp;&nbsp;&nbsp;B. belief&nbsp;&nbsp;&nbsp;&nbsp;C. sign&nbsp;&nbsp;&nbsp;&nbsp;D. principle{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;17.&nbsp;&nbsp;&nbsp;&nbsp;A. necessity&nbsp;&nbsp;&nbsp;&nbsp;B. decision&nbsp;&nbsp;&nbsp;&nbsp;C. wish&nbsp;&nbsp;&nbsp;&nbsp;D. request{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;18.&nbsp;&nbsp;&nbsp;&nbsp;A. surprising&nbsp;&nbsp;&nbsp;&nbsp;B. restricting&nbsp;&nbsp;&nbsp;&nbsp;C. consuming&nbsp;&nbsp;&nbsp;&nbsp;D. disappointing{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;19.&nbsp;&nbsp;&nbsp;&nbsp;A. because&nbsp;&nbsp;&nbsp;&nbsp;B. unless&nbsp;&nbsp;&nbsp;&nbsp;C. until&nbsp;&nbsp;&nbsp;&nbsp;D. if {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;20.&nbsp;&nbsp;&nbsp;&nbsp;A. dominating&nbsp;&nbsp;&nbsp;&nbsp;B. puzzling&nbsp;&nbsp;&nbsp;&nbsp;C.triumphing&nbsp;&nbsp;&nbsp;&nbsp;D. obsessing</Text>
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
