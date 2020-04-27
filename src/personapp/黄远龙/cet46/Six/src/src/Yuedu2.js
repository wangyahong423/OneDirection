import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Yuedu2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'Of all the animals that God had made, the serpentwas the most cunning. except the fruit of the treein the middle of the Garden of Eden you will be likeGods who know what is good and what is bad Sothey sewed leaves together and made clothes forthemselves. Because I was naked, I hid myself.',
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
                            &emsp;&emsp;{`Christianity began life as a Jewish sect. Far fromattempting to find a new religion, the first Christiansviewed themselves as Jews following the teachings ofthe Jewish Messiah . It was only later, after manynon-Jews converted, that Christianity became areligion distinct from Judaism.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Although Christianity shares much with Judaism,these two faiths differ significantly with respect to such fundamental issues as God’srelationship with humanity. The central motif through which this relationship has beenunderstood in both traditions is that of a covenant or contract. In Hebrew scriptures ( the old Testament) , God offers a special relationship with his chosen people — the Jews through acontract that specifies the terms of this relationship . The details of this arrangement havebeen modified and expanded from time to time, in a series of covenants with Noah, Abraham,and Moses. The most well known of these contracts is God’s agreement with Moses on Mt.Sinai, the Ten Commandments5.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In the Christian understanding of covenant theology, God offers humanity a new contract —the New Testament6— as revealed in the person and teaching of Jesus. Unlike previouscovenants, the new covenant refers to the eternal fate of individuals rather than to theworldly fate of the nation of Israel. Also, rather than being offered only to Jews, the newcontract is offered to humanity as a whole . Individual salvation and the question of howthat salvation can be achieved is a dominant theme of traditional Christianity.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Salvation, according to this tradition, is necessary because otherwise the individual iscondemned to spend eternity in hell8 , a place of eternal punishment. Born into sin, thesentence of eternal damnation is the fate of every person unless she or he is saved from thisfate by being“ born again ”through faith in Jesus Christ. All other doctrines are built around awarning of condemnation and a redeeming message of redemption. As the core doctrine, itwould be natural that arguments over soteriology ( one’s theory of redemption) would lead toreligions schisms. Disagreement over competing notions of salvation led to the split betweenCatholicism and Protestantism.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Given the stark contrast between heaven and hell as eternal abodes of the soul, seriousthinkers have had to grapple with the question —What happens to people who, while notsaints, nevertheless are generally good people who have never committed any major sins intheir lives? Reflection on this problem led to the development of purgatory, an intermediaterealm between heaven and hell. In purgatory, souls are tortured for their sins, but areeventually released and allowed to enter heaven.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        Choose correct answers to the question:
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　Tra nslate Chinese in to English, to lea rn more a bout th e or igina l sin: God created theheavens, earth and all kinds of animals, including two men —Adam and Eve. They could eat fromany tree, except one, in the Garden of Eden. _____________( 在上帝创造的所有动物之中, 毒蛇是最狡诈的。)“Did God really tell you not to eat from any of the trees in the garden?”The serpentasked Eve .“We may eat the fruit of any tree _____________( 除伊甸园中间那棵树上的果实之外) .God had even said,‘You shall not eat it or even touch it, otherwise you die. ’”But the serpenttold Eve ,“Of course you will not die! God knows well that the moment you eat of it your eyeswill be opened and _____________( 你们就会像上帝一样区分出善恶) . ”Eve saw the tree was goodfor good, pleasing to the eyes and desirable for gaining wisdom. So she took some of its fruitand ate it. Then she also gave some to her husband who was with her, and he ate it, too. Then,the eyes of both of them were opened, and they realized they were naked._____________( 于是他们就把树叶缝在一起, 制成衣服。) When God came, they hid themselves among the trees of thegarden.“Where are you?”the God asked.“ I heard you in the garden; but I am afraid. _____________( 因为我没有穿衣 服, 所以我躲了起来。) ”answered Adam. It was just then Godlearnt that they had eaten the fruit of the tree in the middle . God was very angry and banishedthem from the Garden of Eden.
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