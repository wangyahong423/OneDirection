import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class TextDetails1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["1.[C] restraint and confidence                                                    2.[D] It had a great influence upon American architecture.                                                                 3.[C] was not reliant on abundant decoration                                                                                         4.[D] They shared some characteristics of abstract art.                                                   5.[B] Natural scenes were taken into consideration"],
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={{ color: 'white' }}>查看答案</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>{this.state.answerContent}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <ScrollView>
                <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ width: '95%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 17</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;We tend to think of the decades immediately following World War II as a time of prosperity and growth, with soldiers returning home by the millions, going off to college on the G. I. Bill and lining up at the marriage bureaus.
　　But when it came to their houses, it was a time of common sense and a belief that less could truly be more. During the Depression and the war, Americans had learned to live with less, and that restraint, in combination with the postwar confidence in the future, made small, efficient housing positively stylish.
　　Economic condition was only a stimulus for the trend toward efficient living. The phrase "less is more" was actually first popularized by a German, the architect Ludwig Mies van der Rohe, who like other people associated with the Bauhaus, a school of design, emigrated to the United States before World War II and took up posts at American architecture schools. These designers came to exert enormous influence on the course of American architecture, but none more so that Mies.
　　Mies's signature phrase means that less decoration, properly organized, has more impact than a lot. Elegance, he believed, did not derive from abundance. Like other modern architects, he employed metal, glass and laminated wood---materials that we take for granted today but that in the 1940s symbolized the future. Mies's sophisticated presentation masked the fact that the spaces he designed were small and efficient, rather than big and often empty.
　　The apartments in the elegant towers Mies built on Chicago's Lake Shore Drive, for example, were smaller - two-bedroom units under 1,000 square feet - than those in their older neighbors along the city's Gold Coast. But they were popular because of their airy glass walls, the views they afforded and the elegance of the buildings' details and proportions, the architectural equivalent of the abstract art so popular at the time.
　　The trend toward "less" was not entirely foreign. In the 1930s Frank Lloyd Wright started building more modest and efficient houses - usually around 1,200 square feet - than the spreading two-story ones he had designed in the 1890s and the early 20th century.
　　The "Case Study Houses" commissioned from talented modern architects by California Arts & Architecture magazine between 1945 and 1962 were yet another homegrown influence on the "less is more" trend. Aesthetic effect came from the landscape, new materials and forthright detailing. In his Case Study House, Ralph Rapson may have mispredicted just how the mechanical revolution would impact everyday life - few American families acquired helicopters, though most eventually got clothes dryers - but his belief that self-sufficiency was both desirable and inevitable was widely shared.</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;1、The postwar American housing style largely reflected the Americans' __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.prosperity and growth{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.efficiency and practicality{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.restraint and confidence{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.pride and faithfulness{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;2.Which of the following can be inferred from Paragraph 3 about Bauhaus?{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.It was founded by Ludwig Mies van der Rohe.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.Its designing concept was affected by World War II.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.Most American architects used to be associated with it.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.It had a great influence upon American architecture.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;3.Mies held that elegance of architectural design __________.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. was related to large space{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B.was identified with emptiness.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.was not reliant on abundant decoration {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.was not associated with efficiency{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;4. What is true about the apartments Mies building Chicago's Lake Shore Drive?   {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A. They ignored details and proportions.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. They were built with materials popular at that time.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C.They were more spacious than neighboring buildings.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.They shared some characteristics of abstract art.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;5. What can we learn about the design of the "Case Study House"? {'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;A.Mechanical devices were widely used.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;B. Natural scenes were taken into consideration{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;C. Details were sacrificed for the overall effect.{'\r\n'}&nbsp;&nbsp;&nbsp;&nbsp;D.  Eco-friendly materials were employed.</Text>
                        <Accordion
                            sections={this.state.todo}
                            activeSections={this.state.activeSections}
                            renderHeader={this._renderHeader}
                            renderContent={this._renderContent}
                            onChange={this._updateSections}
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft:'40%',
        marginBottom:20*s,
        marginTop:10
    },
    headerText: {
        fontSize: 20
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
