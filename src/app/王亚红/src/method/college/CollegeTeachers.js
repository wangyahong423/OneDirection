import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default class CollegeTeachers extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            college:'教育学院'
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/leaders/list?college=${this.state.college}`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
                var brr = []
                this.state.data.map((item) => {
                    if (item.college === this.state.college) {
                        brr.push(item);
                    }
                    this.setState({
                        data: brr
                    })
                })
            })
    }
    render() {
        return (
            <ImageBackground
                source={require('../../../assets/gonglve/20151221111650209.jpg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.box}>
                    <ScrollView>
                        <View style={styles.block}>
                            {
                                this.state.data.map((item) => (
                                    <View>
                                        <Text style={{fontSize:18}}>{item.job}</Text>
                                        <Text style={{fontSize:18}}>{item.name}</Text>
                                        <Text style={{fontSize:18}}>{item.tel}</Text>
                                        <Text style={{fontSize:18}}>{item.email}</Text>
                                    </View>
                                )
                                )}
                        </View>
                    </ScrollView>
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