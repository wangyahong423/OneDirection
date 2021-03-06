import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// 攻略
import OneCard from './method/onecard/OneCard';
import Activate from './method/onecard/Activate';
import Invest from './method/onecard/Invest';
import Loss from './method/onecard/Loss';
import Organization from './method/organization/Organization';
import SchoolOrg from './method/organization/SchoolOrg';
import Practice from './method/organization/Practice';
import Physical from './method/organization/Physical';
import Academic from './method/organization/Academic';
import Art from './method/organization/Art';
import School from './method/school/School';
import Synopsis from './method/school/Synopsis';
import Subject from './method/school/Subject';
import ShoolLogo from './method/school/ShoolLogo';
import Scenery from './method/school/Scenery';
import Govern from './method/school/Govern';
import SchoolMap from './method/school/SchoolMap';
import Study from './method/study/Study';
import Zongheceping from './method/study/Zongheceping';
import Second from './method/study/Second';
import StudyJiangxuejin from './method/study/StudyJiangxuejin';
import StudyZhuxuejin from './method/study/StudyZhuxuejin';
import Alumnus from './method/schoolmates/Alumnus';
import College from './method/college/College';
import CollegeHistory from './method/college/CollegeHistory';
import CollegeTeachers from './method/college/CollegeTeachers';
import CollegeOther from './method/college/CollegeOther';
import CollegeMajor from './method/college/CollegeMajor';
import Lizhanshu from './method/schoolmates/Lizhanshu';
import Dengyingchao from './method/schoolmates/Dengyingchao';
import Situlanfang from './method/schoolmates/Situlanfang';
import Hehong from './method/schoolmates/Hehong';
import Zhangzhiwei from './method/schoolmates/Zhangzhiwei';
import Lishushen from './method/schoolmates/Lishushen';
import Gesangdeji from './method/schoolmates/Gesangdeji';
import Liujianya from './method/schoolmates/Liujianya';
import Wangfengming from './method/schoolmates/Wangfengming';
import Suguoan from './method/schoolmates/Suguoan';
import Zhangwenmao from './method/schoolmates/Zhangwenmao';
import Fanqianwen from './method/schoolmates/Fanqianwen';
import Panglaixing from './method/schoolmates/Panglaixing';
import Linwanli from './method/schoolmates/Linwanli';
import Xiachuancai from './method/schoolmates/Xiachuancai';
import Fengjiannan from './method/schoolmates/Fengjiannan';
import Caijiming from './method/schoolmates/Caijiming';
import Haobolin from './method/schoolmates/Haobolin'
import Liangxingjie from './method/schoolmates/Liangxingjie';
import Yanluguang from './method/schoolmates/Yanluguang';
import Wangjinjiang from './method/schoolmates/Wangjinjiang';
import Chenshuzeng from './method/schoolmates/Chenshuzeng';
import Luhongchang from './method/schoolmates/Luhongchang';
import Zhangyanping from './method/schoolmates/Zhangyanping';
import Houliang from './method/schoolmates/Houliang'
import Zhangmeizhi from './method/schoolmates/Zhangmeizhi'
import Liuyongrui from './method/schoolmates/Liuyongrui';
import Yuanzhigang from './method/schoolmates/Yuanzhigang'
import Mayujun from './method/schoolmates/Mayujun';
import Liuxiaojun from './method/schoolmates/Liuxiaojun';
import Chaiguanjing from './method/schoolmates/Chaiguanjing';
import Fengshaohui from './method/schoolmates/Fengshaohui';
import Liyimin from './method/schoolmates/Liyimin';
import Wangzhixin from './method/schoolmates/Wangzhixin';
import Zhanghe from './method/schoolmates/Zhanghe';
import Cailimin from './method/schoolmates/Cailimin';
import Longzhuangwei from './method/schoolmates/Longzhuangwei';

// 学校
import Rcpy from './method/school/Rcpy';
import Kxyj from './method/school/Kxyj';
import Jyfw from './method/school/Jyfw';
import SZDW from './method/school/com/SZDW';
import BKS from './method/school/com/BKS';
import YJS from './method/school/com/YJS';
import JXJY from './method/school/com/JXJY';
import LXS from './method/school/com/LXS';
import ZWHZ from './method/school/com/ZWHZ';

import KXYJPT from './method/school/com/KXYJPT';
import ZRKX from './method/school/com/ZRKX';
import RWSK from './method/school/com/RWSK';
import HZJL from './method/school/com/HZJL';
import XSQK from './method/school/com/XSQK';


import KCSZ from './method/school/com/component/KCSZ';
import SJJX from './method/school/com/component/SJJX';
import JXDD from './method/school/com/component/JXDD';
import JXMS from './method/school/com/component/JXMS';
import JXCG from './method/school/com/component/JXCG';

// 社区
import Add from './community/Add';
import Message from './community/news/Message';
import Messageone from './community/news/Messageone';
import About from './community/About';
import Ping from './community/Ping';

// 我的
import Tongxun from './my/Tongxun';
import Women from './my/Women';
import Yonghu from './my/Yonghu';
import Shezhi from './my/Shezhi';
import Fuwu from './my/Fuwu';
import Tiezi from "./my/Tiezi"
import Xuexi from "./my/Xuexi"
import Success from "./my/Success"
import ResetPwd from "./my/ResetPwd"
import ChangeImg from './my/ChangeImg';
import MyExperience from './my/MyExperience';
import MyNotes from './my/MyNotes';
import MynotesDetails from './my/MynotesDetails';
import MyexperienceDetails from './my/MyexperienceDetails';

// 我的关注与粉丝
import Myfollows from './my/Myfollows';
import Myfans from './my/Myfans';
import Myfolper from './my/Myfolper';
import Myfanper from './my/Myfanper';
import FolList from './my/FolList';
import FanList from './my/FanList';

import Head from './my/Head';
import Card from './my/Card';

// 登录注册
import Login from './login/Login';
import Zhuce from './login/Zhuce';

// container
import AppTab3 from "./container/AppTab3";
import AppTab1 from './container/AppTab1'
import AppTab from './container/AppTab'
import AppTab2 from './container/AppTab2'

// 共享
import Word from "./share/Word";
import PPT from "./share/PPT";

