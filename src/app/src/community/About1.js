import React, { Component } from 'react';
import {NavBar,ActionSheet} from 'antd-mobile';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios'
export default class Ping extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
      todo:[],
      cid:1,
      name:'张三',
      content:'',
      clicks:1
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
  componentDidMount() {
    console.log(this.state.data);
    console.log(this.state.todo);
    var id =this.props.match.params.id;
    console.log(this.props)
    console.log(id)
    let url = `http://localhost:3005/community/list/`+id;
    let url1 = `http://localhost:3005/communitytalk/list`;
    axios(url)
        .then((res)=>{
          this.setState({
            data:res.data
          })
          console.log(this.state.data)
          var brr = []
          this.state.data.map((item)=>{
            if(item.id == id){
              brr.push(item);
            }
            this.setState({
              data:brr
            })
          })
          console.log(this.state.data);
        })
    /**
      *评论的请求 
    */
    axios(url1)
        .then((res) => {
            this.setState({
              todo: res.data.communitytalk                      
            })
            var arr = [];
              this.state.todo.map((item)=>{
                if(item.cid == id){
                  arr.push(item);                 
                }
                this.setState({
                  todo:arr
                })
            })
        })
        console.log(this.state.todo)
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
    console.log(this.state.data[0].clicks)
  }
  render() {
    let color1 = {
      color: this.state.clicked2 ? "black" : "red",
      fontSize: '3vh',
      marginLeft: '23%'
    }
    return (
      <div style={{position:'relative'}}>
        <NavBar
            style={{  backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh'}}
            leftContent={[
                <Link to="/community"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>详情</span>
        </NavBar>
            {
              this.state.data.map((item) =>
                <div style={{ background: '#fff', color: 'black' }}>
                  <div style={{ float: "left" }}>
                    <img src={require('./img/touxiang2.jpg')} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                  </div>
                  <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                  <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                  <Link to={`/aboutyouknow/${item.id}`}>
                    <p style={{ marginLeft: 25, color: 'black', marginTop: 20 ,fontSize:17}}>{item.content}</p>
                  </Link>
                  <div style={{ marginTop: 20 }}>
                    <sapn className="iconfont icon-zhuanfa" onClick={this.showShareActionSheet} style={{ fontSize: '2.5vh', marginLeft: '17%', color: 'black' }}></sapn>
                    <Link to={`/pinglunone/${item.id}`}>
                      <sapn className="iconfont icon-pinglun" style={{ fontSize: '3.2vh', marginLeft: '22%', color: 'black' }}></sapn>
                    </Link>
                    <sapn className="iconfont icon-dianzan"  onClick={this.changeStyle} style={{ value: 1, marginLeft: '26%' }}></sapn>
                  </div>
                  <div style={{width:'100%',height:'2vh',backgroundColor:'white'}}>
                  </div>
                </div>)}
          <span style={{fontSize:15}}>评论列表</span>
          <hr ></hr>  
          <div marginTop="4vh">
            {
                this.state.todo.map((item)=>(
                  <div style={{ background: '#fff', color: 'black' }}>
                    <div style={{ float: "left" }}>
                      <img src={require('./img/touxiang.jpg')} style={{ height: '5vh', width: '9vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                    </div>
                    <p style={{ marginLeft: 25, fontSize: '2vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                    <div style={{ marginLeft: 25, color: 'gray', fontSize: '3vw', marginTop: "-5vw" }}>{this.state.data[0].time}
                    </div>
                    <p style={{marginLeft: 30, color: 'black', marginTop:15,fontSize:15,width:'90%'}}>{item.content}</p>    
                    <div style={{width:'100%',height:'2vh',backgroundColor:'white'}}>
                    </div>        
                  </div>
                  
                )
            )}
              
          </div>
        
        </div>
       
    );
  }
}