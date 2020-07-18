import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu11 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As the technology of public transportation keeps advancing, more citizens can choose to dwell in the cities that are beneficial to their own development. Inevitably, there occurs a controversy whether moving to a new city or country will lead to the rupture of relationship among friends. From my perspective, I think the statement is not sensible.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Firstly, moving to a new country or city will not result in the loss of old friends. To be more specific, the maintenance of friendship doesn’t lie in how far they live with each other and the development of technology has diversified the ways of interacting with friends. The invention of cellphones break the shackles caused by distance and overseas students can choose to communicate with their family members and friends through a variety of Apps like WeChat that makes video calls possible. Except for that, by looking at the pictures popping up all over the social media like Facebook, people can easily capture what is happening to their friends. For instance, my friend Selina took selfie in the Sydney Opera House a week ago and I would learn that she was having fun in the Australia with her picture posted on the Instagram. Therefore, a wide range of advanced electronic gadgets can be used to sustain friendship.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Moreover, instead of losing old friends, city migrants can even enlarge their social circles and achieve more success. Restricted in a city for a long period, people may be trapped in a situation that would block their development and they can gain refreshing experience while immigrating to a new city. My friend of Mine named Michael served as a Market Analyst in a renewed company in Beijing. However, he couldn’t see any progress in recent years and then an opportunity comes out. Because of his five-year working experience, a foreign trade cooperation tried to recruit him as the Market Analyst because the firm was planning to start a new program. Then he grasped the chance and earn a challenging life that he likes even though he was required to work in Shanghai. Our relationship have not experienced any interruption and his strong ability of being adapted to the new environment helps him to make lots of new friends. Accordingly, moving to a new city can, occasionally, help to break the deadlock in our professions.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Admittedly, it can be sensible that friends can be estranged owing to the long distance with each other. Specifically speaking, the chances to meet with each other will be limited a lot. However, as I just put, for one thing, people can talk with each other through various social network software. For another thing, the distance between cities is not a problem anymore since there have been many public transportation tools like the high-speed trains and airplanes that will lead us to anyplace we try to go in a very short period.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In a word, moving to a new city or a new country is good choice under some circumstance. Besides, the highly developed technology can help to strengthen the relations with our friends and the possibilities of living a different life and achieving success can both explain why I stand by the statement that it is a good thing to move to a new city.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
