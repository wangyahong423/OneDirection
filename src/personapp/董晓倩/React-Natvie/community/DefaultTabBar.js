/**
 * @author YASIN
 * @version [React-Native Pactera V01, 2017/9/5]
 * @date 17/2/23
 * @description DefaultTabBar
 */
import React, {
    Component,
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
export default class DefaultTabBar extends Component {
    static propTypes = {
        tabs: PropTypes.array,
    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.tabs.map((name, page) => {
                    return this._renderTab(name, page);
                })}
            </View>
        );
    }

    /**
     * 渲染tab
     * @param name 名字
     * @param page 下标
     * @private
     */
    _renderTab(name, page) {
        return (
            <TouchableOpacity
                key={name + page}
                style={styles.tabStyle}
            >
                <Text>{name}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: screenW,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    tabStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