import Cet46 from './share/cet46/Cet46'
import Experience from './share/experience/Experience';
import Programme from './share/programme/Programme';
import Notes from './share/notes/Notes';
import NotesDetaile from './share/notes/NotesDetaile';
import AddNotes from './share/notes/AddNotes';
import Cet41 from './share/cet46/Four/Cet41';
import Cet61 from './share/cet46/Six/Cet61';
import Vocabulary from './share/cet46/Four/vocabulary/Vocabulary';
import Frequency from './share/cet46/Four/frequency/Frequency';
import Readone from './share/cet46/Four/read/Readone';
import SelectTen from './share/cet46/Four/selectTen/SelectTen';
import SelectFive from './share/cet46/Four/selectFive/SelectFive';
import Sijireadyi from './share/cet46/Four/read/read/Sijireadyi';
import Sijireader from './share/cet46/Four/read/read/Sijireader';
import Sijireadsan from './share/cet46/Four/read/read/Sijireadsan';
import Sijireadsi from './share/cet46/Four/read/read/Sijireadsi';
import Sijireadwu from './share/cet46/Four/read/read/Sijireadwu';
import Sijireadliu from './share/cet46/Four/read/read/Sijireadliu';
import Sijireadqi from './share/cet46/Four/read/read/Sijireadqi';
import Sijireadba from './share/cet46/Four/read/read/Sijireadba';
import Sijireadjiu from './share/cet46/Four/read/read/Sijireadjiu';
import Sijireadshi from './share/cet46/Four/read/read/Sijireadshi';
import Sijireadshiyi from './share/cet46/Four/read/read/Sijireadshiyi';
import Sijireadshier from './share/cet46/Four/read/read/Sijireadshier';
import Sijireadshisan from './share/cet46/Four/read/read/Sijireadshisan'
import Sijireadshisi from './share/cet46/Four/read/read/Sijireadshisi';
import Sijireadshiwu from './share/cet46/Four/read/read/Sijireadshiwu';
import Sijireadshiliu from './share/cet46/Four/read/read/Sijireadshiliu';
import Sijireadshiqi from './share/cet46/Four/read/read/Sijireadshiqi';
import Sijireadshiba from './share/cet46/Four/read/read/Sijireadshiba';
import Sijireadshijiu from './share/cet46/Four/read/read/Sijireadshijiu';
import Sijireadershi from './share/cet46/Four/read/read/Sijireadershi';
import Selectten1 from './share/cet46/Four/selectTen/selectten/Selectten1';
import Selectten2 from './share/cet46/Four/selectTen/selectten/Selectten2';
import Selectten3 from './share/cet46/Four/selectTen/selectten/Selectten3';
import Selectten4 from './share/cet46/Four/selectTen/selectten/Selectten4';
import Selectten5 from './share/cet46/Four/selectTen/selectten/Selectten5';
import Selectten6 from './share/cet46/Four/selectTen/selectten/Selectten6';
import Selectten7 from './share/cet46/Four/selectTen/selectten/Selectten7';
import Selectten8 from './share/cet46/Four/selectTen/selectten/Selectten8';
import Selectten9 from './share/cet46/Four/selectTen/selectten/Selectten9';
import Selectten10 from './share/cet46/Four/selectTen/selectten/Selectten10';
import Selectten11 from './share/cet46/Four/selectTen/selectten/Selectten11';
import Selectten12 from './share/cet46/Four/selectTen/selectten/Selectten12';
import Selectten13 from './share/cet46/Four/selectTen/selectten/Selectten13';
import Selectten14 from './share/cet46/Four/selectTen/selectten/Selectten14';
import Selectten15 from './share/cet46/Four/selectTen/selectten/Selectten15';
import Selectten16 from './share/cet46/Four/selectTen/selectten/Selectten16';
import Selectten17 from './share/cet46/Four/selectTen/selectten/Selectten17';
import Selectten18 from './share/cet46/Four/selectTen/selectten/Selectten18';
import Selectten19 from './share/cet46/Four/selectTen/selectten/Selectten19';
import Selectten20 from './share/cet46/Four/selectTen/selectten/Selectten20';

