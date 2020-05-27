import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';

export default class Programme extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>考研资料</span>
                </NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    dots={false}
                >
                    {[1, 2, 3, 4].map(val => (
                        <a key={val} style={{ display: 'inline-block', width: '100vw', height: '30vh' }} >
                            <img src={`share/kaoyan${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' }); }} />
                        </a>
                    ))}
                </Carousel>
                <Link to='/math1'>
                    <div style={{ width: '50vw', height: '8vh', border: '2px solid #37376F', marginTop: '3vh', borderRadius: 20, marginLeft: '14vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '10vh', fontSize: '20px', marginTop: '3vh',color:'black'}}>数学一</div>
                    </div>
                </Link>
                <Link to='/math2'>
                    <div style={{ width: '50vw', height: '8vh', border: '2px solid #37376F', marginTop: '3vh', borderRadius: 20, marginLeft: '14vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '10vh', fontSize: '20px', marginTop: '3vh',color:'black'}}>数学二</div>
                    </div>
                </Link>
                <Link to='/english1'>
                    <div style={{ width: '50vw', height: '8vh', border: '2px solid #37376F', marginTop: '3vh', borderRadius: 20, marginLeft: '14vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '10vh', fontSize: '20px', marginTop: '3vh',color:'black'}}>英语一</div>
                    </div>
                </Link>
                <Link to='/english2'>
                    <div style={{ width: '50vw', height: '8vh', border: '2px solid #37376F', marginTop: '3vh', borderRadius: 20, marginLeft: '14vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '10vh', fontSize: '20px', marginTop: '3vh',color:'black'}}>英语二</div>
                    </div>
                </Link>
                <Link to='/zhengzhi'>
                    <div style={{ width: '50vw', height: '8vh', border: '2px solid #37376F', marginTop: '3vh', borderRadius: 20, marginLeft: '14vh' }}>
                        <div style={{ width: '12vh', height: '10vh', marginLeft: '11vh', fontSize: '20px', marginTop: '3vh',color:'black'}}>政治</div>
                    </div>
                </Link>

            </div>
        )
    }
}
