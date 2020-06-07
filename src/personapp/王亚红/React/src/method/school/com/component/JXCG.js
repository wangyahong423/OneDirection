import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class JXCG extends Component {

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
                        <Link to="/bks"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    教学名师
                </NavBar>
                <div style={{ backgroundColor: 'white', height: '5vh', fontSize: 13,
                     fontWeight: 500, lineHeight: '3vh' ,textAlign:"center"}}>
                    <span style={{ marginLeft: '2vw', color: '#fce968', fontSize: 18 }}>国家级教学成果奖</span>
                </div>
                <div style={{ height: '30vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                </div>
                <div style={{ backgroundColor: 'white', height: '5vh', fontSize: 13,
                     fontWeight: 500, lineHeight: '3vh' ,textAlign:"center"}}>
                    <span style={{ marginLeft: '2vw', color: '#fce968', fontSize: 18 }}>省级教学成果奖</span>
                </div>
                <div style={{ height: '30vh', width: '94vw', marginLeft: '3vw', lineHeight: '2.5vh' }}>
                    <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh', lineHeight: '3vh' }}>
                    </li>
                </div>
            </div>
        )
    }
}
