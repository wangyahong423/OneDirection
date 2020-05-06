import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

export default class Xiachuancai extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    夏传才
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{ height: '20vh', width: '30vw', marginLeft: '35%', marginTop: '30%' }} src='gonglve/夏传才.jpg'></img>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>【夏/传/才】</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>1924-2017，安徽亳县人，现代著名学者。1945年毕业于北京师范大学中文系。</p>
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>历任晋察冀边区民政处、军区民运部干事，北京师范大学教师，天津师范学院讲师，河北师范学院学报主编，河北师范学院教授、研究生导师，中国诗经学会会长，全球汉诗总会名誉理事，教授。</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                </div>
            </div>
        )
    }
}
