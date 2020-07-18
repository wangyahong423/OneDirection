import { NavBar,SearchBar,Flex} from 'antd-mobile';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css'
import lizhanshu from './Lizhanshu';

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
                            <Link to='/lizhanshu' className='alumnus'>
                                <img src='gonglve/栗战书.jpg' className='mates1' ></img>
                                <p className='name1'>栗战书</p>
                            </Link>
                            <Link to='/dengyingchao' className='alumnus'>
                                <img src='gonglve/邓颖超.jpg' className='mates2' ></img>
                                <p className='name2'>邓颖超</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to ='/situlanfang' className='alumnus'>
                                <img src='gonglve/司徒兰芳.jpg' className='mates1' ></img>
                                <p className='name3'>司徒兰芳</p>
                            </Link>
                            <Link to="/hehong" className='alumnus'>
                                <img src='gonglve/贺弘.jpg' className='mates2' ></img>
                                <p className='name4'>贺弘</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/zhangzhiwei" className='alumnus'>
                                <img src='gonglve/张志伟.jpg' className='mates1' ></img>
                                <p className='name1'>张志伟</p>
                            </Link>
                            <Link to="/lishushen" className='alumnus'>
                                <img src='gonglve/李树深.jpg' className='mates2' ></img>
                                <p className='name2'>李树深</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/gesangdeji" className='alumnus'>
                                <img src='gonglve/格桑德吉.jpg' className='mates1' ></img>
                                <p className='name1'>格桑德吉</p>
                            </Link>
                            <Link to="/liujianya" className='alumnus'>
                                <img src='gonglve/刘建亚.jpg' className='mates2' ></img>
                                <p className='name2'>刘建亚</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/wangfengming" className='alumnus'>
                                <img src='gonglve/王凤鸣.jpg' className='mates1' ></img>
                                <p className='name1'>王凤鸣</p>
                            </Link>
                            <Link to="/suguoan" className='alumnus'>
                                <img src='gonglve/苏国安.jpg' className='mates2' ></img>
                                <p className='name2'>苏国安</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/zhangwenmao" className='alumnus'>
                                <img src='gonglve/张文茂.png' className='mates1' ></img>
                                <p className='name1'>张文茂</p>
                            </Link>
                            <Link to="/fanqianwen" className='alumnus'>
                                <img src='gonglve/范千文.jpg' className='mates2' ></img>
                                <p className='name2'>范千文</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/panglaixing" className='alumnus'>
                                <img src='gonglve/庞来兴.jpg' className='mates1' ></img>
                                <p className='name1'>庞来兴</p>
                            </Link>
                            <Link to="/linwanli" className='alumnus'>
                                <img src='gonglve/林万里.jpg' className='mates2' ></img>
                                <p className='name2'>林万里</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/xiachuancai" className='alumnus'>
                                <img src='gonglve/夏传才.jpg' className='mates1' ></img>
                                <p className='name1'>夏传才</p>
                            </Link>
                            <Link to="/fengjiannan" className='alumnus'>
                                <img src='gonglve/冯建男.jpg' className='mates2' ></img>
                                <p className='name2'>冯健男</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/caijiming" className='alumnus'>
                                <img src='gonglve/蔡继明.jpg' className='mates1' ></img>
                                <p className='name1'>蔡继明</p>
                            </Link>
                            <Link to="/haobolin" className='alumnus'>
                                <img src='gonglve/郝柏林.png' className='mates2' ></img>
                                <p className='name2'>郝柏林</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/liangxingjie" className='alumnus'>
                                <img src='gonglve/梁兴杰.jpg' className='mates1' ></img>
                                <p className='name1'>梁兴杰</p>
                            </Link>
                            <Link to="/yanluguang" className='alumnus'>
                                <img src='gonglve/严陆光.jpg' className='mates2' ></img>
                                <p className='name2'>严陆光</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/wangjinjiang" className='alumnus'>
                                <img src='gonglve/王进江.jpg' className='mates1' ></img>
                                <p className='name1'>王进江</p>
                            </Link>
                            <Link to="/chenshuzeng" className='alumnus'>
                                <img src='gonglve/陈书增.jpg' className='mates2' ></img>
                                <p className='name2'>陈书增</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/luhongchang" className='alumnus'>
                                <img src='gonglve/路洪昌.jpg' className='mates1' ></img>
                                <p className='name1'>路洪昌</p>
                            </Link>
                            <Link to="/zhangyanping" className='alumnus'>
                                <img src='gonglve/张砚平.jpg' className='mates2' ></img>
                                <p className='name2'>张砚平</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/houliang" className='alumnus'>
                                <img src='gonglve/侯亮.jpg' className='mates1' ></img>
                                <p className='name1'>侯亮</p>
                            </Link>
                            <Link to="/zhangmeizhi" className='alumnus'>
                                <img src='gonglve/张妹芝.jpg' className='mates2' ></img>
                                <p className='name2'>张妹芝</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/liuyongrui" className='alumnus'>
                                <img src='gonglve/刘永瑞.jpg' className='mates1' ></img>
                                <p className='name1'>刘永瑞</p>
                            </Link>
                            <Link to="/yuanzhigang" className='alumnus'>
                                <img src='gonglve/袁志刚.jpg' className='mates2' ></img>
                                <p className='name2'>袁志刚</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/mayujun" className='alumnus'>
                                <img src='gonglve/马宇骏.jpg' className='mates1' ></img>
                                <p className='name1'>马宇骏</p>
                            </Link>
                            <Link to="/liuxiaojun" className='alumnus'>
                                <img src='gonglve/刘晓军.png' className='mates2' ></img>
                                <p className='name2'>刘晓军</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/chaiguanjing" className='alumnus'>
                                <img src='gonglve/柴冠景.jpg' className='mates1' ></img>
                                <p className='name1'>柴冠景</p>
                            </Link>
                            <Link to="/fengshaohui" className='alumnus'>
                                <img src='gonglve/冯韶慧.jpg' className='mates2' ></img>
                                <p className='name2'>冯韶慧</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/liyimin" className='alumnus'>
                                <img src='gonglve/李益民.jpg' className='mates1' ></img>
                                <p className='name1'>李益民</p>
                            </Link>
                            <Link to="/wangzhixin" className='alumnus'>
                                <img src='gonglve/王志欣.jpg' className='mates2' ></img>
                                <p className='name2'>王志欣</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link  to="/zhanghe" className='alumnus'>
                                <img src='gonglve/张和.jpg' className='mates1' ></img>
                                <p className='name1'>张和</p>
                            </Link>
                            <Link  to="/cailimin" className='alumnus'>
                                <img src='gonglve/才利民.jpg' className='mates2' ></img>
                                <p className='name2'>才利民</p>
                            </Link>
                        </Flex>
                        <Flex style={{marginTop:'3vh'}}>
                            <Link to="/longzhuangwei" className='alumnus'>
                                <img src='gonglve/龙庄伟.jpg' className='mates1' ></img>
                                <p className='name1'>龙庄伟</p>
                            </Link>
                        </Flex>
                    </div>
                </div>
            </div>
        )
    }
}
