import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, ScrollView, AsyncStorage, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CollegeHistory extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            todo: [],
            college: '',
            username: '',
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
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
                                    if (item.college === this.state.college) {
                                        brr.push(item);
                                    }
                                    this.setState({
                                        isLoading: false
                                    })
                                    this.setState({
                                        todo: brr
                                    })
                                })
                            })
                    })
            });
    }
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/20151221111650209.png')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.box}>
                    <ScrollView>
                        <View style={styles.block}>
                            {
                                this.state.todo.map((item) => (
                                    <View>
                                        <Text style={{ fontSize: 18 }}>&emsp;&emsp;{item.history}</Text>
                                    </View>
                                )
                                )}
                        </View>
                    </ScrollView>
                    {
                        this.state.isLoading
                            ? <View
                                style={{
                                    position: 'absolute',
                                    top: 80 * s,
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
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    block: {
        width: '80%',
        margin: '10%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        alignItems: 'center'
    }
});