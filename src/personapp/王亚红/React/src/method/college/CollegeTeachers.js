import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Accordion, List } from 'antd-mobile';
import '../../App.css'
import axios from 'axios';
const Item = List.Item;
const Brief = Item.Brief;


export default class CollegeTeachers extends Component {
    onChange = (key) => {
    }
    constructor() {
        super();
        this.state = {
            name: '',
            college: "",
            data: [],
            todo: []
        }
    }
    componentDidMount() {
        let url3 = `http://139.155.44.190:3005/users/getName`;
        let url2 = `http://139.155.44.190:3005/users/list`;
        let url = `http://139.155.44.190:3005/leaders/list`;
        axios(url3)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
                axios(url2)
                    .then((res) => {
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




    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/college"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    学院领导
                </NavBar>
                <div className='jianjieImg'>
                    {
                        this.state.data.map((item) => (
                            <div>
                                <p style={{ fontSize: '20px', textIndent: '0.3em' }}>{item.job}</p>
                                <span style={{ marginLeft: '30px', fontSize: '15px' }}>{item.name}</span>
                                <span style={{ marginLeft: '10px', fontSize: '15px' }}>{item.tel}</span>
                                <span style={{ marginLeft: '10px', fontSize: '15px' }}>{item.email}</span>
                            </div>
                        )
                        )}
                </div>
                <Accordion style={{ marginTop: '11vh', width: '100vw' }} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                </Accordion>
            </div>
        )
    }
}
