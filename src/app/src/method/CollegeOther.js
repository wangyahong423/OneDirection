import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar,List,SearchBar,Accordion } from 'antd-mobile';
import '../App.css';
import axios from 'axios';
export default class CollegeOther extends Component {
    constructor(){
        super();
        this.state={
            college: "",
            data: [],
            name:'',
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
        let url = `http://localhost:3005/colleges/list/`;
        axios(url)
            .then((res)=>{
            this.setState({
                data:res.data
              })
              var brr=[]
            this.state.data.map((item)=>{
               if(item.college != this.state.college){
                   brr.push(item);
               }
               this.setState({
                   data:brr
               })
            })
            console.log(this.state.data)        
        })
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff',position:'fixed ',top:'0',zIndex:10,textAlign:'center',height:'7vh',width:'100vw'}}
                    leftContent={[
                        <Link to="/college"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}>
                        其他学院
                </NavBar>
                <div style={{height:'86vh'}}>
                    {
                    this.state.data.map((item)=>(
                        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header={item.college}>
                            <List className="my-list">
                                <List.Item >
                                    <textarea cols="2" rows="3" style={{width:'88vw',lineHeight:'5vh'}} >
                                    {item.history}
                                    </textarea>
                                </List.Item>
                            </List>
                            </Accordion.Panel>
                        </Accordion>
                    )
                )}
                </div>
            </div>
        )
    }
}
