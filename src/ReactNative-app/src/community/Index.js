import React, { Component } from 'react';
import {StyleSheet, FlatList,
    Text,
    View,
    TouchableOpacity,
    Actions
} from 'react-native';
import PerExp from './PerExp';
import PerLearn from './PerLearn'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnOn: true,
            turnOff: false,
            myexp: false,//我的经验
            mylearn: true,//我的社区
            personlearn: false,//赞在社区
            personexp: false,//赞在经验
            mycollect: false//我的收藏
        }
    }
    class = (data) => {
        if (data == '我的社区') {
            console.log("我的社区");
            this.setState({
                myexp: false,//我的经验
                mylearn: true,//我的社区
                personlearn: false,//赞在社区
                personexp: false,//赞在经验
                mycollect: false//我的收藏
            })
            // Actions.perlearn();
        }
        else if (data == '我的经验') {
            console.log("我的经验");
            this.setState({
                myexp: true,//我的经验
                mylearn: false,//我的社区
                personlearn: false,//赞在社区
                personexp: false,//赞在经验
                mycollect: false//我的收藏
            })
        }
        else if (data == '我的收藏') {
            console.log("我的收藏");
            this.setState({
                myexp: false,//我的经验
                mylearn: false,//我的社区
                personlearn: false,//赞在社区
                personexp: false,//赞在经验
                mycollect: true//我的收藏
            })
        }
        else if (data == '赞在社区') {
            console.log("赞在社区");
            this.setState({
                myexp: false,//我的经验
                mylearn: false,//我的社区
                personlearn: true,//赞在社区
                personexp: false,//赞在经验
                mycollect: false//我的收藏
            })
        }
        else if (data == '赞在经验') {
            console.log("赞在经验");
            this.setState({
                myexp: false,//我的经验
                mylearn: false,//我的社区
                personlearn: false,//赞在社区
                personexp: true,//赞在经验
                mycollect: false//我的收藏
            })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <Text style={styles.title_text}>FlatList</Text>
                </View>
                <View style={styles.list}>
                    <FlatList
                        horizontal={true}
                        data={[
                            { key: '我的社区' },
                            { key: '我的经验' },
                            { key: '我的收藏' },
                            { key: '赞在社区' },
                            { key: '赞在经验' },
                        ]}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={this.class.bind(this, (item.key))}>
                                <Text style={styles.item}>{item.key}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                {
                    this.state.mylearn
                        ? <View><Text>我的社区{this.state.mylearn}</Text></View>
                        : null
                }
                {
                    this.state.myexp
                        ? <View><Text>我的经验{this.state.myexp}</Text></View>
                        : null
                }
                {
                    this.state.mycollect
                        ? <View><Text>我的收藏{this.state.mycollect}</Text></View>
                        : null
                }
                {
                    this.state.personlearn
                        ? <View><Text>赞在社区{this.state.personlearn}</Text></View>
                        : null
                }
                {
                    this.state.personexp
                        ? <View><Text>赞在经验{this.state.personexp}</Text></View>
                        : null
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    title_text: {
        fontSize: 20,
        color: 'white'
    },
    list: {
        paddingTop: 22,
        backgroundColor: "red"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});