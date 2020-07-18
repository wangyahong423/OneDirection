import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu18 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[a significant focus][定位]根据comparative media studies查找到第4段。解析：第4段末句讲到Jenkins说游戏是这个项目的一个重要部分，但并不是主要的研究内容。而此句中的the program指的是上句中提到的比较传媒研究领域的一个研究生项目，所以本题答案为a significant focus。',
                content3: '2.[pornography][定位]根据caught和playing at video games查找到第6段最后两句。解析：第6段末句提到，玩视频游戏时要是被别人发现了，你就会觉得问心有愧似的，原因是上一句说的“人们常常把视频游戏看做是与色情文学一样的东西”，因此，本题答案为pornography。',
                content5: '3.[video-game violence][定位]根据try to start a conversation查找到第7段。解析：第7段末句Jenkins写道他们试图发起一场有关性别、有关开拓女孩游戏市场等等的讨论，可是所有媒体仅仅只想讨论视频游戏中的暴力问题。题干中的focus on为原文该句中talk about的同义转换，所以答案为video-game violence。',
                content7: '4.[never get approved][定位]根据题干中的blood-letting和mainstream game title查找到倒数第2段末句。解析：空白处需要填人谓语成分，题干是对原文末句的同义改写，题干中的it指代原文中的such stuff,所以原文该句中would后的never get approved为答案。',
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
                            &emsp;&emsp;{`Sitting in a back room at London's Barbican ans center, which is hosting the Game On Exhibition,Henry Jenkins delivers a line that would have jaws dropping in any gathering of the rich and famous.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"I think games are going to be the most significant art form of the 2lst century," he says.It is, you might think, exactly what would be expected of someone introduced as "a professor of gaming."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But Jenkins is much more than that. He is the director of a graduate program in comparative media studies at Massachusetts Institute of Technology (MIT) in Boston, which also covers film, television and other mass media. "Games are a significant but not the primary focus of the program," he says.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"Our approach has been to integrate games more fully into the study of media, rather than apply them in one specialized field."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The problem is that video games have yet to achieve respectability. They are often seen roughly of equal status with pornography (色情资料)，providing instant contentment for the sort of people no one would invite to a dinner party.Practically everyone plays video games,but you may feel guilty if you are caught at it.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But things did not go exactly to plan. Jenkins wrote:"We were trying to start a conversation about gender,about the opening up of the girls game market, about the place of games in ‘boy culture', and so forth. But all the media wants 10 talk about is video-game violence."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The media madness reached new heights following the Columbine highschool massacre, which looked like something out of a first-person shooter.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`He says: "the question is not whether video games are violent-obviously all story-telling traditions haveincluded violence and aggression-the question is:‘What are games saying about violence?' Medieval epics are full of violence, and there's a lot of blood-letting-but such stuff would never get approved for a mainstream game title."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"The difference in films is that periodically the fighting stops, you bury your head, and you remember whowas lost. That forces you to think about the consequences of violence. And games are starting to introducesomething similar,like mourning the dead. It's not beyond the industry to say something thoughtful aboutviolence."`}
                        </Text>
                        <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                            阅读自测
                        </Text>
                        <Text style={{ fontSize: 16 * s, marginTop: 5 * s }}>
                            Choose correct answers to the question:
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        1.According to Jenkins, games are________________of the graduate program in comparative mediastudies but are not its primary concentrtion.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        2.If you are caught playing at video games, you will feel ashamed, because they are often regarded as something like_____________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        3.Jenkins and his staff try to start a conversation about games from new perspectives, but the media only want to focus on____________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        4.If the stuff that is full of violence and blood-letting was used for a mainstream game title, it would_______________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        5.Jenkins thinks that the difference between films and games is that in films you will be compelled to consider________________.
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