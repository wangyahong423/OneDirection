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
                content1: '1. 【答案】[D] ',
                content2: '【解析】事实细节题。本题考查因果关系。第2段倒数第3句中的“not because of... but because of...”指出了nature就是原因所在，characteristics是nature的近义词，故D正确。',
                content3: '2. 【答案】[A]',
                content4: '【解析】词义理解题。通过go under所在句子中的Even with......可知，该句与上一句形成对比，这两句中的enrollment是相对应的，所以go under应该也与上文的problem相对应，由此可推断，go under就是have problem/ difficulty之义。本题最具干扰性的是C，但文中并无细节具体说明即使入学人数满额学校收人也很少的问题，因此C把problem定义得过细，不如A恰当。',
                content5: '3. 【答案】[B] ',
                content6: '【解析】推理判断题，也是主旨大意题。文章一开头就指出“许多私立髙等学校都处于危险之中”，引起读者的关注，结尾句明确倡议支持公立髙等教育的人们应该同样支持私立髙等教育，由此可见,B是本文的目的。本题最具干扰性的是D，D的说法在最后一段中多次提到，但是作者提出办学多样性是为了说明私立教育的重要性，故D只是本文主题(私立教育)的支持性细节，并非本文的中心话题。',
                content7: '4. 【答案】[D]',
                content8: '【解析】事实细节题。可用排除法找出答案。A可从第1段推断得出;B可在第2段第3句中找到;C可从最后一段中间找到。',
                content9: '5. 【答案】[C]',
                content10: '【解析】推理判断题。可用排除法找出答案，根据原文，第2段第3句可证明A不可行;最后一段第3句证明B不可行;第2段第2句也指出D行不通。本文的目的是为了提高公众对私立教育的关注，由此可见，只有C是拯救私立高校的可行性方法。',
                
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
                            &emsp;&emsp;{`Many private institutions of higher education around the country are in danger. Not all will be saved, andperhaps not all deserve to be saved. There are low-quality schools just as there are low-quality business.We have no obligation to save them simply because they exist.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But many thriving institutions that deserve to continue are threatened. They are doing a fine job educationally, but they are caught in a financial squeeze, with no way to reduce rising costs or increase revenuessignificantly. Raising tuition doesn’t bring in more revenue, for each time tuition goes up, the enrollment goes down, or the amount that must be given away in student aid goes up. Schools are bad businesses, whether public or private, not usually because of mismanagement but because of the nature of the enterprise.They lose money on every customer, and they can go bankrupt either from too few students or too many students. Even a very good college is a very bad business.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is such colleges, thriving but threatened, I worry about. Low enrollment is not their chief problem. Even with full enrollments, they may go under. Efforts to save them, and preferably to keep them private, are a national necessity. There is no basis for arguing that private schools are inherently (固有地)better than public schools. Examples to the contrary abound. Anyone can name state universities and colleges that rank as the finest in the nation and the world. It is now inevitable that public institutions will be dominant, and therefore diversity is a national necessity. Diversity in the way we support schools tends to give us a healthy diversity in the forms of education. In an imperfect society such as ours, uniformity of education throughout the nation could be dangerous. In an imperfect society, diversity is a positive good. Enthusiastic supporters of public higher education know the importance of sustaining private higher education.`}
                        </Text>
                       
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.According to the author's opinion, schools are bad businesses because of _______.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.mismanagement
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. too few students
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.financial squeeze
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.their characteristics
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        2.The author used the phrase “go under" in Para. 3 to mean "_______".
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.get into difficulties
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. have low enrollment
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.have little money
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.bring in more money
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        3.We can reasonably conclude from this passage that the author made an appeal to the public in order to support_____
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.public institution
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B. private schools
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.uniformity of education
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.diversity of education
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        4.Which of the following is NOT mentioned about private schools?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.High-quality private schools deserve to be saved.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.If the tuition of the private schools is raised, the enrollment goes down.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.There are many cases to show that public schools are better than private schools.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Private schools are more profitable than public schools.
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        5.Which of the following ways could possibly save private schools?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A.Raising tuition.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B.Full enrollment.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C.National awareness and support.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D.Reduction of rising costs.
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