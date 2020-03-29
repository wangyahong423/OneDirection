import React from 'react';
import {Router, Scene,Tabs} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,View} from 'react-native';

import Community from './src/community/Community';
import Share from './src/share/Share';
import My from './src/my/My';
// 攻略
import Method from './src/method/Method';
import Onecard from './src/method/onecard/OneCard';
import Organization from './src/method/organization/Organization';
import School from './src/method/school/School';
import Study from './src/method/study/Study';
import Shetuan from './src/method/community/Community';
import College from './src/method/college/College'

console.disableYellowBox = true;

const App = () => {
  let now=0;
  return ( 
    <>
    <Router >
        <Scene key='root'> 
          <Tabs key='tabbar' hideNavBar activeTintColor='blue' inactiveTintColor='black' tabBarStyle={{backgroundColor:'#fff',borderTopWidth:0}}>
            {/* 攻略 */}
            <Scene key='methodPage' title='攻略' hideNavBar  icon={({focused})=><Icon color={focused?'blue':'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} initial />
            </Scene>
            {/* 社区 */}
            <Scene key='communityPage' title='社区' icon={({focused})=><Icon color={focused?'blue':'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />
            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享'  icon={({focused})=><Icon color={focused?'blue':'black'} name='share-alt' size={26} />} >
              <Scene key='share'  component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene key='myPage' title='我的'  icon={({focused})=><Icon color={focused?'blue':'black'} name='user-o' size={26} />}>
              <Scene key='my'  component={My} />
            </Scene>
          </Tabs>

          <Scene key='onecard' component={Onecard} />
          <Scene key='organization' component={Organization} />
          <Scene key='school' component={School} />
          <Scene key='study' component={Study} />
          <Scene key='shetuan' component={Shetuan} />
          <Scene key='college' component={College} />
        </Scene>
    </Router>
    </>
  );
}; 

const styles = StyleSheet.create({
  
});

export default App;
