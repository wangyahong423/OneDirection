import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadThirteen extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[B] ',
                content2: '【解析】 从文章第3句“手语提供了一种新方法，用以探索大脑如何产生和理解语言，并为一个长期以来的科学争端——语言(连同语法)究竟是我们与生俱来的，还是一种我们后天学会的行为——提出了新的解释”可以看出，这是对语言的性质的传统观点的挑战，即B 。A错在learning,文章并不是在讨论语言的学习，而是语言的产生和理解;C为简单原词干扰D;中的an attempt to clarify misunderstanding是对throw new light on an old scientific controversy的曲解，因为controversy不等于misunderstanding。另外，第1段最后一句中的rebel“反叛”一词也与B中的“挑战”一致。',
                content3: '2. 【答案】[C]',
                content4: '【解析】根据第1段最后一句可知，选C。题干中的was stimulated相当于原文中的has roots in。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】 根据第3段第2—4句以及最后一段第3句，可知B为答案。前者提出猜想(Might deaf people actually have a genuine language?)，后者含有一个同位语 his idea that signed languages are natural languages。',
                content7: '4. 【答案】[D]',
                content8: '【解析】根据最后一段第4句，可知D正确。D中的only exist in the form of speech sounds是对原文中be based on speech的同义表达。',
                content9: '5. 【答案】[D]',
                content10: '【解析】根据文章最后一句，可知D正确。D中的a product of the brain是对原文中brain stuff的同义表达。B中的derived from错误，因为Stokoe认为sign language就是一种natural language。',
                
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
                            &emsp;&emsp;{`Sign has become a scientific hot button. Only in the past 20 years have specialists in language study realized that signed languages are unique—a speech of the hand. They offer a new way to probe how the brain generates and understands language, and throw new light on an old scientific controversy: whether language,complete with grammar, is something that we are born With, or whether it is a learned behavior. The current interest in sign language has roots in the pioneering work of one rebel teacher at Gallaudet University in Washington, D. C., the world’s only liberal arts university for deaf people.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`When Bill Stokoe went to Gallaudet to teach English, the school enrolled him in a course in signing. But Stokoe noticed something odd: among themselves, students signed differently from his classroom teacher.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Stokoe had been taught a sort of gestural code, each movement of the hands representing a word in English.At the time, American Sign Language (ASL) was thought to be no more than a form of pidgin English (混杂英语). But Stokoe believed the “hand talk”his students used looked richer. He wondered: Might deaf people actually: have a genuine language? And could that language be unlike any other on Earth? It was 1955, wheneven deaf people dismissed their signing as“substandard”. Stokoe’s idea was academic heresy (异端邪说).`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is 37 years later. Stokoe—now devoting his time to writing and editing books and journals and to producing video materials on ASL and the deaf culture—is having lunch at a cafe near the Gallaudet campus and explaining how he started a revolution. For decades educators fought his idea that signed languages are natural languages like English, French and Japanese. They assumed language must be based on speech, the modulation (调节) of sound. But sign language is based on the movement of hands, the modulation of space. “What I said,” Stokoe explains, “is that language is not mouth stuff—it’s brain stuff.”`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The study of sign language is thought to be ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A. a new way to look at the learning of language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. a challenge to traditional, views on the nature of language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.an approach: to simplifying the grammatical structure of a language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. an attempt to clarify misunderstanding about the origin of language
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.The present growing interest in sign language was stimulated by _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.a famous scholar in the study of the human brain
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.a leading specialist in the study of liberal arts
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.an English teacher in a university for the deaf
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. some senior experts in American Sign Language
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.According to Stokoe, sign language is ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.a Substandard language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.a genuine language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.an artificial language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.an international language
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.Most educators objected to Stokoe’s idea because they thought ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.sign language was not extensively used even by deaf people
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.sign language was too artificial to be widely accepted
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. a language should be easy to use and understand
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. a language could only exist in the form of speech sounds
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.Stokoe’s argument is based on his belief that ________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.sign language is as efficient as any other language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.sign language is derived from natural language
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C. language is a system of meaningful codes
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D. language is a product of the brain
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