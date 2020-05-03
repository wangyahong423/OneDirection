import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');
const s = width / 460;
export default class Appear extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    componentDidMount() {


    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#ffffff',}}>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.one()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第一篇：大学专业选择 </Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.two()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第二篇：大学的生存</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 60*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.three()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第三篇：简化餐桌礼节</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.four()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第四篇：教育有方</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 80*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.five1()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第五篇：多样化</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 100*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readsix()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第六篇：学习计算机</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 60*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readseven()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第七篇：课余生活</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 80*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readeight()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第八篇：餐桌上的蜗牛</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readnine()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第九篇：美国大学生活</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readten()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十篇：写作</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 120*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readeleven()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十一篇：工程学专业</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 40*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readtwelve()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十二篇：英国托管协会</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 20*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readthirteen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十三篇：手语</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 95*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readfourteen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十四篇：如何写作</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 55*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readfifteen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十五篇：数学能力</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 55*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readsixteen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十六篇：青少年犯罪</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 35*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readseventeen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十七篇：美国婚姻</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 55*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readeighteen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十八篇：生活的不公正</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 15*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readnineteen()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第十九篇：美国婚姻</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 55*s, marginTop: 10*s }} />
                </View>
                <View style={{
                    height: 50*s, width: '100%', flexDirection: 'row', borderBottomColor: '#e8e8e8', borderLeftColor: '#ffffff',
                    borderTopColor: '#ffffff', borderRightColor: '#ffffff', borderWidth: 1,marginTop:10*s
                }}  >
                    <TouchableOpacity onPress={() => Actions.readtwenty()} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, marginLeft: 100*s, marginTop: 11*s }}>第二十篇：父亲形象</Text>
                    </TouchableOpacity>
                    <Icon name="edit" size={30} color="#5f6fcd" style={{ marginLeft: 55*s, marginTop: 10*s }} />
                </View>
            </ScrollView>
        )
    }
}

