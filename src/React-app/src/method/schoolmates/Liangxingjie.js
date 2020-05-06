import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'

export default class Liangxingjie extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    梁兴杰
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/梁兴杰.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【梁/兴/杰】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>梁兴杰，中国科学院“百人计划”研究员，国家“杰出青年”基金获得者，国家纳米科学中心研究员，博士生导师。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>现为国家纳米科学中心中国科学院纳米材料的生物医学效应和纳米安全重点实验室副主任，中国生物物理学会会员，中国药学会高级会员</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
