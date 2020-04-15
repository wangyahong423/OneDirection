import React from 'react';
import { Router, Scene, Tabs } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, Text } from 'react-native';
import Method from './src/method/Method';
import Community from './src/community/Community';
import Share from './src/share/Share';
import My from './src/my/My';
import Add from './src/community/Add';
import Details from './src/community/Details';
// import Comment from './src/community/Comment';

//分享
import Learn from './src/share/learn/Learn';
import ShareFile from './src/share/shareFile/ShareFile';
import AddLearn from './src/share/learn/AddLearn';

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
            <Scene
              titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}
              navigationBarStyle={{ backgroundColor: '#37376F' }}
              key='communityPage' title='社区'
              icon={({ focused }) => <Icon color={focused ? 'blue' : 'black'}
                name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />

              {/* 添加评论 */}
              <Scene
                title='发表状态'
                key="add"
                renderRightButton={<View style={{ marginRight: 20 }}>
                  <Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>}
                titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}//标题的文本居中
                navBarButtonColor='#fff'
                hideTabBar
                component={Add}
              />
              {/* 评论详情 */}
              <Scene
                title='详情'
                key="details"
                renderRightButton={<View></View>}
                titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}//标题的文本居中
                navBarButtonColor='#fff'
                hideTabBar
                component={Details}
              />
              {/* <Scene
                title='评论'
                key="comment"
                renderRightButton={<View></View>}
                titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }}//标题的文本居中
                navBarButtonColor='#fff'
                hideTabBar
                component={Comment}
              /> */}
            </Scene>

            {/* 共享 */}
            {/* <Scene key='sharePage' title='共享' icon={({ focused }) => <Icon color={focused ? 'blue' : 'black'} name='share-alt' size={26} />} >
              <Scene key='share' component={Share} />
            </Scene> */}
            <Scene key='learn' title='学习交流' component={Learn} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
            <Scene key='sharefile' title='资料共享' component={ShareFile} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
            <Scene key='addlearn' title='发布' component={AddLearn} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
            {/* <Scene key='learndetails' title='详情' component={LearnDetails} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} /> */}
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
