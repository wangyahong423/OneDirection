import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Shiwu1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '36.J语法判断：分析句子主干可知，空格前后是一个完整的句子，因此，可以判断此处缺少一个分词和后面的high in the hills ofYorkshire一起构成分词短语作后置定语，修饰句子的主语Dent，描述Dent所在的地理位置。语义判断：符合上述语法条件的选项有过去分词estimated、situated以及restrained三个，estimated意为“据估计”，situated意为“位于”，restrained意为“受到限制”。结合语境可知，只有situated符合文意，故选J。37.H语法判断：分析句子主干可知，该空所处的句子是一个由关系代词who引导的定语从句，这里缺少一个副词修饰后面的谓语动词want。语义判断：符合上述语法条件的副词有两个：simply意为“仅仅”，respectively意为“分别地，各自”0此处是要表达“人们仅仅想去最高的火车站乘坐火车”，可知只有simply符合，故选H。38.B语法判断：分析句子主干可知，该空所处的是一个过去分词短语结构，该结构前面是个完整的句子，它在句子中作主语Dent的补足语。这里缺少一个多音节的形容词，因为它前面有系动词be和最高级themost。语义判断：备选的形容词有scenic(风景优美的)、complex(复杂的)、total(整体的)以及major(主要的)四个。结合句意“据说是英国风景最优美的”，可知B是正确答案。39.F语法判断：分析句子主干可知，空格后是一个完整的句子，判断空格处所在短语for the__________ofeconomy在句中作状语。分析此短语可知，这里缺少一个名词。语义判断：备选的名词有source(渠道)、sake(缘故)、consolidation(巩固)和scale(规模)四项，只有sake是正确的，forthe sake of是固定短语，意为“为了，出于……的缘故”。40.0语法判断：分析句子主干可知，该空所处的是一个过去分词短语结构，该结构前后是个完整的句子，它在句子中作主语bridge的后置定语。本空缺少一个名词，作介词on的宾语，并和on一起构成介词短语，且该名词是单数形式，因为前面有不定冠词a来限制。语义判断：结合39题的“语义判断”可知，符合上述语法条件的名词还剩下source、consolidation和scale。on agrand/large scale是一个常用表达，意为“大规模地”，符合此处文意，故选O。41.L语法判断：分析句子结构可知。本空缺少一个形容词来修饰后面的名词lack，因为它与前面的形容词wom.out(修饰后面的名词system)并列关系。语义判断：结合38题的“语义判断”可知，符合上述语法条件的选项还剩下complex、total以及major，此处是要表达“几乎完全缺乏现金”，因此L是正确答案。42.M语法判断：分析句子主干可知，该空所处的是一个介词短语结构，该结构后是个完整的句子，它在句子中作整个句子的状语。本空缺少一个形容词作定语，修饰后面的名词lines。语义判断：结合38题和41题的“语义判断”可知，符合上述语法条件的选项剩下complex和major，这里的意思是“在主干线上”，因此只有major符合文意。43.A语法判断：分析句子主干可知，本空需要一个动词原形，与前面的to一起构成动词不定式，作句子的目的状语。语义判断：符合上述语法条件的动词有maintain(维护)和transcend(超越)，结合句意“有现金去维护这些干线”可知只有maintain符合文意，故选A。44.D语法判断：分析句子结构可知，该空所处的是一个介词短语的结构，该结构作前面动词find的状语。这里需要一个名词，作介词from的宾语，且该名词是单数形式，因为前面有another来限制。语义判断：结合39题和40题的“语义判断”可知，符合上述语法条件的名词还剩下source和consolidation，这里的意思是“从另外的渠道”，因此D项是正确答案。45.E语法判断：本句空格前为句子主语和系动词were，空格后是介词短语at 200，000。判断此处应填入一个动词的分词形式。语义判断：剩余的选项中，符合语法条件的有estimated和restrained两个，此处是要表达“修理费估计需要20万英镑”，可知只有E是正确答案。',
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
                            &emsp;&emsp;{`England’s highest main-line railway station hangs on to life by a thread: deserted and unmanned (无人的 )since it was officially closed in 1970. Dent, 36 high in the hills of Yorkshire, wakes up On six summer weekends each year, when a special charter train unloads walkers, sightseers and people who37want to catch a train from the highest station, on to its platform. But even this limited existence may soon be brought to an end.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Dent station is situated on the Settle to Carlisle railway line, said to be the most38in the country. But no amount of scenic beauty can save the line from British Rail’s cash problems. This year, for the 39 of economy, the express trains which used to pass through Dent station have been put on to another route.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is now an open secret that British Rail sees no future for this railway line. Most of its trains disappeared some time ago. Its bridge, built on a grand 40 a century ago, is falling down. It is not alone. Half-a-dozen railway routes in the north of England are facing a similar threat. The problem is a worn-out system and an almost 41 lack of cash to repair it. Bridges and tunnels are showing their age, the wooden supports for the tracks are rotting and engines and coaches are getting old. On42lines between large cities, the problem is not too bad. These lines still make a profit and cash can be found to43 them. But on the country branch line, the story is different. As track wears out, it is not replaced. Instead speed limits are introduced, making journeys longer than necessary and discouraging customers.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`If a bridge is dangerous, there is often only one thing for British Rail to do: go out and find money from another44. This is exactly what it did a few months ago when a bridge at Bridlington station was threatening to fail down. Repairs were45 at 200,000--just for one bridge--and British Rail was delighted, and rather surprised, when two local councils offered half that amount between them.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        A. maintain B. scenic C. transcend D. source E. estimated F. sake G. complex H.simply I. consolidation J. situated K. respectively L. total M. major N. restrained O. scale
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