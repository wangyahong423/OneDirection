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
import Person from './src/community/Person';
import Fans from './src/community/Fans';
import Follows from './src/community/Follows';
import PerExp from './src/community/PerExp';
import PerLearn from './src/community/PerLearn';
import SearchLearn from './src/community/SearchLearn';
import SearchExp from './src/community/SearchExp';

// 我的
import My from './src/my/My';
import Tongxun from './src/my/Tongxun';
import Guanyu from './src/my/Guanyu';
import Fankui from './src/my/Fankui';
import Tijiao from './src/my/Tijiao';
import Shezhi from './src/my/Shezhi';
import Mima from './src/my/Mima';
import Xuexidongtai from './src/my/Xuexidongtai'
import Touxiang from './src/my/Touxiang';
import Biji from './src/my/Biji';
import Myexperence from './src/my/Myexperence';
import Card from './src/my/Card';
import Head from './src/my/Head';
import Xiangqing from './src/my/Xiangqing';
import NewAdd from './src/my/NewAdd';
import NewL from './src/my/NewL';
import NewE from './src/my/NewE';

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

// 共享
import Share from './src/share/Share';
import Experience from './src/share/experience/experience';
import ExpDetails from './src/share/experience/ExpDetails';
import AddExp from './src/share/experience/AddExp';
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
import Selectten1 from './src/share/cet46/Four/selectTen/Selectten1'
import SelectFive1 from './src/share/cet46/Four/selectFive/SelectFive1'
import One1 from './src/share/cet46/Four/selectTen/selectten/One1'
import Two2 from './src/share/cet46/Four/selectTen/selectten/Two2'
import Three3 from './src/share/cet46/Four/selectTen/selectten/Three3'
import Four4 from './src/share/cet46/Four/selectTen/selectten/Four4'
import First from './src/share/cet46/Four/selectFive/selectfive/First';
import Second1 from './src/share/cet46/Four/selectFive/selectfive/Second1';
import Third from './src/share/cet46/Four/selectFive/selectfive/Third';
import Fourth from './src/share/cet46/Four/selectFive/selectfive/Fourth';
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

import Cet61 from './src/share/cet46/Six/Cet61';
import Word6 from './src/share/cet46/Six/src/Bibei';
import Gaopin6 from './src/share/cet46/Six/src/Gaopin';
import Shiwu6 from './src/share/cet46/Six/src/Shiwu';
import Yuedu6 from './src/share/cet46/Six/src/Yuedu';
import Zuowen from './src/share/cet46/Six/src/Zuowen';
import Zuowen61 from './src/share/cet46/Six/src/src/Zuowen1';
import Zuowen62 from './src/share/cet46/Six/src/src/Zuowen2';
import Zuowen63 from './src/share/cet46/Six/src/src/Zuowen3';
import Zuowen64 from './src/share/cet46/Six/src/src/Zuowen4';
import Zuowen65 from './src/share/cet46/Six/src/src/Zuowen5';
import Zuowen66 from './src/share/cet46/Six/src/src/Zuowen6';
import Zuowen67 from './src/share/cet46/Six/src/src/Zuowen7';
import Zuowen68 from './src/share/cet46/Six/src/src/Zuowen8';
import Zuowen69 from './src/share/cet46/Six/src/src/Zuowen9';
import Zuowen610 from './src/share/cet46/Six/src/src/Zuowen10';

import Shiwu61 from './src/share/cet46/Six/src/src/Shiwu1';
import Shiwu62 from './src/share/cet46/Six/src/src/Shiwu2';
import Shiwu63 from './src/share/cet46/Six/src/src/Shiwu3';
import Shiwu64 from './src/share/cet46/Six/src/src/Shiwu4';
import Shiwu65 from './src/share/cet46/Six/src/src/Shiwu5';
import Shiwu66 from './src/share/cet46/Six/src/src/Shiwu6';
import Shiwu67 from './src/share/cet46/Six/src/src/Shiwu7';
import Shiwu68 from './src/share/cet46/Six/src/src/Shiwu8';
import Shiwu69 from './src/share/cet46/Six/src/src/Shiwu9';
import Shiwu610 from './src/share/cet46/Six/src/src/Shiwu10';
import Yuedu61 from './src/share/cet46/Six/src/src/Yuedu1'
import Yuedu62 from './src/share/cet46/Six/src/src/Yuedu2'
import Yuedu63 from './src/share/cet46/Six/src/src/Yuedu3'
import Yuedu64 from './src/share/cet46/Six/src/src/Yuedu4'
import Yuedu65 from './src/share/cet46/Six/src/src/Yuedu5';
import Yuedu66 from './src/share/cet46/Six/src/src/Yuedu6';
import Yuedu67 from './src/share/cet46/Six/src/src/Yuedu7';
import Yuedu68 from './src/share/cet46/Six/src/src/Yuedu8';
import Yuedu69 from './src/share/cet46/Six/src/src/Yuedu9';
import Yuedu610 from './src/share/cet46/Six/src/src/Yuedu10';
import Yuedu611 from './src/share/cet46/Six/src/src/Yuedu11';
import Yuedu612 from './src/share/cet46/Six/src/src/Yuedu12';
import Yuedu613 from './src/share/cet46/Six/src/src/Yuedu13';
import Yuedu614 from './src/share/cet46/Six/src/src/Yuedu14';
import Yuedu615 from './src/share/cet46/Six/src/src/Yuedu15';
import Yuedu616 from './src/share/cet46/Six/src/src/Yuedu16';
import Yuedu617 from './src/share/cet46/Six/src/src/Yuedu17';
import Yuedu618 from './src/share/cet46/Six/src/src/Yuedu18';
import Yuedu619 from './src/share/cet46/Six/src/src/Yuedu19';
import Yuedu620 from './src/share/cet46/Six/src/src/Yuedu20';

// 笔记
import Notes from './src/share/notes/Notes';
import NotesDetails from './src/share/notes/NotesDetaile';
import AddNotes from './src/share/notes/AddNotes';

import Programme from './src/share/programme/programme';

