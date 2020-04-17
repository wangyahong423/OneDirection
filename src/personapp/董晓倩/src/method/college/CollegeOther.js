import React, { Component } from 'react'
import { View, Text, ScrollView, TextInput, Dimensions, StyleSheet, AsyncStorage } from 'react-native'
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class CollegeOther extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            todo: [],
            activeSections: [],
            college: '',
            username: ''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('username')
            .then((value) => {
                let name = { username: value }
                this.setState({
                    username: name.username
                });
                let url1 = `http://139.155.44.190:3005/users/list`;
                let url2 = `http://139.155.44.190:3005/colleges/list`;
                fetch(url1)
                    .then(res => res.json())
                    .then((res) => {
                        this.setState({
                            data: res
                        })
                        this.state.data.map((item) => {
                            if (item.name === this.state.username) {
                                this.setState({
                                    college: item.college
                                })
                            }
                        })
                        fetch(url2)
                            .then(res => res.json())
                            .then((res) => {
                                this.setState({
                                    todo: res
                                })
                                var brr = []
                                this.state.todo.map((item) => {
                                    if (item.college != this.state.college) {
                                        brr.push(item);
                                    }
                                    this.setState({
                                        todo: brr
                                    })
                                })
                            })
                    })
            });

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
                    sections={this.state.todo}
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
    header: {
        height: 50 * s,
        borderBottomWidth: 1 * s,
        backgroundColor: 'rgba(255,255,255,0.4)',
        borderBottomColor: '#C0C0C0',
        justifyContent: 'center',
        paddingLeft: 10 * s
    },
    headerText: {
        fontSize: 20
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
