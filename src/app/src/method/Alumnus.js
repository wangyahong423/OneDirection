import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';


export default class Alumnus extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                    <Link to="/login"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                ]}>
                    杰出校友
                </NavBar>
                <div>
                    <div style={{height:'auto'}}>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/栗战书.jpg' className='mates1' ></img>
                                <p className='name1'>栗战书</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/邓颖超.jpg' className='mates2' ></img>
                                <p className='name2'>邓颖超</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/司徒兰芳.jpg' className='mates1' ></img>
                                <p className='name3'>司徒兰芳</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/贺弘.jpg' className='mates2' ></img>
                                <p className='name4'>贺弘</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/张志伟.jpg' className='mates1' ></img>
                                <p className='name1'>张志伟</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/李树深.jpg' className='mates2' ></img>
                                <p className='name2'>李树深</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/格桑德吉.jpg' className='mates1' ></img>
                                <p className='name1'>格桑德吉</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/刘建亚.jpg' className='mates2' ></img>
                                <p className='name2'>刘建亚</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/王凤鸣.jpg' className='mates1' ></img>
                                <p className='name1'>王凤鸣</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/苏国安.jpg' className='mates2' ></img>
                                <p className='name2'>苏国安</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/张文茂.png' className='mates1' ></img>
                                <p className='name1'>王凤鸣</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/范千文.jpg' className='mates2' ></img>
                                <p className='name2'>范千文</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/庞来兴.jpg' className='mates1' ></img>
                                <p className='name1'>庞来兴</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/林万里.jpg' className='mates2' ></img>
                                <p className='name2'>林万里</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/夏传才.jpg' className='mates1' ></img>
                                <p className='name1'>夏传才</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/冯建男.jpg' className='mates2' ></img>
                                <p className='name2'>冯建男</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/蔡继明.jpg' className='mates1' ></img>
                                <p className='name1'>蔡继明</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/郝柏林.png' className='mates2' ></img>
                                <p className='name2'>郝柏林</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/梁兴杰.jpg' className='mates1' ></img>
                                <p className='name1'>梁兴杰</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/严陆光.jpg' className='mates2' ></img>
                                <p className='name2'>严陆光</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/王进江.jpg' className='mates1' ></img>
                                <p className='name1'>王进江</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/陈书增.jpg' className='mates2' ></img>
                                <p className='name2'>陈书增</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/路洪昌.jpg' className='mates1' ></img>
                                <p className='name1'>路洪昌</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/张砚平.jpg' className='mates2' ></img>
                                <p className='name2'>张砚平</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/侯亮.jpg' className='mates1' ></img>
                                <p className='name1'>侯亮</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/张妹芝.jpg' className='mates2' ></img>
                                <p className='name2'>张妹芝</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/刘永瑞.jpg' className='mates1' ></img>
                                <p className='name1'>刘永瑞</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/袁志刚.jpg' className='mates2' ></img>
                                <p className='name2'>袁志刚</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/马宇骏.jpg' className='mates1' ></img>
                                <p className='name1'>马宇骏</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/刘晓军.png' className='mates2' ></img>
                                <p className='name2'>刘晓军</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/柴冠景.jpg' className='mates1' ></img>
                                <p className='name1'>柴冠景</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/冯韶慧.jpg' className='mates2' ></img>
                                <p className='name2'>冯韶慧</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/李益民.jpg' className='mates1' ></img>
                                <p className='name1'>李益民</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/王志欣.jpg' className='mates2' ></img>
                                <p className='name2'>王志欣</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/张和.jpg' className='mates1' ></img>
                                <p className='name1'>张和</p>
                            </div>
                            <div className='alumnus'>
                                <img src='gonglve/才利民.jpg' className='mates2' ></img>
                                <p className='name2'>才利民</p>
                            </div>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <div className='alumnus'>
                                <img src='gonglve/龙庄伟.jpg' className='mates1' ></img>
                                <p className='name1'>龙庄伟</p>
                            </div>
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
