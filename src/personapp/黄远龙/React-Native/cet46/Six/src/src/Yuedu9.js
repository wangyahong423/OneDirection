import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu9 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[C]原文第2段说明曼彻斯特美术馆雇用两位压力管理专家并且展览画作都是为了使人缓解压力，因此选项C为美术馆的目的。曼彻斯特美术馆不是一个研究机构，因此选项A不是他们的目的。从美术馆雇用压力管理专家这一点可以知道，美术馆并非为了展出馆藏作品，因此选项B不正确,从原文可知美术馆方并不单纯把欣赏画作当作一种业余消遣，因此选项D也不正确。',
                content3: '2.[A]第2段第2句中tranquility tour后的定语从句是对该活动的解释，从中可知选项A为本题答案。从本文可知美术馆展出画作目的是帮助在市中心工作的人减轻心理压力，活动的名称也应该与该目的紧密结合，选项B、C和D虽然在文中都有提及。但都不是活动的目的。',
                content5: '3.[B]第3段第2句句末提到的rather than rush around the shops表明Kim Gowland 认为在没有这个活动之前，在城市工作的人在午餐时间通常会逛商店，因此，本题应选B。选项A中的family burden原文没有提及;选项D中的pubs or gyms虽然在文章首句有提及，但并非Kim Gowland指出的;第3段第2句末rush around 的宾语是:shops，并非gallery，因此，选项C是利用gallery和rush around胡乱拼凑的选项，亦错误。',
                content7: '4.[D]第6段末句中的research shows表明油画可以舒缓压力这个观点已经得到科学研究的证实，因此本题应选D。选项A以为油画可以舒缓压力的观点是基于个人主观判断，这与第6段末句中的research shows...相反，因此选项A不正确;原文该句也表明油画真的能舒缓压力，这种影响对于看过油画的人是相同的,选项B与此内容相反，不正确;原文没有提及以后是否会对油画和舒缓压力之间的关系作进一步的研究，因此选项C缺乏原文依据。',
                content9: '5.[C]作者在倒数第2段末句提到达·芬奇的画作目的是说明该段首句主句提及的观点：有些艺术作品确实能吸引几乎每一个人，再结合该段末句的定语从句that could evoke particular responses in the viewer即可确定大多数人对达·芬奇的画作产生特别的反应，因此本题应选C。但并没有说明这种特殊的感觉是什么，因此选项A和D推断过度了;选项B正好与文章该段内容相反，很明显是不正确的。',
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
                            &emsp;&emsp;{`Office workers who would normally step into a pub or gym to cope with the stress of a working day are being invited instead to sit in front of a painting.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Manchester Art Gallery has recruited two of the country's leading experts in stress management to choose pictures that are guaranteed to leave even the most frantic feeling at ease wich the world.They have created the "tranquility tour" which allows city-centre workers to spend their lunch hour taking a soothing tourof what are described as "some of the most relaxing and inspiring paintings ever committed to canvas”. The free tour takes the visitor through several centuries of painting, from the Victorian aesthetic movement.through the PreRaphaelite school, to modern abstract an.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Kim Gowland, a gallery executive. said: "Looking at art is a stress-relieving activity. What we are tryingto do is encourage people who work in the city to spend half an hour of their lunchbreak in the gallery. to chill out rather than rush around the shops."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The five works chosen by Andrew Loukes. the gallery's manager, are: John Roddam Spencer Stanhope’s The Waters of Lethe (1880), Turner's Thomson’s Aeolian Harp (1809), Sir John Everett Millais’s Autumn Leaves (1856), James Durden’s Summer in Cumberland (1925) and Bridget Riley’s Zephyr (1976).`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Mr. Loukes said: "We chose five pictures that suggest restfulness. We also wamed to display the breadth of the collection. We arc particularly strong in early-19th and early-20th-century British art."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Their therapeutic powers have been endorsed by Olga Gregson and Terry Looker from the Department of Biological Sciences at Manchester Metropolitan University. Dr. Gregson said that "research shows that stress levels have reduced and moods changed for the better” when subjects looked at paintings.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"Although art appreciation is very much a matter of personal choice, it is true that some works of art appeal to almost everyone, and that some paintings have qualities that can induce relaxation in most people."Dr. Gregson said. "Great painters such as Leonardo da Vinci were masters of techniques that could evoke particular responses in the viewer."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Dr. Gregson said the gallery represented an "oasis of calm". "You have got this wonderful opportunity to evoke a different kind of psychophysiological response."`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1. What is done by the Manchester Art Gallery is intended to____________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) find out the relation between paintings and stress-easing
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) promote its magnificent collection of British art
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) reduce working people's stress levels by art appreciation
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) provide an alternative of pastime for consumers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. The tour is named “tranquility tour" because__________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) it is expected to play a soothing role
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) it displays paintings through centuries
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) it comprises paintings of various styles
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) it only takes a half hour around lunch time
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. What does Kim Gowland points out about city-center workers?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) They are pressed by family burden as well as their careers.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) They like going shopping during their short lunchbreak.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) They shouldn't rush around the gallery while looking at art.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) Looking at art is much better than going to pubs or gyms.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. According io the author, the painting's impact on relieving stress is__________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) based on personal experiences
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) vaned from people to people
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) in need of further study
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) scientifically proven
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. It is indicated by Dr. Gregson that da Vinci's paintings can____________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) suggest restfulness
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) arouse diverse feelings
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) capture almost everyone
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) ease stress in most people
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