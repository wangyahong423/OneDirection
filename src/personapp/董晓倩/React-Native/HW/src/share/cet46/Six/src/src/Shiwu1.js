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
                content1: '1.E) 空格所在宾语从句主谓宾完整，推测应填入副词。后文提到“依据它们是已经历过的还是没发生的而有所不同”，因此differently“不同地”为答案。备选副词中apparently“显然地”与句意不符，故排除。2.M) 空格位于人称代词所有格后，应填入名词作主语。根据后半句“向你走来还是远离你”可知，此处单词应与波形的运动方式或发出点有关，因此source“来源”符合句意，故为答案。备选名词中implications“暗示”、prospect“前景”、scale“等级”和volunteers“志愿者” 与句意不符，故均排除。.K) 空格在介词as之后，推测应填入动词-ing形式或名词。空格所在句为原因状语从句，并有连接词while表示两种情况的对比，主句的大意是“一个月后要发生的事情在心理上感觉比一个月前发生过的事情距离更近”。空格处单词描述的是those in past，因此应与“距离远”的意思相关。因此receding“(距离上)逐渐远离”为答案。备选-ing形式动词中，advancing意为“前进”，与文意不符，故排除。4.D) 空格位于than前，可知应填入形容词比较级。前文说到，未来的事情与距离消失相关，过去的事情往往倾向于远离，即未来的事情我们会感觉近些，过去的事情我们感觉远些。closer“更近的”符合文意，故为答案。备选形容词中，只有一个比较级，亦可直接选出答案。5.O) 空格位于数字323之后，故应填入复数可数名词。结合句意“研究者邀请了323名____，并把他们分成两组。”可知，volunteers“志愿者”与文意相符，故为答案。在备选名词中，另一个复数形式的名词implications“暗示”与文意不符，故排除;备选词subject也可看作是名词“受试者”，但不是复数形式，故排除。6.L) 空格在不定冠词a与介词of之间，应填入名词。结合句意 “两组都被要求按一至七的描述他们对情人节感觉的距离”可知，on a scale of“按……的等级”与文意相符，故L为答案。备选名词中prospect“前景”和implications“暗示”均不符合句意，故排除。7.G) 空格与前面的主动词had构成定语从句的谓语，推测应填入过去分词。前文提到那些描述未来计划的人感觉时间短，后文应表达的是那些描述已经过去事件者的感觉，因此experienced“经历”符合句意，故为答案。其他备选动词形式不符，可直接排除。8.J) 空格在动词不定式to后，应填入动词原形。前文提到了研究人员要求志愿者们给未来和已经发生事情的远近感觉评1～7的等级，因此这里的意思应是他们还要求参与者为想象中未来和过去事情的远近感觉评等级，故rate“评级”为答案。备选动词中evaluate“评价”意思相近，但不如rate表意准确，故排除。9.H) 空格位于动词has后，且后接for，应填入能与for搭配的名词，因此implications“暗示”为答案。10. N) 空格位于谓语might be后，且前面有more修饰，后接不定式to，推测应填入能与to搭配的形容词原形。结合句意 “他怀疑那些没有这种偏向性的人们，……可能更常——多思或沮丧的侵扰”。be subject to“受……支配，常遭受”符合文意.故N为答案。备选形容词中available不与to搭配，故排除。',
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
                            &emsp;&emsp;{`According to a paper to be published in Psychological Science this has an　interesting psychological effect. A group of researchers, led by Eugene Caruso of the University of Chicago, found that people judge the distance of events 1 , depending on whether they are in the past or future. The paper calls this the "Temporal Doppler Effect". In physics, the Doppler Effect describes the way that waves change frequency depending on whether their 2 is travelling towards or away from you. Mr. Caruso argues that something similar happens with people’s perception of time. Because future events are associated with diminishing distance, while those in the past are thought of as 3 , something happening in one month feels psychologically 4 than something that happened a month ago.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`This idea was tested in a series of experiments. In one, researchers asked 323 5 and divided them into two groups. A week before Valentine’s day, members of the first were asked how they planned to celebrate it. A week after February 14th the second group reported how they had celebrated it. Both groups also had to describe how near the day felt on a 6 of one to seven. Those describing forthcoming plans-were more likely to report it as feeling "a short time from now", while those who had already 7 it tended to cluster at the "a long time from now" end of the scale. To account for the risk that recalling actual events requires different cognitive functions than imagining ones that have not yet happened, they also asked participants to 8 the distance of hypothetical events a month in the past or future. The asymmetry (不对称) remained.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Mr. Caruso speculates that his research has 9 for psychological well-being. He suspects that people who do not show this bias-those who feel the past as being closer-might be more 10 to rumination( 沉思)or depression ,because they are more likely to dwell on past events.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        A) advancing B) apparently C)available D)closer E)differently F)evaluate G)experienced H)implications I)prospect J)rate K)receding L)scale M)source N)subject O)volunteers
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