import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Yuedu4 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'Ⅰ. 1. ancient / antique 2 . wrap / clothe 3.unbelievable / inconceivable 4 . shriek / scream 5.quiet / tranquil / peaceful 6 . giant / huge /tremendous ',
                content2: 'Ⅱ. 1. Her brilliant performance captured theaudience’s imagination. 2. Her first view of the GreatWall filled her with awe. 3. He was summoned to thepalace. 4. The cure for stress lies in learning to relax.',
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
                            &emsp;&emsp;{`Ever since Herodotus2, the ancient Greek historianand traveler, first described Egypt as“the gift of theNile3”, she has been capturing the imagination of allwho visit her.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The awe -inspiring monuments, left by thePharaohs, Greeks and Romans as well as by the earlyChristians and Muslims, attract thousands of visitorsevery year — but the pyramids, temples, tombs, monasteries and mosques are just part of thiscountry’s fascination.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Modern Egypt —where mud-brick villages stand beside Pharaonic ruins surrounded by toweringsteel, stone and glass buildings — is at the cultural crossroads of East and West, ancient andmodern. While TV antennae decorate rooftops everywhere, from the crowded apartmentblocks of Cairo to the mud homes of farming villages and the goatskin tents of the Bedouins4,the fellahin throughout the Nile’s fertile valley still tend their fields with the archaic tools oftheir ancestors.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In the gargantuan5city of Cairo the sound of the muezzin6 summoning the faithful to prayercompetes with the pop music of ghetto blasters7 and the screech of car horns. Andeverywhere there are people : swathed in long flowing robes or western-style clothes, hangingfrom buses, weaving through an obstacle course of animals and exhaust-spewing traffic orspilling from hivelike buildings.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Spectacular edifices aside, the attraction of this country lies in its incredible natural beauty andin the overwhelming hospitality of the Egyptian people .`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Through everything the Nile River flows serene and majestic, the lifeblood of Egypt as it hasbeen since the beginning of history.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Ⅰ. Give the synonyms to the following words:
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. archaic 2 . swathe 3. incredible 4 . screech 5. serene 6 . gargantuan
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　Ⅱ. Translate the sentences into English with the words in parenthe ses :
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　1. 她的精彩表演使观众为之神往。( capture )
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2. 她初见长城时, 敬畏之感油然而生。( awe)
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3. 他被召进宫里。( summon)
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4. 消除紧张的方法在于学会放松。( lie )
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