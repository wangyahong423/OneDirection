import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'

export default class Liujianya extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    刘建亚
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/刘建亚.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【刘/建/亚】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>刘建亚，1964年生，长江学者、国家杰出青年基金获得者，教授、博士生导师。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>现任山东大学党委常委、副校长，威海校区校长，山东大学研究生院院长。</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
