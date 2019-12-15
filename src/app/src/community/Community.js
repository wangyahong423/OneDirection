import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios'
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
      clicks:1,
      data: [],
      list: [],//存储的我的喜欢
      arr:[],//存储id
      color:[],//存储颜色,
      name:''
    };
  }
dataList = [
    { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈',},
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
  changeStyle = (e) => {
    console.log(this.state.clicks)
    if ((this.state.clicks) % 2 == 1) {
      e.target.style.color = 'red';
      this.setState({
        clicks: (this.state.clicks) + 1
      })
    }
    else if ((this.state.clicks) % 2 == 0) {
      e.target.style.color = 'black';
      this.setState({
        clicks: (this.state.clicks) + 1
      })
    }}

  componentDidMount() {
    let url = `http://localhost:3005/community/list`;
    let url2 = `http://localhost:3005/communitylike/list`;
    axios(url)
      .then((res) => {
        for(var i=0;i<res.data.length;i++){
          res.data[i].pic="http://localhost:3005"+res.data[i].pic
        }
        this.setState({
          data: res.data
        })
      })
    axios(url2)
      .then((res)=>{
        console.log(res.data)
        this.setState({
          list:res.data
        })
      })
    let url3 = `http://localhost:3005/users/getName`;
      axios(url3)
          .then((res) => {
              this.setState({
                  name: res.data.name
              })
          })
    this.state.data.map((item)=>{
        this.setState({
          arr:item.id
        })
        
      })
      console.log(this.state.arr)
  }
  changeSearch=(e)=>{
    if(e.target.value == ""){
      window.location.href="http://localhost:3000/community";
    }else{
      this.setState({
        search:e.target.value
      })
    }
    console.log(this.state.arr)
  }
  
  clickSend = () => {
    //要执行的代码
    let url = `http://localhost:3005/community/select?content=${this.state.search}`;
    axios(url)
        .then((res) => {
            if (res.data.false) {
                console.log('false');
            } else {
                console.log(res.data);
                for (var i = 0; i < res.data.length; i++) {
                    res.data[i].pic = "http://localhost:3005" + res.data[i].pic;
                }
                this.setState({
                    data: res.data
                })
                console.log(res.data);
            }
          })
  }
  render() {
    return (
      <div>
        <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ',width:"100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
          rightContent={[
            <Link to="/xinnews"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-xiaoxi-copy-sy"></span></Link>
          ]}>
          社区</NavBar>
        <div style={{position:"fixed",top:'7vh',width:"100vw",height:'6vh',backgroundColor:'#EFEFF4'}}>
          <input placeholder='搜索' onChange={this.changeSearch}  style={{height:'5vh',borderRadius:'20px',border:'none',marginTop:'0.5vh',textAlign:'center',fontSize:'4vw',width:'85vw',float:'left',borderRight:"none"}}></input>
          <div onClick={this.clickSend} style={{width:'15vw',float:'left',height:'6vh',textAlign:'center',lineHeight:'6vh',fontSize:'4vw'}}>搜索</div>
        </div>
        <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
          {
            this.props.selected == 'community' && <Link to='/add'><div style={{ position: "fixed", top: "85%", left: '85%' }}>
              <span className="iconfont icon-add-sy" style={{ fontSize: "6vh", color: "#37376F" }}></span>
            </div></Link>
          }
          <div style={{ marginTop: '12vh' }}>
            {
              this.state.data.map((item, idx) =>
                <div style={{background: '#fff', color: 'black' }}>
                  <div style={{ float: "left" }}>
                    <img src={item.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                  </div>
                  <div>
                  </div>
                  <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                  <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                  <Link to={`/aboutyouknow/${item.id}`}>
                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20 }}>{item.content}</p>
                  </Link>
                  <div style={{ marginTop: 20 }}>
                    <sapn className="iconfont icon-zhuanfa" onClick={this.showShareActionSheet} style={{ fontSize: '2.5vh', marginLeft: '17%', color: 'black' }}></sapn>
                    <Link to={`/pinglunone/${item.id}`}>
                      <sapn className="iconfont icon-pinglun" style={{ fontSize: '3.2vh', marginLeft: '22%', color: 'black' }}></sapn>
                    </Link>
                    <sapn className="iconfont icon-dianzan" onClick={this.changeStyle} style={{ value: 1, marginLeft: '26%' }}></sapn>
                  </div>
                  <div style={{width:'100%',height:'2vh',backgroundColor:'white'}}>
                  </div>
                </div>)}
          </div>
        </div>
      </div>
      // </>
    )
  }
}
