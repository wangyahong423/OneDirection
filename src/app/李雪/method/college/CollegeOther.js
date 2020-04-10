import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, Dimensions, StyleSheet } from 'react-native'
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CollegeOther extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            activeSections: [],
            college:'教育学院'
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/colleges/list/`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
                var brr = []
                this.state.data.map((item)=>{
                    if (item.college != this.state.college) {
                        brr.push(item);
                    }
                    this.setState({
                        data: brr
                    })
                })
            })
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.college}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>&emsp;&emsp;{section.history}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <ScrollView>
                <Accordion
                    sections={this.state.data}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:50*s,
        borderBottomWidth:1*s,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderBottomColor:'#C0C0C0',
        justifyContent:'center',
        paddingLeft:10*s
    },
    headerText:{
        fontSize:20
    },
    content:{
        backgroundColor:'#ffffff',
        padding:10*s
    },
    contentText:{
        fontSize:16
    }
})