import Math1 from './src/share/programme/Math1/Math1';
import Choose from './src/share/programme/Math1/choose/Choose'
import Fill from './src/share/programme/Math1/fill/Fill'
import Answer from './src/share/programme/Math1/answer/Answer'
import Choose1 from './src/share/programme/Math1/choose/topics/Choose1'
import Choose2 from './src/share/programme/Math1/choose/topics/Choose2'
import Choose3 from './src/share/programme/Math1/choose/topics/Choose3'
import Choose4 from './src/share/programme/Math1/choose/topics/Choose4'
import Choose5 from './src/share/programme/Math1/choose/topics/Choose5'
import Choose6 from './src/share/programme/Math1/choose/topics/Choose6'
import Choose7 from './src/share/programme/Math1/choose/topics/Choose7'
import Choose8 from './src/share/programme/Math1/choose/topics/Choose8'
import Choose9 from './src/share/programme/Math1/choose/topics/Choose9'
import Choose10 from './src/share/programme/Math1/choose/topics/Choose10'
import Choose11 from './src/share/programme/Math1/choose/topics/Choose11'
import Choose12 from './src/share/programme/Math1/choose/topics/Choose12'
import Choose13 from './src/share/programme/Math1/choose/topics/Choose13'
import Choose14 from './src/share/programme/Math1/choose/topics/Choose14'
import Choose15 from './src/share/programme/Math1/choose/topics/Choose15'
import Choose16 from './src/share/programme/Math1/choose/topics/Choose16'
import Choose17 from './src/share/programme/Math1/choose/topics/Choose17'
import Choose18 from './src/share/programme/Math1/choose/topics/Choose18'
import Choose19 from './src/share/programme/Math1/choose/topics/Choose19'
import Choose20 from './src/share/programme/Math1/choose/topics/Choose20'
import Fill1 from './src/share/programme/Math1/fill/topics/Fill1'
import Fill2 from './src/share/programme/Math1/fill/topics/Fill2'
import Fill3 from './src/share/programme/Math1/fill/topics/Fill3'
import Fill4 from './src/share/programme/Math1/fill/topics/Fill4'
import Fill5 from './src/share/programme/Math1/fill/topics/Fill5'
import Fill6 from './src/share/programme/Math1/fill/topics/Fill6'
import Fill7 from './src/share/programme/Math1/fill/topics/Fill7'
import Fill8 from './src/share/programme/Math1/fill/topics/Fill8'
import Fill9 from './src/share/programme/Math1/fill/topics/Fill9'
import Fill10 from './src/share/programme/Math1/fill/topics/Fill10'
import Fill11 from './src/share/programme/Math1/fill/topics/Fill11'
import Fill12 from './src/share/programme/Math1/fill/topics/Fill12'
import Fill13 from './src/share/programme/Math1/fill/topics/Fill13'
import Fill14 from './src/share/programme/Math1/fill/topics/Fill14'
import Fill15 from './src/share/programme/Math1/fill/topics/Fill15'
import Fill16 from './src/share/programme/Math1/fill/topics/Fill16'
import Fill17 from './src/share/programme/Math1/fill/topics/Fill17'
import Fill18 from './src/share/programme/Math1/fill/topics/Fill18'
import Fill19 from './src/share/programme/Math1/fill/topics/Fill19'
import Fill20 from './src/share/programme/Math1/fill/topics/Fill20'
import Answer1 from './src/share/programme/Math1/answer/topics/Answer1'
import Answer2 from './src/share/programme/Math1/answer/topics/Answer2'
import Answer3 from './src/share/programme/Math1/answer/topics/Answer3'
import Answer4 from './src/share/programme/Math1/answer/topics/Answer4'
import Answer5 from './src/share/programme/Math1/answer/topics/Answer5'
import Answer6 from './src/share/programme/Math1/answer/topics/Answer6'
import Answer7 from './src/share/programme/Math1/answer/topics/Answer7'
import Answer8 from './src/share/programme/Math1/answer/topics/Answer8'
import Answer9 from './src/share/programme/Math1/answer/topics/Answer9'
import Answer10 from './src/share/programme/Math1/answer/topics/Answer10'
import Answer11 from './src/share/programme/Math1/answer/topics/Answer11'
import Answer12 from './src/share/programme/Math1/answer/topics/Answer12'
import Answer13 from './src/share/programme/Math1/answer/topics/Answer13'
import Answer14 from './src/share/programme/Math1/answer/topics/Answer14'
import Answer15 from './src/share/programme/Math1/answer/topics/Answer15'
import Answer16 from './src/share/programme/Math1/answer/topics/Answer16'
import Answer17 from './src/share/programme/Math1/answer/topics/Answer17'
import Answer18 from './src/share/programme/Math1/answer/topics/Answer18'
import Answer19 from './src/share/programme/Math1/answer/topics/Answer19'
import Answer20 from './src/share/programme/Math1/answer/topics/Answer20'

