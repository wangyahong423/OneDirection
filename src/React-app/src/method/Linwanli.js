import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

export default class Linwanli extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    林万里
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/林万里.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【林/万/里】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>林万里先生，于1938年出生在福建福清市。1941年随家人定居印尼的万隆市。他的小学和中学都是在万隆著名的华侨清华小学和清华中学完成的华文教育。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>1957年到中国大陆深造，随之考取河北北京师范学院中文系。四年的大学教育，他接受了系统的中国古代文学，现代文学，外国文学，文艺理论和写作等学科的基本知识和训练，为他日后从事文学创作打下了坚实的基础。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
