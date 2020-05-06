import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
import { NavBar, Icon,Tabs,Carousel,Accordion, List} from 'antd-mobile';

export default class Map extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'sticky ',top:'0',zIndex:10,textAlign:'center',height:'7vh'}}
                    leftContent={[
                        <Link to="/school"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        校园地图
                </NavBar>
                <div>
                    <img style={{height:'auto',width:'100vw'}} src='gonglve/map.jpg'></img>
                </div>
            </div>
        )
    }
}