import Math2 from './src/share/programme/Math2/Math2';
import Math2Choose2 from './src/share/programme/Math2/choose/Choose'
import Math2Fill2 from './src/share/programme/Math2/fill/Fill'
import Math2Answer2 from './src/share/programme/Math2/answer/Answer'
import Choose21 from './src/share/programme/Math2/choose/topics/Choose1'
import Choose22 from './src/share/programme/Math2/choose/topics/Choose2'
import Choose23 from './src/share/programme/Math2/choose/topics/Choose3'
import Choose24 from './src/share/programme/Math2/choose/topics/Choose4'
import Choose25 from './src/share/programme/Math2/choose/topics/Choose5'
import Choose26 from './src/share/programme/Math2/choose/topics/Choose6'
import Choose27 from './src/share/programme/Math2/choose/topics/Choose7'
import Choose28 from './src/share/programme/Math2/choose/topics/Choose8'
import Choose29 from './src/share/programme/Math2/choose/topics/Choose9'
import Choose210 from './src/share/programme/Math2/choose/topics/Choose10'
import Choose211 from './src/share/programme/Math2/choose/topics/Choose11'
import Choose212 from './src/share/programme/Math2/choose/topics/Choose12'
import Choose213 from './src/share/programme/Math2/choose/topics/Choose13'
import Choose214 from './src/share/programme/Math2/choose/topics/Choose14'
import Choose215 from './src/share/programme/Math2/choose/topics/Choose15'
import Choose216 from './src/share/programme/Math2/choose/topics/Choose16'
import Choose217 from './src/share/programme/Math2/choose/topics/Choose17'
import Choose218 from './src/share/programme/Math2/choose/topics/Choose18'
import Choose219 from './src/share/programme/Math2/choose/topics/Choose19'
import Choose220 from './src/share/programme/Math2/choose/topics/Choose20'
import Fill21 from './src/share/programme/Math2/fill/topics/Fill1'
import Fill22 from './src/share/programme/Math2/fill/topics/Fill2'
import Fill23 from './src/share/programme/Math2/fill/topics/Fill3'
import Fill24 from './src/share/programme/Math2/fill/topics/Fill4'
import Fill25 from './src/share/programme/Math2/fill/topics/Fill5'
import Fill26 from './src/share/programme/Math2/fill/topics/Fill6'
import Fill27 from './src/share/programme/Math2/fill/topics/Fill7'
import Fill28 from './src/share/programme/Math2/fill/topics/Fill8'
import Fill29 from './src/share/programme/Math2/fill/topics/Fill9'
import Fill210 from './src/share/programme/Math2/fill/topics/Fill10'
import Fill211 from './src/share/programme/Math2/fill/topics/Fill11'
import Fill212 from './src/share/programme/Math2/fill/topics/Fill12'
import Fill213 from './src/share/programme/Math2/fill/topics/Fill13'
import Fill214 from './src/share/programme/Math2/fill/topics/Fill14'
import Fill215 from './src/share/programme/Math2/fill/topics/Fill15'
import Fill216 from './src/share/programme/Math2/fill/topics/Fill16'
import Fill217 from './src/share/programme/Math2/fill/topics/Fill17'
import Fill218 from './src/share/programme/Math2/fill/topics/Fill18'
import Fill219 from './src/share/programme/Math2/fill/topics/Fill19'
import Fill220 from './src/share/programme/Math2/fill/topics/Fill20'
import Answer21 from './src/share/programme/Math2/answer/topics/Answer1'
import Answer22 from './src/share/programme/Math2/answer/topics/Answer2'
import Answer23 from './src/share/programme/Math2/answer/topics/Answer3'
import Answer24 from './src/share/programme/Math2/answer/topics/Answer4'
import Answer25 from './src/share/programme/Math2/answer/topics/Answer5'
import Answer26 from './src/share/programme/Math2/answer/topics/Answer6'
import Answer27 from './src/share/programme/Math2/answer/topics/Answer7'
import Answer28 from './src/share/programme/Math2/answer/topics/Answer8'
import Answer29 from './src/share/programme/Math2/answer/topics/Answer9'
import Answer210 from './src/share/programme/Math2/answer/topics/Answer10'
import Answer211 from './src/share/programme/Math2/answer/topics/Answer11'
import Answer212 from './src/share/programme/Math2/answer/topics/Answer12'
import Answer213 from './src/share/programme/Math2/answer/topics/Answer13'
import Answer214 from './src/share/programme/Math2/answer/topics/Answer14'
import Answer215 from './src/share/programme/Math2/answer/topics/Answer15'
import Answer216 from './src/share/programme/Math2/answer/topics/Answer16'
import Answer217 from './src/share/programme/Math2/answer/topics/Answer17'
import Answer218 from './src/share/programme/Math2/answer/topics/Answer18'
import Answer219 from './src/share/programme/Math2/answer/topics/Answer19'
import Answer220 from './src/share/programme/Math2/answer/topics/Answer20'

