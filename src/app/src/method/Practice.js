import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar, Flex,List,SearchBar } from 'antd-mobile';
import '../App.css';
const Item = List.Item;
const Brief = Item.Brief;

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
        <div className='schoolBox1' >
            <div className='schoolxueshenghui' ></div>
            <span style={{color:'#000'}}>校学生会</span>
        </div>
  </div>
);

export default class Practice extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/organization"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        实践服务类
                </NavBar> 
                <div>
                <div  style={{height:'3vh',width:'100vw'}}></div>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yanyang' ></div>
                                <span style={{color:'#000'}}>晏阳初三农学社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='tianshi' ></div>
                                <span style={{color:'#000'}}>天使爱心社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yanjing' ></div>
                                <span style={{color:'#000'}}>眼镜服务中心</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='qingchun' ></div>
                                <span style={{color:'#000'}}>青春之歌导游队</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='chunyu' ></div>
                                <span style={{color:'#000'}}>春雨爱心社</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='ziqiang' ></div>
                                <span style={{color:'#000'}}>自强社</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='lvhang' ></div>
                                <span style={{color:'#000'}}>绿航环保协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='aixin' ></div>
                                <span style={{color:'#000'}}>爱心365</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='lvse' ></div>
                                <span style={{color:'#000'}}>绿色方舟环保协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zhonghua' ></div>
                                <span style={{color:'#000'}}>中华风民俗文化社</span>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
