// import { NavBar} from 'antd-mobile';
// import React, { Component } from 'react'
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
// export default class Ping extends Component {
//     render() {
//         return (
//             <>
//             <div style={{ position: 'relative' }}>
//                 <NavBar
//                     style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center'}}
//                     leftContent={[
//                         <Link to="/community"><span style={{fontSize:'15px',color:'white'}}>取消</span></Link>
//                       ]}
//                     rightContent={[
//                         <Link to="/community"><span  style={{fontSize:'15px',color:'white'}}>发送</span></Link>
//                     ]}
//                 >
//                 <span>评论</span>
//                 </NavBar>
//                 <div style={{height:'20%',color:'black'}}>
//                     <div style={{float:"left"}}>
//                         <div className="iconfont icon-Mian-sy" style={{fontSize:37,marginLeft:5}}></div>
//                     </div>
//                     <div>
//                         <p style={{marginLeft:55}}>hello</p>
//                         <p style={{marginLeft:55}}>今天11:03</p>
//                     </div>
//                     <p style={{marginLeft:15}}>有没有学姐说一下软件工程大一上学期学的什么科目呀？</p>
//                     <div style={{marginTop:20}}>
//                         <sapn className="iconfont icon-fenxiang1-sy" style={{fontSize:35,marginLeft:'17%',color:'black'}}></sapn>
//                         <sapn className="iconfont icon-icon-test-sy" style={{fontSize:35,marginLeft:'20%',color:'black'}}></sapn>
//                         <sapn className="iconfont icon-zan-sy" style={{fontSize:38,marginLeft:'23%'}}></sapn>
//                     </div>
//                 </div>
//             </div>
//             </>
//         )
//     }
// }



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
      clicked2: true,
      cid:1,
      name:'张三',
      content:''
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
  addItem=()=>{
    let url = `http://localhost:3005/communitytalk/add?cid=${this.state.cid}
    &name=${this.state.name}&content=${this.state.content}`;
    axios(url)
        .then((res) => {
            if (res.data.ok) {
                alert(res.data.msg);
            } else {
                alert(res.data.msg);
            }
        })
    this.setState({
      content:''
    })
  }
  componentDidMount() {
    console.log(this.state.data);
    var id =this.props.match.params.id;
    console.log(this.props)
    console.log(id)
    let url = `http://localhost:3005/community/list/`+id;
    let url1 = `http://localhost:3005/communitytalk/list/`;
    axios(url)
        .then((res) => {
          console.log(res.data)
          console.log(res.data)
            this.setState({
              data: res.data[id-1]                 
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
  componentWillUpdate(){
    let url1 = `http://localhost:3005/communitytalk/list/`;
    axios(url1)
        .then((res) => {
            this.setState({
              todo: res.data.communitytalk             
            })
        })
  }
  getContent=(e)=>{
    this.setState({
        content:e.target.value
    })
  }
  changeColor(){
    this.setState({
        clicked2:!this.state.clicked2
    })
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
            <span>评论</span>
        </NavBar>
        <div style={{height:'20vh',background:'#fff',color:'black'}} >
          <div style={{float:"left"}}>
            <img src={require('./img/touxiang1.jpg')} style={{height:'7.8vh',width:'14vw',borderRadius:'50%',marginLeft:15,marginTop:9}}/>
          </div>
          <p style={{marginLeft:75,fontSize:'2.5vh',lineHeight:2.5,marginTop:6}}>{this.state.data.name}</p>
          <div style={{marginLeft:75,color:'gray',fontSize:'2vw',marginTop:"-5vw"}}>{this.state.data.time}</div>
            <p style={{marginLeft:25,color:'black',marginTop:20}}>{this.state.data.content}</p>
            {/* <div style={{marginTop:20}}>
              <sapn className="iconfont icon-zhuanfa" onClick={this.showShareActionSheet} style={{fontSize:'2.5vh',marginLeft:'17%',color:'black'}}></sapn>
              <sapn className="iconfont icon-pinglun" onClick={this.showActionSheet} style={{fontSize:'3.2vh',marginLeft:'22%',color:'black'}}></sapn>
              <sapn className="iconfont icon-dianzan" onClick={this.changeColor.bind(this)}  style={color1}></sapn>
            </div> */}
          </div>
          <input placeholder="       添加评论" style={{width:'82%',marginTop:'1vh',height:'37px',borderBottomColor:'gray'}} onChange={this.getContent}/>
          <button style={{width:'16%',marginTop:'vh',height:'42px',borderBottomColor:'gray'}} onClick={this.addItem}>发送</button>
          <span style={{fontSize:15}}>评论列表</span>
          <hr ></hr>  
          <div marginTop="4vh">
            {
                this.state.todo.map((item,idx)=>(
                  <div style={{ background: '#fff', color: 'black' }}>
                    <div style={{ float: "left" }}>
                      <img src={require('./img/touxiang2.jpg')} style={{ height: '5vh', width: '9vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                    </div>
                    <p style={{ marginLeft: 25, fontSize: '2vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                    <div style={{ marginLeft: 25, color: 'gray', fontSize: '3vw', marginTop: "-5vw" }}>{this.state.data.time}
                    </div>
                    <p style={{ marginLeft: 55, color: 'black', marginTop: 10,fontSize:17 }}>{item.content}</p>            
                  </div>
                )
            )}
              
          </div>
        
        </div>
       
    );
  }
}

