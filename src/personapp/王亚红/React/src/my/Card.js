import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import axios from 'axios';

export default class Card extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                { "key": null, "path": 'http://139.155.44.190:3005/card/null', "color": false },
                { "key": 'b1.png', "path": 'http://139.155.44.190:3005/card/b1.png', "color": false },
                { "key": 'b2.png', "path": 'http://139.155.44.190:3005/card/b2.png', "color": false },
                { "key": 'b3.png', "path": 'http://139.155.44.190:3005/card/b3.png', "color": false },
            ],
            username: '',
            card: ''
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
    }
    selected = (idx) => {
        var card = this.state.list[idx].key;
        var list = this.state.list;
        for (var i = 0; i < list.length; i++) {
            list[i].color = false;
        }
        list[idx].color = true;
        this.setState({
            card: card,
            list: list
        })
    }
    sure = () => {
        let url = `http://139.155.44.190:3005/users/changeCard?name=${this.state.username}&card=${this.state.card}`;
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
                        <Link to="/shezhi"><span className="iconfont icon-ico_leftarrow"></span></Link>
                    ]}
                >
                    <span>卡片背景选择</span>
                </NavBar>
                {
                    this.state.list.map((item, idx) => (
                        <div onClick={this.selected.bind(this, (idx))} style={{ flexDirection: 'row', alignItems: 'center', position: 'relative',width:'80%',marginLeft:'10%',marginTop:'5%' }} >
                            {
                                item.path != 'http://139.155.44.190:3005/card/null'
                                    ? <img src={item.path} style={{ width: 200, height: 100 }} />
                                    : <img style={{ width: 200, height: 100, borderColor: '#fff', borderWidth: 1, borderStyle: 'solid' }} />
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
                        <p style={{ textAlign: 'center', color: '#fff', fontSize: 16, lineHeight: '1vh' }}>确定</p>
                    </button>
                </div>
            </div>
        )
    }
}
