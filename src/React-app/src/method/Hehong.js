import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Hehong extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    贺鸿
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/贺弘.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【贺/鸿】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>1985年贺泓毕业于河北师范大学；1990年获国家教委选派赴日本留学；1994年毕业于日本东京大学，获理学博士学位；2000年入选中国科学院百人计划；贺泓主要研究内容为环境催化、非均相大气化学、环境催化体系设计研发，及其在大气污染物催化净化方面的应用。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>贺泓，1965年1月15日出生于河北省邯郸市，大气污染防治专家，中国工程院院士，中国科学院生态环境研究中心研究员、博士生导师，中国科学院城市环境研究所副所长。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
