import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

export default class Kxyj extends Component {
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
                    科学研究
                </NavBar>
                <div>
                    <div className='orgBox'>
                        <div>
                            <List>
                                <Link to='/kxjypt' >
                                    <Item
                                        arrow="horizontal"
                                        onClick={() => { }}
                                        className='sortlist1' 
                                        style={{ borderBottom: '1px solid grey' }}
                                    >
                                        <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='../gonglve/terrace.jpg' />
                                        <span className='sortWord'>科学研究平台</span>
                                    </Item>
                                </Link>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/zrkx'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/tec.jpg' />
                                            <span className='sortWord'>自然科学与技术</span></Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/rwsk'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/human.jpg' />
                                            <span className='sortWord'>人文与社会科学</span></Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/hzjl'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/coo.jpg' />
                                            <span className='sortWord'>合作交流</span>

                                        </Item>
                                    </Link>
                                </div>
                                <div style={{ marginTop: 15 }}>
                                    <Link to='/xsqk'>
                                        <Item
                                            arrow="horizontal"
                                            onClick={() => { }}
                                            className='sortlist2'
                                            style={{ borderBottom: '1px solid grey' }}
                                        >
                                            <img style={{ height: '6vh', width: '12vw', borderRadius: 25 }} src='/../../gonglve/learn.jpg' />
                                            <span className='sortWord'>学术期刊</span>

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
