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
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
export default class ScrollableTab extends Component {
    static propTypes = {}
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                {/*渲染tabview*/}
                {this._renderTabView()}
                {/*渲染主体内容*/}
                {this._renderScrollableContent()}
            </View>
        );
    }

    /**
     * 渲染tabview
     * @private
     */
    _renderTabView() {
        let tabParams = {
            tabs: this._children().map((child)=>child.props.tabLabel),
        };
        return (
            <DefaultTabBar
                {...tabParams}
            />
        );
    }

    /**
     * 渲染主体内容
     * @private
     */
    _renderScrollableContent() {
        return (
            <Animated.ScrollView
                style={styles.scrollStyle}
                pagingEnabled={true}
                horizontal={true}
            >
                {this.props.children}
            </Animated.ScrollView>
        );
    }

    /**
     * 获取子控件数组集合
     * @param children
     * @returns {*}
     * @private
     */
    _children(children = this.props.children) {
        return React.Children.map(children, (child)=>child);
    }
}
const styles = StyleSheet.create({
    container: {
        width: screenW,
        flex: 1,
        marginTop: 22,
    },
    scrollStyle: {
        flex: 1,
    },
    tabContainer: {
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
