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
                   一卡通激活
                </NavBar> 
                <div  className='jihuoImg'>
                    <div className='jihuoBox' >
                        <div className='jihuoword'>
                            <p style={{color:'red'}}>一卡通激活方式：</p>
                            <p>1、在师生活动中心二楼建设银行，在开学之际人可能比较多，排队进入，会有工作人员帮助你激活一卡通；</p>
                            <p>2、在手机建设银行APP，会有详细的激活一卡通的方式；</p>
                            <p>3、在不进行任何操作的情况下，对一卡通直接进行充值，也相当于完成了一卡通的激活。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
