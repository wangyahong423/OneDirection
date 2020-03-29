import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Haobolin extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    郝柏林
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/郝柏林.png'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【郝/柏/林】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>郝柏林（1934年6月26日—2018年3月7日），北京人，理论物理学家，中国科学院学部委员（院士）、第三世界科学院院士，复旦大学教授、博士生导师。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>郝柏林主要从事理论物理、非线性科学和理论生命科学研究，主要研究领域包括：固体能谱、高分子半导体理论、统计物理、天线理论、地震分析、混沌动力学、理论生命科学等。。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
