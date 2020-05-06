import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadFourteen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[C] ',
                content2: '【解析】事实细节题。原文第4段,特别是第4段的最后一句表明c为正确选项。本题稍具干扰性的是D，该选项中的live一词在第4段第2句末尾也有出现，但事实上D与该句的意思不相同。',
                content3: '2. 【答案】[A]',
                content4: '【解析】事实细节题。本题考查对比处。第5段第1句表明下一句就是演讲和写作的相似之处，而A就是对该句的同义替换。其他选项并未按照题目的要求对比演讲与写作，只是说明了写作必须做的，因此都不正确。',
                content5: '3. 【答案】[A] ',
                content6: '【解析】推理判断题。本题考查对比处。结尾段对比了演讲和写作的不同之处，第1、2句和第3、4句形成了内在的对比关系，由此可推断写作比演讲更需要经验和努力，因此可确定A正确，而C不正确。虽然在这一段可找到effort和naturally等词，但原文并没有从是否要付出同样多的努力(B)或是否自然(D)等方面对比演讲与写作，因此B和D也不正确。',
                content7: '4. 【答案】[D]',
                content8: '【解析】推理判断题。根据最后一句中的“在纸上说话”,可推断作者认为写作如在纸上作演讲一样，因此D正确。A中的Few students与事实不符;B中的speak with a script在文中未有提及;C中的separated by a barrier错误。',
                content9: '5. 【答案】[D]',
                content10: '【解析】主旨大意题。文章的开头句就是全文的主题句，作者在前四段说明如何演讲，从第5段开始，作者转向说明如何写作,文章的结尾句对开头句做出了呼应。作者之所以将演讲和写作过程做比较是为了让自己的观点更容易、更生动地被读者明白和接受，因此本文的中心内容是围绕写作，而不是演讲。其余选项虽然文中都有提及，但只是各个具体的侧面内容，不能概括全文大意。',
                
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
                            &emsp;&emsp;{`　Learning how to write is like taking a course in public speaking. I'd ask whether anyone in class had evertaken such a course. Always a few hands would go up.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"What did you learn in that course?" I'd ask.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`"Well, the main thing was learning how to face an audience: not to be inhibited (拘谨)... not to be nervous. "`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Exactly, when you take a course in public speaking nowadays, you don't hear much about grammar and vocabulary. Instead. you're taught how not to be afraid or embarrassed, how to speak without a prepared script. how to read out to the live audience before you. Public speaking is a matter of overcoming your long-standing nervous inhibitions.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The same is true of writing. The point of the whole thing is to overcome your nervous inhibitions, to break through the invisible barrier that separates you from the person who’ll read what you wrote. You must learn to sit in front of your typewriter of dictating machine and read out to the person at the other end of the line.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Of course, in public speaking with the audience right in front of you, the problem is easier. You can lookat them and talk to them directly. In writing, you 're alone. It needs an effort of your experience or imagination to take hold of that other person and talk to him or her. But that effort is necessary or at least it' s necessary until you've reached the point when you quite naturally and unconsciously "talk on paper".`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The main task of a public speech course is to __________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.teach grammar and vocabulary
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. teach how to write a script
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.teach how to overcome nervousness
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.teach live spoken-language expressions
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.Learning how to write is similar to learning how to speak in public in that writer should _____.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.overcome his or her nervousness in the first place
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.take hold of a reader and talk to him or her before writing
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.learn to use a typewriter or dictating machine
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. talk to himself on paper
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.what does the author compare writing and public speaking?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Writhing needs more experience and imagination than public speaking
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Both writing and public speaking require great effort
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Writhing is just as imagination as public speaking
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Writhing is not as natural as public speaking
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.Which of the following statements is TRUE according to the passage?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Few students feel the need to learn public speaking
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Training is necessary before you can speak with a script
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.In public speaking, the audience are more nervous than the speaker
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Writing is just like making a public speech on paper
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.This selection is mainly about ___________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.the effort involved in writing
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.the similarities between writing and public speaking
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.learning how to make a public speech
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.learning how to talk on paper
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