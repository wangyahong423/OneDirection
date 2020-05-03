import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu9 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Many people may be afflicted with natural disasterssuch as flooding, famine, drought or starvation.Should people in rich areas extend their help tothose unfortunate victims?`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`I think it is of crucial importance to renderimmediate help since we are emotionally affected by the sufferings of the numerous people incalamity areas, and our sense of humanity and sympathy tells us to reach out a hand tothem. We must take action in thinking of ways to help instead of staying where we are withfolded arms and indifferent response.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`There are many ways of doing this. We can send relief workers into the problem areas likedoctors, nurses, technicians or workers. This is a form of rendering professional help. Otherpractical forms of help include collecting and sending food and clothes into these areas. Theseuseful items will serve their purposes very well in the absence of corruptional officials. A farmore important way is providing them with technical, agricultural and health education. This willdefinitely be a more costly involvement but it is effective in building up their economy ordeveloping it for their future survival.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
