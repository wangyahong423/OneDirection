import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar,Carousel,List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class Scenery extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/school"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        校园风光
                </NavBar>
                <p style={{marginLeft:'2vw',marginBottom:'-1vh'}}>醉美校园</p>
                <Carousel
                    autoplay={true}
                    infinite
                    dots={false}
                    style={{width:'100vw',marginTop:'4vh',height:'auto'}}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: 'auto' }} >
                            <img src={`gonglve/fengguang${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' });}}/>
                        </a>
                    ))}
                </Carousel>
                <p style={{marginLeft:'2vw',marginBottom:'-1vh'}}>老校区回忆</p>
                <Carousel
                    autoplay={true}
                    infinite
                    dots={false}
                    style={{width:'100vw',marginTop:'4vh',height:'31vh'}}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: '31vh' }} >
                            <img src={`gonglve/ctdxy${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' });}}/>
                        </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
