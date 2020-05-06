import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu5 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '[A]首段首句中的ultimate experience表明Adidas公司认为“飞火流星”是至今最完美的足球，因此选项A为本题答案。',
                content3: '[B]第3段开头的tongue-twisting表明人们对于制作“飞火流星”的材料及其功能都并不熟悉，因此选项B为本题答案。第3段表明“飞火流星”的材料经过很长时间才研制出来，并非长久以来一直在使用，由此可见。选项A不正确;第4段是Adidas公司的看法，并非作者的看法，因此选项C不符合题意;根据第2段可判断选项D也是Adidas公司的看法。而并非作者的看法。',
                content5: '[C]本题题干中的reluctantly是关键词，指出本题要求查找的是“飞火流星”具有的优点，而这个优点是守门员们不想面对或承认的。选项C与第5段第2句中的gloomily that it would probably result in more spectacular goals 内容相近，符合题意.为本题答案。',
                content7: '[D]本题要求正确理解第8段中的on the light side of FIFA，该句应理解为“飞火流星”重量偏轻，但仍属于要求范围内，选项D是正确的理解，为本题答案。',
                content9: '[B]概括最后两段可以得知，业内人士认为对“飞火流星”的批评和称赞都与赞助公司有关，也就是说，这些评价都出于商业目的，由此可推断选项B为本题答案。选项A中的training在原文根本没有提及;末段开头的The same might go 表明的是Beckham和巴西球员对“飞火流星”做出的评价源于相似的目的，而非表明他们的评价内容相似，程度相同，因此选项C和D都不正确。',
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
                            &emsp;&emsp;{`Depending on which player you ask, the "Fevernova" ball that sports equipment maker Adidas says provides the ultimate soccer experience is Uncontrollable, too big or just simply "stupid". The ball also has its fans, like England's David Beckham. but so far they seem to have been outnumbered by critics.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Adidas says the ball. splashed with gold coloring. is quite simply the best around-25 percent more accurate than the ball used at France 98 thanks to meticulous testing by scientists in Germany.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The tongue-twisting nature of its contents confirms that the World Cup ball has come a long way from the leather-and-laces variety that was common as recently as the 1960s.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The Fevernova's secret. Adidas says. is its radically improved Syntactic foam and unique knitted Raschel fabric.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Given that this is supposed to make the ball faster and provide the freekick specialists like Beckham withmore power, it may not be surprising that goalkeepers like Buffon are unhappy. Spain goalkeeper Pedro Contreras said the bail acts "strangely", while Danish keeper Thomas Sorensen admitted gloomily that it would probably result in more spectacular goals. "As a goalkeeper, you have to live with the fact that the makers create balls for the benefit of strikers." he said before leaving Copenhagen for South Korea.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But outfield players have also weighed in with criticism, many saying the ball is too light and therefore hard to control. "It’s big and it's too light," Japan's Jiji news agency quoted Brazilian forward Edilsonas saying earlier this month. while striker Rivaldo said it soared too far when kicked.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Journalists at the main press centre in Yokohama have been given the chance to try out the Fevernova from the penalty spot, with the aim of hitting special targets in the goal. So far. few have been able to scoremore than five out of ten, although this may have little to do with the quality of the ball.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Putz. admits that the ball is on the light side of FIFA's 420 to 445 gram weight requirement. but says it is no bigger than previous balls.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The controversy over the ball also has an off-pitch dimension. Industry insiders say it may be no coincidence that players from Brazil. sponsored by Adidas rival Nike, have been among the ball's most vociferous critics.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The same might go for the praise dished out for the ball by Beckham. one of the main players used to promote Adidas equipment.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1. How does Adidas describe the "Fevernova”ba11?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) The experience provided by the ball is the best so far.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) The ball is almost impossible to control because of its large size.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) The ball has gone through a long way of development.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) The experience provided by the ball is most welcome by strikers.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. What does the author think about the Syntactic foam and unique Raschel fabric chat are used to make theball?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) The materials have long been used in history.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) The materials do not sound Familiar.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) The materials are new and advanced.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) The materials improve che precision of the ball.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. The goalkeepers tend to admit reluctantly that_____________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) the ball is too strange to control
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) the ball is so light that it goes too fast
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) the ball may make the game more thrilling
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) The ball is light but still meets the weight requirement.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. Which of the following js true according to Putz?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) The ball is lighter than but of the same size as the previous ones.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) The ball should have been heavier to meet the required weight.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) The ball should have been bigger than the previous ones.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) The ball is light but still meets the weight requirement.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5. According to industry insiders. Beckham's comment on the ball_____________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) is justified in his daily training
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) is out of commercial purpose
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) goes as radical as the Brazilian players'
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) is similar to that by the Brazilian players
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