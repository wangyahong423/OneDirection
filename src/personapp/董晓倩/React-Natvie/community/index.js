import React, { Component } from 'react';
import {
    StyleSheet, FlatList,
    Text,
    View,
    TouchableOpacity,
    Actions,
    ScrollView,
} from 'react-native';
import ListView from 'deprecated-react-native-listview';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollTopView from 'react-native-scrolltotop';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnOn: true,
            turnOff: false,
            isTop: false,
            isShowToTop: false,
        }
    }
    getBackTop = (e) => {
        let offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        console.log("距离", offsetY)
        if (offsetY > 120) {
            this.setState({
                isTop: true
            })
            console.log("输出", this.state.isTop)

        } else {
            this.setState({
                isTop: false
            })
            console.log("输出", this.state.isTop)
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    onScroll={this.getBackTop}
                    style={{ flex: 1, backgroundColor: '#fff' }}
                    ref={(r) => this.scrollview = r}
                >
                    <View style={{height:10,wodth:"100%",backgroundColor:"yellow"}}></View>
                    <View style={{height:1000,wodth:"100%",backgroundColor:"red"}}></View>

                </ScrollView>
                {
                    this.state.isTop === true ? <ActionButton
                        renderIcon={() => (<View style={{height:100,width:"100%",backgroundColor:"#fff"}}></View>)}
                        buttonColor="#FFFFFF"
                        position='right'
                        verticalOrientation='up'
                        size={34}
                        border='#1DA57A'
                        onPress={() => this.scrollview.scrollTo({ x: 0, y: 0, animated: true })}
                    /> : <View />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    title_view: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27b5ee',
    },
    title_text: {
        fontSize: 20,
        color: 'white'
    },
    list: {
        paddingTop: 22,
        backgroundColor: "red",
        height: 1000
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});