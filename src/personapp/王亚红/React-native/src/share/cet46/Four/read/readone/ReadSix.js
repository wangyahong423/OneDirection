import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadSix extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[C] ',
                content2: '【解析】推理判断题。第2段提到未来有能力的人应该从恐惧中解脱出来，第3段则提到学习计算机则就像是“学开车”一样，只要掌握某套技能即可，故可知有能力的人只需要通过掌握技能学习计算机即可，而不必学习编程，故C正确。',
                content3: '2. 【答案】[D]',
                content4: '【解析】词义理解题。在第2段中，作者强调一般人只需学会使用计算机，而不必学会编程，最后指出这与“汽车修理”和“小提琴制作”一样，可见作者提到“汽车修理”(类似一般人使用计算机)和“小提琴创作”(数似于电 脑专业人员编程)还是为了说明上文的观点，故D正确',
                content5: '3. 【答案】[B] ',
                content6: '【解析】事实细节题。第3段首句提到学习使用计算机越来越容易的原因是计算机编程变得更user-friendly, B中的convenient to users与此相符，故正确。',
                content7: '4. 【答案】[C]',
                content8: '【解析】句意理解题。第4段指出教人学习使用计算机就是教人use this or that program，故C与此相符。',
                content9: '5. 【答案】[B]',
                content10: '【解析】主旨大意题。本文围绕学生应如何学习计算机，阐述计算机能力(computer literacy)的概念;它只是一种技能,故B正确。A、C、D均只是利用文中的片言只语拼凑而成的干扰项，不足以概括文章大意。',
                
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
                            &emsp;&emsp;{`There is no denying that students should learn something about how computers work, just as we expect them at least to understand that the internal-combustion engine(内燃机)has something to do with burning fuel, expanding gases and pistons (活塞)being driven. For people should have some basic idea of how the things that they use do what they do. Further, students might be helped by a course that considers the computer’s impact on society. But that is not what is meant by computer literacy. For computer literacy is not a formof literacy (读写能力);it is a trade skill that should not be taught as a liberal art.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Learning how to use a computer and learning how to program one are two distinct activities. A case might be made that the competent citizens of tomorrow should free themselves from their fear of computers. But this is quite different from saying that all ought to know how to program one. Leave that to people who havechosen programming as a career. While programming can be lots of fun, and while our society needs some people who are experts at it, the same is true of auto repair and violin-making.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Learning how to use a computer is not that difficult, and it gets easier all the time as programs become more “user-friendly”. Let us assume that in the future everyone is going to have to know how to use a computer to be a competent citizen. What does the phrase learning to use a computer mean? It sounds like “learning to drive a car", that is, it sounds as if there is some set of definite skills that, once acquired,enable one to use a computer.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In fact, "learning to use a computer" is much more like “learning to play a game”,but learning the rulesof one game may not help you play a second game, whose rules may not be the same. There is no such a thingas teaching someone how to use a computer. One can only teach people to use this or that program and generally that is easily accomplished.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.To be the competent citizens of tomorrow, people should _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.try to lay a solid foundation in computer science
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.be aware of how the things that they use do what they do
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.learn to use a computer by acquiring a certain set of skills
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.understand that programming a computer is more essential than repairing a car
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.In the second paragraph“auto repair”and“violin-making”are mentioned to show that _______ .
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.programming a computer is as interesting as making a violin
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.our society needs experts in different fields
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.violin making requires as much skill as computer programming
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.people who can use a computer don't necessarily have to know computer programming
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.Learning to use a computer is getting easier all the time because _______ .
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. programs are becoming less complicated
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. programs are designed to be convenient to users
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.programming is becoming easier and easier
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. programs are becoming readily available to computer users
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4. According to the author,the phrase“learning to use a computer”(Lines3,4,Para.3) means learning _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. a set of rules
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.the fundamentals of computer science
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.specific programs
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. general principles of programming
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The author's purpose in writing this passage is _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. to stress the impact of the computer on society
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. to explain the concept of computer literacy
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.to illustrate the requirements for being competent citizens of tomorrow
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.to emphasize that computer programming is an interesting and challenging job
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