import English1 from './src/share/programme/English1/English1';
import Gestalt from './src/share/programme/English1/gestalt/Gestalt';
import Read from './src/share/programme/English1/read/Read';
import Translate from './src/share/programme/English1/translate/Translate';
import Gestalt1 from './src/share/programme/English1/gestalt/topics/Gestalt1'
import Gestalt2 from './src/share/programme/English1/gestalt/topics/Gestalt2'
import Gestalt3 from './src/share/programme/English1/gestalt/topics/Gestalt3'
import Gestalt4 from './src/share/programme/English1/gestalt/topics/Gestalt4'
import Gestalt5 from './src/share/programme/English1/gestalt/topics/Gestalt5'
import Gestalt6 from './src/share/programme/English1/gestalt/topics/Gestalt6'
import Gestalt7 from './src/share/programme/English1/gestalt/topics/Gestalt7'
import Gestalt8 from './src/share/programme/English1/gestalt/topics/Gestalt8'
import Gestalt9 from './src/share/programme/English1/gestalt/topics/Gestalt9'
import Gestalt10 from './src/share/programme/English1/gestalt/topics/Gestalt10'
import Gestalt11 from './src/share/programme/English1/gestalt/topics/Gestalt11'
import Gestalt12 from './src/share/programme/English1/gestalt/topics/Gestalt12'
import Gestalt13 from './src/share/programme/English1/gestalt/topics/Gestalt13'
import Gestalt14 from './src/share/programme/English1/gestalt/topics/Gestalt14'
import Gestalt15 from './src/share/programme/English1/gestalt/topics/Gestalt15'
import Gestalt16 from './src/share/programme/English1/gestalt/topics/Gestalt16'
import Gestalt17 from './src/share/programme/English1/gestalt/topics/Gestalt17'
import Gestalt18 from './src/share/programme/English1/gestalt/topics/Gestalt18'
import Gestalt19 from './src/share/programme/English1/gestalt/topics/Gestalt19'
import Gestalt20 from './src/share/programme/English1/gestalt/topics/Gestalt20'
import Read1 from './src/share/programme/English1/read/topics/Read1'
import Read2 from './src/share/programme/English1/read/topics/Read2';
import Read3 from './src/share/programme/English1/read/topics/Read3';
import Read4 from './src/share/programme/English1/read/topics/Read4';
import Read5 from './src/share/programme/English1/read/topics/Read5';
import Read6 from './src/share/programme/English1/read/topics/Read6';
import Read7 from './src/share/programme/English1/read/topics/Read7';
import Read8 from './src/share/programme/English1/read/topics/Read8';
import Read9 from './src/share/programme/English1/read/topics/Read9';
import Read10 from './src/share/programme/English1/read/topics/Read10';
import Read11 from './src/share/programme/English1/read/topics/Read11';
import Read12 from './src/share/programme/English1/read/topics/Read12';
import Read13 from './src/share/programme/English1/read/topics/Read13';
import Read14 from './src/share/programme/English1/read/topics/Read14';
import Read15 from './src/share/programme/English1/read/topics/Read15';
import Read16 from './src/share/programme/English1/read/topics/Read16';
import Read17 from './src/share/programme/English1/read/topics/Read17';
import Read18 from './src/share/programme/English1/read/topics/Read18';
import Read19 from './src/share/programme/English1/read/topics/Read19';
import Read20 from './src/share/programme/English1/read/topics/Read20';
import Translate1 from './src/share/programme/English1/translate/topics/Translate1';
import Translate2 from './src/share/programme/English1/translate/topics/Translate2';
import Translate3 from './src/share/programme/English1/translate/topics/Translate3';
import Translate4 from './src/share/programme/English1/translate/topics/Translate4';
import Translate5 from './src/share/programme/English1/translate/topics/Translate5';
import Translate6 from './src/share/programme/English1/translate/topics/Translate6';
import Translate7 from './src/share/programme/English1/translate/topics/Translate7';
import Translate8 from './src/share/programme/English1/translate/topics/Translate8';
import Translate9 from './src/share/programme/English1/translate/topics/Translate9';
import Translate10 from './src/share/programme/English1/translate/topics/Translate10';
import Translate11 from './src/share/programme/English1/translate/topics/Translate11';
import Translate12 from './src/share/programme/English1/translate/topics/Translate12';
import Translate13 from './src/share/programme/English1/translate/topics/Translate13';
import Translate14 from './src/share/programme/English1/translate/topics/Translate14';
import Translate15 from './src/share/programme/English1/translate/topics/Translate15';
import Translate16 from './src/share/programme/English1/translate/topics/Translate16';
import Translate17 from './src/share/programme/English1/translate/topics/Translate17';
import Translate18 from './src/share/programme/English1/translate/topics/Translate18';
import Translate19 from './src/share/programme/English1/translate/topics/Translate19';
import Translate20 from './src/share/programme/English1/translate/topics/Translate20';

// 王亚红
import English2 from './src/share/programme/English2/English2'
import Changnanju from './src/share/programme/English2/CNJ/Changnanju';
import Yuedu from './src/share/programme/English2/YD/Yuedu';
import Wanxingtiankong from './src/share/programme/English2/WXTK/Wanxingtiankong';
import TextDetail1 from './src/share/programme/English2/YD/TextDetail1';
import TextDetail2 from './src/share/programme/English2/YD/TextDetail2';
import TextDetail3 from './src/share/programme/English2/YD/TextDetail3';
import TextDetail4 from './src/share/programme/English2/YD/TextDetail4';
import TextDetail5 from './src/share/programme/English2/YD/TextDetail5';
import TextDetail6 from './src/share/programme/English2/YD/TextDetail6';
import TextDetail7 from './src/share/programme/English2/YD/TextDetail7';
import TextDetail8 from './src/share/programme/English2/YD/TextDetail8';
import TextDetail9 from './src/share/programme/English2/YD/TextDetail9';
import TextDetail10 from './src/share/programme/English2/YD/TextDetail10';
import TextDetail11 from './src/share/programme/English2/YD/TextDetail11';
import TextDetail12 from './src/share/programme/English2/YD/TextDetail12';
import TextDetail13 from './src/share/programme/English2/YD/TextDetail13';
import TextDetail14 from './src/share/programme/English2/YD/TextDetail14';
import TextDetail15 from './src/share/programme/English2/YD/TextDetail15';
import TextDetail16 from './src/share/programme/English2/YD/TextDetail16';
import TextDetail17 from './src/share/programme/English2/YD/TextDetail17';
import TextDetail18 from './src/share/programme/English2/YD/TextDetail18';
import TextDetail19 from './src/share/programme/English2/YD/TextDetail19';
import TextDetail20 from './src/share/programme/English2/YD/TextDetail20';

import WxtkDetail1 from './src/share/programme/English2/WXTK/WxtkDetail1';
import WxtkDetail2 from './src/share/programme/English2/WXTK/WxtkDetail2';
import WxtkDetail3 from './src/share/programme/English2/WXTK/WxtkDetail3';
import WxtkDetail4 from './src/share/programme/English2/WXTK/WxtkDetail4';
import WxtkDetail5 from './src/share/programme/English2/WXTK/WxtkDetail5';
import WxtkDetail6 from './src/share/programme/English2/WXTK/WxtkDetail6';
import WxtkDetail7 from './src/share/programme/English2/WXTK/WxtkDetail7';
import WxtkDetail8 from './src/share/programme/English2/WXTK/WxtkDetail8';
import WxtkDetail9 from './src/share/programme/English2/WXTK/WxtkDetail9';
import WxtkDetail10 from './src/share/programme/English2/WXTK/WxtkDetail10';
import WxtkDetail11 from './src/share/programme/English2/WXTK/WxtkDetail11';
import WxtkDetail12 from './src/share/programme/English2/WXTK/WxtkDetail12';
import WxtkDetail13 from './src/share/programme/English2/WXTK/WxtkDetail13';
import WxtkDetail14 from './src/share/programme/English2/WXTK/WxtkDetail14';
import WxtkDetail15 from './src/share/programme/English2/WXTK/WxtkDetail15';
import WxtkDetail16 from './src/share/programme/English2/WXTK/WxtkDetail16';
import WxtkDetail17 from './src/share/programme/English2/WXTK/WxtkDetail17';
import WxtkDetail18 from './src/share/programme/English2/WXTK/WxtkDetail18';
import WxtkDetail19 from './src/share/programme/English2/WXTK/WxtkDetail19';
import WxtkDetail20 from './src/share/programme/English2/WXTK/WxtkDetail20';

