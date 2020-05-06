import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Gestalt13 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】C. Few',
                content2: '【解析】此处考察词义辨析+上下文语境。文章首段首句为主题句，谈到我们生活在一个GPS定位系统，数字地图和其他导航应用程序都能在手机中找到的世界里。空格句指出：我们中的 在没有手机的情况下走进森林。走进森林或者陌生地方我们需要地图的指引，所以句意为在没有手机的情况下我们很少有人走进森林。Without与few相呼应。Few表示几乎没有，填入符合文意。',
                content3: '2. 【答案】C. run',
                content4: '【解析】此处考察词组搭配。Put on batteries 表示手机需要电池才能正常使用。Put on(穿上;增加;使运转)，take on(承担;呈现;雇佣)，come on(快点;开始)，放入句中均与句意不符。',
                content5: '3. 【答案】B. If',
                content6: '【解析】此处考察逻辑关系。空格所在句指出： 你在没有电话或指南针的情况下迷路， 找不到北方，我们有一些技巧可以帮助你导航 文明之地。看过四个选项之后我们发现此题考察的是逻辑关系，此处为假设情况，B选项代入原文更符合句意。Since(因为;自从)，though(虽然)，until(直到)。',
                content7: '4. 【答案】D. literally',
                content8: '【解析】此处考察副词词义辨析。空格所在句指出：如果你在没有电话或指南针的情况下迷路，你……找不到北方，我们有一些技巧可以帮助你导航……文明之地。将四个选项formally(正式地)，relatively(相对地)，gradually(逐渐地)，literally(确实地，真正地)带入目标空，发现只有D选项符合文意。',
                content9: '5. 【答案】A. back',
                content10: '【解析】此处考察词义辨析+上下文语境。空格所在句指出：如果你在没有电话或指南针的情况下迷路，你肯定找不到北方，那么我们有一些技巧可以帮助你导航 文明之地。前文说到迷路(lost)，空格句说我们有一些技巧帮助你 文明之地，肯定是回到(back)文明之地。',
                content11: '6. 【答案】B. off',
                content12: '【解析】此处考察词义辨析+词组搭配，需要运用段落总分结构法解题。空格句指出：当你发现自己正好 一条小径，而不是在完全 地形中时，你必须回答两个问题：在这个特定的地区，哪个 是下坡?最近的水源在哪里?目标空出现在句首，运用我们课上讲过的段落总分结构法解题：段首出现空不要着急做题，要看段落剩下的部分所表达的意思，通过后面文章可以发现，前文想表达当你便宜正常路线，迷失踪迹的时候。B选项远离，离开符合句意。',
                content13: '7. 【答案】D. unfamiliar',
                content14: '【解析】此处考察词义辨析。空格所在后半句出现了but这个很重要很明显的转折词，那么所填入的词要与前面的句意构成转折关系，前文说到虽然偏离了路线，但是也不是完全不熟悉路，D选项unfamiliar(不熟悉的，不常见的)符合句意，为正确选项。Unattractive(不吸引人的)，uncrowded(不拥挤的)，unchanged(未改变的，没有变化的)均与句意不符。',
                content15: '8. 【答案】C. way',
                content16: '【解析】此处考察词义辨析+上下文语境。当你发现自己远离一条小径，而不是在完全陌生的地形中时，你必须回答两个问题：在这个特定的地区，哪个 是下坡?最近的水源在哪里?文章都在讨论迷路之后的对策和办法，那迷路了我们就需要找到回家或者有人烟地方的路，空格处刚好也是要表达这样的意思，事要找到下坡的路，所以C选项正确。site(地点，位置，场所)，point(要点)，place(地点，地方)三个选项均不符合句意表达，故不入选。',
                content17: '9. 【答案】A. So',
                content18: '【解析】此处考察逻辑连接词。空格前一句指出：生活在山谷中的人基本上靠饮用淡水为生，紧接着空格句： 你下山沿着水走就会发现人类活动的迹象......很明显前后两句之间是因果的逻辑关系，A 选项So是表示因果关系的连接词。',
                content19: '10. 【答案】D. eventually',
                content20: '【解析】此处考察词义辨析+上下文语境。空格句句意：所以如果你下山沿着水走，你 发现人类活动的迹象......所填入的副词需要与语境相符，D选项eventually(最终，最后)符合句意。Immediately(立即，立刻)，intentionally(有意地，故意地)，unexpectedly(意外地，出乎意料地)三个选项带入空格处均不符合句意。',
                content21: '11. 【答案】A. surprised',
                content22: '【解析】本题测试惯用搭配。in the case of 就...而言。注意in the case of和in case of在涵义和用法上的区别:in case of万一发.... in the event of=in case of如果发生。occasion不能与in搭配，但是可以与on搭配，如:on the occasion of在....场合,值...之际:He gave me a present on the occasion of my birthday.',
                content23: '12. 【答案】B. option',
                content24: '【解析】这里提到了一个关键词another，所以说明它所指代的内容在上文中提到过，且后面有冒号解释说明：爬到高处，寻找人类居住的迹象。说明这也是一种方法，所以只有option最合适。',
                content25: '13. 【答案】D. For example',
                content26: '【解析】此处考察上下文逻辑关系。前面说了一种大致的方法，后面内容是具体分析，所以用表示举例分析的for example最合适，其他选项最重要的是、相反、平均都不合适。',
                content27: '14. 【答案】C. spot',
                content28: '【解析】考察搭配。结合原文语境，“即使是在茂密的森林里，你也应该能够……林木线的缝隙。”所以这里填上一个动词后面的宾语是缝隙的只有观察这个意思，所以答案只能是spot,而bridge the gap是弥补代沟，其他几个意思不符。',
                content29: '15. 【答案】B. through',
                content30: '【解析】 本题考察介词搭配。“因为道路、电线、火车轨道和其他道路都是人们……树林中开辟的。”这里填的介词强调与动词carve搭配，表示从树林中carve开来，所以through最合适。',
                content31: '16. 【答案】D. breaks',
                content32: '【解析】本题考察词义复现。“朝着这些……走，找到一条出路。”前面提到了代词these,所以内容肯定有所指代，根据前文动词carve开辟，能得出大概意思为岔路口，符合题意的就是breaks, 而post标杆，link联系，shade阴影都不符合。',
                content33: '17. 【答案】A. artificial',
                content34: '【解析】根据本题语境，强调在夜晚，可以用……光源探路，如火源和路灯，填词为形容词修饰light sources， 后面举例说明了是火源和路灯，而这种光源不是天然的，而是人工的，所有artificial完美符合。其他的mysterious神秘的，hidden隐藏的，limited有限的均不符合。',
                content35: '18. 【答案】A. Finally',
                content36: '【解析】此处考察上下文逻辑关系。可以先看选项finally最终地，consequently因此，incidentally偶然地， generally通常地，结合文章后面一句，“……，假设你迷失在一个人类常去的地方，寻找我们在风景上留下的……。”能看出，跟上一句之间说的是另外一种情况，而得出的另一种说法，所以finally更合适。',
                content37: '19. 【答案】B. marks',
                content38: '【解析】本题考察逻辑关系。根据原文语境“…look for the … we leave on the landscape.” “假设你迷失在一个人类常去的地方，寻找我们在风景上留下的……”。既然迷失了，肯定是寻找记号，答案marks最合适。',
                content39: '20. 【答案】C. lead',
                content40: '【解析】考察搭配Trail blazes, tire tracks, and other features can … you to civilization山火、轮胎痕迹和其他特征可以……你走向现代文明社会。只有“带你”最符合，所以选择lead， 而restrict限制，adopt采取，收养，expose暴露，曝光均不符合。'
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
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content12}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content13}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content14}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content15}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content16}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content17}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content18}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content19}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content20}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content21}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content22}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content23}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content24}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content25}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content26}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content27}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content28}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content29}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content30}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content31}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content32}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content33}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content34}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content35}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content36}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content37}</Text>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content38}</Text>
                <Text style={[{ color: 'red', marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content39}</Text>
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
                            &emsp;&emsp;{`Today we live in a world where GPS systems, digital maps, and other navigation apps are available on our smart phone___1___ of us just walk straight into the woods without a phone. But phones__2__on batteries, and batteries can die faster than we realize.__3__you get lost without a phone or a compass, and you __4__get lost without a phone or a compass, and you __4__can't find north, a few tricks to help you navigate__5__to civilization, one of which is to follow the land.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`When you find yourself well__6__ a trail, but not in a completely __7__area, you have to answer two questions: Which __8__is downhill, in this particular area? And where is the nearest water source? Humans overwhelmingly live in valleys, and on supplies of fresh water.__9__, if you head downhill, and follow any H2O you find, you should __10__see signs of people.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`If you've explored the area before, keep an eye out for familiar sights-you may be __11__how quickly identifying a distinctive rock or tree can restore your bearings.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Another__12__:Climb high and look for signs of human habitation.__13__,even in dense forest, you should able to __14__gaps in the tree line due to roads, train tracks, and other paths people carve__15__ the woods. Head toward these __16__ to find a way out. At night, scan the horizon for __17__ light sources, such as fires and streetlights, then walk toward the glow of light pollution.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`__18__,assuming you're lost in an area humans tend to frequent, look for the __19__we leave on the landscape. Trail blazes, tire tracks, and other features can __20__you to civilization.`}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A. Some</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Most`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Few`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. All`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. A. put</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. take`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. run`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. come`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. Since</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. If`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Though`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. Until`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. formally</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. relatively`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. gradually`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. literally`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. back</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. next`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. around`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. away`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A. onto</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. off`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. across`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. alone`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. unattractive</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. uncrowded`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. unchanged`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. unfamiliar`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. site</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. point`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. way`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. place`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. So</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Yet`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Instead`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. Besides`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. immediately</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. intentionally`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. intentionally`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. eventually`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. surprised</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. annoyed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. frightened`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. confused`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. problem</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. option`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. view`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. result`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. Above all</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. In contrast`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. On average`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. For example`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. bridge</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. avoid`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. spot`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. separate`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. from</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. through`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. beyond`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. under`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. posts</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. links`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. shades`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. breaks`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. artificial</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. mysterious`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. hidden`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. limited`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. Finally</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Consequently`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Incidentally`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. Generally`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. memories</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. marks`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. notes`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. belongings`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A. restrict</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. adopt`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. lead`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. expose`}</Text>
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