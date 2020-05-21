import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu19 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[a blessing][定位]根据their loss查找到首段末句。解析：根据题干eventually和considered分别是原文该句中的ultimately和saw... as的同义转换，原文中的the people指的是上句中说的在自然灾害中失去财产的人，和题干的主语相同，所以原文中as后的a blessing即为本题答案。',
                content3: '2.[simplified][定位]根据her husband和their lives查找到第2段末句。解析：原文该句中讲到一旦那些东西都不复存在，她和她的丈夫都意识到他们曾经的生活被那些东西复杂化了。反过来也就是说，那些东西被火烧毁之后，他们的生活变得简单了，因此本题答案为complicated的反义词simplified。',
                content5: '3.[It narrowly escaped the firestorm.][定位]根据Gibbs and I did have a close call...查找到第4段首句。解析：第4段首句后的内容讲到作者所在社区经历了一场火灾，由a close call可知作者侥幸地脱险了，而根据Though we’ve never...可知作者的财产也完好，故推知作者自己的家侥幸地逃脱火灾的洗劫。因此本题答案为It narrowly escaped the firestorm。',
                content7: '4.[different][定位]根据getting rid of possessions查找到第6段首句。解析：题干中的vastly是对原文该句中tremendous的同义转换，题干与第6段首句内容相同，原文讲到抛弃财产和因为在自然灾害面前无能为力而失去财产之间有很大的不同，空白处需填入形容词，所以要把difference转换成其形容词形式different。',
                content9: '5.[Be/Get rid of them.][定位]根据do with unnecessary things查找到倒数第2段。',
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
                            &emsp;&emsp;{`I've heard from and talked to many people who described how Mother Nature simplified their lives for them.They'd lost their home and many or all of their possessions through tires, floods, earthquakes, or some other disaster. Losing everything you own under such circumstances can be distressing, but the people I've heard from all saw their loss. ultimately, as a blessing.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"The fire saved us the agony of deciding what to keep and what to get rid of," one woman wrote. And once all those things were no longer there, she and her husband saw how they had weighed them down and complicated their lives.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"There was to much stuff we never used and that was just taking up space- We vowed when we started over we'd replace only what we needed,and this time we'd do it right. We've kept our promise: we don't have much now, but what we have is exactly what we want."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Though we've never had a catastrophic loss such as that, Gibbs and I did have a close call shortly before we decided to simplify. AI that time we lived in a fire zone. One night a firestorm raged through and destroyed over six hundred homes in our community. That tragedy gave us the opportunity to look objectively atthe goods we'd accumulated.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`We saw that there was so much we could get rid of and not only never miss, but be better off without. Having almost lost it all. we found it much casier to let go of the things we knew we'd never use again.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Obviously, there's a tremendous difference between getting rid of possessions and losing them through a natural disaster without having a say in the matter. And this is not to minimize the tragedy and pain such aloss can generate.`}
                        </Text>

                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But you might think about how you would approach the acquisition process if you had to do all over again. Look around your home and make a list or what you would replace.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Make another fist of things you wouldn't acquire again no matter what, and in fact would be happy to be rid of.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`When you're ready to start unloading some of your stuff, that list will be a good place to start.`}
                        </Text>
                        <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                            阅读自测
                        </Text>
                        <Text style={{ fontSize: 16 * s, marginTop: 5 * s }}>
                            Choose correct answers to the question:
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        l.Many people whose possessions were destroyed in natural disasters eventually considered their loss________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        2.After all their possessions were last in the fire, the woman and her husband felt that their lives were____________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        3.What do we know about the author's house from the sentence "Gibbs and I did have a close call..." (Lines 1-2, Para. 4.)?
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        4.According to the author, getting rid of possessions and losing them through a natural disaster are vastly____________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        5.What does the author suggest people do with unnecessary things?
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