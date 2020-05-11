import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';

export default class Cet46 extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>四六级资料</span>
                </NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    dots={false}
                >
                    {[1, 2, 3, 4].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: '30vh' }} >
                            <img src={`share/four${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' }); }} />
                        </a>
                    ))}
                </Carousel>
                <Link to='/siji'>
                    <div style={{ width: '55vw', height: '18vh', border: '2px solid #37376F', marginTop: '5vh', borderRadius: 20, marginLeft: '13vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '10vh', fontSize: '20px', marginTop: '7vh',color:'black'}}>四级资料</div>
                    </div>
                </Link>
                <Link to='/liuji'>
                    <div style={{ width: '55vw', height: '18vh', border: '2px solid #37376F', marginTop: '5vh', borderRadius: 20, marginLeft: '13vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '10vh', fontSize: '20px', marginTop: '7vh',color:'black' }}>六级资料</div>
                    </div>
                </Link>

            </div>
        )
    }
}
