import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class question3 extends Component {
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
                            &emsp;&emsp;{`As former colonists of Great Britain, the 
Founding Fathers of the United States adopted 
much of the legal system of Great Britain. We 
have a“common law”，or law made by courts 
__1__ a monarch or other central governmental 
__2__ like a legislature. The jury, a __3__ of ordinary 
critizens chosen todecide a case, is an __4__ part of 
our common-law system. Use of juries to decide 
cases is a __5__ feature of the Americnan legal 
system. Few other countries in the world use juries 
as we do in the United States.__6__ the centuries, 
many people have believed that juries in most cases 
reach a fairer and more just result__7__would be 
obtained using a judge__8__, as many countries 
do.__9__a jury decides cases after“__10__”, or 
discussions among a group of people, the jury's 
decision is likely to have the__11__ have many 
different people from different backgrounds, who 
must as a group decide what is right. Juries are used
in both civll cases, whitch decide __12__ among 
__13__ citizens, and criminal cases which decide 
cases brought by the government __14__ that 
individuals have committed crimes. Juries are 
selected from the U.S. citizens and __15__. Jurors, 
consisting of __16__ numbers are called for 
each case requiring a jury. The judge__17__to 
the case__18__the selection of jurors to serve 
as the jury for that case. In some states, 
__19__jurors are questioned by the judge; in 
others, they are questioned by the lawyers 
representing the__20__under rules dictated by 
state law.
`}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A. other than</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. rather than`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. more than`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. or rather`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. A. agency</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. organization`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. institution`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. authority`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. panel</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. crew`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. band`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. flock`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. innate</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. intact`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. integral`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. integrated`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. discriminating</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. distinguishing`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. determining`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. diminishing`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A. in</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. by`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. after`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. over`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. that</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. which`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. than`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. as`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. alike</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. alone`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. altogether`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. apart`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. Although</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Because`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{` C. If`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. While`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. deliberations</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. meditations`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. reflections`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. speculations`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. outline</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. outcome`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. input`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. intake`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. arguments</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. controversies`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. disputes`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. hostilities`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. fellow</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. individual`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. personal`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. private`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. asserting</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. alleging`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. maintaining`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. testifying`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. assembled</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. evoked`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. rallied`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. summoned`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. set</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. exact`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. given`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. placed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. allocated</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. allotted`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. appointed`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. assigned`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. administers</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. manages`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. oversees`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. presides`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. inspective</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. irrespective`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. perspective`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. prospective`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A. bodies</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. parties`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. sides`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. units`}</Text>
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