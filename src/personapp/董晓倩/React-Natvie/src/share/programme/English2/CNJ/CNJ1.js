import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, AsyncStorage, StyleSheet, Dimensions } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CNJ1 extends Component {
    constructor() {
        super();
        this.state = {
            todo: ['答案'],
            activeSections: [],
            answerContent: ["我的梦想一直是在时装设计和出版领域找寻一份工作。在我中学毕业的两年前，我选修了一门“缝纫和设计”的课程，并且以为我能再继续学习一个时装设计的课程。然而，就在这个课程的学习过程中，我意识到，将来在这个领域，我是无法与那些富于创新精神的精英们相比。于是，我断定这条路行不通。在申请上大学之前，我对所有人讲，我之所以这样说，是因为我认为从事时装设计不过是我的一个梦想，我也知道，除了我之外，没有人能想象出我会从事时装设计的工作。', '从财务角度来看，在你花时间最多的方面挥霍，比买看起来最有趣的东西更省钱。花钱买一把有优良坐姿支撑的舒适椅子，而不是视频游戏，这听起来就像父母的乏味建议，但就我而言，这与我在两件事上所花的时间长短直接相关。如果你每天在家里的电脑桌前所花时间不到一个小时，但在一个沉浸似的开放世界视频游戏上已经投入了上百个小时，那么买游戏可能更有意义。','人们很容易低估了英国小说家詹姆斯·赫里欧。他的作品有一种令人愉快、易读的风格，大概就让人以为任何人都能模仿他。我总是听人说：我也可以写书，就是我没有时间。这话说得轻松，做得到可不容易。与大众的观点相反，詹姆斯·赫里欧在他早期，用他的话说，“在写作游戏中尝试”并不容易。他显然极具天赋，但他留给世人的最终的、精雕细琢的作品却是多年练习、重写和阅读的结果。和大多数作家一样，他在写作过程中也遭受了许多失望和拒绝，但这些都使他更加坚定了成功的决心。他一生中所取得的一切成就都是来之不易的，他在文学领域的成功也不例外。','全球范围内，信息技术行业与航空业产生的温室气体总量相同——约占二氧化碳排放总量的2%，这有谁曾想到过？许多日常工作对环境造成的损失大得惊人。每一次谷歌搜索能释放0.2到0.7克的二氧化碳，这取决于为了获得“正确”答案你试过多少次。为了迅速向用户提供搜索结果，谷歌不得不在世界各地建立大型数据中心，安装一台台强大的计算机。这些计算机不仅产生大量的二氧化碳，还释放大量热能，因此这些数据中心需要良好的空调设备，这甚至会耗费更多的能源。然而，谷歌和其他大型技术供应商严密地监控其效果，并做出改进。监控是减排的第一步，仍有太多问题需要解决，并且不只是由大公司来解决。','他相信，正是这种困难或许能够扬长避短，以使他能长时间专注的思考每一个句子；因此，使他能在推理中和自己的观察中发现自己的缺点。他还断言，在深入理解冗长且完全抽象的观点上，他的能力受到了局限。有鉴于此，他曾确信自己在数学方面本来就不该获得成功。另一方面，批评家指责他尽管善于观察，但无法推理，对此，他并不接受且认为观点不成立。他谦卑地补充道，或许他“和普通人比起来，更能够注意到那些别人不容易注意到的东西，更能够对此加以详细地观察”。达尔文认为，失去对音乐和绘画方面的兴趣，不仅失去了幸福，而且还可能损伤智力，甚至可能会伤害道德。"]
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
                        <Text style={{ marginTop: 10, color: 'red', fontSize: 17 }}>Text 1</Text>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>&nbsp;&nbsp;&nbsp;&nbsp;My dream has always been to work somewhere in an area between fashion and publishing. Two years before graduating from secondary school, I took a sewing and design course thinking that I would move on to a fashion design course. However, during that course I realised that I was not good enough in this area to compete with other creative presonalities in the future, so I decided that it was not the right path for me. Before applying for university I told everyone that I would study journalism, because writing was, and still is, one of my favourite activites. But to be absolutely honest, I said it, because I thought that fashion and me together was just a dream knew that no one, apart from myself, could imagine me in the fashion industry at all !</Text>
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
