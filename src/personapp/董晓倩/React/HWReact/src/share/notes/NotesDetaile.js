
import React, { Component } from 'react';
import { NavBar, ActionSheet } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import '../../App.css'
export default class NotesDetails extends Component {
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
        let url = `http://139.155.44.190:3005/notes/list/` + id;
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
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    
                    leftContent={[
                        <Link to="/notes"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>笔记详情</span>
                </NavBar>


                <div style={{ marginTop: '5vh' }} >
                    <div className="collegeImg1">

                    
                    {
                        this.state.data.map((item, idx) =>
                            <div style={{  color: 'black' }}>
                                <div style={{  width: '90%', height: '10vh', marginLeft: '2vh', borderRadius: 10, marginTop:'5vh'}}>
                                    <p>&nbsp;</p>
                                    <span style={{ marginTop: '-1vh', marginLeft: '2vh', fontSize: '17px' }}>标题:</span>
                                    <span style={{ marginTop: '-1vh', marginLeft: '2vh', fontSize: '15px' }}>{item.title}</span>

                                </div>
                                <div style={{  width: '90%', height: '80vh', marginLeft: '2vh', borderRadius: 10, }}>
                                    <p>&nbsp;</p>
                                    <span style={{ marginTop: '-1vh', marginLeft: '2vh', fontSize: '17px' }}>内容:</span>
                                    <span style={{ marginTop: '-1vh', marginLeft: '2vh', fontSize: '15px' }}>{item.content}</span>

                                </div>
                            </div>)
                    }
                    </div>
                </div>
            </div>
        )
    }
}