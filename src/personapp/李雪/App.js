import React from 'react';
import { Router, Scene, Tabs, Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

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


import Organization from './src/method/organization/Organization';
import School from './src/method/school/School';
import Study from './src/method/study/Study';
import Schoolmaths from './src/method/schoolmates/Schoolmates';
import College from './src/method/college/College'
//学习详情
import Agrant from './src/method/study/Agrant';
import Scholarship from './src/method/study/Scholarship';
import Second from './src/method/study/Second';
import Zongheceping from './src/method/study/Zongheceping'
import CollegeHistory from './src/method/college/CollegeHistory';
import CollegeTeachers from './src/method/college/CollegeTeachers';
import CollegeMajor from './src/method/college/CollegeMajor';
import CollegeOther from './src/method/college/CollegeOther';
//杰出校友信息
import Cailimin from './src/method/schoolmates/Cailimin';
import Caijiming from './src/method/schoolmates/Caijiming';
import Chaiguanjing from './src/method/schoolmates/Chaiguanjing';
import Chenshuzeng from './src/method/schoolmates/Chenshuzeng';
import Dengyingchao from './src/method/schoolmates/Dengyingchao';
import Fanqianwen from './src/method/schoolmates/Fanqianwen';
import Fengjiannan from './src/method/schoolmates/Fengjiannan';
import Fengshaohui from './src/method/schoolmates/Fengshaohui';
import Gesangdeji from './src/method/schoolmates/Gesangdeji';
import Haobolin from './src/method/schoolmates/Haobolin';
import Hehong from './src/method/schoolmates/Hehong';
import Houliang from './src/method/schoolmates/Houliang';
import Lishushen from './src/method/schoolmates/Lishushen';
import Liyimin from './src/method/schoolmates/Liyimin';
import Lizhanshu from './src/method/schoolmates/Lizhanshu';
import Liangxingjie from './src/method/schoolmates/Liangxingjie';
import Linwanli from './src/method/schoolmates/Linwanli';
import Liujianya from './src/method/schoolmates/Liujianya';
import Liuxiaojun from './src/method/schoolmates/Liuxiaojun';
import Liuyongrui from './src/method/schoolmates/Liuyongrui';
import Longzhuangwei from './src/method/schoolmates/Longzhuangwei';
import Luhongchang from './src/method/schoolmates/Luhongchang';
import Mayujun from './src/method/schoolmates/Mayujun';
import Panglaixing from './src/method/schoolmates/Panglaixing';
import Situlanfang from './src/method/schoolmates/Situlanfang';
import Suguoan from './src/method/schoolmates/Suguoan';
import Wangfengming from './src/method/schoolmates/Wangfengming';
import Wangjinjiang from './src/method/schoolmates/Wangjinjiang';
import Wangzhixin from './src/method/schoolmates/Wangzhixin';
import Xiachuancai from './src/method/schoolmates/Xiachuancai';
import Yanluguang from './src/method/schoolmates/Yanluguang';
import Yuanzhigang from './src/method/schoolmates/Yuanzhigang';
import Zhanghe from './src/method/schoolmates/Zhanghe';
import Zhangmeizhi from './src/method/schoolmates/Zhangmeizhi';
import Zhangwenmao from './src/method/schoolmates/Zhangwenmao';
import Zhangyanping from './src/method/schoolmates/Zhangyanping';
import Zhangzhiwei from './src/method/schoolmates/Zhangzhiwei';

console.disableYellowBox = true;

const App = () => {
  let now = 0;
  return (
    <>
      <Router >
        <Scene key='root'>
          <Tabs key='tabbar' hideNavBar activeTintColor='#37376F' inactiveTintColor='black' tabBarStyle={{ backgroundColor: '#fff', borderTopWidth: 0 }}>
            {/* 攻略 */}
            <Scene key='methodPage' title='攻略' hideNavBar icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} initial />
            </Scene>
            {/* 社区 */}
            <Scene key='communityPage' title='社区' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />
            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='share-alt' size={26} />} >
              <Scene key='share' component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene key='myPage' title='我的' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='user-o' size={26} />}>
              <Scene key='my' component={My} />
            </Scene>
          </Tabs>

          {/* 一卡通 */}
          <Scene key='onecard' title='一卡通' component={Onecard} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} ></Scene>
          <Scene key='activate' component={Activate} title='一卡通激活' titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} ></Scene>
          <Scene key='invest' component={Invest} title='一卡通充值' titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='loss' component={Loss} title='一卡通丢失' titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 社团组织 */}
          <Scene key='organization' component={Organization} />
          {/* 学校 */}
          <Scene key='school' component={School} />

          {/* 学习 */}
          <Scene key='study' title='学习' component={Study} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zongheceping' title='综合学生测评' component={Zongheceping} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='scholarship' title='奖学金' component={Scholarship} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='second' title='第二课堂' component={Second} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='agrant' title='助学金' component={Agrant} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 杰出校友 */}
          <Scene key='schoolmates' title='杰出校友' component={Schoolmaths} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='cailimin' title='才利民' component={Cailimin} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='caijiming' title='蔡继明' component={Caijiming} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='chaiguanjing' title='柴冠景' component={Chaiguanjing} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='chenshuzeng' title='陈书增' component={Chenshuzeng} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='dengyingchao' title='邓颖超' component={Dengyingchao} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fanqianwen' title='范千文' component={Fanqianwen} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fengjiannan' title='冯健男' component={Fengjiannan} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fengshaohui' title='冯韶慧' component={Fengshaohui} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gesangdeji' title='格桑德吉' component={Gesangdeji} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='haobolin' title='郝柏林' component={Haobolin} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='hehong' title='贺泓' component={Hehong} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='houliang' title='侯亮' component={Houliang} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='lishushen' title='李树深' component={Lishushen} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liyimin' title='李益民' component={Liyimin} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='lizhanshu' title='栗战书' component={Lizhanshu} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liangxingjie' title='梁兴杰' component={Liangxingjie} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='linwanli' title='林万里' component={Linwanli} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liujianya' title='刘建亚' component={Liujianya} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liuxiaojun' title='刘晓军' component={Liuxiaojun} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liuyongrui' title='刘永瑞' component={Liuyongrui} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='longzhuangwei' title='龙庄伟' component={Longzhuangwei} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='luhongchang' title='路洪昌' component={Luhongchang} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='mayujun' title='马宇骏' component={Mayujun} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='panglaixing' title='庞来兴' component={Panglaixing} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='situlanfang' title='司徒兰芳' component={Situlanfang} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='suguoan' title='苏国安' component={Suguoan} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangfengming' title='王凤鸣' component={Wangfengming} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangjinjiang' title='王进江' component={Wangjinjiang} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangzhixin' title='王志欣' component={Wangzhixin} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xiachuancai' title='夏传才' component={Xiachuancai} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yanluguang' title='严陆光' component={Yanluguang} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuanzhigang' title='袁志刚' component={Yuanzhigang} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhanghe' title='张和' component={Zhanghe} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangmeizhi' title='张妹芝' component={Zhangmeizhi} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangwenmao' title='张文茂' component={Zhangwenmao} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangyanping' title='张砚平' component={Zhangyanping} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangzhiwei' title='张志伟' component={Zhangzhiwei} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 学院 */}
          <Scene key='college' title='学院' component={College} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegehistory' title='历史介绍' component={CollegeHistory} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegeteachers' title='学院领导' component={CollegeTeachers} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegemajor' title='专业介绍' component={CollegeMajor} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegeother' title='其他学院' component={CollegeOther} leftButtonIconStyle={{ color: 'white' }} backButtonTextStyle={<View style={{ marginLeft: 20, color: 'white' }}><Icon color='white' size={26} name='angle-left'></Icon></View>} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
