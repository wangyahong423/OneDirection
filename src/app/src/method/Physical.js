import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Flex, WhiteSpace, List,SearchBar } from 'antd-mobile';
import '../App.css';
// import { } from 'antd-mobile';
// import {} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
// import { Flex, WhiteSpace } from 'antd-mobile';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
        <div className='schoolBox1' >
            <div className='schoolxueshenghui' ></div>
            <span style={{color:'#000'}}>校学生会</span>
        </div>
  </div>
);

export default class Physical extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/organization"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        体育健身类
                </NavBar> 
                <div>
                    <div>
                        <SearchBar placeholder="Search" maxLength={8} />
                    </div>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='taiquandao' ></div>
                                <span style={{color:'#000'}}>乐道跆拳道歇会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='pingpangqiu' ></div>
                                <span style={{color:'#000'}}>爱乒协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yangguangyundong' ></div>
                                <span style={{color:'#000'}}>阳光运动协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='yumaoqiu' ></div>
                                <span style={{color:'#000'}}>翔羽羽毛球协会</span>
                            </div>
                        </div>
                    </Flex>
                    <Flex style={{marginBottom:'5vh'}}>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='zixingche' ></div>
                                <span style={{color:'#000'}}>自行车协会</span>
                            </div>
                        </div>
                        <div className='placeholder'>
                            <div className='schoolBox1' >
                                <div className='piaoyiban' ></div>
                                <span style={{color:'#000'}}>漂移板</span>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
