import { NavBar,Carousel} from 'antd-mobile';
import React, { Component } from 'react'
import { Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';
import '../App.css'

export default class Method extends Component {
    render() { 
        return (
            <div>
                <NavBar style={{width:'100%',backgroundColor:'#37376f',color:'#fff',position:'sticky ',top:'0px',zIndex:11111111,height:'5vh'}}>校园新生通</NavBar>
                    <Carousel
                        autoplay={true}
                        infinite
                        dots={false}
                    >
                    {[1,2,3,4].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: '35vh' }} >
                            <img src={`gonglve/method${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' });}}/>
                        </a>
                    ))}
                    </Carousel>
                    <div style={{height:'270px',marginTop:'2vh',backgroundColor:'#fff',width:'98vw',marginLeft:'1vw',paddingTop:'2vh',paddingBottom:'-2vh',borderRadius:'3vw'}}>
                        <Flex justify="center">
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/onecard' ><div style={{height:'80px',width:'80px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-card' style={{color: 'white','fontSize':'35px',position:'relative',top:'-62px',left:'15px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >一卡通</span>   
                                    </Link>
                                </div>
                            </div>

                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/organization' ><div style={{height:'80px',width:'80px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-zuzhi' style={{color: 'white','fontSize':'35px',position:'relative',top:'-62px',left:'21px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >社团组织</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'100px',width:'100px'}}>
                                    <Link to='/school' ><div style={{height:'80px',width:'80px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexiao' style={{color: 'white','fontSize':'35px',position:'relative',top:'-62px',left:'8px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >学校</span>   
                                    </Link>
                                </div>
                            </div>
                        </Flex>
                        <Flex justify="center">
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'95px',width:'100px'}}>
                                    <Link to='/study' ><div style={{height:'80px',width:'80px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi' style={{color: 'white','fontSize':'35px',position:'relative',top:'-63px',left:'8px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >学习</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'95px',width:'100px'}}>
                                    <Link to='/alumnus' ><div style={{height:'80px',width:'80px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi' style={{color: 'white','fontSize':'35px',position:'relative',top:'-63px',left:'23px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >杰出校友</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'95px',width:'100px'}}>
                                    <Link to='/college' ><div style={{height:'80px',width:'80px',backgroundColor:'#343466',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi1' style={{color: 'white','fontSize':'35px',position:'relative',top:'-63px',left:'7px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >学院</span>   
                                    </Link>
                                </div>
                            </div>
                        </Flex>
                    </div>
                    <div className='ks' style={{height:'8vh',width:'96vw',marginLeft:'2vw',textAlign:'center',lineHeight:'8vh',marginTop:'2vh',borderRadius:'2vh'}}>
                        <span style={{color:'#ade548',fontSize:'24px',textShadow:'5px 5px 4px orange',marginTop:'-2vh'}}>想要快速了解自己的专业？</span>
                        <span style={{textShadow:'6px -6px 4px blue',fontSize:'20px',color:'#fff'}}>
                            查看详情
                        </span>
                    </div>
                    <div style={{height:'23vh',width:'98vw',borderRadius:'20px',marginLeft:'1vw',backgroundColor:'#fff',marginTop:'2vh',marginBottom:'2vh'}}>
                        <div style={{borderLeftWidth:'2px',borderLeftColor:'blue',marginBottom:'20px',height:'3vh',width:'96vw',marginLeft:'2vw',marginTop:'2vh'}}>
                            <span style={{paddingLeft:'2vw',fontSize:'16px',lineHeight:'5vh',color:'red'}}>>>  一 键 直 达</span>
                        </div>

                        <Flex justify="center">
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'95px',width:'100px'}}>
                                    <Link to='/study' ><div style={{height:'80px',width:'80px',backgroundColor:'#125dfa',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi' style={{color: 'white','fontSize':'40px',position:'relative',top:'-63px',left:'22px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >添加笔记</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'95px',width:'100px'}}>
                                    <Link to='/alumnus' ><div style={{height:'80px',width:'80px',backgroundColor:'#cba842',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi' style={{color: 'white','fontSize':'40px',position:'relative',top:'-63px',left:'22px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-27px',color:'black',fontSize:'14.991px'}} >就业服务</span>   
                                    </Link>
                                </div>
                            </div>
                            <div className='inline placeholder' style={{margin:'0 auto'}}>
                                <div style={{height:'95px',width:'100px'}}>
                                    <a href='http://heshida.jiuyeb.cn/' ><div style={{height:'80px',width:'80px',backgroundColor:'#8a33ee',display:'inline-block',marginRight:'34px',borderRadius:'50px'}}></div>
                                        <i className='iconfont icon-xuexi1' style={{color: 'white','fontSize':'35px',position:'relative',top:'-63px',left:'13px'}}></i>
                                        <span style={{position: 'relative',top: '-12px',left: '-28px',color:'black',fontSize:'14.991px'}} >校友会</span>   
                                    </a>
                                </div>
                            </div>
                        </Flex>
                    </div>
            </div>
        )
    }
}
