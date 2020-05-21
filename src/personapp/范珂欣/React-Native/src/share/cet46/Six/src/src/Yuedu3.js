import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Yuedu3 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'Ⅰ. 1. Australia is as big as Europe , or 25 times the size of Britain and Ireland. 2. Canberra is notonly the capital but also the biggest city of Australia . 3. Motel is very popular foraccommodation in Australia. ',
                content2: 'Ⅱ. 1. Egypt Wellington 2. Australia Athens 3. New Zealand Seoul 4. Canada Cairo 5. Greece Ottawa6. South Korea Canberra',
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
                            &emsp;&emsp;{`An island country, a whole continent, Australia has aremarkably cohesive personality and one which,much to our surprise, is markedly foreign. It is nolonger the infant colony, peopled by Britishconvicts2 and pioneers, but a maturing, perhaps stillsomewhat adolescent individual, ruggedly steering avital new course in life.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Australia is a sprawl of rock and desert, fringed with lush valleys, snow fields, coralspectaculars, storm-stabbed cliffs and rolling beaches, a land rich in minerals, colors, curiousflora 3, 230 species of mammals4 , 700 of birds, 400 of reptiles, 70 of amphibia, 2, 200 of fishand 50 , 000 species of insects — and seemingly infinite space . Australia is becoming therichest country in the world, materially.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Total area of the continent is about half as big as Europe, or 25 times the size of Britain andIreland. Population is bunched mainly in coastal cities, the biggest of which are capitals of thecountry’s states and the federal capital Canberra5 . Canberra is a model of a planned gardencity and is the seat of a major university. It is smallish in size , but big in importance. Sydney isthe largest city, and commercial capital of the country.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Throughout the country, the basic accommodation unit is the motel, a flat prefabricated6sprawl of bedrooms. But prices are reasonable and, most important, the rooms are excellentand equipped usually with air-conditioning, a refrigerator and tea and coffee making facilities.Bath tubs are rare, as Australians prefer the convenience and hygiene of a shower. Porterageand other services are rare , as Australians don’t like doing a job which smacks of7 servility.After all, this is the land of equality and opportunity.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        Ⅰ. Are the sesta tements True or False according to the article?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　Ⅱ. Match the following countries with their corresponding capitals :
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