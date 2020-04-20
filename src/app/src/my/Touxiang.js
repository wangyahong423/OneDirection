import React, { Component } from 'react'
import { View, Text, Image,  AsyncStorage, ScrollView,  TouchableOpacity,DeviceEventEmitter } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Touxiang extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pic: '/images/6.jpg',

        }
    }
    componentDidMount() {
        AsyncStorage.getItem('username')
            .then((res) => {
                let name = { username: res }
                this.setState({
                    username: name.username
                })
            });
    }
    imgChange = () => {//提交
        let url = `http://139.155.44.190:3005/users/change?name=${this.state.username}&pic=${this.state.pic}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                Actions.myPage();
            })
        var param = 1;
        DeviceEventEmitter.emit('freshone', param);
    }
    selectImg=(text)=>{//获取
        this.setState({
            pic:text
        })
    }
    
    render() {
        return (
            <ScrollView >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/1.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/1.jpg' }} style={{ width: 95, height: 95 }}  /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/2.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/2.jpg' }} style={{ width: 95, height: 95 }}   /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/3.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/3.jpg' }} style={{ width: 95, height: 95 }}  /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/4.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/4.jpg' }} style={{ width: 95, height: 95 }}  /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/5.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/5.jpg' }} style={{ width: 95, height: 95 }} /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/6.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/6.jpg' }} style={{ width: 95, height: 95 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/7.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/7.jpg' }} style={{ width: 95, height: 95 }}  /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/8.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/8.jpg' }} style={{ width: 95, height: 95 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/9.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/9.jpg' }} style={{ width: 95, height: 95 }} /></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/10.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/10.jpg' }} style={{ width: 95, height: 95 }}  /></TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/11.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/11.jpg' }} style={{ width: 95, height: 95 }}/></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/12.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/12.jpg' }} style={{ width: 95, height: 95 }}/></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/13.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/13.jpg' }} style={{ width: 95, height: 95 }}/></TouchableOpacity>
                    <TouchableOpacity onPress={this.selectImg.bind(this, '/images/14.jpg')}><Image source={{ uri: 'http://139.155.44.190:3005/images/14.jpg' }} style={{ width: 95, height: 95 }}/></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.imgChange} style={{width:100,height:50,backgroundColor: '#37376F',marginTop:40,marginLeft:190}}>
                    <Text style={{ color:'#ffffff',textAlign:'center',fontSize:20 ,marginTop:10}}> 确定</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

