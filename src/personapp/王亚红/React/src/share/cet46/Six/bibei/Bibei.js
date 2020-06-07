import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';

export default class Bibei extends Component {
    constructor() {
        super();
        this.state = {
            tits: [],
            page: 1,
            // isloading: false
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/highcet6/list`;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    tits: res
                });
            })

    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/liuji"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>六级必备词汇</span>
                </NavBar>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#565656', color: '#fff', position: 'fixed ', top: '20', zIndex: 1, height: '4vh' }}
                    leftContent={[
                        <span style={{ fontSize: '17px', color: 'white' }} ></span>
                    ]}
                >
                    <span style={{}}>单词</span>
                    <span style={{marginLeft:'15vh'}}>翻译</span>
                    <span style={{marginLeft:'14vh'}}>词性</span>
                </NavBar>
                <div style={{marginTop:'7vh'}}>
                    {
                        this.state.tits.map((item) => (
                            <div style={{ marginTop: 10 ,fontSize:'17px'}}>
                                <div style={{float:'left',width:'15vh',height:'2vh',marginLeft:'5vh'}}>{item.english}</div>
                                <div style={{float:'left',width:'25vh',height:'2vh'}}>{item.chinese}</div>
                                <div style={{marginLeft:'10vh'}}>{item.nature}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
