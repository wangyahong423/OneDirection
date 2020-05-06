import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Panglaixing extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    庞来兴
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/庞来兴.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【庞/来/兴】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>庞来兴，河北沧州人，1974年生，企业家、学者。中山大学博士后。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>现为广州博兴化工科技有限公司总经理，中国感光学会辐射固化专业委员会委员；曾任南昌航空大学兼职硕士导师，广东省科技咨询专家库成员。2007年创办广州市博兴化工科技有限公司，2010年创办广东新丰博兴聚合材料有限公司。2013年入选首届广州青年企业家发展领航计划，评为科技部首届科技创新创业领军人才，并入选首批国家高层次人才特殊支持计划（又称“万人计划”）。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
