import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Gesangdeji extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    格桑德吉
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/格桑德吉.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【格/桑/德/吉】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>格桑德吉，女，门巴族，1978年5月生，西藏墨脱人。河北师范大学民族学院1997届毕业生。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>2013年9月被评为“最美乡村教师”。2014年2月10日，格桑德吉荣获2013感动中国人物。2018年5月，格桑德吉获得第二十二届“中国青年五四奖章”。2019年2月，被授予全国三八红旗手标兵称号。现任西藏自治区林芝市墨脱县完全小学副校长。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
