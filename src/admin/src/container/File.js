import React, { Component } from 'react'
import axios from 'axios'
export default class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // console.log(this.state.username,this.state.pwd);
        let url = `http://localhost:3005/file/list`;
        // let url = `http://localhost:3005/manager/list`;
        axios(url)
            .then((res) => {
                
                this.setState({
                    data: res.data
                })
            })
        // .catch(error => alert("账户不存在！"));
    }
    render() {
        return (
            <table>
                <tr>
                    <th>文件名</th>
                    <th>名字</th>
                    
                    <th>时间</th>
                    <th>类型</th>
                </tr>

                {
                    this.state.data.map(
                        (item, idx) => <tr key={idx}>
                            <td>{item.filepath}</td>
                            <td>{item.name}</td>
                            
                            <td>{item.time}</td>
                            <td>{item.type}</td>
                        </tr>
                    )
                }


            </table>
        )
    }
}
