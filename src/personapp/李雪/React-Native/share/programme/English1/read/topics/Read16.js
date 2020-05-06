import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Read16 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 答案【C】 check suspects’ phone contents without being authorized',
                content2: '解析：',
                content3: '这是一道事实细节题，根据题干关键词The Supreme Court回文定位到第一段的第二句话，“The Supreme Court will now consider whether police can search for the contents of a mobile phone without a warrant if the phone is on or around a person during an arrest”,一一比对选项，原文中的“police can search for the contents of a mobile phone without a warrant”与选项C “check suspects’ phone contents without being authorized”是同义替换，其他选项均是无关选项。',
                content4:'2. 答案【A】 disapproval',
                content5:'解析：',
                content6:"本题是观点态度题，考察作者的态度。根据题干关键词“California’s argument”，可以定位到文章第四段第一句“They should start by discarding California’s lame argument…”。由第四段第一句话中的“discard(抛弃)”和“lame(没有说服力的)”可以看出作者对于California’s argument 是不支持的态度，因此选A。",
                content7:'3. 答案【A】 getting into one’s residence',
                content8:'解析：',
                content9:'根据题干关键词the author believes和“exploring one’s phone contents is comparable to”可回文定位到文章第四段第三句“But exploring one’s smartphone is more like entering his or her home”，选项A语义与之一致，其中，getting into与entering对应，one’s residence与his or her home对应，故A选项为正确答案。',
                content10:'4. 答案【C】 citizens’ privacy is not effectively protected',
                content11:'解析：',
                content12:'根据题干信息In paragraphs 5and 6定位第5段第一句话“Americans should take steps to protect their digital privacy.及第6段最后一句话，...and they could take reasonable measures to.....，可推知作者的顾虑，因此答案为C.',
                content13:'5. 答案【A】 the Constitution should be implemented flexibly',
                content14:'解析：',
                content15:'这是一道例证题，根据题干关键词Orin Kerr可以回文定位到文章最后一段。作者引用Orin Kerr这个人的比较是为了说明相关的论点。分析最后一段结构可知，最后一段的第三句和第四句都是在阐述该例子本身，所以相关论点应该往前面找，即是第二句话，“New，disruptive technology sometimes demands novel applications of the Constitution’s protection”,选项A与之同义替换，其中，be implemented和applications对应，novel和flexibly对应。'
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
                            &emsp;&emsp;{`Just how much does the Constitution protect your digital data? The Supreme Court will now consider whether police can search the contents of a mobile phone without a warrant if the phone is on or around a person during an arrest.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`California has asked the justices to refrain from a sweeping ruling particularly one that upsets the old assumption that authorities may search through the possessions of suspects at the time of their arrest. It is hard, the state argues, for judges to assess the implications of new and rapidly changing technologies.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The court would be recklessly modest if it followed California’s advice. Enough of the implications are discernable, even obvious, so that the justices can and should provide updated guidelines to police, lawyers and defendants.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`They should start by discarding California’s lame argument that exploring the contents of a smart phone — a vast storehouse of digital information — is similar to, say, rifling through a suspect’s purse. The court has ruled that police don’t violate the Fourth Amendment when they sift through the wallet or pocketbook of an arrestee without a warrant. But exploring one’s smart phone is more like entering his or her home. A smart phone may contain an arrestee’s reading history, financial history, medical history and comprehensive records of recent correspondence. The development of “cloud computing,” meanwhile, has made that exploration so much the easier.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Americans should take steps to protect their digital privacy. But keeping sensitive information on these devices is increasingly a requirement of normal life. Citizens still have a right to expect private documents to remain private and protected by the Constitution’s prohibition on unreasonable searches.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`As so often is the case, stating that principle doesn’t ease the challenge of line-drawing. In many cases, it would not be overly onerous for authorities to obtain a warrant to search through phone contents. They could still invalidate Fourth Amendment protections when facing severe, urgent circumstances, and they could take reasonable measures to ensure that phone data are not erased or altered while a warrant is pending. The court, though, may want to allow room for police to cite situations where they are entitled to more freedom.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`But the justices should not swallow California’s argument whole. New, disruptive technology sometimes demands novel applications of the Constitution’s protections. Orin Kerr, a law professor, compares the explosion and accessibility of digital information in the 21st century with the establishment of automobile use as a virtual necessity of life in the 20th: The justices had to specify novel rules for the new personal domain of the passenger car then; they must sort out how the Fourth Amendment applies to digital information now.`}
                        </Text>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`1. The Supreme Court will work out whether, during an arrest, it is legitimate to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] prevent suspects from deleting their phone contents.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] search for suspects’ mobile phones without a warrant.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] check suspects’ phone contents without being authorized.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] prohibit suspects from using their mobile phones.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`2. The author’s attitude toward California’s argument is one of`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] disapproval.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] indifference.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] tolerance.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] cautiousness.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`3. The author believes that exploring one’s phone contents is comparable to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] getting into one’s residence.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] handling one’s historical records.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] scanning one’s correspondences.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] going through one’s wallet.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`4. The author believes that exploring one’s phone contents is comparable to`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] principles are hard to be clearly expressed.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] the court is giving police less room for action.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] citizens’ privacy is not effectively protected.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] phones are used to store sensitive information.`}
                            </Text>
                        </View>
                        <View style={{ marginTop: 10 * s }}>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`5. Orin Kerr’s comparison is quoted to indicate that`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[A] the Constitution should be implemented flexibly.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[B] new technology requires reinterpretation of the Constitution.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[C] California’s argument violates principles of the Constitution.`}
                            </Text>
                            <Text style={{ fontSize: 16 * s }}>
                                &emsp;&emsp;{`[D] principles of the Constitution should never be altered`}
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