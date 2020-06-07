import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../App.css'
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class Organization extends Component {
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
                        <Link to="/login"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    社团组织
                </NavBar>
                <div>
                    <div className='orgBox'>
                        <p className='ten'>十佳社团</p>
                        <Carousel
                            autoplay={true}
                            infinite
                            dots={false}
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                <a key={val} style={{ display: 'inline-block', width: '100vw', height: '34vh' }} >
                                    <img src={`gonglve/gonglve${val}.jpg`} alt="" style={{ width: '100vw', verticalAlign: 'top' }} onLoad={() => { window.dispatchEvent(new Event('resize')); this.setState({ imgHeight: 'auto' }); }} />
                                </a>
                            ))}
                        </Carousel>
                        <div>
                            <p className='sort'>分类排行</p>
                        </div>
                        <div>
                            <List>
                                <Link to='/schoolorg' >
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist1'
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw' }} src='/gonglve/zuzhi.jpg' />
                                        <span className='sortWord'>校级组织类</span>
                                    </Item>
                                </Link>
                                <Link to='/practice'>
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist2'
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw' }} src='/gonglve/shijian.jpg' />
                                        <span className='sortWord'>实践服务类</span></Item>
                                </Link>
                                <Link to='/physical'>
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist2'
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw' }} src='/gonglve/tiyu.jpg' />
                                        <span className='sortWord'>体育健身类</span></Item>
                                </Link>
                                <Link to='/academic'>
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist2'
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw' }} src='/gonglve/xueshu.jpg' />
                                        <span className='sortWord'>学术研究类</span>

                                    </Item>
                                </Link>
                                <Link to='/art'>
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist2'
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw' }} src='/gonglve/wenhua.jpg' />
                                        <span className='sortWord'>文化艺术类</span></Item>
                                </Link>
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
