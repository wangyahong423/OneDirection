import React, { Component } from 'react';
import {NavBar,ActionSheet} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
export default class About extends Component {
  constructor() {
    super();
    this.state = {
      clicked1: 'none',
      clicked:'none'
    };
  }

  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      message: '分享',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      return new Promise((resolve) => {
        setTimeout(resolve, 0);
      });
    });
  } 
  render() {
    return (
      <div style={{position:'relative'}}>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
            leftContent={[
                <Link to="/community"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>详情</span>
        </NavBar>
        <div style={{height:'20%',color:'black'}}>
            <div style={{float:"left"}}>
            <img src={require('./img/touxiang1.jpg')} style={{height:'55px',width:'55px',borderRadius:'50%',marginLeft:15}}/>
            </div>
            <div>
              <p style={{marginLeft:75,fontSize:20,lineHeight:1.8}}>路子野</p>
              <div style={{marginLeft:75,marginTop:-20,color:'gray'}}>今天11:03</div>
            </div>
            <p style={{marginLeft:20}}>有没有学姐说一下软件工程大一上学期学的什么科目呀？</p>
            <div style={{float:'right'}}>
              <sapn className="iconfont icon-zhuanfa" onClick={this.showShareActionSheet} style={{fontSize:'2.5vh',marginRight:30,color:'black'}}></sapn>
              <sapn className="iconfont icon-pinglun" style={{fontSize:'3.1vh',marginRight:30}}></sapn>
              <sapn className="iconfont icon-dianzan" style={{fontSize:'3.1vh',marginRight:30}}></sapn>
            </div>  
        </div>
        <div style={{height:'20%',color:'black',marginTop:60,marginLeft:10}}>
            <div style={{float:"left"}}>
                <div className="iconfont icon-avatar-lady-sy" style={{fontSize:37,marginLeft:5}}></div>
            </div>
            <div>
                <p style={{marginLeft:50,color:'orange'}}>莫得感情的胖子</p>
                <p style={{marginLeft:55,fontSize:12,color:'gray'}}>我也想知道...+1</p>
            </div>
            <div style={{float:'right',marginRight:25,marginTop:-35,fontSize:10}}>
              <span style={{marginRight:25}}>今天18:48</span>
              <span>回复</span>
            </div>  
        </div>
        <div style={{height:'20%',color:'black',marginTop:30,marginLeft:10}}>
            <div style={{float:"left"}}>
                <div className="iconfont icon-avatar-lady-sy" style={{fontSize:37,marginLeft:5}}></div>
            </div>
            <div>
                <p style={{marginLeft:50,color:'green'}}>小黑</p>
                <p style={{marginLeft:55,fontSize:12,color:'gray'}}>四级六级可以加</p>
            </div>
            <div style={{float:'right',marginRight:25,marginTop:-35,fontSize:10}}>
              <span style={{marginRight:25}}>刚刚</span>
              <span>回复</span>
            </div>  
        </div>
      </div>
    );
  }
}
