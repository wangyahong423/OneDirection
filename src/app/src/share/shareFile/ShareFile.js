import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import RNFileSelector from 'react-native-file-selector';

const { width, height } = Dimensions.get('window');
const s = width / 460;

export default class ShareFile extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }
    addFile = () => {
        RNFileSelector.Show(
            {
                title: 'Select File',
                onDone: (path) => {
                    console.log('file selected: ' + path)
                },
                onCancel: () => {
                    console.log('cancelled')
                }
            }
        )        
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
                        width: '60%',
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
                                width: "80%",
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
                </ScrollView>
                <TouchableOpacity style={{
                    width: 60 * s,
                    height: 60 * s,
                    borderRadius: 30 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#37376F',
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}
                    onPress={this.addFile}
                >
                    <Text style={{ color: 'white', fontSize: 30 * s }}>+</Text>
                </TouchableOpacity>
                <RNFileSelector
                    title={"Select File"}
                    visible={this.state.visible}
                    onDone={() => {
                        console.log("file selected: " + path);
                    }}
                    onCancel={() => {
                        console.log("cancelled");
                    }}
                />
            </SafeAreaView>
        )
    }
}
