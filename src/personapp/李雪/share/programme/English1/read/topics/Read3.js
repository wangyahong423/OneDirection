import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【A】 Physical beauty would be redefined',
                content2: '解析：',
                content3: '这是一道细节题，根据France定位到第一段第一句，主干成分为France has lost an absolute right to define physical beauty。此外第二段第二句They suggest beauty should not be define by looks…故而A physical beauty would be redefined为同义替换，即为正确答案。',
                content4: '2. 答案【D】 doing harm to',
                content5: '解析：',
                content6: '此题为词义题。定位到第二段第二句They suggest beauty should not be defined by looks that end up impinging on health. 根据end up 可以看出beauty should not be defined by looks 和that end up impinging on health为顺承关系，所以“改变人们对美不仅仅是外表的定义”可以结束对健康的危害。故而可以推知doing harm to是正确答案。',
                content7: '3. 答案【B】 New Standards are being set in Denmark',
                content8: '解析：',
                content9: '此题是正误判断题。根据第五段第二句话 In Denmark,…it is trying to set voluntary standards for models and fashion…可知B选项 New standards are being set in Denmark是其同义替换。',
                content10: '4. 答案【C】 showing little concern for health factors',
                content11: '解析：',
                content12: '细节题。一个设计师很可能因为什么原因被CFW拒绝，根据关键词可回到文中定位至倒数第二段，首句说丹麦的时尚界就有关模特的年龄，健康及其他特性的内容达成一致意见，切一项新法案也明确规定，他们已经意识到时尚界对于人们尤其是年轻人的身体健康所带来的影响，并且该对此负责，接着下一句就说，这一法规的执行方式就是拒绝一些设计师，因为可以推断设计师很可能因为不考虑身体健康因素而被CFW拒绝。',
                content13: '5. 答案【D】 A challenge to the Fashion Industry’s Body Ideals',
                content14: '解析：',
                content15: '主旨题。本文从首段就开始阐述法国的观点，即时尚界已经失去了定义女性身体之美的权利，且议会也禁止网站通过宣传过度节食来强调过度消瘦。二段继续说明美丽不能只看外表更不能以牺牲健康为代价。三段说女性不该让他人来评判自己的美丽。以及后面的段落中也一直在不断说明一点，即健康很重要，不能只看外表。所以文章最佳标题应该是D，对时尚界完美身材的质疑。',
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
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content3}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content6}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content9}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content10}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content12}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content13}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content14}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content15}</Text>
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
                            &emsp;&emsp;{`France，which prides itself as the global innovator of fashion, has decided its fashion industry has lost an absolute right to define physical beauty for women. Its lawmakers gave preliminary approval last week to a law that would make it a crime to employ ultra-thin models on runways. The parliament also agreed to ban websites that “incite excessive thinness” by promoting extreme dieting.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Such measures have a couple of uplifting motives. They suggest beauty should not be defined by looks that end up impinging on health. That’s a start. And the ban on ultra-thin models seems to go beyond protecting models from starving themselves to death –as some have done. It tells the fashion industry that it must take responsibility for the signal it sends women, especially teenage girls, about the social tape-measure they must use to determine their individual worth.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The bans, if fully enforced, would suggest to women (and many men) that they should not let others be arbiters of their beauty. And perhaps faintly, they hint that people should look to intangible qualities like character and intellect rather than dieting their way to size zero or wasp-waist physiques.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The French measures, however, rely too much on severe punishment to change a culture that still regards beauty as skin-deep-and bone-showing. Under the law, using a fashion model that does not meet a government-defined index of body mass could result in a $85,000 fine and six months in prison.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The fashion industry knows it has an inherent problem in focusing on material adornment and idealized body types. In Denmark, the United States, and a few other countries, it is trying to set voluntary standards for models and fashion images that rely more on peer pressure for enforcement.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In contrast to France’s actions, Denmark’s fashion industry agreed last month on rules and sanctions regarding the age, health, and other characteristics of models. The newly revised Danish Fashion Ethical Charter clearly states:”We are aware of and take responsibility for the impact the fashion industry has on body ideals, especially on young people”. The charter’s main tool of enforcement is to deny access for designers and modeling agencies to Copenhagen Fashion Week (CFW), which is run by the Danish Fashion Institute. But in general it relies on a name-and -shame method of compliance.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Relying on ethical persuasion rather than law to address the misuse of body ideals may be the best step. Even better would be to help elevate notions of beauty beyond the material standards of a particular industry.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1.  According to the first paragraph，what would happen in France?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] Physical beauty would be redefined.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] New runways would be constructed.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Websites about dieting would thrive.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] The fashion industry would decline.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. The phrase “impinging on”(Line 2，Para.2) is closest in meaning to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] heightening the value of`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] indicating the state of`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] losing faith in`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] doing harm to`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. Which of the following is true of the fashion industry?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] The French measures have already failed.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] New standards are being set in Denmark.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Models are no longer under peer pressure.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Its inherent problems are getting worse.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. A designer is most likely to be rejected by CFW for`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] pursuing perfect physical conditions`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] caring too much about model’s character.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] showing little concern for health factors`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] setting a high age threshold for models.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Which of the following may be the best title of the text?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] A Challenge to the Fashion Industry’s Body Ideals`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] A Dilemma for the Starving models in France`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] Just Another Round of Struggle for Beauty`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] The Great Threats to the Fashion Industry`}
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