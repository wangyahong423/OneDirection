import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu8 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[Negative./Disapproving.][定位]根据a its most commonplace查找到首段第2句。解析：首段第2句提到，对于习俗，我们通常的看法是，那只是一种最平常的行为方式而已。下一句用As a matter of fact转折，表示“事实上却是另外一种情况”，由此可见，作者对人们关于习俗的那种通常的看法是不赞成的、否定的，因此本题答案为Negative./Disapproving.',
                content3: '2.[most/first-rate important][定位]根据the great varieties查找到首段末句。解析：首段末句表明作者认为最重要的事实是风俗也可能有多种表现方式。也就是说，风俗的多种表现方式被作者当成问题最重要的一个方面，由于题目空白处后面是名词aspect，所以应把原文中的first-rate importance换成其形容词形式，故本题答案为most/first-rate important。',
                content5: '3.[very little][定位]根据John Dewey和cultural tradition查找到第2段第4句。解析：本题关键要弄懂John Dewey的话，他用了一个关于幼儿学母语的比喻来说明一个人对传统习俗的反作用。John Dewey认为“一个人咿呀学语时所创造出来并被自己家人接受的词汇肯定比他母语的所有词汇少得多”，也就是说，我们对传统习俗所施加的影响是极其微小的，所以空白处应填人very little。',
                content7: '4.[an exact and matter-of-fact observation][定位]根据regard John Dewey‘s idea查找到第2段第4、5句。解析：第2段第4句提到John Dewey的观点时用了一个比喻，下一句就表明了作者对这个比喻的看法，题目问作者对John Dewey的观点的看法也就等同于问作者对这个比喻的看法，故no more than后的an exact and matter-of-fact observation就是本题答案。',
                content9: '5.[is born][定位]根据experience and behavior查找到第2段倒数第2句。解析：题目与原文该句的内容相同，原文中讲到，从一个人诞生之日起，他所处环境的习俗就制约着他的体验和行为方式。空白处缺少谓语，而根据原文中的from the moment of his birth可知，此题since he后应填is born。',
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
                            &emsp;&emsp;{`Now custom has not been commonly regarded as a subject of any great importance.The inner workings of our own brains we feel to be uniquely worthy of investigation, but custom,we have a way of thinking,is behavior at its most commonplace.As a matter of fact,it is the other way around. Traditional custom, taken the world over,is a mass of detailed behavior more astonishing than what any one person can ever evolve in individual actions.Yet that is a rather trivial aspect of the matter. The fact of firsi-rate importance is the predominant role that custom plays in experience and in belief and the very great varieties it may manifest.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`No man ever looks at the world with pristine(未受外界影响的)eyes.He sees it edited by a definite set of customs and institutions and ways of thinking.Even in his philosophical probings he cannot go behind these stereotypes; his very concepts of the true and the false will still have reference to his particulartraditional customs.John Dewey has said in all seriousness that the part played by custom in shaping the behavior of the individual as over against any way in which he can affect traditional custom, is as the proportion of che total vocabulary of his mother tongue over against those words of his own baby talk that are taken up into the language of his family.When one seriously studies social orders that have had the opportunity to develop independently,the figure (比喻)becomes no more than an exact and matter-of-fact observation.The life history of the individual is first and foremost an adjustment to the patterns and standards traditionally handed down in his community.From the moment of his birth the customs into which he is born shape his experience and behavior.By the time he can talk,he is the little creature of his culture,and by the time he is grown and able to take part in its activities,its habits are his habits,its beliefs his beliefs,its impossibilities his impossibilities.`}
                        </Text>
                        <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                            阅读自测
                        </Text>
                        <Text style={{ fontSize: 16 * s, marginTop: 5 * s }}>
                            1.What is the author's attiude towards custom as behavior at its most commonplace?
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            2.The great varieties of custom are taken by the author as the_________aspect of the issue.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            3.According to John Dewey, we can impose______________influence on our cultural tradition.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            4.The author tends to regard John Dewey's idea as___________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                            5.An individual's experience and behavior are influenced by the customs since he_____________.
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