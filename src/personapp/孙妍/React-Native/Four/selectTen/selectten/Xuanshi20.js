import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Xuanshi20 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1. 【答案】　社交网站能让用户在他们的窗口中“静音(屏弊)”来自其他用户的消息，而不让他们知道，从而避免取消关注的(36)尴尬，或者是容忍你在现实生活中(37)极爱说话的朋友。推特推出了新的(38)功能，以让用户能更好地处理他们收到的洪水般泛滥的信息。用户现在可以使那些他们关注的人“静音”，从他们自己的窗口上删除这些人的微博及转发。那些被禁言的人们不会知道他(她)已(39)被静音。这是一种隐秘的方法，可以在不让某些用户知道的情况下少看一些来自他们的内容。推特在一篇博客文章中说道，一个人可以很轻易地随时被静音或者是(40)被取消静音。',
                
                content3: '2. 【答案】该公司指出：“静音让你能够将某个用户的内容从你推特体验的关键部分删掉，从而使你可以更好地(41)掌控你在推特上看到的内容。”虽然推特在最近几个星期里一直在对这项功能进行试验，该公司宣布静音这项功能将会(42)适用于该公司iOS系统和安卓系统的所有用户，以及Twitter.Com网站。像TweetDeck这样的其他一些推特应用程序已经拥有了静音这项功能。',
                
                content5: '3. 【答案】这项功能是推特公司为了使它的服务可以适用于更广大的人群推出的(43)总战略中的一部分。在首次公开发行成功之后，在最近几个月里推特公司股票大跌，原因是投资商对该社交网络吸纳新用户的(44)能力产生了怀疑。公司的CE0迪克•科斯特罗(45)郑重宣布，今年推特会针对其界面作出变动，以使其更易理解和操作。作为该努力中的一部分，公司在四月份对用户信息页面进行了彻底的改动。 ',
              
                
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
                            &emsp;&emsp;{`The social network will let users “mute” messages from other users on their timelines without the muted person’s knowledge，thereby avoiding the(36)__________process of having to unfollow(取消关注)，or put up with，your(37)__________talkative IRL friends.Twitter rolled out new(38)__________to let users better manage the deluge(泛滥)of tweets they receive.Users can now“mute”people they follow,removing those people’s tweets and retweets from their own timelines.The muted person won’t know that he or she has been(39)__________.It’s a stealthy way to read less content from certain users without having to unfollow them.A person can easily be muted or(40)__________at any time，Twitter said in a blog post.“Mute gives you even more(41)__________over the content you see on Twitter by letting you remove a user’s content from key parts of your Twitter experience，”the company said.Though Twitter had been experimenting with the feature in recent weeks，it announced that muting will be(42)__________to all users of the company’s iOS and Android apps，as well as 　　the Twitter.com website.Some other Twitter applications，like TweetDeck，already allowed muting.The feature is part of Twitter’s(43)__________strategy to make its service more accessible to a wider range of people.Following a successful initial public offerin9，Twitter’s stock has tumbled in recent months as investors worry about the social network’s(44)__________to attract new users.CEO Dick Costolo(45)__________that Twitter would make changes to its interface this year to make it easier to understand and manage.The company overhauled(彻底检修)user profile pages in April as part of this effort.`}
                        </Text> 
                        <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize: 16 * s,marginLeft:20*s }}>
                            &emsp;&emsp;{`A.silenced

　　B.awkward

　　C.unmvted

　　D.feature

　　E.embarrassment

　　F.unfollowed

　　G.control

　　H.extremely`}
                        </Text> 
                        <Text style={{ fontSize: 16 * s ,marginLeft:50*s}}>
                            &emsp;&emsp;{`I.overall

　　J.vowed

　　K.generally

　　L.ability

　　M.accepted

　　N.available

　　O.characters`}
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