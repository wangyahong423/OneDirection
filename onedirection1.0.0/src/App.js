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
import Map from './method/Map';
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
// 孙妍
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
import Huancun from './my/Huancun';
import Fuwu from './my/Fuwu';
import Login from './login/Login';
import Zhuce from './login/Zhuce';

// 董小贱
import MaterialSharing from "./share/MaterialSharing";
import StudyCommunicate from "./share/StudyCommunicate";
import Word from "./share/Word";
import PDF from "./share/PDF";
import PPT from "./share/PPT";
import AddFile from "./share/AddFile";
import Communicate from "./share/Communicate";
import Share from "./share/Share";
import AppTab3 from "./container/AppTab3";
import CommunicataDetails from "./share/CommunicataDetails"
import Comment from "./share/Comment"
// import My from "./my/My"
import Success from "./my/Success"
import ChangeTel from "./my/ChangeTel"
import ChangePsd from "./my/ChangePsd"

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* 登陆 */}
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={AppTab}/>
                    <Route path="/zhuce" component={Zhuce}/>
                    {/* 攻略-一卡通 */}
                    <Route path='/onecard' component={OneCard} />
                    <Route exact path='/activate' component={Activate} />
                    <Route exact path='/invest' component={Invest} />
                    <Route exact path='/loss' component={Loss} />
                    {/* 攻略-社团组织 */}
                    <Route path='/organization' component={Organization} />
                    <Route path='/schoolorg' component={SchoolOrg} />
                    <Route path='/practice' component={Practice} />
                    <Route path='/physical' component={Physical} />
                    <Route path='/academic' component={Academic} />
                    <Route path='/art' component={Art} />
                    {/* 攻略-学校 */}
                    <Route path='/school' component={School} />
                    <Route path='/synopsis' component={Synopsis} />
                    <Route path='/subject' component={Subject} />
                    <Route path='/schoollogo' component={ShoolLogo} />
                    <Route path='/scenery' component={Scenery} />
                    <Route path='/govern' component={Govern} />
                    <Route path='/map' component={Map} />
                    {/* 攻略-学习 */}
                    <Route path='/study' component={Study} />
                    <Route path='/zongheceping' component={Zongheceping} />
                    <Route path='/second' component={Second} />
                    <Route path='/jiangxuejin' component={StudyJiangxuejin} />
                    <Route path='/zhuxuejin' component={StudyZhuxuejin} />
                    {/* 攻略-杰出校友 */}
                    <Route path='/alumnus' component={Alumnus} />
                    {/* 攻略--学院 */}
                    <Route path='/college' component={College} />
                    <Route path='/collegeHistory' component={CollegeHistory} />
                    <Route path='/collegeTeachers' component={CollegeTeachers} />
                    <Route path='/collegeMajor' component={CollegeMajor} />
                    <Route path='/collegeOther' component={CollegeOther} />

                    {/* 孙妍 */}
                    <Route path="/community" component={AppTab1}/>
                    <Route path="/my" component={AppTab2}/>
                    <Route path="/add" component={Add}/>
                    <Route path="/xinnews" component={Message}/>
                    <Route path="/newsone" component={Messageone}/>
                    <Route path="/aboutyouknow" component={About}/>
                    <Route path="/pinglunone" component={Ping}/>
                    <Route path="/shoucangone" component={Shoucang}/>
                    <Route path="/tongxunlvone" component={Tongxun}/>
                    <Route path="/wm" component={Women}/>
                    <Route path="/yonghufankui" component={Yonghu}/>
                    <Route path="/shezhi" component={Shezhi}/>
                    <Route path="/zhanghao" component={Zhanghao}/>
                    <Route path="/xiaoxixi" component={Xiaoxi}/>
                    <Route path="/yinsione" component={Yinsi}/>
                    <Route path="/huancun" component={Huancun}/>
                    <Route path="/fuwu" component={Fuwu}/>

                    {/* 董晓倩 */}
                    <Route path="/MaterialSharing" component={MaterialSharing}/>
                    <Route path="/StudyCommunicate" component={StudyCommunicate}/>
                    <Route path="/Word" component={Word}/>
                    <Route path="/PDF" component={PDF}/>
                    <Route path="/PPT" component={PPT}/>
                    <Route path="/AddFile" component={AddFile}/>
                    <Route path="/Communicate" component={Communicate}/>
                    <Route path="/Share" component={AppTab3}/>
                    <Route path="/CommunicataDetails" component={CommunicataDetails}/>
                    <Route path="/Comment" component={Comment}/>
                    {/* <Route path="/My" component={My}/> */}
                    <Route path="/Success" component={Success}/>
                    <Route path="/Yonghu" component={Yonghu}/>
                    <Route path="/ChangeTel" component={ChangeTel}/>
                    <Route path="/ChangePsd" component={ChangePsd} />
                </Router>
            </div>
        ) 
    }
}
