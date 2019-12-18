import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class MyFile extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            name: ''
        }
    }
    componentDidMount() {
        let url1 = `http://localhost:3005/users/getName`;
        axios(url1)
            .then((res) => {
                this.setState({
                    name: res.data.name
                })
            })
        let url = `http://localhost:3005/file/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
                var arr = [];

                this.state.data.map((item) => {
                    if (item.name == this.state.name) {
                        arr.push(item);
                    }
                    this.setState({
                        data: arr
                    })
                })
            })
    }
    delFile = (filepath) => {
        let url1 = `http://localhost:3005/file/deleteFile?filepath=${filepath}&name=${this.state.name}`;
        axios(url1)
            .then((res) => {
            })
        window.location.reload();
    }
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', position: 'fixed ', width: "100vw", top: 0, zIndex: 18, textAlign: 'center', height: '7vh' }}
                    leftContent={[
                        <Link to="/My"><span style={{ fontSize: '17px', color: 'white' }} className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>已上传的文件</span>
                </NavBar>
                <div style={{ marginTop: "7vh" }}>
                    {
                        this.state.data.map((item) => (
                            <div>
                                <div className="data1">
                                    <div style={{ float: "left" }}>
                                        <div className="iconfont icon-wenjian"></div>
                                        <div className="shoucangFont" style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap"
                                        }}>
                                            <span>{item.filepath}</span><br />
                                        </div>
                                    </div>
                                    <button style={{ height: "3vh", width: '6vh', display: "inline", margin: "3.5vh 5vw 0 12vw", float: "right", backgroundColor: "#437DFF", border: "none", borderRadius: "1vw", color: '#fff', fontSize: "1.5vh" }} onClick={this.delFile.bind(this, (item.filepath))}>删除</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