import Liujiyueduyi from './share/cet46/Six/yuedu/yuedu/Liujiyueduyi';
import Liujiyueduer from './share/cet46/Six/yuedu/yuedu/Liujiyueduer';
import Liujiyuedusan from './share/cet46/Six/yuedu/yuedu/Liujiyuedusan';
import Liujiyuedusi from './share/cet46/Six/yuedu/yuedu/Liujiyuedusi';
import Liujiyueduwu from './share/cet46/Six/yuedu/yuedu/Liujiyueduwu';
import Liujiyueduliu from './share/cet46/Six/yuedu/yuedu/Liujiyueduliu';
import Liujiyueduqi from './share/cet46/Six/yuedu/yuedu/Liujiyueduqi';
import Liujiyueduba from './share/cet46/Six/yuedu/yuedu/Liujiyueduba';
import Liujiyuedujiu from './share/cet46/Six/yuedu/yuedu/Liujiyuedujiu';
import Liujiyuedushi from './share/cet46/Six/yuedu/yuedu/Liujiyuedushi';
import Liujiyuedushiyi from './share/cet46/Six/yuedu/yuedu/Liujiyuedushiyi';
import Liujiyuedushier from './share/cet46/Six/yuedu/yuedu/Liujiyuedushier';
import Liujiyuedushisan from './share/cet46/Six/yuedu/yuedu/Liujiyuedushisan'
import Liujiyuedushisi from './share/cet46/Six/yuedu/yuedu/Liujiyuedushisi';
import Liujiyuedushiwu from './share/cet46/Six/yuedu/yuedu/Liujiyuedushiwu';
import Liujiyuedushiliu from './share/cet46/Six/yuedu/yuedu/Liujiyuedushiliu';
import Liujiyuedushiqi from './share/cet46/Six/yuedu/yuedu/Liujiyuedushiqi';
import Liujiyuedushiba from './share/cet46/Six/yuedu/yuedu/Liujiyuedushiba';
import Liujiyuedushijiu from './share/cet46/Six/yuedu/yuedu/Liujiyuedushijiu';
import Liujiyueduershi from './share/cet46/Six/yuedu/yuedu/Liujiyueduershi';
import English1 from './share/programme/English1/English1';
import English2 from './share/programme/English2/English2';
import Math1 from './share/programme/Math1/Math1';
import Math2 from './share/programme/Math2/Math2';
import Zhengzhi from './share/programme/Zhengzhi/Zhengzhi';
import Bibei from './share/cet46/Six/bibei/Bibei';
import Gaopin from './share/cet46/Six/gaopin/Gaopin';
import Yuedu from './share/cet46/Six/yuedu/Yuedu';
import Selectfive1 from './share/cet46/Four/selectFive/selectfive/Selectfive1';
import Selectfive9 from './share/cet46/Four/selectFive/selectfive/Selectfive9';
import Selectfive2 from './share/cet46/Four/selectFive/selectfive/Selectfive2';
import Selectfive3 from './share/cet46/Four/selectFive/selectfive/Selectfive3';
import Selectfive4 from './share/cet46/Four/selectFive/selectfive/Selectfive4';
import Selectfive5 from './share/cet46/Four/selectFive/selectfive/Selectfive5';
import Selectfive6 from './share/cet46/Four/selectFive/selectfive/Selectfive6';
import Selectfive7 from './share/cet46/Four/selectFive/selectfive/Selectfive7';
import Selectfive8 from './share/cet46/Four/selectFive/selectfive/Selectfive8';
import Selectfive10 from './share/cet46/Four/selectFive/selectfive/Selectfive10';
import Selectfive11 from './share/cet46/Four/selectFive/selectfive/Selectfive11';
import Selectfive12 from './share/cet46/Four/selectFive/selectfive/Selectfive12';
import Selectfive13 from './share/cet46/Four/selectFive/selectfive/Selectfive13';
import Selectfive14 from './share/cet46/Four/selectFive/selectfive/Selectfive14';
import Selectfive15 from './share/cet46/Four/selectFive/selectfive/Selectfive15';
import Selectfive16 from './share/cet46/Four/selectFive/selectfive/Selectfive16';
import Selectfive17 from './share/cet46/Four/selectFive/selectfive/Selectfive17';
import Selectfive18 from './share/cet46/Four/selectFive/selectfive/Selectfive18';
import Selectfive19 from './share/cet46/Four/selectFive/selectfive/Selectfive19';
import Selectfive20 from './share/cet46/Four/selectFive/selectfive/Selectfive20';
import Shiwuxuanshi from './share/cet46/Six/shiwuxuanshi/Shiwuxuanshi';
import Zuowen from './share/cet46/Six/zuowen/Zuowen';
import Shiwu1 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu1';
import Shiwu2 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu2';
import Shiwu3 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu3';
import Shiwu4 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu4';
import Shiwu5 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu5';
import Shiwu6 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu6';
import Shiwu7 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu7';
import Shiwu8 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu8';
import Shiwu9 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu9';
import Shiwu10 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu10';
import Shiwu11 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu11';
import Shiwu12 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu12';
import Shiwu13 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu13';
import Shiwu14 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu14';
import Shiwu15 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu15';
import Shiwu16 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu16';
import Shiwu17 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu17';
import Shiwu18 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu18';
import Shiwu19 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu19';
import Shiwu20 from './share/cet46/Six/shiwuxuanshi/shiwuxuanshi/Shiwu20';
import Zuowen1 from './share/cet46/Six/zuowen/zuowen/Zuowen1';
import Zuowen2 from './share/cet46/Six/zuowen/zuowen/Zuowen2';
import Zuowen3 from './share/cet46/Six/zuowen/zuowen/Zuowen3';
import Zuowen4 from './share/cet46/Six/zuowen/zuowen/Zuowen4';
import Zuowen5 from './share/cet46/Six/zuowen/zuowen/Zuowen5';
import Zuowen6 from './share/cet46/Six/zuowen/zuowen/Zuowen6';
import Zuowen7 from './share/cet46/Six/zuowen/zuowen/Zuowen7';
import Zuowen8 from './share/cet46/Six/zuowen/zuowen/Zuowen8';
import Zuowen9 from './share/cet46/Six/zuowen/zuowen/Zuowen9';
import Zuowen10 from './share/cet46/Six/zuowen/zuowen/Zuowen10';
import Zuowen11 from './share/cet46/Six/zuowen/zuowen/Zuowen11';
import Zuowen12 from './share/cet46/Six/zuowen/zuowen/Zuowen12';
import Zuowen13 from './share/cet46/Six/zuowen/zuowen/Zuowen13';
import Zuowen14 from './share/cet46/Six/zuowen/zuowen/Zuowen14';
import Zuowen15 from './share/cet46/Six/zuowen/zuowen/Zuowen15';
import Zuowen16 from './share/cet46/Six/zuowen/zuowen/Zuowen16';
import Zuowen17 from './share/cet46/Six/zuowen/zuowen/Zuowen17';
import Zuowen18 from './share/cet46/Six/zuowen/zuowen/Zuowen18';
import Zuowen19 from './share/cet46/Six/zuowen/zuowen/Zuowen19';
import Zuowen20 from './share/cet46/Six/zuowen/zuowen/Zuowen20';
import AddExp from './share/experience/AddExp';
import ExpDetails from './share/experience/ExpDetails';
import Gestalt from './share/programme/English1/gestalt/Gestalt';
import Translate from './share/programme/English1/translate/Translate';
import Read from './share/programme/English1/read/Read';
import Gestalt1 from './share/programme/English1/gestalt/topics/Gestalt1';
import Gestalt2 from './share/programme/English1/gestalt/topics/Gestalt2';
import Gestalt3 from './share/programme/English1/gestalt/topics/Gestalt3';
import Gestalt4 from './share/programme/English1/gestalt/topics/Gestalt4';
import Gestalt5 from './share/programme/English1/gestalt/topics/Gestalt5';
import Gestalt6 from './share/programme/English1/gestalt/topics/Gestalt6';
import Gestalt7 from './share/programme/English1/gestalt/topics/Gestalt7';
import Gestalt8 from './share/programme/English1/gestalt/topics/Gestalt8';
import Gestalt9 from './share/programme/English1/gestalt/topics/Gestalt9';
import Gestalt10 from './share/programme/English1/gestalt/topics/Gestalt10';
import Gestalt11 from './share/programme/English1/gestalt/topics/Gestalt11';
import Gestalt12 from './share/programme/English1/gestalt/topics/Gestalt12';
import Gestalt13 from './share/programme/English1/gestalt/topics/Gestalt13';
import Gestalt14 from './share/programme/English1/gestalt/topics/Gestalt14';
import Gestalt15 from './share/programme/English1/gestalt/topics/Gestalt15';
import Gestalt16 from './share/programme/English1/gestalt/topics/Gestalt16';
import Gestalt17 from './share/programme/English1/gestalt/topics/Gestalt17';
import Gestalt18 from './share/programme/English1/gestalt/topics/Gestalt18';
import Gestalt19 from './share/programme/English1/gestalt/topics/Gestalt19';
import Gestalt20 from './share/programme/English1/gestalt/topics/Gestalt20';
import Read1 from './share/programme/English1/read/topics/Read1';
import Read2 from './share/programme/English1/read/topics/Read2';
import Read3 from './share/programme/English1/read/topics/Read3';
import Read4 from './share/programme/English1/read/topics/Read4';
import Read5 from './share/programme/English1/read/topics/Read5';
import Read6 from './share/programme/English1/read/topics/Read6';
import Read7 from './share/programme/English1/read/topics/Read7';
import Read8 from './share/programme/English1/read/topics/Read8';
import Read9 from './share/programme/English1/read/topics/Read9';
import Read10 from './share/programme/English1/read/topics/Read10';
import Read11 from './share/programme/English1/read/topics/Read11';
import Read12 from './share/programme/English1/read/topics/Read12';
import Read13 from './share/programme/English1/read/topics/Read13';
import Read14 from './share/programme/English1/read/topics/Read14';
import Read15 from './share/programme/English1/read/topics/Read15';
import Read16 from './share/programme/English1/read/topics/Read16';
import Read17 from './share/programme/English1/read/topics/Read17';
import Read18 from './share/programme/English1/read/topics/Read18';
import Read19 from './share/programme/English1/read/topics/Read19';
import Read20 from './share/programme/English1/read/topics/Read20';
import Wxtk from './share/programme/English2/WXTK/Wxtk';
import Yd from './share/programme/English2/YD/Yd';
import Cnj from './share/programme/English2/CNJ/Cnj';
import Wxtk1 from './share/programme/English2/WXTK/WXTK/Wxtk1';
import Wxtk2 from './share/programme/English2/WXTK/WXTK/Wxtk2';
import Wxtk3 from './share/programme/English2/WXTK/WXTK/Wxtk3';
import Wxtk4 from './share/programme/English2/WXTK/WXTK/Wxtk4';
import Wxtk5 from './share/programme/English2/WXTK/WXTK/Wxtk5';
import Wxtk6 from './share/programme/English2/WXTK/WXTK/Wxtk6';
import Wxtk7 from './share/programme/English2/WXTK/WXTK/Wxtk7';
import Wxtk8 from './share/programme/English2/WXTK/WXTK/Wxtk8';
import Wxtk9 from './share/programme/English2/WXTK/WXTK/Wxtk9';
import Wxtk10 from './share/programme/English2/WXTK/WXTK/Wxtk10';
import Wxtk11 from './share/programme/English2/WXTK/WXTK/Wxtk11';
import Wxtk12 from './share/programme/English2/WXTK/WXTK/Wxtk12';
import Wxtk13 from './share/programme/English2/WXTK/WXTK/Wxtk13';
import Wxtk14 from './share/programme/English2/WXTK/WXTK/Wxtk14';
import Wxtk15 from './share/programme/English2/WXTK/WXTK/Wxtk15';
import Wxtk16 from './share/programme/English2/WXTK/WXTK/Wxtk16';
import Wxtk17 from './share/programme/English2/WXTK/WXTK/Wxtk17';
import Wxtk18 from './share/programme/English2/WXTK/WXTK/Wxtk18';
import Wxtk19 from './share/programme/English2/WXTK/WXTK/Wxtk19';
import Wxtk20 from './share/programme/English2/WXTK/WXTK/Wxtk20';
import Yd1 from './share/programme/English2/YD/YD/Yd1';
import Yd2 from './share/programme/English2/YD/YD/Yd2';
import Yd3 from './share/programme/English2/YD/YD/Yd3';
import Yd4 from './share/programme/English2/YD/YD/Yd4';
import Yd5 from './share/programme/English2/YD/YD/Yd5';
import Yd6 from './share/programme/English2/YD/YD/Yd6';
import Yd7 from './share/programme/English2/YD/YD/Yd7';
import Yd8 from './share/programme/English2/YD/YD/Yd8';
import Yd9 from './share/programme/English2/YD/YD/Yd9';
import Yd10 from './share/programme/English2/YD/YD/Yd10';
import Yd11 from './share/programme/English2/YD/YD/Yd11';
import Yd12 from './share/programme/English2/YD/YD/Yd12';
import Yd13 from './share/programme/English2/YD/YD/Yd13';
import Yd14 from './share/programme/English2/YD/YD/Yd14';
import Yd15 from './share/programme/English2/YD/YD/Yd15';
import Yd16 from './share/programme/English2/YD/YD/Yd16';
import Yd17 from './share/programme/English2/YD/YD/Yd17';
import Yd18 from './share/programme/English2/YD/YD/Yd18';
import Yd19 from './share/programme/English2/YD/YD/Yd19';
import Yd20 from './share/programme/English2/YD/YD/Yd20';
import Translate1 from './share/programme/English1/translate/topics/Translate1';
import Translate2 from './share/programme/English1/translate/topics/Translate2';
import Translate3 from './share/programme/English1/translate/topics/Translate3';
import Translate4 from './share/programme/English1/translate/topics/Translate4';
import Translate5 from './share/programme/English1/translate/topics/Translate5';
import Translate6 from './share/programme/English1/translate/topics/Translate6';
import Translate7 from './share/programme/English1/translate/topics/Translate7';
import Translate8 from './share/programme/English1/translate/topics/Translate8';
import Translate9 from './share/programme/English1/translate/topics/Translate9';
import Translate10 from './share/programme/English1/translate/topics/Translate10';
import Translate11 from './share/programme/English1/translate/topics/Translate11';
import Translate12 from './share/programme/English1/translate/topics/Translate12';
import Translate13 from './share/programme/English1/translate/topics/Translate13';
import Translate14 from './share/programme/English1/translate/topics/Translate14';
import Translate15 from './share/programme/English1/translate/topics/Translate15';
import Translate16 from './share/programme/English1/translate/topics/Translate16';
import Translate17 from './share/programme/English1/translate/topics/Translate17';
import Translate18 from './share/programme/English1/translate/topics/Translate18';
import Translate19 from './share/programme/English1/translate/topics/Translate19';
import Translate20 from './share/programme/English1/translate/topics/Translate20';
import Cnj1 from './share/programme/English2/CNJ/CNJ/Cnj1';
import Cnj2 from './share/programme/English2/CNJ/CNJ/Cnj2';
import Cnj3 from './share/programme/English2/CNJ/CNJ/Cnj3';
import Cnj4 from './share/programme/English2/CNJ/CNJ/Cnj4';
import Cnj5 from './share/programme/English2/CNJ/CNJ/Cnj5';
import Cnj6 from './share/programme/English2/CNJ/CNJ/Cnj6';
import Cnj7 from './share/programme/English2/CNJ/CNJ/Cnj7';
import Cnj8 from './share/programme/English2/CNJ/CNJ/Cnj8';
import Cnj9 from './share/programme/English2/CNJ/CNJ/Cnj9';
import Cnj10 from './share/programme/English2/CNJ/CNJ/Cnj10';
import Cnj11 from './share/programme/English2/CNJ/CNJ/Cnj11';
import Cnj12 from './share/programme/English2/CNJ/CNJ/Cnj12';
import Cnj13 from './share/programme/English2/CNJ/CNJ/Cnj13';
import Cnj14 from './share/programme/English2/CNJ/CNJ/Cnj14';
import Cnj15 from './share/programme/English2/CNJ/CNJ/Cnj15';
import Cnj16 from './share/programme/English2/CNJ/CNJ/Cnj16';
import Cnj17 from './share/programme/English2/CNJ/CNJ/Cnj17';
import Cnj18 from './share/programme/English2/CNJ/CNJ/Cnj18';
import Cnj19 from './share/programme/English2/CNJ/CNJ/Cnj19';
import Cnj20 from './share/programme/English2/CNJ/CNJ/Cnj20';
import Zhengzhi1 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi1';
import Zhengzhi2 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi2';
import Zhengzhi3 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi3';
import Zhengzhi4 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi4';
import Zhengzhi5 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi5';
import Zhengzhi6 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi6';
import Zhengzhi7 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi7';
import Zhengzhi8 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi8';
import Zhengzhi9 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi9';
import Zhengzhi10 from './share/programme/Zhengzhi/Zhengzhi/Zhengzhi10';
import Choose from './share/programme/Math1/choose/Choose';
import Xz from './share/programme/Math2/XZ/Xz';
import Fill from './share/programme/Math1/fill/Fill';
import Tk from './share/programme/Math2/Tk/Tk';
import Answer from './share/programme/Math1/answer/Answer';
import Jd from './share/programme/Math2/JD/Jd';


