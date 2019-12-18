import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Tabs } from 'antd-mobile';
import { Map } from 'react-amap';
import MyLocation from '../method/MyLocation';
import '../App.css';

export default class SchoolMap extends Component {
    constructor() {
        super();
        this.state = {
            center: { longitude: 114.517366, latitude: 37.994022 },
            school: ''
        }
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    change = (e) => {
        this.setState({
            school: this.autoFocusInst.value
        })
    }
    keydown = (e) => {
        if (e.target.value && e.keyCode === 13) {
            this.click()
        }
    }
    click = (e) => {
        let address = this.state.school;
        fetch('https://restapi.amap.com/v3/geocode/geo?key=bfac02e9509fdd41a723a3f26d363663&address=' + address)
            .then((res) => {
                if (res.ok) {
                    res.json().then(data => {
                        if (data.status == 1) {
                            data = data.geocodes[0].location.split(',');
                            this.setState({
                                center: {
                                    longitude: Number(data[0]),
                                    latitude: Number(data[1]),
                                }
                            })
                        }
                    })
                }
            });
    }
    render() {
        const plugins = [
            'MapType',
            'Scale',
            'OverView',
            'ControlBar',
            {
                name: 'ToolBar',
                options: {
                    visible: true,
                    onCreated(ins) {
                    },
                },
            }
        ]
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/school"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    校园地图
                </NavBar>
                <div className='qin_back'>
                    <input placeholder='&nbsp;河北师范大学' ref={ref => this.autoFocusInst = ref} onChange={this.change} onKeyDown={this.keydown} />
                    <div className='iconfont icon-search' id='qin_MapSearch' onClick={this.click}></div>
                </div>

                <div style={{ height: '53vh' }}>
                    <Tabs tabs={[{ title: '我的位置' }, { title: '校内精确地点' }]} initialPage={0} animated={false} useOnPan={false}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vw', backgroundColor: '#fff' }}>
                            <MyLocation />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90vw', backgroundColor: '#fff' }}>
                            <Map
                                scrollWheel={true}
                                plugins={plugins}
                                zoom={17}
                                scrollWheel={true}
                                mapStyle={'normal'}
                                center={this.state.center}
                                viewMode={'3D'}
                                amapkey={'bfac02e9509fdd41a723a3f26d363663'}
                            />
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}
