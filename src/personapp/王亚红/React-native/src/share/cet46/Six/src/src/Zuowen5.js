import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Zuowen5 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: 'I am a college student from a farmer＇s family in a mountaineous area. A year ago, I wasadmitted to a famous university. Before entering the university, I was told that the necessaryexpenses during my four years＇study would cost nearly fifty thousand yuan. My parents hadcollected all the money there was to collect, including the money bor rowed from theirrelatives, but it was hardly enough to meet the needs. Then, good news came that I couldresort to the bank for a loan. I thought it was a good idea and so I did it.',
                content3: 'My decision was based on the following con sider ations: First, with the loan I can pay thetuition and support my life on the campus.Secondly, I don＇t have to depend on my parents who are always worrying about the enormousfamily expenditure.Thirdly, I will always have the pressure upon me which forces me to study the hard way.',
                content5: 'Fourthly, I have to live a very simple life and save every coin possible. To sooner liquidate thedebt, I sometimes work as a home tutor, sometimes a door-to-door salesman, sometimes arestaur ant waiter.',
                content7: 'Fifthly, while doing part-time jobs, I have accumulated a lot of social experience, bittersometimes, sweet occasionally, but happy all the time.',
                content9: 'I think the above are the advantages the loan from the bank has brought to me. They arebeneficial not only to my studies at the university but also to my future career, because Ifirmly believe in the saying "Harsh life produces a diligent and intelligent man."',
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
                            &emsp;&emsp;{`Advantages of Getting a Loan from the Bank for My Studies`}
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