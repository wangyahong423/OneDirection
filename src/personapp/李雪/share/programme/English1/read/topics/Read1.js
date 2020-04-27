import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '解析',
                content2: '考察重点：',
                content3: '非谓语动词做后置定语，状语从句，插入语',
                content4: '这个句子结构非常清晰：it strikes one that, for all their diversity of styles,these gardens speak of various other fundamental urges beyond that of decoration and creative expression 是主句，其中 for all their diversity of styles是插入语。时间状语从句yet when one looks at the photoraphs of the gardens created by the homeless,提前至主句之前，其中created by the homeless 是过去分词短语充当后置定语，用来修饰the gardens词汇的识别：句子中的动词looks at对应的宾语是the photographs of the gardens,因此翻译成“观看”。句子中created by the homeless对应的宾语是the gardens,因此翻译成“创建、建立”。句子中的动词speak of对应的宾语是various other fundamental urges，因此翻译成“透露、显示、表明”',
                content5: '参考翻译：',
                content6: '然而当我们观看那些由无家可归的人创建的家园的照片时，它们的那些各种各样的风格，会给人以深深的震撼。这些家园在它的装饰和创造性表示之上，透露出了其他基本的需求。'
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
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                    <Text style={[{ marginTop: 5 * s }, styles.contentText]}>{section.content3}</Text>
                </View>
                <Text style={styles.contentText}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content6}</Text>
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
                            &emsp;&emsp;{`An old saying has it that half of all advertisting 
budgets are wasted-the trouble is, no one konws 
whitch half . In the internet age, at least in 
theory ,this fraction can be much reduced . By 
watching what people search for, click on and 
say online, companies can aim “behavioural” ads 
at those most likely to buy.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In the past couple of weeks a quarrel has 
illustrated the value to advertisers of such fine-
grained information: Should advertisers assume 
that people are happy to be tracked and sent 
behavioural ads? Or should they have explicit 
permission? `}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In December 2010 America’s Federal Trade 
Cornmission (FTC) proposed adding a “do not 
track “(DNT) option to internet browsers ,so that 
users could tell adwertisers that they did not 
want to be followed .Microsoft’s Internet 
Explorer and Apple’s Safari both offer 
DNT ;Google’s Chrome is due to do so this 
year. In February the FTC and Digltal 
Adwertising Alliance (DAA) agreed that the 
industry would get cracking on responging to 
DNT requests.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`On May 31st Microsoft Set off the row: It 
said that Internet Explorer 10,the version due to 
appear windows 8, would have DNT as a 
default. `}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It is not yet clear how advertisers will respond. 
Geting a DNT signal does not oblige anyone to 
stop tracking, although some companies have 
promised to do so. Unable to tell whether 
someone really objects to behavioural ads or 
whether they are sticking with Microsoft's default, 
some may ignore a DNT signal and press on anyway.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Also unclear is why Microsoft has gone it alone. 
Atter all, it has an ad business too, which it says will 
comply with DNT requests, though it is still 
working out how. If it is trying to upset Google, 
which relies almost wholly on default will become 
the norm. DNT dose not seem an obviously huge 
selling point for windows 8-though the firm has 
compared some of its other products favourably 
with Google's on that conut before. Brendon Lynch, 
Mirosoft’s chief privacy officer, bloggde:”we 
believe consumers should have more control.” 
Could it really be that simple?`}
                        </Text>
                        <View style={{marginTop:10*s}}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. It is suggested in paragraph 1 that 
“behavioural” ads help advertisers to:`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] ease competition among themselves`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] lower their operational costs`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] avoid complaints from consumers`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] provide better online services`}
                            </Text>
                        </View>
                        <View style={{marginTop:10*s}}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. “The industry” (Line 6,Para.3) refers to:`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] online advertisers`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] e-commerce conductors`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] digital information analysis`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] internet browser developers`}
                            </Text>
                        </View>
                        <View style={{marginTop:10*s}}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. Bob Liodice holds that setting DNT as a default`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] many cut the number of junk ads`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] fails to affect the ad industry`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] will not benefit consumers`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] goes against human nature`}
                            </Text>
                        </View>
                        <View style={{marginTop:10*s}}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. which of the following is ture according to Paragraph.6?`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] DNT may not serve its intended purpose`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] Advertisers are willing to implement DNT`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] DNT is losing its popularity among consumers`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] Advertisers are obliged to offer behavioral ads`}
                            </Text>
                        </View>
                        <View style={{marginTop:10*s}}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. The author’s attitude towards what Brendon Lynch said in his blog is one of:`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] indulgence`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] understanding`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] appreciaction`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] skepticism`}
                            </Text>
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