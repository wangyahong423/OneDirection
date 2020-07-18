import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Carousel } from 'antd-mobile';
import '../../../../App.css';
import { SearchBar } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;


export default class JXMS extends Component {

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
                <div style={{ marginTop: '3vh' }}>
                    <div style={{ backgroundColor: 'green', height: '3.5vh', marginTop: '2vh', fontSize: 13, fontWeight: 800, borderRadius: 20 ,lineHeight:'3vh'}}>
                        <span style={{ marginLeft: '2vw', color: 'white' }}>国家级教学名师</span>
                    </div>
                    <div style={{ height: '3vh', width: '94vw', marginLeft: '3vw' ,lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;路&nbsp;&nbsp;紫
                        </li>
                    </div>
                </div>
                <div style={{ marginTop: '3vh' }}>
                    <div style={{ backgroundColor: 'green', height: '3.5vh', marginTop: '2vh', fontSize: 13, fontWeight: 800, borderRadius: 20 ,lineHeight:'3vh'}}>
                        <span style={{ marginLeft: '2vw', color: 'white' }}>国家"万人计划”教学名师</span>
                    </div>
                    <div style={{ height: '3vh', width: '94vw', marginLeft: '3vw' ,lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段相林
                        </li>
                    </div>
                </div>
                <div style={{ marginTop: '3vh' }}>
                    <div style={{ backgroundColor: 'green', height: '3.5vh', marginTop: '2vh', fontSize: 13, fontWeight: 800, borderRadius: 20 ,lineHeight:'3vh'}}>
                        <span style={{ marginLeft: '2vw', color: 'white' }}>河北省高等学校教学名师</span>
                    </div>
                    <div style={{ height: '3vh', width: '94vw', marginLeft: '3vw' ,lineHeight:'2.5vh'}}>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;段相林&nbsp;&nbsp;&nbsp;&nbsp;路&nbsp;&nbsp;紫&nbsp;&nbsp;&nbsp;&nbsp;戴建兵&nbsp;&nbsp;&nbsp;&nbsp;鲁忠义&nbsp;&nbsp;&nbsp;&nbsp;李正栓&nbsp;&nbsp;&nbsp;&nbsp;葛京凤
                        </li>
                        <li style={{ fontSize: 12, listStyle: 'none', marginTop: '1vh',lineHeight:'3vh'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刘敬泽&nbsp;&nbsp;&nbsp;&nbsp;邢&nbsp;&nbsp;铁&nbsp;&nbsp;&nbsp;&nbsp;王彦英&nbsp;&nbsp;&nbsp;&nbsp;张军海&nbsp;&nbsp;&nbsp;&nbsp;赵小兰&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}
