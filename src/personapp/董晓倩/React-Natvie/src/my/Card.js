import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { "key": null, "path": 'http://139.155.44.190:3005/card/null', "color": false },
                { "key": 'b1.png', "path": 'http://139.155.44.190:3005/card/b1.png', "color": false },
                { "key": 'b2.png', "path": 'http://139.155.44.190:3005/card/b2.png', "color": false },
                { "key": 'b3.png', "path": 'http://139.155.44.190:3005/card/b3.png', "color": false },
                { "key": 'b5.png', "path": 'http://139.155.44.190:3005/card/b5.png', "color": false },
                { "key": 'b8.png', "path": 'http://139.155.44.190:3005/card/b8.png', "color": false },
                { "key": 'b9.png', "path": 'http://139.155.44.190:3005/card/b9.png', "color": false },
                { "key": 'b10.png', "path": 'http://139.155.44.190:3005/card/b10.png', "color": false },
                { "key": 'b11.png', "path": 'http://139.155.44.190:3005/card/b11.png', "color": false },
                { "key": 'b12.png', "path": 'http://139.155.44.190:3005/card/b12.png', "color": false },
                { "key": 'b13.png', "path": 'http://139.155.44.190:3005/card/b13.png', "color": false },
                { "key": 'b14.png', "path": 'http://139.155.44.190:3005/card/b14.png', "color": false },
                { "key": 'b15.png', "path": 'http://139.155.44.190:3005/card/b15.png', "color": false },
                { "key": 'b17.png', "path": 'http://139.155.44.190:3005/card/b17.png', "color": false },
                { "key": 'b18.png', "path": 'http://139.155.44.190:3005/card/b18.png', "color": false },
                { "key": 'b19.png', "path": 'http://139.155.44.190:3005/card/b19.png', "color": false },
                { "key": 'b20.png', "path": 'http://139.155.44.190:3005/card/b20.png', "color": false },
                { "key": 'b21.png', "path": 'http://139.155.44.190:3005/card/b21.png', "color": false },
                { "key": 'b25.png', "path": 'http://139.155.44.190:3005/card/b25.png', "color": false },
                { "key": 'b24.png', "path": 'http://139.155.44.190:3005/card/b24.png', "color": false },
                { "key": 'b26.png', "path": 'http://139.155.44.190:3005/card/b26.png', "color": false },
                { "key": 'b27.png', "path": 'http://139.155.44.190:3005/card/b27.png', "color": false },
                { "key": 'b28.png', "path": 'http://139.155.44.190:3005/card/b28.png', "color": false },
                { "key": 'b29.png', "path": 'http://139.155.44.190:3005/card/b29.png', "color": false },
                { "key": 'b30.png', "path": 'http://139.155.44.190:3005/card/b30.png', "color": false },
                { "key": 'b31.png', "path": 'http://139.155.44.190:3005/card/b31.png', "color": false },
            ],
            username: '',
            card: ''
        };
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
    }
    selected = (idx) => {
        var card = this.state.list[idx].key;
        console.log(card);
        var list = this.state.list;
        for (var i = 0; i < list.length; i++) {
            list[i].color = false;
        }
        list[idx].color = true;
        this.setState({
            card: card,
            list: list
        })
    }
    sure = () => {
        console.log("输出", this.state.card)
        let url = `http://139.155.44.190:3005/users/changeCard?name=${this.state.username}&card=${this.state.card}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                Actions.pop();
            })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView >
                    {
                        this.state.list.map((item, idx) => (
                            <TouchableOpacity onPress={this.selected.bind(this, (idx))} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#fff', marginTop: 5 * s }} >
                                <Image
                                    style={{ width: 200, height: 100 }}
                                    source={{ uri: item.path }}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>使用此卡片装扮 </Text>
                                    <View style={item.color ? { width: 10, height: 10, borderRadius: 5, borderColor: '#000', backgroundColor: 'red', borderWidth: 1 } : { width: 10, height: 10, borderRadius: 5, borderColor: '#000', borderWidth: 1 }}></View>
                                </View>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
                <View style={{
                    width: '100%',
                    height: 80 * s,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 40 * s,
                        borderRadius: 5 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                    }}
                        onPress={() => this.sure()}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 * s }}>立即设置</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
