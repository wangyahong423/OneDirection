import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanshi19 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】上周在意大利帕尔马举行的披萨世界冠军比赛中，评委们将世界顶级玛格丽特披萨冠军(36)奖给了澳大利亚厨师约翰尼•迪•弗朗西斯科，约翰尼•迪•弗朗西斯科是墨尔本近郊不伦瑞克省400梯度餐厅的主人。36岁的迪•弗朗西斯科在(37)生度比赛中打败了来自35个国家的600多个对手赢得了传统特色代表披萨奖。　这次的胜利以及随后的宣传使得他在家乡拥有的小餐厅(38)一夜成名。“这是个惊人的反响，”迪•弗朗西斯科对CNN说，“坦白说，.我只是去那不勒斯做了我喜欢做的事情而已。我并没想到会造成这样的(39)轰动。”',
                
                content3: '2. 【答案】迪•弗朗西斯科告诉澳大利亚美食网(Good Food)：“很多人会认为(40)做一份玛格丽特很容易，但是它是最难做的(披萨)之一。”“其他披萨的(41)味道可以很容易地被配料掩盖，所以你不能真正品出面团的味道。而玛格丽特绝不会掩盖任何不对的味道。”　比赛规则对玛格丽特披萨面团上的用料要求(42)很严格：只有去皮番茄、某些类型的马苏里拉奶酪、大蒜、橄榄油、盐和新鲜的紫苏叶才可以用。',
                
                content5: '3. 【答案】　迪•弗朗西斯科说他(43)从12岁起就开始做披萨并曾在意大利那不勒斯备受推崇的真正的披萨饼协会学习做披萨，说到做披萨，他自称是一个(44)传统丰义者。“很荣幸能够成为(真正的披萨饼协会的)一部分，并努力(45)坚持那不勒斯几百年以来一直在用的做披萨的传统方法。” ',
              
                
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
                            &emsp;&emsp;{`Judges at last weekend’s Pizza World Championship held in Parma，Italy,(36)__________the world’s top marghefita pizza title to Australian chef Johnny Di Francesco，owner of the 400 Gradi restaurant in Brunswick，a Melbourne suburb.Di Francesco，36，beat more than 600 competitors from 35 countries to take ,home the Specialita Traditionale Garantita pizza prize in the(37)__________competition.The win and subsequent publicity has made the small restaurant he owns in his hornetown all(38)__________sensation(知名人物).“It’s been all amazing reaction，”Di Francesco tells CNN.“Honestly,I just went to Naples to do what I love.I didn’t think it was going to make such a(39)__________.”“A lot ofpeople think it is easy to(40)__________a margherita but it is one ofthe hardest(pizzas)to make，”Di Francesco told Australian website Good Food.“With a lot of other pizzas it’s easy to mask the(41)__________with toppings(配料)so you don’t really get the flavor out of the dough.With a margherita there is no hiding anything that isn’t right.”Competition rules are(42)__________0n what ingredients can top the dough(面团)on the margherita：only peeled tomatoes，certain types of mozzarella，garlic，olive oil，salt and fresh basil leaves are used.Di Francesco，who says he’s been making pizza(43)__________1 2 years old and studied pizza-making at the highly regarded Associazione Verace Pizza Napoletana in Naples，Italy,calls himself a(44)__________when it comes to making pizza.“It’s an honor to be part of what(Verace Pizza Napoletanaldoes，striving to(45)__________a traditionalway of making pizza the way they’ve done it in Naples for hundreds of years.”`}
                        </Text> 
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 16 * s,marginLeft:20*s }}>
                            &emsp;&emsp;{`A.produce

　　B.flavor

　　C.rewarded

　　D.preserve

　　E.traditionalist

　　F.since

　　G.casual

　　H.awarded`}
                        </Text> 
                        <Text style={{ fontSize: 16 * s ,marginLeft:50*s}}>
                            &emsp;&emsp;{`I.overnight

　　J.annual

　　K.mess

　　L.after

　　M.conservative

　　N.strict

　　O.stir`}
                        </Text> 
                        </View>
                                         
                        
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