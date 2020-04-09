import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

export default class CollegeOther extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/colleges/list/`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
            })
    }
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.data.map((item) => (
                            <View>
                                <Text>{item.college}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
