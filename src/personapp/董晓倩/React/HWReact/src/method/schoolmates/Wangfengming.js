import { NavBar } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

export default class Wangfengming extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    王凤鸣
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{ height: '20vh', width: '30vw', marginLeft: '35%', marginTop: '30%' }} src='gonglve/王凤鸣.jpg'></img>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '18px' }}>【王/凤/鸣】</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>王凤鸣，男，1963年8月20日出生，博士、教授、博士生导师。现任河北地质大学校长、中共河北地质大学第一届委员会党委委员、常委、副书记。</p>
                    <p style={{ width: '70vw', color: 'white', textAlign: 'left', marginLeft: '15vw', lineHeight: '3vh' }}>河北省第十届、十一届人民代表大会代表、省人大法制委员会委员。全国青联社会科学工作者联谊会常务理事。河北省中青年社科专家50人工程首批入选者。河北省有突出贡献中青年专家、河北省第六批省管优秀专家。</p>
                    <hr style={{ width: '80vw', textAlign: 'center' }} />
                </div>
            </div>
        )
    }
}
