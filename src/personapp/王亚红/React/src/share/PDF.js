import React, { Component } from 'react'
import MaterialSharing from './MaterialSharing'
import { Link } from 'react-router-dom';
import '../share.css'
import axios from 'axios';

export default class PDF extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/file/list`;
        axios(url)
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div>
                    <MaterialSharing />
                </div>
                <div style={{ marginTop: '22vh' }}>
                    {
                        this.state.data.map((item) => (
                            <div className="data1">
                                <div className="iconfont icon-pdf2"></div>
                                <div className="font1">
                                    <span>{item.filepath}</span><br />
                                    <span style={{ fontSize: "1vh" }}>{item.time}</span>&nbsp;&nbsp;
                   <span style={{ fontSize: "1vh" }}>{item.name}</span>&nbsp;&nbsp;
                    </div>
                                <div className="data2">
                                    <span className="iconfont icon-collection" style={{ fontSize: "25px" }}></span><br />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to="AddFile">
                    <div style={{ position: "fixed", top: "88%", left: "80vw" }}>
                        <span className="iconfont icon-jiahao" style={{ fontSize: "8vh", color: "#37376F" }}></span>
                    </div>
                </Link>
                <div>
                    <form method="post" action="http://139.155.44.190:3005/file/addFile" encType="multipart/form-data">
                        <input type="file" name="inputFile" multiple="multiple"></input>
                        <input type="submit" value="上传"></input>
                    </form>
                </div>
            </div>
        )
    }
}
