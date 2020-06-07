import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class question1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[B] ',
                content2: '【解析】事实细节题。第1段第1句中的every parent，often等词表明这种做法在父母中是非常普遍的，显然B与之相符。A说法无原文依据，且由原文可看出题干所述现象是很难避免的;C中dangerous—词在原文中本是修饰其他情绪，故C不符;D是过多地让孩子自己一个独处的后果,不是题干所述行为的后果。',
                content3: '2. 【答案】[C]',
                content4: '【解析】推理判断题。第1段第2句说明父母逼得太过分，应避免。最后一句则说明对小孩太放任自流同样不利。由这两点，我们可以做出如下判断：父母对孩子的“严”和“松”之间有一个恰当的“度”。C与之相符。',
                content5: '3. 【答案】[C] ',
                content6: '【解析】事实细节题。文章第2段表明：不同的家长对孩子的管制程度不同;家长对小孩的管制不仅是为了孩子个人的幸福，也反映了父母的需要以及社区的价值观，故C与原文相符。',
                content7: '4. 【答案】[D]',
                content8: '【解析】词义理解题。由precept所在句可猜测precept应与example相对，且与下文的preach意思相近，故D正确。',
                content9: '5. 【答案】[A]',
                content10: '【解析】推理判断题。第3段提到父母应该避免讲一套做一套，结合最后一段可得出结论：关于思想道德教育问题，父母应以身作则，带头遵循，故A正确。',
                
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
                            &emsp;&emsp;{`In bringing up children, every parent watches eagerly the child’s acquisition (学会) of each new skill- the first spoken words, the first independent steps, or the beginning of reading and writing. It is often tempting to hurry the child beyond his natural learning rate, but this can set up dangerous feelings of failure and states of worry in the child might be encouraged to learn to read before he knows the meaning of the words he reads. On the other hand, though, if a child is left alone too much, or without any learning opportunities, he loses his natural enthusiasm for life and his desire to find out new things for himself.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Parents vary greatly in their degree of strictness towards their children. Some may be especially strict in money matters. Others are sever over times of coming home at night or punctuality for meals. In general,the controls imposed represent the needs of the parents and the values of the community as much as the child’s own happiness.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As regard the development of moral standards in the growing child, consistency is very important in parental teaching. To forbid a thing one day and excuse it the next is no foundation for morality(道德). Also, parents should realize that “ example is better than precept ”. If they are not sincere and do not practice what they preach(说教), their children may grow confused and emotionally insecure when they grow old enough to think for themselves, and realize they have been to some extent fooled.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`“A sudden awareness of a marked difference between their parents’ principles and their morals can be a dangerous disappointment.”`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.Eagerly watching the child’s acquisition of new skill ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.can be avoided
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.is universal among parents
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.sets up dangerous states of worry in the child
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.will make him lose interest in learning new things
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.In the process of children’s learning new skills parents ________
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.should encourage them to read before they know the meaning of the words they read
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.should not expect too much of them
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. should achieve a balance between pushing them too hard and leaving them on their own
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.should creative as many learning opportunities as possible
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.The second paragraph mainly tells us that _________
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. parents should be strict with their children
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. parental controls reflect only the needs of the parents and the values of the community.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. parental restrictions vary, and are not always enforced for the benefit of the children alone.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.parental vary in their strictness towards their children according to the situation.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The word “precept” (Line3, Para.3) probably means “_______”
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Idea
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.punishment
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.behavior
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. instruction
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.In moral matters, parents should ________
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.observe the rules themselves
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.be aware of the marked difference between adults and children
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.forbid things which have no foundation in morality
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.consistently ensure the security of their children
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