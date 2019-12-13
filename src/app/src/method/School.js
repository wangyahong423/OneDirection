import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar,Carousel,List} from 'antd-mobile';
import '../App.css';
const Item = List.Item;
const Brief = Item.Brief;


export default class School extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/login"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        学校
                </NavBar> 
                <Carousel
                    autoplay={true}
                    infinite
                    dots={false}
                    style={{width:'90vw',marginLeft:'5vw',marginTop:'4vh'}}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1,2,3,4].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: '30vh' }} >
                            <img src={`gonglve/method${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' });}}/>
                        </a>
                    ))}
                </Carousel>
                <div style={{height:'auto',width:'100vw'}}>
                    <Link to='/synopsis'>
                        <div className='schoolbox1' >
                            <p style={{color:'#fff',lineHeight:'6vh',marginLeft:'4vw'}}>学校简介</p>
                        </div>
                    </Link>
                    <Link to='/subject'>
                        <div className='schoolbox2'>
                            <p style={{color:'#fff',lineHeight:'6vh',marginLeft:'4vw'}}>学科专业</p>
                        </div>
                    </Link>
                    <Link to='/schoollogo'>
                        <div className='schoolbox2'>
                            <p style={{color:'#fff',lineHeight:'6vh',marginLeft:'4vw'}}>学校标志</p>
                        </div>
                    </Link>
                    <Link to='/scenery'>
                        <div className='schoolbox2'>
                            <p style={{color:'#fff',lineHeight:'6vh',marginLeft:'4vw'}}>校园风光</p>
                        </div>
                    </Link>
                    <Link to='/map'>
                        <div className='schoolbox2'>
                            <p style={{color:'#fff',lineHeight:'6vh',marginLeft:'4vw'}}>校园地图</p>
                        </div>
                    </Link>
                    <Link to='/govern'>
                        <div className='schoolbox2'>
                            <p style={{color:'#fff',lineHeight:'6vh',marginLeft:'4vw'}}>治理架构</p>
                        </div>
                    </Link>
                </div>
                
            </div>
        )
    }
}
