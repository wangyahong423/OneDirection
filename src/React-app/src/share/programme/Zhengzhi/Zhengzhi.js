import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List } from 'antd-mobile';
const Item = List.Item;
export default class Zhengzhi extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/programme"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>政治</span>
                </NavBar>
                <Link to="/zhengzhi1">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black', marginTop: '7vh', }}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2020年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi2">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2019年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi3">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2018年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi4">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2017年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi5">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2016年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi6">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2015年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi7">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2014年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi8">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2013年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi9">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2012年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/zhengzhi10">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '10vh' }}>2011年政治考研真题</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                
            </div>
        )
    }
}
