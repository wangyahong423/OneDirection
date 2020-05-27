import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List} from 'antd-mobile';
const Item = List.Item;
export default class English1 extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/programme"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>英语一</span>
                </NavBar>
                <img src={`share/fight.png`} style={{ width: '100%', height: '30vh' }} />
                <Link to="/gestalt">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>完形填空</span></Item>
                </Link>
                <Link to="/read">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-tieziguanli'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>阅读理解</span></Item>
                </Link>
                <Link to="/translate">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>翻译</span></Item>
                </Link>
                
                

            </div>
        )
    }
}
