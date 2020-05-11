import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Accordion, List } from 'antd-mobile';
import '../App.css';
import axios from 'axios';
const Item = List.Item;
const Brief = Item.Brief;


export default class CollegeMajor extends Component {
    onChange = (key) => {
    }
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
        let url = `http://139.155.44.190:3005/major/list`;
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
            <div >
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/college"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                    专业
                </NavBar>
                <div className='jianjieImg'>
                    {
                        this.state.data.map((item) => (
                            <div>
                                <p style={{ fontSize: '20px', textIndent: '0.3em' }}>{item.name}</p>
                                <span style={{ marginLeft: '30px', fontSize: '15px' }}>{item.content}</span>
                            </div>
                        )
                        )}
                </div>
                <Accordion style={{ marginTop: '11vh', width: '100vw' }} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}></Accordion>
            </div>
        )
    }
}
