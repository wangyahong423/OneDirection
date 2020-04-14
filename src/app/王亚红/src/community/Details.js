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
    constructor() {
        super();
        this.state = {
            data: [],
            user: [],
            brr: [],
            pic:[]

        }
    }

    componentDidMount() {
        let id = this.props.navigation.state.params.id;
        let url1 = `http://139.155.44.190:3005/community/list`;
        let url2 = `http://139.155.44.190:3005/users/list`;//所有用户列表

        fetch(url1)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
                var brr = []
                this.state.data.map((item) => {
                    if (item.id === id) {
                        brr.push(item);
                    }
                    this.setState({
                        data: brr
                    })
                })
                fetch(url2)
                    .then(res=>res.json())
                    .then((res)=>{
                        this.setState({user:res});
                        for(var i =0;i<res.length;i++){
                            res[i].pic = 'http://139.155.44.190:3005' + res[i].pic
                        }
                        var qrr=[]
                        var a=0;
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
    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.data.map((item, idx) => (
                        <View style={{ backgroundColor: '#fff', width: '100%', marginBottom: 20 * s }}>
                            <View style={styles.user}>
                                <Image style={styles.avatar} source={{ uri: this.state.pic[idx] }} />
                                <View style={{ marginLeft: 30 * s }}>
                                    <Text style={{ fontSize: 22 * s }}>{item.name}</Text>
                                    <Text>{item.time}</Text>
                                </View>
                            </View>
                            <View style={styles.comment}>
                                <Text style={{ fontSize: 22 * s }}>{item.content}</Text>
                            </View>
                            <View style={styles.bottom}>
                                <Icon name="comment" style={{ fontSize: 40 * s }}></Icon>
                                <Icon name="heart" style={{ fontSize: 40 * s }}></Icon>
                            </View>
                        </View>
                    ))
                }
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
    },
    user: {
        flexDirection: 'row',
        height: 100 * s,
        alignItems: 'center'
    },
    comment: {
        marginLeft: 30 * s,
        marginRight: 30 * s,
        marginTop: 10 * s,
        marginBottom: 20 * s
    },
    avatar: {
        marginLeft: 20 * s,
        height: 70 * s,
        width: 70 * s,
        backgroundColor: 'yellow'
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