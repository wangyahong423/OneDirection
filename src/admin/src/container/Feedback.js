import React, { Component } from 'react'
import axios from 'axios'
export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // console.log(this.state.username,this.state.pwd);
        let url = `http://localhost:3005/feedback/list`;
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
                    <th>内容</th>
                    <th>电话</th>
                    
                    <th>时间</th>
                    
                </tr>

                {
                    this.state.data.map(
                        (item, idx) => <tr key={idx}>
                            <td>{item.content}</td>
                            <td>{item.tel}</td>
                            
                            <td>{item.time}</td>
                            
                        </tr>
                    )
                }


            </table>
        )
    }
}
