import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List} from 'antd-mobile';
const Item = List.Item;
export default class Cet61 extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/cet46"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>六级资料</span>
                </NavBar>
                <img src={`share/fight.png`} style={{ width: '100%', height: '30vh' }} />
                <Link to="/bibeicihui">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>必备词汇</span></Item>
                </Link>
                <Link to="/gaopin">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-tieziguanli'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>高频词汇</span></Item>
                </Link>
                <Link to="/yuedu">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>阅读练习题</span></Item>
                </Link>
                <Link to="/shiwuxuanshi">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-tieziguanli'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>十五选十</span></Item>
                </Link>
                <Link to="/zuowen">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>六级作文</span></Item>
                </Link>
                

            </div>
        )
    }
}
