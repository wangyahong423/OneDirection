import React, { Component } from 'react'
import { Text, View, ScrollView, SectionList, Dimensions, Animated, ImageBackground, TouchableOpacity, StyleSheet, } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class FamousTeachers extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: height }} source={require('../../../assets/gonglve/beijing.jpg')}>
                <View style={{ width: width, height: 70 * s, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ position: "absolute", position: "absolute", left: 10 * s, }}>
                        <Icon name="reply" style={{ fontSize: 35 * s }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 * s }}>教学名师</Text>
                </View>
                <SectionList
                    renderItem={({ item, index, section }) => <Text style={styles.txt} key={index}>{item}</Text>}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.title}>{title}</Text>
                    )}
                    sections={[
                        { title: "国家级教学名师", data: ["路    紫"] },
                        { title: "国家“万人计划”教学名师", data: ["段相林"] },
                        { title: "河北省高等学校教学名师", data: ["段相林     路    紫     戴建兵     鲁忠义     李正栓     葛京凤     刘敬泽     邢    铁     王彦英     张军海     赵小兰 "] },
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </ImageBackground>
        )
    }
}
let styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        height: 30 * s,
        width: '90%',
        marginLeft: '5%',
        textAlign: 'left',
        paddingLeft: '3%',
        lineHeight: 30 * s,
        backgroundColor: '#258634',
        fontSize: 16,
        borderRadius: 15 * s,
        color: '#fff'
    },
    txt: {
        fontSize: 14,
        marginLeft: '13%',
        lineHeight: 30,
        marginTop: 10 * s,
        width: '78%'
    }
})