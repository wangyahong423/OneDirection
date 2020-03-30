import React from 'react';
import {Router, Scene,Tabs, Actions} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet,View} from 'react-native';

import Community from './src/community/Community';
import Share from './src/share/Share';
import My from './src/my/My';
// 攻略
import Method from './src/method/Method';
// 一卡通
import Onecard from './src/method/onecard/OneCard';
import Activate from './src/method/onecard/Activate';
import Invest from './src/method/onecard/Invest';
import Loss from './src/method/onecard/Loss';
// 社团组织
import Organization from './src/method/organization/Organization';
import Schoolorg from './src/method/organization/Schoolorg';
import Practice from './src/method/organization/Practice';
import Physical from './src/method/organization/Physical';
import Academic from './src/method/organization/Academic';
import Art from './src/method/organization/Art';

import School from './src/method/school/School';
import Study from './src/method/study/Study';
import Schoolmaths from './src/method/schoolmates/Schoolmates';
import College from './src/method/college/College';


console.disableYellowBox = true;

const App = () => {
  let now=0;
  return ( 
    <>
    <Router >
        <Scene key='root'> 
          <Tabs key='tabbar' hideNavBar activeTintColor='#37376F' inactiveTintColor='black' tabBarStyle={{backgroundColor:'#fff',borderTopWidth:0}}>
            {/* 攻略 */}
            <Scene key='methodPage' title='攻略' hideNavBar  icon={({focused})=><Icon color={focused?'#37376F':'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} initial />
            </Scene>
            {/* 社区 */}
            <Scene key='communityPage' title='社区' icon={({focused})=><Icon color={focused?'#37376F':'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />
            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享'  icon={({focused})=><Icon color={focused?'#37376F':'black'} name='share-alt' size={26} />} >
              <Scene key='share'  component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene key='myPage' title='我的'  icon={({focused})=><Icon color={focused?'#37376F':'black'} name='user-o' size={26} />}>
              <Scene key='my'  component={My} />
            </Scene>
          </Tabs> 

          {/* 一卡通 */}
          <Scene key='onecard' title='一卡通' component={Onecard} leftButtonIconStyle={{color:'white'}} backButtonTextStyle={<View style={{marginLeft:20,color:'white'}}><Icon color='white'  size={26} name='angle-left'></Icon></View>} navigationBarStyle={{backgroundColor:'#37376F'}} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} ></Scene>
          <Scene key='activate' component={Activate} title='一卡通激活' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} ></Scene>
          <Scene key='invest' component={Invest} title='一卡通充值' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='loss' component={Loss} title='一卡通丢失' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>

          {/* 社团组织 */}
          <Scene key='organization' component={Organization} title='社团组织' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='schoolorg' component={Schoolorg} title='校级组织类' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}></Scene>
          <Scene key='practice' component={Practice} title='实践服务类' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='physical' component={Physical} title='体育健身类'  titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='academic' component={Academic} title='学术研究类' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='art' component={Art} title='文化艺术类' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>

          {/* 学校 */}
          <Scene key='school' component={School} />
          <Scene key='study' component={Study} />
          <Scene key='schoolmates' component={Schoolmaths} />
          <Scene key='college' component={College} />
        </Scene>
    </Router>
    </>
  );
}; 

const styles = StyleSheet.create({
  
});

export default App;
