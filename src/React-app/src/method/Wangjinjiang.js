import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Wangjinjiang extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    王进江
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{ height: '20vh', width: '30vw', marginLeft: '35%', marginTop: '30%' }} src='gonglve/王进江.jpg'></img>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>【王/进/江】</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>王进江，男，汉族，1962年9月出生，河北省晋州市人，1984年6月加入中国共产党，1983年8月参加工作，河北师范大学数学系数学专业毕业，大学学历，理学学士学位。</p>
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>现任河北省邯郸市政协主席、党组书记。</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                </div>
            </div>
        )
    }
}
