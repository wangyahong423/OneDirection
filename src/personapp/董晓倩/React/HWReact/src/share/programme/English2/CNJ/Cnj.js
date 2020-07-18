import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List } from 'antd-mobile';
const Item = List.Item;
export default class Cnj extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/english2"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>翻译</span>
                </NavBar>
                <Link to="/cnj1">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black', marginTop: '7vh', }}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第一篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj2">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第二篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj3">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第三篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj4">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第四篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj5">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第五篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj6">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第六篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj7">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第七篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj8">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第八篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj9">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第九篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj10">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '19vh' }}>第十篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj11">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十一篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj12">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十二篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj13">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十三篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj14">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十四篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj15">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十五篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj16">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十六篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj17">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十七篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj18">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十八篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj19">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第十九篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>
                <Link to="/cnj20">
                    <Item

                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '40px', color: 'black',}}
                    ><span style={{ fontSize: '20px', marginLeft: '17vh' }}>第二十篇</span>
                        <span className='iconfont icon-collection' style={{ marginLeft: '5vh' }}></span></Item>
                </Link>

            </div>
        )
    }
}
