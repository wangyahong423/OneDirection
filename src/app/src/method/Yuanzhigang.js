import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Yuanzhigang extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    袁志刚
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/袁志刚.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【袁/志/刚】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>袁志刚，男,1958年生于上海。法国巴黎社会科学高等研究院经济学博士，教育部“长江学者”特聘教授，博士生导师，全国教学名师。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>袁志刚。复旦大学经济学院原院长，华东师范大学经济与管理学部学术委员会主任；复旦大学理论经济学博士后流动站负责人，复旦大学校务委员会委员，教育部“长江学者奖励计划”特聘教授，博士生导师，国务院政府特殊津贴专家，2006年国家高校教学名师。兼任复旦大学就业与社会保障研究中心主任，教育部经济学教学指导委员会委员，国家劳动和社会保障部专家咨询委员会委员，上海经济学会副会长等职。	</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
