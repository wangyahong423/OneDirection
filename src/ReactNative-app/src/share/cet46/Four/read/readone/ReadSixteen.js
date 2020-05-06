import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadSixteen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[A] ',
                content2: '【解析】事实细节题。本题考查对比处。根据第1段中的more likely…than可知选项A正确，选项B可由此排除。选项C和D虽在文中有提到，但作者并无讨论它们是否危及孩子的生命。',
                content3: '2. 【答案】[D]',
                content4: '【解析】主旨大意题。文章第1和第2段提出话题:小孩接触太多暴力。第3段和第4段讨论小孩遇到的严重暴力，如murder, muggings等，为主题服务，因此本段应支持文章开头提出的话题。本段说明的是现实生活中的暴力，而非电视上的，故选项A不对,选项B和C都只是对本段中某个现象的描述。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】推理判断题。本题考査列举处。选项B是对第5段倒数第2句中become less sensitive to the pain and suffering of others的近义替换，因此正确。选项A中的isolated并不等同于文中的fearful，也不是因为害怕世界必然带来的结果。选项C中的only过于绝对，文中只说a way。选项D拼凑了原句中的某些词语，但文中并无此意。',
                content7: '4. 【答案】[B]',
                content8: '【解析】主旨大意题。本文结构可分为四部分：第1段和第2段总起，指出论题;第二部分讨论murder等严重暴力;第三部分即第5段讨论TV violence;第四部分即最后一段讨论学校里的体罚，也就是school violence。因此只有选项B没有在文中讨论。',
                content9: '5. 【答案】[C]',
                content10: '【解析】观点态度题。根据最后一段,特别是最后一句，可以推断作者认为体罚不起作用，并对学生身心产生有害的影响，由此可见，作者不认同体罚，因此选项A和D不正确。选项B中的illegal与文中说法相反，因此也不正确。',
                
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
                            &emsp;&emsp;{`Teenage boys, regardless of race,are more likely to die from gunshot wounds than from all natural causes combined.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　By the time the average American child leaves primary school, he or she will witness 8,000 murders and more than 100,000 acts of violence on television.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Youth are becoming involved in violence at an alarming rate. In fact, the young arrest rate for murder doubled, from 6 arrests per 100,000 youth aged from 10 to 17 to over 12 per 100,000.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The American Psychological Association Commission on Violence and Youth reported on a study of first and second graders in Washington DC:45% said they had witnessed muggings (行凶抢劫),31 % said they had witnessed shootings, and 39% said they had seen dead bodies.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　For the many youth who have not been directly exposed to violence in their own communities, the entertainment media (television, movies, music and video games) provides many opportunities for children to see and hear violent exchanges. Research shows that there are about 5-6 violent acts per hour on prime time and 20-25 violent acts on Saturday morning children’s programming. In its report, the American Psychological Association (APA) reported that viewing violence on television hurts children in many ways. In particular, the APA concludes that children may become less sensitive to the pain and suffering of others,be more fearful of the world around them,be more likely to behave in aggressive or harmful ways toward others, and gradually accept violence as a way to solve problems. The American Academy of Child and Adolescent Psychiatry also cautions that children may imitate the violence they observe on television.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Another form of violence involving youth is physical punishment in the schools. This form of discipline still remains legally supported in 23 nations in America. The Office for Civil Rights in the Department of Education reported that 555，000 students were physically punished in the schools during this school year. Although such punishment has been regarded as an effective method of discipline by those who apply it, the findings are obvious that physical punishment does not work and that children who are victims of physical punishment are subject to potential long-term physical and emotional damage.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.According to the passage, the American teenage boys，lives are most threatened by ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.gun murders
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.natural diseases
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.TV violence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.physical punishment
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.The author tends to use the fourth paragraph to support the idea that _____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.many youth have watched much violence on TV
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.youth violence in Washington D.C.is very serious
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.fights may be the most widely-seen youth violence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.American youth have been exposed to much violence
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.The APA indicates that too much TV violence may change children ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.to become separated from the world
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.to remain indifferent to others’ pain
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.to solve problems only by violence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.to be fearful of aggressive behaviors
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The passage does NOT discus that many youth become victim of ______
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.murders
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.family violence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.TV violence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.school violence
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The author may most probably agree that physical punishment is _________
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. acceptable, though ineffective
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.illegal，though effective
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.harmful, though legal
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. reasonable, though illegal
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