import Forget from './login/Forget';

//个人信息
import Person from './community/Person'
import Fans from './community/Fans';
import Follows from './community/Follows';
import FolPer from './community/FolPer';
import FanPer from './community/FanPer';
import PerDetails from './community/PerDetails';
import PerCom from './community/PerCom';
import FolDetails from './community/FolDetails';
import FolCom from './community/FolCom';
import FanDetails from './community/FanDetails';
import FanCom from './community/FanCom';

//我关注的人发帖子
import NewAdd from './my/NewAdd';
import NewE from './my/NewE';
import NewL from './my/NewL';
import NewLcom from './my/NewLcom';
import NewLdetails from './my/NewLdetails';
import NewEdetails from './my/NewEdetails';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* 登录注册 */}
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={AppTab} />
                    <Route path="/zhuce" component={Zhuce} />
                    <Route path='/forget' component={Forget} />


                    {/* 我的 */}
                    <Route path='/mynotes' component={MyNotes} />
                    <Route path="/tongxunlvone" component={Tongxun} />
                    <Route path="/wm" component={Women} />
                    <Route path="/yonghufankui" component={Yonghu} />
                    <Route path="/shezhi" component={Shezhi} />
                    <Route path="/fuwu" component={Fuwu} />
                    <Route path="/tiezi" component={Tiezi} />
                    <Route path="/xuexiyouknow/:id" component={Xuexi} />
                    <Route path="/mynotesdetails/:id" component={MynotesDetails} />
                    <Route path="/myexperiencedetails/:id" component={MyexperienceDetails} />
                    <Route path="/Success" component={Success} />
                    <Route path="/Yonghu" component={Yonghu} />
                    <Route path='/reset' component={ResetPwd} />
                    <Route path='/changeImg' component={ChangeImg} />
                    <Route path='/myexperience' component={MyExperience} />

                    <Route path='/head' component={Head} />
                    <Route path='/card' component={Card} />

                    {/* 攻略 */}
                    <Route path='/onecard' component={OneCard} />
                    <Route exact path='/activate' component={Activate} />
                    <Route exact path='/invest' component={Invest} />
                    <Route exact path='/loss' component={Loss} />
                    <Route path='/organization' component={Organization} />
                    <Route path='/schoolorg' component={SchoolOrg} />
                    <Route path='/practice' component={Practice} />
                    <Route path='/physical' component={Physical} />
                    <Route path='/academic' component={Academic} />
                    <Route path='/art' component={Art} />
                    <Route path='/school' component={School} />
                    <Route path='/synopsis' component={Synopsis} />
                    <Route path='/subject' component={Subject} />
                    <Route path='/schoollogo' component={ShoolLogo} />
                    <Route path='/scenery' component={Scenery} />
                    <Route path='/govern' component={Govern} />
                    <Route path='/map' component={SchoolMap} />
                    <Route path='/study' component={Study} />
                    <Route path='/zongheceping' component={Zongheceping} />
                    <Route path='/second' component={Second} />
                    <Route path='/jiangxuejin' component={StudyJiangxuejin} />
                    <Route path='/zhuxuejin' component={StudyZhuxuejin} />
                    <Route path='/alumnus' component={Alumnus} />
                    <Route path='/lizhanshu' component={Lizhanshu} />
                    <Route path='/dengyingchao' component={Dengyingchao} />
                    <Route path='/situlanfang' component={Situlanfang} />
                    <Route path='/liujianya' component={Liujianya} />
                    <Route path='/hehong' component={Hehong} />
                    <Route path='/zhangzhiwei' component={Zhangzhiwei} />
                    <Route path='/lishushen' component={Lishushen} />
                    <Route path='/gesangdeji' component={Gesangdeji} />
                    <Route path='/wangfengming' component={Wangfengming} />
                    <Route path='/suguoan' component={Suguoan} />
                    <Route path='/zhangwenmao' component={Zhangwenmao} />
                    <Route path='/fanqianwen' component={Fanqianwen} />
                    <Route path='/panglaixing' component={Panglaixing} />
                    <Route path='/linwanli' component={Linwanli} />
                    <Route path='/xiachuancai' component={Xiachuancai} />
                    <Route path='/fengjiannan' component={Fengjiannan} />
                    <Route path='/caijiming' component={Caijiming} />
                    <Route path='/haobolin' component={Haobolin} />
                    <Route path='/liangxingjie' component={Liangxingjie} />
                    <Route path='/yanluguang' component={Yanluguang} />
                    <Route path='/wangjinjiang' component={Wangjinjiang} />
                    <Route path='/chenshuzeng' component={Chenshuzeng} />
                    <Route path='/luhongchang' component={Luhongchang} />
                    <Route path='/zhangyanping' component={Zhangyanping} />
                    <Route path='/houliang' component={Houliang} />
                    <Route path='/zhangmeizhi' component={Zhangmeizhi} />
                    <Route path='/liuyongrui' component={Liuyongrui} />
                    <Route path='/yuanzhigang' component={Yuanzhigang} />
                    <Route path='/mayujun' component={Mayujun} />
                    <Route path='/liuxiaojun' component={Liuxiaojun} />
                    <Route path='/chaiguanjing' component={Chaiguanjing} />
                    <Route path='/fengshaohui' component={Fengshaohui} />
                    <Route path='/liyimin' component={Liyimin} />
                    <Route path='/wangzhixin' component={Wangzhixin} />
                    <Route path='/zhanghe' component={Zhanghe} />
                    <Route path='/cailimin' component={Cailimin} />
                    <Route path='/longzhuangwei' component={Longzhuangwei} />

                    {/* 学校 */}
                    <Route path='/rcpy' component={Rcpy} />
                    <Route path='/kxyj' component={Kxyj} />
                    <Route path='/jyfw' component={Jyfw} />
                    <Route path='/bks' component={BKS} />
                    <Route path='/jxjy' component={JXJY} />
                    <Route path='/lxs' component={LXS} />
                    <Route path='/szdw' component={SZDW} />
                    <Route path='/yjs' component={YJS} />
                    <Route path='/zwhz' component={ZWHZ} />

                    <Route path='/kxjypt' component={KXYJPT} />
                    <Route path='/zrkx' component={ZRKX} />
                    <Route path='/rwsk' component={RWSK} />
                    <Route path='/hzjl' component={HZJL} />
                    <Route path='/xsqk' component={XSQK} />

                    <Route path='/jxcg' component={JXCG} />
                    <Route path='/jxdd' component={JXDD} />
                    <Route path='/jxms' component={JXMS} />
                    <Route path='/kcsz' component={KCSZ} />
                    <Route path='/sjjx' component={SJJX} />

                    {/* 学院 */}
                    <Route path='/college' component={College} />
                    <Route path='/collegeHistory' component={CollegeHistory} />
                    <Route path='/collegeTeachers' component={CollegeTeachers} />
                    <Route path='/collegeMajor' component={CollegeMajor} />
                    <Route path='/collegeOther' component={CollegeOther} />

                    {/* 社区 */}
                    <Route path="/community" component={AppTab1} />
                    <Route path="/my" component={AppTab2} />
                    <Route path="/add" component={Add} />
                    <Route path="/xinnews" component={Message} />
                    <Route path="/newsone" component={Messageone} />
                    <Route path="/aboutyouknow/:id" component={About} />
                    <Route path="/pinglunone/:id" component={Ping} />

                    {/* 共享 */}
                    <Route path="/Word" component={Word} />
                    <Route path="/PPT" component={PPT} />
                    <Route path="/Share" component={AppTab3} />

                    {/**四级六级 */}
                    <Route path="/cet46" component={Cet46} />
                    {/**四级 */}
                    <Route path='/siji' component={Cet41} />
                    <Route path='/bibei' component={Vocabulary} />
                    <Route path='/frequency' component={Frequency} />
                    <Route path='/yuedulianxi' component={Readone} />
                    <Route path='/fourselectten' component={SelectTen} />
                    <Route path='/fourselectfive' component={SelectFive} />
                    <Route path="/sijireadyi" component={Sijireadyi} />
                    <Route path='/sijireader' component={Sijireader} />
                    <Route path="/sijireadsan" component={Sijireadsan} />
                    <Route path="/sijireadsi" component={Sijireadsi} />
                    <Route path="/siijireadwu" component={Sijireadwu} />
                    <Route path="/sijireadliu" component={Sijireadliu} />
                    <Route path="/sijireadqi" component={Sijireadqi} />
                    <Route path="/sijireadba" component={Sijireadba} />
                    <Route path="/sijireadjiu" component={Sijireadjiu} />
                    <Route path="/sijireadshi" component={Sijireadshi} />
                    <Route path="/sijireadshiyi" component={Sijireadshiyi} />
                    <Route path="/sijireadshier" component={Sijireadshier} />
                    <Route path="/sijireadshisan" component={Sijireadshisan} />
                    <Route path="/sijireadshisi" component={Sijireadshisi} />
                    <Route path="/sijireadshiwu" component={Sijireadshiwu} />
                    <Route path="/sijireadshiliu" component={Sijireadshiliu} />
                    <Route path="/sijireadshiqi" component={Sijireadshiqi} />
                    <Route path="/sijireadshiba" component={Sijireadshiba} />
                    <Route path="/sijireadshijiu" component={Sijireadshijiu} />
                    <Route path="/sijireadershi" component={Sijireadershi} />
                    <Route path="/selectten1" component={Selectten1} />
                    <Route path="/selectten2" component={Selectten2} />
                    <Route path="/selectten3" component={Selectten3} />
                    <Route path="/selectten4" component={Selectten4} />
                    <Route path="/selectten5" component={Selectten5} />
                    <Route path="/selectten6" component={Selectten6} />
                    <Route path="/selectten7" component={Selectten7} />
                    <Route path="/selectten8" component={Selectten8} />
                    <Route path="/selectten9" component={Selectten9} />
                    <Route path="/selectten10" component={Selectten10} />
                    <Route path="/selectten11" component={Selectten11} />
                    <Route path="/selectten12" component={Selectten12} />
                    <Route path="/selectten13" component={Selectten13} />
                    <Route path="/selectten14" component={Selectten14} />
                    <Route path="/selectten15" component={Selectten15} />
                    <Route path="/selectten16" component={Selectten16} />
                    <Route path="/selectten17" component={Selectten17} />
                    <Route path="/selectten18" component={Selectten18} />
                    <Route path="/selectten19" component={Selectten19} />
                    <Route path="/selectten20" component={Selectten20} />
                    <Route path="/selectfive1" component={Selectfive1} />
                    <Route path="/selectfive2" component={Selectfive2} />
                    <Route path="/selectfive3" component={Selectfive3} />
                    <Route path="/selectfive4" component={Selectfive4} />
                    <Route path="/selectfive5" component={Selectfive5} />
                    <Route path="/selectfive6" component={Selectfive6} />
                    <Route path="/selectfive7" component={Selectfive7} />
                    <Route path="/selectfive8" component={Selectfive8} />
                    <Route path="/selectfive9" component={Selectfive9} />
                    <Route path="/selectfive10" component={Selectfive10} />
                    <Route path="/selectfive11" component={Selectfive11} />
                    <Route path="/selectfive12" component={Selectfive12} />
                    <Route path="/selectfive13" component={Selectfive13} />
                    <Route path="/selectfive14" component={Selectfive14} />
                    <Route path="/selectfive15" component={Selectfive15} />
                    <Route path="/selectfive16" component={Selectfive16} />
                    <Route path="/selectfive17" component={Selectfive17} />
                    <Route path="/selectfive18" component={Selectfive18} />
                    <Route path="/selectfive19" component={Selectfive19} />
                    <Route path="/selectfive20" component={Selectfive20} />
                    {/**六级 */}
                    <Route path='/liuji' component={Cet61} />
                    <Route path="/bibeicihui" component={Bibei} />
                    <Route path="/gaopin" component={Gaopin} />
                    <Route path="/yuedu" component={Yuedu} />
                    <Route path="/shiwuxuanshi" component={Shiwuxuanshi} />
                    <Route path="/zuowen" component={Zuowen} />
                    <Route path="/liujireadyi" component={Liujiyueduyi} />
                    <Route path='/liujireader' component={Liujiyueduer} />
                    <Route path="/liujireadsan" component={Liujiyuedusan} />
                    <Route path="/liujireadsi" component={Liujiyuedusi} />
                    <Route path="/liujiireadwu" component={Liujiyueduwu} />
                    <Route path="/liujireadliu" component={Liujiyueduliu} />
                    <Route path="/liujireadqi" component={Liujiyueduqi} />
                    <Route path="/liujireadba" component={Liujiyueduba} />
                    <Route path="/liujireadjiu" component={Liujiyuedujiu} />
                    <Route path="/liujireadshi" component={Liujiyuedushi} />
                    <Route path="/liujireadshiyi" component={Liujiyuedushiyi} />
                    <Route path="/liujireadshier" component={Liujiyuedushier} />
                    <Route path="/liujireadshisan" component={Liujiyuedushisan} />
                    <Route path="/liujireadshisi" component={Liujiyuedushisi} />
                    <Route path="/liujireadshiwu" component={Liujiyuedushiwu} />
                    <Route path="/liujireadshiliu" component={Liujiyuedushiliu} />
                    <Route path="/liujireadshiqi" component={Liujiyuedushiqi} />
                    <Route path="/liujireadshiba" component={Liujiyuedushiba} />
                    <Route path="/liujireadshijiu" component={Liujiyuedushijiu} />
                    <Route path="/liujireadershi" component={Liujiyueduershi} />
                    <Route path="/shiwu1" component={Shiwu1} />
                    <Route path="/shiwu2" component={Shiwu2} />
                    <Route path="/shiwu3" component={Shiwu3} />
                    <Route path="/shiwu4" component={Shiwu4} />
                    <Route path="/shiwu5" component={Shiwu5} />
                    <Route path="/shiwu6" component={Shiwu6} />
                    <Route path="/shiwu7" component={Shiwu7} />
                    <Route path="/shiwu8" component={Shiwu8} />
                    <Route path="/shiwu9" component={Shiwu9} />
                    <Route path="/shiwu10" component={Shiwu10} />
                    <Route path="/shiwu11" component={Shiwu11} />
                    <Route path="/shiwu12" component={Shiwu12} />
                    <Route path="/shiwu13" component={Shiwu13} />
                    <Route path="/shiwu14" component={Shiwu14} />
                    <Route path="/shiwu15" component={Shiwu15} />
                    <Route path="/shiwu16" component={Shiwu16} />
                    <Route path="/shiwu17" component={Shiwu17} />
                    <Route path="/shiwu18" component={Shiwu18} />
                    <Route path="/shiwu19" component={Shiwu19} />
                    <Route path="/shiwu20" component={Shiwu20} />
                    <Route path="/zuowen1" component={Zuowen1} />
                    <Route path="/zuowen2" component={Zuowen2} />
                    <Route path="/zuowen3" component={Zuowen3} />
                    <Route path="/zuowen4" component={Zuowen4} />
                    <Route path="/zuowen5" component={Zuowen5} />
                    <Route path="/zuowen6" component={Zuowen6} />
                    <Route path="/zuowen7" component={Zuowen7} />
                    <Route path="/zuowen8" component={Zuowen8} />
                    <Route path="/zuowen9" component={Zuowen9} />
                    <Route path="/zuowen10" component={Zuowen10} />
                    <Route path="/zuowen11" component={Zuowen11} />
                    <Route path="/zuowen12" component={Zuowen12} />
                    <Route path="/zuowen13" component={Zuowen13} />
                    <Route path="/zuowen14" component={Zuowen14} />
                    <Route path="/zuowen15" component={Zuowen15} />
                    <Route path="/zuowen16" component={Zuowen16} />
                    <Route path="/zuowen17" component={Zuowen17} />
                    <Route path="/zuowen18" component={Zuowen18} />
                    <Route path="/zuowen19" component={Zuowen19} />
                    <Route path="/zuowen20" component={Zuowen20} />

                    {/**考研 */}
                    <Route path='/programme' component={Programme} />

                    {/**数学一 */}
                    <Route path="/math1" component={Math1} />
                    <Route path="/choose" component={Choose} />
                    <Route path="/fill" component={Fill} />
                    <Route path="/answer" component={Answer} />

                    {/**数学二 */}
                    <Route path="/math2" component={Math2} />
                    <Route path="/xz" component={Xz} />
                    <Route path="/tk" component={Tk} />
                    <Route path="/jd" component={Jd} />
                    {/**英语一 */}

                    <Route path="/english1" component={English1} />
                    <Route path="/gestalt" component={Gestalt} />
                    <Route path="/gestalt1" component={Gestalt1} />
                    <Route path="/gestalt2" component={Gestalt2} />
                    <Route path="/gestalt3" component={Gestalt3} />
                    <Route path="/gestalt4" component={Gestalt4} />
                    <Route path="/gestalt5" component={Gestalt5} />
                    <Route path="/gestalt6" component={Gestalt6} />
                    <Route path="/gestalt7" component={Gestalt7} />
                    <Route path="/gestalt8" component={Gestalt8} />
                    <Route path="/gestalt9" component={Gestalt9} />
                    <Route path="/gestalt10" component={Gestalt10} />
                    <Route path="/gestalt11" component={Gestalt11} />
                    <Route path="/gestalt12" component={Gestalt12} />
                    <Route path="/gestalt13" component={Gestalt13} />
                    <Route path="/gestalt14" component={Gestalt14} />
                    <Route path="/gestalt15" component={Gestalt15} />
                    <Route path="/gestalt16" component={Gestalt16} />
                    <Route path="/gestalt17" component={Gestalt17} />
                    <Route path="/gestalt18" component={Gestalt18} />
                    <Route path="/gestalt19" component={Gestalt19} />
                    <Route path="/gestalt20" component={Gestalt20} />

                    <Route path="/translate" component={Translate} />
                    <Route path="/translate1" component={Translate1} />
                    <Route path="/translate2" component={Translate2} />
                    <Route path="/translate3" component={Translate3} />
                    <Route path="/translate4" component={Translate4} />
                    <Route path="/translate5" component={Translate5} />
                    <Route path="/translate6" component={Translate6} />
                    <Route path="/translate7" component={Translate7} />
                    <Route path="/translate8" component={Translate8} />
                    <Route path="/translate9" component={Translate9} />
                    <Route path="/translate10" component={Translate10} />
                    <Route path="/translate11" component={Translate11} />
                    <Route path="/translate12" component={Translate12} />
                    <Route path="/translate13" component={Translate13} />
                    <Route path="/translate14" component={Translate14} />
                    <Route path="/translate15" component={Translate15} />
                    <Route path="/translate16" component={Translate16} />
                    <Route path="/translate17" component={Translate17} />
                    <Route path="/translate18" component={Translate18} />
                    <Route path="/translate19" component={Translate19} />
                    <Route path="/translate20" component={Translate20} />
                    <Route path="/read" component={Read} />
                    <Route path="/read1" component={Read1} />
                    <Route path="/read2" component={Read2} />
                    <Route path="/read3" component={Read3} />
                    <Route path="/read4" component={Read4} />
                    <Route path="/read5" component={Read5} />
                    <Route path="/read6" component={Read6} />
                    <Route path="/read7" component={Read7} />
                    <Route path="/read8" component={Read8} />
                    <Route path="/read9" component={Read9} />
                    <Route path="/read10" component={Read10} />
                    <Route path="/read11" component={Read11} />
                    <Route path="/read12" component={Read12} />
                    <Route path="/read13" component={Read13} />
                    <Route path="/read14" component={Read14} />
                    <Route path="/read15" component={Read15} />
                    <Route path="/read16" component={Read16} />
                    <Route path="/read17" component={Read17} />
                    <Route path="/read18" component={Read18} />
                    <Route path="/read19" component={Read19} />
                    <Route path="/read20" component={Read20} />
                    {/**英语二 */}
                    <Route path="/english2" component={English2} />
                    <Route path="/wxtk" component={Wxtk} />
                    <Route path="/wxtk1" component={Wxtk1} />
                    <Route path="/wxtk2" component={Wxtk2} />
                    <Route path="/wxtk3" component={Wxtk3} />
                    <Route path="/wxtk4" component={Wxtk4} />
                    <Route path="/wxtk5" component={Wxtk5} />
                    <Route path="/wxtk6" component={Wxtk6} />
                    <Route path="/wxtk7" component={Wxtk7} />
                    <Route path="/wxtk8" component={Wxtk8} />
                    <Route path="/wxtk9" component={Wxtk9} />
                    <Route path="/wxtk10" component={Wxtk10} />
                    <Route path="/wxtk11" component={Wxtk11} />
                    <Route path="vwxtk12" component={Wxtk12} />
                    <Route path="/wxtk13" component={Wxtk13} />
                    <Route path="/wxtk14" component={Wxtk14} />
                    <Route path="/wxtk15" component={Wxtk15} />
                    <Route path="/wxtk16" component={Wxtk16} />
                    <Route path="/wxtk17" component={Wxtk17} />
                    <Route path="/wxtk18" component={Wxtk18} />
                    <Route path="/wxtk19" component={Wxtk19} />
                    <Route path="/wxtk20" component={Wxtk20} />
                    <Route path="/yd" component={Yd} />
                    <Route path="/yd1" component={Yd1} />
                    <Route path="/yd2" component={Yd2} />
                    <Route path="/yd3" component={Yd3} />
                    <Route path="/yd4" component={Yd4} />
                    <Route path="/yd5" component={Yd5} />
                    <Route path="/yd6" component={Yd6} />
                    <Route path="/yd7" component={Yd7} />
                    <Route path="/yd8" component={Yd8} />
                    <Route path="/yd9" component={Yd9} />
                    <Route path="/yd10" component={Yd10} />
                    <Route path="/yd11" component={Yd11} />
                    <Route path="/yd12" component={Yd12} />
                    <Route path="/yd13" component={Yd13} />
                    <Route path="/yd14" component={Yd14} />
                    <Route path="/yd15" component={Yd15} />
                    <Route path="/yd16" component={Yd16} />
                    <Route path="/yd17" component={Yd17} />
                    <Route path="/yd18" component={Yd18} />
                    <Route path="/yd19" component={Yd19} />
                    <Route path="/yd20" component={Yd20} />
                    <Route path="/cnj" component={Cnj} />
                    <Route path="/cnj1" component={Cnj1} />
                    <Route path="/cnj2" component={Cnj2} />
                    <Route path="/cnj3" component={Cnj3} />
                    <Route path="/cnj4" component={Cnj4} />
                    <Route path="/cnj5" component={Cnj5} />
                    <Route path="/cnj6" component={Cnj6} />
                    <Route path="/cnj7" component={Cnj7} />
                    <Route path="/cnj8" component={Cnj8} />
                    <Route path="/cnj9" component={Cnj9} />
                    <Route path="/cnj10" component={Cnj10} />
                    <Route path="/cnj11" component={Cnj11} />
                    <Route path="/cnj12" component={Cnj12} />
                    <Route path="/cnj13" component={Cnj13} />
                    <Route path="/cnj14" component={Cnj14} />
                    <Route path="/cnj15" component={Cnj15} />
                    <Route path="/cnj16" component={Cnj16} />
                    <Route path="/cnj17" component={Cnj17} />
                    <Route path="/cnj18" component={Cnj18} />
                    <Route path="/cnj19" component={Cnj19} />
                    <Route path="/cnj20" component={Cnj20} />
                    {/**政治 */}
                    <Route path="/zhengzhi" component={Zhengzhi} />
                    <Route path="/zhengzhi1" component={Zhengzhi1} />
                    <Route path="/zhengzhi2" component={Zhengzhi2} />
                    <Route path="/zhengzhi3" component={Zhengzhi3} />
                    <Route path="/zhengzhi4" component={Zhengzhi4} />
                    <Route path="/zhengzhi5" component={Zhengzhi5} />
                    <Route path="/zhengzhi6" component={Zhengzhi6} />
                    <Route path="/zhengzhi7" component={Zhengzhi7} />
                    <Route path="/zhengzhi8" component={Zhengzhi8} />
                    <Route path="/zhengzhi9" component={Zhengzhi9} />
                    <Route path="/zhengzhi10" component={Zhengzhi10} />
                    <Route path="/notes" component={Notes} />
                    <Route path="/notesdetaile/:id" component={NotesDetaile} />
                    <Route path="/addnotes" component={AddNotes} />
                    <Route path="/experience" component={Experience} />
                    <Route path="/addexp" component={AddExp} />
                    <Route path="/expdetails/:id" component={ExpDetails} />

                    {/* 个人信息 */}
                    <Route path="/person/:name" component={Person} />
                    <Route path="/fans/:name" component={Fans} />
                    <Route path="/follows/:name" component={Follows} />
                    <Route path="/folper/:lname/:nname" component={FolPer} />
                    <Route path="/fanper/:nname/:lname" component={FanPer} />
                    <Route path="/perdetails/:name/:id" component={PerDetails} />
                    <Route path="/percom/:name/:id" component={PerCom} />
                    <Route path="/foldetails/:lname/:nname/:id" component={FolDetails} />
                    <Route path="/folcom/:lname/:nname/:id" component={FolCom} />
                    <Route path="/fandetails/:nname/:lname/:id" component={FanDetails} />
                    <Route path="/fancom/:nname/:lname/:id" component={FanCom} />

                    {/* 我的关注与粉丝 */}
                    <Route path="/myfollows" component={Myfollows}/>
                    <Route path="/myfans" component={Myfans}/>
                    <Route path="/myfolper/:nname" component={Myfolper}/>
                    <Route path="/myfanper/:lname" component={Myfanper}/>
                    <Route path="/fanlist/:name" component={FanList}/>
                    <Route path="/follist/:name" component={FolList}/>
                    
                    <Route path="/newadd" component={NewAdd}/>
                    <Route path="/newe" component={NewE}/>
                    <Route path="/newl" component={NewL}/>
                    <Route path="/newlcom/:id" component={NewLcom}/>
                    <Route path="/newldetails/:id" component={NewLdetails}/>
                    <Route path="/newedetails/:id" component={NewEdetails}/>

                </Router>
            </div>
        )
    }
}
