import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, Linking, TouchableOpacity, StyleSheet, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
const { width } = Dimensions.get('window');
const s = width / 460;

export default class Learning extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.box}>
                    <View>
                    <Text style={{width:35*s,height:'91%',backgroundColor:'rgb(148,122,107)',color:'#fff',paddingLeft:10*s,paddingRight:10*s,lineHeight:25*s,marginTop:'2%'}}> 哲学社会科学版 </Text>
                    </View>
                <Text>少时诵诗书所所所所所所所所所所</Text>
                </View>
            </ScrollView>

        )
    }
}
let styles = StyleSheet.create({
    box:{
        height:250*s,
        width:'100%',
        backgroundColor:'#fff',
    }
})