import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
      data: [],
      list: [],//存储的我的喜欢
      arr: [],//存储id
      color: [],//存储颜色,
      yonghu:[],
      pic:[],
      name:''
    };
  }
  dataList = [
    { url: 'cTTayShKtEIdQVEMuiWt', title: '朋友圈', },
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

  componentDidMount() {
    let url = `http://localhost:3005/community/list`;
    let url2 = `http://localhost:3005/communitylike/list`;
    let url3 = `http://localhost:3005/users/getName`;
    let url4 = `http://localhost:3005/users/list`;
    
    axios(url)
      .then((res) => {
        this.setState({
          data: res.data
        })
        var arr=[]
        this.state.data.map((item)=>{
            if(item.name == this.state.name){
                arr.push(item)
            }
            this.setState({
                data:arr
            })
        })
      })
    axios(url2)
      .then((res) => {
        this.setState({
          list: res.data
        })
        var brr = [];
        this.state.list.map((item) => {
          if (item.name == this.state.name) {
            brr.push(item);
          }
          this.setState({
            list: brr
          })
        })
        var arr = [];
        var a = 0;
        for (var i = 0; i < this.state.data.length; i++) {
          for (var j = 0; j < this.state.list.length; j++) {
            if (this.state.data[i].id == this.state.list[j].cid) {
              a = 1;
              break;
            } else {
              a = 0;
            }
          }
          if (a == 1) {
            arr.push('red');
            a = 0;
          } else {
            arr.push('black');
          }
        }
        this.setState({
          color: arr
        })
      })
    axios(url3)
      .then((res) => {
        this.setState({
          name: res.data.name
        })
      })
    this.state.data.map((item) => {
      this.setState({
        arr: item.id
      })
    })
    axios(url4)
      .then((res)=>{
        for (var i = 0; i < res.data.length; i++) {
          res.data[i].pic = "http://localhost:3005" + res.data[i].pic
        }
        this.setState({
          yonghu:res.data
        })
        
        var qrr=[]
        var a=0;
        for(var i=0;i<this.state.data.length;i++){
          for(var j=0;j<this.state.yonghu.length;j++){
            if(this.state.data[i].name == this.state.yonghu[j].name){
              a=this.state.yonghu[j].pic;
              break;
            }
            else{
              a=0;
            }
          }
          if(a!=0){
            qrr.push(a)
          }
        }
        this.setState({
          pic:qrr
        })
        
      })
      
  }
  changeSearch = (e) => {
    if (e.target.value == "") {
      window.location.href = "http://localhost:3000/community";
    } else {
      this.setState({
        search: e.target.value
      })
    }
  }
  change=(id)=>{
    var crr =this.state.color;
    if(this.state.color[id] == "black"){
      crr=this.state.color
      crr[id]="red";
      this.setState({
        color:crr
      })
      let url9 = `http://localhost:3005/communitylike/add?cid=${this.state.data[id].id}&name=${this.state.name}`
      axios(url9)
        .then((res)=>{

        })
    }
    else if(this.state.color[id] == "red"){
      crr=this.state.color
      crr[id]="black";
      this.setState({
        color:crr
      })
      let url10 = `http://localhost:3005/communitylike/delete?cid=${this.state.data[id].id}&name=${this.state.name}`
      axios(url10)
        .then((res)=>{

        })
    }
  }
  clickSend = (id) => {
    //要执行的代码
    let url = `http://localhost:3005/community/select?content=${this.state.search}`;
    axios(url)
      .then((res) => {
        if (res.data.false) {
        } else {
          for (var i = 0; i < res.data.length; i++) {
            res.data[i].pic = "http://localhost:3005" + res.data[i].pic;
          }
          this.setState({
            data: res.data
          })
        }
      })
  }
  delTie=(id)=>{   
    
      let url9 = `http://localhost:3005/community/deleteCommunity?id=${id}`
      axios(url9)
        .then((res)=>{
          window.location.href = "http://localhost:3000/shequ"
        })
      
  }
  render() {
    return (
      <div>
        <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: "100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
          leftContent={[
            <Link to="/tiezi"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
          ]}>
          已发布的社区动态</NavBar>
        <div style={{ width: '100vw', backgroundColor: '#EFEFF4' }}>
          <div style={{ marginTop: '7vh' }}>
            {
              this.state.data.map((item, idx) =>
                <div style={{ background: '#fff', color: 'black' }}>
                  <div style={{ float: "left" }}>
                    <img src={this.state.pic[idx]} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                  </div>
                  <span style={{marginLeft:'89%'}}><button  onClick={this.delTie.bind(this,(item.id))}>删除</button></span>
                  <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop:'-21vw',}}>{item.name}</p>
                  <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                  <Link to={`/shequyouknow/${item.id}`}>
                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20 }}>{item.content}</p>
                  </Link>
                  <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                  </div>
                </div>)}
          </div>
        </div>
      </div>
      // </>
    )
  }
}
