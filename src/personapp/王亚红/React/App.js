import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

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
import MaterialSharing from "./share/MaterialSharing";
import StudyCommunicate from "./share/StudyCommunicate";
import Success from "./my/Success"
import ResetPwd from "./my/ResetPwd"
import ChangeImg from './my/ChangeImg';
import MyExperience from './my/MyExperience';
import MyNotes from './my/MyNotes';
import MynotesDetails from './my/MynotesDetails';
import MyexperienceDetails from './my/MyexperienceDetails';

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
import PDF from "./share/PDF";
import PPT from "./share/PPT";
import AddFile from "./share/AddFile";
import Communicate from "./share/Communicate";
import CommunicataDetails from "./share/CommunicataDetails"
import Comment from "./share/Comment"

import Forget from './login/Forget';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* 登录注册 */}
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={AppTab}/>
                    <Route path="/zhuce" component={Zhuce}/>
                    <Route path='/forget' component={Forget} />


                    {/* 我的 */}
                    <Route path='/mynotes' component={MyNotes}/>
                    <Route path="/tongxunlvone" component={Tongxun}/>
                    <Route path="/wm" component={Women}/>
                    <Route path="/yonghufankui" component={Yonghu}/>
                    <Route path="/shezhi" component={Shezhi}/>
                    <Route path="/fuwu" component={Fuwu}/>
                    <Route path="/tiezi" component={Tiezi}/>
                    <Route path="/xuexiyouknow/:id" component={Xuexi}/>
                    <Route path="/mynotesdetails/:id" component={MynotesDetails}/>
                    <Route path="/myexperiencedetails/:id" component={MyexperienceDetails}/>
                    <Route path="/Success" component={Success}/>
                    <Route path="/Yonghu" component={Yonghu}/>
                    <Route path='/reset' component={ResetPwd} />
                    <Route path='/changeImg' component={ChangeImg} />
                    <Route path='/myexperience' component={MyExperience} />

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
                    {/* 学院 */}
                    <Route path='/college' component={College} />
                    <Route path='/collegeHistory' component={CollegeHistory} />
                    <Route path='/collegeTeachers' component={CollegeTeachers} />
                    <Route path='/collegeMajor' component={CollegeMajor} />
                    <Route path='/collegeOther' component={CollegeOther} />

                    {/* 社区 */}
                    <Route path="/community" component={AppTab1}/>
                    <Route path="/my" component={AppTab2}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/xinnews" component={Message}/>
                    <Route path="/newsone" component={Messageone}/>
                    <Route path="/aboutyouknow/:id" component={About}/>
                    <Route path="/pinglunone/:id" component={Ping}/>

                    {/* 共享 */}
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
                    
                </Router>
            </div>
        ) 
    }
}
