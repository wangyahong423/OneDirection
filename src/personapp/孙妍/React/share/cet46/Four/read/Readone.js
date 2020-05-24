import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List } from 'antd-mobile';
const Item = List.Item;
export default class Readone extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/siji"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>阅读理解</span>
                </NavBar>
                <Link to="/sijireadyi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black', marginTop: '7vh', }}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第一篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireader">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第二篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadsan">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第三篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadsi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第四篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadwu">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第五篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadliu">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第六篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadqi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第七篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadba">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第八篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadjiu">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第九篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第十篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshiyi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十一篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshier">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十二篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshisan">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十三篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshisi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十四篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshiwu">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十五篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshiliu">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十六篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshiqi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十七篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshiba">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十八篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadshijiu">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十九篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/sijireadershi">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第二十篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>

            </div>
        )
    }
}
