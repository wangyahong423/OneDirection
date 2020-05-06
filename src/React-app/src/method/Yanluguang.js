import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Yanluguang extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    严陆光
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{ height: '20vh', width: '30vw', marginLeft: '35%', marginTop: '30%' }} src='gonglve/严陆光.jpg'></img>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>【严/陆/光】</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>严陆光，1935年7月6日出生于北京，原籍浙江东阳，电工学家，中国科学院院士、乌克兰科学院外籍院士、第三世界科学院院士、国际欧亚科学院院士，中国科学院电工研究所研究员、博士生导师，宁波大学名誉校长。</p>
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>严陆光是中国著名的电气工程学家，他在电气工程领域辛勤耕耘，致力于推动磁浮技术在中国的应用，长期从事近代科学实验所需的特种装备的研制和电工新技术的研究发展工作为中国电气工程事业的发展做出了重要的贡献 [8]  。</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                </div>
            </div>
        )
    }
}
