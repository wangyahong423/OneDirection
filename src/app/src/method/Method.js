import { NavBar,Carousel} from 'antd-mobile';
import React, { Component } from 'react'
import { Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';
import '../App.css';

export default class Method extends Component {
    render() { 
        return (
            <div>
                <NavBar style={{width:'100%',backgroundColor:'#37376f',color:'#fff',position:'sticky ',top:'0px',zIndex:11111111,height:'7vh'}}>校园新生通</NavBar>
                    <Carousel
                        autoplay={true}
                        infinite
                        dots={false}
                        // beforeChange={(from, to) => }
                        // afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2,3,4].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: '35vh' }} >
                            <img src={`gonglve/method${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' });}}/>
                        </a>
                    ))}
                    </Carousel>
                    <div style={{height:'auto',marginTop:'7vh'}}>
                        <Flex justify="center">
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/onecard' ><div style={{height:'100px',width:'100px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-card' style={{color: 'white','fontSize':'40px',position:'relative',top:'-75px',left:'23px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-22px',color:'black',fontSize:'14.991px'}} >一卡通</span>   
                                    </Link>
                                </div>
                            </div>

                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/organization' ><div style={{height:'100px',width:'100px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-zuzhi' style={{color: 'white','fontSize':'40px',position:'relative',top:'-75px',left:'29px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-22px',color:'black',fontSize:'14.991px'}} >社团组织</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/school' ><div style={{height:'100px',width:'100px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexiao' style={{color: 'white','fontSize':'40px',position:'relative',top:'-75px',left:'17px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-22px',color:'black',fontSize:'14.991px'}} >学校</span>   
                                    </Link>
                                </div>
                            </div>
                        </Flex>
                        <Flex justify="center">
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/study' ><div style={{height:'100px',width:'100px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi' style={{color: 'white','fontSize':'40px',position:'relative',top:'-74px',left:'18px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-22px',color:'black',fontSize:'14.991px'}} >学习</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/alumnus' ><div style={{height:'100px',width:'100px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi' style={{color: 'white','fontSize':'40px',position:'relative',top:'-74px',left:'31px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-22px',color:'black',fontSize:'14.991px'}} >杰出校友</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/college' ><div style={{height:'100px',width:'100px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi1' style={{color: 'white','fontSize':'40px',position:'relative',top:'-74px',left:'17px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-22px',color:'black',fontSize:'14.991px'}} >学院</span>   
                                    </Link>
                                </div>
                            </div>
                        </Flex>
                    </div>
            </div>
        )
    }
}
