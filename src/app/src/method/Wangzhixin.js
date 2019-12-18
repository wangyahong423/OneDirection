import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Wangzhixin extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    王志欣
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{ height: '20vh', width: '30vw', marginLeft: '35%', marginTop: '30%' }} src='gonglve/王志欣.jpg'></img>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>【王/志/欣】</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>王志欣，男，汉族，1958年11月生，河北平乡人，1987年5月入党，1976年1月参加工作，新加坡南洋理工大学商学院管理经济学专业毕业，研究生学历，理学硕士。</p>
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>曾任河北省科技厅厅长。</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                </div>
            </div>
        )
    }
}
