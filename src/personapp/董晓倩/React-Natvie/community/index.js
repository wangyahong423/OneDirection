import React from 'react';
import { Text, View } from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';
export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blackTab',
    };
  }
  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
    console.log("啦啦啦")
  }
  render() {
    return (
     <View>
        <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5"
      >
        <TabBar.Item
          title="我的经验"
          selected={this.state.selectedTab === 'blackTab'}
          onPress={() => this.onChangeTab('blackTab')}
        >
        </TabBar.Item>
        <TabBar.Item
          title="我的收藏"
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}
        >
        </TabBar.Item>
        <TabBar.Item
          title="我的社区"
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}
        >
          <View><Text>我的社区</Text></View>
        </TabBar.Item>
        <TabBar.Item
          title="赞在经验"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}
        >
        </TabBar.Item>
        <TabBar.Item
          title="赞在社区"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}
        >
        </TabBar.Item>
      </TabBar>
     </View>
    );
  }
}