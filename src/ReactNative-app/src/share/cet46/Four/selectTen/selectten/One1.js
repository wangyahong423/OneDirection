import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class One1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】气候变化已公布了其最新的受害者：鯱螺(学名Limacina helicina)，一种捕食性浮游海螺，被(36)普遍称为海蝴蝶分类组中的一员(“海蝴蝶”之名(37)来源于微小生物用来游走的翼状叶瓣)。在 (38)最近《皇家学会学报B》刊载的一项研究报告中，来自美国国家海洋和大气管理局(NOAA)及俄勒冈州立大学的科学家们指出：太平洋的PH正在不断下降一换句话说，海水的酸化正在溶解鯱螺的薄壳。',
                
                content3: '2. 【答案】研究人员收集了太平洋沿岸(从华盛顿到南加州之间)13个地点的海蝴蝶(39)样本，并用扫描电子显微镜对其一一进行深入检查。来自海岸的个体样本中有一半以上(53%)的贝壳都(40)呈现出“严重溶解”的迹象，而在来自(41)海面上的个体样本中仅有24%的贝壳受到溶解破坏。该研究的(42)首席研究员，来自NOAA的Nina Bednarsek指出那些受到影响的鯱螺的贝壳都拥有“菜花”状或者“砂纸”状的纹理',
                
                content5: '3. 【答案】据该研究报道，严重损伤的贝壳数量与海洋表面附近 “欠饱合海水”百分率之间呈现出“强烈的正(43)相关”。研究人员推断出，“自该区域工业化时代以前的海洋条件算起，近海栖息地(由于人为导致的海洋 (44)酸化)引起的贝壳溶解已经翻了一倍，到2050年可能会增至三倍，这真是个(45)糟糕的预言。此外，这对生态系统的更广泛影响并不明确，因为受伤的外壳会让鯱螺更难以抵御感染、保持浮力及逃脱捕食者的猎杀。 ',
              
                
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
                            &emsp;&emsp;{`Climate change has claimed its latest victim：Limacina helicina，a planktonic，predatory(捕食的)sea snail that’s a member of the taxonomic group more(36)__________ known as sea butterflies.(The name is(37)__________ from the wing-like lobes(叶瓣)the tiny creatures use to get around.)In a study(38)__________ published in joumal Proceedings of the Royal Society B，a group of scientists from the National Oceanic and Atmospheric Administration (NOAA)and Oregon State University have fQund that the Pacific Ocean’s decreasing pH—its acidifying(酸化)，in other words-is dissolving L.helicina’s thin shells.The researchers collected sea butterfly(39)__________ from 13 sites along the Pacific coast(between Washington and southern CaliforniA.，going over each with a scanning electron microscope.More than half of the shells(53%)from onshore individuals(40)__________ signs of“severe dissolution damage，”while 24%of(41)__________ individuals suffered dissolution damage.The study’s(42)__________investigator,Dr.NinaBednarsek of NOAA，described the affected L.helicina shells as having a texture not unlike“cauliflower”or“sandpaper.”According to the paper，there was a“strong positive(43)__________ ”between the proportion of sea butterflies with severe shell dissolution damage and“the percentage of　undersaturated(未达到饱和的)water”near the ocean’s surface.The researchers conclude“shell dissolution owing to(human.caused ocean(44)_________has doubled in near shore habitats since pre.industrial conditions across this region and is on track to triple by 2050，”a truly(45)__________ prediction.Moreover,the broader implications for ecosystem are unclear,as damaged shells make it harder for L.helicina to fight infections，stay buoyant，and protect themselves from predators.`}
                        </Text> 
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 16 * s,marginLeft:20*s }}>
                            &emsp;&emsp;{`A.showed

　　B.recently

　　C.protected

　　D.commonly

　　E.derived

　　F.samples

　　G.offshore

　　H.principal`}
                        </Text> 
                        <Text style={{ fontSize: 16 * s ,marginLeft:50*s}}>
                            &emsp;&emsp;{`I.noticed

　　J.correlation

　　K.encouraging

　　L.seaward

　　M.acidification

　　N.grim

　　O.pollution`}
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