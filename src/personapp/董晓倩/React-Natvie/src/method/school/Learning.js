import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
const { width } = Dimensions.get('window');
const s = width / 460;

export default class Learning extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View>
                        <Text style={{ width: 35 * s, height: '91%', backgroundColor: 'rgb(148,122,107)', color: '#fff', paddingLeft: 10 * s, paddingRight: 10 * s, lineHeight: 25 * s, marginTop: '2%' }}> 哲学社会科学版 </Text>
                    </View>
                    <View style={{ marginLeft: '1%' }}>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>AMI综合评价（A刊）核心期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>RCCSE中国核心学术期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>中国期刊方阵入选期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>全国百强社会科学学报</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>中国人民大学“复印报刊资料重要转载来源期刊”</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>联系电话：0311-80786363</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>邮政编码：050024</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>电子邮箱：shekeb@mail.hebtu.edu.cn</Text>
                    </View>
                    <View style={{ marginLeft: '1%' }}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=2').catch(err => console.error('An error occurred', err));
                        }}>
                            <Image style={{ height: 220 * s, width: 150 }} source={require('../../../assets/gonglve/news1.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=2').catch(err => console.error('An error occurred', err));
                        }}>
                            <Text style={{ color: 'blue',marginLeft:50 }}>点击进入</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View style={[styles.box,{marginTop:10}]}>
                    <View>
                        <Text style={{ width: 35 * s, height: '91%', backgroundColor: 'rgb(148,122,107)', color: '#fff', paddingLeft: 10 * s, paddingRight: 10 * s, lineHeight: 31 * s, marginTop: '2%' }}> 自然科学版 </Text>
                    </View>
                    <View style={{ marginLeft: '1%' }}>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>中国科技核心期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>RCCSE中国核心学术期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>中国期刊方阵入选期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>全国高校优秀科技期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>华北优秀期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>河北省优秀科技期刊</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>联系电话：0311-80786364</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>邮政编码：050024</Text>
                        <Text style={{ lineHeight: 25 * s, fontSize: 12 }}>电子邮箱：ziranb@mail.hebtu.edu.cn</Text>
                    </View>
                    <View style={{ marginLeft: '1%' }}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=1').catch(err => console.error('An error occurred', err));
                        }}>
                            <Image style={{ height: 220 * s, width: 150 }} source={require('../../../assets/gonglve/news2.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=1').catch(err => console.error('An error occurred', err));
                        }}>
                            <Text style={{ color: 'blue',marginLeft:50 }}>点击进入</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                <View style={[styles.box,{marginTop:10,marginBottom:10}]}>
                    <View>
                        <Text style={{ width: 35 * s, height: '91%', backgroundColor: 'rgb(148,122,107)', color: '#fff', paddingLeft: 10 * s, paddingRight: 10 * s, lineHeight: 31 * s, marginTop: '2%' }}> 教育科学版 </Text>
                    </View>
                    <View style={{ marginLeft: '1%' }}>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>教育部名栏入选期刊</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>全国中文核心期刊</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>AMI综合评价（A刊）核心期刊</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>CSSCI来源期刊（扩展版）</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>RCCSE中国核心学术期刊</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>全国高校百强科技期刊</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>全国高校特色栏目社科学报</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>中国人民大学“复印报刊资料重要转载来源期刊”</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>联系电话：0311-80786366</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>邮政编码：050024</Text>
                        <Text style={{ lineHeight: 20 * s, fontSize: 12 }}>电子邮箱：jiaoyub@hebtu.edu.cn</Text>
                    </View>
                    <View style={{ marginLeft: '1%' }}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=3').catch(err => console.error('An error occurred', err));
                        }}>
                            <Image style={{ height: 220 * s, width: 150 }} source={require('../../../assets/gonglve/news3.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL('http://xuebao.hebtu.edu.cn/andamagazine/frontArticle.do?bid=3').catch(err => console.error('An error occurred', err));
                        }}>
                            <Text style={{ color: 'blue',marginLeft:50 }}>点击进入</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </ScrollView>

        )
    }
}
let styles = StyleSheet.create({
    box: {
        height: 250 * s,
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    }
})