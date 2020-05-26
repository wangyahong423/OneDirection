import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
export default class Huancun extends Component {
  render() {
    return (
      <div>
         <NavBar
            style={{ width:'100%',backgroundColor:'#37376f',color:'#fff',position:'fixed ',top:'0',zIndex:1,height:'7vh'}}
            leftContent={[
                <Link to="/shezhi"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>清除缓存</span>
        </NavBar>
      </div>
    );
  }
}
