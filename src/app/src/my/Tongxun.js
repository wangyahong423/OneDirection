import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
export default class Tongxun extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{ width:'100%',backgroundColor:'#37376f',color:'#fff',position:'fixed ',top:'0',zIndex:1,height:'7vh'}}
            leftContent={[
                <Link to="/my"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>通讯录</span>
        </NavBar>
        <button style={{width:'100%',marginTop:'7vh',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：赵月霞&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789909</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：蒋春澜&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789919</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：戴建兵&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789989</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：陆军恒&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789979</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：邓明立&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789819</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：李&emsp;榕&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789829</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：张士欢&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80799839</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：王大勇&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789849</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：刘敬泽&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789859</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校领导：郑振峰&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80799869</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80787777</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室（传真）：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80788888</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：主任&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789801</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：副主任&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789802</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：副主任&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789803</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：党务&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789804</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：支秘&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789805</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：机要&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789806</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：文印&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789808</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：收发&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789809</p>
        </button>
        <button style={{width:'100%',height:'8vh',lineHeight:'1vh'}}>
          <p style={{fontSize:'17px'}}>学校办公室：车队&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;80789810</p>
        </button>

      </div>
    );
  }
}
