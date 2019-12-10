import React, { Component } from 'react'
import axios from 'axios'
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // console.log(this.state.username,this.state.pwd);
        let url = `http://localhost:3005/users/list`;
        // let url = `http://localhost:3005/manager/list`;
        axios(url)
            .then((res) => {
                console.log(res.data.usersList.pic);
                this.setState({
                    data: res.data.usersList
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
                    <th>电话</th>
                    <th>学院</th>
                    <th>密码</th>
                </tr>

                {
                    this.state.data.map(
                        (item, idx) => <tr key={idx}>
                            <td><img src="http://localhost:3005/images/1.jpg" ></img></td>
                            <td>{item.name}</td>
                            <td>{item.tel}</td>
                            <td>{item.college}</td>
                            <td>{item.pwd}</td>
                        </tr>
                    )
                }


            </table>
        )
    }
}
