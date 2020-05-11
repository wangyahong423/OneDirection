import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import DefaultTabBar from './DefaultTabBar'
import ScrollableTab from './ScrollableTab'
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
export default class ScrollTabDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTab>
                    {['页面一', '页面二', '页面三'].map((item, index)=> {
                        return (
                            <Text
                                tabLabel={item}
                                key={item + index}
                                style={{
                                    width: screenW,
                                    flex: 1,
                                }}
                            >
                                {item}
                            </Text>
                        );
                    })}
                </ScrollableTab>
                {/*<App/>*/}
            </View>
        );
    }
}
