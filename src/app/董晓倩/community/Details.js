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
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Details extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 20 * s }}>
                    <View style={styles.user}>
                        <Image style={styles.avatar} source={require('../../assets/gonglve/服务.jpg')} />
                        <View style={{ marginLeft: 30 * s }}>
                            <Text style={{ fontSize: 22 * s }}>服务</Text>
                            <Text>2020/4/20</Text>
                        </View>
                    </View>
                    <View style={styles.comment}>
                        <Text style={{ fontSize: 22 * s }}>
                            评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', height: 50, paddingTop: 10 * s, justifyContent: 'space-evenly', borderTopWidth: 1, borderTopColor: "#EFEFF4" }}>
                        <Icon name="comment" style={{ fontSize: 40 * s }}></Icon>
                        <Icon name="heart" style={{ fontSize: 40 * s }}></Icon>
                    </View>
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
        width: 530 * s,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        opacity: 0.6,
        // backgroundColor: 'blue'
    },
    user: {
        flexDirection: 'row',
        height: 100 * s,
        // backgroundColor: 'red',
        // justifyContent:'center',
        alignItems: 'center'
    },
    avatar: {
        marginLeft: 20 * s,
        height: 70 * s,
        width: 70 * s,
        backgroundColor: 'yellow'
    },
    comment: {
        // backgroundColor: 'yellow',
        marginLeft: 30 * s,
        marginRight: 30 * s,
        marginTop: 10 * s,
        marginBottom: 20 * s
    },
    add: {
        position: "absolute",
        bottom: 30,
        right: 40,
        height: 50,
        width: 50,
        // backgroundColor:'red',
        justifyContent: "center",
    }
})