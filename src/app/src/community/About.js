import React, { Component } from 'react';
import {NavBar,ActionSheet} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios'
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
      clicked:'none',
      clicked2: true,
      data:[]
    };
  }

  dataList = [
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
  changeColor(){
    this.setState({
        clicked2:!this.state.clicked2
    })
  }
  componentDidMount() {
    console.log(this.state.data);
    var id =this.props.match.params.id;
    console.log(this.props)
    console.log(id)
    let url = `http://localhost:3005/community/list/`+id;
    axios(url)
        .then((res) => {
          console.log(res.data)
          console.log(res.data.communityList)
            this.setState({
              data: res.data.communityList[id-1]                 
            })
        })
  }
  render() {
    let color1 = {
      color:this.state.clicked2 ? "black" : "red",
      fontSize:'3vh',
      marginLeft:'23%'
    }
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
        <div style={{height:'20vh',background:'#fff',color:'black'}} >
          <div style={{float:"left"}}>
            <img src={require('./img/touxiang1.jpg')} style={{height:'7.8vh',width:'14vw',borderRadius:'50%',marginLeft:15,marginTop:9}}/>
          </div>
          <p style={{marginLeft:75,fontSize:'2.5vh',lineHeight:2.5,marginTop:6}}>{this.state.data.name}</p>
          <div style={{marginLeft:75,color:'gray',fontSize:'2vw',marginTop:"-5vw"}}>{this.state.data.time}</div>
            <p style={{marginLeft:25,color:'black',marginTop:20}}>{this.state.data.content}</p>
            <div style={{marginTop:20}}>
              <sapn className="iconfont icon-zhuanfa" onClick={this.showShareActionSheet} style={{fontSize:'2.5vh',marginLeft:'17%',color:'black'}}></sapn>
              <sapn className="iconfont icon-pinglun" onClick={this.showActionSheet} style={{fontSize:'3.2vh',marginLeft:'22%',color:'black'}}></sapn>
              <sapn className="iconfont icon-dianzan" onClick={this.changeColor.bind(this)}  style={color1}></sapn>
            </div>
          </div>
        </div>
    );
  }
}
