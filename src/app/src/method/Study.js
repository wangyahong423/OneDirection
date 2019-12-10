import { NavBar} from 'antd-mobile';
import React, { Component } from 'react'
import { Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';
import '../App.css';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div style={{backgroundColor:'red',width:'40vw',marginLeft:'5vw',marginTop:'5vh'}} className={`${className} placeholder`} {...restProps}>
        <p className='iconfont icon-zongheceping'></p>
        <p>综合学生测评</p>
    </div>
  );
export default class Study extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/login"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        学习
                </NavBar> 
                
                <div className='studyImg'>
                    <Flex>
                        <Flex.Item>
                            <Link to='/zongheceping' style={{color:'black'}}><div style={{lineHeight:'17vh',backgroundColor:'rgb(198, 188, 188)',opacity:'0.7',width:'40vw',marginLeft:'5vw',marginTop:'10vh',height:'27vh',textAlign:'center',borderRadius:'5vw'}}>
                                <p style={{fontSize:'16vw'}} className='iconfont icon-zongheceping'></p>
                                <p style={{fontSize:'5vw',marginTop:'-15vh'}}>综合学生测评</p>
                            </div></Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to='/second' style={{color:'black'}}><div style={{lineHeight:'17vh',backgroundColor:'rgb(198, 188, 188)',opacity:'0.7',width:'40vw',marginLeft:'5vw',marginTop:'10vh',height:'27vh',textAlign:'center',borderRadius:'5vw'}}>
                                <p style={{fontSize:'16vw'}} className='iconfont icon-xuexi1'></p>
                                <p style={{fontSize:'5vw',marginTop:'-15vh'}}>第二课堂</p>
                            </div></Link>
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Link to='/jiangxuejin' style={{color:'black'}}><div style={{lineHeight:'17vh',backgroundColor:'rgb(198, 188, 188)',opacity:'0.7',width:'40vw',marginLeft:'5vw',marginTop:'10vh',height:'27vh',textAlign:'center',borderRadius:'5vw'}}>
                                <p style={{fontSize:'16vw'}} className='iconfont icon-jiangxuejinshenqingchaxun'></p>
                                <p style={{fontSize:'5vw',marginTop:'-15vh'}}>奖学金</p>
                            </div></Link>
                        </Flex.Item>
                        <Flex.Item>
                            <Link to='/zhuxuejin' style={{color:'black'}}>
                            <div style={{lineHeight:'17vh',backgroundColor:'rgb(198, 188, 188)',opacity:'0.7',width:'40vw',marginLeft:'5vw',marginTop:'10vh',height:'27vh',textAlign:'center',borderRadius:'5vw'}}>
                                <p style={{fontSize:'16vw'}} className='iconfont icon-zhuxuejinshenqingchaxun'></p>
                                <p style={{fontSize:'5vw',marginTop:'-15vh'}}>助学金</p>
                            </div></Link>
                        </Flex.Item>
                    </Flex>


                    {/* <div className='zonghe' >
                        <Link to='/zongheceping' style={{color:'black'}}>
                            <p style={{fontSize:'17vw',top:'-10vh',left:'11.5vw',position:'relative'}} className='iconfont icon-zongheceping'></p>
                            <p className='studyword'>综合学生测评</p>
                        </Link>
                    </div>
                    <div className='second'>
                        <Link to='/second' style={{color:'black'}}>
                            <p style={{fontSize:'17vw',top:'3vh',left:'10vw',position:'relative',top:'-7vh'}} className='iconfont icon-xuexi1'></p>
                            <p  className='studysecond'>第二课堂</p>
                        </Link>
                    </div>
                    <div className='jiangxuejin' >
                        <Link to='/jiangxuejin' style={{color:'black'}}>
                            <p style={{fontSize:'17vw',top:'-10vh',left:'11.5vw',position:'relative',top:'4vh'}} className='iconfont icon-jiangxuejinshenqingchaxun'></p>
                            <p className='studyjiang'>奖学金</p>
                        </Link>
                    </div>
                    <div className='zhuxuejin' >
                        <Link to='/zhuxuejin' style={{color:'black'}}>
                            <p style={{fontSize:'17vw',top:'-10vh',left:'11.5vw',position:'relative',top:'4vh'}} className='iconfont icon-zhuxuejinshenqingchaxun'></p>
                            <p className='studyzhu'>助学金</p>
                        </Link>
                    </div> */}
                </div>
            </div>
        )
    }
}
