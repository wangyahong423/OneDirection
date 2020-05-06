import React,{Component} from 'react';
import AppTab from './container/AppTab'
import OneCard from './method/OneCard';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Activate from './method/Activate';
import Invest from './method/Invest';
import Loss from './method/Loss';
import Organization from './method/Organization';
import SchoolOrg from './method/SchoolOrg';
import Practice from './method/Practice';
import Physical from './method/Physical';
import Academic from './method/Academic';
import Art from './method/Art';
import School from './method/School';
import Synopsis from './method/Synopsis';
import Subject from './method/Subject';
import ShoolLogo from './method/ShoolLogo';
import Scenery from './method/Scenery';
import Govern from './method/Govern';
import SchoolMap from './method/SchoolMap';
import Study from './method/Study';
import Zongheceping from './method/Zongheceping';
import Second from './method/Second';
import StudyJiangxuejin from './method/StudyJiangxuejin';
import StudyZhuxuejin from './method/StudyZhuxuejin';
import Alumnus from './method/Alumnus';
import College from './method/College';
import CollegeHistory from './method/CollegeHistory';
import CollegeTeachers from './method/CollegeTeachers';
import CollegeOther from './method/CollegeOther';
import CollegeMajor from './method/CollegeMajor';
import Lizhanshu from './method/Lizhanshu';
import Dengyingchao from './method/Dengyingchao';
import Situlanfang from './method/Situlanfang';
import Hehong from './method/Hehong';
import Zhangzhiwei from './method/Zhangzhiwei';
import Lishushen from './method/Lishushen';
import Gesangdeji from './method/Gesangdeji';
import Liujianya from './method/Liujianya';
import Wangfengming from './method/Wangfengming';
import Suguoan from './method/Suguoan';
import Zhangwenmao from './method/Zhangwenmao';
import Fanqianwen from './method/Fanqianwen';
import Panglaixing from './method/Panglaixing';
import Linwanli from './method/Linwanli';
import Xiachuancai from './method/Xiachuancai';
import Fengjiannan from './method/Fengjiannan';
import Caijiming from './method/Caijiming';
import Haobolin from './method/Haobolin'
import Liangxingjie from './method/Liangxingjie';
import Yanluguang from './method/Yanluguang';
import Wangjinjiang from './method/Wangjinjiang';
import Chenshuzeng from './method/Chenshuzeng';
import Luhongchang from './method/Luhongchang';
import Zhangyanping from './method/Zhangyanping';
import Houliang from './method/Houliang'
import Zhangmeizhi from './method/Zhangmeizhi'
import Liuyongrui from './method/Liuyongrui';
import Yuanzhigang from './method/Yuanzhigang'
import Mayujun from './method/Mayujun';
import Liuxiaojun from './method/Liuxiaojun';
import Chaiguanjing from './method/Chaiguanjing';
import Fengshaohui from './method/Fengshaohui';
import Liyimin from './method/Liyimin';
import Wangzhixin from './method/Wangzhixin';
import Zhanghe from './method/Zhanghe';
import Cailimin from './method/Cailimin';
import Longzhuangwei from './method/Longzhuangwei';
import AppTab1 from './container/AppTab1'
import AppTab2 from './container/AppTab2'
import Add from './community/Add';
import Message from './community/news/Message';
import Messageone from './community/news/Messageone';
import About from './community/About';
import Ping from './community/Ping';
import Shoucang from './my/Shoucang';
import Tongxun from './my/Tongxun';
import Women from './my/Women';
import Yonghu from './my/Yonghu';
import Shezhi from './my/Shezhi';
import Zhanghao from './my/Zhanghao';
import Xiaoxi from './my/Xiaoxi';
import Yinsi from './my/Yinsi';
import Fuwu from './my/Fuwu';
import Login from './login/Login';
import Zhuce from './login/Zhuce';
import Tiezi from "./my/Tiezi"
import Shequdongtai from "./my/Shequdongtai"
import Xuexijiaoliu from "./my/Xuexijiaoliu"
import Xuexi from "./my/Xuexi"
import Shequ from "./my/Shequ"
import MaterialSharing from "./share/MaterialSharing";
import StudyCommunicate from "./share/StudyCommunicate";
import Word from "./share/Word";
import PDF from "./share/PDF";
import PPT from "./share/PPT";
import AddFile from "./share/AddFile";
import Communicate from "./share/Communicate";
import AppTab3 from "./container/AppTab3";
import CommunicataDetails from "./share/CommunicataDetails"
import Comment from "./share/Comment"
import Success from "./my/Success"
import ResetPwd from "./my/ResetPwd"
import Forget from './login/Forget';
import ChangeImg from './my/ChangeImg';
import MyFile from './my/MyFile';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={AppTab}/>
                    <Route path="/zhuce" component={Zhuce}/>
                    <Route path='/forget' component={Forget} />
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
                    <Route path ='/dengyingchao' component={Dengyingchao} />
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
                    <Route path='/college' component={College} />
                    <Route path='/collegeHistory' component={CollegeHistory} />
                    <Route path='/collegeTeachers' component={CollegeTeachers} />
                    <Route path='/collegeMajor' component={CollegeMajor} />
                    <Route path='/collegeOther' component={CollegeOther} />
                    <Route path="/community" component={AppTab1}/>
                    <Route path="/my" component={AppTab2}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/xinnews" component={Message}/>
                    <Route path="/newsone" component={Messageone}/>
                    <Route path="/aboutyouknow/:id" component={About}/>
                    <Route path="/pinglunone/:id" component={Ping}/>
                    <Route path="/zhanghao" component={Zhanghao}/>
                    <Route path="/shoucangone" component={Shoucang}/>
                    <Route path="/tongxunlvone" component={Tongxun}/>
                    <Route path="/wm" component={Women}/>
                    <Route path="/yonghufankui" component={Yonghu}/>
                    <Route path="/shezhi" component={Shezhi}/>
                    <Route path="/xiaoxixi" component={Xiaoxi}/>
                    <Route path="/yinsione" component={Yinsi}/>
                    <Route path="/fuwu" component={Fuwu}/>
                    <Route path="/tiezi" component={Tiezi}/>
                    <Route path="/shequ" component={Shequdongtai}/>
                    <Route path="/xuexi" component={Xuexijiaoliu}/>
                    <Route path="/shequyouknow/:id" component={Shequ}/>
                    <Route path="/xuexiyouknow/:id" component={Xuexi}/>
                    <Route path="/MaterialSharing" component={MaterialSharing}/>
                    <Route path="/StudyCommunicate" component={StudyCommunicate}/>
                    <Route path="/Word" component={Word}/>
                    <Route path="/PDF" component={PDF}/>
                    <Route path="/PPT" component={PPT}/>
                    <Route path="/AddFile" component={AddFile}/>
                    <Route path="/Communicate" component={Communicate}/>
                    <Route path="/Share" component={AppTab3}/>
                    <Route path="/CommunicataDetails/:id" component={CommunicataDetails}/>
                    <Route path="/Comment" component={Comment}/>
                    <Route path="/Success" component={Success}/>
                    <Route path="/Yonghu" component={Yonghu}/>
                    <Route path='/reset' component={ResetPwd} />
                    <Route path='/changeImg' component={ChangeImg} />
                    <Route path='/myFile' component={MyFile} />
                </Router>
            </div>
        ) 
    }
}
