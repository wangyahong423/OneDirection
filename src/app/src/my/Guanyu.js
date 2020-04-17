import React, { Component } from 'react'
import { View, Text,ScrollView } from 'react-native';
export default class Guanyu extends Component {
    render() {
        return (
            <ScrollView >
                <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 100, fontWeight: 'bold' }}>校园新生通</Text>
                <View style={{ height: 200, width: 300, backgroundColor: '#ffffff', marginLeft: 90, marginTop: 100,
                    borderBottomColor: 'gray', borderLeftColor: 'gray',
                    borderTopColor: 'gray', borderRightColor: 'gray', borderWidth:1}}>
                    <Text style={{marginLeft:70,fontSize:20,marginTop:25}}>团队:One Direction</Text>
                    <Text style={{marginLeft:40,fontSize:20,marginTop:10}}>微信公众号:One Dircetion</Text>
                    <Text style={{marginLeft:80,fontSize:20,marginTop:10}}>版本信息:1.0.1</Text>
                    <Text style={{marginLeft:45,fontSize:20,marginTop:10}}>意见联系:88888888888</Text>
                </View>
                <Text style={{textAlign:'center',fontSize:15,marginTop:250,color:'gray'}}>最终解释权归本APP开发团队所有</Text>
            </ScrollView>
        )
    }
}

