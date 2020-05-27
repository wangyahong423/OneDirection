import React, { Component } from 'react'
import { ScrollView, AsyncStorage, Dimensions, DeviceEventEmitter } from 'react-native';
import { List, InputItem, Picker, Provider, Button } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choosecollege extends Component {
    constructor(props) {
        super(props)
        this.state = {
            college: '',
            username: ''
        },
            this.pickerData = [
                {
                    label: '马克思主义学院',
                    value: '马克思主义学院'
                },
                {
                    label: '历史文化学院',
                    value: '历史文化学院'
                },
                {
                    label: '美术与设计学院',
                    value: '美术与设计学院'
                },
                {
                    label: '法政与公共管理学院',
                    value: '法政与公共管理学院'
                },
                {
                    label: '化学与材料科学学院',
                    value: '化学与材料科学学院'
                },
                {
                    label: '体育学院',
                    value: '体育学院'
                },
                {
                    label: '国际文化交流学院',
                    value: '国际文化交流学院'
                },
                {
                    label: '初等教育系',
                    value: '初等教育系'
                },
                {
                    label: '软件学院',
                    value: '软件学院'
                },
                {
                    label: '教育学院',
                    value: '教育学院'
                },
                {
                    label: '外国语学院',
                    value: '外国语学院'
                },
                {
                    label: '新闻传播学院',
                    value: '新闻传播学院'
                },
                {
                    label: '数学科学学院(田家炳教育书院)',
                    value: '数学科学学院(田家炳教育书院)'
                },
                {
                    label: '生命科学学院',
                    value: '生命科学学院'
                },
                {
                    label: '计算机与网络空间安全学院、计算机教学部',
                    value: '计算机与网络空间安全学院、计算机教学部'
                },
                {
                    label: '教师教育学院',
                    value: '教师教育学院'
                },
                {
                    label: '大学外语教学部',
                    value: '大学外语教学部'
                },
                {
                    label: '汇华学院',
                    value: '汇华学院'
                },
                {
                    label: '文学院',
                    value: '文学院'
                },
                {
                    label: '音乐学院',
                    value: '音乐学院'
                },
                {
                    label: '商学院',
                    value: '商学院'
                },
                {
                    label: '物理学院',
                    value: '物理学院'
                },
                {
                    label: '资源与环境科学学院',
                    value: '资源与环境科学学院'
                },
                {
                    label: '职业技术学院、中燃工学院',
                    value: '职业技术学院、中燃工学院'
                },
                {
                    label: '学前教育学院（旅游系）',
                    value: '学前教育学院（旅游系）'
                },
                {
                    label: '公共体育教学部',
                    value: '公共体育教学部'
                }
            ]
    }

    setData = (v) => {
        this.setState({
            college: v
        })
        AsyncStorage.setItem('college', v[0])
        Actions.pop()
        var param = v[0];
        DeviceEventEmitter.emit("refresh", param)
    }

    render() {
        return (
            <Provider>
                <ScrollView>
                    <Picker
                        data={this.pickerData}
                        cols={1}
                        mode="dropdown"
                        // itemStyle={{ height: 50 * s, alignItems: 'center', justifyContent: 'center' }}
                        // indicatorStyle={{ height: 100 * s, alignItems: 'center', justifyContent: 'center' }}
                        value={Array.from(this.state.college)}
                        onChange={this.setData}
                    >
                        <List.Item arrow="horizontal">选择学院</List.Item>
                    </Picker>
                </ScrollView>
            </Provider>
        )
    }
}
