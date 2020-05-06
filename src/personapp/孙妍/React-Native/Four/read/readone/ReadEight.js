import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class ReadEight extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】[A] ',
                content2: '【解析】词义推断题。解答本题的关键首先要理解repulsive前面的it是指上一句的octopus，由On the other hand可知第2句和第3句描述的是人们对章鱼作为食物的两种相反的反应，而与a great delicacy相反的是A，故A为正确答案。',
                content3: '2. 【答案】[B]',
                content4: '【解析】推理判断题。在第2段中查找到作者有一天在阵雨后散步发现蜗牛爬在他那些prize plants上面，所以才突然有了去抓蜗牛的冲动。理解prize在此意为“一流的，珍视的”，便可知作者当时很生气，由此可确定答案为B。',
                content5: '3. 【答案】[C] ',
                content6: '【解析】 事实细节题。本题考査复合句的理解。第2段第1句“No creature...more...than snails”表达的是最高级概念，即：Snails have received most praise and abuse由此可知，蜗牛是最具争议性的食物，因此C就是该句的近义替换。作者没有把蜗牛与章鱼或炸土豆作比较，因此A和D不对;文中提到在朋友的居住地，蜗牛是没人瞧得上的，但没有提到在作者的家乡是否受欢迎，因此B也不对。',
                content7: '4. 【答案】[A]',
                content8: '【解析】主旨大意题。文章第1句话其实是全文的主题句，说明人们对于选择吃什么、不吃什么是没有什么章法的，暗示了人们在饮食方面有大相径庭的喜好，接着用了数个具体例子说明，并着重以蜗牛为例，阐明这种差异。英语习语“One man’s meat is another man’s poison”形象地表达了这一观点。本题最具干扰性的是B，文章在第1段谈到饮食有差异，这涉及到了culture,但作者并没花太多笔墨描述各国不同的文化，因此，culture并非本文的中心。另外，D的表达与文章第1句很相似，但是D说的是人们在美食面前会丧失理智，与第1句的意思其实相差甚远，且并非文章要阐明的主题。',
                content9: '5. 【答案】[B]',
                content10: '【解析】推理判断题。本题考查表语从句的理解。从第1段的最后一句中“most of us have been brought up to eat certain foods”可推断B为不同的人喜好不同食物的最主要原因。A最具干扰性,它也是原因之一，但住在同一个地方的人也会有不同的饮食差异，所以还是因为家庭的原因所造成的。',
                
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
                            &emsp;&emsp;{`People become quite illogical when they try to decide what can be eaten and what cannot be eaten. If you lived in the Mediterranean, for instance, you would consider octopus a great delicacy. You would not be able to understand why some people find it repulsive. On the other hand, your stomach would turn at the idea of frying potatoes in animal fat -- the normally accepted practice in many northern countries. The sad truth is that most of us have been brought up to eat certain foods and we stick to them all our lives.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`No creature has received more praise and abuse than the common garden snail. Cooked in wine, snails are a great luxury in various parts of the world. There are countless people who, ever since their early years, have learned to associate snails with food. My friend, Robert, lives in a country where snails are despised. As his flat is in a large town, he has no garden of his own. For years he has been asking me to collectsnails from my garden and take them to him. The idea never appealed to me very much, but one day, after heavy shower, I happened to be walking in my garden when I noticed a huge number of snails taking a stroll on some of my prize plants. Acting on a sudden impulse, I collected several dozen, put them in a paper bag,and took them to Robert. Robert was delighted to see me and equally pleased with my little gift. I left the bag in the hall and Robert and I went into the living room where we talked for a couple of hours. I had forgotten all about the snails when Robert suddenly said that I must stay to dinner. Snails would, of course, be the main dish. I did not fancy the idea and I reluctantly followed Robert out of the room. To our dismay, we saw that there were snails everywhere: they had escaped from the paper bag and had taken complete possession of the hall! I have never been able to look at a snail since then.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The underlined word “repulsive” in Paragraph 1 most probably means“_____”.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.disgusting
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.pleasant 
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.acceptable 
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.delicious
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.We can infer from Paragraph 3 that when collecting the snails, the author____ 
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.was glad that he could share them with his friends
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.was angry because they might damage his beloved plants
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.was excited about being able to give his friend a surprise
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.was depressed because it was hard to catch them all
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.The author finds that snails _______ .
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.are as delicious as octopus
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.are disliked in his hometown
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.are the most controversial food
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.are as popular as fried potatoes
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.The best title for the passage might be “______”?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.One Man’s Meat is Another Man’s Poison
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Foods and Cultures
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.Snail and Octopus
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.People Are Illogical in Front of Delicacies
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.As indicated in the passage,people love different foods mainly because____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.they live in different places.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.they learn to eat certain foods in their families
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.they have different understanding of delicacy
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.they are too illogical to explain
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