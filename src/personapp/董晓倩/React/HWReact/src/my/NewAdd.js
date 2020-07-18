import { NavBar, SearchBar, ActionSheet, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List } from 'antd-mobile';
const Item = List.Item;

export default class NewAdd extends Component {
    constructor() {
        super();
        this.state = {
            lnum: 0,
            enum: 0
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/users/getName`;
        axios(url)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
            })
        let url1 = `http://139.155.44.190:3005/follow/list`;
        axios(url1)
            .then((res) => {
                var learn = [];
                var experience = [];
                var num1 = 0;
                var num2 = 0;
                res.data.forEach((item) => {
                    if (item.lname == this.state.username) {
                        if (item.learn != null && item.learn != "") {
                            var a = item.learn.split(",");
                            num1 = num1 + a.length;
                            for (var i = 0; i < a.length; i++) {
                                learn.push(a[i]);
                            }
                            console.log('learn:', learn);
                        }
                        if (item.experience != null && item.experience != "") {
                            var b = item.experience.split(",");
                            num2 = num2 + b.length;
                            for (var i = 0; i < b.length; i++) {
                                experience.push(b[i]);
                            }
                            console.log('experience:', experience);
                        }
                    }
                })
                this.setState({
                    lnum: num1,
                    enum: num2
                })
                console.log('lnum:', this.state.lnum);
                console.log('enum:', this.state.enum);
            })
    }
    render() {
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/My"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    我关注的人新发的帖子
                </NavBar>
                <List>
                    <Link to="/newl">
                        <Item
                            arrow="horizontal"
                            onClick={() => { }}
                            style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                        >
                            <span style={{ marginLeft: '10px', fontSize: '20px' }}>社区</span>
                            <span style={{float:'right'}}>{this.state.lnum}</span>
                        </Item>
                    </Link>
                    <Link to="/newe">
                        <Item
                            arrow="horizontal"
                            onClick={() => { }}
                            style={{ paddingLeft: '20px', borderBottom: '1px solid grey', height: '60px', color: 'black' }}
                        >
                            <span style={{ marginLeft: '10px', fontSize: '20px' }}>经验分享</span>
                            <span style={{float:'right'}}>{this.state.enum}</span>
                        </Item>
                    </Link>
                </List>
            </div>
        )
    }
}
