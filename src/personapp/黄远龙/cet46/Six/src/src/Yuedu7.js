import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu7 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[B][定位]根据题干中的happiness，satisfaction，fulfillment and joy查找到首段最后两句。',
                content3: '2.[B][定位]根据题干中的unshakable，self-confidence等查找到第1个小标题Take Some Time to Determine Your Ideal Lifestyle部分的第2段最后一句。',
                content5: '3.[D][定位]根据题干中的financially independent查找到第2个小标题Momentum Is the Key to Long-Term Suecess部分的第3段开头两句。',
                content7: '4.[A][定位]根据题干中的objectives, only thing，prevent...going等查找到第2个小标题Momentum Is the Key to Long-Term Success部分的末段末句。',
                content9: '5.[C][定位]根据题干中的deserve good things，feelings等查找到第3个小标题What Beliefs Might You Have that Are Holding You Back?部分的首段第1句和第3句。',
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
                            &emsp;&emsp;{`The starting point to change your beliefs is to get up the courage to question them seriously. Question your basic premises.Check your assumptions.Ask yourself, "What assumptions am I making about myself or my situation that might not be true?"`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`It's a fact that we fall in love with our excuses and our assumptions.We fall in love with our reasons for not moving ahead.Even if someone comes along and challenges those reasons,even if someone tells you that you have the capacity to accomplish marvelous things,you will argue with him.If someone tells you that you can do far better than you're doing right now, you will come up with reasons to dispute this person's greater belief in your potential.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Believing in Yourself`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Your beliefs about reality are based on a thousand influences,many of which began even before you were aware of what was going on.You have beliefs that are deep and beliefs that are shallow.Deep beliefs,with regard to your religion or your political party or your family,or especially yourself,are very hand to change.Shallow beliefs are easily changed.And many of your beliefs are in fact very shallow.They have nosubstance to them whatsoever.If you challenge them hard enough.you'll find that they are made of tissue paper.They'll simply blow away.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`You can always tell what your true values and beliefs are by looking at your actions.It isntt what you say or wish or hope or intend that demonstrates what you really believe.It's only what you do.It's only the behaviors that you engage in.It's only the actions that you choose to undertake.Your values and beliefs are always expressed in your actions and behaviors.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Once you've ciearly decided on the person you would like to become. you are on the path toward developing new beliefs.You then discipline yourself each day to behave exactly as you would if you were already thatperson.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`That simple technique. the "act as if" technique, is extraordinarily powerful.The more you act like the person you want to be, the more consistent your attitude will be with that person's.Your attitude will havethe back-flow effect of affecting your expectations.Positive expectations will have the back-flow effect of building beliefs that are consistent with them.And your beliefs will exert an influence on your values.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`People succeed not because they have remarkable characteristics or qualities.The most successful people are quite ordinary,just like you and me.Most of us start off poor and confused.We spend many years getting some sort of direction in our lives.But the turning point comes when we begin to believe that we have within us that divine spark that can lead us onward and upward to the accomplishment of anything that we really want in life.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1.The key to happiness. satisfaction,fulfillment and joy is______________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) having self-confidence
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) finding your own desire
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) enjoying every day in life
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) being devoted to your work
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2.An unshakable level of self-confidence enables you to___________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) make gradual progress
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) unlock your inner potential
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) set challenging but realistic goals
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) make plans to accomplish your goals
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3.To be financially independent, one should________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) use and invest money wisely
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) find a job right after graduation
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) move away from parents' home
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) pay off debts and have savings
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4.Once you set clear objectives for yourself, the only thing that can prevent you from going forward is________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) your own thinking
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) your shortcomings
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) your own financial situation
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) the pressure from your family
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5.When we feel that we don't deserve good things, we are being influenced by the feelings of_________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) guilt
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) modesty
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) inferiority
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) pessimism
                        </Text>
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