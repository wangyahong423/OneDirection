import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadNineteen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[B] ',
                content2: '【解析】事实细节题。根据文章首句转折词yet后面的信息“尽管美国人很为他们的多样性和个性自豪，但是没有什么比制服更让他们喜爱与尊敬的了”结合核心词uniform及同义表达(hold…in high regard即respect),故选B。',
                content3: '2. 【答案】[A]',
                content4: '【解析】推理判断题。根据第2段第2句“人们习惯性地期望穿制服的人有较高的专业素质”，故选A。选项D错在用superior来比较人了，文中用的是superior quality。',
                content5: '3. 【答案】[D] ',
                content6: '【解析】主旨大意题。根据第 2 段首句“they look more professional than civilian clothes”及尾句的反问“What easier way is there…to lose professional identity than to step out of uniform? ”选含有高频词汇 professional的D。',
                content7: '4. 【答案】[C]',
                content8: '【解析】推理判断题。根据第4段首句中的“loss of individuality”进行同义替换,选C。',
                content9: '5. 【答案】[D]',
                content10: '【解析】主旨大意题。根据第2至4段首句的对比,对于文章最好的概括为选项D“制服的优缺点”。',
                
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
                            &emsp;&emsp;{`Americans are pound of their variety and individuality, yet they love and respect few things more than a uniform, whether it is the uniform of an elevator operator or the uniform of a five-star general. Why are uniforms so popular in the United States?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Among the arguments for uniforms, one of the first is that in the eyes of most people they look more professional than civilian (百姓的) clothes. People have become conditioned to expect superior quality from a man who wears a uniform. The television repairman who wears uniform tends to inspire more trust than one who appears in civilian clothes. Faith in the skill of a garage mechanic is increased by a uniform. What easier way is there for a nurse, a policeman, a barber, or a waiter to lose professional identity (身份) thanto step out of uniform?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Uniforms also have many practical benefits. They save on other clothes. They save on laundry bills. They are tax-deductible (可减税的). They are often more comfortable and more durable than civilian clothes.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Primary among the arguments against uniforms is their lack of variety and the consequent loss of individuality experienced by people who must wear them. Though there are many types of uniforms, the wearer of any particular type is generally stuck with it, without change, until retirement. When people look alike, theytend to think, speak, and act similarly, on the job at least.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Uniforms also give rise to some practical problems. Though they are long-lasting, often their initial expense is greater than the cost of civilian clothes. Some uniforms are also expensive to maintain, requiring professional dry cleaning rather than the home laundering possible with many types of civilian clothes.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.It is surprising that Americans who worship variety and individuality ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.still judge a man by his clothes
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.hold the uniform in such high regard
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.enjoy having a professional identity
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. will respect an elevator operator as much as a general in uniform
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.People are accustomed to think that a man in uniform ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. suggests quality work
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.discards his social identity
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.appears to be more practical
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.looks superior to a person in civilian clothes
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.The chief function of a uniform is to ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.provide practical benefits to the wearer
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.make the wearer catch the pubic eye
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.inspire the wearer’s confidence in himself
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.provide the wearer with a professional identity
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.According to the passage, people wearing uniforms ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. are usually helpful
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.have little or no individual freedom
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.tend to lose their individuality
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.enjoy greater popularity
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.The best title for this passage would be ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. Uniforms and Society
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.The Importance of Wearing a Uniform
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. Practical Benefits of Wearing a Uniform
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Advantages and Disadvantages of Uniforms
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