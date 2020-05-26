import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';
export default class ChangeImg extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pic: '',
            isLoading: true,
            lvlist: []

        }
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/users/getName`;
        axios(url1)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })
        let url = `http://139.155.44.190:3005/users/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    lvlist: res.data
                })
                console.log(this.state.lvlist)
                this.state.lvlist.map((item) => {
                    if (item.name == this.state.name) {
                        this.setState({
                            level: item.level
                        })
                        this.setState({ isLoading: false });
                    }
                })
                console.log(this.state.level)
            })
    }
    imgChange = () => {
        let url = `http://139.155.44.190:3005/users/change?name=${this.state.name}&pic=${this.state.pic}`;
        axios(url)
            .then((res) => {
            })
    }

    selectImg = (e) => {
        this.setState({
            pic: e.target.src.substring(26)
        })
        if (e.target.style.border == '1px solid red') {
            e.target.style.border = '1px solid white';
        }
        else {
            e.target.style.border = '1px solid red';
        }

    }

    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: "100vw", top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/my"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>设置头像</span>
                </NavBar>
                <div style={{ marginTop: "10vh" }}>
                    {/* 等级一 */}
                    <img src='http://139.155.44.190:3005/images/56.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249)' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '10vh', left: '6vw', width:(this.state.level) < 2 ? '25vw' : 0, height: (this.state.level) < 2 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 2 ? '15vw' : 0, width:(this.state.level) < 2 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/2.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '10vh', left: '38vw', width:(this.state.level) < 2 ? '25vw' : 0, height: (this.state.level) < 2 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 2 ? '15vw' : 0, width:(this.state.level) < 2 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/3.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '10vh', left: '69vw', width:(this.state.level) < 2 ? '25vw' : 0, height: (this.state.level) < 2 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 2 ? '15vw' : 0, width:(this.state.level) < 2 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/4.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '25vh', left: '6vw', width:(this.state.level) < 2 ? '25vw' : 0, height: (this.state.level) < 2 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 2 ? '15vw' : 0, width:(this.state.level) < 2 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/5.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '25vh', left: '38vw', width:(this.state.level) < 2 ? '25vw' : 0, height: (this.state.level) < 2 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 2 ? '15vw' : 0, width:(this.state.level) < 2 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级二 */}
                    <img src='http://139.155.44.190:3005/images/6.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '44vw', left: '69vw', width:(this.state.level) < 3 ? '25vw' : 0, height: (this.state.level) < 3 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 3 ? '15vw' : 0, width:(this.state.level) < 3 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/7.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '70vw', left: '6vw', width:(this.state.level) < 3 ? '25vw' : 0, height: (this.state.level) < 3 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 3 ? '15vw' : 0, width:(this.state.level) < 3 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/8.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '39.5vh', left: '38vw', width:(this.state.level) < 3 ? '25vw' : 0, height: (this.state.level) < 3 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 3 ? '15vw' : 0, width:(this.state.level) < 3 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/9.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '39.5vh', left: '69vw', width:(this.state.level) < 3 ? '25vw' : 0, height: (this.state.level) < 3 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 3 ? '15vw' : 0, width:(this.state.level) < 3 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/10.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '54vh', left: '6vw', width:(this.state.level) < 3 ? '25vw' : 0, height: (this.state.level) < 3 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 3 ? '15vw' : 0, width:(this.state.level) < 3 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级三 */}
                    <img src='http://139.155.44.190:3005/images/11.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '54.2vh', left: '37.6vw', width:(this.state.level) < 4 ? '25vw' : 0, height: (this.state.level) < 4 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 4 ? '15vw' : 0, width:(this.state.level) < 4 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/12.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '54.2vh', left: '69vw', width:(this.state.level) < 4 ? '25vw' : 0, height: (this.state.level) < 4 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 4 ? '15vw' : 0, width:(this.state.level) < 4 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/13.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '68.9vh', left: '6vw', width:(this.state.level) < 4 ? '25vw' : 0, height: (this.state.level) < 4 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 4 ? '15vw' : 0, width:(this.state.level) < 4 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/14.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '68.9vh', left: '37.7vw', width:(this.state.level) < 4 ? '25vw' : 0, height: (this.state.level) < 4 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 4 ? '15vw' : 0, width:(this.state.level) < 4 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/15.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '68.9vh', left: '69vw', width:(this.state.level) < 4 ? '25vw' : 0, height: (this.state.level) < 4 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 4 ? '15vw' : 0, width:(this.state.level) < 4 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级四 */}
                    <img src='http://139.155.44.190:3005/images/16.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249)' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '83.5vh', left: '6vw', width:(this.state.level) < 5 ? '25vw' : 0, height: (this.state.level) < 5 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 5 ? '15vw' : 0, width:(this.state.level) < 5 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/17.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '83.5vh', left: '38vw', width:(this.state.level) < 5 ? '25vw' : 0, height: (this.state.level) < 5 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 5 ? '15vw' : 0, width:(this.state.level) < 5 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/18.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '83.5vh', left: '69vw', width:(this.state.level) < 5 ? '25vw' : 0, height: (this.state.level) < 5 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 5 ? '15vw' : 0, width:(this.state.level) < 5 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/19.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '98.5vh', left: '6vw', width:(this.state.level) < 5 ? '25vw' : 0, height: (this.state.level) < 5 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 5 ? '15vw' : 0, width:(this.state.level) < 5 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/20.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '98.5vh', left: '38vw', width:(this.state.level) < 5 ? '25vw' : 0, height: (this.state.level) < 5 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 5 ? '15vw' : 0, width:(this.state.level) < 5 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级五 */}
                    <img src='http://139.155.44.190:3005/images/21.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '98.5vh', left: '69vw', width:(this.state.level) < 6 ? '25vw' : 0, height: (this.state.level) < 6 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 6 ? '15vw' : 0, width:(this.state.level) < 6 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/22.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '113.5vh', left: '6vw', width:(this.state.level) < 6 ? '25vw' : 0, height: (this.state.level) < 6 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 6 ? '15vw' : 0, width:(this.state.level) < 6 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/23.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '113.5vh', left: '38vw', width:(this.state.level) < 6 ? '25vw' : 0, height: (this.state.level) < 6 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 6 ? '15vw' : 0, width:(this.state.level) < 6 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/24.jpg' style={{ width: "25vw",marginTop:'1vw', height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '113.5vh', left: '69vw', width:(this.state.level) < 6 ? '25vw' : 0, height: (this.state.level) < 6 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 6 ? '15vw' : 0, width:(this.state.level) < 6 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/25.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '128.5vh', left: '6vw', width:(this.state.level) < 6 ? '25vw' : 0, height: (this.state.level) < 6 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 6 ? '15vw' : 0, width:(this.state.level) < 6 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级六 */}
                    <img src='http://139.155.44.190:3005/images/26.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '128.5vh', left: '38vw', width:(this.state.level) < 7 ? '25vw' : 0, height: (this.state.level) < 7 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 7 ? '15vw' : 0, width:(this.state.level) < 7 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/27.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '128.5vh', left: '69vw', width:(this.state.level) < 7 ? '25vw' : 0, height: (this.state.level) < 7 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 7 ? '15vw' : 0, width:(this.state.level) < 7 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/28.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '143.4vh', left: '6vw', width:(this.state.level) < 7 ? '25vw' : 0, height: (this.state.level) < 7 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 7 ? '15vw' : 0, width:(this.state.level) < 7 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/29.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '143.4vh', left: '38vw', width:(this.state.level) < 7 ? '25vw' : 0, height: (this.state.level) < 7 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 7 ? '15vw' : 0, width:(this.state.level) < 7 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/30.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '143.4vh', left: '69vw', width:(this.state.level) < 7 ? '25vw' : 0, height: (this.state.level) < 7 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 7 ? '15vw' : 0, width:(this.state.level) < 7 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级七 */}
                    <img src='http://139.155.44.190:3005/images/31.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249)' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '158vh', left: '6vw', width:(this.state.level) < 8 ? '25vw' : 0, height: (this.state.level) < 8 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 8 ? '15vw' : 0, width:(this.state.level) < 8 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/32.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '158vh', left: '38vw', width:(this.state.level) < 8 ? '25vw' : 0, height: (this.state.level) < 8 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 8 ? '15vw' : 0, width:(this.state.level) < 8 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/33.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '158vh', left: '69vw', width:(this.state.level) < 8 ? '25vw' : 0, height: (this.state.level) < 8 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 8 ? '15vw' : 0, width:(this.state.level) < 8 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/34.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '173vh', left: '6vw', width:(this.state.level) < 8 ? '25vw' : 0, height: (this.state.level) < 8 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 8 ? '15vw' : 0, width:(this.state.level) < 8 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/35.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '173vh', left: '38vw', width:(this.state.level) < 8 ? '25vw' : 0, height: (this.state.level) < 8 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 8 ? '15vw' : 0, width:(this.state.level) < 8 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    
                    {/* 等级八 */}
                    <img src='http://139.155.44.190:3005/images/36.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '173vh', left: '69vw', width:(this.state.level) < 8 ? '25vw' : 0, height: (this.state.level) < 8 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 8 ? '15vw' : 0, width:(this.state.level) < 8 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/37.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '188vh', left: '6vw', width:(this.state.level) < 9 ? '25vw' : 0, height: (this.state.level) < 9 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 9 ? '15vw' : 0, width:(this.state.level) < 9 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/38.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '188vh', left: '38vw', width:(this.state.level) < 9 ? '25vw' : 0, height: (this.state.level) < 9 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 9 ? '15vw' : 0, width:(this.state.level) < 9 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/39.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '188vh', left: '69vw', width:(this.state.level) < 9 ? '25vw' : 0, height: (this.state.level) < 9 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 9 ? '15vw' : 0, width:(this.state.level) < 9 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/40.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '203vh', left: '6vw', width:(this.state.level) < 9 ? '25vw' : 0, height: (this.state.level) < 9 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 9 ? '15vw' : 0, width:(this.state.level) < 9 ? '15vw' : 0, marginTop: '5vw' }}></img></div>

                    {/* 等级九 */}
                    <img src='http://139.155.44.190:3005/images/41.jpg' style={{ width: "25vw", height: "25vw",marginTop:'3vw', marginLeft: "6.2vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '203vh', left: '38vw', width:(this.state.level) < 10 ? '25vw' : 0, height: (this.state.level) < 10 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 10 ? '15vw' : 0, width:(this.state.level) < 10 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/42.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '203.2vh', left: '69.5vw', width:(this.state.level) < 10 ? '25vw' : 0, height: (this.state.level) < 10 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 10 ? '15vw' : 0, width:(this.state.level) < 10 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/43.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '217.8vh', left: '6vw', width:(this.state.level) < 10 ? '25vw' : 0, height: (this.state.level) < 10 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 10 ? '15vw' : 0, width:(this.state.level) < 10 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/44.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '217.8vh', left: '37.8vw', width:(this.state.level) < 10 ? '25vw' : 0, height: (this.state.level) < 10 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 10 ? '15vw' : 0, width:(this.state.level) < 10 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/45.jpeg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '217.8vh', left: '69vw', width:(this.state.level) < 10 ? '25vw' : 0, height: (this.state.level) < 10 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 10 ? '15vw' : 0, width:(this.state.level) < 10 ? '15vw' : 0, marginTop: '5vw' }}></img></div>

                    {/* 等级十 */}
                    <img src='http://139.155.44.190:3005/images/46.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid rgb(245,245,249)' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '232.5vh', left: '6vw', width:(this.state.level) < 11 ? '25vw' : 0, height: (this.state.level) < 11 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 11 ? '15vw' : 0, width:(this.state.level) < 11 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/47.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '232.5vh', left: '37.9vw', width:(this.state.level) < 11 ? '25vw' : 0, height: (this.state.level) < 11 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 11 ? '15vw' : 0, width:(this.state.level) < 11 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/48.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '232.5vh', left: '69vw', width:(this.state.level) < 11 ? '25vw' : 0, height: (this.state.level) < 11 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 11 ? '15vw' : 0, width:(this.state.level) < 11 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/49.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '247.1vh', left: '6vw', width:(this.state.level) < 11 ? '25vw' : 0, height: (this.state.level) < 11 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 11 ? '15vw' : 0, width:(this.state.level) < 11 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/50.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '247.1vh', left: '37.9vw', width:(this.state.level) < 11 ? '25vw' : 0, height: (this.state.level) < 11 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 11 ? '15vw' : 0, width:(this.state.level) < 11 ? '15vw' : 0, marginTop: '5vw' }}></img></div>

                    {/* 等级十一 */}
                    <img src='http://139.155.44.190:3005/images/51.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '247.1vh', left: '69vw', width:(this.state.level) < 12 ? '25vw' : 0, height: (this.state.level) < 12 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 12 ? '15vw' : 0, width:(this.state.level) < 12 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/52.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '262vh', left: '6vw', width:(this.state.level) < 12 ? '25vw' : 0, height: (this.state.level) < 12 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 12 ? '15vw' : 0, width:(this.state.level) < 12 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/53.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '262vh', left: '37.8vw', width:(this.state.level) < 12 ? '25vw' : 0, height: (this.state.level) < 12 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 12 ? '15vw' : 0, width:(this.state.level) < 12 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/54.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <div style={{ position: 'absolute', top: '262vh', left: '69vw', width:(this.state.level) < 12 ? '25vw' : 0, height: (this.state.level) < 12 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 12 ? '15vw' : 0, width:(this.state.level) < 12 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                    <img src='http://139.155.44.190:3005/images/55.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw", border: '1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />                </div>
                    <div style={{ position: 'absolute', top: '276.7vh', left: '6vw', width:(this.state.level) < 12 ? '25vw' : 0, height: (this.state.level) < 12 ? '25vw' : 0, backgroundColor: 'grey', textAlign: 'center' }}><img src={`my/clock.png`} style={{ height: (this.state.level) < 12 ? '15vw' : 0, width:(this.state.level) < 12 ? '15vw' : 0, marginTop: '5vw' }}></img></div>
                <Link to='/my'>
                    <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }} >
                        <button style={{ width: '40%', height: 40 }} onClick={this.imgChange}>确定</button>
                    </div>
                </Link>
            </div>
        )
    }
}
