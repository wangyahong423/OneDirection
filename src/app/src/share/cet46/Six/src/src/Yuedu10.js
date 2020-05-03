import React, { Component } from 'react'
import { Text, View, ScrollView, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;
export default class Yuedu10 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '1.[A][定位]根据题干中的eBay overseers定位至首段末句。解析：在原文该句末明确提到，此处是唯一提到overseers的地方，其他选项均来提及，很明显，本题答案为A。',
                content3: '2.[B][定位]本题题干的题眼不明显，根据选项关键词bid，price，cost等在原文查找与“出价”有关的细节，由此定位至第1个小标题eBay Basics部分的第2段笫3句。解析：题干中的have the right to refuse the deal是原文该句doesn’t have to part with the item的近义改写，因此答案为B。',
                content5: '3.[D][定位]根据题干中的PayPal和BidPay定位至第1个小标题eBay Basics部分的第3段首句。解析：原文该句末的electronic payment services like PayPal and BidPay表明PayPal和BidPay属于electronic payment services，因此本题应选D。',
                content7: '4.[D][定位]根据题干中的buy or sell及选项定位至第1个小标题eBay Basics部分的末段。解析：本题的题干题眼不明显，应从选项入手，因为这些选项都是专有名词，在原文应该比较显眼。逐一查找选项就可发现只有D在第1个小标题下末段提及，其他选项均未提及。',
                content9: '5.[C][定位]根据题干中的server和microprocessors定位至第2个小标题eBay Infrastructure部分的第3段第3句。解析：本题除了可根据题干的题眼定位原文找到答案外，还可查找与选项数字相关的内容，这些数字集中在第2个小标题下第2、3段，这样，查找到C的时候就可发现这一组数字为正确答案。',
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
                            &emsp;&emsp;{`eBay is a global phenomenon-the world's largest garage sale, online shopping center, car dealer and auction site with 147 million registered users in 30 countries as of March 2005. You can find everything from encyclopedias to olives to snow boots to stereos to airplanes for sale. And if you stumble on it before the eBay overseers do, you might even find a human kidney or a virtual date.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`eBay is first and foremost. an online auction site. You can browse through categories like Antiques, Boats, Clothing & Accessories, Computers & Networking,Jewelry & Watches and Video Games. When you see something you like, you click on the auction title and view the details, including pictures, descriptions,payment options and shipping information.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`If you place a bid on an item,you enter a contractual agreement to buy it if you win the auction. All auctions have minimum starting bids, and some have a reserve price-a secret minimum amount the seller is willing to accept for the item. If the bidding doesn't reach the reserve price, the seller doesn't have to partwith the item. In addition to auctions, you can find tons of fixed-price items on eBay that make shopping there just like shopping at any other online marketplace. You see what you like, you buy it, you pay for it and you wait for it to arrive at your door.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`You can pay for an item on eBay using a variety of methods, including money order, cashier's check, cash, personal check and electronic payment services like PayPal and BidPay. It's up to each seller to decide which payment methods he'll accept.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Just as you can buy almost anything on eBay, you can sell almost anything, too. Using a simple listing process, you can put all of the junk in your basement up for sale to the highest bidder. When you sell an item on eBay,you pay listing fees and turn over a percentage of the final sale price to eBay.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Once you register (for free) with eBay, you can access all of your eBay buying and selling activities in asingle location called "My eBay."`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`A series of service disruptions in 1999 caused real problems for eBay's business. Over the course of threedays, overloaded servers intermittently shut down, meaning users couldn't check auctions, place bids or complete transactions during that period. Buyers, sellers and eBay were very unhappy, and a complete restructuring of eBay's technological architecture Followed.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In 1999, eBay was one massive database server and a few separate systems running the search function. In 2005, eBay is about 200 database servers and 20 search servers.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The architecture is a type of grid computing that allows for both error correction and growth. With the exception of the search function, everything about eBay can actually run on approximately 50 servers-Web servers,application servers and data-storage systems. Each server has between 6 and 12 microprocessors. These50 0r so servers run separately, but they talk to each other,so everybody knows if there is a problem somewhere. eBay can simply add servers to the grid as the need arises.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`While the majority of the site can run on 50 servers,eBay has four times that.The 200 servers are housed in sets of 50 in four locations,all in the United States. When you're using eBay, you may be talking to anyone of those locations at any time-they all store the same data. If one of the systems crashes. there are three others to pick up the slack.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`When you're on the eBay Web site and you click on a listing for a Persian rug, your computer talks to Web servers, which talk to application servers, which pull data from storage servers so you can find out what the latest bid price is and how much time is left in the auction. eBay has local partners in many countries who deliver eBay's static data to cut down on download time, and there are monitoring systems in 45 cities around the world that constantly scan for problems in the network.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In order to make buyers feel safer when making purchases on eBay, all tangible (有形的) items are automatically insured for $200. A recipe that was supposed to be delivered to you via e-mail is not considered a tangible item.But if you purchased a set of speakers that never arrived, and you go through the dispute process and eBay determines you were defrauded (欺骗)， you can get your money back up to $200.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Buyer fraud is typically less damaging than seller fraud. The most common type of fraud a buyer can commitis simply not paying for an item. Sellers can deal with non-paying bidders by filing an Unpaid Item dispute. eBay will then attempt to contact the buyer and get her to pay. If she does not respond to eBay's attempts after eight days, the seller is reimbursed(赔偿) for eBay's cut of the final sale price and can relistthe item for free. If the buyer does respond, the dispute can end in one of three ways:`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The buyer decides to pay, and everybody's happy.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The buyer and the seller decide together to abandon the transaction,the seller gets reimbursed for the final-value fee and relists the item for free,and everybody's happy.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`The seller decides noe to deal with the buyer, the buyer gets an unpaiditem strike against her, and the seller gets reimbursed for the final-value fee and relists the item for free.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`In the end, the damage to the seller is relatively small. Another type of buyer fraud occurs when a buyer sends false payment. In most cases,this is in the form of a bounced check, and the seller finds out about it before shipping the item. Bounced checks are as common on eBay as they are in the rest of the world, and many sellers choose not to accept personal checks for this reason.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`Seller fraud is what most people think about when they worry about using eBay. There are two main ways in which a buyer can be defrauded by a seller: The item the buyer purchased is dramatically different from how it was described in the listing; or the item simply never arrives.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`One thing to keep in mind when you think you've been defrauded is that miscommunication is common on eBay.For instance, if you didn't read every word of the auction listing for your item, you may have missed the part that said the seller would be out of town for three weeks and wouldn't be able to ship the item untilshe returned. This could be why you don't have your item and the seller isn't answering your e-mails. Also,e-mail is not the most straightforward form of communication. If your item hasn't arrived after two weeks, and you've e-mailed the seller but haven't heard back, it's a good idea to check your junk mail folder. Your seller may have sent a response e-mail that just never made it to your inbox. If there's nothing fromthe seller in your junk folder, you can request that eBay reveal your seller's phone number so you can give him a call and see what's going on.`}
                        </Text>
                        <Text style={{ fontSize: 16 * s }}>
                            &emsp;&emsp;{`If you don't get an answer to your phone call (or if your seller lives in another country and it would cost too much money to call), your next step is to start the dispute process. When a buyer believes he has been defrauded, he can file a complaint, and eBay will work to solve the problem. When you file a complaint in eBay's "Item Not Received or Significantly Not as Described" system,eBay will act as middleman between you and your seller to try to settle the dis pute. lf that fails, you can file a claim to get reimbursed for your purchase.`}
                        </Text>
                        <Text style={{fontSize:19,marginTop:5*s, fontStyle: 'italic',color:'green'}}>
                        阅读自测
                        </Text>
                        <Text style={{fontSize:16 * s ,marginTop:5*s}}>
                        1. Which of the following may be banned by eBay overseers?
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) Virtual dates.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) Any over-priced products.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) Priceless antiques.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) Rare animals for pets.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　2.Sellers have the right to refuse the deal if the offer is lower tban__________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) the minimum starting bid
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) the reserve price
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) the average market price
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) the wholesale cost
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　3.PayPal and BidPay are special names for_____________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) money orders
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) cashier's checks
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) personal checks
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) electronic payment services
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　4.On eBay, you buy or sell an item at______________________.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) My Account
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) My Market
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) My Store
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) My eBay
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　5.At present, each of eBay's server is equipped with_______________microprocessors.
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　A) 200
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　B) about 50
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　C) 6 to 12
                        </Text>
                        <Text style={{fontSize:15 * s }}>
                        　D) 20
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