import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Zuowen10 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'You have been asked to recommend a particular brand of bread for use in elementaryschools in a small city. Which of the four brands of bread described in the chart would yourecommend? Support your choice with information from the chart below.',
                content3: 'Which brand of bread is the most suitable for elementary school children? Before we makethe choice, there are three things we need to take into account: taste, nutrition and cost.',
                content5: 'Among the three, I believe nutrition is the most important. Children in elementary schoolsare at an age when their bodies are growing rapidly. Malnutrition will certainly hinder theirbodies from growing, and poor health will often result in poor learning. Taste is also importantbecause tasty bread can help stimulate children＇s appetite. Children will not like to eat poor-tasting bread regardless of its level of nutrition. A good appetite guarantees sufficientnutrition.',
                content7: 'Therefore, I will certainly recommend Brand A, because both its nutrition and taste are verygood.Neither Brand C nor Brand D is a good choice because the former has a very good nutritionalrating but not a good taste; while the latter has an excellent taste but only a fair nutritionalrating.',
                content9: 'Being less nutritional and tasteful, Brand B is not as good a choice as Brand A, despite theirsimilar costs. So, that leaves only Brand A. It is true that Brand A has the highest price, but Ibelieve that most of the schools would not really mind paying a little bit more money for schoolchildren＇s better health.',
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
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
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
                            &emsp;&emsp;{`Choose a Particuler Brand for Children`}
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
        marginLeft: '40%',
        marginBottom: 20 * s
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