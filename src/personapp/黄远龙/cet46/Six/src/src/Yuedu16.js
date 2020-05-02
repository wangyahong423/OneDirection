import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu16 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[D]根据文章第l段“时尚神话使女性相信穿上高跟鞋会更美丽或气质更优雅”，因此，在四个选项中，只有D与文章所陈述的观点一致;其余三项均不符合。',
                content3: '2.[A]根据文章第2段，高跟鞋有两种积极的作用：一种是极好的草地供氧用具，不用挖土就能在草地上凿出均匀的小洞供草地吸氧;另一种是可击退来犯之敌，高跟鞋轻易就能吓退敌人，由此可知，不论从内容或语气上看，作者旨在对高跟鞋进行嘲讽。故此，在四个选项中，只有A与作者的写作意图相符;其余三项均与文章的意思相悖。',
                content5: '3.[B] 事实细节题。第2段第3句中的malpractice和第4句中的虚拟语气说明，她认为学校没有对她的自杀企图采取足够的防范措施，故选B。选项A最具干扰性，但第3句说明学校关注过她的问题，只是关注不够，因此选项A过于绝对。选项C中的academic instructions和D中的physical disease属于与文章无关的信息。',
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
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content10}</Text>

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
                            &emsp;&emsp;{`In department stores and closets all over the world. they are waiting. Their outward appearance seems rather appealing because they come in a variety of styles, textures. and colors. But they are ultimately the biggest deception that exists in the fashion industry today. What are they? They are high heels—a woman's worst enemy (whether she knows it or not). High heel shoes are the downfall of modem society. Fashion myths have led women to believe that they are more beautiful or sophisticated for wearing heels, but in reality, heels succeed in posing short as well as long term hardships. Women should fight the high heel industryby refusing to use or purchase them in order to save the world from unnecessary physical and psychologicalsuffering.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`For the sake of fairness. it must be noted that there is a positive side to high heels. First. heels are excellent for aerating (使通气) lawns. Anyone who has ever worn heels on grass knows what I am talking about. A simple trip around the yard in a pair of those babies eliminates all need to call for a lawn care specialist. and provides the perfect-sized holes to give any lawn oxygen without all those messy chunks of dirt lying around. Second, heels are quite functional for defense against oncoming enemies. who can easily be scared away By threatening them with a pair of these sharp, deadly fashion accessories.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Regardless of such practical uses for heels, the fact remains that wearing high heels is harmful to one's physical health. Talk to any podiatrist (足病医生), and you will hear that the majority of their business comes from high-heel-wearing women. High heels are known to cause problems such as deformed feetand tom toenails. The ask of severe back problems and twisted or broken ankles is three times higher for a high heelwearer than for a flat shoe wearer. Wearing heels also creates che threat of getting a heel caught in a sidewalk crack or a sewer-grate (阴沟栅) and being thrown to the ground-possibly breaking a nose. back, or neck. And of course, after wearing heels for a day. any woman knows she can look forward to a night of painas she tries to comfort her swollen, aching feel.`}
                        </Text>
                        <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                            阅读自测
                        </Text>
                        <Text style={{ fontSize: 16 * s, marginTop: 5 * s }}>
                            Choose correct answers to the question:
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            1. What makes women blind to the deceptive nature of high heels?
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            A) The multi-functional use of high heels.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            B) Their attempt to show off their status.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            C) The rich variety of high heel styles.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            D) Their wish to improve their appearance.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            2. The author's presentation of the positive side of high heels is meant__________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            A) to be ironic
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            B) to poke fun at women
                        </Text>
                        C) to be fair to the fashion industry
                        <Text style={{ fontSize: 15 * s }}>
                            D) to make his point convincing
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            3. The author uses the expression "those babies" (Line 4. Para. 2) to ref high heels__________.
                        </Text>
                        A) to show their fragile characteristics
                        <Text style={{ fontSize: 15 * s }}>
                            B) co indicate their feminine features
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            C) to show women’s affection for them
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            D) to emphasize their small size
                        </Text>
                        4. The author's chief argument against high heels is that_____________.
                        <Text style={{ fontSize: 15 * s }}>
                            A) they pose a threat to lawns
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            B) they are injurious to women’s health
                        </Text>
                        C) they don’t necessarily make women beautiful
                        <Text style={{ fontSize: 15 * s }}>
                            D) they are ineffective as a weapon of defense
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            5. It can be inferred from the passage that women should_____________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            A) see through the very nature of fashion myths
                        </Text>
                        B) boycott the products of the fashion industry
                        <Text style={{ fontSize: 15 * s }}>
                            C) go co a podiatrist regularly For advice
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            D) avoid following fashion too closely
                        </Text>
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