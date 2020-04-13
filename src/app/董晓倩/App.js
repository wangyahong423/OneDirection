import React from 'react';
import { Router, Scene, Tabs } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from 'react-native';
import Method from './src/method/Method';
import Community from './src/community/Community';
import Share from './src/share/Share';
import My from './src/my/My';
import Add from './src/community/Add';
import Details from './src/community/Details'

console.disableYellowBox = true;

const App = () => {
  let now = 0;
  return (
    <>
      <Router >
        <Scene key='root'>
          <Tabs key='tabbar' hideNavBar activeTintColor='blue' inactiveTintColor='black' tabBarStyle={{ backgroundColor: '#fff', borderTopWidth: 0 }}>
            {/* 攻略 */}
            {/* <Scene key='methodPage' title='攻略' hideNavBar  icon={({focused})=><Icon color={focused?'blue':'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} />
            </Scene> */}
            {/* 社区 */}
            <Scene titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} key='communityPage' title='社区' icon={({ focused }) => <Icon color={focused ? 'blue' : 'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />
              {/* 添加评论 */}
              <Scene title='发表状态' key="add"  renderRightButton={<View style={{ marginRight: 20 }}> <Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Add}/>
              {/* 评论详情 */}
              <Scene title='评论' key="details"  renderRightButton={<View></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Details}/>
            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享' icon={({ focused }) => <Icon color={focused ? 'blue' : 'black'} name='share-alt' size={26} />} >
              <Scene key='share' component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene key='myPage' title='我的' icon={({ focused }) => <Icon color={focused ? 'blue' : 'black'} name='user-o' size={26} />}>
              <Scene key='my' component={My} />
            </Scene>
          </Tabs>
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
