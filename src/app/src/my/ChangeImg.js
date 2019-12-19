import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';
export default class ChangeImg extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pic: '',
            
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
        if(e.target.style.border == '1px solid red'){
            e.target.style.border = '1px solid white';
        }
        else{
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
                    <img src='http://139.155.44.190:3005/images/1.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid rgb(245,245,249)'}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/2.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid rgb(245,245,249) '}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/3.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />

                    <img src='http://139.155.44.190:3005/images/4.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/5.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/6.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />

                    <img src='http://139.155.44.190:3005/images/7.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/8.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/9.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />

                    <img src='http://139.155.44.190:3005/images/10.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/11.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw",border:'1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/12.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw" ,border:'1px solid  rgb(245,245,249) '}} onClick={this.selectImg} />

                    <img src='http://139.155.44.190:3005/images/12.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw",border:'1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/13.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw",border:'1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                    <img src='http://139.155.44.190:3005/images/14.jpg' style={{ width: "25vw", height: "25vw", marginLeft: "6vw",border:'1px solid  rgb(245,245,249) ' }} onClick={this.selectImg} />
                </div>
                <Link to='/my'>
                    <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }} >
                        <button style={{ width: '40%', height: 40 }} onClick={this.imgChange}>确定</button>
                    </div>
                </Link>
            </div>
        )
    }
}
