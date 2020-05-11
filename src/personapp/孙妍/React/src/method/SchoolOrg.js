import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Flex, List, SearchBar } from 'antd-mobile';
import '../App.css';
const Item = List.Item;
const Brief = Item.Brief;

export default class SchoolOrg extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/organization"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    校级组织类
                </NavBar>
                <div>
                    <div style={{ height: '3vh', width: '100vw' }}></div>
                    <Flex style={{ marginBottom: '5vh' }}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='schoolxueshenghui' ></div>
                                <span style={{ color: '#000' }}>校学生会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qingxie' ></div>
                                <span style={{ color: '#000' }}>校青协</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{ marginBottom: '5vh' }}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='tuanwei' ></div>
                                <span style={{ color: '#000' }}>校团委</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='tushuguan' ></div>
                                <span style={{ color: '#000' }}>图书馆读者协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{ marginBottom: '5vh' }}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='hongshizihui' ></div>
                                <span style={{ color: '#000' }}>校红十字会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yishutuan' ></div>
                                <span style={{ color: '#000' }}>校艺术团</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{ marginBottom: '5vh' }}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='guoqidui' ></div>
                                <span style={{ color: '#000' }}>大学生国旗队</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='libindui' ></div>
                                <span style={{ color: '#000' }}>大学生礼宾队</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{ marginBottom: '5vh' }}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='guangbotai' ></div>
                                <span style={{ color: '#000' }}>广播台</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qinzhuzhongxin' ></div>
                                <span style={{ color: '#000' }}>勤助中心</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{ marginBottom: '5vh' }}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='gongyulou' ></div>
                                <span style={{ color: '#000' }}>公寓楼管理委员会</span>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
