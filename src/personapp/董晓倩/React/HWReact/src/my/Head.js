import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class Head extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { "key": null, "path": 'http://139.155.44.190:3005/head/null', "color": false },
                { "key": 't1.png', "path": 'http://139.155.44.190:3005/head/t1.png', "color": false },
                { "key": 't2.png', "path": 'http://139.155.44.190:3005/head/t2.png', "color": false },
                { "key": 't3.png', "path": 'http://139.155.44.190:3005/head/t3.png', "color": false },
                { "key": 't4.png', "path": 'http://139.155.44.190:3005/head/t4.png', "color": false },
                { "key": 't5.png', "path": 'http://139.155.44.190:3005/head/t5.png', "color": false },
                { "key": 't6.png', "path": 'http://139.155.44.190:3005/head/t6.png', "color": false },
                { "key": 't7.png', "path": 'http://139.155.44.190:3005/head/t7.png', "color": false },
                { "key": 't8.png', "path": 'http://139.155.44.190:3005/head/t8.png', "color": false }
            ],
            username: '',
            head: ''
        };
    }
    componentDidMount() {
        let url = `http://139.155.44.190:3005/users/getName`;
        axios(url)
            .then((res) => {
                this.setState({
                    username: res.data.name
                })
            })
        console.log('list:', this.state.list)
    }
    selected = (idx) => {
        var head = this.state.list[idx].key;
        console.log(head);
        var list = this.state.list;
        for (var i = 0; i < list.length; i++) {
            list[i].color = false;
        }
        list[idx].color = true;
        this.setState({
            head: head,
            list: list
        })
    }
    sure = () => {
        let url = `http://139.155.44.190:3005/users/changeHead?name=${this.state.username}&head=${this.state.head}`;
        fetch(url)
            .then(res => res.json())
            .then((res) => {

            })
    }
    render() {
        return (
            <div style={{ backgroundColor: '#fff' }}>
                <NavBar
                    style={{ backgroundColor: '#37376F', color: '#fff', zIndex: 10, textAlign: 'center', height: '7vh', position: 'sticky', top: 0 }}
                    leftContent={[
                        <Link to="/My"><span className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>头像框选择</span>
                </NavBar>
                {
                    this.state.list.map((item, idx) => (
                        <div onClick={this.selected.bind(this, (idx))} style={{ flexDirection: 'row', alignItems: 'center', position: 'relative',width:'80%',marginLeft:'10%',marginTop:'5%' }} >
                            {
                                item.path != 'http://139.155.44.190:3005/head/null'
                                    ? <img src={item.path} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    : <img style={{ width: 100, height: 100, borderRadius: 50 }} />
                            }
                            <div style={{ flexDirection: 'row', alignItems: 'center', display: 'inline-block', position: 'absolute', top: 25,left:'60%' }}>
                                <p style={{ display: 'inline-block' }}>使用此头像框 </p>
                                <div style={item.color ? { width: 10, height: 10, borderRadius: '50%', borderColor: '#000', backgroundColor: 'red', borderWidth: 1, borderStyle: 'solid', display: 'inline-block' } : { width: 10, height: 10, borderRadius: '50%', borderColor: '#000', borderWidth: 1, borderStyle: "solid", display: 'inline-block' }}></div>
                            </div>
                        </div>
                    ))}
                <div style={{ width: '100%', height: '10vh', backgroundColor: '#fff' }}></div>
                <div style={{ width: '100%', height: "8vh", position: 'fixed', backgroundColor: '#fff', bottom: 0 }}>
                    <button onClick={this.sure} style={{ width: "40%", height: '6vh', marginLeft: '30%', backgroundColor: "#37376F", borderRadius: 10 }}>
                        <p style={{ textAlign: 'center', color: '#fff', fontSize: 16, lineHeight: '1vh'}}>确定</p>
                    </button>
                </div>
            </div>
        )
    }
}
