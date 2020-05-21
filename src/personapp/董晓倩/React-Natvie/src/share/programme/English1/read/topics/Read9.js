import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read9 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '答案',
                content2: '1.C　2.D　3.D　4.A　5.C'
            }]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Those who welcomed the railway saw it as more than a rapid and comfortable means of passing. They actually saw it as afactor in world peace. They did not foresee that the railway would be just one more means for the rapid movement of aggressive armies. None of them foresaw that the more weare together-the more chances there are of war. Any boy or girl who is one of a large family knows that.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Whenever any new invention is put forward, those for it and those against it can always find medical men to approve or condemn. The anti-railway group produced doctors who said that tunnels would be most dangerous to public health: they would produce colds, catarrhs (粘膜炎) and consumptions. The deafening noise and the glare of the engine fire, would have a bad effect on the nerves. Further, being moved through the air at a high speed would do grave injury to delicate lungs. In those with high blood-pressure, the movement of the train might produce apoplexy (中风). The sudden plunging of a train into the darkness of a tunnel, and the equally sudden rush into full daylight, would cause great damage to eyesight. But the pro-railway group was of course able to produce equally famous medical men to say just the opposite. They said that the speed and swing of the train would equalize the circulation, promote digestion, tranquilize the nerves, and ensure good sleep.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The actual rolling-stock was anything but comfortable. If it was a test of endurance to sit for four hours outside a coach in rain, or inside in dirty air, the railway offered little more in the way of comfort. Certainly the first-class carriages had cushioned seats; but the second-class had only narrow bare boards, while the third-class had nothing at all; no seats and no roof; they were just open trucks. So that third-class passengers gained nothing from the few mode except speed. In the matter of comfort, indeed they lost; they did, on the coaches, have a seat, but now they had to stand all the way, which gave opportunities to the comic (滑稽的) press. This kind of thing: A man was seen yesterday buying a third-class ticket for the new London and Birmingham Railway. The state of his mind is being enquired into.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`A writer in the early days of railways wrote feelingly of both second-and third-class carriages. He made the suggestion that the directors of the railways must have sent all over the world to find the hardest possible wood. Of the open third-class trucks he said that they had the peculiar property of meeting the rain from whatever quarter it came. He described them as horizontal shower-baths, from whose searching power there was no escape.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. All boys and girls in large families know that`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] a boy and a girl usually fight when they are together`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] people tend to be together more than they used to be`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] a lot of people being together makes fights likely`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Railway leads the world to peace`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. According to those who welcomed the railway, the railway itself should include all the following except`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the railway enables people travel fast`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the railway brings comfort to people`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the railway makes the world peaceful`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the railway leads the world to war as well.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. According to the anti-railway group, all the followings are true but`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] tunnels are dangerous to public health`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the noise and the glare of the engine fire may affect people's nerves`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the rapid speed through the air does damage to people's lungs`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] to those with high blood-pressure, the rapid speed of the train causes them to die`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. We may safely conclude that`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the author belongs to the anti-railway group`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the author belongs to the for-railway group`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] the author speaks highly of the railway`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] the author may never take train because of its potential dangers`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. What is the tone of this passage?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Practical`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Satirical`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Humorous`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Exaggerated`}
                            </Text>
                        </View>
                    </View>
                </View>
                <Accordion
                    sections={this.state.todo}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: '#37376F',
        borderBottomWidth: 1 * s,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft: '40%',
        marginBottom: 20 * s
    },
    headerText: {
        fontSize: 16,
        color: '#fff'
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})