import React, { Component, AsyncStorage, DeviceEventEmitter } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar, Icon, Tabs, Carousel } from 'antd-mobile';
import axios from 'axios'
export default class Notes extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            username: '',//获取姓名
            data: [],//获取用户列表
            list: [],//获取笔记列表

        }
    }
    componentDidMount() {
        let url1 = `http://139.155.44.190:3005/users/list`;
        var url2 = `http://139.155.44.190:3005/notes/list`;
        let url3 = `http://139.155.44.190:3005/users/getName`;
        axios(url3)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
            })
        fetch(url1)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res
                });
                fetch(url2)
                    .then((res) => res.json())
                    .then((res) => {
                        var notesList = [];
                        for (var i = 0; i < res.length; i++) {
                            if (res[i].name == this.state.username) {
                                notesList.push(res[i]);
                            }
                        }
                        this.setState({ list: notesList })

                    })
            })
    }
    changeSearch = (e) => {
        if (e.target.value == "") {
            window.location.href = "http://localhost:3000/notes";
        } else {
            this.setState({
                search: e.target.value
            })
        }
    }
    clickSend = (id) => {
        let url = `http://139.155.44.190:3005/notes/select?content=${this.state.search}`;
        axios(url)
            .then((res) => {
                if (res.data.false) {
                } else {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].pic = "http://139.155.44.190:3005/" + res.data[i].pic;
                    }
                    this.setState({
                        data: res.data
                    })
                }
            })
    };
    delTie = (id) => {
        let url9 = `http://139.155.44.190:3005/notes/deleteNote?id=${id}`
        axios(url9)
          .then((res) => {
            window.location.href = "http://localhost:3000/notes"
            window.location.reload();
          })
      }
    render() {
        return (
            <div>
                <NavBar
                    style={{ width: '100%', backgroundColor: '#37376f', color: '#fff', position: 'fixed ', top: '0', zIndex: 1, height: '7vh' }}
                    leftContent={[
                        <Link to="/Share"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>笔记</span>
                </NavBar>
                <div style={{ position: "fixed", top: '7vh', width: "100vw", height: '6vh', backgroundColor: '#EFEFF4' }}>
                    <input placeholder='搜索' onChange={this.changeSearch} style={{ height: '5vh', borderRadius: '20px', border: 'none', marginTop: '0.5vh', textAlign: 'center', fontSize: '4vw', width: '85vw', float: 'left', borderRight: "none" }}></input>
                    <div onClick={this.clickSend} style={{ width: '15vw', float: 'left', height: '6vh', textAlign: 'center', lineHeight: '6vh', fontSize: '4vw' }}>搜索</div>
                </div>
                <Link to='/addnotes'>
                    <div style={{ position: "fixed", top: "85%", left: '85%' }}>
                        <span className="iconfont icon-add-sy" style={{ fontSize: "6vh", color: "#37376F" }}></span>
                    </div>
                </Link>
                <div style={{ marginTop: '15vh', }}>
                    {
                        this.state.list.map((item, idx) =>
                            
                                <div style={{ backgroundColor: '#ffffff', width: '90%', height: '10vh', marginLeft: '2vh', borderRadius: 10 }}>
                                    <p>&nbsp;</p>
                                    <Link to={`/notesdetaile/${item.id}`}>
                                    <p style={{ fontSize: '17px',color:'black', marginLeft: '2vh', fontWeight: 'bold', marginTop: '-2vh' }}>{item.show}</p>
                                    </Link>
                                    <Link to={`/notesdetaile/${item.id}`}>
                                    <p style={{ marginLeft: '2vh',color:'black' }}>{item.time}</p>
                                    </Link>
                                    <p style={{marginLeft:'48vh',marginTop:'-10vh',fontSize:'20px',color:'red'}} onClick={this.delTie.bind(this, (item.id))}>×</p>
                                </div>
                            


                        )
                    }

                </div>
            </div>
        )
    }
}
