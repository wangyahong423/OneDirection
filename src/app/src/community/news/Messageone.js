import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'; 
import { NavBar,SearchBar} from 'antd-mobile';
export default class Messageone extends Component {
  render() {
    return (
        <div style={{position: 'relative'}}>
            <NavBar
                style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center'}}
                leftContent={[
                    <Link to="/xinnews"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}
                >
                <span>KIKO</span>
            </NavBar>
            <div style={{marginTop:10}}>
                <span className="iconfont icon-mingxing-sy" style={{fontSize:37,marginLeft:5}}></span>
                <button style={{marginLeft:10,backgroundColor:'pink'}}>你好，想问一下宿舍里可以用吹风机吗</button>
            </div>
            <div style={{marginTop:15}}>
                <span className="iconfont icon-053-sy" style={{fontSize:30,float:"right",marginRight:10}}></span>
                <button style={{background:'greenpink',float:'right',marginRight:10}}>宿舍不可以用，但是你可以到宿舍下的洗衣房用</button>
            </div>
        </div>
    );
  }
}
