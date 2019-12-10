import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';
import '../App.css';


export default class OneCard extends Component {
    render() {
        return (
            <div >
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/login"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                   一卡通
                </NavBar> 
                <div  className='onecardImg'>
                    <div className='onecardjihuo' >
                        <Link to='/activate' className='jihuoword'>一卡通激活</Link>
                    </div>
                    <div className='onecardchongzhi'>
                        <Link to='/invest' className='jihuoword'>一卡通充值</Link>
                    </div>
                    <div className='onecardguashi' >
                        <Link to='/loss' className='jihuoword'>一卡通挂失</Link>
                    </div>
                </div>
            </div>
        )
    }
}
