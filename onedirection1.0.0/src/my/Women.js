import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
export default class Women extends Component {
  render() {
    return (
      <div>
        <NavBar
            style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'20',zIndex:10,textAlign:'center',height:'7vh'}}
            leftContent={[
                <Link to="/my"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
            ]}
            >
            <span>关于我们</span>
        </NavBar>
        <div style={{width:'100%',textAlign:"center",fontSize:20,lineHeight:2,}}>
        <p style={{lineHeight:9}}><strong>校园新生通</strong></p>
          <p>团队：One Direction</p>
          <p>微信公众号：OneDirection</p>
          <p>版本信息：1.0.1</p>
          <p>意见联系：88888888</p>
        </div>
      </div>
    );
  }
}
