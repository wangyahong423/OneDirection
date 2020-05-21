import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Gestalt2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】D. as well as',
                content2: '【解析】本题考察逻辑关系。因为考察逻辑关系，所以需要我们先对填空前后的原文信息做定位分析：文章身处大环境not only…but also之中，这是一个明显的并列关系，表示“不仅......而且...”该空与前一句“his parents and his friends”也是并列 关系,表示“与他本人以及伴侣的父母朋友相关”所以答案只能是D. as well as. A. by way on通过 B. with regard to关于 C. on behalf of代表',
                content3: '2. 【答案】A. decide on',
                content4: '【解析】上下文语义。根据该句的主语a young man与宾语a likely spouse的关系，答案只能是A. decide on决定。表示自己决定自己的对象。B. provide for为...提供准备C. compete with与....竞争D. adapt ta适用',
                content5: '3. 【答案】B. arrange',
                content6: '【解析】上下文语义及动词辨析。该句意思为，他可以自己选择自己中意的伴侣并让父母___相关事务。四个选项中，A close 关闭C renew 更新;恢复D postpone“推迟”语义不正确，只有B arrange安排是符合语境。',
                content7: '4. 【答案】A. In theory',
                content8: '【解析】上下文语义。逻辑判断题。主要是看前后两句的含义，前面是说“他可以自己选择自己中意的伴侣并让父母安排相关事务，或者几乎不参与，完全让父母选择自己的对象。”空格后面说“女方可以拒绝她父母所选择的对象。”这两句之间没有举例说明的关系，且有一个may,更证明A. In theory的正确性。而其他选项B. Above al最重要的是，C. In time准时D. For exampl举例，均不符合题意。',
                content9: '5. 【答案】C. After',
                content10: '【解析】上下文语义。根据下文“a spouse has been selected. each family investigates the other.... ”知道,只有对象选择好后，父母才会去调查研究对方的背景。所以只有after才对。其他选项A. Unless 除非，否则B. Lest以免，唯恐D. Although尽管都不符合题意。', 
                content11: '6. 【答案】A. into',
                content12: '【解析】上下文语义及介词词义辨析。这里主要是看marry与相关介词的固定搭配。这里marry into 就是指嫁到，而其他选项均没有这层含义。',
                content13: '7. 【答案】A. but',
                content14: '【解析】逻辑关系题。根据上文，说传统的婚礼时间跨度很长，但是到了1980s,婚礼只持续一天半。所以与前文发生转变。因此要选择but转折关系。',
                content15: '8. 【答案】C. recite',
                content16: '【解析】上下文语义及动词词义辨析。空格处需要填一个 动词，和后面的prayers of blessing所搭配, C选项recite为背诵的意思,与所给短语搭配最为合理,译为“为祈祷者做祈福”。',
                content17: '9. 【答案】D. tying',
                content18: '【解析】上下文语义及动词词义辨析。本题需要根据.上下文语义分析，空格处需要搭配后文“棉花线头”，纵观四个选项[A]折叠[B]堆积[C]包裏[D]系上，根据选项含义，只有D和后文的“棉花线头”搭配最为合理。',
                content19: '10. 【答案】A. passing',
                content20: '【解析】上下文语义及动词词义辨析。本题根据选项[A]传递[B]点亮[C]隐藏[D]服务,原文空格需要填写一个动词与后文“around a circle” 来搭配，译为“将蜡烛传一圈 ”，故[A]传递为正确选项。',
                content21: '11. 【答案】D.union',
                content22: '【解析】名词词义辨析。本题根据选项[A]协会，社团[B]会议，会面[C]集合[D]结合。 本句语义为“这些受尊敬的夫妻祈祷..”根据语境，结婚是一种夫妻二人的结合，因此，选项[D]结合更符合语境。',
                content23: '12. 【答案】D. live',
                content24: '【解析】上下文语义及动词词义辨析。本题比较简单。根据语义“根据传统，新婚夫妇要搬到妻子父母家，与父母___ 一年”根据语境，应为[D]居住为最佳答案。',      
                content25: '13. 【答案】B. until',
                content26: '【解析】时间逻辑关系。根据原文,“____他们在 附近建造一栋新房 子”[A]然而[B]直到[C]为[D]如果结合语境，[B]直到最符合原文语境，搭配最为合理。',
                content27: '14. 【答案】D. obtain',
                content28: '【解析】上下文语义及动词词义辨析。Divorce is legal and relatively easy to__ 14__, but not common 该句意为离婚是合法的，且相对容易____. A.avoid避免 B.follow跟随C.chanllenge挑战，质疑D.obtain 获得。这里出现and，所以对于离婚这件事不可能是避免或是挑战，但是跟随和离婚之间语义不符，但是获得离婚(的批准)是可以的。选D。',
                content29: '15. 【答案】D. viewed',
                content30: '【解析】上下文语义及动词词义辨析。Divorced persons are__ 15__ with some disapproval离婚的人...一些不赞同。在段首，已经注明离婚是合法的且相对容易得到批准，但是不常见。这说明离婚在现实中肯定是不太受到人们的欢迎的。而接下来这句就说离婚的人-一些不赞同。再看选项: A.isolated孤立B.persuaded劝说C.viewed看做D.exposed接触，受到.的影响? C选项固定搭配被认为,放进。',
                content31: '16. 【答案】B. whatever',
                content32: '【解析】语法。Each spouse reains __16__ poperty he or she __17__ into the marriage, 17个空对应的都是动词，所以该句意思为：夫妇双方保有···财产,这个财产是他或“她(动词)进婚姻的。结合选项A whenever “无论何地; 任何(地方) =any place where(定从)”。B whatever“无论什么;任何(东西)=amything that/any+N that。” C whenever无论何时;任何(时间=any time when) D however 无论如何，无论多么.根据语义,这里应该不是让步的关系而且填的这个词还要能修饰property。 因此，选择B=retains any property that he or she.',
                content33: '17. 【答案】B. brought',
                content34: '【解析】上下文语义动词词义辨析。Each spouse retains ___16___ property he or she __17__ into the marriage,结合选项A changed“改变”。B brought “带来”。C shaped“形成” D pushed“推，逼迫”。结合语境只有B符合，把财产带入婚姻。',
                content35: '18. 【答案】B. divided',
                content36: '【解析】上下文语义及动词义辨析。…and jointly-acquired property is __18__ equally.结合选项A invested投资 B divided平分 C donated捐赠 D withdrawn 撤出，提取。根据语义应该是共同财产被（夫妻双方）平分。',
                content37: '19. 【答案】C. shows',
                content38: '【解析】动词固定搭配。Divored persons may remarry, but a gender prejudice__19__up. 该句语义为高过婚的人或许会再婚，但是性别偏见···。结合选项A.warm(up) 加热 B.clear(up) 变晴 C.show(cp) 显现 D.break(up) 分裂，分开;显然C是正确选项。',
                content39: '20. 【答案】A. while',
                content40: '【解析】上下文语义。很明显的两类人的对比比较关系。只能选择while.',
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
                            &emsp;&emsp;{`In Cambodia, the choice of a spouse is a 
complex one for the young male. It may involve 
not only his parents and his friends, __1__ those 
of the young woman, but also a matchmaker. A 
young man can __2__ a likely spouse on his own and 
then ask his parents to __3__ the marriage 
negotiations, or the young's parents may take the 
choice of a spouse, giving the child little to say 
in the selection. __4__, a girl may veto the 
spouse her parents have chosen. __5__ a 
spouse has been selected, each family 
investigates the other to make sure its child is 
marrying __6__ a good family.
`}
&emsp;&emsp;{`The traditional wedding is a long and 
colorful affair. Formerly it lasted three days, 
__7__1980s it more commonly lasted a day and 
a half. Buddhist priests offer a short sermon 
and __8__ prayers of blessing. Parts of the 
ceremony involve ritual hair cutting, __9__cotton 
threads soaked in holy water around the bride's 
and groom's wrists, and __10__a candle around 
a circle of happily married and respected 
couples to bless? the __11__.?Newlyweds 
traditionally move in with the wife's parents and 
may__12__ with them up to a year, __13__they 
can build a new house nearby Divorce is legal 
and easy to __14__, but not common. Divorced 
persons are __15__ with some disapproval. Each 
spouse retains __16__ property he or she __17__ into 
the marriage, and jointly-acquired property is __18__ 
equally. Divorced persons may remarry, but a gender 
prejudice __19__ up? The divorced male doesn't have
a waiting period before he can remarry __20__ the 
woman must wait ten months.`}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A. by way of</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. with regard to`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. on behalf of`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. as well as`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. A. decide on</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. provide for`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. compete with`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. adapt to`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. close</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. arrange`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. renew`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. postpone`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. In theory</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. Above all`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. In time`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. For example`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. Unless</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. Less`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. After`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. Although`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A. into</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. within`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. from`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. D. through`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. or</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. since`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. but`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. so`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. test</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. copy`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. recite`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. create`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. folding</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. piling`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. wrapping`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. tying`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. passing</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B.lighting`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. hiding`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. serving`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. association</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. meeting`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. collection`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. union`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. deal</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. part`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. grow`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. live`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. whereas</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. until`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. for`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. if`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. avoid</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. follow`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. challenge`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. obtain`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. isolated</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. persuaded`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. viewed`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. exposed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. wherever</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. whatever`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. whenever`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. however`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. changed</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. brought`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. shaped`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. pushed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. invested</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. divided`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. donated`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. withdrawn`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. warms</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. clears`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. shows`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. breaks`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A. while</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. so that`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. once`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. in that`}</Text>
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