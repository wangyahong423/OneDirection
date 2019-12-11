import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      clicked: 'none',
      clicked1: 'none',
      clicks: 0,
      data: [],
      todo: [],
    };
  }

  dataList = [
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
      cancelButtonIndex: ps.length - 1,
      destructiveButtonIndex: ps.length - 2,
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
    }

  }

  componentDidMount() {
    console.log(this.state.data);
    let url = `http://localhost:3005/community/list`;
    let url1 = `http://localhost:3005/communitytalk/list/`;
    axios(url)
      .then((res) => {
        console.log(res.data)
        this.setState({
          data: res.data
        })
      })
    axios(url1)
      .then((res) => {
        console.log(res.data)
        this.setState({
          todo: res.data.communitytalk
        })
      })
  }

  render() {
    let color1 = {
      color: this.state.clicked2 ? "black" : "red",
      fontSize: '3vh',
      marginLeft: '23%'
    }
    let color2 = {
      color: this.state.clicked3 ? "black" : "red",
      fontSize: '3vh',
      marginLeft: '23%'
    }
    let color3 = {
      color: this.state.clicked4 ? "black" : "red",
      fontSize: '3vh',
      marginLeft: '23%'
    }
    return (
      <div>
        {/* <NavBar 
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:0,zIndex:10,textAlign:'center',height:'7vh'}}
                    rightContent={[
                        <Link to="/xinnews"><span className="iconfont icon-xiaoxi-copy-sy" style={{fontSize:'20px',color:'white'}}></span></Link>
                    ]}
                  >
                    <span>社区</span>
                  </NavBar> */}
        <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ',width:"100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
          rightContent={[
            <Link to="/xinnews"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-xiaoxi-copy-sy"></span></Link>
          ]}>
          社区</NavBar>
        <div style={{ marginTop: "-6vh" ,position:"fixed",top:'6vh',width:"100vw"}}>
          <WingBlank><div className="sub-title"></div></WingBlank>
          <SearchBar placeholder="搜索" maxLength={8} />
        </div>
        <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
          {/* <SearchBar placeholder="搜索" maxLength={10} style={{width:'100vw',float:"left"}}/> */}
          {
            this.props.selected == 'community' && <Link to='/add'><div style={{ position: "fixed", top: "85%", left: '85%' }}>
              <span className="iconfont icon-add-sy" style={{ fontSize: "6vh", color: "#37376F" }}></span>
            </div></Link>
          }
          <div style={{ marginTop: '13vh' }}>
            {
              this.state.data.map((item, idx) =>
                <div style={{ height: '20vh', background: '#fff', color: 'black' }}>
                  <div style={{ float: "left" }}>
                    <img src={require('./img/touxiang1.jpg')} style={{ height: '7.8vh', width: '14vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
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
                    {/* <sapn className="iconfont icon-pinglun" onClick={this.showActionSheet} style={{fontSize:'3.2vh',marginLeft:'22%',color:'black'}}></sapn> */}
                    <Link to={`/pinglunone/${item.id}`}>
                      <sapn className="iconfont icon-pinglun" style={{ fontSize: '3.2vh', marginLeft: '22%', color: 'black' }}></sapn>
                    </Link>
                    <sapn className="iconfont icon-dianzan" onClick={this.changeStyle} style={{ value: 1, marginLeft: '26%' }}></sapn>
                  </div>
                </div>)}
          </div>
        </div>
      </div>
      // </>
    )
  }
}
