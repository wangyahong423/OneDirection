import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Learn extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            list: [],
            arr: [],
            color: [],
            yonghu: [],
            pic: [],
            username: '张三'
        };
    }
    getData = () => {
        AsyncStorage.getItem('user')
            .then((value) => {
                this.setState({
                    username: JSON.parse(value).username
                });
            });
    }
    componentDidMount() {
        var url1 = `http://139.155.44.190:3005/learn/list`;
        var url2 = `http://139.155.44.190:3005/learnlike/list`;
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ list: res });
                console.log(this.state.list);
            });
    }
    search = (e) => {
        console.log(e);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{
                    width: '100%',
                    height: 70 * s,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: 40 * s,
                        width: 357 * s,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#D7D3D3',
                        borderRadius: 28 * s

                    }}>
                        <Icon
                            style={{
                                marginLeft: 25 * s,
                                marginRight: 20 * s
                            }}
                            color='#fff' size={20} name='search' />
                        <TextInput
                            style={{
                                height: 50 * s,
                                width: "90%",
                                padding: 0,
                                fontSize: 15 * s
                            }}
                            placeholderTextColor='#fff'
                            placeholder="请输入您要搜索的关键字"
                            onChangeText={this.search}
                        />
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        {
                            this.state.list.map((item) => (
                                <View>
                                    <Text style={{ fontSize: 15, color: '#333333' }}>{item.name}</Text>

                                </View>
                            ))
                        }
                    </View>
                    
                </ScrollView>
                <TouchableOpacity style={{
                    width: 60 * s,
                    height: 60 * s,
                    borderRadius: 30 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#37376F',
                    position:'absolute',
                    bottom:0,
                    right:0
                }}
                    onPress={() => Actions.addlearn()}
                    >
                    <Text style={{ color: 'white', fontSize: 30 * s }}>+</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
