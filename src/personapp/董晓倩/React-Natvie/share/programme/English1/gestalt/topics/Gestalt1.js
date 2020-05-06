import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class question1 extends Component {
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
                content6: '【解析】本题测试惯用搭配。on radio用无线电，通过广播（强调行为手段）：The concert is broadcast on radio. on radio在涵义上相当于by radio，例如，We can listen to music broadcast music on the radio. 2) There was good music on radio last night. at,with,behind与radio不能构成惯用搭配，而且从上下文看也不符合题意。',
                content7: '4. 【答案】D. accustomed',
                content8: '【解析】本题测试词义搭配。be（或become，get）accustomed to sth. or doing sth. 习惯于：You will soon get accustomed to the climate he 你会很快习惯这里的气候的。从上下文的逻辑意思和语法结构上看，experienced，determined，establish均不切题。',
                content9: '5. 【答案】D. behalf',
                content10: '【解析】本题测试惯用搭配。on behalf of代表，为了。on account of由于on the side of在....一边；be on the point of doing sth.刚要做某事。',
                content11: '6. 【答案】C. art',
                content12: '【解析】本题测试词义搭配。art技能，本领: the art of seeing for others意为 :“这种替别人看实况的技能”。technology技术，performance演出，节目，执行，完成; fficiency效率,均不符合题意。',
                content13: '7. 【答案】A. commentator',
                content14: '【解析】',
                content15: '8. 【答案】C. Above',
                content16: '【解析】本题测试惯用搭配。above all = most important最重要的。in all总共: There are thity students in all in the class. for是复合介词，意为“尽管”。',
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
                            &emsp;&emsp;{`When television first began to expand, very 
few of the people who had become famous as 
radio commentators were equally effective on 
television. Some of the __1__ they experienced 
when they were trying to __2__ themselves to 
the new medium were technical. When working 
__3__ radio, for example, they had become __4__ 
to seeing on __5__ of the listener. This __6__ of 
seeing for others means that the __7__ has to be 
very good at talking. __8__ all, he has to be able 
to __9__ a continuous sequence of visual images 
which __10__ meaning to the sounds which the 
listener hears. In the __11__ of television, however, 
the commentator sees __12__ with the viewer. His 
role, therefore, is __13__ different. He is there to 
make __14__ that the viewer dose not __15__ some 
points of insterest, to help him __16__ on particular 
things, and to __17__ the images on the television 
screen. __18__ his radio colleague, he must konw the 
__19__ of silence and how to use it at those 
moments __20__ the pictures speaks for themselves.`}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>1. A. difficultices</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. successs`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. sufferings`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. incidents`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>2. A. turn</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. adapt`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. alter`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. modify`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>3. A. on</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. at`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. with`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. behind`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>4. A. experienced</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. determined`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. established`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. accustomed`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>5. A. account</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. side`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. point`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. behalf`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>6. A. efficiency</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. technology`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. art`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. performance`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>7. A. commentator</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. TV viewer`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. speaker`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. author`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>8. A. Of</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. For`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. Above`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. In`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>9. A. inspire</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. create`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;{`C. cause`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. perceive`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>10. A. add</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. apply`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. affect`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. reflect`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>11. A. occasion</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. event`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. fact`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. case`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>12. A. something</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. nothing`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. everything`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. anything`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>13. A. equally</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. completely`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. initially`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. hardly`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>14. A. definite</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. possible`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. sure`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. clear`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>15. A. lose</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. deprive`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. relieve`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. miss`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>16. A. focus</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. attend`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. follow`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. insist`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>17. A. exhibit</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. demonstrate`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. expose`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. interpret`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>18. A. Like</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. Unlike`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. As`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. For`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>19. A. purpose</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. goal`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. value`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. intention`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>20. A. if</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s, marginTop: 10 * s }}>&emsp;&emsp;&emsp;&emsp;{`B. when`}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&#32;{` C. which`}</Text>
                            <Text style={{ width: '50%', fontSize: 16 * s }}>&emsp;&emsp;&emsp;&emsp;{`D. as`}</Text>
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