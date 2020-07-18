import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Gestalt18 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】A. where',
                content2: '【解析】本题测试上下文语义和连词辨析。 本题考查连词。根据上下文意思，首先可以排除[B][C][D]。这句话中 where 引导一个状语语从句，主要是说记不清把钥匙放在哪里了。',
                content3: '2. 【答案】B. fades',
                content4: '【解析】本题测试上下文语义和动词辨析。As the brain 2 we refer to these occurrences as "senior moments这句话的意思是“由于大脑 2 我们称这些现象为“瞬间性老年痴呆”，由此可以排除[A] 和 [C]。[D]collapse意为：使倒塌，使崩溃，不符合题意。fades考察熟词僻意，通常意思为褪色，逝去。还有衰老的意思，这里就考察是衰老的意思。从前文可以看出，文章讲的是随着年龄增长，大脑衰老。所以选[B]',
                content5: '3. 【答案】D. While',
                content6: '【解析】本题测试逻辑衔接题。 [A] if 表示假设“如果”。[B] Unless “除非，如果不”。[C]Once “一旦”。[D]While，“虽然，然而”表转折。这句话的意思是虽然表面上看起来没什么，但是危害很大，前后位转折关系，所以选D。',
                content7: '4. 【答案】C. damaging',
                content8: '【解析】本题测试上下文语义和词汇辨析。这四个选项均为形容词，[A] 表示“不均匀”， [B] 表示“有限的”， [C] 表示“有破坏性的，损坏的”， [D] 表示“模糊的，晦涩的”。这句话意思是这种精神能量的缺失会给我们带来……的影响。根据上下文的意思，可以排除 [A] 和 [D]。而“有限的影响”显然不足以表达危害的严重性，故可以排除[B] 选项。[C] “带来有害的影响”最符合作者意图。',
                content9: '5. 【答案】A. wellbeing',
                content10: '【解析】本题测试上下文语义和名词辨析。本句话含义是这种精神能量的缺失会给我们的职业、社交还有个人……带来有害的影响。[A] wellbeing “幸福”。[B]environment “环境”。[C] relationship “关系”。[D] outlook “展望”。and连接若干名词，这些名词应该为同一类，职业、社交都是和个人相关，排除[B] 和[D]，[C] personal relationship就是social的意思，不能重复，选择[A]，个人幸福。',
                content11: '6. 【答案】A. turns',
                content12: '【解析】本题测试固定搭配。[A] it turns out that “原来，其实” 。[B]it finds out that“本文发现”。[C] it points out that“指出”。[D] it figures out that“本文发现”。It代表神经科学，这句话的意思是越来越多的精神学家们都表示，大脑其实跟肌肉一样需要练习运动。这里给出的是神经科学的结论，因此选择it turns out that',
                content13: '7. 【答案】C. workouts',
                content14: '【解析】本题测试上下文语义和名词辨析。这四个选项均为名词。[A] roundabouts迂回路线。[B]responses回应。[C]workouts锻炼，练习。[D]associations协会。[C]workouts锻炼，练习与前文出现的exercise都有“锻炼，练习”的意思，近义词复现，所以选[C]',
                content15: '8. 【答案】B. functions',
                content16: '【解析】本题测试上下文语义和名词辨析。上下文语义和名词辨析',
                content17: '9. 【答案】D. process',
                content18: '【解析】本题测试上下文语义和名词辨析。这四个选项均为名词。[A] channel通道，频道。[B]condition条件。[C]sequence顺序，序列。[D]process过程，步骤。根据常识，思考是一个过程，并且通过脑神经相互接触来完成，其他选项表示渠道、序列、条件，均不符合常识。因此正确答案是表示过程的[D]选项。这句话的意思是思考是大脑神经连接必要的过程。',
                content19: '10. 【答案】D. feature',
                content20: '【解析】本题测试上下文语义和动词辨析。这四个选项均为动词。[A] persist坚持。[B] believe相信。[C] excel超过。[D] feature特色。本句句意，在某种程度来讲，我们在进行神经连接(直接影响人的聪明程度)方面的特殊能力是与生俱来的。excel 有超过擅长的意思，表示在某个方面出众，放在此处符合题意，因此正确答案为[B]。',
                content21: '11. 【答案】D. However',
                content22: '【解析】本题测试逻辑衔接题。本题需要的是一个副词，而且位于句首，因此考察的是句关系。通过前后句意义来定答案，前一句强调的是智力是与生俱来的(inherited)，而后一句则认为是可以通过脑力活动(mental effort)会有所波动，两句意义明显相反，故正确答案为[D] However。',
                content23: '12. 【答案】A. according to',
                content24: '【解析】本题测试上下文语义和短语辨析。本题并不难，可以理解为：智力可以……脑力活动得到提升或出现波动。 [B]regardless of “不管，不顾”不合逻辑。[C]apart from“除……之外”也不合适。[D]instead of “代替”明显不符。故[A]为正确答案。',
                content25: '13. 【答案】B. further',
                content26: '【解析】本题测试上下文语义和固定搭配。本题考察的是固定搭配：take a step ……，能搭配只有A和C，分别指“采取进一步措施”和“让到一边去”，无论从逻辑上还是从句意上都是A符合。',
                content27: '14. 【答案】A. sharpness',
                content28: '【解析】本题测试上下文语义和词汇辨析。本题考察的是动宾搭配：improve and regain sb’s mental ……，再根据前文一直在讲如何提高“智力”，因此可以排除A(模式)和B(稳定性)，C(灵活性)和D(锋利性，尖锐性)容易混淆，C有一定的干扰性，但双比之下，D更契合前文，故选D。',
                content29: '15. 【答案】D. allows',
                content30: '【解析】 本题测试上下文语义和词汇辨析。空格所在句的意思是说这个网络课程可以_____系统地改善你的记忆力和注意力。而且此处需要填入的动词需要与to进行搭配。根据搭配关系直接排除A,B。本文的主题介绍的是使人聪明的脑力锻炼法，感情色彩是中性的，此处的D选项force排除，所以最恰当的是D。',
                content31: '16. 【答案】B. track',
                content32: '【解析】本题测试上下文语义和固定搭配。空格所在句的意思是说这个培训课程还可以_____学习进度，并且给予详尽的信息反馈。根据语境，空格缺少的词汇意义为跟踪学习进度，分析四个选项，直接排除A hold, C order; 辨析B,D两个选项，与D选项的pace搭配的介词应该为with，即，keep pace with，所以排除，B选项为正确答案，keep track of 意思为跟踪。',
                content33: '17. 【答案】D. for',
                content34: '【解析】本题测试上下文语义和介词。本题考查介词，根据空格前后语境，空格所缺少的介词意义为关于你的表现作出详细的反馈，四个选项中只有D有关于的意思。',
                content35: '18. 【答案】C. constantly',
                content36: '【解析】本题测试上下文语义和词汇辨析。空格所在句的意思是说更加重要的是，它会_____调整并升级有关训练游戏。通过前后句的语境，所用词汇均为褒义词，所以，从感情色彩方面可以排除A，B习惯性的主语应该为人，直接排除。B经常的，D异乎寻常的代入，发现C比较符合题意。',
                content37: '19. 【答案】C. build',
                content38: '【解析】本题测试上下文语义和词汇辨析。空格所在句的意思是说它会经常调整并升级有关训练游戏，以促进脑力的不断____。本题所缺少的动词需要与介词on 搭配，A put on 穿上，增加；B carry on 执行；C build on 在……基础上增加，构建；D take on 呈现；代入空格发现只有C适合，A,B,D都不与空格后面的development 相搭配。',
                content39: '20. 【答案】C. idle',
                content40: '【解析】本题测试上下文语义和词汇辨析。本题涉及的是一个含不定式作后定的句子，所缺词汇为形容词修饰exercise routine，根据前后情感一致的逻辑，通过后面的不定式中的关键词increase寺和vary your muscle use等信息反推所需词汇为正向词汇，直接排除A和B，D是中性，只有C(有效的)符合逻辑，故为正确答案。',
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
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content6}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content9}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content10}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content12}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content13}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content14}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content15}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content16}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content17}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content18}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content19}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content20}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content21}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content22}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content23}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content24}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content25}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content26}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content27}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content28}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content29}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content30}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content31}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content32}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content33}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content34}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content35}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content36}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content37}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content38}</Text>
                <Text style={[{ color: 'red',marginTop:5*s }, styles.contentText]}>&emsp;&emsp;{section.content39}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content40}</Text>
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
                            &emsp;&emsp;{`As many people hit middle age, they often start to notice that their memory and mental clarity are not what they used to be. We suddenly can't remember __1__ we put the keys just a moment ago, or an old acquaintance's name, or the name of an old band we used to love. As the brain __2__ , we refer to these occurrences as "senior moments." __3__ seemingly innocent, this loss of mental focus can potentially have a(an) __4__ impact on our professional, social, and personal __5__ .`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Neuroscientists, experts who study the nervous system, are increasingly showing that there's actually a lot that can be done. It __6__ out that the brain needs exercise in much the same way our muscles do, and the right mental __7__ can significantly improve our basic cognitive __8__ . Thinking is essentially a __9__ of making connections in the brain. To a certain extent, our ability to __10__ in making the connections that drive intelligence is inherited. __11__ , because these connections are made through effort and practice, scientists believe that intelligence can expand and fluctuate __12__ mental effort.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Now, a new Web-based company has taken it a step __13__ and developed the first "brain training program" designed to actually help people improve and regain their mental __14__ .`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The Web-based program __15__ you to systematically improve your memory and attention skills. The program keeps __16__ of your progress and provides detailed feedback __17__ your performance and improvement. Most importantly, it __18__ modifies and enhances the games you play to __19__ on the strengths you are developing--much like a(n) __20__ exercise routine requires you to increase resistance and vary your muscle use.`}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A. where</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. when`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. that`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. why`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. A. improves</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. fades`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. recovers`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. collapses`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. If</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Unless`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Once`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. While`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. uneven</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. limited`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. damaging`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. obscure`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. wellbeing</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. environment`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. relationship`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. outlook`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A. turns</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. finds`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. points`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. figures`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. roundabouts</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. responses`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. workouts`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. associations`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. genre</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. functions`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. circumstances`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. criterion`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. channel</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. condition`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. sequence`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. process`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. persist</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. believe`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. excel`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. feature`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. Therefore</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Moreover`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Otherwise`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. However`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. according to</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. regardless of`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. apart from`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. instead of`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. back</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. further`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. aside`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. around`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. sharpness</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. stabilit`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. framework`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. flexibility`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. forces</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. reminds`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. hurries`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. allows`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. hold</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. track`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. order`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. pace`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. to</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. with`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. for`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. on`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. irregularly</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. habitually`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. constantly`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. unusually`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. carry</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. put`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. build`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. take`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A. risky</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. effective`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. idle`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. familiar`}</Text>
                        </View>
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
        marginLeft:'40%',
        marginBottom:20*s
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