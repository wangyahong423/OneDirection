import { NavBar,SearchBar,ActionSheet} from 'antd-mobile';
import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
export default class Community1 extends Component {
    constructor() {
        super();
        this.state = {
          clicked:'none',
          clicked1: 'none',
          clicked2: true,
          clicked3: true,
          clicked4: true
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
      showActionSheet = () => {
        const ps = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
        ActionSheet.showActionSheetWithOptions({
          options: ps,
          cancelButtonIndex:ps.length - 1,
          destructiveButtonIndex:ps.length - 2,
          title: 'title',
          message: 'I am description, description, description',
          maskClosable: true,
          'data-seed': 'logId',
          wrapProps,
        },
        (buttonIndex) => {
          this.setState({ clicked: ps[buttonIndex] });
        });
      }

      changeColor(){
        this.setState({
            clicked2:!this.state.clicked2
        })
      }
      changeColor1(){
        this.setState({
            clicked3:!this.state.clicked3
        })
      }
      changeColor2(){
        this.setState({
            clicked4:!this.state.clicked4
        })
      }
    render() {
        let color1 = {
            color:this.state.clicked2 ? "black" : "red",
            fontSize:31,
            marginLeft:'23%'}
        let color2 = {
            color:this.state.clicked3 ? "black" : "red",
            fontSize:31,
            marginLeft:'23%'}
        let color3 = {
            color:this.state.clicked4 ? "black" : "red",
            fontSize:31,
            marginLeft:'23%'}   
        return (
            <>
            <div style={{ position: 'relative' }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center'}}
                    rightContent={[
                        <Link to="/xinnews"><span className="iconfont icon-xiaoxi-copy-sy" style={{fontSize:'20px',color:'white'}}></span></Link>
                    ]}
                >
                    <span>社区</span>
                    <span className="iconfont icon-shuaxin-sy" style={{marginLeft:"2%",fontSize:'12px',marginTop:'2%'}}></span>
                </NavBar>
                <SearchBar placeholder="Search" maxLength={8} style={{width:'90%',float:"left"}}/>
                <Link to="/add"><span className="iconfont icon-add-sy" style={{fontSize:'35px',color:'black',}}></span></Link>
                <div style={{height:'20%',background:'#fff',color:'black'}}>
                    <div style={{float:"left"}}>
                    <img src={require('./img/touxiang1.jpg')} style={{height:'55px',width:'55px',borderRadius:'50%',marginLeft:15,marginTop:9}}/>
                    </div>
                    <div>
                        <p style={{marginLeft:75,fontSize:20,lineHeight:2.5,marginTop:5}}>路子野</p>
                        <div style={{marginLeft:75,marginTop:-25,color:'gray'}}>今天11:03</div>
                    </div>
                    <Link to="/aboutyouknow">
                    <p style={{marginLeft:25,color:'black',marginTop:20}}>有没有学姐说一下软件工程大一上学期学的什么科目呀？</p>
                    </Link>
                    <div style={{marginTop:20}}>
                        <sapn className="iconfont icon-fenxiang1-sy" onClick={this.showShareActionSheet} style={{fontSize:27,marginLeft:'17%',color:'black'}}></sapn>
                        <sapn className="iconfont icon-icon-test-sy" onClick={this.showActionSheet} style={{fontSize:27,marginLeft:'22%',color:'black'}}></sapn>
                        <sapn className="iconfont icon-zan-sy" onClick={this.changeColor.bind(this)}  style={color1}></sapn>
                    </div>
                </div>
                <div style={{height:'20%',background:'#fff',color:'black'}}>
                    <div style={{float:"left"}}>
                    <img src={require('./img/touxiang.jpg')} style={{height:'55px',width:'55px',borderRadius:'50%',marginLeft:15,marginTop:9}}/>
                    </div>
                    <div>
                        <p style={{marginLeft:75,fontSize:20,lineHeight:2.3,marginTop:5,color:'orange'}}>范思哲</p>
                        <div style={{marginLeft:75,marginTop:-21,color:'gray'}}>今天00:03</div>
                    </div>
                    <Link to="/aboutyouknow">
                    <p style={{marginLeft:25,color:'black',marginTop:20}}>现金可以充饭卡嘛</p>
                    </Link>
                    <div style={{marginTop:20}}>
                        <sapn className="iconfont icon-fenxiang1-sy" onClick={this.showShareActionSheet} style={{fontSize:27,marginLeft:'17%',color:'black'}}></sapn>
                        <Link to="/pinglunone"><sapn className="iconfont icon-icon-test-sy" style={{fontSize:27,marginLeft:'22%',color:'black'}}></sapn></Link>
                        <sapn className="iconfont icon-zan-sy" onClick={this.changeColor1.bind(this)}  style={color2}></sapn>
                    </div>
                </div>
                <div style={{height:'20%',background:'#fff',color:'black'}}>
                    <div style={{float:"left"}}>
                    <img src={require('./img/touxiang2.jpg')} style={{height:'55px',width:'55px',borderRadius:'50%',marginLeft:15,marginTop:9}}/>
                    </div>
                    <div>
                        <p style={{marginLeft:75,fontSize:20,lineHeight:2.5,marginTop:5}}>我爱吃蛋糕</p>
                        <div style={{marginLeft:75,marginTop:-21,color:'gray'}}>昨天00:00</div>
                    </div>
                    <Link to="/aboutyouknow">
                    <p style={{marginLeft:25,color:'black',marginTop:20}}>祝自己生日快乐</p>
                    <img src={require('./img/biaoqing.jpg')} style={{height:'80px',width:'80px',marginLeft:20}}/>
                    </Link>
                    <div style={{marginTop:20}}>
                        <sapn className="iconfont icon-fenxiang1-sy" onClick={this.showShareActionSheet} style={{fontSize:27,marginLeft:'17%',color:'black'}}></sapn>
                        <Link to="/pinglunone"><sapn className="iconfont icon-icon-test-sy" style={{fontSize:27,marginLeft:'22%',color:'black'}}></sapn></Link>
                        <sapn className="iconfont icon-zan-sy" onClick={this.changeColor2.bind(this)}  style={color3}></sapn>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
