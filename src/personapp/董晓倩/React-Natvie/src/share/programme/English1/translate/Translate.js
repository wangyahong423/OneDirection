import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Translate extends Component {
    render() {
        return (
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={[styles.outbox, { marginTop: '10%' }]}
                    onPress={() => Actions.translate1()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`1、yet when one looks at the photographs of the gardens created by the homeless, it strikes one that, for all their diversity of styles, these gardens speak of various other fundamental urges beyond... `}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate2()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`2、The gardens of the homeless which are in effect homeless garden introduce from in to an urban environment where it either didn’t exist or was not discernible as such`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate3()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`3、Mast of us give in to a demoralization of spirit which we usually blame on some psychological conditions until one day we find ourselves in a garden and feel the oppression vanish as...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate4()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`4、His analysis should therefore end any self-contentedness among those who may believe that the global position of English is so stable that the young generation the United Kingdom do not need additional language...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate5()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`5、Many countries are introducing English into the primary-school curriculum but British schoolchildren and students do not appear to be gaining greater encouragemen to achieve fluency in other...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate6()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`6、The changes identified by David Graddol all present clear and major challenges to UK's providers of English language teaching to people of other countrices and to broader education business sectors.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate7()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`7、It gives a basis to all organization which seek to promote the learning and very different operating environment.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate8()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`8、But even as the number of English speakers expands further there are signs that the global predominant of the language may fade within the foreseeable future.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate9()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`9、A scared place, however, crude it may be, is a distinctly human need, as opposed to shelt which is a distinctly animal need.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate10()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`10、It is this implicit or explicit reference to nature that fully justifies the use of the word garden, though in a liberated sense, to describe these synthetic constructions.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate11()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`11、However, the world is so made that elegant systems are in principle unable to deal with some of the world''s more fascinating and delightful aspects.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate12()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`12、The existence of the giant clouds was virtually required for the Big Bang, first put forward in the 1920s, to maintain its reign as the dominant explanation of the cosmos.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate13()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`13、When that happens, it is not a mistake: it is mankind''s instinct for moral reasoning in action, an instinct that should be encouraged rather than laughed at.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate14()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`14、Some of these causes are completely reasonable results of social needs. Others are reasonable consequences of particular advances in science being to some extent self-accelerating.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate15()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`15、Prior to the twentieth century, women in were stereotypes of lacking any features that made them unique individuals and were also subject to numerous restrictions imposed by the male-dominated culture.`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate16()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`16、The world is going through the biggest wave of mergers and acquisitions ever witnessed. The process sweeps from hyperactive America to Europe and reaches the emerging countries with unsurpassed might...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate17()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`17、There’s no question that the big are getting bigger and more powerful. Multinational corporations accounted for less than 20% of international trade in 1982. Today the figure is more than 25% and growing...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate18()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`18、I believe that the most important forces behind the massive M&A wave are the same that underlie the globalization process: falling transportation and communication costs, lower trade and investment barriers...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate19()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`19、Examples of benefits or costs of the current concentration wave are scanty. Yet it is hard to imagine that the merger of a few oil firms today could re-create the same threats to competition that were feared nearly a century...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.outbox}
                    onPress={() => Actions.translate20()}
                >
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                    </View>
                    <View style={styles.inbox}>
                        <View style={{ padding: 8 * s }}>
                            {/* <Icon name="rocket" size={30} color="#900" /> */}
                            <Text style={{ fontSize: 16 * s }}>&emsp;&emsp;{`20、Yet the fact remains that the merger movement must be watched. A few weeks ago， Alan Greenspan warned against the megamergers in the banking industry. Who is going to supervise， regulate and operate as...`}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    outbox: {
        marginBottom: '5%',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    inbox: {
        width: '80%',
        height: 120 * s,
        borderWidth: 2,
        borderRadius: 10 * s
    }
})