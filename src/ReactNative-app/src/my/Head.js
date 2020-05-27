import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, DeviceEventEmitter, ImageView } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Head extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { "key": null, "path": 'http://139.155.44.190:3005/head/null', "color": false },
                { "key": 't1.png', "path": 'http://139.155.44.190:3005/head/t1.png', "color": false },
                { "key": 't2.png', "path": 'http://139.155.44.190:3005/head/t2.png', "color": false },
                { "key": 't3.png', "path": 'http://139.155.44.190:3005/head/t3.png', "color": false },
                { "key": 't4.png', "path": 'http://139.155.44.190:3005/head/t4.png', "color": false },
                { "key": 't5.png', "path": 'http://139.155.44.190:3005/head/t5.png', "color": false },
                { "key": 't6.png', "path": 'http://139.155.44.190:3005/head/t6.png', "color": false },
                { "key": 't7.png', "path": 'http://139.155.44.190:3005/head/t7.png', "color": false },
                { "key": 't8.png', "path": 'http://139.155.44.190:3005/head/t8.png', "color": false }
            ],
            username: '',
            head: ''
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
        var head = this.state.list[idx].key;
        var list = this.state.list;
        for (var i = 0; i < list.length; i++) {
            list[i].color = false;
        }
        list[idx].color = true;
        this.setState({
            head: head,
            list: list
        })
    }
    sure = () => {
        let url = `http://139.155.44.190:3005/users/changeHead?name=${this.state.username}&head=${this.state.head}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                Actions.myPage();
                var param = 1;
                DeviceEventEmitter.emit('refresh', param);

            })
    }
    render() {
        return (
            <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        this.state.list.map((item, idx) => (
                            <TouchableOpacity onPress={this.selected.bind(this, (idx))} style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }} >
                                <Image
                                    style={{ width: 100, height: 100,borderRadius: 50,fontSize:50*s}}
                                    source={{ uri: item.path }}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>使用此头像框 </Text>
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
