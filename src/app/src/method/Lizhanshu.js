import { NavBar, SearchBar, Flex } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default class Lizhanshu extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/alumnus"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    栗战书
                </NavBar>
                <div className='lizhanshu' >
                    <img style={{height:'20vh',width:'30vw',marginLeft:'35%',marginTop:'30%'}} src='gonglve/栗战书.jpg'></img>
                    <p style={{color:'white',textAlign:'center',fontSize:'18px'}}>【栗/战/书】</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>栗战书，男，汉族，1950年8月生，河北平山人，1972年12月参加工作。1975年4月加入中国共产党。河北师范大学夜大学政教系毕业，在职大学学历，高级工商管理硕士学位。</p>
                    <p style={{width:'70vw',color:'white',textAlign:'left',marginLeft:'15vw',lineHeight:'3vh'}}>现任中共十九届中央政治局常委，十三届全国人大常委会委员长、党组书记</p>
                    <hr style={{width:'80vw',textAlign:'center'}} />
                </div>
            </div>
                    )
                }
            }
