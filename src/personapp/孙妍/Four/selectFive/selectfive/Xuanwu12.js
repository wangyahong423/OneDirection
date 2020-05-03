import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu12 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Nowadays, the overwhelming influence of advertisements on media has made too many controversial social issues. Some people argue that advertisements make the audience have the similar look by driving them to buy products of the same brand. Personally, I fundamentally agree with this assertion, and my reasons will be explored as below.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Admittedly, the literal intention of advertisements is to sharpen the concept of individualism. For the purpose of distinguishing brand names, slogans and testimonials in advertisement are always full of very personalized words, including "new", "innovation", "uniqueness", "revolution", "the best", "the only", "the first". It is clear that core values of these words bring people a motivation to change, and a desire to try something distinctive. Consequently, the gap between people can be broadened, because any individual is stimulated by advertisements to express their personalities by buy different items, instead of following common tastes.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`However, when considering practical effects of advertisements on the society, I strongly believe they play a role of depersonalizing the audience, and the first reason is that commercials are the key tool for big companies to monopolize the market. One hand, many big companies invest billions of dollars annually in making fascinating and prepossessing advertisements to attract the public, which consistently maintains the loyalty of patrons, and cultivate good impressions of potential customers on their brands. On the other hand, small companies have too limited financial ability to afford these costly publicity campaigns, so that their names and influences continue to fade and lose consumer groups. That is to say, advertisements, an expensive privilege only for rich and big companies, help these companies exclusively occupy the market, as well as reducing the diversity of brands. In this situation, people definitely look the same, because they have no other options but buy the same-brand food, clothes and devices produced by a dominating company.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Another reason supporting this assertion lies on the fact that exposure to advertisements standardizes thoughts and tastes among audiences, especially in terms of their appearance. A typical example comes from fashion, cosmetic and shampoo commercials which highlight the close-up of images of certain model or celebrity. This is a strong brainwash by implying that images of these actors are common standards of human beauty, and then triggering massive public imitation shows round by round. In too many cases, large groups of hypnotized people, regardless of ages, careers and races, blindly follow and chase so-called iconic figures in an advertisement, mainly through buying and using the same lipstick and perfume, wearing same clothes, watch, ornaments and bag, even copying the same hair style.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In conclusion, I believe the main social influence of advertisements is to make people have the similar images apparently. Although slogans of advertisements tend to individualize the audience, the truth is that advertisements not only let big companies rule the market solely, but also manipulate the public’s minds to buy the same things.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
