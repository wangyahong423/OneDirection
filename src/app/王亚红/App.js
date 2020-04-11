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


import Study from './src/method/study/Study';
import Schoolmaths from './src/method/schoolmates/Schoolmates';
import College from './src/method/college/College';

// 学校
import School from './src/method/school/School';
import Synopsis from './src/method/school/Synopsis';
import Subject from './src/method/school/Subject';
import Schoollogo from './src/method/school/Schoollogo';
import Scenery from './src/method/school/Scenery';
import Personnel from './src/method/school/Personnel';
import Govern from './src/method/school/Govern';
import Science from './src/method/school/Science';
import Obtainemployment from './src/method/school/Obtainemployment';
import Shiziduiwu from './src/method/school/Shiziduiwu';
import Undergradute from './src/method/school/Undergradute';
import Gradute from './src/method/school/Gradute';
import Overseas from './src/method/school/Overseas';
import Continus from './src/method/school/Continus';
// import Zhongwai from './src/method/school/Zhongwai';
import Course from './src/method/school/Course';
import Practise from './src/method/school/Practise';
import Teaching from './src/method/school/Teaching';
import FamousTeachers from './src/method/school/FamousTeachers';
import Achievement from './src/method/school/Achievement';
import Terrace from './src/method/school/Terrace';
import Technology from './src/method/school/Technology';
import Human from './src/method/school/Human';
import Cooperate from './src/method/school/Cooperate';
import Learning from './src/method/school/Learning';


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
          <Scene key='onecard' title='一卡通' component={Onecard}  backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{backgroundColor:'#37376F'}} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} ></Scene>
          <Scene key='activate' component={Activate} title='一卡通激活' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} ></Scene>
          <Scene key='invest' component={Invest} title='一卡通充值' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='loss' component={Loss} title='一卡通丢失' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>

          {/* 社团组织 */}
          <Scene key='organization' component={Organization} title='社团组织' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='schoolorg' component={Schoolorg} title='校级组织类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}></Scene>
          <Scene key='practice' component={Practice} title='实践服务类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='physical' component={Physical} title='体育健身类' backButtonImage={require('./assets/gonglve/left.png')}  titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='academic' component={Academic} title='学术研究类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='art' component={Art} title='文化艺术类' titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>

          {/* 学校 */}
          <Scene key='school' component={School} title='学校' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='synopsis' component={Synopsis} title='学校简介' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='subject' component={Subject} title='学科专业' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='schoollogo' component={Schoollogo} title='学校标志' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='scenery' component={Scenery} title='校园风光' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='personnel' component={Personnel} title='人才培养' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='govern' component={Govern} title='治理架构' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}/>
          <Scene key='science' component={Science} title='科学研究' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='obtainemployment'  component={Obtainemployment} title='就业服务' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='shiziduiwu'  component={Shiziduiwu} title='师资队伍' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='undergradute'  component={Undergradute} title='本科生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='gradute'  component={Gradute} title='研究生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='continus'  component={Continus} title='继续教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          <Scene key='overseas'  component={Overseas} title='留学生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} />
          {/* <Scene key='zhongwai'  component={Zhongwai} title='中外合作办学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}} /> */}
          <Scene key='course'  component={Course} title='课程设置' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='practise'  component={Practise} title='实践教学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='teaching'  component={Teaching} title='教学督导' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='famousteachers'  component={FamousTeachers} title='教学名师' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='achievement'  component={Achievement} title='教学成果' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='terrace'  component={Terrace} title='科学研究平台' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='technology'  component={Technology} title='自然科学与技术' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='human'  component={Human} title='人文与社会科学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='cooperate'  component={Cooperate} title='合作交流' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          <Scene key='learning'  component={Learning} title='学术期刊' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{flex:1,textAlign:'center',color:'white',marginLeft:-40}} navigationBarStyle={{backgroundColor:'#37376F'}}  />
          


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
