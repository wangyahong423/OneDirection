import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
export default class Yonghu extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
            leftContent={[
              <Link to="/My"><span className="iconfont icon-ico_leftarrow"></span></Link>
          ]}
            >
            <span>用户反馈</span>
        </NavBar>
        <img src={require('./img/My2.jpg')} style={{height:"20vh",width:"50vw",margin:"3vh 7vw 0 25vw"}}></img>
        <div style={{textAlign:"center"}}>
        <p style={{fontSize:"4vh",color:"#37376F"}}>校园新生通</p>
        <input style={{border:"1px solid #BBBBBB",height:"6vh",width:"80vw",fontSize:"2vh",color:"#888888",paddingLeft:'2vw'}} value="请在此输入您的联系方式(邮箱电话)">
        </input>
        <input style={{margin:"4vh 0 4vh 0",border:"1px solid #BBBBBB",height:"20vh",width:"80vw",fontSize:"2vh",color:"#888888",paddingLeft:'2vw'}}value="有什么想说的尽管说吧...(邮箱电话)">
        </input><br></br>
        <Link to="/Success">
        <button style={{border:"none",height:"8vh",width:"82vw",backgroundColor:"#37376F",color:"#fff",fontSize:'3vh'}}>提交</button>
        </Link>
        </div>
      </div>
    );
  }
}
