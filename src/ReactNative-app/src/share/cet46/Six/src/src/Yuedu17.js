import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu17 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[elementary schools][定位]根据题干中的broad education定位到第1段第l句。解析：该句中的beginning at the bottom with与题目中的start from表意一致，因此答案为with后面的elementary schools.',
                content3: '2.[poor][定位]根据题干中的most promising定位到第2段第4句。解析：原文提到每年有一个资质、性情俱佳且最有前途的男生受到资助。定语从句whose parents were too poor...限定了获得帮助的资格范围，故答案为poor。',
                content5: '3.[Six years.][定位]根据题干中的the best in genius and disposition定位到第2段第7句。',
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
                            &emsp;&emsp;{`Jefferson continued to insist that no republic could maintain itself in strength without the broad education of its people, and he favored beginning at the bottom with elementary schools. He extolled the vital importance of education to republican government. In December 1778, he proposed the plan"for the more general diffusion of knowledge".`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The plan that Jefferson offered called for each county to be divided into "hundreds" and a school built ineach hundred so conveniently located that all free boys and girls might attend daily. For three years all children would receive free schooling, and any child might attend longer at private expense. Pupils would be taught reading, writing, and common arithmetic and become acquainted with Greek, Roman, English, and American history through the books used for reading. From each group of about ten elementary schools one boy"of the best and most promising genius and disposition" whose parents were too poor to continue his schooling would be chosen each year to proceed to one of the grammar schools serving several counties. He would be boarded and his tuition paid by the state. Other qualified students whose parents could support their education also would be admitted to the grammar schools, where they would be taught Latin, Greek, English grammar, geography, and advanced arithmetic. After one year, the least promising third of the state-supported scholars would be cut, and after two years only one-"the best in genius and disposition"-would be allowed to continue at public expense for another four years. With twenty grammar schools proposed, Jefferson envisioned "twenty of the best geniuses selected from the rubbish annually". From this select group, each grammar school in alternate years would send the most promising scholar to the College of William and Mary to be educated, boarded, and clothed at state expense for three years. In a system with twenty grammar schools, ten "public foundationers" would thus annually reach the peak of the educational pyramid.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The contribution of Jefferson's plan was not equal universal education but a system by which the most talented children from whatever condition of society could be given an opportunity for education. An "aristocracy of virtue and talent" thus could be recruited from all classes. Jefferson's interest in education rested on his conviction that the only way of preserving republican government and preventing those entrusted with political power from resorting to tyranny was "to illuminate, as far as practicable, the minds of thepeople at large". Also, in order to have the best laws and well-administered government, it was important that those persons "whom nature has endowed with genius and virtue" be liberally educated and called to government service "without regard to wealth,birth or other accidental condition or circumstance".`}
                        </Text>
                        <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                            阅读自测
                        </Text>
                        <Text style={{ fontSize: 16 * s, marginTop: 5 * s }}>
                            Choose correct answers to the question:
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        1.Jefferson advised that broad education for the people should start from________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        2.Jefferson's plan was intended to help the most promising boys from__________________families.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        3.How long would "the best in genius and disposition" study at the grammar school?
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        4.The contribution of Jefferson's plan was to set up a system to give all the most talented children_____________________.
                        </Text>
                        <Text style={{ fontSize: 15 * s }}>
                        5.Jefferson suggested that the only way to preserve republican government was to illuminate_________________.
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