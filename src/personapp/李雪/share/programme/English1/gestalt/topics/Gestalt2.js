import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class question2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】A. difficulties',
                content2: '【解析】本题测试词义搭配。本句译文：当他们试图适应这种新的媒体时他们遇到的困难是技术性的。',
                content3: '2. 【答案】B. adapt',
                content4: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content5: '3. 【答案】A. on',
                content6: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content7: '4. 【答案】D. accustomed',
                content8: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content9: '5. 【答案】D. behalf',
                content10: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content11: '6. 【答案】C. art',
                content12: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content13: '7. 【答案】A. commentator',
                content14: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content15: '8. 【答案】C. Above',
                content16: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content17: '9. 【答案】B. create',
                content18: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content19: '10. 【答案】A. Add',
                content20: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content21: '11. 【答案】D.case',
                content22: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content23: '12. 【答案】C. everything',
                content24: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content25: '13. 【答案】B. completely',
                content26: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content27: '14. 【答案】C. sure',
                content28: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content29: '15. 【答案】D. miss',
                content30: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content31: '16. 【答案】A. focus',
                content32: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content33: '17. 【答案】D. interpret',
                content34: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content35: '18. 【答案】B. unlike',
                content36: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content37: '19. 【答案】C. value',
                content38: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
                content39: '20. 【答案】B. when',
                content40: '【解析】本题测试结构型词义搭配。adapt oneself to sth.使……适应于：When you go to a foreign country, you should adapt yourself to new manners and customs. turn to 求助于：You can turn to him for help when you are in trouble. (你有困难时可以求助于他)。alter (部分的)改变，修改：Have you altered your mind? (你是否已改变主意？) modify(稍稍)修改，变更：You have to modify the plan if necessary.此外，modify还可以作“修饰”解，如：Adverbs modify verbs.(副词修饰动词)',
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
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A. by way of</Text>
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
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. hiding`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. serving`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. association</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. meeting`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. collection`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. union`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. deal</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. part`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. grow`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. live`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. whereas</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. until`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. for`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. if`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. avoid</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. follow`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. challenge`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. obtain`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. isolated</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. persuaded`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. viewed`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. exposed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. wherever</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. whatever`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. whenever`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. however`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. changed</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. brought`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. shaped`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. pushed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. invested</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. divided`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. donated`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. withdrawn`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. warms</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. clears`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. shows`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;{`D. breaks`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A. while</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;{`B. so that`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{`C. once`}</Text>
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