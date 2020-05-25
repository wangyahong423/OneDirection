import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import ReactDOM from 'react-dom'
export default class Selectfive17 extends Component {
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/fourselectfive"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>第十七篇</span>
                </NavBar>
                <div style={{ marginTop: '8vh' }}>
                    <p style={{ fontSize: '16px' }}>&nbsp;&nbsp;&nbsp;&nbsp;Dear Han Dong,</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;I am a sophomore and I'm taking the CET-4 forthe second time. It has cost lots of money and timeto prepare for the exam. Meanwhile, my schedule isgetting tighter, for I have to take much more classesthan before. So I really want to make things workthis time. That's why I'm writing to you for help.</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;My biggest headache is the listening part, whose proportion becomes even more after theCET exam reform. Moreover, my vocabulary is poor, too. I'm wondering if there is any short-cut to memorize words more quickly in shorter time. I also want to know in what degree a CETtraining class can help. Finally, I need you recommend some better books to me.</p>
                    <p style={{ fontSize: '16px', marginTop: '-1.5vh' }}>&nbsp;&nbsp;&nbsp;&nbsp;I'm gratefully looking forward to your reply.</p>
                    <p style={{ fontSize: '18px',marginLeft:'34vh',marginTop: '-1.5vh' }}>Sincerely yours,</p>
                    <p style={{ fontSize: '16px', marginLeft:'40vh',marginTop: '-1.5vh' }}>Li Qiang</p>
                    
                </div>
                
            </div>
        )
    }
}
