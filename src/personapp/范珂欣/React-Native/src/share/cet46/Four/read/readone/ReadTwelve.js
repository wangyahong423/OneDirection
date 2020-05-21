import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadTwelve extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[B] ',
                content2: '【解析】事实细节题。从文章第1段末句可找到答案。选项A显然与原文意思相反，选项C和D则无原文依据。',
                content3: '2. 【答案】[C]',
                content4: '【解析】推理判断题。第2段第2句表明洛锡安勋爵捐赠了他的房产后，这个计划才启动起来，因此选项C正确，也由此可以否定选项A。根据第2段最后两句可知这个计划是为了保护具有历史价值的房子,而不仅仅是为了保护洛锡安勋爵的房子，因此选项D不对。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】事实细节题。最后一段从preserving开始的部分指出了本题的答案。第3段倒数第2句所说的“no development or disturbances of any kind are permitted”可帮助排除选项A;选项C内容不完整;选项D中的限制词primarily使用不妥,无原文依据。',
                content7: '4. 【答案】[C]',
                content8: '【解析】词义推断题。由invade 所在的句子“for the millions of tourists who each year invade.。”可知这是托管会保护自然美景和历史胜地的原因所在。从而可以推断出invade强调来英国游玩的游客之多，因此选项C为正确答案。',
                content9: '5. 【答案】[A]',
                content10: '【解析】主旨大意题。纵观全文可发现the National Trust和the Trust在文章开头以及文中反复出现,文章是一篇说明文，主要目的是介绍the National Trust的机构性质及其功能，因此选项A正确。文章未讨论托管会的成员问题，因此选项B不正确。最后两段虽然提到英国的自然景色很美，但这并非文章的主题思想，因此选项C不对。本题最具干扰性的是选项D，但是本文并不是一篇议论文，其目的不是让读者认同其中的观点，文章更多的是用说明性的语言来说明托管会的一些做法。',
                
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
                            &emsp;&emsp;{`The National Trust in Britain plays an increasingly important part in the preservation for public enjoyment of the best that is left unspoiled of the British countryside. Although the Trust has received practicaland moral support from the Government, it is not rich Government department. It is a charity which dependsfor its existence on voluntary support from members of the public.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The attention of the public was first drawn to the dangers threatening the great old houses and castles ofBritain by the death of Lord Lothian, who left his great seventeenth-century house to the Trust together with the 4, 500-acre park and estate surrounding it. This gift attracted wide publicity and started the Trust's "Country House Scheme". Under this scheme, with the help of the Government and the general public, the Trust has been able to save and open to the public about one hundred and fifty of these old houses. Lastyear about one and three quarters of a million people paid to visit these historic houses, usually at a very small charge.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In addition to country houses and open spaces the Trust now owns some examples of ancient wind and water mills, nature reserves, five hundred and forty farms and nearly two thousand five hundred cottages or smallvillage houses, as well as some complete villages. In these villages no one is allowed to build, develop or disturb the old village environment in any way and all the houses are maintained in their original sixteenth-century style. Over four hundred thousand acres of coastline, woodland, and hill country are protected by the Trust and no development or disturbance of any kind are permitted. The public has free access to these areas and is only asked to respect the peace, beauty and wildlife.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　So it is that over the past eighty years the Trust has become a big important organization and an essential and respected part of national life, preserving all that is of great natural beauty and of historical significance not only for future generations of Britons but also for the millions of tourists who each year invade Britain in search of a great historical and cultural heritage.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The National Trust is ______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.a rich government department
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.a charity supported mainly by the public
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.a group of areas of great natural beauty
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.an organization supported by public taxes
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.The "Country House Scheme" was started _______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.with the founding of the National Trust
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.as the first project of the National Trust
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.after Lord Lothian's donation
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.to protect Lord Lothian's house
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.Land protected by the National Trust ______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. can be developed and modernized
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. includes naturally and historically valuable sites
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. consists of country houses and nature reserves
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.is primarily for tourists to Britain
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The word "invade" in the last paragraph is used to emphasize that _____________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.the British do not like tourists
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.tourists to Britain are unfriendly
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.tourists come to Britain in large numbers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. Britain is attacked by masses of tourists
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The main purpose of this passage is to ______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.inform the readers about the National Trust
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.promote the National Trust's membership
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.make people aware of the natural beauty of Britain
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.let the general public share the views of the National Trust
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