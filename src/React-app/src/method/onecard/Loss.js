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
                   一卡通挂失
                </NavBar> 
                <div  className='jihuoImg'>
                    <div className='jihuoBox' >
                        <div className='jihuoword'>
                            <p style={{color:'red'}}>一卡通挂失方式：</p>
                            <p>1、首先可以通过发布朋友圈、QQ空间、信息墙等，集众人力量帮助自己寻卡；</p>
                            <p>2、其次如果长时间未寻得一卡通，可通过师生活动中心一楼勤助中心大厅的西侧柜台上进行补卡，携带身份证等证件和现金，十元补一张卡，银行卡也是可以在那里补。</p>
                            <p style={{color:'red'}}>对于补完银行卡之后银行卡和一卡通的使用情况：</p>
                            <p>1、补完卡之后和原来的两卡一题是不一样的，变成一卡通和银行卡分离，但是不影响原来的功能。</p>
                            <p>2、银行卡的卡号也不再是原来那个卡号，但是不用担心无法充值饭卡的问题，银行卡也是自己的名字、电话等信息。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