import CNJ1 from './src/share/programme/English2/CNJ/CNJ1';
import CNJ2 from './src/share/programme/English2/CNJ/CNJ2';
import CNJ3 from './src/share/programme/English2/CNJ/CNJ3';
import CNJ4 from './src/share/programme/English2/CNJ/CNJ4';
import CNJ5 from './src/share/programme/English2/CNJ/CNJ5';
import CNJ6 from './src/share/programme/English2/CNJ/CNJ6';
import CNJ7 from './src/share/programme/English2/CNJ/CNJ7';
import CNJ8 from './src/share/programme/English2/CNJ/CNJ8';
import CNJ9 from './src/share/programme/English2/CNJ/CNJ9';
import CNJ10 from './src/share/programme/English2/CNJ/CNJ10';
import CNJ11 from './src/share/programme/English2/CNJ/CNJ11';
import CNJ12 from './src/share/programme/English2/CNJ/CNJ12';
import CNJ13 from './src/share/programme/English2/CNJ/CNJ13';
import CNJ14 from './src/share/programme/English2/CNJ/CNJ14';
import CNJ15 from './src/share/programme/English2/CNJ/CNJ15';
import CNJ16 from './src/share/programme/English2/CNJ/CNJ16';
import CNJ17 from './src/share/programme/English2/CNJ/CNJ17';
import CNJ18 from './src/share/programme/English2/CNJ/CNJ18';
import CNJ19 from './src/share/programme/English2/CNJ/CNJ19';
import CNJ20 from './src/share/programme/English2/CNJ/CNJ20';

