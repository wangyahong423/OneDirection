import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';

export default class Activate extends Component {
    render() {
        return (
            <div >
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/onecard"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                   一卡通充值
                </NavBar> 
                <div  className='jihuoImg'>
                    <div className='jihuoBox' >
                        <div className='jihuoword'>
                            <p>一卡通充值地点：</p>
                            <p>1.在师生活动中心一楼</p>
                            <p>2.在四食堂前台、二食堂前台</p>
                            <p>3.在宿舍楼下的自动圈存机</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
