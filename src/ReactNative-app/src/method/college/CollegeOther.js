import React, { Component } from 'react'
import { View, Text, ScrollView, ImageBackground, Dimensions, StyleSheet, AsyncStorage,TouchableOpacity } from 'react-native'
import { Accordion } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
const { width ,height} = Dimensions.get('window');
const s = width / 460;

export default class CollegeOther extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            todo: [],
            activeSections: [],
            college: '',
            username: '',
            isLoading:true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading:true
        })
        AsyncStorage.getItem('username')
            .then((value) => {
                let name = { username: value }
                this.setState({
                    username: name.username
                });
                let url1 = `http://139.155.44.190:3005/users/list`;
                let url2 = `http://139.155.44.190:3005/colleges/list`;
                fetch(url1)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({
                            data: res
                        })
                        this.state.data.map((item) => {
                            if (item.name === this.state.username) {
                                this.setState({
                                    college: item.college
                                })
                            }
                        })
                        fetch(url2)
                            .then(res => res.json())
                            .then((res) => {
                                this.setState({
                                    todo: res
                                })
                                var brr = []
                                this.state.todo.map((item) => {
                                    if (item.college != this.state.college) {
                                        brr.push(item);
                                    }
                                    this.setState({
                                        isLoading:false
                                    })
                                    this.setState({
                                        todo: brr
                                    })
                                })
                            })
                    })
            });

    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.college}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>&emsp;&emsp;{section.history}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 60 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>其他学院</Text>
                </View>
                <ScrollView>
                    <Accordion
                    style={{marginBottom:'6%'}}
                        sections={this.state.todo}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                    />
                </ScrollView>
                {
                    this.state.isLoading
                        ? <View
                            style={{
                                position: 'absolute',
                                top: 150 * s,
                                width: '100%'
                            }}
                        >
                            <View
                                style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>正在获取数据...</Text>
                            </View>
                        </View>
                        : null
                }
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: 50 * s,
        borderBottomWidth: 1 * s,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderBottomColor: '#C0C0C0',
        justifyContent: 'center',
        paddingLeft: 10 * s
    },
    headerText: {
        fontSize: 20
    },
    content: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
