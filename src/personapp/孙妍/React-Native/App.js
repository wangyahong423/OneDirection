import React, { useState, useEffect } from 'react';
import { Router, Scene, Tabs, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, BackHandler, ToastAndroid, AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// 登录
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Signin from './src/common/Signin';
import Choosecollege from './src/common/Choosecollege';
import Forget from './src/common/Forget';

// 社区
import Community from './src/community/Community';
import Add from './src/community/Add';
import Details from './src/community/Details'

// 共享
import Share from './src/share/Share';
import Experience from './src/share/experience/experience';
import Cet46 from './src/share/cet46/cet46';
import Cet41 from './src/share/cet46/Four/Cet41';
import Word from './src/share/cet46/Four/vocabulary/Word'
import Appear from './src/share/cet46/Four/frequency/Appear'
import Readone from './src/share/cet46/Four/read/Readone'
import One from './src/share/cet46/Four/read/readone/One'
import Two from './src/share/cet46/Four/read/readone/Two'
import Three from './src/share/cet46/Four/read/readone/Three'
import Four from './src/share/cet46/Four/read/readone/Four'
import Readfive from './src/share/cet46/Four/read/readone/Readfive';
import ReadSix from './src/share/cet46/Four/read/readone/ReadSix';
import ReadSeven from './src/share/cet46/Four/read/readone/ReadSeven';
import ReadEight from './src/share/cet46/Four/read/readone/ReadEight';
import ReadNine from './src/share/cet46/Four/read/readone/ReadNine';
import ReadTen from './src/share/cet46/Four/read/readone/ReadTen';
import ReadEleven from './src/share/cet46/Four/read/readone/ReadEleven';
import ReadTwelve from './src/share/cet46/Four/read/readone/ReadTwelve';
import ReadThirteen from './src/share/cet46/Four/read/readone/ReadThirteen';
import ReadFourteen from './src/share/cet46/Four/read/readone/ReadFourteen';
import ReadFifteen from './src/share/cet46/Four/read/readone/ReadFifteen';
import ReadSixteen from './src/share/cet46/Four/read/readone/ReadSixteen';
import ReadSevevteen from './src/share/cet46/Four/read/readone/ReadSevevteen';
import ReadEighteen from './src/share/cet46/Four/read/readone/ReadEighteen';
import ReadNineteen from './src/share/cet46/Four/read/readone/ReadNineteen';
import ReadTwenty from './src/share/cet46/Four/read/readone/ReadTwenty';

import One1 from './src/share/cet46/Four/selectTen/selectten/One1'
import Two2 from './src/share/cet46/Four/selectTen/selectten/Two2'
import Three3 from './src/share/cet46/Four/selectTen/selectten/Three3'
import Four4 from './src/share/cet46/Four/selectTen/selectten/Four4'
import First from './src/share/cet46/Four/selectFive/selectfive/First'
import Second1 from './src/share/cet46/Four/selectFive/selectfive/Second1'
import Third from './src/share/cet46/Four/selectFive/selectfive/Third'
import Fourth from './src/share/cet46/Four/selectFive/selectfive/Fourth'
import Selectten1 from './src/share/cet46/Four/selectTen/Selectten1'
import SelectFive1 from './src/share/cet46/Four/selectFive/SelectFive1'
import Cet61 from './src/share/cet46/Six/Cet61';
import Notes from './src/share/notes/notes';
import Programme from './src/share/programme/programme';

// 我的
import My from './src/my/My';
import Shoucang from './src/my/Shoucang';
import Tongxun from './src/my/Tongxun';
import Guanyu from './src/my/Guanyu';
import Fankui from './src/my/Fankui';
import Tijiao from './src/my/Tijiao';
import Shezhi from './src/my/Shezhi';
import Mima from './src/my/Mima';
import Xuexidongtai from './src/my/Xuexidongtai'
import Touxiang from './src/my/Touxiang'

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

// 学习
import Study from './src/method/study/Study';
import Agrant from './src/method/study/Agrant';
import Scholarship from './src/method/study/Scholarship';
import Second from './src/method/study/Second';
import Zongheceping from './src/method/study/Zongheceping'

// 杰出校友
import Schoolmaths from './src/method/schoolmates/Schoolmates';
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
// 学院
import College from './src/method/college/College';
import CollegeHistory from './src/method/college/CollegeHistory';
import CollegeTeachers from './src/method/college/CollegeTeachers';
import CollegeMajor from './src/method/college/CollegeMajor';
import CollegeOther from './src/method/college/CollegeOther';
import Xuanshi5 from './src/share/cet46/Four/selectTen/selectten/Xuanshi5';
import Xuanshi6 from './src/share/cet46/Four/selectTen/selectten/Xuanshi6';
import Xuanshi7 from './src/share/cet46/Four/selectTen/selectten/Xuanshi7';
import Xuanshi8 from './src/share/cet46/Four/selectTen/selectten/Xuanshi8';
import Xuanshi9 from './src/share/cet46/Four/selectTen/selectten/Xuanshi9';
import Xuanshi10 from './src/share/cet46/Four/selectTen/selectten/Xuanshi10';
import Xuanshi11 from './src/share/cet46/Four/selectTen/selectten/Xuanshi11';
import Xuanshi12 from './src/share/cet46/Four/selectTen/selectten/Xuanshi12';
import Xuanshi13 from './src/share/cet46/Four/selectTen/selectten/Xuanshi13';
import Xuanshi14 from './src/share/cet46/Four/selectTen/selectten/Xuanshi14';
import Xuanshi15 from './src/share/cet46/Four/selectTen/selectten/Xuanshi15';
import Xuanshi16 from './src/share/cet46/Four/selectTen/selectten/Xuanshi16';
import Xuanshi17 from './src/share/cet46/Four/selectTen/selectten/Xuanshi17';
import Xuanshi18 from './src/share/cet46/Four/selectTen/selectten/Xuanshi18';
import Xuanshi19 from './src/share/cet46/Four/selectTen/selectten/Xuanshi19';
import Xuanshi20 from './src/share/cet46/Four/selectTen/selectten/Xuanshi20';
import Xuanwu5 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu5';
import Xuanwu6 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu6';
import Xuanwu7 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu7';
import Xuanwu8 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu8';
import Xuanwu9 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu9';
import Xuanwu10 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu10';
import Xuanwu11 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu11';
import Xuanwu12 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu12';
import Xuanwu13 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu13';
import Xuanwu14 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu14';
import Xuanwu15 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu15';
import Xuanwu16 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu16';
import Xuanwu17 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu17';
import Xuanwu18 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu18';
import Xuanwu19 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu19';
import Xuanwu20 from './src/share/cet46/Four/selectFive/selectfive/Xuanwu20';
import Xiangqing from './src/my/Xiangqing';




console.disableYellowBox = true;

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let now = 0;
  let init = () => {
    AsyncStorage.getItem('isInstall')
      .then(res => {
        console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    AsyncStorage.getItem('username')
      .then(res => {
        let user = { username: res }
        console.log('user:', user)
        if (!user.username) {
          SplashScreen.hide();
        }
        if (user.username) {
          setLogin(true);
          SplashScreen.hide();
        }
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }
  return (
    <>
      <Router
        backAndroidHandler={() => {
          if (Actions.currentScene != 'methodPage') {
            Actions.pop();
            return true;
          } else {
            if (new Date().getTime() - now < 2000) {
              BackHandler.exitApp();
            } else {
              ToastAndroid.show('确定要退出吗', 100);
              now = new Date().getTime();
              return true;
            }
          }

        }}
      >
        <Scene key='root'>
          <Tabs key='tabbar' hideNavBar activeTintColor='#37376F' inactiveTintColor='black' tabBarStyle={{ backgroundColor: '#fff', borderTopWidth: 0 }}>
            {/* 攻略 */}
            <Scene key='methodPage' title='攻略' hideNavBar icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} initial />
            </Scene>
            {/* 社区 */}
            <Scene titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} key='communityPage' title='社区' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />

            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='share-alt' size={26} />} >
              <Scene key='share' hideNavBar component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} key='myPage' title='我的' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='user-o' size={26} />}>
              <Scene key='my' component={My} />
            </Scene>
          </Tabs>
          {/* 登录 */}
          <Scene initial={!isLogin} hideNavBar key="login" component={Login} />
          <Scene key="signin" hideNavBar component={Signin} />
          <Scene key="choosecollege" hideNavBar component={Choosecollege} title='选择学院' renderRightButton={<View style={{ marginRight: 20 }}><Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' />
          <Scene key="forget" component={Forget} title='忘记密码' backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 社区 */}
          <Scene title='发表状态' key="add" renderRightButton={<View style={{ marginRight: 20 }}><Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Add} />
          <Scene title='评论' key="details" renderRightButton={<View></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Details} />
          <Scene title='详情' key="xiangqing" renderRightButton={<View></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Xiangqing} />

          {/* 一卡通 */}
          <Scene key='onecard' title='一卡通' component={Onecard} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} ></Scene>
          <Scene key='activate' component={Activate} title='一卡通激活' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} ></Scene>
          <Scene key='invest' component={Invest} title='一卡通充值' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='loss' component={Loss} title='一卡通丢失' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 社团组织 */}
          <Scene key='organization' component={Organization} title='社团组织' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='schoolorg' component={Schoolorg} title='校级组织类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }}></Scene>
          <Scene key='practice' component={Practice} title='实践服务类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='physical' component={Physical} title='体育健身类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='academic' component={Academic} title='学术研究类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='art' component={Art} title='文化艺术类' titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 学校 */}
          <Scene key='school' component={School} title='学校' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='synopsis' component={Synopsis} title='学校简介' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='subject' component={Subject} title='学科专业' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='schoollogo' component={Schoollogo} title='学校标志' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='scenery' component={Scenery} title='校园风光' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='personnel' component={Personnel} title='人才培养' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='govern' component={Govern} title='治理架构' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='science' component={Science} title='科学研究' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='obtainemployment' component={Obtainemployment} title='就业服务' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='shiziduiwu' component={Shiziduiwu} title='师资队伍' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='undergradute' component={Undergradute} title='本科生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='gradute' component={Gradute} title='研究生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='continus' component={Continus} title='继续教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='overseas' component={Overseas} title='留学生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='course' component={Course} title='课程设置' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='practise' component={Practise} title='实践教学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='teaching' component={Teaching} title='教学督导' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='famousteachers' component={FamousTeachers} title='教学名师' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='achievement' component={Achievement} title='教学成果' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='terrace' component={Terrace} title='科学研究平台' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='technology' component={Technology} title='自然科学与技术' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='human' component={Human} title='人文与社会科学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='cooperate' component={Cooperate} title='合作交流' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='learning' component={Learning} title='学术期刊' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 学习 */}
          <Scene key='study' title='学习' component={Study} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zongheceping' title='综合学生测评' component={Zongheceping} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='scholarship' title='奖学金' component={Scholarship} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='second' title='第二课堂' component={Second} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='agrant' title='助学金' component={Agrant} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='schoolmates' title='杰出校友' component={Schoolmaths} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='cailimin' title='才利民' component={Cailimin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='caijiming' title='蔡继明' component={Caijiming} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='chaiguanjing' title='柴冠景' component={Chaiguanjing} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='chenshuzeng' title='陈书增' component={Chenshuzeng} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='dengyingchao' title='邓颖超' component={Dengyingchao} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fanqianwen' title='范千文' component={Fanqianwen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fengjiannan' title='冯健男' component={Fengjiannan} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fengshaohui' title='冯韶慧' component={Fengshaohui} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gesangdeji' title='格桑德吉' component={Gesangdeji} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='haobolin' title='郝柏林' component={Haobolin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='hehong' title='贺泓' component={Hehong} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='houliang' title='侯亮' component={Houliang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='lishushen' title='李树深' component={Lishushen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liyimin' title='李益民' component={Liyimin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='lizhanshu' title='栗战书' component={Lizhanshu} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liangxingjie' title='梁兴杰' component={Liangxingjie} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='linwanli' title='林万里' component={Linwanli} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liujianya' title='刘建亚' component={Liujianya} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liuxiaojun' title='刘晓军' component={Liuxiaojun} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liuyongrui' title='刘永瑞' component={Liuyongrui} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='longzhuangwei' title='龙庄伟' component={Longzhuangwei} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='luhongchang' title='路洪昌' component={Luhongchang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='mayujun' title='马宇骏' component={Mayujun} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='panglaixing' title='庞来兴' component={Panglaixing} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='situlanfang' title='司徒兰芳' component={Situlanfang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='suguoan' title='苏国安' component={Suguoan} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangfengming' title='王凤鸣' component={Wangfengming} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangjinjiang' title='王进江' component={Wangjinjiang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangzhixin' title='王志欣' component={Wangzhixin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xiachuancai' title='夏传才' component={Xiachuancai} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yanluguang' title='严陆光' component={Yanluguang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuanzhigang' title='袁志刚' component={Yuanzhigang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhanghe' title='张和' component={Zhanghe} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangmeizhi' title='张妹芝' component={Zhangmeizhi} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangwenmao' title='张文茂' component={Zhangwenmao} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangyanping' title='张砚平' component={Zhangyanping} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangzhiwei' title='张志伟' component={Zhangzhiwei} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 学院 */}
          <Scene key='college' title='学院' component={College} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegehistory' title='历史介绍' component={CollegeHistory} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegeteachers' title='学院领导' component={CollegeTeachers} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegemajor' title='专业介绍' component={CollegeMajor} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegeother' title='其他学院' component={CollegeOther} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 共享 */}
          <Scene key='cet46' title='四六级资料' component={Cet46} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='programme' title='考研资料' component={Programme} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='notes' title='笔记' component={Notes} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='experience' title='经验分享' component={Experience} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          {/**四级 */}
          <Scene key='cet41' title='四级资料' component={Cet41} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='cet61' title='六级资料' component={Cet61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='appear' title='四级高频词汇' component={Appear} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wordone' title='四级必背词汇' component={Word} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readone' title='阅读理解' component={Readone} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='one' title='第一篇大学专业选择' component={One} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='two' title='第二篇大学的生存' component={Two} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='three' title='第三篇简化餐桌礼节' component={Three} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='four' title='第四篇教育有方' component={Four} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='five1' title='第五篇：多样化' component={Readfive} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readsix' title='第六篇：学习计算机' component={ReadSix} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readseven' title='第七篇：课余生活' component={ReadSeven} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readeight' title='第八篇：餐桌上的蜗牛' component={ReadEight} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readnine' title='第九篇：美国大学生活' component={ReadNine} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readten' title='第十篇：写作' component={ReadTen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readeleven' title='第十一篇：工程学专业' component={ReadEleven} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readtwelve' title='第十二篇：英国托管协会' component={ReadTwelve} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readthirteen' title='第十三篇：手语' component={ReadThirteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readfourteen' title='第十四篇：如何写作' component={ReadFourteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readfifteen' title='第十五篇：数学能力' component={ReadFifteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readsixteen' title='第十六篇：青少年犯罪' component={ReadSixteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readseventeen' title='第十七篇：美国婚姻' component={ReadSevevteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readeighteen' title='第十八篇：生活的不公正' component={ReadEighteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readnineteen' title='第十九篇：美国婚姻' component={ReadNineteen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readtwenty' title='第二十篇：父亲形象' component={ReadTwenty} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />


          
          <Scene key='first' title='咨询信' component={First} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='second1' title='保护非遗' component={Second1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='third' title='长假利弊' component={Third} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fourth' title='为什么富有却不开心' component={Fourth} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu5' title='要不要进行太空探索' component={Xuanwu5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu6' title='生命的意义与目的' component={Xuanwu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu7' title='手机用量' component={Xuanwu7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu8' title='溺爱' component={Xuanwu8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu9' title='帮助受灾者' component={Xuanwu9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu10' title='运气与成功' component={Xuanwu10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu11' title='搬去新地方' component={Xuanwu11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu12' title='广告' component={Xuanwu12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu13' title='社会实践' component={Xuanwu13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu14' title='节俭' component={Xuanwu14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu15' title='考证热' component={Xuanwu15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu16' title='网络游戏' component={Xuanwu16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu17' title='电力短缺' component={Xuanwu17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu18' title='手机的利弊' component={Xuanwu18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu19' title='电影电视的影响' component={Xuanwu19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanwu20' title='教育不公平' component={Xuanwu20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='one1' title='第一篇' component={One1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='two2' title='第二篇' component={Two2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='three3' title='第三篇' component={Three3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='four4' title='第四篇' component={Four4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi5' title='第五篇' component={Xuanshi5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi6' title='第六篇' component={Xuanshi6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi7' title='第七篇' component={Xuanshi7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi8' title='第八篇' component={Xuanshi8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi9' title='第九篇' component={Xuanshi9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi10' title='第十篇' component={Xuanshi10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi11' title='第十一篇' component={Xuanshi11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi12' title='第十二篇' component={Xuanshi12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi13' title='第十三篇' component={Xuanshi13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi14' title='第十四篇' component={Xuanshi14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi15' title='第十五篇' component={Xuanshi15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi16' title='第十六篇' component={Xuanshi16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi17' title='第十七篇' component={Xuanshi17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi18' title='第十八篇' component={Xuanshi18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi19' title='第十九篇' component={Xuanshi19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xuanshi20' title='第二十篇' component={Xuanshi20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='selectten1' title='十五选十' component={Selectten1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='selectfive1' title='四级作文' component={SelectFive1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 我的 */}
          <Scene key='shoucang' component={Shoucang} title='我的收藏' backButtonImage={require('./assets/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='tiezi' component={Xuexidongtai} renderTitle="我的帖子" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tongxun' component={Tongxun} renderTitle="通讯录" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='guanyu' component={Guanyu} renderTitle="关于我们" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fankui' component={Fankui} renderTitle="用户反馈" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tijiao' component={Tijiao} renderTitle="反馈成功" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="shezhi" component={Shezhi} renderTitle="设置" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="mima" component={Mima} renderTitle="重置密码" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="touxiang" component={Touxiang} renderTitle="我的头像" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />



          {/*后续添加组件 */}
          {/**阅读 */}

        </Scene>
      </Router>
    </>
  );
};
export default App;