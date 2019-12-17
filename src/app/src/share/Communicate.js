import React, { Component } from 'react'
import { NavBar, TextareaItem, List, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { createForm } from 'rc-form';
import '../App.css';
import axios from 'axios';

class Communicate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            name: '',
            time: new Date().toLocaleString(),
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
    }
    handleRegister = () => {
        if (this.state.content) {
            let url = `http://localhost:3005/learn/addLearn?content=${this.state.content}
        &name=${this.state.name}&time=${this.state.time}`;
            console.log(this.state.name)
            axios(url)
                .then((res) => {
                    console.log(555);
                    if (res.data.ok) {
                        alert(res.data.msg);
                    } else {
                        console.log(1);
                        alert(res.data.msg);
                    }
                })
        }
        else {
            alert("未填写内容")
        }
    }
    getContent = (e) => {
        this.setState({
            content: e.target.value
        })
        console.log(e.target.value)
    }
    getName = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }
    getTime = (e) => {
        this.setState({
            time: e.target.value
        })
        console.log(e.target.value)
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar style={{ backgroundColor: '#37376F', color: '#fff', position: 'sticky ', top: '0', zIndex: 10, textAlign: 'center' }}
                    leftContent={[
                        <Link to="/StudyCommunicate"><span style={{ fontSize: '15px', color: 'white' }}>取消</span></Link>
                    ]}
                    rightContent={[
                        <Link to="/StudyCommunicate"><span style={{ fontSize: '15px', color: 'white' }} onClick={this.handleRegister}>发送</span></Link>
                    ]}>
                    发布动态</NavBar>
                <List renderHeader={() => ''} onChange={this.getContent}>
                    <TextareaItem
                        {...getFieldProps('count', {
                            initialValue: '',
                        })}
                        rows={10}
                        count={500}
                    />
                </List>
            </div>
        )
    }
}
const CommunicateWrapper = createForm()(Communicate);
export default CommunicateWrapper;
