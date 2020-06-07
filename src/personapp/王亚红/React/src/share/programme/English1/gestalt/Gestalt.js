import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List } from 'antd-mobile';
const Item = List.Item;
export default class Gestalt extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/english1"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>完形填空</span>
                </NavBar>
                <Link to="/gestalt1">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black', marginTop: '7vh', }}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第一篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt2">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第二篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt3">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第三篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt4">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第四篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt5">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第五篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt6">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第六篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt7">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第七篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt8">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第八篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt9">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第九篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt10">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第十篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt11">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十一篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt12">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十二篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt13">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十三篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt14">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十四篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt15">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十五篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt16">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十六篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt17">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十七篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt18">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十八篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt19">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十九篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/gestalt20">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第二十篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>

            </div>
        )
    }
}
