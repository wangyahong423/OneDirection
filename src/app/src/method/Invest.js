import React, { Component } from 'react'
import {Link} from 'react-router-dom';
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
                            <p style={{color:'red'}}>一卡通充值地点：</p>
                            <p>1.在师生活动中心一楼勤助中心大厅西侧，柜台可以用现金充值、墙上有圈存机可以直接使用，注意放上卡之后选择“签约圈存”；</p>
                            <p>2.在四食堂前台、二食堂前台可以现金、支付宝、微信充值；</p>
                            <p>3.在宿舍楼下的自动圈存机，放上一卡通，选择“签约圈存”可以完成充值。</p>
                            <p>4.在天客隆超市付款门口可以进行一卡通充值。</p>
                            <p style={{color:'red'}}>注意：一卡通的初始密码是身份证号后六位。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
