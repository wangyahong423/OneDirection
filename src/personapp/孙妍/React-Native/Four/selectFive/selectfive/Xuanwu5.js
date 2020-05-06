import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanwu5 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%' }}>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Some people think governments should spend as much money as possible exploring outer space (for example, traveling to the Moon and other planets). Other people disagree ant think governments should spend this money for our basic needs on Earth. Which of these two opinions do you agree with? Use specific reasons and details to support your answer.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`　Even people born after 1968 can easily name the first man to land on the moon; we have all seen the black and white footage of Neil Armstrong in a space suit taking slow, bounding steps to plant an American flag on the moon’s surface. Now, forty years later, some might suggest that governments should continue exploring outer space, and should even devote a healthy amount of money from their budgets to this end. However, the needs of our world have changed, and we must prioritize our spending accordingly and allocate our financial resources to helping the Earth itself.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`When we consider the exploration of outer space that had its heyday in the 1950’s and 1960’s, we must also consider the political factors that were present here on Earth. During the Cold War, countries like the United States and the Soviet Union were interested in displaying their intellectual, scientific and financial resources, and outer space became the arena in which this took place. The ‘‘Space Race’’ culminated in 1968 when the United States landed the first astronauts on the moon. Space exploration was of the extreme interest to ordinary citizens, but was connected to themes of national strength and patriotism.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Now, as we consider whether to continue the exploration of outer space, our world is faced with a different set of circumstances. Governments are less preoccupied with their standing in the world, and more interested in the well-being of those who live in it. The greatest threat to our well-being is our damaged environment, and this is a concern of the entire world. For example, pollution caused by factories in South America might contribute to rising water levels in Bangladesh. Space exploration would require a great outlay of money on equipment, personnel and fuel; instead we must allot our financial resources toward cooperating with other countries to improve the environment and help make life more bearable for our fellow citizens on earth.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In summary, those who were alive during the Age of Exploration of the 1950’s and 1960’s can remember the excitement of that era; the scientific findings of those missions to outer space have provided precious insights into the universe beyond Earth. However, one of the goals of governments pursuing space exploration was to provide a show of strength for their countries. Now, the best way a government can show its strength is to show that it cares for its fellow citizens around the world.`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
