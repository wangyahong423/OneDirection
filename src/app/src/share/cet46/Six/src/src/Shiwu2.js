import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Shiwu1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. D 空格前为形容词daily，空格后为连词and和an amount，分析句子结构可知，此处应填入一个名词。原文提到，俄罗斯和美国宇航员被要求减少摄取饮食中的热量，被减少的热量相当于三杯可乐的热量，大约减少了他们日常的10%，显然破折号前面的daily diet和此处的daily 表达相同的含义，结合选项可知daily allowance最合适，意为“每日供给量”。2. C 空格前为have，空格后为blamed，判断此处应该填一个副词。选项中可以修饰blame的只有severely “严厉地”。3. A 空格前为不定冠词a，判断此处应该填一个名词。分析句子结构可知，a of meat and milk和a surplus of juice and confectionery为并列结构，故此处应填一个和surplus相对或者相近的名词，结合选项，此处可填入 deficit，意为“不足”。4. L 空格前出现了系动词is，空格后为for the crew，此处要表达下一阶段的12月24日的发射对自从10月份就驻扎在太空轨道中的宇航员们来说是…，结合选项中给出的形容词，只有vital合适，意为“重要的”。5. J 空格前为不定式符号to，后为介词with，分析此处应填入动词原形，且与with构成搭配。根据上下文语境：在12月21日，它将和国际空间站…，动词选项中只有dock符合文意，dock with为固定结构，意为“与 对接”。6. O 空格前为动词，空格后为名词，分析此处应填一个形容词，来修饰空格后的名词。此处指出，如果他们没有收到供给，宇航员就不得不返回地球，结合选项中的形容词，此处填入fresh符合句意，fresh supplies意为 “新鲜供应”，也指“新增补给”。7. G 空格前为have to,空格后为the station，分析此处应填一个动词原形。此处语境为：但如果他们没有收到新鲜的供给，宇航员就不得不…空间站并返回到位于地球的联盟号宇宙飞船中。回到地球，肯定就要“离开”空间 站，选项中只有表示“离开，撤离”。8. F 空格前为形容词性物主代词its(指美国的)，空后为名词fleet，显然its　fleet要表达的是“美国的 舰队”。此处语境为：自哥伦比亚号失事后，美国停飞了它的……，而这两年的时间里俄罗斯一直是国际空间站的唯一的生命线。此处显然要填表示“飞机;飞船” 的单词，shuttle fleet意为“航天飞机”，为固定搭配，符合句意。9. B 空格前有助动词has,空格后为介词of,判断空处应填一个动词的过去分词，且可与of搭配。此处要表达：俄罗斯经常…它独自维持国际空间站运营的财政困难，结合选项，俄罗斯显然是在“抱怨”，complain of...意 为“抱怨……”，符合句意。10. K空格前为情态动词could，空格后为in May，判断此处应填一个不及物动词。此句意为“官员说道，航天飞机会在五月…，但同时，俄罗斯会继续发射载人和载物飞船。”结合选项只有resume符合文意，意为“重新开始 (飞行)”。',
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
                        &emsp;&emsp;{`Two astronauts face a not-so-merry Christmas after being told to ration their food and hope a cargo ship with extra supplies docks on Dec. 21. Russian cosmonaut Salizhan Sharipov and American Leroy Chiao have been asked to cut out calories equal to three cans of Coke from their daily diet—around 10 percent of their daily __1__ and an amount that would be little noticed, NASA said.`}
                    </Text>
                    <Text style={{ fontSize: 16 * s }}>
                        &emsp;&emsp;{`Russian officials, quoted in the local media, have __2__ blamed the previous crew for overeating during their one-month mission earlier this year, leaving a __3__ of meat and milk and a surplus of juice and confectionery .`}
                    </Text>
                    <Text style={{ fontSize: 16 * s }}>
                        &emsp;&emsp;{`The Dec. 24 launch of the next Progress is now __4__ for the crew, stationed in orbit since October. It is due to __5__ with the ISS on Dec. 21.`}
                    </Text>
                    <Text style={{ fontSize: 16 * s }}>
                        &emsp;&emsp;{`NASA officials said their situation was not so different from being cut off on Earth, and their lives were not at risk. If they do not receive __6__supplies, the astronauts would have to __7__ the station and return to Earth on the Soyuz capsule that is docked there.`}
                    </Text>
                    <Text style={{ fontSize: 16 * s }}>
                        &emsp;&emsp;{`Russia has been the sole lifeline to the ISS for almost two years when the United States grounded its __8__ fleet after the fatal Columbia accident. Russia has often __9__ of its financial struggle to keep the ISS fully serviced single-handedly. Shuttle flights could __10__in May, officials have said, but in the meantime Russia will continue to launch all manned and cargo ships.`}
                    </Text>
                    <Text style={{ fontSize: 19, marginTop: 5 * s, fontStyle: 'italic', color: 'green' }}>
                    A) deficit B) complaine C) severely D) allowanceE) considerately F) shuttle G) evacuate H) absentlyI) adequate　 J) dock K) resume L) vital M) trivial N) evaluate O) fresh
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