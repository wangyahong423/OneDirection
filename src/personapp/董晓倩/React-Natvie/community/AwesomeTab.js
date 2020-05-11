import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Button = (props) => {
    return (
      <TouchableOpacity {...props} activeOpacity={0.95}>
        {props.children}
      </TouchableOpacity>
    )
  };
  export default class AwesomeTab extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    renderTab(name, page, isTabActive, onPressHandler) {
      const textColor = isTabActive ? '#0086E5' : '#fff';
      const backgroundColor = isTabActive ? '#fff' : CommonColor.color_primary;
      console.log(textColor)
      return <Button
        style={[styles.button, { backgroundColor }]}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits='button'
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab]}>
          <Text style={{ color: textColor,fontSize:18 }}>
            {name}
          </Text>
        </View>
      </Button>;
    }
  
    render() {
      return (
        <View style={styles.tabBarBox}>
          <View style={{ flexDirection: 'row' }}>
            {this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page;
              const renderTab = this.props.renderTab || this.renderTab;
              return renderTab(name, page, isTabActive, this.props.goToPage);
            })}
          </View>
        </View>
      );
    }
  
  }