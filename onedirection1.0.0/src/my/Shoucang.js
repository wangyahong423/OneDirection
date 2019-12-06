import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel,SearchBar} from 'antd-mobile';
export default class Shoucang extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
            leftContent={[
                <Link to="/my"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>我的收藏</span>
        </NavBar>
        <SearchBar placeholder="搜索" ref={ref => this.autoFocusInst = ref} />
        <div style={{width:'100%',height:'10%',background:'#aeaed2'}}>
          <span className="iconfont icon-xinxinicon" style={{color:'white',fontSize:23,lineHeight:2.5,marginLeft:10}}></span>
          <span style={{color:'white',fontSize:23,lineHeight:2.7,marginLeft:50}}>文件名称</span>
          <button style={{marginLeft:130,fontSize:18}}>删除</button>
        </div>
        <div style={{width:'100%',height:'10%',background:'#aeaed2',marginTop:5}}>
          <span className="iconfont icon-xinxinicon" style={{color:'white',fontSize:23,lineHeight:2.5,marginLeft:10}}></span>
          <span style={{color:'white',fontSize:23,lineHeight:2.7,marginLeft:50}}>文件名称</span>
          <button style={{marginLeft:130,fontSize:18}}>删除</button>
        </div>
        <div style={{width:'100%',height:'10%',background:'#aeaed2',marginTop:5}}>
          <span className="iconfont icon-xinxinicon" style={{color:'white',fontSize:23,lineHeight:2.5,marginLeft:10}}></span>
          <span style={{color:'white',fontSize:23,lineHeight:2.7,marginLeft:50}}>文件名称</span>
          <button style={{marginLeft:130,fontSize:18}}>删除</button>
        </div>
        <div style={{width:'100%',height:'10%',background:'#aeaed2',marginTop:5}}>
          <span className="iconfont icon-xinxinicon" style={{color:'white',fontSize:23,lineHeight:2.5,marginLeft:10}}></span>
          <span style={{color:'white',fontSize:23,lineHeight:2.7,marginLeft:50}}>文件名称</span>
          <button style={{marginLeft:130,fontSize:18}}>删除</button>
        </div>
      </div>
    );
  }
}