import Politics from './src/share/programme/Politics/Politics'
import PoliticsDetail1 from './src/share/programme/Politics/PoliticsDetail1';
import PoliticsDetail2 from './src/share/programme/Politics/PoliticsDetail2';
import PoliticsDetail3 from './src/share/programme/Politics/PoliticsDetail3';
import PoliticsDetail4 from './src/share/programme/Politics/PoliticsDetail4';
import PoliticsDetail5 from './src/share/programme/Politics/PoliticsDetail5';
import PoliticsDetail6 from './src/share/programme/Politics/PoliticsDetail6';
import PoliticsDetail7 from './src/share/programme/Politics/PoliticsDetail7';
import PoliticsDetail8 from './src/share/programme/Politics/PoliticsDetail8';
import PoliticsDetail9 from './src/share/programme/Politics/PoliticsDetail9';
import PoliticsDetail10 from './src/share/programme/Politics/PoliticsDetail10';




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
          if(Actions.currentScene == 'login' || Actions.currentScene == 'method' || Actions.currentScene == 'share' || Actions.currentScene == 'my' || Actions.currentScene == 'community'){
              if (new Date().getTime() - now < 2000) {
                BackHandler.exitApp();
              }
              else {
                ToastAndroid.show('再按一次退出应用', 100);
                now = new Date().getTime();
                return true;
              }
          }
          else{
            Actions.pop();
            return true;
          }
        }}
      >
        <Scene key='root'>
          <Tabs hideNavBar titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} title="校园新生通" key='tabbar' activeTintColor='#37376F' inactiveTintColor='black' tabBarStyle={{ backgroundColor: '#fff', borderTopWidth: 0 }}>
            {/* 攻略 */}
            <Scene key='methodPage' title='攻略' hideNavBar icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} />
            </Scene>
            {/* 社区 */}
            <Scene key='communityPage' hideNavBar title='社区' titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />
            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享' titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='share-alt' size={26} />} >
              <Scene key='share' component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene key='myPage' hideNavBar title='我的' titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='user-o' size={26} />}>
              <Scene key='my' component={My} />
            </Scene>
          </Tabs>
          {/* 登录 */}
          <Scene initial={!isLogin} hideNavBar key="login" component={Login} />
          <Scene key="signin" hideNavBar component={Signin} />
          <Scene key="choosecollege" hideNavBar component={Choosecollege} title='选择学院' renderRightButton={<View style={{ marginRight: 20 }}><Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' />
          <Scene key="forget" hideNavBar component={Forget} title='忘记密码' backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 社区 */}
          <Scene title='评论' hideNavBar key="learndetails" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} component={Details} />
          <Scene key='notesks' title='添加笔记' component={Notes} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} ></Scene>
          <Scene key="person" hideNavBar component={Person} />
          <Scene title='在经验分享中发布的帖子' hideNavBar key="perexp" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} component={PerExp} />
          <Scene title='在社区中发布的帖子' hideNavBar key="perlearn" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} component={PerLearn} />
          <Scene title='关注列表' key="followslist" component={Follows} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene title='粉丝列表' key="fanslist" component={Fans} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          {/* <Scene TabNavigator title='测试' key="index" component={Index} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} /> */}
          <Scene key="searchlearn" hideNavBar component={SearchLearn} />
          <Scene key="searchexp" hideNavBar component={SearchExp} />
          <Scene key="add" hideNavBar component={Add} />


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
          <Scene key='art' component={Art} title='文化艺术类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 学校 */}
          <Scene key='school' component={School} title='学校' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='synopsis' component={Synopsis} title='学校简介' hideNavBar  />
          <Scene key='subject' component={Subject} title='学科专业' hideNavBar />
          <Scene key='schoollogo' component={Schoollogo} title='学校标志' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='scenery' component={Scenery} title='校园风光' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='personnel' component={Personnel} title='人才培养' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='govern' component={Govern} title='治理架构' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='science' component={Science} title='科学研究' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='obtainemployment' component={Obtainemployment} hideNavBar title='就业服务' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='shiziduiwu' component={Shiziduiwu} hideNavBar title='师资队伍' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='undergradute' component={Undergradute} hideNavBar title='本科生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='gradute' component={Gradute}  title='研究生教育' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='continus' component={Continus} title='继续教育' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='overseas' component={Overseas} title='留学生教育' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='course' component={Course} title='课程设置' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='practise' component={Practise} title='实践教学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='teaching' component={Teaching} title='教学督导' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='famousteachers' component={FamousTeachers} title='教学名师' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='achievement' component={Achievement} title='教学成果' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='terrace' component={Terrace} title='科学研究平台' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='technology' component={Technology} title='自然科学与技术' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='human' component={Human} title='人文与社会科学' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='cooperate' component={Cooperate} title='合作交流' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='learning' component={Learning} title='学术期刊' hideNavBar backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

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
          <Scene key='cet41' title='四级资料' component={Cet41} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='appear' title='四级高频词汇' component={Appear} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wordone' title='四级必背词汇' component={Word} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readone' title='阅读理解' component={Readone} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='one' title='第一篇大学专业选择' component={One} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='two' title='第一篇大学专业选择' component={Two} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='three' title='第一篇大学专业选择' component={Three} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='four' title='第一篇大学专业选择' component={Four} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='selectten1' title='十五选十' component={Selectten1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='selectfive1' title='精选作文' component={SelectFive1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
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
          <Scene key='first' title='第一篇' component={First} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='second1' title='第一篇' component={Second1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='third' title='第一篇' component={Third} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fourth' title='第一篇' component={Fourth} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='programme' title='考研资料' component={Programme} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
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

          <Scene key='cet61' title='六级资料' component={Cet61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gaopin6' title='高频词汇' component={Gaopin6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='word6' title='必背词汇' component={Word6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu6' title='十五选十' component={Shiwu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu6' title='阅读练习题' component={Yuedu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen' title='六级作文' component={Zuowen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen1' title='喜欢居住在大城市or乡村' component={Zuowen61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen2' title='英国就业率' component={Zuowen62} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen3' title='快餐在中国快速发展' component={Zuowen63} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen4' title='小企业的劣势' component={Zuowen64} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen5' title='助学贷款的优势' component={Zuowen65} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen6' title='你是否同意' component={Zuowen66} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen7' title='你是否同意各国...' component={Zuowen67} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen8' title='你对出版物应该审查持什么态度' component={Zuowen68} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen9' title='独生子女的利弊' component={Zuowen69} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen10' title='为小学生选择一种牌子的面包' component={Zuowen610} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
         
          <Scene key='shiwu61' title='十五选十（一）' component={Shiwu61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu62' title='十五选十（二）' component={Shiwu62} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu63' title='十五选十（三）' component={Shiwu63} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu64' title='十五选十（四）' component={Shiwu64} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu65' title='六级十五选十（五）' component={Shiwu65} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu66' title='六级十五选十（六）' component={Shiwu66} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu67' title='六级十五选十（七）' component={Shiwu67} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu68' title='六级十五选十（八）' component={Shiwu68} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu69' title='六级十五选十（九）' component={Shiwu69} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu610' title='六级十五选十（十）' component={Shiwu610} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu61' title='新加坡' component={Yuedu61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu62' title='基督教' component={Yuedu62} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu63' title='澳大利亚' component={Yuedu63} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu64' title='埃及' component={Yuedu64} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu65' title='体育休闲' component={Yuedu65} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu66' title='旅游休闲' component={Yuedu66} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu67' title='发挥你的潜力' component={Yuedu67} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu68' title='社会文化' component={Yuedu68} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu69' title='休闲艺术' component={Yuedu69} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu610' title='eBay购物' component={Yuedu610} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu611' title='心理健康' component={Yuedu611} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu612' title='Campus Life' component={Yuedu612} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu613' title='手语' component={Yuedu613} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu614' title='家庭生活' component={Yuedu614} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu615' title='人文知识' component={Yuedu615} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu616' title='生活现象' component={Yuedu616} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu617' title='教育' component={Yuedu617} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu618' title='娱乐' component={Yuedu618} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu619' title='政治军事' component={Yuedu619} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu620' title='生活方式' component={Yuedu620} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 笔记 */}
          <Scene key='notes' title='笔记' component={Notes} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='notesDetails' hideNavBar component={NotesDetails} />
          <Scene key='addNotes' hideNavBar component={AddNotes} />

          <Scene key='experience' title='经验分享' component={Experience} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='expdetails' title='详情' component={ExpDetails} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='addexp' hideNavBar title='发布' component={AddExp} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='math1' title='数学一' component={Math1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose' title='选择题' component={Choose} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill' title='填空题' component={Fill} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer' title='简答题' component={Answer} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose1' title='选择题' component={Choose1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose2' title='选择题' component={Choose2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose3' title='选择题' component={Choose3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose4' title='选择题' component={Choose4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose5' title='选择题' component={Choose5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose6' title='选择题' component={Choose6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose7' title='选择题' component={Choose7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose8' title='选择题' component={Choose8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose9' title='选择题' component={Choose9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose10' title='选择题' component={Choose10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose11' title='选择题' component={Choose11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose12' title='选择题' component={Choose12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose13' title='选择题' component={Choose13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose14' title='选择题' component={Choose14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose15' title='选择题' component={Choose15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose16' title='选择题' component={Choose16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose17' title='选择题' component={Choose17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose18' title='选择题' component={Choose18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose19' title='选择题' component={Choose19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose20' title='选择题' component={Choose20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill1' title='填空题' component={Fill1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill2' title='填空题' component={Fill2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill3' title='填空题' component={Fill3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill4' title='填空题' component={Fill4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill5' title='填空题' component={Fill5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill6' title='填空题' component={Fill6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill7' title='填空题' component={Fill7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill8' title='填空题' component={Fill8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill9' title='填空题' component={Fill9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill10' title='填空题' component={Fill10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill11' title='填空题' component={Fill11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill12' title='填空题' component={Fill12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill13' title='填空题' component={Fill13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill14' title='填空题' component={Fill14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill15' title='填空题' component={Fill15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill16' title='填空题' component={Fill16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill17' title='填空题' component={Fill17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill18' title='填空题' component={Fill18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill19' title='填空题' component={Fill19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill20' title='填空题' component={Fill20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer1' title='解答题' component={Answer1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer2' title='解答题' component={Answer2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer3' title='解答题' component={Answer3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer4' title='解答题' component={Answer4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer5' title='解答题' component={Answer5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer6' title='解答题' component={Answer6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer7' title='解答题' component={Answer7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer8' title='解答题' component={Answer8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer9' title='解答题' component={Answer9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer10' title='解答题' component={Answer10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer11' title='解答题' component={Answer11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer12' title='解答题' component={Answer12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer13' title='解答题' component={Answer13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer14' title='解答题' component={Answer14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer15' title='解答题' component={Answer15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer16' title='解答题' component={Answer16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer17' title='解答题' component={Answer17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer18' title='解答题' component={Answer18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer19' title='解答题' component={Answer19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer20' title='解答题' component={Answer20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='math2' title='数学二' component={Math2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2choose2' title='选择题' component={Math2Choose2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2fill2' title='填空题' component={Math2Fill2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2answer2' title='简答题' component={Math2Answer2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose21' title='选择题' component={Choose21} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose22' title='选择题' component={Choose22} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose23' title='选择题' component={Choose23} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose24' title='选择题' component={Choose24} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose25' title='选择题' component={Choose25} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose26' title='选择题' component={Choose26} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose27' title='选择题' component={Choose27} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose28' title='选择题' component={Choose28} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose29' title='选择题' component={Choose29} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose210' title='选择题' component={Choose210} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose211' title='选择题' component={Choose211} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose212' title='选择题' component={Choose212} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose213' title='选择题' component={Choose213} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose214' title='选择题' component={Choose214} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose215' title='选择题' component={Choose215} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose216' title='选择题' component={Choose216} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose217' title='选择题' component={Choose217} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose218' title='选择题' component={Choose218} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose219' title='选择题' component={Choose219} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose220' title='选择题' component={Choose220} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill21' title='填空题' component={Fill21} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill22' title='填空题' component={Fill22} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill23' title='填空题' component={Fill23} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill24' title='填空题' component={Fill24} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill25' title='填空题' component={Fill25} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill26' title='填空题' component={Fill26} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill27' title='填空题' component={Fill27} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill28' title='填空题' component={Fill28} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill29' title='填空题' component={Fill29} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill210' title='填空题' component={Fill210} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill211' title='填空题' component={Fill211} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill212' title='填空题' component={Fill212} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill213' title='填空题' component={Fill213} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill214' title='填空题' component={Fill214} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill215' title='填空题' component={Fill215} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill216' title='填空题' component={Fill216} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill217' title='填空题' component={Fill217} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill218' title='填空题' component={Fill218} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill219' title='填空题' component={Fill219} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill220' title='填空题' component={Fill220} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer21' title='解答题' component={Answer21} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer22' title='解答题' component={Answer22} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer23' title='解答题' component={Answer23} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer24' title='解答题' component={Answer24} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer25' title='解答题' component={Answer25} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer26' title='解答题' component={Answer26} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer27' title='解答题' component={Answer27} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer28' title='解答题' component={Answer28} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer29' title='解答题' component={Answer29} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer210' title='解答题' component={Answer210} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer211' title='解答题' component={Answer211} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer212' title='解答题' component={Answer212} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer213' title='解答题' component={Answer213} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer214' title='解答题' component={Answer214} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer215' title='解答题' component={Answer215} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer216' title='解答题' component={Answer216} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer217' title='解答题' component={Answer217} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer218' title='解答题' component={Answer218} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer219' title='解答题' component={Answer219} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer220' title='解答题' component={Answer220} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='english1' title='英语一' component={English1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt' title='完形填空' component={Gestalt} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read' title='阅读理解' component={Read} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate' title='翻译' component={Translate} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt1' title='完型填空' component={Gestalt1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt2' title='完型填空' component={Gestalt2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt3' title='完型填空' component={Gestalt3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt4' title='完型填空' component={Gestalt4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt5' title='完型填空' component={Gestalt5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt6' title='完型填空' component={Gestalt6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt7' title='完型填空' component={Gestalt7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt8' title='完型填空' component={Gestalt8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt9' title='完型填空' component={Gestalt9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt10' title='完型填空' component={Gestalt10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt11' title='完型填空' component={Gestalt11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt12' title='完型填空' component={Gestalt12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt13' title='完型填空' component={Gestalt13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt14' title='完型填空' component={Gestalt14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt15' title='完型填空' component={Gestalt15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt16' title='完型填空' component={Gestalt16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt17' title='完型填空' component={Gestalt17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt18' title='完型填空' component={Gestalt18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt19' title='完型填空' component={Gestalt19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt20' title='完型填空' component={Gestalt20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read1' title='阅读理解' component={Read1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read2' title='阅读理解' component={Read2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read3' title='阅读理解' component={Read3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read4' title='阅读理解' component={Read4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read5' title='阅读理解' component={Read5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read6' title='阅读理解' component={Read6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read7' title='阅读理解' component={Read7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read8' title='阅读理解' component={Read8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read9' title='阅读理解' component={Read9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read10' title='阅读理解' component={Read10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read11' title='阅读理解' component={Read11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read12' title='阅读理解' component={Read12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read13' title='阅读理解' component={Read13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read14' title='阅读理解' component={Read14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read15' title='阅读理解' component={Read15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read16' title='阅读理解' component={Read16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read17' title='阅读理解' component={Read17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read18' title='阅读理解' component={Read18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read19' title='阅读理解' component={Read19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read20' title='阅读理解' component={Read20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate1' title='翻译' component={Translate1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate2' title='翻译' component={Translate2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate3' title='翻译' component={Translate3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate4' title='翻译' component={Translate4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate5' title='翻译' component={Translate5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate6' title='翻译' component={Translate6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate7' title='翻译' component={Translate7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate8' title='翻译' component={Translate8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate9' title='翻译' component={Translate9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate10' title='翻译' component={Translate10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate11' title='翻译' component={Translate11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate12' title='翻译' component={Translate12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate13' title='翻译' component={Translate13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate14' title='翻译' component={Translate14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate15' title='翻译' component={Translate15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate16' title='翻译' component={Translate16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate17' title='翻译' component={Translate17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate18' title='翻译' component={Translate18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate19' title='翻译' component={Translate19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate20' title='翻译' component={Translate20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='english2' title='英语二' component={English2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='changnanju' title='长难句' component={Changnanju} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu' title='阅读' component={Yuedu} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail1' title='阅读-Text 1' component={TextDetail1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail2' title='阅读-Text 2' component={TextDetail2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail3' title='阅读-Text 3' component={TextDetail3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail4' title='阅读-Text 4' component={TextDetail4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail5' title='阅读-Text 5' component={TextDetail5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail6' title='阅读-Text 6' component={TextDetail6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail7' title='阅读-Text 7' component={TextDetail7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail8' title='阅读-Text 8' component={TextDetail8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail9' title='阅读-Text 9' component={TextDetail9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail10' title='阅读-Text 10' component={TextDetail10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail11' title='阅读-Text 11' component={TextDetail11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail12' title='阅读-Text 12' component={TextDetail12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail13' title='阅读-Text 13' component={TextDetail13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail14' title='阅读-Text 14' component={TextDetail14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail15' title='阅读-Text 15' component={TextDetail15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail16' title='阅读-Text 16' component={TextDetail16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail17' title='阅读-Text 17' component={TextDetail17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail18' title='阅读-Text 18' component={TextDetail18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail19' title='阅读-Text 19' component={TextDetail19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail20' title='阅读-Text 20' component={TextDetail20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='wanxingtiankong' title='完形填空' component={Wanxingtiankong} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail1' title='完形填空-Text 1' component={WxtkDetail1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail2' title='完形填空-Text 2' component={WxtkDetail2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail3' title='完形填空-Text 3' component={WxtkDetail3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail4' title='完形填空-Text 4' component={WxtkDetail4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail5' title='完形填空-Text 5' component={WxtkDetail5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail6' title='完形填空-Text 6' component={WxtkDetail6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail7' title='完形填空-Text 7' component={WxtkDetail7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail8' title='完形填空-Text 8' component={WxtkDetail8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail9' title='完形填空-Text 9' component={WxtkDetail9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail10' title='完形填空-Text 10' component={WxtkDetail10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail11' title='完形填空-Text 11' component={WxtkDetail11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail12' title='完形填空-Text 12' component={WxtkDetail12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail13' title='完形填空-Text 13' component={WxtkDetail13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail14' title='完形填空-Text 14' component={WxtkDetail14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail15' title='完形填空-Text 15' component={WxtkDetail15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail16' title='完形填空-Text 16' component={WxtkDetail16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail17' title='完形填空-Text 17' component={WxtkDetail17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail18' title='完形填空-Text 18' component={WxtkDetail18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail19' title='完形填空-Text 19' component={WxtkDetail19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail20' title='完形填空-Text 20' component={WxtkDetail20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='CNJ1' title='长难句-Text1' component={CNJ1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ2' title='长难句-Text2' component={CNJ2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ3' title='长难句-Text3' component={CNJ3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ4' title='长难句-Text4' component={CNJ4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ5' title='长难句-Text5' component={CNJ5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ6' title='长难句-Text6' component={CNJ6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ7' title='长难句-Text7' component={CNJ7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ8' title='长难句-Text8' component={CNJ8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ9' title='长难句-Text9' component={CNJ9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ10' title='长难句-Tex10' component={CNJ10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ11' title='长难句-Text11' component={CNJ11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ12' title='长难句-Text12' component={CNJ12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ13' title='长难句-Text13' component={CNJ13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ14' title='长难句-Text14' component={CNJ14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ15' title='长难句-Text15' component={CNJ15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ16' title='长难句-Text16' component={CNJ16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ17' title='长难句-Text17' component={CNJ17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ18' title='长难句-Text18' component={CNJ18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ19' title='长难句-Text19' component={CNJ19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='CNJ20' title='长难句-Text20' component={CNJ20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='politics' title='政治' component={Politics} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail1' title='2020年真题' component={PoliticsDetail1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail2' title='2019年真题' component={PoliticsDetail2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail3' title='2018年真题' component={PoliticsDetail3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail4' title='2017年真题' component={PoliticsDetail4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail5' title='2016年真题' component={PoliticsDetail5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail6' title='2015年真题' component={PoliticsDetail6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail7' title='2014年真题' component={PoliticsDetail7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail8' title='2013年真题' component={PoliticsDetail8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail9' title='2012年真题' component={PoliticsDetail9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail10' title='2011年真题' component={PoliticsDetail10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 我的 */}
          <Scene key='biji' component={Biji} title='我的笔记' backButtonImage={require('./assets/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='tiezi' hideNavBar component={Xuexidongtai} renderTitle="我的帖子" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tongxun' component={Tongxun} renderTitle="通讯录" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='guanyu' component={Guanyu} renderTitle="关于我们" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fankui' component={Fankui} renderTitle="用户反馈" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tijiao' component={Tijiao} renderTitle="反馈成功" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="shezhi" component={Shezhi} renderTitle="设置" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="mima" component={Mima} renderTitle="重置密码" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="touxiang" component={Touxiang} renderTitle="我的头像" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="myexperence" hideNavBar component={Myexperence} renderTitle="我的经验" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="card" component={Card} renderTitle="卡片背景选择" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="head" hideNavBar component={Head} renderTitle="头像框选择" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="xiangqing" component={Xiangqing} renderTitle="详情" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="newadd" component={NewAdd} hideNavBar renderTitle="关注人发帖" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="newl" component={NewL} hideNavBar renderTitle="关注人发帖" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="newe" component={NewE} hideNavBar renderTitle="关注人发帖" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
        
        </Scene>
      </Router>
    </>
  );
};
export default App;