import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class Rcpy extends Component {
    state = {
        value: '',
    };
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/school"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    人才培养
                </NavBar>
                <div>
                    <div className='orgBox'>
                        <div>
                            <List>
                                <Link to='/szdw' >
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist1' 
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='../gonglve/shiziduiwu.jpg' />
                                        <span className='sortWord'>师资队伍</span>
                                    </Item>
                                </Link>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/bks'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/benkesheng.jpeg' />
                                            <span className='sortWord'>本科生教育</span></Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/yjs'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/yanjiusheng.png' />
                                            <span className='sortWord'>研究生教育</span></Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/jxjy'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/jixujiaoyu.jpg' />
                                            <span className='sortWord'>继续教育</span>

                                        </Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/lxs'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/liuxuejiaoyu.jpg' />
                                            <span className='sortWord'>留学生教育</span>

                                        </Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/zwhz'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/zhongwaihezuo.jpg' />
                                            <span className='sortWord'>中外合作办学</span>

                                        </Item>
                                    </Link>
                                </div>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
