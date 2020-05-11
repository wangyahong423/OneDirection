import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

export default class Zhangwenmao extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    张文茂
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{ height: '20vh', width: '30vw', marginLeft: '35%', marginTop: '30%' }} src='gonglve/张文茂.png'></img>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>【张/文/茂】</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>张文茂，男，1954年出生，中共党员，特级教师，中学正高级教师，正高级政工师，曾任河北衡水中学校长。自贡衡水一中富顺学校名誉校长。2017年5月起，担任衡水中学保定分校（保定贺阳衡水一中高级中学）名誉校长。</p>
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>曾先后在《人民日报》、《人民教育》等国家、省级报刊发表理论文章20余篇，主编并正式出版了《张文茂与责任教育》、《我这样做校长》、《衡水中学解码》等30余本著作。曾荣获全国劳模、全国五一劳动奖章、享受国务院特殊津贴专家、河北省有突出贡献中青年专家、河北省第五批省管优秀专家、河北省优秀教师、河北省创新教育实验研究先进工作者等多项称号。并多次应邀到全国各地讲学。</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                </div>
            </div>
        )
    }
}
