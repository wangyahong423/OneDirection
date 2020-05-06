import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadTwenty extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[B] ',
                content2: '【解析】事实细节题。由第2段第2句中的pride和worry可以判断选项B是对该句的近义替换。选项A原文未提到。选项C曲解了原文第2段第1句的意思，该句中的“Fatherhood is going to have a different meaning”表示对于每个男人来说当上父亲具有不同的意义，而不是就琼斯先生而言。第2段最后一句表明只有部分人不情愿接受责任，因此在D选项men前面加上some才正确。',
                content3: '2. 【答案】[B]',
                content4: '【解析】推理判断题。根据第3段最后两句可以推断选项B正确。选项A与第3段最后一句陈述的相反。最后一段第1句虽有提及向父亲角色的转变很困难,但并未像选项C那样对比。选项D错在incomplete一词,文中并未提及与该词相关的内容。',
                content5: '3. 【答案】[A] ',
                content6: '【解析】推理判断题。本题可用排除法。选项B曲解了最后一段第2、3句对母亲角色的描述。选项C与原文最后一句不符。选项D原文未提及。只有选项A概括了全文关于母亲的论述，而且第2段最后一句也暗示母亲受到的关注更多。',
                content7: '4. 【答案】[C]',
                content8: '【解析】 推理判断题。最后一句提到很多人仍然认为父亲应该负担家计,但从本句的用词如even though和still可以看出作者对这种看法并不认同，由此可以判断只有选项C作者可能不赞成。',
                content9: '5. 【答案】[D]',
                content10: '【解析】主旨大意题。原文第1、2段讲到父亲们对将为人父的不同反应;第3段指出很少有人尝试帮助父亲完成角色的转换;最后一段是一些作家对此做出的不太符合事实的解释，因此，只有选项D能概括文章的写作目的。选项A只是文中第2段中的某个细节;选项B的重点是mother,与本文的论题不符;作者并无批评父亲之意，因此选项C不正确。',
                
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
                            &emsp;&emsp;{`Congratulations, Mr. Jones, it's a girl."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Fatherhood is going to have a different meaning and bring forth a different response from every man who hears these words. Some feel pride when they receive the news, while others worry, wondering whether they will be good fathers. Although there are some men who like children and may have had considerable experiencewith them, others do not particularly care for children and spend little time with them. Many fathers and mothers have been planning and looking forward to children for some time. For other couples, pregnancy wasan accident that both husband and wife have accepted willingly or unwillingly.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Whatever the reaction to the birth of a child, it is obvious that the shift from the role of husband to that of father is a difficult task. Yet, unfortunately, few attempts have been made to educate fathers in this reconciliation (协调) process. Although numerous books have been written about American mothers, only recently has literature focused on the role of fathers.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is argued by some writers that the change to the father's role, although difficult, is not nearly as great as the change the wife must take to the mother's role. The mother's role seems to require a complete transformation in daily routine and highly innovative(创新的) adaptation. On the other hand, the father's role is less demanding and immediate. However, even though we mentioned the fact that growing numbers of women are working outside the home, the father is still thought by many as the breadwinner in the household.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.What can we know about fatherhood from the passage?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.It brings a feeling of excitement to most man
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.It make some man feel proud and others uneasy
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.It has a different meaning for men who have daughters
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.It means a responsibility that men accept unwillingly
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.What does the passage say about the shift from the role of husband to that of father?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Numerous books have been written about it.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Not enough attention has been paid to it.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. The shift is harder for men than for women.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.The shift is a difficult but incomplete one.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.What can we know about mothers from the passage?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Mothers get more attention and recognition from society
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Mothers are innovative and demanding according to some writers
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Mothers generally stay at home to take care of the children
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Mothers should help fathers in their reconciliation process
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.Which of the following will the author most probably disagree with?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. It's as difficult to be a father as it is to be a mother.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.More books should focus on the role of fathers.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.The father is still the breadwinner in the household.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Fathers are as important to children as mothers.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The author's purpose in writing this passage is to
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. explain why there are few books on the role of fathers.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.praise mothers for their great contributions to the home.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.criticize fathers for not taking enough responsibility in bringing up the children.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. complain about the lack of social programs to help fathers in their role shift.
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