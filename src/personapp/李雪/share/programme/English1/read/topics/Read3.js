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
                content1: '解析',
                content2: '考察重点：',
                content3: '非谓语动词做后置定语，状语从句，插入语',
                content4: '这个句子结构非常清晰：it strikes one that, for all their diversity of styles,these gardens speak of various other fundamental urges beyond that of decoration and creative expression 是主句，其中 for all their diversity of styles是插入语。时间状语从句yet when one looks at the photoraphs of the gardens created by the homeless,提前至主句之前，其中created by the homeless 是过去分词短语充当后置定语，用来修饰the gardens词汇的识别：句子中的动词looks at对应的宾语是the photographs of the gardens,因此翻译成“观看”。句子中created by the homeless对应的宾语是the gardens,因此翻译成“创建、建立”。句子中的动词speak of对应的宾语是various other fundamental urges，因此翻译成“透露、显示、表明”',
                content5: '参考翻译：',
                content6: '然而当我们观看那些由无家可归的人创建的家园的照片时，它们的那些各种各样的风格，会给人以深深的震撼。这些家园在它的装饰和创造性表示之上，透露出了其他基本的需求。'
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
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                    <Text style={[{ marginTop: 5 * s }, styles.contentText]}>{section.content3}</Text>
                </View>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
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