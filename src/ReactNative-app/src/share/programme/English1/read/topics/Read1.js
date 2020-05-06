import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
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
                content1: '1. 答案【B】 lower their operational costs',
                content2: '解析：',
                content3: '事实细节题。根据题干，首先定位到首段。这段的大意是广告经费的一半都浪费掉了,但是通过“behavioralads”可以追踪购买者的搜索习惯和评价，使得广告更有针对性，从而降低预算成本，也就是“this fraction can be muchreduced”。A、 B和C选项文中并未提及，属于无中生有。',
                content4:'2. 答案【D】 internet browser developers',
                content5:'解析：',
                content6:"词义句意题。theindustry在语篇中是指代前面的出现内容,而前面出现的Microsoft Internet Explores Apple' s Safair和Google' s Chrome都是D选项中中的“Internet browser developers 。B 和C选项文中并未提及，属于无中生有。A选项并非本段中谈论的核心。",
                content7:'3. 答案【C】 will not benefit consumers',
                content8:'解析：',
                content9:'推理判断题。解题关键在于“.. consumers will be worse off if theindustry cannot collect information about their preferen2es 也就是说，当浏览器开发者不能收集消费者网上购物倾向时，消费并不能从中受益。B、C和D选项文中并未提及，属于无中生有。',
                content10:'4. 答案【A】 DNT may not serve its intended purpose',
                content11:'解析：',
                content12:'推理判断题。根据题干，可以定位到第六段。解题关键在于理解本段的行文逻辑，即“unable to tell whether or whether, some may ignore”。 也就是说“由于不能辨别有些主体是真正反对行为广告,也不能辨别它们支持微软的做法，有些人甚至忽视DNT,继续先前的做法。”可此可见，B项符合题意。A、C和D选项内容在本段中均没有提及。',
                content13:'5. 答案【D】 skepticism',
                content14:'解析：',
                content15:'观点态度题。根据题干，可以定位到文章最后一段倒数第二句，Brendon Lynch的博客中评论道:“ 我们认为消费者应该有更大的自主权(或掌控权)”。解题关键在于最后一句“Could it be really that simple?, 从中可明显看出作者的怀疑态度。A项是“理解”，B项是“赞成”，D选项是“纵容”的意思。'
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
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content3}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content4}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content5}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content6}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content7}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content8}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content9}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content10}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content11}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content12}</Text>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content13}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content14}</Text>
                <Text style={[{ marginTop: 5 * s, marginLeft: 30 * s, marginRight: 30 * s }, styles.contentText]}>{section.content15}</Text>
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
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. It is suggested in paragraph 1 that 
“behavioural” ads help advertisers to:`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A]  ease competition among themselves`}
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
                        <View style={{ marginTop: 10 * s }}>
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
                        <View style={{ marginTop: 10 * s }}>
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
                        <View style={{ marginTop: 10 * s }}>
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
                        <View style={{ marginTop: 10 * s }}>
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