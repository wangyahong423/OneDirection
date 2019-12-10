import React, { Component } from 'react'
import axios from 'axios'
export default class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // console.log(this.state.username,this.state.pwd);
        let url = `http://localhost:3005/community/list`;
        // let url = `http://localhost:3005/manager/list`;
        axios(url)
            .then((res) => {
                
                this.setState({
                    data: res.data.communityList
                })
            })
        // .catch(error => alert("账户不存在！"));
    }
    render() {
        return (
            <table>
                <tr>
                    <th>头像</th>
                    <th>名字</th>
                    
                    <th>时间</th>
                    <th>内容</th>
                </tr>

                {
                    this.state.data.map(
                        (item, idx) => <tr key={idx}>
                            <td><img src="http://localhost:3005/images/1.jpg" ></img></td>
                            <td>{item.name}</td>
                            
                            <td>{item.time}</td>
                            <td>{item.content}</td>
                        </tr>
                    )
                }


            </table>
        )
    }
}
