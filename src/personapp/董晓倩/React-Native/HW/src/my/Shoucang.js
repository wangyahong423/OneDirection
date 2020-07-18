import React, { Component } from 'react'
import { View, Text, AsyncStorage, ScrollView } from 'react-native';
import { Icon } from '@ant-design/react-native';
export default class Shoucang extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            username: ''
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/collect/list`;
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    data: res
                })
                var arr = [];
                this.state.data.map((item) => {
                    if (item.name == this.state.username) {
                        arr.push(item);
                    }
                    this.setState({
                        data: arr
                    })
                })
            })
    }
    delFile = (filepath) => {
        let url1 = `http://139.155.44.190:3005/collect/delete?filepath=${filepath}&name=${this.state.username}`;
        fetch(url1)
            .then(res => res.json())
            .then((res) => {
            })
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item) => {
                        <View>
                            <Icon name="file-o" size={28} color="#25bb22" style={{ marginLeft: 30, marginTop: 10 }} />
                            <Text>{item.filepath}</Text>
                            <View style={{ position: 'absolute', top: 10, left: 430 }}>
                                <Text style={{ color: 'red', fontSize: 20 }} onPress={this.delFile.bind(this, (item.filepath))}>×</Text>
                            </View>
                        </View>
                    })
                }
            </ScrollView>
        )
    }
}

