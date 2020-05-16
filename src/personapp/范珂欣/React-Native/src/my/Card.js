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
        let url = `http://139.155.44.190:3005/users/changeCard?name=${this.state.username}&card=${this.state.card}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {

                var value = { card: this.state.card };
                AsyncStorage.setItem('card', JSON.stringify(value));

                Actions.pop();
            })
    }
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#fff' }}>
                <ScrollView >
                    {
                        this.state.list.map((item, idx) => (
                            <TouchableOpacity onPress={this.selected.bind(this, (idx))} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }} >
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
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: 300 * s,
                        height: 40 * s,
                        borderRadius: 15 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#37376F',
                        marginBottom: 10 * s,
                        position: 'relative',
                        bottom: 5
                    }}
                        onPress={() => this.sure()}
                    >
                        <Text style={{ color: '#fff', fontSize: 20 * s }}>确定</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}
