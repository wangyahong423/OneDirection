import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button, List} from 'antd-mobile';
const Item = List.Item;
export default class Math2 extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '20', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/programme"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>数学二</span>
                </NavBar>
                <img src={`share/fight.png`} style={{ width: '100%', height: '30vh' }} />
                <Link to="/xz">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>选择题</span></Item>
                </Link>
                <Link to="/tk">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-tieziguanli'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>填空题</span></Item>
                </Link>
                <Link to="/jd">
                    <Item
                        arrow="horizontal"
                        onClick={() => { }}
                        className='iconfont icon-collection'
                        style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                    ><span style={{ marginLeft: '40px', fontSize: '20px' }}>解答题</span></Item>
                </Link>
                
                

            </div>
        )
    }
}
