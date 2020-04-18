import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    navigation
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Actions } from 'react-native-router-flux';

import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Community1 extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            user: [],
            pic: [],
        }
    }

    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/community/list`;
        let url2 = `http://139.155.44.190:3005/communitylike/list`;
        let url3 = `http://139.155.44.190:3005/users/getName`;//当前用户
        let url4 = `http://139.155.44.190:3005/users/list`;//所有用户列表

        fetch(url1)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res });
                fetch(url4)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({ user: res });
                        for (var i = 0; i < res.length; i++) {
                            res[i].pic = 'http://139.155.44.190:3005' + res[i].pic
                        }
                        var qrr = []
                        var a = 0;
                        for (var i = 0; i < this.state.data.length; i++) {
                            for (var j = 0; j < this.state.user.length; j++) {
                                if (this.state.data[i].name == this.state.user[j].name) {
                                    a = this.state.user[j].pic;
                                    break;
                                }
                                else {
                                    a = 0;
                                }
                            }
                            if (a != 0) {
                                qrr.push(a)//qrr是社区评论里面用户的头像
                            }
                        }
                        this.setState({
                            pic: qrr
                        })
                    })
            })

    }
    change = (e) => {
        this.setState({
            search: e
        })
    }
    search = (e) => {
        let url = `http://139.155.44.190:3005/community/select?content=${this.state.search}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                if (res.false) { }
                else {
                    res.forEach(item => {
                        for (var i = 0; i < this.state.pic.length; i++) {
                            if (item.name == this.state.pic[i].name) {
                                item.pic = 'http://139.155.44.190:3005' + this.state.pic[i].pic;
                                break;
                            }
                        }
                        for (var j = 0; j < this.state.like.length; j++) {
                            if (item.id == this.state.like[j].lid) {
                                item.like = true;
                                break;
                            }
                            else {
                                item.like = false;
                            }
                        }
                        var likeNum = 0;
                        for (var z = 0; z < this.state.likeNum.length; z++) {
                            if (item.id == this.state.likeNum[z].lid) {
                                likeNum++;
                            }
                        }
                        item.likeNum = likeNum;
                        var comNum = 0;
                        for (var z = 0; z < this.state.comNum.length; z++) {
                            if (item.id == this.state.comNum[z].lid) {
                                comNum++;
                            }
                        }
                        item.comNum = comNum;
                    });
                    this.setState({ list: res });
                }
            });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#EFEFF4' }}>
                {/* 搜索 */}
                <View
                    style={styles.hearder}>
                    <View
                        style={styles.search}>
                        <Icon
                            onPress={this.search}
                            style={{ fontSize: 28, marginLeft: 15 }} name='search' />
                        <TextInput
                            placeholder='搜索'
                            style={{ fontSize: 17, height: '100%' }}
                            onChangeText={this.change}
                        />
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* 评论 */}
                    <View>
                        {
                            this.state.data.map((item, idx) => (
                                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 10 * s }}>
                                    <View style={styles.user}>
                                        <Image style={styles.avatar} source={{ uri: this.state.pic[idx] }} />
                                        <View style={{ marginLeft: 30 * s }}>
                                            <Text style={{ fontSize: 18 * s }}>{item.name}</Text>
                                            <Text>{item.time}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.comment}>
                                        <Text
                                            numberOfLines={2}
                                            onPress={() => { this.props.navigation.navigate('details', { id: item.id }) }}
                                            style={{ fontSize: 18 * s }}>{item.content}</Text>
                                    </View>
                                    <View style={styles.bottom}>
                                        <Icon onPress={() => { this.props.navigation.navigate('details', { id: item.id }) }} name="comment" style={{ fontSize: 30 * s }}></Icon>
                                        <Icon
                                            onPress={() => this.change()}
                                            name="heart" style={{ fontSize: 30 * s }}>
                                        </Icon>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>

                {/* 添加评论 */}
                <View style={styles.add}>
                    <Icon
                        style={{ fontSize: 80 * s, color: '#37376F' }}
                        name="plus"
                        onPress={() => Actions.add()}
                    />
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    hearder: {
        height: 60,
        backgroundColor: '#EFEFF4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    search: {
        height: 40,
        width: 430 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.6,
    },
    user: {
        flexDirection: 'row',
        height: 90 * s,
        alignItems: 'center',
        // backgroundColor:'red'
    },
    avatar: {
        marginLeft: 20 * s,
        height: 50 * s,
        width: 50 * s,
        borderRadius:25*s
    },
    comment: {
        marginLeft: 30 * s,
        marginRight: 30 * s,
        marginBottom: 20 * s,
        // overflow: "hidden",
        // textOverflow: "ellipsis",
        // whiteSpace: "nowrap"
    },
    add: {
        position: "absolute",
        bottom: 30,
        right: 30,
        height: 80,
        width: 80,
        justifyContent: "center",
    },
    bottom: {
        flexDirection: 'row',
        height: 50,
        paddingTop: 10 * s,
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: "#EFEFF4"
    }
})