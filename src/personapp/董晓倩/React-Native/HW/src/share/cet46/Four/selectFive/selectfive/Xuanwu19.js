import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu19 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`There is no doubt that watching television andmovies can influence the way that people behave.Moreover, it seems that people are spending moreand more time watching some sort of visualentertainment, whether it is television, a video tapeor a DVD. Therefore, the effects of visual media cannot be ignored.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　One obvious effect of these media is that watching them induces people to buy certainproducts. Television advertising is widespread and, nowadays, even movie theaters permitadvertisements. Another way TV and the movies affect people is that they give people either abroader view of the world or a distorted one, depending on what type of program they watch.Those who watch news and educational program can learn many new things while those whowatch primarily entertainment shows may come to believe that most people in the worldpossess great wealth and good looks. It may make them become dissatisfied with their ownlives. Finally, perhaps the most susceptible viewers are children, who may be unable to tell factfrom fiction and may try to imitate acts that they see on TV or in the movies.`}
                        </Text>
                        
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`With the ever-increasing popularity of video entertainment, society must pay attention tothese effects. Television and movies, while entertaining and informative, cannot take the placeof real experience.`}
                        </Text>
                        
                    </View>
                </View>
            </ScrollView>
        )
    }
}
