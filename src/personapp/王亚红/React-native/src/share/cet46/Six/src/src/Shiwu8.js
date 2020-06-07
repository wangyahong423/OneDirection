import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Shiwu8 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. J) 此处应填形容词，修饰名词societies。文章第一句就说The typical pre-industrial family...“工业化之前的典型家庭模式......”， 即“extended" family存在于工业化之前的社会，即agricultural society。故J)正确。2. A) 由be hard to do sth.可知，此处应填动词原形。They are immobile“这样的家庭很难流动”，这说明这样的家庭are hard to...，选项中由transplant和transport两个动词原形，前者指的是“迁居，迁移”，后者指的是运输，不难推断前者符合原文意思，故 transplant正确。3. C) 因为这句话的句子结构完整，固此处应填副词。选项中的副词有gradually和continually,原文中...and the so-called "nuclear" family emerged.所谓的“核心家庭”便出现了，emerge的意思是“浮现" ，强调经过一个过程后出现的。由此可以判断，核心家庭从无到有逐渐出现，而不是连续不断地出现，故选择gradually4. O) 该句可拆分理解，即a family unit... of parents and a smell set of children "一个家庭单元......父母和不多的孩子“，由此可以推出这里要填的词是表示”包含，由......组成“的。选项中的including和 consisting均可以表示此意，但由原文中的of可排除including, consist of为固定词组，故O)为正确答案。5. H) 从原文中的more...than可知，此处应填形容词，构成形容词的比较级结构。由第一段最后一句可知the traditional extended family是immobile,那么新型的家庭模式比旧的因该是更有流动性，故应选mobile，说明新型的家庭模式的优点。6. M) 此处应填动词，作这句话的谓语。Super-industrialism“(更发达的)超级工业化”......更具流动性的家庭。可推知空格处应填表示 “需要，需求”的词。requires表示出自一种迫切的需要而提出的要求，很明显选择requires。7. E) 此处应填形容词，用来修饰名词components。文中说明家庭被减缩到最......的成员，即由男人和女人组成，男人和女人是一个家庭最基本的成员。选项中的elemental“基本的，本质的”，而N)primary“主要的，最早的”，原文强调的是男人和女人是一个家庭最basic的组成部分，故E)更符合原文意思。8.l) 此处应填名词。上段说两人家庭的优点，本句中提到rather than childlessness“而不是不要孩子”，说明晚要孩子是解决工作和孩子的折中的办法，故选项中的compromise“妥协，折中”符合文意。而 solution虽然也表示解决办法，但不能表达夫妇们无可奈何的心情，故排除。9.F) 上题中已提到工作和要孩子之间存在矛盾即conflict，根据上下文意思，这个题相对容易。10.I) 这段一直在说一个家庭里男人和女人因为工作和要孩子的事情发生争吵，那么将来要解决这个问题的仍然是家庭中的夫妻两人，故这里应填couples。',
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
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
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
                            &emsp;&emsp;{`The typical pre-industrial family not only had a good many children, but numerous other dependents as well---grandparents, uncles, aunts and cousins. Such "extended" families were suited for survival in slow paced 1 societies. But such families are hard to 2 . They are immobile.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Industrialism demanded masses of workers ready and able to move off the land in pursuit of jobs, and to move again whenever necessary. Thus the extended family 3 shed its excess weight and the so-called "nuclear" family emerged---a stripped-down, portable family unit 4 only of parents and a small set of children. This new style family, far more 5 than the traditional extended family, became the standard model in all the industrial counties.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Super-industrialism, however, the next stage of eco-technological development, 6 even higher mobility. Thus we may expect many among the people of the future to carry the streamlining process, a stepfather by remaining children, cutting the family down to its more 7 components, a man and a woman. Two people, perhaps with matched careers, will prove more efficient at navigating through education and social status, through job changes and geographic relocations, than the ordinarily child-cluttered family.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`A 8 may be the postponement of children, rather than childlessness. Men and women today are often torn in 9 between a commitment to career and a commitment to children. In the future, many 10 will sidestep this problem by deferring the entire task of raising children until after retirement.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        A)transplant B)solution C)gradually D)transport E)elemental F)conflict G)continually H)mobile I)couples J)agricultural K)including L)compromise M)requires N)primary O)consisting
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
        marginLeft:'40%',
        marginBottom:20*s
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