import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'

export default class Lishushen extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/alumnus"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    李树深
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/李树深.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【李/树/深】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>李树深，男，汉族，1963年3月出生于河北保定，半导体器件物理专家，中国科学院院士、发展中国家科学院院士，中国科学院半导体研究所研究员、博士生导师，半导体超晶格国家重点实验室主任，中国科学院副院长、党组成员，中国科学院大学党委书记、校长。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>李树深的主要研究方向包括：低维半导体物理及器件、光电子器件性能预测、固态量子信息</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
        )
    }
}
