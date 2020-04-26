import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    ScrollView,
    ToastAndroid
} from 'react-native';
export default class Word extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1,
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics?page=1' + '&limit=13')
            .then(res => res.json())
            .then(res => {
                this.setState({ tits: res.data });
            })
    }
    previousTitle = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            }, () => {
                fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=13')
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ tits: res.data });
                    })
            })
        }
        else {
            ToastAndroid.show('已经是第一张了', 1000);
        }
    }
    nextTitle = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=13')
                .then(res => res.json())
                .then(res => {
                    this.setState({ tits: res.data });
                })
        })
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff',height: 600 }}>
                <ScrollView style={{ backgroundColor: '#ffffff' }}>
                    {
                        this.state.tits.map((item) => (
                            <View style={{ flexDirection: "row", marginTop: 10 }}>
                                <Text numberOfLines={1} style={{ width: 280, color: 'grey', fontSize: 17 }}>{item.title}</Text>
                                <Text style={{ marginLeft: 20, color: 'grey', fontSize: 17 }}>{(item.create_at).substr(0, 10)}</Text>
                                <Text style={{ marginLeft: 20, color: 'grey', fontSize: 17 }}>{item.reply_count % 2 == 1 ? <Text>已回复</Text> : <Text style={{ color: 'red' }}>待回复</Text>}</Text>
                            </View>



                        ))
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 500, left: 100, width: '100%', height: 40}} >
                    <View>
                        <Button title="上一页" onPress={this.previousTitle} />
                    </View>
                    <Text style={{ marginLeft: 50, marginTop: 8 }}>第{this.state.page}页</Text>
                    <View style={{ marginLeft: 50 }}>
                        <Button style={{ marginLeft: 100 }} title="下一页" onPress={this.nextTitle} />
                    </View>
                </View>
            </View>
        )
    }
}

