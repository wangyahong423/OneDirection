import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Accordion, List } from 'antd-mobile';
import '../App.css';
import axios from 'axios';
const Item = List.Item;
const Brief = Item.Brief;


export default class CollegeTeachers extends Component {
    onChange = (key) => {
        console.log(key);
    }
    constructor() {
        super();
        this.state = {
            name: '',
            college: "",
            data: [],
            todo:[]
        }
    }
    componentDidMount() {
        let url3 = `http://localhost:3005/users/getName`;
        axios(url3)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })

        console.log(this.state.name)
        let url2 = `http://localhost:3005/users/list`;
        axios(url2)
            .then((res) => {
                this.setState({
                    todo: res.data
                })
                this.state.todo.map((item)=>{
                    if(item.name == this.state.name){
                        this.setState({
                            college:item.college
                        })
                    }
                })
            })
        // this.state.todo.map((item)=>{
        //     if(item.name == this.state.name){
        //         this.setState({
        //             college:item.college
        //         })
        //     }
        // })
        let url = `http://localhost:3005/leaders/list`;
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
                console.log(this.state.college)
                console.log(this.state.name)
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
                                {/* <Accordion style={{marginTop:'11vh',width:'100vw'}} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header={item.job}>
                                    <List className="my-list">
                                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>{item.name}&emsp;{item.tel}&emsp;{item.emial}</p></List.Item>
                                    </List>
                                </Accordion.Panel>
                            </Accordion> */}
                                <p style={{ fontSize: '20px', textIndent: '0.3em' }}>{item.job}</p>
                                <span style={{ marginLeft: '30px', fontSize: '15px' }}>{item.name}</span>
                                <span style={{ marginLeft: '10px', fontSize: '15px' }}>{item.tel}</span>
                                <span style={{ marginLeft: '10px', fontSize: '15px' }}>{item.email}</span>
                            </div>
                        )
                        )}
                </div>
                <Accordion style={{ marginTop: '11vh', width: '100vw' }} accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                    {/* <Accordion.Panel header={this.state.data[0].job}>
                        <List className="my-list">
                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>{this.state.data[0].name}&emsp;{this.state.data[0].tel}&emsp;{this.state.data[0].emial}</p></List.Item>
                        </List>
                    </Accordion.Panel> */}
                    {/* <Accordion.Panel header={this.state.data[1].job}>
                        <List className="my-list">
                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>{this.state.data[1].name}&emsp;{this.state.data[1].tel}&emsp;{this.state.data[1].emial}</p></List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header={this.state.data[2].job}>
                        <List className="my-list">
                        <List.Item style={{height:'10vh',marginLeft:'5vw'}}><p>{this.state.data[2].name}&emsp;{this.state.data.tel}&emsp;{this.state.data[2].emial}</p></List.Item>
                        </List>
                    </Accordion.Panel> */}
                </Accordion>

            </div>
        )
    }
}
