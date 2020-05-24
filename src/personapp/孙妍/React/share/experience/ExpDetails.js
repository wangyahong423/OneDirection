import React, { Component } from 'react';
import { NavBar, ActionSheet } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'

export default class ExpDetails extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            todo: [],
            clicked2: true,
            lid: parseInt(''),
            name: '',
            content: '',
            yonghu: [],
            pic: '',
            photo: [],
            time: new Date().toLocaleString()
        };
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        let url = `http://139.155.44.190:3005/experience/list/` + id;
        let url1 = `http://139.155.44.190:3005/learntalk/list/`;
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url4 = `http://139.155.44.190:3005/users/list`;
        axios(url3)
            .then((re) => {
                axios(url4)
                    .then((res) => {
                        res.data.map(item => {
                            if (item.name == re.data.name) {
                                this.setState({ pic: 'http://139.155.44.190:3005' + item.pic })
                            }
                        })
                        this.setState({
                            yonghu: res.data
                        })
                        console.log(res.data);
                        axios(url)
                            .then((res) => {
                                this.setState({
                                    data: res.data
                                })
                                var brr = []
                                this.state.data.map((item) => {
                                    if (item.id == id) {
                                        brr.push(item);
                                    }
                                    this.setState({
                                        data: brr
                                    })
                                })
                            })
                    })
            })
    }

    getContent = (e) => {
        this.setState({
            lid: this.props.match.params.id,
            content: e.target.value,
        })
    }
    changeColor() {
        this.setState({
            clicked2: !this.state.clicked2
        })
    }
    render() {
        return (
            <div style={{ position: 'relative' }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: 0, zIndex: 18, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/experience"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>经验详情</span>
                </NavBar>
                <div>
                    {
                        this.state.data.map((item, idx) =>
                            <div style={{ background: '#fff', color: 'black' }}>
                                <div style={{ float: "left" }}>
                                    <img src={this.state.pic} style={{ height: '7vh', width: '12vw', borderRadius: '50%', marginLeft: 15, marginTop: 9 }} />
                                </div>
                                <div>
                                </div>
                                <p style={{ marginLeft: 75, fontSize: '2.5vh', lineHeight: 2.5, marginTop: 6 }}>{item.name}</p>
                                <div style={{ marginLeft: 75, color: 'gray', fontSize: '2vw', marginTop: "-5vw" }}>{item.time}</div>
                                <p style={{ marginLeft: 25, color: 'black', marginTop: 20, fontSize: 17,marginRight:25,textIndent:'2em' }}>{item.content}</p>
                                <div style={{ width: '100%', height: '2vh', backgroundColor: 'white' }}>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        );
    }
}