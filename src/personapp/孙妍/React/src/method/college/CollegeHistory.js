import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import '../../App.css'
import axios from 'axios'
export default class CollegeHistory extends Component {
    constructor() {
        super();
        this.state = {
            college: "",
            data: [],
            name: '',
            todo: []
        }
    }
    componentDidMount() {
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url2 = `http://139.155.44.190:3005/users/list`;
        let url = `http://139.155.44.190:3005/colleges/list/`;
        axios(url3)
            .then((res) => {
                console.log(1)
                this.setState({
                    name: res.data.name
                })
                axios(url2)
                    .then((res) => {
                        console.log(2)
                        this.setState({
                            todo: res.data
                        })
                        this.state.todo.map((item) => {
                            if (item.name == this.state.name) {
                                this.setState({
                                    college: item.college
                                })
                            }
                        })
                        axios(url)
                            .then((res) => {
                                console.log(3)
                                this.setState({
                                    data: res.data
                                })
                                var brr = []
                                this.state.data.map((item) => {
                                    if (item.college == this.state.college) {
                                        brr.push(item);
                                    }
                                    this.setState({
                                        data: brr
                                    })
                                })
                            })
                    })
            })

        //得到用户列表




    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/college"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    历史介绍
                </NavBar>
                {
                    this.state.data.map((item) => (
                        <div className='jianjieImg2'>
                            <div className='lishiBox' >
                                <div className='cword'>
                                    <p>{item.history}</p>
                                </div>
                            </div>
                        </div>
                    )
                    )}
            </div>
        )
    }
}


