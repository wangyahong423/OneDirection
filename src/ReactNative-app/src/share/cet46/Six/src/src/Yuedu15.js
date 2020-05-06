import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu15 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[B] 从文章第3句“手语提供了一种新方法，用以探索大脑如何产生和理解语言，并为一个长期以来的科学争端——语言(连同语法)究竟是我们与生俱来的，还是一种我们后天学会的行为——提出了新的解释”可以看出，这是对语言的性质的传统观点的挑战，即B 。A错在learning,文章并不是在讨论语言的学习，而是语言的产生和理解;C为简单原词干扰D;中的an attempt to clarify misunderstanding是对throw new light on an old scientific controversy的曲解，因为controversy不等于misunderstanding。另外，第1段最后一句中的rebel“反叛”一词也与B中的“挑战”一致。',
                content3: '2.[C] 根据第1段最后一句可知，选C。题干中的was stimulated相当于原文中的has roots in。',
                content5: '3.[B] 事实细节题。第2段第3句中的malpractice和第4句中的虚拟语气说明，她认为学校没有对她的自杀企图采取足够的防范措施，故选B。选项A最具干扰性，但第3句说明学校关注过她的问题，只是关注不够，因此选项A过于绝对。选项C中的academic instructions和D中的physical disease属于与文章无关的信息。',
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
                            &emsp;&emsp;{`People have wondered for a long time how their personalities and behaviors arc formed.It's not easy to explain why one person is intelligent and another is not. or why one is cooperative and another is competitive.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Social scientists are, of course, extremely interested in these types of question. They want to explain why we possess certain characteristics and exhibits certain behaviors. There are no clear answers yet, but two distinct schools of thought on thee matter have developed. As one might expect the two approaches are very different from one another. and there is a great deal of debate between proponents of each theory. Thecontroversy is often conveniently referred to as"nature/nurture".`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Those who support the "nature" side of the conflict believe that our personalities and behavior patterns are largely determined by biological and genetic factor. That our environment has little. if anything to do with our abilities. characteristics. and behavior is central to this theory. Taken to an extreme, this theory Maintains that our behavior is predetermined to such a great degree that we are almost completely governed by our instincts.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Proponents of the "nurture" theory, or, as they are often called. behaviorists. claim that our environmentis more important than our biologically based instincts in determining how we will act. Behaviorists see humans as being whose behavior is almost completely shaped by their surroundings. Their view of the human being is quite mechanistic; they maintain that like machines. humans respond to environmental stimuli as the basis of their behavior.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The social and political implications or these two theories are profound. In the United Stares, for example, blacks often score below whites on standardized intelligent test. This leads some "nature" proponents to conclude that blacks are genetically interior to whites. Behaviorists, in contrast. say that the differences in scores are due to the fact that blacks are often deprived of many of the educational and other environmental advantages that white enjoy. and that. as a result. they do not develop the same responses thatwhites do.`}
                        </Text>

                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Neither of these theories can yet fully explain human behavior. In fact, it is quite likely that the key to our behavior lies somewhere between these two extremes. That the controversy will continue for a long time is certain.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. The author is mainly concerned about solving the problem__________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) why one's behaviors differ from others'
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) what makes different stages of intelligence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) how social scientists form different theories
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) what causes the "nature/nurture" controversy
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. The word "proponents" can best be replaced by _____.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) approaches
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) advocates
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) principles
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) characters
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. Which of the following statements may be supported by the "nature" school?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) We are born will certain personalities and behaviors.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) Environment has nothing to do with our personalities.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) Abilities and characteristics are revealed by behaviors.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) Only extreme behaviors are determined by instinct.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. What can we learn about the behaviorists?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) They believe human beings are mechanical.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) They compare our behaviors to the machines.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) They suggest that we react to the environment as the machines do.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) They uphold that the mechanistic theory can be applied on us as well.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. The "nature” theorists believe that the blacks' low scores____________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) are the result of the educational disadvantages
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) are a manifestation of the blacks' poor intelligence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) have nothing to do with their true intelligence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) have nothing to do will factors other than heredity
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